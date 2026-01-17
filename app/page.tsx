"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { MessageSection } from "@/components/message-section"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import {
  DataProducts,
  APIDashboard,
  PortfolioSimulator,
  TrustTransparency,
  Roadmap,
  InvestorCTA,
  ActivityFeed,
  FounderBio
} from "@/components/dashboard-sections"

// Reusable Section Wrapper with Animation
function AnimatedSection({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) {
  return (
    <SectionWrapper id={id} className={className}>
      {children}
    </SectionWrapper>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-background scroll-smooth">
      <Header />

      {/* Section 1: Overview / Home (Integrated in Hero + Metrics) */}
      <div id="hero" className="mt-[64px]">
        <Hero />
      </div>

      {/* Section 2: Data Assets / Products */}
      <DataProducts />

      {/* Section 3: API / Platform Usage Dashboard */}
      <APIDashboard />

      {/* Section 4: User Portfolio / Simulation Area */}
      <PortfolioSimulator />

      {/* Section 5: Trust & Transparency */}
      <TrustTransparency />

      {/* Section 6: Roadmap */}
      <Roadmap />

      {/* Section 7: Early Investor / Supporter */}
      <InvestorCTA />

      {/* Section 8: Activity Feed */}
      <ActivityFeed />

      {/* Section 9: Founder Section */}
      <FounderBio />

      {/* Section 10: Feedback / Contact */}
      <AnimatedSection id="contact" className="py-20 bg-muted/30 border-y border-border">
        <div className="container px-4 max-w-5xl mx-auto">
          <MessageSection />
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}
