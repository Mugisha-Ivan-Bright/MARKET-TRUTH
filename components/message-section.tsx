"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Send, MessageCircle, MapPin, ExternalLink } from "lucide-react"

export function MessageSection() {
    return (
        <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                {/* Left: Contact Form */}
                <div className="bg-background/50 p-8 md:p-10 rounded-2xl border border-border shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Platform Feedback</h3>
                    <p className="text-sm text-muted-foreground mb-8">
                        Investors and developers: We value your input. Suggest a feature or report a data discrepancy.
                    </p>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-foreground ml-1">Name</label>
                                <Input placeholder="Investor Name" className="bg-muted/30 border-border" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-foreground ml-1">Email</label>
                                <Input placeholder="email@firm.com" className="bg-muted/30 border-border" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-foreground ml-1">Feedback / Suggestion</label>
                            <Textarea placeholder="How can we make this data more useful for you?" className="min-h-[140px] bg-muted/30 border-border" />
                        </div>
                        <Button className="w-full gap-2 font-bold py-6">
                            <Send className="h-4 w-4" /> Submit to Roadmap
                        </Button>
                    </form>
                </div>

                {/* Right: Public Links & Direct Contact */}
                <div className="space-y-10 pt-4">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Open & Collaborative</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We believe transparency builds the best products. That's why our roadmap and core library are publicly accessible.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <Button variant="outline" className="justify-between py-8 h-auto group border-border/50 hover:border-primary/50">
                            <div className="flex items-center gap-4 text-left">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Public Roadmap</div>
                                    <div className="text-sm text-muted-foreground">See what we're building next</div>
                                </div>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Button>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-border bg-muted/10">
                                <Mail className="h-5 w-5 text-primary mb-2" />
                                <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Direct Email</div>
                                <a href="mailto:mugishaivanbright250@gmail.com" className="text-sm font-medium hover:text-primary break-all">mugishaivanbright250@gmail.com</a>
                            </div>
                            <div className="p-4 rounded-xl border border-border bg-muted/10">
                                <Github className="h-5 w-5 text-primary mb-2" />
                                <div className="text-xs font-bold uppercase text-muted-foreground mb-1">GitHub</div>
                                <div className="text-sm font-medium">@bright-ivan</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Kigali, Rwanda | Rwanda Coding Academy</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
