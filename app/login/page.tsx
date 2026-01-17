
import Link from "next/link"
import { Metadata } from "next"
import { UserAuthForm } from "@/components/auth/user-auth-form"
import { AuthInsightPanel } from "@/components/auth/auth-insight-panel"
import { BarChart2, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
    title: "Login - Market Truth",
    description: "Access your price intelligence dashboard.",
}

export default function LoginPage() {
    return (
        <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted text-white lg:flex">
                <AuthInsightPanel
                    title="Welcome Back, Analyst"
                    description="Your custom price alerts and saved searches are ready."
                    features={[
                        {
                            icon: BarChart2,
                            title: "Market Watchlist",
                            description: "3 items in your watchlist have dropped in price since your last visit."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Secure Session",
                            description: "Your session is encrypted and secure."
                        }
                    ]}
                />
            </div>

            <div className="lg:p-8 flex items-center justify-center h-full bg-[#0B0F14]">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-6">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-[#E6EAF0]">
                            Access Terminal
                        </h1>
                        <p className="text-sm text-[#8A94A6]">
                            Enter your credentials
                        </p>
                    </div>
                    <UserAuthForm type="login" />
                    <p className="px-8 text-center text-sm text-[#8A94A6]">
                        <Link href="/signup" className="hover:text-[#16A34A] underline underline-offset-4 transition-colors">
                            First time here? Request Access
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
