"use client"

import {
    User,
    Mail,
    ShieldCheck,
    Zap,
    Code2,
    Globe,
    Activity,
    Lock,
    LogOut,
    Trash2,
    ExternalLink,
    HelpCircle,
    FileText,
    TrendingUp,
    CheckCircle2,
    Database,
    Clock
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export function ProfileSection({ user }: { user: any }) {
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push("/")
        router.refresh()
    }

    if (!user) return null

    return (
        <section id="profile" className="space-y-12 py-10">
            {/* 1. Account Overview */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Account Overview</h2>
                <Card className="bg-card/50 border-border/50 overflow-hidden">
                    <CardHeader className="bg-muted/30 border-b border-border/50">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                                {user.email?.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <CardTitle className="text-xl">{user.user_metadata?.full_name || user.email?.split('@')[0]}</CardTitle>
                                <CardDescription>{user.email}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Account Type</p>
                                <p className="font-medium">Early Supporter</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Status</p>
                                <p className="font-medium">Active</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 2. Usage Summary */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Usage Summary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <UsageCard title="API Calls" value="1,240" subValue="This Month" icon={Code2} />
                    <UsageCard title="Datasets" value="42" subValue="Accessed" icon={Database} />
                    <UsageCard title="Simulations" value="12" subValue="Run" icon={Zap} />
                    <UsageCard title="Last Active" value="Just Now" subValue="Timestamp" icon={Clock} />
                </div>
            </div>

            {/* 3. Access & Limits */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Access & Limits</h2>
                <Card className="bg-card/50 border-border/50">
                    <CardContent className="grid md:grid-cols-3 gap-6 p-6">
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Access Tier</p>
                            <p className="text-lg font-bold text-primary">Early Access</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">API Rate Limit</p>
                            <p className="text-lg font-bold">10k / Month</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Data Scope</p>
                            <p className="text-lg font-bold">Global Markets</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 4. Security & Auth Info */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Security & Auth Info</h2>
                <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-6 space-y-6">
                        <div className="flex items-center justify-between py-2 border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <Lock className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium">Login Method</p>
                                    <p className="text-xs text-muted-foreground">Magic Link / OAuth</p>
                                </div>
                            </div>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Secure</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button variant="outline" onClick={handleSignOut} className="gap-2 text-destructive border-destructive/20 hover:bg-destructive/10">
                                <LogOut className="h-4 w-4" /> Sign Out
                            </Button>
                            <Button variant="link" className="text-muted-foreground hover:text-destructive text-sm px-0 h-auto justify-start">
                                <Trash2 className="h-4 w-4 mr-2" /> Delete Account (Request)
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 5. Support & Feedback */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Support & Feedback</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    <SupportLink label="Contact Support" sub="support@markettruth.com" icon={Mail} />
                    <SupportLink label="Feature Request" sub="Feedback form" icon={HelpCircle} />
                    <SupportLink label="Documentation" sub="v0.markettruth.com/docs" icon={FileText} />
                </div>
            </div>

            {/* 6. Legal / Transparency */}
            <div className="pt-12 border-t border-border/50">
                <div className="flex flex-wrap gap-8 text-xs text-muted-foreground">
                    <a href="/terms" className="hover:text-foreground transition-colors">Terms of Use</a>
                    <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    <a href="/data" className="hover:text-foreground transition-colors">Data Methodology & Disclaimer</a>
                    <p className="ml-auto">© 2026 MARKET TRUTH™</p>
                </div>
            </div>
        </section>
    )
}

function UsageCard({ title, value, subValue, icon: Icon }: any) {
    return (
        <Card className="bg-card/30 border-border/50">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{title}</p>
                </div>
                <p className="text-[9px] text-muted-foreground italic">{subValue}</p>
            </CardContent>
        </Card>
    )
}

function SupportLink({ label, sub, icon: Icon }: any) {
    return (
        <button className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors text-left group">
            <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </div>
            <div>
                <p className="text-sm font-bold">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
        </button>
    )
}
