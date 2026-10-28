import { Calendar, Download, ExternalLink, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { academicCalendarData } from '../../data/calendarData';

export function AcademicCalendarSpotlight({ onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-3xl overflow-hidden mb-10 shadow-soft-lg border border-slate-200/80 bg-gradient-to-br from-school-primary-dark via-school-primary to-[#183a66] text-white p-6 sm:p-8 lg:p-9"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-school-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-64 h-64 bg-school-secondary/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Badges & Info */}
        <div className="max-w-2xl space-y-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent text-school-primary-dark shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Release • Session 2026–2027</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/15 backdrop-blur-sm">
              Haryana & CBSE Aligned
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Academic Calendar Overview (2026–2027)
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Access the complete official schedule of 19 government holidays, state observances, and advance notifications for Summer, Diwali, and Winter breaks.
          </p>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-slate-200">
              <Calendar className="w-3.5 h-3.5 text-school-accent" />
              <span>19 Gazetted Holidays</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-slate-200">
              <FileText className="w-3.5 h-3.5 text-school-accent" />
              <span>2-Page Verified Document (97 KB)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenModal}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-school-accent hover:bg-school-accent-dark text-school-primary-dark font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-school-primary-dark" />
            <span>View Interactive Schedule</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={academicCalendarData.filePath}
              download
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-colors"
              title="Download Academic Calendar PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={academicCalendarData.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/15 transition-colors"
              title="Open Academic Calendar PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AcademicCalendarSpotlight;
