"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    TrendingUp,
    LogOut,
    Package,
    CreditCard,
    Code2,
    Zap,
    Globe,
    ShieldCheck,
    Info,
    Calendar,
    CheckCircle2
} from "lucide-react"
import {
    DataProducts,
    APIDashboard,
    PortfolioSimulator,
    TrustTransparency,
    Roadmap,
    FounderBio,
    FundingSection
} from "@/components/dashboard-sections"
import { Sidebar } from "@/components/sidebar"
import { MessageSection } from "@/components/message-section"
import { motion } from "framer-motion"
import { ProfileSection } from "@/components/profile-section"
import { TransactionController } from "@/components/transaction-controller"

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [activeSection, setActiveSection] = useState("overview")
    const [isPaymentOpen, setIsPaymentOpen] = useState(false)
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
    const router = useRouter();

    const handlePaymentInit = (method: string) => {
        setSelectedMethod(method)
        setIsPaymentOpen(true)
    }

    useEffect(() => {
        const initAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);

            const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
                setUser(session?.user ?? null);
            });

            return () => listener.subscription.unsubscribe();
        };

        initAuth();
    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            // No sticky header anymore, sidebar is full height
            const offset = 40;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    // Handle hydration by rendering a consistent structure
    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <TrendingUp className="h-12 w-12 text-primary opacity-50" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Initializing V0 Dashboard...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex overflow-x-hidden">
            {/* Minimal Sidebar - The Map */}
            <div className={'w-20 md:w-64'}>
                <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} user={user} />

            </div>

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-10 space-y-24 max-w-5xl mx-auto overflow-auto scroll-smooth">

                {/* 1. Overview */}
                <section id="overview" className="space-y-8 pt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold tracking-tight">Platform Overview</h1>
                            <p className="text-muted-foreground mt-2">Real-time health and growth metrics for the global data engine.</p>
                        </div>
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [1, 0.9, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Button
                                onClick={() => scrollToSection('funding')}
                                className="bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-transform"
                            >
                                Fund Now
                            </Button>
                        </motion.div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="bg-card/50 border-border/50">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Active Sim. Assets</CardTitle>
                                    <Zap className="h-4 w-4 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">14</div>
                                <p className="text-[10px] text-emerald-500 font-bold mt-1 uppercase tracking-wider">+2 Added Today</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/50 border-border/50">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-widest">API Status</CardTitle>
                                    <Code2 className="h-4 w-4 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">UP</div>
                                <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-wider">99.98% / week</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/50 border-border/50">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Datasets</CardTitle>
                                    <Globe className="h-4 w-4 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold italic text-primary">2,500+</div>
                                <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-wider">Structured Assets</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/50 border-border/50">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Global Scan</CardTitle>
                                    <Package className="h-4 w-4 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">52</div>
                                <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-wider">Markets Active</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* 2. Data Products */}
                <section id="products">
                    <DataProducts />
                </section>

                {/* 3. API Dashboard */}
                <section id="api">
                    <APIDashboard />
                </section>

                {/* 4. Simulator */}
                <section id="simulator">
                    <PortfolioSimulator />
                </section>

                {/* 5. Roadmap */}
                <section id="roadmap">
                    <Roadmap />
                </section>

                {/* 6. Funding Section */}
                <section id="funding">
                    <FundingSection onPaymentInit={handlePaymentInit} />
                </section>

                {/* 6. Trust */}
                <section id="trust">
                    <TrustTransparency />
                </section>

                {/* 7. About/Founder */}
                <section id="founder">
                    <FounderBio />
                </section>

                {/* New: Profile Section */}
                <section id="profile">
                    <ProfileSection user={user} />
                </section>

                {/* 8. Early Access / Feedback */}
                <section id="early-access" className="py-20 border-t border-border">
                    <div className="mb-12 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Express Early Interest</h2>
                        <p className="text-muted-foreground">Join our institutional beta or suggest a feature for the next release.</p>
                    </div>
                    <MessageSection />
                </section>

                <TransactionController
                    isOpen={isPaymentOpen}
                    onClose={() => setIsPaymentOpen(false)}
                    paymentMethod={selectedMethod}
                />
            </main>
        </div>
    )
}
