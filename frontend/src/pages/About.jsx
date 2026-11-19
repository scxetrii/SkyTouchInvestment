import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { InteractiveGlobe } from '../components/ui/interactive-globe'
import CircularTestimonials from '../components/ui/circular-testimonials'
import { Briefcase, Target, Handshake, TrendingUp, Globe, BarChart3, Building2, Lightbulb, Heart, Shield, Leaf, GraduationCap, ArrowRight, CheckCircle, Award, Users } from 'lucide-react'

const approach = [
  { icon: BarChart3, title: 'Rigorous Analysis', desc: 'Comprehensive due diligence on every potential investment opportunity.', color: 'text-emerald-600' },
  { icon: Handshake, title: 'Active Partnership', desc: 'True partners through board participation, governance oversight, and strategic guidance.', color: 'text-secondary' },
  { icon: Target, title: 'Strategic Diversification', desc: 'Balanced exposure across private equity, real estate, capital markets, and hydropower.', color: 'text-tertiary' },
  { icon: Building2, title: 'Multi-generational', desc: 'Long-term perspective, building value that lasts for generations.', color: 'text-emerald-600' },
]

const approachTestimonials = [
  {
    quote: "We combine rigorous quantitative analysis with deep qualitative assessment. Every investment thesis undergoes stress-testing across multiple market scenarios before capital commitment.",
    name: "Rigorous Analysis",
    designation: "Data-Driven Decision Making",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We don't simply deploy capital; we become engaged partners. Through board representation, governance oversight, and hands-on strategic guidance, we build lasting value alongside our portfolio companies.",
    name: "Active Partnership",
    designation: "Collaborative Value Creation",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "Strategic diversification across sectors, asset classes, and geographies provides portfolio resilience while maximizing return potential. Our balanced approach protects capital while capturing growth opportunities across Nepal's expanding economy.",
    name: "Strategic Diversification",
    designation: "Risk-Adjusted Returns",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We invest with a multi-generational perspective, building sustainable value that endures through market cycles. This long-term orientation allows us to make strategic decisions that create lasting impact for all stakeholders.",
    name: "Multi-generational Vision",
    designation: "Sustainable Value Creation",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=90&fit=crop&crop=face&auto=format",
  },
]

const milestones = [
  { year: '2009', title: 'Establishment & Vision', desc: 'Founded in Kathmandu with a mandate to bridge strategic capital with high-potential enterprises across Nepal.' },
  { year: '2012', title: 'Inaugural Institutional Fund', desc: 'Launched our first institutional fund focused on infrastructure and renewable energy, marking our transition from advisory to active capital deployment.' },
  { year: '2015', title: 'CARE Accreditation', desc: 'Received CARE rating for bank facilities, strengthening stakeholder confidence and expanding access to institutional-grade financial partnerships.' },
   { year: '2021', title: 'Digital & Operational Modernization', desc: 'Implemented portfolio tracking systems, enhanced client dashboards, and cybersecurity frameworks to improve decision-making and transparency.' },
   { year: '2026', title: 'Industry Leadership & Growth', desc: 'Recognized as a leading independent investment firm in Nepal with a growing portfolio and expanding team.' },
]



const values = [
  { icon: Shield, title: 'Integrity', desc: 'Uncompromising ethical standards in every transaction and relationship we build.', color: 'from-emerald-600 to-emerald-400' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Forward-thinking solutions that leverage market insights and emerging opportunities.', color: 'from-gold-mid to-gold-dark' },
  { icon: Heart, title: 'Excellence', desc: 'Relentless pursuit of the highest quality in analysis, execution, and client service.', color: 'from-gold to-gold-dark' },
  { icon: Leaf, title: 'Sustainability', desc: 'Responsible investing that creates lasting value for communities and the environment.', color: 'from-emerald-400 to-emerald-600' },
]

export default function About() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* HERO */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#03140d] via-[#0b3b26] to-[#062f1c]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-400/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-gold/40" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 backdrop-blur-sm">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold-light/80">EST. 2009</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-emerald-300 via-secondary to-gold-light bg-clip-text text-transparent">SkyTouch</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-6 sm:mb-8">
                  A privately-held investment and consulting company built on principles of strategic capital allocation, 
                  rigorous analysis, and long-term value creation. Since 2009, we have been empowering businesses 
                  and investors across Nepal.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a href="#story" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-[#f7e08a] via-[#e0b33c] to-[#b8860b] text-[#1c1405] font-semibold rounded-full shadow-[0_10px_30px_rgba(212,160,23,0.25)] hover:shadow-[0_14px_40px_rgba(212,160,23,0.4)] hover:-translate-y-0.5 transition-all min-h-[44px]">
                    Our Story <ArrowRight size={16} />
                  </a>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full hover:bg-white/10 transition-colors min-h-[44px]">
                    Get in Touch
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15} className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-8">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-white"><AnimatedCounter target={15} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Years</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-gold/20 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-gold-light"><AnimatedCounter target={10} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Team</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-emerald-300"><AnimatedCounter target={10} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR STORY / TIMELINE */}
      <section id="story" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <ScrollReveal className="text-center mb-8 sm:mb-16">
            <span className="section-label text-center">OUR JOURNEY</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              The <span className="accent-gradient">SkyTouch</span> Story
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-on-surface-variant/70 max-w-2xl mx-auto">
              From a bold vision in 2009 to a leading investment and consulting firm — our journey reflects 
              unwavering commitment to creating lasting value for our partners and communities.
            </p>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 md:-translate-x-1/2 hidden sm:block" />
            <div className="space-y-6 sm:space-y-10">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0
                const content = (
                  <>
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] ${i % 2 === 0 ? 'text-emerald-600' : 'text-gold-dark'}`}>{m.year}</span>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900 mt-1 mb-1">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  </>
                )
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, scale: 0.85, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                      <motion.div
                        className="hidden sm:flex flex-1 justify-end"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                      >
                        {isLeft ? <div className="w-full max-w-sm text-right">{content}</div> : null}
                      </motion.div>
                      <motion.div
                        className="relative z-10 flex-shrink-0 ml-6 sm:ml-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, damping: 12, delay: i * 0.1 }}
                      >
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg border-[3px] border-white ${
                          i % 2 === 0 ? 'from-emerald-600 to-emerald-800' : 'from-gold-mid to-gold-dark'
                        }`}>
                          {m.year}
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex-1 flex sm:justify-start ml-16 sm:ml-0 -mt-1 sm:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                      >
                        <div className="w-full">
                          <div className="sm:hidden">{content}</div>
                          <div className="hidden sm:block">{!isLeft ? content : null}</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-500/[0.06] via-white to-gold/[0.06]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <ScrollReveal className="text-center mb-8 sm:mb-16">
            <span className="section-label text-center">OUR FOUNDATION</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              Mission, Vision &{' '}
              <span className="accent-gradient">Values</span>
            </h2>
            <p className="text-on-surface-variant/70 max-w-2xl mx-auto">
              The core principles that guide every decision, every partnership, and every investment we make.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <ScrollReveal>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-600/5 border border-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-500">
                    <Target className="text-emerald-600" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-500">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    To become a trusted investment and consulting partner that contributes to the growth of businesses, 
                    entrepreneurs, and investors across Nepal. We envision a Nepal where strategic capital and 
                    professional guidance unlock the nation's full economic potential.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-mid to-gold/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,160,23,0.25)] transition-all duration-500">
                    <BarChart3 className="text-gold-dark" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold-dark transition-colors duration-500">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Provide reliable consulting, support sustainable business growth, and create value through strategic 
                    planning and professional guidance. We empower our clients with the insights, networks, and 
                    capital they need to achieve enduring success.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary via-emerald-400 to-tertiary/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tertiary/20 to-tertiary/5 border border-tertiary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-500">
                    <Handshake className="text-tertiary" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tertiary transition-colors duration-500">Our Commitment</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    We commit to transparency, integrity, and excellence in every engagement. Our clients deserve 
                    nothing less than our best thinking, our deepest expertise, and our unwavering dedication to 
                    their long-term success.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${v.color} transition-all duration-500 rounded-r" />
                  <div className="relative z-10 pl-2">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      <v.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-500/[0.05] via-white to-gold/[0.05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">Our Global Network</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Worldwide <span className="accent-gradient">Presence</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                SkyTouch operates through a global network of investment professionals and strategic partners. 
                Our international reach enables us to identify opportunities across regions while maintaining 
                deep local expertise.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
                <div>
                  <p className="text-3xl font-bold text-emerald-600"><AnimatedCounter target={50} suffix="+" /></p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-dark"><AnimatedCounter target={10} suffix="+" /></p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Sectors Invested</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex justify-center">
              <div className="w-full max-w-sm h-80 lg:h-96">
                <InteractiveGlobe size={400} autoRotateSpeed={0.0015} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

       {/* INVESTMENT APPROACH */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-emerald-500/[0.07] via-white to-gold/[0.06] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="section-label text-center">How We Invest</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
              Our Investment{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-secondary to-gold-dark bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We combine market intelligence, trusted relationships, and disciplined execution to build a clear, credible approach to investment and consulting.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-gradient-to-br from-[#04150e] via-[#0a3323] to-[#052a1c] text-white shadow-[0_40px_140px_rgba(4,21,14,0.35)] sm:rounded-[2.5rem]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '56px 56px',
                }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
                <div className="border-b border-white/10 p-5 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-1.5">
                          <img
                            src="/logo.jpeg"
                            alt="SkyTouch mark"
                            loading="lazy"
                            className="h-full w-full rounded-xl object-cover"
                          />
                        </span>
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-light/70">
                            Smart Capital
                          </p>
                          <p className="text-sm font-semibold text-white">Portfolio overview</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#02120c]/70 p-4">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.22em] text-white/40">Portfolio IRR</p>
                          <p className="mt-1 text-3xl font-bold leading-none">
                            18.5<span className="text-lg text-gold-light">%</span>
                          </p>
                        </div>
                        <span className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold-light">
                          +12.4% YoY
                        </span>
                      </div>
                      <svg viewBox="0 0 320 110" className="mt-4 h-24 w-full" role="img" aria-label="Portfolio growth chart">
                        <defs>
                          <linearGradient id="aboutChartFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="aboutChartLine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="55%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#f7e08a" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 96 C28 92 44 76 70 79 C96 82 110 61 136 63 C162 65 178 46 204 49 C230 52 246 32 274 27 C292 24 306 18 320 12 L320 110 L0 110 Z"
                          fill="url(#aboutChartFill)"
                        />
                        <path
                          d="M0 96 C28 92 44 76 70 79 C96 82 110 61 136 63 C162 65 178 46 204 49 C230 52 246 32 274 27 C292 24 306 18 320 12"
                          fill="none"
                          stroke="url(#aboutChartLine)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="320" cy="12" r="4" fill="#f7e08a" />
                      </svg>
                      <div className="mt-2 flex justify-between text-[9px] uppercase tracking-[0.14em] text-white/30">
                        <span>2021</span>
                        <span>2023</span>
                        <span>2025</span>
                        <span>2026</span>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Client retention</p>
                        <p className="mt-1 text-2xl font-bold">
                          98<span className="text-base text-emerald-300">%</span>
                        </p>
                        <div className="mt-3 h-1 rounded-full bg-white/10">
                          <div className="h-1 w-[98%] rounded-full bg-gradient-to-r from-emerald-400 to-gold" />
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Projects delivered</p>
                        <p className="mt-1 text-2xl font-bold text-gold-light">150+</p>
                        <p className="mt-3 text-[10px] font-medium text-white/40">Across 10+ sectors</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative mt-4 overflow-hidden rounded-[1.75rem] border border-white/10">
                    <img
                      src="/investment-hero.jpg"
                      alt="Investment opportunities rooted in Nepal"
                      loading="lazy"
                      className="h-48 w-full object-cover object-[72%_center] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03140d] via-[#03140d]/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.22em] text-gold-light/75">Investment landscape</p>
                        <p className="mt-1 text-sm font-semibold text-white">Rooted in Nepal. Built for the long term.</p>
                      </div>
                      <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur">
                        Est. 2009
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:col-span-7 lg:p-10">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-light/70">
                    <span className="h-px w-8 bg-gradient-to-r from-gold/70 to-transparent" />
                    The SkyTouch Perspective
                  </div>
                  <h3 className="mt-4 text-2xl font-display font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    Local insight. Global discipline.<br className="hidden sm:block" /> Elevated execution.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                    Our approach is designed to uncover practical opportunities, structure them with clarity, and deliver support that goes beyond conventional consulting.
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { num: '01', title: 'Curated opportunities', desc: 'Sourcing with conviction across high-growth sectors.' },
                      { num: '02', title: 'Strategic structure', desc: 'Capital, governance, and terms aligned from day one.' },
                      { num: '03', title: 'Reliable execution', desc: 'Hands-on partnership through every stage of growth.' },
                      { num: '04', title: 'Long-term value', desc: 'Patient capital focused on multi-generational outcomes.' },
                    ].map((step, index) => (
                      <div
                        key={step.num}
                        className={`group flex items-start gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                          index % 2 === 0
                            ? 'border-emerald-400/15 bg-emerald-400/[0.05] hover:border-emerald-400/35 hover:bg-emerald-400/[0.08]'
                            : 'border-gold/15 bg-gold/[0.05] hover:border-gold/35 hover:bg-gold/[0.08]'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-[11px] font-bold ${
                            index % 2 === 0
                              ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                              : 'border-gold/25 bg-gold/10 text-gold-light'
                          }`}
                        >
                          {step.num}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{step.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/45">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold-light">
                        <Shield size={18} />
                      </span>
                      <p className="text-sm leading-relaxed text-white/70">
                        Disciplined governance. Transparent reporting. Enduring partnerships.
                      </p>
                    </div>
                    <Link
                      to="/investment"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold-mid to-gold-dark px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1405] transition-all hover:shadow-[0_10px_35px_rgba(212,160,23,0.4)]"
                    >
                      Explore Portfolio
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
                <div className="flex gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Users size={18} />
                  </span>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Built for</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/80">
                      Businesses, founders, and investors seeking clarity with ambition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold-light">
                    <Award size={18} />
                  </span>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Experience</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/80">
                      A premium, modern, and highly focused advisory presence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Target size={18} />
                  </span>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Why it feels extraordinary</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/80">
                      Practical opportunities, structured with clarity, supported beyond conventional consulting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16 text-center sm:mt-20">
            <span className="section-label text-center">Our Principles</span>
            <h3 className="mb-10 text-2xl md:text-4xl font-display font-bold">What Guides Every Decision</h3>
          </ScrollReveal>
          <CircularTestimonials
            testimonials={approachTestimonials}
            autoplay={true}
            colors={{
              name: "#0a0a0a",
              designation: "#6b7280",
              testimony: "#4b5563",
              arrowBackground: "#d4a017",
              arrowForeground: "#1c1405",
              arrowHoverBackground: "#b8860b",
            }}
            fontSizes={{
              name: "24px",
              designation: "14px",
              quote: "16px",
            }}
          />
        </div>
      </section>

      {/* IMPACT & SUSTAINABILITY */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-500/[0.06] via-white to-gold/[0.06]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">OUR IMPACT</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Sustainability &{' '}
                <span className="accent-gradient">Responsible Investing</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                We believe that long-term value creation goes hand in hand with environmental stewardship, 
                social responsibility, and strong governance practices. Our ESG framework guides every 
                investment decision we make.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Leaf, title: 'Environmental Stewardship', desc: 'We prioritize investments in renewable energy, sustainable infrastructure, and eco-friendly ventures.' },
                  { icon: Users, title: 'Social Responsibility', desc: 'Our investments create meaningful employment and support community development across Nepal.' },
                  { icon: Shield, title: 'Governance Excellence', desc: 'We maintain the highest standards of corporate governance, transparency, and accountability.' },
                  { icon: GraduationCap, title: 'Knowledge Transfer', desc: 'We invest in capacity building and professional development for local talent and partners.' },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${index === 2 ? 'bg-gold/10' : 'bg-emerald-600/10'}`}>
                      <item.icon size={20} className={index === 2 ? 'text-gold-dark' : 'text-emerald-600'} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop"
                alt="Sustainability and growth"
                loading="lazy"
                className="rounded-3xl w-full h-96 object-cover shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYTOUCH */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#03140d] via-[#0b3b26] to-[#062f1c]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">The SkyTouch Difference</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Why Choose <span className="bg-gradient-to-r from-secondary-light via-secondary to-gold-light bg-clip-text text-transparent">SkyTouch</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              Discover what sets us apart in the world of strategic investments
            </p>
          </ScrollReveal>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
             {[
               { icon: Target, title: 'Precision Targeting', desc: 'Rigorous due diligence and quantitative stress-testing across private equity, hydropower, and real estate sectors in Nepal.', stat: '10+', statLabel: 'Sectors Analyzed' },
               { icon: Handshake, title: 'Trusted Partnerships', desc: 'Long-term strategic alliances built on transparency, governance oversight, and mutual value creation with portfolio companies.', stat: '50+', statLabel: 'Active Partners' },
               { icon: TrendingUp, title: 'Proven Returns', desc: 'Consistent risk-adjusted returns through disciplined portfolio construction, active governance, and strategic rebalancing.', stat: '18.5%', statLabel: 'Avg. IRR' },
               { icon: Globe, title: 'Global Perspective', desc: 'Local expertise combined with international investment standards, regulatory frameworks, and cross-border capabilities.', stat: '15+', statLabel: 'Years Track Record' },
             ].map((feature, i) => (
               <ScrollReveal key={feature.title} delay={i * 0.1}>
                 <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-600/30">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                       <feature.icon size={24} className="text-emerald-600" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                     <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{feature.desc}</p>
                     <div className="pt-6 border-t border-slate-100">
                       <p className="text-3xl font-bold bg-gradient-to-r from-emerald-500 via-secondary to-gold-dark bg-clip-text text-transparent">{feature.stat}</p>
                       <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{feature.statLabel}</p>
                     </div>
                   </div>
                 </div>
               </ScrollReveal>
             ))}
           </div>


        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-[#03140d] via-[#0b3b26] to-[#14532d]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center relative">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Start Your Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Invest in{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-secondary-light to-gold-light bg-clip-text text-transparent">Nepal's Future?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Partner with SkyTouch for strategic investment opportunities that deliver sustainable growth 
              and exceptional returns. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f7e08a] via-[#e0b33c] to-[#b8860b] text-[#1c1405] font-semibold rounded-full hover:shadow-[0_16px_45px_rgba(212,160,23,0.45)] transition-all duration-300 shadow-xl hover:-translate-y-0.5">
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/investment" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                <span>Explore Opportunities</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}





