
"use client"

import { ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { SearchDialog } from "@/components/search-dialog"

export function Hero() {
    return (
        <section className="bg-background py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 pt-[100px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl space-y-8"
            >
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Technically Real & Scaling
                </div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                    Global Investing <span className="text-primary italic">Simplified.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We aggregate and structure financial data across borders to make global investing simpler and more transparent.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <div className="flex w-full max-w-xl items-center space-x-2 mx-auto relative">
                        <SearchDialog />
                    </div>
                </div>

                {/* Section 1: Live Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-primary">2,500+</span>
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">Total Datasets</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-primary">12</span>
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">Active Users</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-primary">45,000</span>
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">API Calls / Month</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
