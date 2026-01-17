
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { ResellerCalculator } from "@/components/reseller-calculator"

export const metadata: Metadata = {
    title: "Reseller Calculator - Market Truth",
    description: "Calculate your margins and profit potential.",
}

export default function CalculatorPage() {
    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-12">
                <div className="container px-4 max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-[#E6EAF0] mb-4">Profit Calculator</h1>
                    <p className="text-[#8A94A6] mb-8">
                        Estimate your net profit after platform fees, shipping, and cost of goods.
                    </p>

                    <ResellerCalculator />
                </div>
            </main>
            <Footer />
        </div>
    )
}
