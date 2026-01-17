
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PRODUCTS } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, DollarSign, BarChart2, AlertCircle } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: {
        slug: string
    }
}

// Generate static params for all products to enable static generation
export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.id,
    }))
}

export default function ProductPage({ params }: PageProps) {
    const product = PRODUCTS.find((p) => p.id === params.slug)

    if (!product) {
        notFound()
    }

    const margin = ((product.retailPrice - product.wholesalePrice) / product.retailPrice) * 100
    const profit = product.retailPrice - product.wholesalePrice

    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-12">
                <div className="container max-w-5xl mx-auto px-4">

                    {/* Breadcrumb / Back */}
                    <Link href="/" className="inline-flex items-center text-[#8A94A6] hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Market Search
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Available Intelligence (Main Content) */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge variant="outline" className="text-[#16A34A] border-[#16A34A]/30 bg-[#16A34A]/5">
                                        {product.category}
                                    </Badge>
                                    <Badge variant="outline" className="text-[#E6EAF0] border-[#E6EAF0]/30">
                                        Trend Score: {product.trendScore}/100
                                    </Badge>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-[#E6EAF0] mb-4">{product.name}</h1>
                                <p className="text-lg text-[#8A94A6] leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Pricing Analysis Card */}
                            <div className="bg-[#1F2937]/30 border border-[#1F2937] rounded-xl p-8">
                                <h3 className="text-xl font-bold text-[#E6EAF0] mb-6 flex items-center">
                                    <DollarSign className="h-5 w-5 text-[#16A34A] mr-2" />
                                    Price Analysis
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div>
                                        <div className="text-xs text-[#8A94A6] uppercase font-bold tracking-wider mb-1">Retail</div>
                                        <div className="text-2xl font-mono text-[#E6EAF0] font-bold">${product.retailPrice}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-[#8A94A6] uppercase font-bold tracking-wider mb-1">Wholesale Est.</div>
                                        <div className="text-2xl font-mono text-[#16A34A] font-bold">${product.wholesalePrice}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-[#8A94A6] uppercase font-bold tracking-wider mb-1">Margin</div>
                                        <div className="text-2xl font-mono text-[#E6EAF0] font-bold">{margin.toFixed(1)}%</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-[#8A94A6] uppercase font-bold tracking-wider mb-1">Net Profit</div>
                                        <div className="text-2xl font-mono text-[#E6EAF0] font-bold">${profit.toFixed(2)}</div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-[#1F2937] flex items-start gap-3">
                                    <AlertCircle className="h-5 w-5 text-[#16A34A] mt-0.5" />
                                    <div className="text-sm text-[#8A94A6]">
                                        <span className="font-bold text-[#E6EAF0]">Subscriber Note:</span> Wholesale estimates are based on verified manifests from major ports in the last 30 days. Contact suppliers directly to confirm specific volume pricing.
                                    </div>
                                </div>
                            </div>

                            {/* Market Trend Chart Placeholder */}
                            <div className="bg-[#1F2937]/30 border border-[#1F2937] rounded-xl p-8 h-[300px] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1000')] opacity-10 bg-cover bg-center" />
                                <div className="text-center relative z-10">
                                    <BarChart2 className="h-12 w-12 text-[#16A34A] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-[#E6EAF0] mb-2">Historical Data Locked</h3>
                                    <p className="text-[#8A94A6] max-w-sm mx-auto mb-6">
                                        Unlock 12-month historical price trends and seasonality analysis with a generic Pro subscription.
                                    </p>
                                    <Link href="/pricing">
                                        <Button className="bg-[#16A34A] text-white hover:bg-[#16A34A]/90">
                                            Upgrade to View Chart
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-[#1F2937]/30 border border-[#1F2937] rounded-xl p-6">
                                <h3 className="font-bold text-[#E6EAF0] mb-4">Action Center</h3>
                                <div className="space-y-3">
                                    <Button className="w-full bg-[#E6EAF0] text-black hover:bg-white font-bold">
                                        Find Suppliers
                                    </Button>
                                    <Button variant="outline" className="w-full border-[#1F2937] text-[#E6EAF0] hover:bg-[#1F2937]">
                                        Track This Item
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-[#1F2937]/30 border border-[#1F2937] rounded-xl p-6">
                                <h3 className="font-bold text-[#E6EAF0] mb-4">Similar Opportunities</h3>
                                <div className="space-y-4">
                                    {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(related => (
                                        <Link key={related.id} href={`/product/${related.id}`} className="block group">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-[#E6EAF0] group-hover:text-[#16A34A] transition-colors">{related.name}</span>
                                                <span className="text-xs font-mono text-[#8A94A6]">${related.retailPrice}</span>
                                            </div>
                                            <div className="text-xs text-[#8A94A6] truncate">{related.description}</div>
                                        </Link>
                                    ))}
                                    {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).length === 0 && (
                                        <p className="text-sm text-[#8A94A6]">No similar items trending right now.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
