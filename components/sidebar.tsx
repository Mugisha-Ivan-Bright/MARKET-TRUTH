"use client"

import {
    BarChart3,
    Globe,
    Code2,
    Zap,
    ShieldCheck,
    TrendingUp,
    User,
    CheckCircle2,
    Info,
    Calendar,
    Layers,
    PanelLeftClose,
    PanelLeftOpen
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"

interface SidebarProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
    user?: any;
}

export function Sidebar({ activeSection, onSectionChange, user }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    // Auto-collapse on smaller screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsCollapsed(true)
            } else {
                setIsCollapsed(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const primaryItems = [
        { id: "overview", label: "Overview", icon: TrendingUp },
        { id: "products", label: "Data", icon: Globe },
        { id: "api", label: "API", icon: Code2 },
        { id: "simulator", label: "Simulator", icon: Zap },
    ]

    const visionItems = [
        { id: "roadmap", label: "Roadmap", icon: Calendar },
        { id: "trust", label: "Trust", icon: ShieldCheck },
        { id: "founder", label: "About", icon: Info },
    ]

    const actionItems = [
        { id: "profile", label: "Profile", icon: User },
        { id: "early-access", label: "Early Access", icon: CheckCircle2 },
    ]

    return (
        <aside
            className={cn(
                "border-r border-border bg-card/30 flex flex-col h-screen fixed top-0 transition-all duration-300 z-40 self-start",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            <div className={cn(
                "p-6 flex items-center justify-between border-b border-border/50 h-[73px]",
                isCollapsed && "px-4 justify-center"
            )}>
                {!isCollapsed && (
                    <Link href="/" className="font-sans font-bold text-xl text-foreground tracking-tight hover:opacity-80 transition-opacity truncate">
                        MARKET TRUTH™
                    </Link>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors"
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
                </button>
            </div>

            <div className="p-4 space-y-8 flex-1 overflow-y-auto no-scrollbar">
                <div className="space-y-1">
                    {!isCollapsed && <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest px-3 mb-2">Platform</p>}
                    {primaryItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            {...item}
                            isActive={activeSection === item.id}
                            onClick={() => onSectionChange(item.id)}
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </div>

                <div className="space-y-1">
                    {!isCollapsed && <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest px-3 mb-2">Vision</p>}
                    {visionItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            {...item}
                            isActive={activeSection === item.id}
                            onClick={() => onSectionChange(item.id)}
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </div>

                <div className="space-y-1">
                    {!isCollapsed && <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest px-3 mb-2">Account</p>}
                    {actionItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            {...item}
                            isActive={activeSection === item.id}
                            onClick={() => onSectionChange(item.id)}
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </div>
            </div>

            {user && (
                <div className={cn(
                    "p-4 border-t border-border/50 bg-muted/20",
                    isCollapsed && "px-2 flex justify-center"
                )}>
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                            {user.email?.substring(0, 2).toUpperCase()}
                        </div>
                        {!isCollapsed && (
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs font-bold truncate">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                                <span className="text-[10px] text-muted-foreground truncate">{user.email}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </aside>
    )
}

function SidebarItem({ label, icon: Icon, isActive, onClick, isCollapsed }: { label: string, icon: any, isActive: boolean, onClick: () => void, isCollapsed: boolean }) {
    return (
        <button
            onClick={onClick}
            title={isCollapsed ? label : ""}
            className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all group",
                isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed && "justify-center px-0"
            )}
        >
            <Icon className={cn(
                "h-5 w-5 transition-colors shrink-0",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
            )} />
            {!isCollapsed && <span className="truncate">{label}</span>}
        </button>
    )
}
