import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { Speakers } from '@/components/Speakers'
import { Agenda } from '@/components/Agenda'
import { WhyAttend } from '@/components/WhyAttend'
import { Venue } from '@/components/Venue'
import { Tickets } from '@/components/Tickets'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ClientWrapper } from '@/components/ClientWrapper'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[var(--text-primary)] overflow-x-hidden antialiased">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      <main className="relative">
        <ClientWrapper>
          <Hero />
        </ClientWrapper>
        <SocialProof />
        <Speakers />
        <ClientWrapper>
          <Agenda />
        </ClientWrapper>
        <WhyAttend />
        <ClientWrapper>
          <Venue />
        </ClientWrapper>
        <ClientWrapper>
          <Tickets />
        </ClientWrapper>
        <FAQ />
        <ClientWrapper>
          <FinalCTA />
        </ClientWrapper>
      </main>
      <Footer />
      <ClientWrapper>
        <ScrollToTop />
      </ClientWrapper>
    </div>
  )
}
