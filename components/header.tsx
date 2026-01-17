
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, User, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SearchDialog } from "@/components/search-dialog"
import { supabase } from "@/lib/supabase"
import { UserProfile } from "@/components/user-profile"

export function Header() {
    const [hidden, setHidden] = React.useState(false)
    const { scrollY } = useScroll()
    const lastScrollY = React.useRef(0)
    const pathname = usePathname()
    const [user, setUser] = React.useState<any>(null)

    React.useEffect(() => {
        const initAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);

            const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
                setUser(session?.user ?? null);
            });

            return () => listener.subscription.unsubscribe();
        };

        initAuth();
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        lastScrollY.current = latest
    })

    // Smooth scroll handler for anchor links on home page
    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        // Only intercept if we are on the home page and it's an anchor link
        if (pathname === "/" && id.startsWith("#")) {
            e.preventDefault()
            const element = document.getElementById(id.substring(1))
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    const navItems = [
        { name: "Home", href: "/", id: "#hero" }, // Using ID for scroll if on home
        { name: "Trends", href: "/trends", id: "#trends" }, // Link to page, or section
        { name: "Calculator", href: "/calculator", id: "#calculator" },
        { name: "Data", href: "/data", id: "#data" },
        { name: "Help", href: "/help", id: "#help" }
    ]

    // Helper to determine if link is active
    const isActive = (href: string) => pathname === href

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-background/80 backdrop-blur-md border-b border-border flex items-center px-6 justify-between"
        >
            {/* Logo */}
            <Link href="/" className="font-sans font-bold text-2xl text-foreground tracking-tight hover:opacity-80 transition-opacity">
                MARKET TRUTH™
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary decoration-2 underline-offset-4",
                            isActive(item.href) ? "text-primary underline" : "text-muted-foreground"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
                <SearchDialog buttonOnly />

                {user ? (
                    <UserProfile user={user} />
                ) : (
                    <Link href="/login" aria-label="Login" className="hidden md:flex">
                        <button className="p-2 hover:bg-muted rounded-full text-muted-foreground transition-colors hover:text-foreground">
                            <User className="h-5 w-5" />
                        </button>
                    </Link>
                )}
                <Link href="/pricing" className="hidden md:flex">
                    <Button className="h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm font-medium">
                        Upgrade
                    </Button>
                </Link>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-[#0B0F14] border-l border-[#1F2937] text-white">
                        <div className="flex flex-col space-y-6 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-[#16A34A]",
                                        isActive(item.href) ? "text-[#16A34A]" : "text-[#8A94A6]"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-[#1F2937] my-4" />
                            {user ? (
                                <div className="flex flex-col space-y-4 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            {user.email?.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold">{user.email?.split('@')[0]}</span>
                                            <span className="text-xs text-muted-foreground">Early Supporter</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => supabase.auth.signOut().then(() => setUser(null))}
                                        className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive border-border/50"
                                    >
                                        <LogOut className="h-4 w-4" /> Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <Link href="/login" className="flex items-center gap-2 text-[#E6EAF0] hover:text-[#16A34A]">
                                    <User className="h-5 w-5" /> Login
                                </Link>
                            )}
                            <Link href="/pricing">
                                <Button className="w-full bg-[#16A34A] text-white hover:bg-[#16A34A]/90">
                                    Upgrade Plan
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    )
}
