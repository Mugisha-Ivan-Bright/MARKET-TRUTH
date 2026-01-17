
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0B0F14] font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-1 mt-[64px] py-16">
                <div className="container max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-[#E6EAF0] mb-4">Privacy Policy</h1>
                    <p className="text-[#8A94A6] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert max-w-none text-[#E6EAF0]">
                        <p className="text-lg leading-relaxed text-[#8A94A6] mb-8">
                            At Market Truth™, we take your data privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information while you use our intelligence platform.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact support. This may include your name, email address, and payment information. We also log usage data to improve our search algorithms.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h3>
                                <div className="text-[#8A94A6] leading-relaxed">
                                    We use your information to:
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Provide access to proprietary wholesale data.</li>
                                        <li>Process subscription payments via Stripe.</li>
                                        <li>Send critical market alerts (if opted in).</li>
                                        <li>Detect and prevent fraudulent account usage.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">3. Data Security</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    We implement industry-standard security measures, including encryption at rest and in transit, to protect your data. We never sell your personal contact information to third-party advertisers.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">4. Cookies & Tracking</h3>
                                <p className="text-[#8A94A6] leading-relaxed">
                                    We use essential cookies to maintain your login session. We use anonymous analytics cookies to understand how users navigate our trends dashboard, which helps us prioritize new features.
                                </p>
                            </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#1F2937]">
                            <p className="text-sm text-[#8A94A6]">
                                Privacy concerns? Reach our Data Officer at <a href="mailto:privacy@markettruth.com" className="text-[#16A34A] hover:underline">privacy@markettruth.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
