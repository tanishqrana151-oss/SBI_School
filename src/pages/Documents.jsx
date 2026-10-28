import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { DocumentFilterBar } from '../components/documents/DocumentFilterBar';
import { DocumentCard } from '../components/common/DocumentCard';
import { CTASection } from '../components/common/CTASection';
import { AcademicCalendarSpotlight } from '../components/documents/AcademicCalendarSpotlight';
import { AcademicCalendarModal } from '../components/documents/AcademicCalendarModal';
import { documentsData, documentCategories } from '../data/documents';
import { FileSearch, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Documents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Documents';
  const initialOpenCalendar = searchParams.get('calendar') === 'true';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    documentCategories.includes(initialCategory) ? initialCategory : 'All Documents'
  );
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(initialOpenCalendar);

  // Sync category changes with URL parameter cleanly without page reloads
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All Documents') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredDocuments = useMemo(() => {
    return documentsData.filter((doc) => {
      const matchesCategory =
        selectedCategory === 'All Documents' || doc.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query) ||
        (doc.authority && doc.authority.toLowerCase().includes(query)) ||
        (doc.refNumber && doc.refNumber.toLowerCase().includes(query)) ||
        (doc.badge && doc.badge.toLowerCase().includes(query)) ||
        (doc.keywords && doc.keywords.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    handleCategoryChange('All Documents');
  };

  const handleDocumentPreview = (doc) => {
    if (doc.id === 'doc-academic-calendar-2026-27' || doc.hasInteractiveView) {
      setIsCalendarModalOpen(true);
    }
  };

  return (
    <>
      <SEO
        title="Official Documents, Academic Calendar & Mandatory Disclosures"
        description="Download official school academic calendar (2026-2027), CBSE compliance certificates, building safety approval, land records, built-up area details, and water test reports for Saint Brahmanand International School, Mundri."
      />

      {/* Page Hero */}
      <PageHero
        title="Official Documents & Certificates"
        subtitle="School academic calendar, mandatory public disclosures, building safety, land ownership records, and health certifications."
        badge="Documents & Downloads"
        breadcrumbs={[{ label: "Documents" }]}
        backgroundImage="/images/hero/hero-campus-main.jpg"
      />

      {/* Documents Section */}
      <section className="py-14 sm:py-16 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Spotlight: Academic Calendar Overview */}
          <AcademicCalendarSpotlight onOpenModal={() => setIsCalendarModalOpen(true)} />

          {/* Filter Bar */}
          <DocumentFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categories={documentCategories}
            totalCount={documentsData.length}
            filteredCount={filteredDocuments.length}
          />

          {/* Documents Grid / Empty State */}
          {filteredDocuments.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredDocuments.map((doc, idx) => (
                  <DocumentCard
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={handleDocumentPreview}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 text-center max-w-md mx-auto border border-slate-200/80 shadow-soft space-y-3"
            >
              <FileSearch className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-school-primary font-heading">
                No Documents Found
              </h3>
              <p className="text-xs text-slate-500">
                No matching files for "{searchQuery || selectedCategory}".
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-school-primary hover:bg-school-secondary text-white text-xs font-bold transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Interactive Academic Calendar Modal */}
      <AcademicCalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />

      {/* CTA Section */}
      <CTASection
        title="Need Assistance with Documents or Forms?"
        subtitle="Contact the school administrative office for help with admissions, academic calendars, or transfers."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="All Streams"
        secondaryButtonLink="/streams"
      />
    </>
  );
}

export default Documents;
