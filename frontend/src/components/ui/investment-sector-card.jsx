import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function InvestmentSectorCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const glowRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const container = glowRef.current
    if (!container) return

    const syncPointer = (e) => {
      const rect = container.getBoundingClientRect()
      container.style.setProperty('--x', `${(e.clientX - rect.left).toFixed(0)}px`)
      container.style.setProperty('--y', `${(e.clientY - rect.top).toFixed(0)}px`)
    }

    container.addEventListener('pointermove', syncPointer, { passive: true })
    return () => container.removeEventListener('pointermove', syncPointer)
  }, [])

  const sectors = [
    {
      title: 'Private Equity',
      pct: 65,
      color: '#0f5fa8',
      desc: 'Partnering for growth and transformation',
      icon: '📈',
      details: 'Strategic investments in high-growth companies with strong fundamentals and experienced management teams.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Real Estate',
      pct: 44,
      color: '#059669',
      desc: 'Creating value through strategic property investment',
      icon: '🏗️',
      details: 'Premium commercial and residential properties in prime locations with strong rental yields.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Capital Markets',
      pct: 84,
      color: '#0f5fa8',
      desc: 'Strategic public market investments',
      icon: '📊',
      details: 'Well-researched public market investments across diverse sectors and geographies.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Hydropower',
      pct: 48,
      color: '#3b9ae0',
      desc: 'Sustainable energy production',
      icon: '💧',
      details: 'Long-term investments in renewable energy projects with stable cash flows.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Tourism',
      pct: 43,
      color: '#d4a017',
      desc: 'Growth in Nepal tourism sector',
      icon: '🏔️',
      details: 'Strategic investments in tourism infrastructure and hospitality ventures.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Hospitality',
      pct: 66,
      color: '#0f5fa8',
      desc: 'Premium hotel and resort investments',
      icon: '🏨',
      details: 'High-quality hotel properties with consistent occupancy and revenue growth.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90&fit=crop&auto=format',
    },
    {
      title: 'Technology & AI',
      pct: 72,
      color: '#b8860b',
      desc: 'Innovation in digital transformation',
      icon: '🤖',
      details: 'Strategic investments in cutting-edge technology and artificial intelligence companies driving digital innovation and automation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=90&fit=crop&auto=format',
    },
  ]

  const currentSector = sectors[activeIndex]

  return (
    <div
      ref={glowRef}
      className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050d16]"
    >
      {/* Ambient background image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSector.image}
          src={currentSector.image}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-[#04131f]/95 via-[#051a2a]/85 to-[#04131f]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020a12]/95 via-[#020a12]/20 to-[#020a12]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020a12]/75 via-[#020a12]/30 to-transparent" />

      {/* Rich color mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,95,168,0.34),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(212,160,23,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(212,160,23,0.09)_50%,transparent_65%)]" />

      {/* Accent glows */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-25 blur-[130px] transition-colors duration-700"
        style={{ backgroundColor: currentSector.color }}
      />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-gold/15 blur-[120px]" />

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.07), transparent 45%)',
        }}
      />

      <div className="relative px-5 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16">
        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between gap-4 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: currentSector.color }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: currentSector.color }}
              />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
              Strategic Investments
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 sm:text-xs">
            {String(activeIndex + 1).padStart(2, '0')} <span className="text-white/20">/</span>{' '}
            {String(sectors.length).padStart(2, '0')}
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left - Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSector.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <h3 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
                  {currentSector.title}
                </h3>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/45 sm:text-sm">
                  {currentSector.desc}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  {currentSector.details}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Allocation */}
            <div className="mt-8 md:mt-10">
              <div className="mb-3 flex items-end justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-xs">
                  Portfolio Allocation
                </span>
                <span
                  className="font-display text-2xl font-bold transition-colors duration-500 sm:text-3xl"
                  style={{ color: currentSector.color }}
                >
                  {currentSector.pct}%
                </span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${currentSector.color}66, ${currentSector.color})`,
                  }}
                  initial={false}
                  animate={{ width: `${currentSector.pct}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Sector selector */}
            <div className="mt-8 md:mt-10">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Select Sector
                </span>
                <span className="text-[10px] text-white/25">Tap to explore</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector, i) => {
                  const active = activeIndex === i
                  return (
                    <motion.button
                      key={sector.title}
                      onClick={() => setActiveIndex(i)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors duration-300 ${
                        active
                          ? 'border-transparent bg-white text-slate-900 shadow-lg'
                          : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-sm leading-none">{sector.icon}</span>
                      <span>{sector.title}</span>
                      {active && (
                        <span
                          className="ml-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white"
                          style={{ backgroundColor: sector.color }}
                        >
                          {sector.pct}%
                        </span>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/investment', { state: { scrollTo: 'portfolio-organized' } })}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-tertiary via-primary to-gold-dark px-6 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              Explore Sectors
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Right - Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-40 blur-2xl transition-colors duration-700"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${currentSector.color}55, transparent 60%)`,
              }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 backdrop-blur-sm">
              <div className="relative h-[280px] overflow-hidden rounded-[1.6rem] sm:h-[340px] md:h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSector.image}
                    src={currentSector.image}
                    alt={currentSector.title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Sector {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl sm:p-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">Focus</p>
                    <p className="mt-0.5 text-xs font-semibold text-white sm:text-sm">
                      {currentSector.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">Allocation</p>
                    <p
                      className="font-display text-lg font-bold sm:text-xl"
                      style={{ color: currentSector.color }}
                    >
                      {currentSector.pct}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-4 rotate-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl sm:-right-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">Since 2012</p>
              <p className="text-sm font-bold text-white">Nepal Focused</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
