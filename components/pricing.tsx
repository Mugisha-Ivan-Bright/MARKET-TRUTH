
"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

export function Pricing() {
    return (
        <section className="bg-background py-16 border-t border-border">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground">Transparency Tiers</h2>
                    <p className="text-muted-foreground mt-2">Professional market data. No fluff.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="border-border shadow-sm bg-card h-full">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl text-foreground">BASIC</CardTitle>
                                <CardDescription className="text-muted-foreground">Essential retail data.</CardDescription>
                                <div className="mt-4 text-3xl font-bold text-foreground">$0<span className="text-base font-normal text-muted-foreground">/month</span></div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Product Search</span></li>
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Retail Prices</span></li>
                                    <li className="flex gap-2 items-center text-muted-foreground"><X className="h-4 w-4" /> <span>Wholesale Estimates</span></li>
                                    <li className="flex gap-2 items-center text-muted-foreground"><X className="h-4 w-4" /> <span>Margin Analysis</span></li>
                                    <li className="flex gap-2 items-center text-muted-foreground"><X className="h-4 w-4" /> <span>Price Alerts</span></li>
                                </ul>
                                <Link href="/signup">
                                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Get Started</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="border-primary bg-card relative shadow-md h-full">
                            <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] uppercase font-bold px-2 py-1 rounded-bl-md">Recommended</div>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl text-primary">PRO ANALYST</CardTitle>
                                <CardDescription className="text-muted-foreground">Full market intelligence.</CardDescription>
                                <div className="mt-4 text-3xl font-bold text-foreground">$9<span className="text-base font-normal text-muted-foreground">/month</span></div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Everything in Basic</span></li>
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Wholesale Estimates</span></li>
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Margin Analysis</span></li>
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Price Alerts</span></li>
                                    <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-primary" /> <span className="text-foreground">Export Reports</span></li>
                                </ul>
                                <Link href="/signup?plan=pro">
                                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Start Free Trial</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
