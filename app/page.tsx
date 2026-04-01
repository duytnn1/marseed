import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import USPSection from '@/components/USPSection'
import PlatformsSection from '@/components/PlatformsSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import MetaIdeaGenerator from '@/components/MetaIdeaGenerator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <USPSection />
      <FeaturesSection />
      <PlatformsSection />
      <TestimonialsSection />
      <PricingSection />
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <MetaIdeaGenerator />
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  )
} 