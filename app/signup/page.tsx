
import Link from "next/link"
import { Metadata } from "next"
import { UserAuthForm } from "@/components/auth/user-auth-form"
import { AuthInsightPanel } from "@/components/auth/auth-insight-panel"
import { DollarSign, Search, Users } from "lucide-react"

export const metadata: Metadata = {
    title: "Join - Market Truth",
    description: "Start making smarter buying decisions today.",
}

export default function SignupPage() {
    return (
        <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted text-white lg:flex">
                <AuthInsightPanel
                    title="Join the Informed"
                    description="Stop overpaying. Join 5,000+ members getting the real market data."
                    features={[
                        {
                            icon: DollarSign,
                            title: "True Wholesale Prices",
                            description: "See what retailers actually pay for the products you buy."
                        },
                        {
                            icon: Search,
                            title: "Unlimited Lookups",
                            description: "Search fast. Get instant answers on any SKU."
                        },
                        {
                            icon: Users,
                            title: "Community Data",
                            description: "Crowdsourced verification from top power sellers."
                        }
                    ]}
                    quote={{
                        text: "This dashboard saved me $2,000 on my first bulk order. The estimates are frighteningly accurate.",
                        author: "Sofia Davis, PowerSeller"
                    }}
                />
            </div>

            <div className="lg:p-8 flex items-center justify-center h-full bg-[#0B0F14]">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-6">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-[#E6EAF0]">
                            Create Account
                        </h1>
                        <p className="text-sm text-[#8A94A6]">
                            Start your 14-day free trial. Cancel anytime.
                        </p>
                    </div>
                    <UserAuthForm type="signup" />
                    <p className="px-8 text-center text-sm text-[#8A94A6] space-y-2">
                        <Link href="/login" className="hover:text-[#16A34A] underline underline-offset-4 transition-colors">
                            Already have an account? Login
                        </Link>
                        <br />
                        <span className="text-xs text-[#1F2937]">By clicking continue, you agree to our <Link href="/terms" className="underline hover:text-[#8A94A6]">Terms</Link> and <Link href="/privacy" className="underline hover:text-[#8A94A6]">Privacy</Link>.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
