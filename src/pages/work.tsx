import { motion } from "motion/react";
import { Film, Video, Megaphone, Music, FileText, Play } from "lucide-react";
import workHeroImage from "figma:asset/517f9d369f315ec617ee7ed0e189ac71673d655c.png";

export function Work() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0074C7]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Our Work
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Premium immersive experiences across film, advertising, music, and beyond.
            </p>
            
            {/* Work Portfolio Hero Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              <img
                src={workHeroImage}
                alt="Portfolio showcase work"
                className="w-full h-full object-cover opacity-60"
                style={{ 
                  filter: 'brightness(1.8) contrast(1.3)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* NDA Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 text-center mb-12"
        >
          <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>Some of our best work is under NDA</h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-8">
            We've worked with major studios, global brands, and leading platforms on confidential projects. During consultation, we can share detailed case studies and samples relevant to your industry.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 cta-glow"
          >
            Request Portfolio Review
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "14+", label: "Years Experience" },
            { number: "300+", label: "Projects Delivered" },
            { number: "50+", label: "Industry Partners" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-4xl text-[#0074C7] mb-2">{stat.number}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}