"use client"

import {
    Database,
    BarChart3,
    Globe,
    Clock,
    Unlock,
    Code2,
    Zap,
    ShieldCheck,
    Key,
    MessageSquare,
    TrendingUp,
    History,
    CheckCircle2,
    ArrowRight,
    Github,
    Mail,
    User,
    Wallet,
    CreditCard as CardIcon,
    Plus,
    ArrowUpRight,
    Heart
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

// --- Section 2: Data Assets / Products ---
export function DataProducts() {
    const products = [
        { name: "Market Prices", coverage: "50+ Countries", frequency: "Real-time", access: "Premium", icon: Globe },
        { name: "Company Fundamentals", coverage: "Global", frequency: "Daily", access: "Free", icon: Database },
        { name: "Transaction Simulations", coverage: "Cross-border", frequency: "On-demand", access: "Premium", icon: Zap },
        { name: "Regional Datasets", coverage: "Africa & Asia", frequency: "Weekly", access: "Premium", icon: BarChart3 },
    ]

    return (
        <section id="products" className="py-24 container px-4 mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2">Technical Data Assets</h2>
                <p className="text-muted-foreground">High-fidelity datasets structured for institutional use.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((p, i) => (
                    <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <p.icon className="h-8 w-8 text-primary mb-4" />
                            <CardTitle className="text-xl">{p.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2"><Globe className="h-3 w-3" /> Coverage</span>
                                <span className="font-medium">{p.coverage}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2"><Clock className="h-3 w-3" /> Frequency</span>
                                <span className="font-medium">{p.frequency}</span>
                            </div>
                            <div className="pt-2">
                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${p.access === 'Free' ? 'bg-secondary text-secondary-foreground' : 'bg-primary/20 text-primary'}`}>
                                    {p.access}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

// --- Section 3: API Usage Dashboard ---
export function APIDashboard() {
    return (
        <section id="api" className="py-24 bg-muted/30 border-y border-border/50">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            <Code2 className="mr-2 h-3 w-3" /> API First Infrastructure
                        </div>
                        <h2 className="text-3xl font-bold">Built for Developers</h2>
                        <p className="text-muted-foreground text-lg">
                            Our infrastructure is designed for scale. Over 1,200 registered developers are already building on our v0 endpoints.
                        </p>
                        <div className="flex items-center gap-6">
                            <div>
                                <div className="text-2xl font-bold text-foreground">99.98%</div>
                                <div className="text-xs text-muted-foreground uppercase">System Uptime</div>
                            </div>
                            <div className="h-10 w-[1px] bg-border" />
                            <div>
                                <div className="text-2xl font-bold text-foreground">1,240</div>
                                <div className="text-xs text-muted-foreground uppercase">Reg. Developers</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-950 rounded-xl border border-border overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-muted-foreground font-mono">GET /v0/market/data</span>
                        </div>
                        <div className="p-6 font-mono text-sm overflow-x-auto">
                            <pre className="text-emerald-400">
                                {`{
  "status": "success",
  "data": {
    "ticker": "INTL.FX",
    "price": 1240.50,
    "currency": "USD",
    "region": "East Africa",
    "delta_24h": "+1.2%",
    "last_updated": "2024-03-20T10:00:00Z"
  }
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 4: Portfolio Simulator ---
export function PortfolioSimulator() {
    const [allocation, setAllocation] = useState(5000)

    return (
        <section id="simulator" className="py-24 container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Investment Simulator</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Experience our data in action. Simulate global allocations using real-time (v0-safe) market data.
                    </p>
                    <div className="space-y-6 bg-card/50 p-6 rounded-xl border border-border">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Virtual Capital Allocation</label>
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="1000"
                                value={allocation}
                                onChange={(e) => setAllocation(parseInt(e.target.value))}
                                className="w-full accent-primary bg-secondary h-2 rounded-lg appearance-none"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>$1k</span>
                                <span>${(allocation / 1000).toFixed(0)}k</span>
                                <span>$100k</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-background rounded-lg border border-border">
                                <span className="text-xs text-muted-foreground block mb-1">Estimated P/L (Simulated)</span>
                                <span className="text-xl font-bold text-primary">+$ {(allocation * 0.082).toLocaleString()}</span>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border">
                                <span className="text-xs text-muted-foreground block mb-1">Markets Covered</span>
                                <span className="text-xl font-bold uppercase">Emerging</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-4 italic">
                        * This is a simulation based on historical data. No real money is involved. Verified data is for educational purposes.
                    </p>
                </div>
                <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden">
                    {/* Mock Chart Visualization */}
                    <div className="absolute inset-0 flex items-end p-8 gap-4">
                        {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex-1 bg-primary/40 rounded-t-sm"
                            />
                        ))}
                    </div>
                    <BarChart3 className="h-12 w-12 text-primary absolute opacity-20" />
                </div>
            </div>
        </section>
    )
}

// --- Section 5: Trust & Transparency ---
export function TrustTransparency() {
    return (
        <section className="py-24 bg-zinc-950 border-y border-white/5">
            <div className="container px-4 mx-auto text-center max-w-4xl">
                <h2 className="text-3xl font-bold mb-12">Transparency First</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold">Verified Sources</h3>
                        <p className="text-sm text-muted-foreground">Every data point is cross-verified across at least 3 independent sources before entry into the structured index.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Key className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold">Encryption by Default</h3>
                        <p className="text-sm text-muted-foreground">All data transmission and storage use enterprise-grade AES-256 encryption and JWT-based authentication.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Database className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold">Public Documentation</h3>
                        <p className="text-sm text-muted-foreground">Our methodology is transparent. We don't hide our math. Read our public docs on data collection.</p>
                    </div>
                </div>
                <div className="mt-16 p-4 rounded-lg bg-orange-500/5 border border-orange-500/20 max-w-2xl mx-auto">
                    <p className="text-xs text-orange-400 font-medium">
                        DISCLAIMER: This is a data platform, not a broker. We provide structure and intelligence. We do not facilitate trades or hold customer funds.
                    </p>
                </div>
            </div>
        </section>
    )
}

// --- Section 6: Roadmap ---
export function Roadmap() {
    const steps = [
        { version: "v0", status: "Current", title: "Data Aggregation & Simulation", features: ["Global Indexing", "Portfolio Simulator", "Developer Sandbox"] },
        { version: "v1", status: "Upcoming", title: "Real-time APIs & Partnerships", features: ["Live Webhook Subscriptions", "Institutional Nodes", "Direct Bank Feeds"] },
        { version: "v2", status: "Vision", title: "Institutional Access & Analytics", features: ["Advanced ML Predictions", "B2B Licensing", "Universal Ledger Integration"] },
    ]

    return (
        <section id="roadmap" className="py-24 container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Development Roadmap</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -z-10" />
                {steps.map((s, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-border relative">
                        <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.version === 'v0' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                            }`}>
                            {s.version} — {s.status}
                        </div>
                        <h3 className="text-xl font-bold mt-4 mb-4">{s.title}</h3>
                        <ul className="space-y-2">
                            {s.features.map((f, j) => (
                                <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

// --- Section 7: Early Investor / Supporter ---
export function InvestorCTA() {
    return (
        <section className="py-24 bg-primary/5 border-y border-primary/10">
            <div className="container px-4 mx-auto text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-6">Become an Early Supporter</h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    Interested in the future of global investment data? Join our elite group of early supporters to help shape the platform.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                    {[
                        "Early API Beta Access",
                        "Public Contributor Credit",
                        "1-on-1 Strategy Calls",
                        "Direct Feature Influence"
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="font-medium">{text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8 py-6 text-lg font-bold group">
                        Express Interest <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

// --- Section 8: Activity Feed ---
export function ActivityFeed() {
    const activities = [
        { event: "New dataset added", details: "Rwanda Market Prices", time: "2 min ago" },
        { event: "API Uptime Status", details: "99.98% / week", time: "1 hour ago" },
        { event: "New user joined", details: "Analytics Partner from Kenya", time: "3 hours ago" },
        { event: "Infrastructure Update", details: "New edge node in Lagos", time: "5 hours ago" },
    ]

    return (
        <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
            <div className="bg-card shadow-2xl rounded-xl border border-border w-80 overflow-hidden">
                <div className="px-4 py-2 border-b border-border bg-muted/30 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <TrendingUp className="h-3 w-3 text-primary animate-pulse" /> Live Activity
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto">
                    {activities.map((a, i) => (
                        <div key={i} className="space-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-bold text-foreground">{a.event}</span>
                                <span className="text-[9px] text-muted-foreground italic">{a.time}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-tight">{a.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- Section 9: Founder Bio ---
export function FounderBio() {
    return (
        <section id="founder" className="py-24 container px-4 mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-zinc-800 border-4 border-primary/20 flex items-center justify-center p-2">
                        <div className="w-full h-full rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
                            {/* User Avatar Placeholder */}
                            <User className="h-20 w-20 text-zinc-500" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">The Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            "Built at Rwanda Coding Academy by a systems-focused software engineer. I saw the friction in crossing borders—both for people and capital. This platform is my contribution to making global markets actually accessible."
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4 font-mono text-xs">
                            <span className="bg-muted px-2 py-1 rounded border border-border text-muted-foreground">Next.js 15</span>
                            <span className="bg-muted px-2 py-1 rounded border border-border text-muted-foreground">Supabase</span>
                            <span className="bg-muted px-2 py-1 rounded border border-border text-muted-foreground">PostgreSQL</span>
                            <span className="bg-muted px-2 py-1 rounded border border-border text-muted-foreground">TypeScript</span>
                            <span className="bg-muted px-2 py-1 rounded border border-border text-muted-foreground">Framer Motion</span>
                        </div>
                        <div className="pt-6 flex gap-4">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Github className="h-4 w-4" /> GitHub
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Mail className="h-4 w-4" /> Message Founder
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 10: Funding Section ---
export function FundingSection({ onPaymentInit }: { onPaymentInit: (method: string) => void }) {
    const transactions = [
        { id: "#TX-9021", date: "Jan 12, 2024", amount: "+$2,500.00", status: "Completed", type: "Deposit" },
        { id: "#TX-8842", date: "Jan 08, 2024", amount: "-$124.50", status: "Completed", type: "Purchase" },
        { id: "#TX-8711", date: "Jan 05, 2024", amount: "+$500.00", status: "Completed", type: "Deposit" },
    ]

    return (
        <section id="funding" className="py-24 container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    <Heart className="h-3 w-3 fill-current" /> Support the Vision
                </div>
                <h2 className="text-4xl font-bold tracking-tight">Fuel the Startup Rise</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    We're building the infrastructure for a more transparent global market.
                    Join us on this journey by providing compassionate funding to accelerate our deployment.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Wallet className="h-5 w-5 text-primary" /> Compassionate Funding
                        </CardTitle>
                        <CardDescription>Directly support the development and scaling of the Market Truth engine.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4">
                                <motion.div
                                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="h-2 w-2 rounded-full bg-primary"
                                />
                            </div>
                            <div className="relative z-10">
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Current Contribution Balance</span>
                                <div className="text-5xl font-mono font-bold mt-2 text-foreground">$ 12,450.00</div>
                                <p className="text-xs text-muted-foreground mt-4 italic">
                                    Your support fuels real-time indexing and institutional-grade data accuracy.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Select Payment Method</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { name: "Credit Card", icon: CardIcon, id: 'credit_card' },
                                    { name: "Debit Card", icon: CardIcon, id: 'debit_card' },
                                    { name: "PayPal", icon: Plus, id: 'paypal' }, // Using Plus as placeholder for PayPal or specific icon
                                ].map((method, i) => (
                                    <button
                                        key={i}
                                        onClick={() => onPaymentInit(method.name)}
                                        className="p-4 rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all text-left flex flex-col gap-3 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowUpRight className="h-3 w-3 text-primary" />
                                        </div>
                                        <method.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="text-sm font-bold">{method.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Recent Support Log</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {transactions.map((tx, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <div className="space-y-1">
                                        <div className="font-bold">{tx.type}</div>
                                        <div className="text-[10px] text-muted-foreground">{tx.date} • {tx.id}</div>
                                    </div>
                                    <div className={`font-mono font-bold ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-foreground'}`}>
                                        {tx.amount}
                                    </div>
                                </div>
                            ))}
                            <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-primary">
                                View Full Log <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
