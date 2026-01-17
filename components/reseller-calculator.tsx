
"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { DollarSign, Percent, Package, Truck, Info } from "lucide-react"

export function ResellerCalculator() {
    const [sellingPrice, setSellingPrice] = React.useState(100)
    const [costPrice, setCostPrice] = React.useState(50)
    const [shippingCost, setShippingCost] = React.useState(10)
    const [platformFeePercent, setPlatformFeePercent] = React.useState(13)

    const platformFee = (sellingPrice * platformFeePercent) / 100
    const totalCost = Number(costPrice) + Number(shippingCost) + platformFee
    const netProfit = sellingPrice - totalCost
    const margin = (netProfit / sellingPrice) * 100
    const roi = (netProfit / totalCost) * 100

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-card border-border h-full">
                    <CardHeader>
                        <CardTitle className="text-xl text-foreground">Costs & Inputs</CardTitle>
                        <CardDescription>Enter your product details below.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Selling Price ($)</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="number"
                                    value={sellingPrice}
                                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                                    className="pl-9 bg-background/50 border-input"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Cost of Goods ($)</Label>
                            <div className="relative">
                                <Package className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="number"
                                    value={costPrice}
                                    onChange={(e) => setCostPrice(Number(e.target.value))}
                                    className="pl-9 bg-background/50 border-input"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Shipping Cost ($)</Label>
                            <div className="relative">
                                <Truck className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="number"
                                    value={shippingCost}
                                    onChange={(e) => setShippingCost(Number(e.target.value))}
                                    className="pl-9 bg-background/50 border-input"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <div className="flex justify-between">
                                <Label>Platform Fee (%)</Label>
                                <span className="text-sm font-mono text-muted-foreground">{platformFeePercent}%</span>
                            </div>
                            <Slider
                                value={[platformFeePercent]}
                                onValueChange={(vals) => setPlatformFeePercent(vals[0])}
                                max={30}
                                step={0.5}
                                className="py-4"
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Real-time Preview Section */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
            >
                <Card className={`border-2 h-full transition-colors duration-500 ${netProfit >= 0 ? 'border-primary/20 bg-primary/5' : 'border-destructive/20 bg-destructive/5'}`}>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center text-foreground">
                            <span>Net Profit</span>
                            <motion.span
                                key={netProfit}
                                initial={{ scale: 1.2, color: netProfit >= 0 ? "#16A34A" : "#DC2626" }}
                                animate={{ scale: 1 }}
                                className={`text-3xl font-bold font-mono ${netProfit >= 0 ? "text-primary" : "text-destructive"}`}
                            >
                                ${netProfit.toFixed(2)}
                            </motion.span>
                        </CardTitle>
                        <CardDescription>Real-time breakdown</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-background/60 border border-border">
                                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Margin</div>
                                <div className={`text-2xl font-bold font-mono mt-1 ${margin >= 20 ? 'text-primary' : 'text-foreground'}`}>
                                    {margin.toFixed(1)}%
                                </div>
                            </div>
                            <div className="p-4 rounded-lg bg-background/60 border border-border">
                                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">ROI</div>
                                <div className="text-2xl font-bold font-mono mt-1 text-foreground">
                                    {roi.toFixed(1)}%
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 text-sm container">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Revenue</span>
                                <span>${sellingPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-destructive/80">
                                <span>- COGS</span>
                                <span>${costPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-destructive/80">
                                <span>- Shipping</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-destructive/80">
                                <span>- Platform Fees</span>
                                <span>${platformFee.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-border my-2"></div>
                            <div className="flex justify-between font-bold text-lg text-foreground">
                                <span>Total Profit</span>
                                <span className={netProfit >= 0 ? "text-primary" : "text-destructive"}>${netProfit.toFixed(2)}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
