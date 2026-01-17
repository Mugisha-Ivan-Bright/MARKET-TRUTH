
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, TrendingUp, Users } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function SubscriptionSection() {
    return (
        <SectionWrapper id="subscribe" className="py-24 bg-background border-t border-border">
            <div className="container px-4 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Value Prop / Key Insights */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Zap className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Instant Alerts</h3>
                                <p className="text-muted-foreground mt-1">Get notified the second a high-margin item drops below wholesale cost.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Weekly Market Reports</h3>
                                <p className="text-muted-foreground mt-1">Curated analysis of the top 50 trending products, delivered every Monday.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Community Access</h3>
                                <p className="text-muted-foreground mt-1">Join 15,000+ smart sellers sharing real-time receipts and leads.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Subscription Form */}
                    <div className="bg-muted/10 p-8 md:p-12 rounded-2xl border border-border order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Join the Inner Circle</h2>
                        <p className="text-muted-foreground mb-8">
                            Don&#39;t trade in the dark. Subscribe to get our free &#34;Arbitrage Starter Kit&#34; and daily price intelligence.
                        </p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                placeholder="Enter your email address"
                                className="bg-background border-border h-12 text-lg"
                            />
                            <Button className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                                Get Free Logic
                            </Button>
                            <p className="text-xs text-muted-foreground text-center pt-2">
                                We respect your inbox. Unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
