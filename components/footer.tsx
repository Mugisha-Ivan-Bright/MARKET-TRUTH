
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container flex flex-col gap-8 py-8 md:py-12 lg:py-16 px-4">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <TrendingUp className="h-6 w-6 text-primary" />
                            <span className="font-bold">Market Intel Insider</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Democratizing market data. See the real price behind the hype.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/trends" className="hover:text-foreground">Trending Now</Link></li>
                            <li><Link href="/calculator" className="hover:text-foreground">Reseller Calculator</Link></li>
                            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Transparency</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/data" className="hover:text-foreground">Data Methodology</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Connect</h3>
                        <p className="text-sm text-muted-foreground">
                            Questions? <Link href="/help" className="underline hover:text-foreground">Contact Support</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t pt-8 border-border/40">
                    <p className="text-xs text-muted-foreground">
                        &copy; 2026 Market Truth. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        *Estimates based on aggregated public data. Not financial advice.
                    </p>
                </div>
            </div>
        </footer>
    )
}
