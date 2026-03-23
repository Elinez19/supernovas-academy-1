export interface ExamSubject {
  id: string;
  name: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
}

export interface ExamCategory {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  color: string;
  subjects: ExamSubject[];
  features: string[];
  pricing: PricingPlan[];
}

export const EXAM_DATA: Record<string, ExamCategory> = {
  jamb: {
    title: "JAMB (UTME) Preparation",
    subtitle: "Score 300+ in your JAMB with Supernovas Academy",
    description: "Our JAMB (UTME) preparation program provides everything you need to excel. Access thousands of past questions, interactive CBT mock trials, and expert-led subject tutorials.",
    heroImage: "/images/exams/jamb_hero.jpg",
    color: "#E31E24", // Red based on branding
    subjects: [
      { id: "english", name: "Use of English", icon: "BookOpen" },
      { id: "mathematics", name: "Mathematics", icon: "Calculator" },
      { id: "physics", name: "Physics", icon: "Zap" },
      { id: "chemistry", name: "Chemistry", icon: "FlaskConical" },
      { id: "biology", name: "Biology", icon: "Dna" },
      { id: "economics", name: "Economics", icon: "TrendingUp" },
      { id: "government", name: "Government", icon: "Landmark" },
      { id: "literature", name: "Literature-in-English", icon: "Library" },
    ],
    features: [
      "Standard CBT Interface (Exactly like JAMB)",
      "Daily Mock Exams with Instant Result",
      "Topic-by-topic Video Lessons",
      "Detailed Performance Analytics",
    ],
    pricing: [
      { id: "basic", name: "Basic", price: "₦5,000", period: "/month", features: ["CBT Practice", "Past Questions", "Email Support"] },
      { id: "premium", name: "Premium", price: "₦12,000", period: "/month", features: ["Everything in Basic", "Video Tutorials", "Weekly Live Classes", "Personal Tutor"] },
    ]
  },
  waec: {
    title: "WAEC (SSCE) Revision",
    subtitle: "Ace your SSCE with confidence",
    description: "Prepare for your West African Senior School Certificate Examination with our comprehensive revision materials, practical guides, and expert subject teachers.",
    heroImage: "/images/exams/waec_hero.jpg",
    color: "#0051A1", // Blue based on branding
    subjects: [
      { id: "english", name: "English Language", icon: "BookOpen" },
      { id: "mathematics", name: "General Mathematics", icon: "Calculator" },
      { id: "physics", name: "Physics (Theory & Practical)", icon: "Zap" },
      { id: "chemistry", name: "Chemistry (Theory & Practical)", icon: "FlaskConical" },
      { id: "biology", name: "Biology", icon: "Dna" },
      { id: "civic", name: "Civic Education", icon: "Landmark" },
    ],
    features: [
      "Complete Syllabus Coverage",
      "Practical Video Demonstrations",
      "Marking Scheme Insights",
      "Past Essay Question Analysis",
    ],
    pricing: [
      { id: "basic", name: "Revision Hub", price: "₦4,500", period: "/month", features: ["Past Questions", "Revision Notes", "Community Support"] },
      { id: "premium", name: "Elite Prep", price: "₦10,000", period: "/month", features: ["Everything in Basic", "Practical Labs", "Mock Exams", "Expert Review"] },
    ]
  },
  neco: {
    title: "NECO (SSCE) Excellence",
    subtitle: "Your gateway to higher education success",
    description: "Get the best NECO preparation materials. Our platform offers structured learning paths tailored to the NECO curriculum, ensuring you're ready for every subject.",
    heroImage: "/images/exams/neco_hero.jpg",
    color: "#2E3192", // Darker blue
    subjects: [
      { id: "english", name: "English Language", icon: "BookOpen" },
      { id: "mathematics", name: "General Mathematics", icon: "Calculator" },
      { id: "physics", name: "Physics", icon: "Zap" },
      { id: "chemistry", name: "Chemistry", icon: "FlaskConical" },
      { id: "biology", name: "Biology", icon: "Dna" },
    ],
    features: [
      "Mock Examinations",
      "Expert Subject Teachers",
      "Study Groups",
      "Progress Tracking",
    ],
    pricing: [
      { id: "basic", name: "NECO Basic", price: "₦4,000", period: "/month", features: ["Past Questions", "Notes"] },
      { id: "premium", name: "NECO PRO", price: "₦9,500", period: "/month", features: ["Everything in Basic", "Tutor Support"] },
    ]
  },
  "post-utme": {
    title: "Post-UTME Training",
    subtitle: "Secure your admission into your dream institution",
    description: "Each university has its own style. We provide institution-specific training for UNILAG, UI, OAU, UNIBEN, and more to ensure you bridge the final gap to admission.",
    heroImage: "/images/exams/post_utme_hero.jpg",
    color: "#E31E24",
    subjects: [
      { id: "english", name: "English & General Paper", icon: "BookOpen" },
      { id: "reasoning", name: "Critical Thinking", icon: "Lightbulb" },
      { id: "maths", name: "Applied Mathematics", icon: "Calculator" },
    ],
    features: [
      "School-specific Past Questions",
      "Mock Admission Tests",
      "Admission Consulting",
      "Interview Prep",
    ],
    pricing: [
      { id: "standard", name: "Admission Booster", price: "₦15,000", period: " one-time", features: ["All Post-UTME Packs", "Monthly Seminars", "Expert Support"] },
    ]
  }
};
