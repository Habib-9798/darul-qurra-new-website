export const programs = [
  {
  id: "department-nazra-quran",
  slug: "department-nazra-quran",
  title: "Department of Nazra Quran",
  summary: "Foundational Quran reading department focused on correct pronunciation, fluency, and basic Tajweed.",
  overview: "The Department of Nazra Quran is designed for beginners who want to learn how to read the Holy Quran correctly and confidently. Students are guided step by step from Arabic letters, Makharij, joining rules, short Surahs, and supervised Quran reading. This department builds the foundation for future Tajweed, Hifz, and advanced Quranic studies.",
  audience: "Beginners, Children, Adults, New Quran learners",
  duration: "1 to 2 Years",
  format: "On-Campus / Online",
  outcomes: [
    "Fluent reading of the Holy Quran",
    "Correct recognition of Arabic letters",
    "Improved Makharij and pronunciation",
    "Basic understanding of Tajweed rules",
    "Confidence in reading from the Mushaf"
  ],
  eligibility: [
    "No prior Quran reading experience required.",
    "Minimum age is usually 5 years.",
    "Regular attendance and daily practice are required."
  ],
  structure: [
    "Arabic letters and pronunciation",
    "Joining letters and word reading",
    "Short Surahs and basic fluency",
    "Supervised Quran reading practice",
    "Basic Tajweed correction"
  ],
  timings: "Morning: 8:00 AM - 12:00 PM | Evening: 4:00 PM - 7:00 PM",
  facultyIds: ["qari-usman", "qari-bilal"],
  relatedPrograms: [
    "department-tajweed",
    "department-hifz-ul-quran",
    "department-online-duroos"
  ],
  image: "/images/departments/nazra-quran.png"
},
{
  id: "department-tajweed",
  slug: "department-tajweed",
  title: "Department of Tajweed",
  summary: "Quran recitation department focused on Tajweed rules, Makharij, Sifaat, and beautiful recitation.",
  overview: "The Department of Tajweed helps students improve their Quran recitation through proper Tajweed rules, Makharij, Sifaat, stopping signs, and practical correction. This department is suitable for students who can already read the Quran but want to remove mistakes, improve fluency, and recite with confidence under qualified teachers.",
  audience: "Quran readers, Huffaz, Adults, Students seeking recitation correction",
  duration: "6 Months to 1 Year",
  format: "On-Campus / Online",
  outcomes: [
    "Correct pronunciation of Quranic letters",
    "Understanding of practical Tajweed rules",
    "Improved fluency and confidence in recitation",
    "Reduction of common recitation mistakes",
    "Better rhythm and clarity in Quran recitation"
  ],
  eligibility: [
    "Student should be able to read basic Quran text.",
    "Suitable for children and adults.",
    "Regular practice is required for improvement."
  ],
  structure: [
    "Makharij and Sifaat of letters",
    "Rules of Noon Sakinah and Tanween",
    "Rules of Meem Sakinah",
    "Madd rules and stopping signs",
    "Practical recitation correction"
  ],
  timings: "Morning: 8:00 AM - 12:00 PM | Evening: 4:00 PM - 7:00 PM",
  facultyIds: ["qari-usman", "qari-bilal"],
  relatedPrograms: [
    "department-nazra-quran",
    "department-hifz-ul-quran",
    "department-saba-ashra-qiraat"
  ],
  image: "/images/departments/tajweed-program.png"
},
  {
    id: "department-darul-ifta",
    slug: "department-darul-ifta",
    title: "Department of Dar-ul-Ifta",
    summary: "Islamic legal guidance, fatwa studies, and scholarly research based on Quran, Hadith, and classical Fiqh.",
    overview: "The Department of Dar-ul-Ifta provides structured Islamic legal guidance and scholarly training in fatwa writing, Fiqh research, and applied Islamic rulings. Students learn how Islamic answers are derived from authentic sources under the supervision of qualified scholars. This department is designed for advanced learners who want to understand Islamic legal reasoning with responsibility, accuracy, and respect for classical scholarship.",
    audience: "Advanced Islamic students, Scholars, Graduates of Dars-e-Nizami",
    duration: "1 to 2 Years",
    format: "On-Campus",
    outcomes: [
      "Understanding of fatwa writing principles",
      "Ability to research Islamic legal issues",
      "Strong grounding in classical Fiqh references",
      "Responsible approach to public religious guidance"
    ],
    eligibility: [
      "Completion of Dars-e-Nizami or equivalent Islamic studies.",
      "Strong understanding of Arabic and Fiqh.",
      "Approval from the academic department may be required."
    ],
    structure: [
      "Principles of Ifta and Islamic legal methodology",
      "Study of classical Fiqh references",
      "Practical fatwa writing and case analysis",
      "Supervised research under senior scholars"
    ],
    timings: "Morning and academic schedule based on department availability",
    facultyIds: [],
    relatedPrograms: ["department-dars-e-nizami", "department-takhassusat"],
    image: "/images/departments/darul-ifta.png"
  },
  {
    id: "department-computer-science",
    slug: "department-computer-science",
    title: "Computer Science Department",
    summary: "Modern computer education with practical digital skills for students in an Islamic academic environment.",
    overview: "The Computer Science Department introduces students to essential technology skills, computer literacy, basic programming, digital tools, and modern learning systems. The goal is to prepare students for today’s digital world while maintaining a disciplined Islamic educational environment. Students learn practical computer use, problem solving, and foundational concepts that can support future academic and career growth.",
    audience: "School students, Beginners, Young learners",
    duration: "Flexible / Academic Year",
    format: "On-Campus",
    outcomes: [
      "Basic computer literacy",
      "Understanding of digital tools and safe technology use",
      "Introduction to coding and logical thinking",
      "Confidence in using computers for learning"
    ],
    eligibility: [
      "Basic reading and writing skills.",
      "No prior computer knowledge required.",
      "Suitable for students interested in technology."
    ],
    structure: [
      "Computer basics and typing practice",
      "MS Office and digital learning tools",
      "Introduction to coding and problem solving",
      "Practical projects and assignments"
    ],
    timings: "As per academic timetable",
    facultyIds: [],
    relatedPrograms: ["department-general-sciences", "department-online-duroos"],
    image: "/images/departments/computer-science.png"
  },
  {
    id: "department-writing-authorship",
    slug: "department-writing-authorship",
    title: "Department of Writing and Authorship",
    summary: "Training in Islamic writing, research, article writing, book preparation, and scholarly authorship.",
    overview: "The Department of Writing and Authorship focuses on developing students’ ability to write clearly, research deeply, and present Islamic knowledge in a responsible and professional manner. Students learn article writing, research structure, editing, referencing, and content preparation for books, magazines, and educational publications.",
    audience: "Students, Writers, Researchers, Islamic studies graduates",
    duration: "Flexible",
    format: "On-Campus / Workshop Based",
    outcomes: [
      "Improved Islamic writing and research skills",
      "Ability to prepare articles and educational content",
      "Understanding of editing and referencing",
      "Confidence in scholarly expression"
    ],
    eligibility: [
      "Basic writing ability in Urdu, Arabic, or English.",
      "Interest in Islamic research and authorship.",
      "Regular attendance and writing practice."
    ],
    structure: [
      "Basics of Islamic writing",
      "Research methods and reference handling",
      "Article and booklet preparation",
      "Editing, proofreading, and final review"
    ],
    timings: "As per department schedule",
    facultyIds: [],
    relatedPrograms: ["department-publication-media", "department-darul-ifta"],
    image: "/images/departments/writing-authorship.png"
  },
  {
    id: "department-publication-media",
    slug: "department-publication-media",
    title: "Department of Publication and Media",
    summary: "Islamic publishing, media production, educational content, and digital communication.",
    overview: "The Department of Publication and Media manages and trains students in Islamic educational content production, publication, media presentation, and digital communication. This department helps spread authentic Islamic knowledge through books, posters, videos, social media, and other modern platforms while maintaining scholarly accuracy and Islamic values.",
    audience: "Media students, Content creators, Islamic education teams",
    duration: "Flexible",
    format: "On-Campus / Practical Training",
    outcomes: [
      "Understanding of Islamic media work",
      "Basic design and publication awareness",
      "Content planning for educational media",
      "Responsible communication of Islamic knowledge"
    ],
    eligibility: [
      "Interest in media, publication, or content creation.",
      "Basic computer knowledge is helpful.",
      "Commitment to Islamic values in communication."
    ],
    structure: [
      "Introduction to Islamic media and publication",
      "Content planning and script preparation",
      "Basic design and layout concepts",
      "Digital publishing and social media awareness"
    ],
    timings: "As per department schedule",
    facultyIds: [],
    relatedPrograms: ["department-writing-authorship", "department-computer-science"],
    image: "/images/departments/publication-media.png"
  },
  {
    id: "department-general-sciences",
    slug: "department-general-sciences",
    title: "Department of General Sciences",
    summary: "Science education including basic concepts of physics, chemistry, biology, and general knowledge.",
    overview: "The Department of General Sciences provides students with foundational knowledge of modern science subjects in a disciplined academic environment. Students study basic concepts, practical understanding, observation, and scientific thinking while continuing their Islamic educational journey.",
    audience: "School students and general learners",
    duration: "Academic Year",
    format: "On-Campus",
    outcomes: [
      "Understanding of basic science concepts",
      "Improved observation and reasoning skills",
      "Preparation for academic science subjects",
      "Balanced learning of religious and modern education"
    ],
    eligibility: [
      "Suitable for school-level students.",
      "Basic reading and writing ability required.",
      "Interest in science and learning."
    ],
    structure: [
      "Basic physics concepts",
      "Basic chemistry concepts",
      "Biology and life sciences",
      "General knowledge and practical learning"
    ],
    timings: "As per academic timetable",
    facultyIds: [],
    relatedPrograms: ["department-computer-science", "department-wifaq-aama"],
    image: "/images/departments/general-sciences.png"
  },
  {
    id: "department-darul-aytam",
    slug: "department-darul-aytam",
    title: "Department of Dar-ul-Aytam",
    summary: "Educational and moral support for orphan students in a caring Islamic environment.",
    overview: "The Department of Dar-ul-Aytam focuses on the education, care, moral training, and support of orphan students. The department aims to provide a safe and respectful environment where students can learn Quran, Islamic studies, basic academics, manners, and life values with dignity and compassion.",
    audience: "Orphan students and supported children",
    duration: "Ongoing",
    format: "On-Campus",
    outcomes: [
      "Access to Quranic and academic education",
      "Improved manners and Islamic character",
      "Safe and supportive learning environment",
      "Personal and educational development"
    ],
    eligibility: [
      "For orphan or deserving students.",
      "Admission may require verification and approval.",
      "Student must be ready for regular study routine."
    ],
    structure: [
      "Quranic education",
      "Basic Islamic studies",
      "Academic support classes",
      "Character building and daily discipline"
    ],
    timings: "As per institute schedule",
    facultyIds: [],
    relatedPrograms: ["department-hifz-ul-quran", "department-banat-islamic-education"],
    image: "/images/departments/darul-aytam.png"
  },
  {
    id: "department-wifaq-aama",
    slug: "department-wifaq-aama",
    title: "Department of Wifaq Aama",
    summary: "Preparation for Wifaq-ul-Madaris Aama level with structured Islamic and academic study.",
    overview: "The Department of Wifaq Aama prepares students for the Aama level under the Wifaq-ul-Madaris system. The program builds a strong base in Arabic, Islamic studies, Quran, Hadith, Fiqh, and related subjects. Students are guided through regular lessons, revision, assessment, and exam preparation.",
    audience: "Students preparing for Wifaq Aama level",
    duration: "Academic Year",
    format: "On-Campus",
    outcomes: [
      "Preparation for Wifaq Aama examinations",
      "Strong base in Islamic studies",
      "Improved Arabic and religious understanding",
      "Discipline in study and revision"
    ],
    eligibility: [
      "Basic Islamic education background.",
      "Ability to read Quran and basic Urdu/Arabic.",
      "Commitment to regular classes."
    ],
    structure: [
      "Arabic and Islamic studies foundation",
      "Fiqh and Hadith basics",
      "Quran and related subjects",
      "Revision, tests, and exam preparation"
    ],
    timings: "As per Wifaq class timetable",
    facultyIds: [],
    relatedPrograms: ["department-dars-e-nizami", "department-general-sciences"],
    image: "/images/departments/wifaq-aama.png"
  },
  {
    id: "department-dars-e-nizami",
    slug: "department-dars-e-nizami",
    title: "Department of Dars-e-Nizami",
    summary: "Classical Islamic scholarship program covering Arabic, Quran, Hadith, Fiqh, Tafseer, and Islamic sciences.",
    overview: "The Department of Dars-e-Nizami offers a complete classical Islamic studies program designed to prepare students for scholarship and service to the Ummah. Students study Arabic grammar, Tafseer, Hadith, Fiqh, Usool, logic, literature, and other Islamic sciences through a structured traditional curriculum.",
    audience: "Students seeking complete Islamic scholarship training",
    duration: "Multi-Year Program",
    format: "On-Campus",
    outcomes: [
      "Strong understanding of classical Islamic sciences",
      "Ability to study Arabic and Islamic texts",
      "Preparation for teaching, research, and religious service",
      "Foundation for specialization in advanced departments"
    ],
    eligibility: [
      "Basic Islamic education required.",
      "Ability to commit to a long-term study program.",
      "Admission approval may be required."
    ],
    structure: [
      "Arabic grammar and literature",
      "Fiqh and Usool-ul-Fiqh",
      "Tafseer and Hadith studies",
      "Advanced Islamic sciences and final-year specialization"
    ],
    timings: "Morning academic schedule",
    facultyIds: [],
    relatedPrograms: ["department-darul-ifta", "department-takhassusat"],
    image: "/images/departments/dars-e-nizami.png"
  },
  {
    id: "department-hifz-ul-quran",
    slug: "department-hifz-ul-quran",
    title: "Department of Hifz-ul-Quran Al-Kareem",
    summary: "Complete memorization of the Holy Quran with revision, Tajweed, and disciplined daily practice.",
    overview: "The Department of Hifz-ul-Quran Al-Kareem is designed for students who want to memorize the Holy Quran with accuracy, discipline, and strong revision. Students are guided step by step by qualified teachers, with focus on correct pronunciation, daily sabaq, sabqi, manzil, and long-term retention.",
    audience: "Children, young students, and dedicated learners",
    duration: "2 to 4 Years",
    format: "On-Campus",
    outcomes: [
      "Memorization of the Holy Quran",
      "Strong daily revision habit",
      "Improved Tajweed and pronunciation",
      "Confidence in recitation and retention"
    ],
    eligibility: [
      "Ability to read the Quran is preferred.",
      "Regular attendance is required.",
      "Student must be ready for daily memorization and revision."
    ],
    structure: [
      "Nazra and pronunciation preparation",
      "Daily new lesson memorization",
      "Sabqi and Manzil revision",
      "Final revision and completion preparation"
    ],
    timings: "Morning: 8:00 AM - 12:00 PM | Evening options may be available",
    facultyIds: [],
    relatedPrograms: ["nazra-quran", "tajweed-program", "department-saba-ashra-qiraat"],
    image: "/images/departments/hifz-ul-quran.png"
  },
  {
    id: "department-saba-ashra-qiraat",
    slug: "department-saba-ashra-qiraat",
    title: "Department of Saba Ashra Qira’at",
    summary: "Advanced Quran recitation studies covering selected Qira’at with precision and scholarly supervision.",
    overview: "The Department of Saba Ashra Qira’at is an advanced department for students who want to study the recognized modes of Quranic recitation. The department focuses on accuracy, Sanad-based learning, Tajweed mastery, and practical recitation under expert supervision.",
    audience: "Advanced Quran students, Huffaz, Qaris",
    duration: "Flexible / Advanced Program",
    format: "On-Campus",
    outcomes: [
      "Advanced understanding of Qira’at",
      "Improved recitation precision",
      "Awareness of differences between recitation styles",
      "Preparation for higher Quranic recitation studies"
    ],
    eligibility: [
      "Strong Quran reading ability required.",
      "Hifz or advanced Tajweed background preferred.",
      "Assessment by teacher may be required."
    ],
    structure: [
      "Revision of Tajweed and Makharij",
      "Introduction to Qira’at principles",
      "Practical recitation under supervision",
      "Advanced correction and oral assessment"
    ],
    timings: "As per Qira’at department schedule",
    facultyIds: [],
    relatedPrograms: ["department-hifz-ul-quran", "tajweed-program"],
    image: "/images/departments/saba-ashra-qiraat.png"
  },
  {
    id: "department-banat-islamic-education",
    slug: "department-banat-islamic-education",
    title: "Girls’ / Banat Islamic Education Department",
    summary: "Islamic education for girls with focus on Quran, manners, Islamic studies, and personal development.",
    overview: "The Girls’ / Banat Islamic Education Department provides a respectful and safe Islamic learning environment for female students. The department focuses on Quran reading, basic Islamic knowledge, character building, modesty, manners, and practical religious understanding for daily life.",
    audience: "Girls, female students, young learners",
    duration: "Academic Year / Flexible",
    format: "On-Campus",
    outcomes: [
      "Improved Quran reading and Islamic understanding",
      "Strong Islamic manners and character",
      "Confidence in practicing daily Islamic teachings",
      "Safe and supportive learning environment"
    ],
    eligibility: [
      "Suitable for girls and female learners.",
      "No advanced prior knowledge required.",
      "Regular attendance and discipline required."
    ],
    structure: [
      "Quran reading and basic Tajweed",
      "Essential Islamic beliefs and practices",
      "Daily Duas and manners",
      "Character building and practical guidance"
    ],
    timings: "As per Banat department schedule",
    facultyIds: [],
    relatedPrograms: ["department-hifz-ul-quran", "department-online-duroos"],
    image: "/images/departments/banat-islamic-education.png"
  },
  {
    id: "department-online-duroos",
    slug: "department-online-duroos",
    title: "Department of Online Duroos",
    summary: "Online Islamic lessons and Quran classes for students who want flexible learning from home.",
    overview: "The Department of Online Duroos provides online Quran and Islamic education for students who cannot attend on campus. Through digital classes, students can learn Quran reading, Tajweed, Islamic studies, and selected lessons from qualified teachers in a flexible and accessible format.",
    audience: "Online students, overseas learners, busy families",
    duration: "Flexible",
    format: "Online",
    outcomes: [
      "Access to Islamic learning from home",
      "Improved Quran reading and understanding",
      "Flexible class options",
      "Teacher-guided online learning"
    ],
    eligibility: [
      "Internet connection and device required.",
      "Student must attend classes regularly.",
      "Suitable for children and adults."
    ],
    structure: [
      "Online Quran reading lessons",
      "Basic Tajweed and correction",
      "Islamic studies and daily Duas",
      "Regular teacher feedback and progress tracking"
    ],
    timings: "Flexible online timing options",
    facultyIds: [],
    relatedPrograms: ["nazra-quran", "tajweed-program", "department-banat-islamic-education"],
    image: "/images/departments/online-duroos.png"
  },
  {
    id: "department-takhassusat",
    slug: "department-takhassusat",
    title: "Department of Takhassusat",
    summary: "Advanced specialization programs for students who want deeper study in selected Islamic sciences.",
    overview: "The Department of Takhassusat offers advanced specialization for students who have completed major Islamic studies and want to focus deeply on selected subjects. This department supports higher-level study, research, teaching preparation, and advanced scholarly training under qualified supervision.",
    audience: "Advanced Islamic students, Graduates, Scholars",
    duration: "1 to 2 Years",
    format: "On-Campus",
    outcomes: [
      "Advanced subject specialization",
      "Improved research and teaching ability",
      "Deeper understanding of Islamic sciences",
      "Preparation for academic and religious service"
    ],
    eligibility: [
      "Completion of Dars-e-Nizami or equivalent studies.",
      "Strong Arabic and Islamic studies background.",
      "Admission approval may be required."
    ],
    structure: [
      "Specialized subject study",
      "Advanced reading of classical texts",
      "Research and written assignments",
      "Teacher-supervised academic development"
    ],
    timings: "As per specialization department schedule",
    facultyIds: [],
    relatedPrograms: ["department-dars-e-nizami", "department-darul-ifta"],
    image: "/images/departments/takhassusat.png"
  }
];

export const faculty = [
  {
    id: "sheikh-abdullah",
    name: "Sheikh Abdullah Bin Tariq",
    title: "Head of Qira'at Department",
    specialization: "Qira'at Ashra & Advanced Tajweed",
    bio: "With over 30 years of teaching experience, Sheikh Abdullah holds multiple Ijazahs in the 10 modes of recitation. He is a respected senior scholar guiding our most advanced students.",
    courses: ["Qira'at Specialization", "Advanced Tajweed"],
    image: "https://images.unsplash.com/photo-1566492031523-0564ef1df233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badges: ["Senior Scholar", "Ijazah Holder"]
  },
  {
    id: "qari-usman",
    name: "Qari Usman Ali",
    title: "Senior Hifz Instructor",
    specialization: "Quranic Memorization & Revision",
    bio: "Qari Usman has helped hundreds of students complete their Hifz. His strict yet loving approach ensures students develop a lifelong bond with the Quran and retain their memorization.",
    courses: ["Hifz Program", "Nazra Quran"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "ustadh-ibrahim",
    name: "Ustadh Ibrahim Khan",
    title: "Instructor, Adult Learning",
    specialization: "Foundational Tajweed & Translation",
    bio: "Ustadh Ibrahim specializes in teaching adults. His patient methodology breaks down complex rules into simple, manageable lessons for working professionals.",
    courses: ["Adult Learning", "Short Courses"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "qari-bilal",
    name: "Qari Bilal Ahmed",
    title: "Tajweed Instructor",
    specialization: "Makharij & Sifat",
    bio: "A young and dynamic teacher, Qari Bilal focuses on the precise articulation of letters. He leads the foundational Tajweed classes and manages our online student portal.",
    courses: ["Tajweed Program", "Nazra Quran"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export const announcements = [
  {
    id: 1,
    title: "Admissions Open for Hifz Program",
    date: "August 15, 2026",
    category: "Admission",
    summary: "We are now accepting applications for the upcoming academic year. Limited seats available for the specialized Hifz program starting September.",
    slug: "admissions-open-hifz"
  },
  {
    id: 2,
    title: "Annual Qira'at Competition 2026",
    date: "September 10, 2026",
    category: "Event",
    summary: "Join us for our annual Qira'at competition featuring our top students and guest scholars from across Pakistan.",
    slug: "annual-qiraat-competition-2026"
  },
  {
    id: 3,
    title: "New Weekend Tajweed Course for Adults",
    date: "July 20, 2026",
    category: "Academic",
    summary: "A new 8-week course focusing on basic Tajweed rules designed specifically for working professionals running on Saturday mornings.",
    slug: "new-weekend-tajweed-course"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Muhammad Rizwan",
    role: "Parent",
    content: "Both my sons completed their Hifz here. The dedication of the teachers and the spiritual environment is unmatched in Peshawar. I have complete peace of mind knowing they are in good hands.",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmad Farooq",
    role: "Alumnus",
    content: "The Qira'at specialization I completed at Darul Qurra gave me the confidence to lead prayers and teach others. The standards are rigorous, which makes the certification truly meaningful.",
    rating: 5
  },
  {
    id: 3,
    name: "Zafar Ali",
    role: "Adult Student",
    content: "I started learning to read the Quran properly at the age of 45. The adult classes are so respectful and encouraging. It has transformed my daily prayers.",
    rating: 5
  }
];

export const faqs = [
  {
    category: "Admissions",
    items: [
      {
        question: "When do admissions open?",
        answer: "Our primary admission intakes are in August (for the main academic year) and January (for short courses). However, adult learning programs often have rolling admissions."
      },
      {
        question: "Is there an age limit for the Hifz program?",
        answer: "We typically admit students between 8 and 12 years of age for the intensive Hifz program, but exceptions are made based on the student's aptitude and dedication."
      }
    ]
  },
  {
    category: "Courses",
    items: [
      {
        question: "Do you offer online classes?",
        answer: "Yes, we offer online options for specific short courses and the adult learning program. However, Hifz and advanced Qira'at require on-campus presence."
      },
      {
        question: "How long does the Tajweed program take?",
        answer: "Our foundational Tajweed certificate module takes about 6 months, while the advanced mastery program can take up to a year."
      }
    ]
  },
  {
    category: "General",
    items: [
      {
        question: "Where is Darul Qurra located?",
        answer: "We are centrally located in Peshawar, easily accessible via main transit routes. Detailed directions are available on our Contact page."
      },
      {
        question: "Does the Madrasa provide hostel facilities?",
        answer: "Yes, we have limited boarding facilities for full-time Hifz and Qira'at students coming from outside Peshawar. Admission to boarding is subject to availability."
      }
    ]
  }
];