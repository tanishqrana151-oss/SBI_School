export const academicCalendarData = {
  title: "Academic Calendar Overview",
  session: "2026–2027 Session",
  schoolName: "SAINT BRAHMANAND INTERNATIONAL SCHOOL",
  location: "Kaithal, HARYANA",
  subtitle: "In accordance with the official 2026-2027 Haryana & CBSE guidelines",
  filePath: "/documents/school-calendar-2026-2027.pdf",
  fileSize: "97 KB",
  format: "PDF",
  totalPages: 2,
  summary: "Comprehensive academic holiday list and official breaks for the 2026–2027 school year, covering government holidays, state festivals, and seasonal recesses.",

  // All 19 official holidays from the official school calendar
  holidays: [
    {
      id: "h-01",
      date: "03 April 2026",
      day: "Friday",
      month: "April 2026",
      occasion: "Good Friday",
      type: "Gazetted Holiday",
      badgeColor: "purple"
    },
    {
      id: "h-02",
      date: "14 April 2026",
      day: "Tuesday",
      month: "April 2026",
      occasion: "Dr. B.R. Ambedkar Jayanti / Vaisakhi",
      type: "National / State Holiday",
      badgeColor: "blue"
    },
    {
      id: "h-03",
      date: "27 May 2026",
      day: "Wednesday",
      month: "May 2026",
      occasion: "Id-ul-Zuha (Bakrid)",
      type: "Gazetted Holiday",
      badgeColor: "emerald"
    },
    {
      id: "h-04",
      date: "17 June 2026",
      day: "Wednesday",
      month: "June 2026",
      occasion: "Maharana Pratap Jayanti",
      type: "State Observance",
      badgeColor: "amber"
    },
    {
      id: "h-05",
      date: "26 June 2026",
      day: "Friday",
      month: "June 2026",
      occasion: "Muharram",
      type: "Gazetted Holiday",
      badgeColor: "emerald"
    },
    {
      id: "h-06",
      date: "31 July 2026",
      day: "Friday",
      month: "July 2026",
      occasion: "Shaheed Udham Singh Martyrdom Day",
      type: "State Observance",
      badgeColor: "amber"
    },
    {
      id: "h-07",
      date: "15 August 2026",
      day: "Saturday",
      month: "August 2026",
      occasion: "Independence Day",
      type: "National Holiday",
      badgeColor: "rose"
    },
    {
      id: "h-08",
      date: "28 August 2026",
      day: "Friday",
      month: "August 2026",
      occasion: "Raksha Bandhan",
      type: "Festival Holiday",
      badgeColor: "orange"
    },
    {
      id: "h-09",
      date: "04 September 2026",
      day: "Friday",
      month: "September 2026",
      occasion: "Janmashtami",
      type: "Festival Holiday",
      badgeColor: "orange"
    },
    {
      id: "h-10",
      date: "23 September 2026",
      day: "Wednesday",
      month: "September 2026",
      occasion: "Haryana Heroes' Martyrdom Day",
      type: "State Observance",
      badgeColor: "amber"
    },
    {
      id: "h-11",
      date: "02 October 2026",
      day: "Friday",
      month: "October 2026",
      occasion: "Mahatma Gandhi Jayanti",
      type: "National Holiday",
      badgeColor: "rose"
    },
    {
      id: "h-12",
      date: "20 October 2026",
      day: "Tuesday",
      month: "October 2026",
      occasion: "Dussehra",
      type: "Festival Holiday",
      badgeColor: "orange"
    },
    {
      id: "h-13",
      date: "26 October 2026",
      day: "Monday",
      month: "October 2026",
      occasion: "Maharishi Valmiki Jayanti",
      type: "Gazetted Holiday",
      badgeColor: "blue"
    },
    {
      id: "h-14",
      date: "01 November 2026",
      day: "Sunday",
      month: "November 2026",
      occasion: "Haryana Day",
      type: "State Observance",
      badgeColor: "amber"
    },
    {
      id: "h-15",
      date: "24 November 2026",
      day: "Tuesday",
      month: "November 2026",
      occasion: "Guru Nanak Dev Jayanti",
      type: "Gazetted Holiday",
      badgeColor: "blue"
    },
    {
      id: "h-16",
      date: "25 December 2026",
      day: "Friday",
      month: "December 2026",
      occasion: "Christmas Day",
      type: "Gazetted Holiday",
      badgeColor: "emerald"
    },
    {
      id: "h-17",
      date: "26 January 2027",
      day: "Tuesday",
      month: "January 2027",
      occasion: "Republic Day",
      type: "National Holiday",
      badgeColor: "rose"
    },
    {
      id: "h-18",
      date: "06 March 2027",
      day: "Saturday",
      month: "March 2027",
      occasion: "Maha Shivratri",
      type: "Festival Holiday",
      badgeColor: "orange"
    },
    {
      id: "h-19",
      date: "22 March 2027",
      day: "Monday",
      month: "March 2027",
      occasion: "Holi",
      type: "Festival Holiday",
      badgeColor: "orange"
    }
  ],

  // School breaks section matching official calendar Page 2
  schoolBreaks: [
    {
      id: "break-summer",
      name: "Summer Break",
      notice: "Dates will be announced by the school.",
      season: "Summer Recess",
      icon: "Sun",
      color: "from-amber-500 to-orange-500",
      description: "Scheduled during peak summer months as per Haryana Education Directorate guidelines."
    },
    {
      id: "break-diwali",
      name: "Diwali Break",
      notice: "Dates will be announced by the school.",
      season: "Festive Recess",
      icon: "Sparkles",
      color: "from-rose-500 to-pink-500",
      description: "Observed during Deepawali celebrations to allow students and staff family time."
    },
    {
      id: "break-winter",
      name: "Winter Break",
      notice: "Dates will be announced by the school.",
      season: "Winter Recess",
      icon: "Snowflake",
      color: "from-sky-500 to-indigo-500",
      description: "Conducted during cold weather conditions in compliance with state government notifications."
    }
  ]
};
