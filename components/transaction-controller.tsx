"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle2, XCircle, ExternalLink, CreditCard, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TransactionControllerProps {
    isOpen: boolean;
    onClose: () => void;
    paymentMethod: string | null;
}

export function TransactionController({ isOpen, onClose, paymentMethod }: TransactionControllerProps) {
    const [status, setStatus] = useState<'selecting' | 'processing' | 'success' | 'failed'>('processing')

    useEffect(() => {
        if (isOpen) {
            setStatus('processing')
            // Simulate processing
            const timer = setTimeout(() => {
                setStatus('success')
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                >
                    <div className="p-8 text-center space-y-6">
                        {status === 'processing' && (
                            <>
                                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Initializing {paymentMethod}</h3>
                                    <p className="text-muted-foreground">
                                        Redirecting you to our secure partner to complete your compassionate support contribution...
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="h-full w-1/2 bg-primary"
                                        />
                                    </div>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Secure Connection Established</span>
                                </div>
                            </>
                        )}

                        {status === 'success' && (
                            <>
                                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                    <Heart className="h-8 w-8 text-emerald-500 fill-emerald-500" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Redirecting to Payment</h3>
                                    <p className="text-muted-foreground text-sm">
                                        In a real production environment, we would now transition you to **{paymentMethod === 'PayPal' ? 'PayPal' : 'Stripe/Secure Pay'}**.
                                    </p>
                                </div>
                                <div className="bg-muted/30 p-4 rounded-lg border border-border text-left space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Support Tier</span>
                                        <span className="font-bold">Compassionate Rise</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Gateway</span>
                                        <span className="font-bold flex items-center gap-1">
                                            {paymentMethod} <ExternalLink className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                                    <Button className="flex-1 gap-2" onClick={() => window.open('https://paypal.me/youraccount', '_blank')}>
                                        Proceed <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-center gap-2">
                        <CreditCard className="h-3 w-3 text-muted-foreground" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">PCI DSS Compliant Infrastructure</span>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
