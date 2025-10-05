'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function Speakers() {
  const speakers = [
    {
      name: 'Govinda Romero',
      role: 'CEO, TechFlow Ventures',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1134353883%2F127239494063%2F1%2Foriginal.20250924-185032?auto=format%2Ccompress&q=75&sharp=10&rect=451%2C0%2C1899%2C1899&s=d8253423c8ad4c3c8e9d366860747378',
      bio: `Govinda Romero is a serial entrepreneur with a track record of building, scaling, and exiting successful companies across multiple industries. He founded his first venture—an employment agency—at just 17 years old, growing it to over 100 employees before selling it five years later. From there, he went on to establish a multi-state car dealership group with five locations across five states, a finance company specializing in auto loans and mortgages, and an offshore insurance provider offering comp, collision, and extended service contract coverage.

In 2023, Govinda sold an HVAC company to a private equity firm at 9.5x EBITDA, while also acquiring a towing company to expand into complementary services. He is currently developing a 25-home subdivision on 108 acres and actively manages a diverse real estate portfolio.

Outside of business, Govinda is a devoted husband and father of four. He is deeply passionate about health and nutrition—having been featured on the London Real podcast—and is currently training for his pilot’s license. Never one to shy away from a challenge, he is also working toward the personal goal of achieving a six-pack.`
    },
    {
      name: 'Rukmini Poddar',
      role: 'Founder, InnovateAI',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140406543%2F127239494063%2F1%2Foriginal.20250930-184730?auto=format%2Ccompress&q=75&sharp=10&s=56e0cf5a67e39155f2528d52684114ad',
      bio: `Rukmini Poddar is on a mission to help teams connect to their feelings and work more effectively together. She is the author of Draw Your Feelings, published by Penguin Random House, and now translated into multiple languages and sold worldwide. She has a passion for emotional intelligence, creativity, and team dynamics. With a background in design and over a decade of experience guiding others through art-based emotional exploration, Rukmini specializes in guiding teams towards greater self-awareness to enhance their leadership capabilities. Through her workshops and keynotes—offered both online and in-person—Rukmini has worked with corporate teams, wellness organizations, schools, and community groups around the world. Her unique approach invites participants to “draw their feelings,” turning complex inner experiences into insight, clarity, and meaningful growth.`
    },
    {
      name: 'Denver Beck',
      role: 'CTO, BuildSpace Labs',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140410983%2F127239494063%2F1%2Foriginal.20250930-185105?auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C200%2C200&s=6e322b3fc42b45020eb3cf6fbcab7423',
      bio: `Denver Beck is the founder and CEO of Optimum RV, a family-owned, multi-state recreational vehicle (RV) dealership and one of the largest pre-owned RV sellers in the nation. What began in 2006 as a single dealership in Ocala, Florida, has expanded into a thriving 15-location operation across several states, offering sales, service, and parts to RV enthusiasts nationwide.

Before launching Optimum RV, Denver gained valuable insight into lifestyle-driven sales through his experience in the boat industry, where he recognized the freedom and adventure RVs could bring to families. Driven by determination, resilience, and an unwavering commitment to growth, he transformed that insight into a flourishing business. His leadership has been defined by his willingness to take bold risks, navigate challenges head-on, and consistently pursue ways to elevate the RV ownership experience.`
    },
    {
      name: 'Rose Higgins',
      role: 'Partner, GatorVentures',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140417713%2F127239494063%2F1%2Foriginal.20250930-185614?auto=format%2Ccompress&q=75&sharp=10&rect=320%2C19%2C977%2C977&s=baf50cac3b9f8330b05fd41b129ae8bb',
      bio: `What were you doing at 19?
Rose Higgins was hustling in mall kiosks, selling one hot product—and just a few years later, she was running a 7,000 sq ft mega store in Santa Barbara with over 50,000 products. For eight years straight, her store ranked in the Top 3 toy stores out of 1,000 nationwide. Newspapers wrote about her. Awards piled up. Customers lined up.

After more than 20 years of entrepreneurial wins and wipeouts, Rose leveled up to coaching and training retail sales teams in partnership with billion-dollar companies. Today, she’s known worldwide as a speaker, author, and founder of the Purpose Stories Movement—helping entrepreneurs and changemakers discover the one thing that sets them apart: their story.

She’s shared the stage with names like Russell Brunson, John Demartini, and Kaley Chu, been recognized as one of the Top 50 Speakers, and even judged the speaking competition The Next Top Speaker, endorsed by Russell Brunson himself.

She’s a mom, a mentor, and a motivator—but above all, she’s proof that your story can take you from a kiosk in the mall… to the global stage.`
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 mobile-heading-scale">
            Meet Our <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mobile-text-scale">
            Learn from industry leaders who are shaping the future of technology and entrepreneurship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group cursor-pointer focus-ring mobile-touch-target" interactive={true}>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white/10 ring-2 ring-transparent group-hover:ring-[var(--neon-lime)]/50 transition-all duration-300">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-lime)]/20 to-[var(--neon-magenta)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 truncate group-hover:text-[var(--neon-lime)] transition-colors duration-300">{speaker.name}</h3>
                    <p className="text-[var(--text-muted)] mb-3 text-sm sm:text-base line-clamp-2">{speaker.role}</p>

                    <Accordion type="single" collapsible>
                      <AccordionItem value={`bio-${index}`}>
                        <AccordionTrigger className="px-0">
                          <motion.span whileHover={{ x: 3 }} className="flex items-center gap-2 text-[var(--neon-lime)] group-hover:text-[var(--neon-aqua)] transition-colors duration-300 font-medium text-sm sm:text-base">
                            View bio
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.span>
                        </AccordionTrigger>
                        <AccordionContent className="px-0">
                          <div className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {speaker.bio}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
