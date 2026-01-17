
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, User } from "lucide-react"

export function Navbar() {
    return (
        <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">
                        Market Intel Insider
                    </span>
                </Link>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search could go here */}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Get Access
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    )
}
