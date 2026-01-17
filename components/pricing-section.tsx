
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false)

    return (
        <section id="pricing" className="container py-12 md:py-24 lg:py-32 space-y-8 px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Insider Data</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stop wondering if you're overpaying. Start knowing.
                </p>
            </div>

            <div className="flex justify-center items-center space-x-4">
                <Label htmlFor="billing-toggle" className={!isAnnual ? "font-bold" : "text-muted-foreground"}>Monthly</Label>
                <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
                <Label htmlFor="billing-toggle" className={isAnnual ? "font-bold" : "text-muted-foreground"}>
                    Annual <span className="ml-1 text-xs text-primary font-normal">(Save 20%)</span>
                </Label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
                {/* Free Plan */}
                <Card className="flex flex-col border-muted/60 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Casual Buyer</CardTitle>
                        <CardDescription>Basic tools for the occasional shopper.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 flex-1">
                        <div className="text-3xl font-bold">$0</div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> 3 daily trend checks
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> Basic Reseller Calculator
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground/50">
                                <X className="h-4 w-4" /> Wholesale Estimates
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground/50">
                                <X className="h-4 w-4" /> Price Alerts
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/signup" className="w-full">
                            <Button variant="outline" className="w-full">Sign Up Free</Button>
                        </Link>
                    </CardFooter>
                </Card>

                {/* Pro Plan */}
                <Card className="flex flex-col border-primary/50 shadow-lg bg-card/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                        POPULAR
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">Insider Pass</CardTitle>
                        <CardDescription>Full data transparency for serious buyers & resellers.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 flex-1">
                        <div className="text-3xl font-bold">
                            ${isAnnual ? "4.00" : "5.00"}
                            <span className="text-sm font-normal text-muted-foreground">/mo</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" /> Unlimited Trend Analysis
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" /> Wholesale Price Range Data
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" /> Advanced Calculator (Fees, Shipping)
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" /> Restock Probability
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" /> 5 Price Alerts
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/signup?plan=pro" className="w-full">
                            <Button className="w-full bg-primary hover:bg-primary/90">Get Insider Access</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}
