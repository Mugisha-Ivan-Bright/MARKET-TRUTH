
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Data Methodology - Market Truth",
    description: "How we source and verify our pricing intelligence.",
}

export default function DataPage() {
    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-12">
                <div className="container px-4 max-w-3xl mx-auto prose prose-invert">
                    <h1 className="text-3xl font-bold text-[#E6EAF0] mb-6">Data Methodology</h1>

                    <section className="space-y-4 text-[#8A94A6]">
                        <h3 className="text-xl font-semibold text-[#E6EAF0]">Data Sources</h3>
                        <div>
                            Market Truth aggregates pricing data from over 50 public and private sources, including:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Import/Export manifests (Bill of Lading data)</li>
                                <li>Public wholesale listings (Alibaba, Indiamart, etc.)</li>
                                <li>Retail scrapers (Major marketplaces)</li>
                                <li>Verified user submissions</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-[#E6EAF0] mt-8">Markup Calculation</h3>
                        <p>
                            Our "Markup" metric is calculated as:
                            <br />
                            <code className="bg-[#1F2937] px-2 py-1 rounded text-sm text-[#16A34A] mt-2 block w-fit">((Retail Price - Wholesale Estimate) / Wholesale Estimate) * 100</code>
                        </p>

                        <h3 className="text-xl font-semibold text-[#E6EAF0] mt-8">Accuracy Verification</h3>
                        <p>
                            We employ a confidence score algorithm that cross-references multiple data points. Outliers are manually reviewed by our data team to ensure only high-confidence estimates reach your dashboard.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
