
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-16">
                <div className="container max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-[#E6EAF0] mb-4">Terms of Service</h1>
                    <p className="text-[#8A94A6] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert max-w-none text-[#E6EAF0]">
                        <p className="text-lg leading-relaxed text-[#8A94A6] mb-8">
                            By accessing or using Market Truth™, you agree to be bound by these Terms of Service. Our mission is to democratize price intelligence, and we expect all users to utilize this data responsibly.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">1. Use of Data</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    The pricing data and insights provided by Market Truth™ are estimates based on public aggregated data, wholesale manifests, and verified user submissions. While we strive for 99.8% accuracy, we do not guarantee the absolute precision of real-time market fluctuations. You use this information at your own risk for business decisions.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">2. Accounts & Security</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. Market Truth™ is not liable for any loss or damage arising from your failure to protect your password.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">3. Subscriptions & Billing</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    Pro subscriptions are billed in advance on a monthly or annual basis. You may cancel at any time via your dashboard. We do not offer refunds for partial months, but you will retain access until the end of your billing cycle.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">4. API Usage</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    If you access our data via API, you agree not to scrape, redistribute, or resell the raw data without an Enterprise license. Excessive usage beyond your plan limits may result in temporary rate limiting.
                                </p>
                            </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#1F2937]">
                            <p className="text-sm text-[#8A94A6]">
                                Questions about these terms? Contact <a href="mailto:legal@markettruth.com" className="text-[#16A34A] hover:underline">legal@markettruth.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
