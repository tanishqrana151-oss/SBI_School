import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Download,
  ExternalLink,
  Search,
  Sparkles,
  Sun,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  Printer,
  CalendarDays,
  Clock,
  Info
} from 'lucide-react';
import { academicCalendarData } from '../../data/calendarData';

export function AcademicCalendarModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'q1', 'q2', 'q3', 'q4', 'breaks'
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const filteredHolidays = useMemo(() => {
    return academicCalendarData.holidays.filter((item) => {
      // Quarter filter
      let matchesQuarter = true;
      if (activeTab === 'q1') {
        matchesQuarter = ['April 2026', 'May 2026', 'June 2026'].includes(item.month);
      } else if (activeTab === 'q2') {
        matchesQuarter = ['July 2026', 'August 2026', 'September 2026'].includes(item.month);
      } else if (activeTab === 'q3') {
        matchesQuarter = ['October 2026', 'November 2026', 'December 2026'].includes(item.month);
      } else if (activeTab === 'q4') {
        matchesQuarter = ['January 2027', 'March 2027'].includes(item.month);
      } else if (activeTab === 'breaks') {
        return false;
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.occasion.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q) ||
        item.day.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.month.toLowerCase().includes(q);

      return matchesQuarter && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[92vh] z-10"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-school-primary-dark via-school-primary to-school-primary-light text-white p-6 sm:p-7 shrink-0">
            {/* Background glowing orb decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-school-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-school-accent text-school-primary-dark shadow-sm">
                    {academicCalendarData.session}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-slate-200 border border-white/15">
                    Official Release
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
                  Academic Calendar Overview
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
                  {academicCalendarData.schoolName} • {academicCalendarData.location}
                </p>
                <p className="text-[11px] sm:text-xs text-school-accent-light font-medium flex items-center gap-1.5 pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-school-accent" />
                  <span>{academicCalendarData.subtitle}</span>
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 shrink-0 focus:outline-none focus:ring-2 focus:ring-school-accent"
                aria-label="Close Calendar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-white/10 text-xs">
              <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm border border-white/10">
                <p className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Total Holidays</p>
                <p className="text-base sm:text-lg font-bold text-school-accent font-heading">19 Holidays</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm border border-white/10">
                <p className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Academic Session</p>
                <p className="text-base sm:text-lg font-bold text-white font-heading">2026–2027</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm border border-white/10">
                <p className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">School Breaks</p>
                <p className="text-base sm:text-lg font-bold text-white font-heading">3 Recesses</p>
              </div>
            </div>
          </div>

          {/* Controls Bar: Search & Tabs */}
          <div className="p-4 sm:p-5 border-b border-slate-200/80 bg-slate-50/80 shrink-0 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search holiday by name, date (e.g. Good Friday, Holi, 15 August)..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* PDF Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={academicCalendarData.filePath}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-school-primary hover:bg-school-secondary text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF ({academicCalendarData.fileSize})</span>
                </a>
                <a
                  href={academicCalendarData.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:bg-white text-slate-700 text-xs font-semibold transition-colors bg-white/70"
                  title="Open original PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View PDF</span>
                </a>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {[
                { id: 'all', label: 'All Holidays (19)' },
                { id: 'q1', label: 'Apr – Jun 2026' },
                { id: 'q2', label: 'Jul – Sep 2026' },
                { id: 'q3', label: 'Oct – Dec 2026' },
                { id: 'q4', label: 'Jan – Mar 2027' },
                { id: 'breaks', label: '🏖️ School Breaks (Notice)' },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      isSelected
                        ? 'bg-school-primary text-white shadow-soft-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-school-primary border border-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
            {/* School Breaks Notice Cards (shown if tab is breaks or all) */}
            {(activeTab === 'breaks' || activeTab === 'all') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <h3 className="text-sm font-bold text-school-primary uppercase tracking-wider font-heading">
                      Important Notice Regarding School Breaks
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    Page 2 of Official Calendar
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {academicCalendarData.schoolBreaks.map((b) => {
                    const IconComponent =
                      b.icon === 'Sun' ? Sun : b.icon === 'Sparkles' ? Sparkles : Snowflake;

                    return (
                      <div
                        key={b.id}
                        className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-soft-sm hover:shadow-soft transition-all duration-200 relative overflow-hidden group"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${b.color} text-white flex items-center justify-center shrink-0 shadow-sm`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {b.season}
                            </span>
                            <h4 className="text-base font-bold text-school-primary font-heading">
                              {b.name}
                            </h4>
                          </div>
                        </div>

                        <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-2 text-xs">
                          <div className="flex items-start gap-1.5 text-amber-800 bg-amber-50/90 px-2.5 py-1.5 rounded-lg border border-amber-200/60 font-medium">
                            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{b.notice}</span>
                          </div>
                          <p className="text-slate-500 text-[11px] leading-relaxed">
                            {b.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Holidays List / Table */}
            {activeTab !== 'breaks' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-school-secondary" />
                    <h3 className="text-sm font-bold text-school-primary uppercase tracking-wider font-heading">
                      Government & Standard Holidays ({filteredHolidays.length})
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">
                    Official 2026–2027 Haryana & CBSE Schedule
                  </span>
                </div>

                {filteredHolidays.length > 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100/80 text-slate-600 border-b border-slate-200 font-bold">
                            <th className="py-3 px-4 w-12 text-center text-slate-400">#</th>
                            <th className="py-3 px-4 w-44">Date & Day</th>
                            <th className="py-3 px-4">Occasion</th>
                            <th className="py-3 px-4 w-40 text-right">Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredHolidays.map((item, idx) => (
                            <tr
                              key={item.id}
                              className="hover:bg-slate-50/80 transition-colors group"
                            >
                              <td className="py-3.5 px-4 text-center text-slate-400 text-xs font-mono">
                                {idx + 1}
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-school-primary flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5 text-school-secondary shrink-0" />
                                  <span>{item.date}</span>
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium pl-5">
                                  {item.day}
                                </div>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="font-semibold text-slate-800 group-hover:text-school-secondary transition-colors">
                                  {item.occasion}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                  {item.type}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 space-y-2">
                    <Calendar className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="text-sm font-semibold text-slate-700">No holidays found</p>
                    <p className="text-xs text-slate-400">
                      Try clearing your search query "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Official 2-page document verified for session 2026–2027</span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
              <a
                href={academicCalendarData.filePath}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-school-primary hover:bg-school-secondary text-white text-xs font-bold shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default AcademicCalendarModal;
