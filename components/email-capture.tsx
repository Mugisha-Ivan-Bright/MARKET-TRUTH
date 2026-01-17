
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function EmailCapture() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setStatus("loading")
        // Simulate API call
        setTimeout(() => {
            setStatus("success")
            setEmail("")
        }, 1000)
    }

    return (
        <section className="container py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center bg-muted/30 p-8 rounded-3xl border border-muted">
                <h2 className="text-3xl font-bold tracking-tighter">
                    Get the Weekly "Overpriced" Report
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join 2,000+ shoppers receiving our free breakdown of the most marked-up products every Friday.
                </p>
                <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "success" || status === "loading"}
                        required
                    />
                    <Button type="submit" disabled={status === "success" || status === "loading"}>
                        {status === "loading" ? "..." : status === "success" ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </Button>
                </form>
                {status === "success" && (
                    <p className="text-sm text-emerald-500 font-medium">Thanks! You're on the list.</p>
                )}
            </div>
        </section>
    )
}
