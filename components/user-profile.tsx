"use client"

import {
    User,
    LogOut,
    ShieldCheck,
    Zap,
    Code2,
    Globe,
    Settings,
    HelpCircle,
    TrendingUp
} from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface UserProfileProps {
    user: any;
}

export function UserProfile({ user }: UserProfileProps) {
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push("/")
        router.refresh()
    }

    const initials = user?.email?.substring(0, 2).toUpperCase() || "V0"

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden border border-border/50 hover:border-primary/50 transition-colors">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.email || "User"} />
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">{initials}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-card border-border shadow-2xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-bold leading-none">{user?.user_metadata?.full_name || user?.email?.split('@')[0]}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-border/50" />

                <DropdownMenuGroup>
                    <div className="px-2 py-1.5 space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Account Level</span>
                            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Developer</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pb-2">
                            <div className="bg-muted/30 p-2 rounded border border-border/50">
                                <span className="block text-[9px] text-muted-foreground uppercase font-bold">API Calls</span>
                                <span className="text-sm font-bold">143</span>
                            </div>
                            <div className="bg-muted/30 p-2 rounded border border-border/50">
                                <span className="block text-[9px] text-muted-foreground uppercase font-bold">Sims</span>
                                <span className="text-sm font-bold">12</span>
                            </div>
                        </div>
                    </div>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-border/50" />

                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer focus:bg-primary/10 focus:text-primary transition-colors">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer focus:bg-primary/10 focus:text-primary transition-colors">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        <span>Support & Docs</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-border/50" />

                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive transition-colors font-bold"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>SIGN OUT</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
