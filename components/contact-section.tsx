
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-background border-t border-border">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16"
                >
                    {/* Newsletter / Community */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-4">Join the Inner Circle</h2>
                            <p className="text-muted-foreground">
                                Get weekly reports on the highest margin items, retail arbitrage alerts, and platform updates. Join 15,000+ informed sellers.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-muted/50 border-border text-foreground"
                            />
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Subscribe
                            </Button>
                        </div>

                        <div className="pt-8 border-t border-border/50">
                            <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Contact Us Directly</h3>
                            <div className="space-y-3">
                                <a href="mailto:partners@markettruth.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                    <Mail className="h-5 w-5" /> partners@markettruth.com
                                </a>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MessageSquare className="h-5 w-5" /> Live Chat Available (Pro)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Form */}
                    <div className="bg-muted/10 p-8 rounded-2xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-2">Send us a Message</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Have a suggestion or found a pricing discrepancy? Let our data team know.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="Name" className="bg-background border-border" />
                                <Input placeholder="Email" className="bg-background border-border" />
                            </div>
                            <Textarea placeholder="Your message..." className="min-h-[120px] bg-background border-border" />
                            <Button className="w-full gap-2">
                                <Send className="h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
