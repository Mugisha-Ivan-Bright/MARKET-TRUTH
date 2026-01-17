
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trends - Market Truth",
    description: "Live market trends and markup analysis.",
}

export default function TrendsPage() {
    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-12">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-[#1F2937] pb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-[#E6EAF0] mb-2">Market Pulse</h1>
                            <p className="text-[#8A94A6] max-w-2xl text-lg">
                                Real-time analysis of the hottest consumer goods. We track retail vs. wholesale spread to identify the most overpriced items in the market.
                            </p>
                        </div>
                        <div className="hidden md:block text-right">
                            <div className="text-sm text-[#8A94A6]">Live items tracked</div>
                            <div className="text-2xl font-mono text-[#16A34A] font-bold">54,302</div>
                        </div>
                    </div>

                    {/* In a real app, this would be a larger grid or paginated. 
                For now, reusing ProductGrid which uses mock data. 
                I will add a duplicate grid to simulate "Many other cards" as requested.
            */}

                    <ProductGrid />

                    <div className="my-8" />

                    <ProductGrid />
                </div>
            </main>
            <Footer />
        </div>
    )
}
