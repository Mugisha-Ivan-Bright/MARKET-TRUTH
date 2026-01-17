import Link from "next/link"
import { ShieldCheck, BarChart2, TrendingUp, LucideIcon } from "lucide-react"

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface AuthInsightPanelProps {
    title: string;
    description: string;
    features: Feature[];
    quote?: {
        text: string;
        author: string;
    }
}

export function AuthInsightPanel({ title, description, features, quote }: AuthInsightPanelProps) {
    return (
        <div className="relative hidden h-full w-full flex-col bg-[#0B0F14] p-10 text-white lg:flex border-r border-[#1F2937]">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1000')] opacity-5 bg-cover bg-center pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-transparent to-[#0B0F14] pointer-events-none" />

            {/* Clickable Logo - Redirects to Home */}
            <Link href="/" className="relative z-20 flex items-center text-lg font-medium tracking-tight hover:opacity-80 transition-opacity w-fit cursor-pointer">
                <TrendingUp className="mr-2 h-6 w-6 text-[#16A34A]" />
                MARKET TRUTH™
            </Link>

            <div className="relative z-20 mt-auto space-y-8">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold leading-tight">{title}</h3>
                    <p className="text-[#8A94A6]">{description}</p>
                </div>

                {/* Mission Statement Enrichment */}
                <div className="bg-[#1F2937]/20 border border-[#1F2937] rounded-lg p-4 mb-6">
                    <h4 className="text-[#16A34A] text-xs font-bold uppercase tracking-wider mb-2">Our Mission</h4>
                    <p className="text-sm text-[#E6EAF0] leading-relaxed">
                        To democratize market intelligence by providing consumers with the same wholesale data, margin analysis, and pricing leverage previously reserved for institutional buyers.
                    </p>
                </div>

                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[#1F2937]/30 border border-[#1F2937]">
                            <feature.icon className="h-5 w-5 text-[#16A34A] mt-0.5" />
                            <div>
                                <div className="font-medium text-sm text-[#E6EAF0]">{feature.title}</div>
                                <div className="text-xs text-[#8A94A6]">{feature.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {quote && (
                    <div className="pt-4 border-t border-[#1F2937]">
                        <p className="text-xs text-[#8A94A6] italic">
                            "{quote.text}"
                        </p>
                        <p className="text-xs text-[#4B5563] mt-1 font-medium">
                            — {quote.author}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
