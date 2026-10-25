import { motion } from 'framer-motion';
import { Target, Sparkles, BookOpen, Globe2, HeartHandshake, Award, Quote, CheckCircle2 } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';

export function MissionVision() {
  const { director, mission, vision } = schoolInfo;

  const missionPillars = [
    {
      icon: BookOpen,
      title: "Vedic Culture & Character",
      description: "Developing virtues, character, and patriotism in youth by synthesizing timeless Vedic culture with education."
    },
    {
      icon: Globe2,
      title: "Ultra-Modern Education",
      description: "Providing resource-based education and global opportunities to compete and excel anywhere in the world."
    },
    {
      icon: HeartHandshake,
      title: "Value-Based Life Skills",
      description: "Enhancing inner potentials and nurturing essential life skills to mold students into responsible citizens."
    }
  ];

  const visionPillars = [
    {
      title: "Vedic Roots & Traditional Values",
      description: "Firmly grounded in the time-tested wisdom of the Vedic system, cultivating humility, ethics, and cultural pride."
    },
    {
      title: "Highest Level of Humanity & Spirituality",
      description: "Fostering boundless compassion, selfless service, and spiritual enlightenment for the upliftment of society."
    },
    {
      title: "Center of Academic Excellence",
      description: "Dedicated to holistic student development to be recognized as a premier academic center in India and abroad."
    }
  ];

  return (
    <section id="mission-vision" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-school-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-school-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================================
            SECTION 1: OUR MISSION (FIRST) + DIRECTOR'S PHOTO SIDE-BY-SIDE
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Our Mission Content (First on Desktop & Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Mission Badge & Prominent Enlarged Heading */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-school-secondary font-bold text-xs uppercase tracking-wider shadow-soft-sm mb-3">
                <Target className="w-4 h-4 text-school-secondary" />
                <span>Saint Brahmanand International School</span>
              </div>

              {/* Enlarged Primary Heading: Our Mission */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-school-primary font-heading tracking-tight leading-tight">
                Our Mission
              </h2>

              <p className="text-base sm:text-lg font-bold text-school-secondary mt-2">
                Synthesizing Ancient Vedic Culture with Ultra-Modern Education
              </p>
            </div>

            {/* Official Mission Statement Highlight Box */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-school-secondary shadow-soft border border-slate-200/80">
              <Quote className="w-10 h-10 text-school-secondary/15 absolute top-3 right-4 pointer-events-none" />
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                "{mission.statement}"
              </p>
            </div>

            {/* Mission Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {missionPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-soft-sm hover:shadow-soft hover:border-school-secondary/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-school-secondary flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-school-primary font-heading mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc || pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Director Photo Card (Side-by-side with Mission) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              
              {/* Outer Decorative Gradient Border */}
              <div className="p-2 sm:p-3 rounded-3xl bg-gradient-to-br from-school-accent/40 via-white to-school-secondary/20 shadow-soft-lg border border-slate-200/80">
                
                {/* Photo Frame Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-inner group">
                  <img
                    src={director.image}
                    alt={director.caption}
                    className="w-full h-auto aspect-[4/3] sm:aspect-[5/4] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />

                  {/* Subtle Top & Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Leadership Badge */}
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-school-primary-dark/90 backdrop-blur-md text-school-accent border border-school-accent/30 text-[11px] font-bold shadow-md">
                    <Award className="w-3.5 h-3.5 text-school-accent" />
                    <span>Leadership</span>
                  </div>
                </div>

                {/* Under Photo: Required Text "Our Director-Sparsh Chauhan" */}
                <div className="pt-4 pb-2 px-3 text-center">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-school-primary font-heading tracking-tight">
                    {director.caption}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-school-secondary mt-1">
                    {director.institution}
                  </p>
                  <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-school-secondary via-school-accent to-school-primary" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>


        {/* =========================================================================
            SECTION 2: OUR VISION
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-24 pt-14 border-t border-slate-200/80"
        >
          {/* Vision Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 font-bold text-xs uppercase tracking-wider mb-3 shadow-soft-sm">
              <Sparkles className="w-4 h-4 text-school-accent-dark" />
              <span>Saint Brahmanand International School</span>
            </div>

            {/* Enlarged Primary Heading: Our Vision */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-school-primary font-heading tracking-tight leading-tight">
              Our Vision
            </h2>

            <p className="text-base sm:text-lg font-bold text-school-secondary mt-2">
              An Academic Center of Excellence in India & Abroad
            </p>
          </div>

          {/* Vision Statement Hero Card */}
          <div className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-school-primary-dark via-school-primary to-[#183963] text-white p-7 sm:p-10 shadow-soft-lg overflow-hidden border border-school-primary-light/30">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-school-accent/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-school-secondary/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-school-accent text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Traditional Vedic Values & Modern Excellence</span>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-100 leading-relaxed font-heading italic">
                "{vision.statement}"
              </blockquote>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-school-accent">Saint Brahmanand International School</span>
                <span className="hidden sm:inline">Mundri (Kaithal)</span>
              </div>
            </div>
          </div>

          {/* Three Key Vision Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 sm:mt-10">
            {visionPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="text-base font-bold text-school-primary font-heading">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default MissionVision;
