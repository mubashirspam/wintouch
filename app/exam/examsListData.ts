export type ExamType = "mock" | "scholarship" | "assessment";
export type ExamStatus = "upcoming" | "ongoing" | "past";

export interface Exam {
  id: string;
  title: string;
  description: string;
  type: ExamType;
  status: ExamStatus;
  duration: number; // in minutes
  totalQuestions: number;
  scheduledDate?: string; // ISO date string
  endDate?: string; // ISO date string for past exams
  subjects: string[];
  difficulty: "easy" | "medium" | "hard";
  isFeatured?: boolean;
  participants?: number;
  prize?: string;
}

// Mock test exams - available anytime
export const mockTests: Exam[] = [
  {
    id: "mock-1",
    title: "NEET Biology Practice Test",
    description:
      "Comprehensive biology practice test covering all major topics from Class 11 and 12 syllabus.",
    type: "mock",
    status: "ongoing",
    duration: 45,
    totalQuestions: 45,
    subjects: ["Biology", "Botany", "Zoology"],
    difficulty: "medium",
    participants: 1250,
  },
  {
    id: "mock-2",
    title: "NEET Chemistry Mock Test",
    description:
      "Practice test focusing on Organic, Inorganic, and Physical Chemistry concepts.",
    type: "mock",
    status: "ongoing",
    duration: 45,
    totalQuestions: 45,
    subjects: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
    ],
    difficulty: "medium",
    participants: 980,
  },
  {
    id: "mock-3",
    title: "NEET Physics Quick Quiz",
    description:
      "Quick assessment covering mechanics, thermodynamics, and modern physics.",
    type: "mock",
    status: "ongoing",
    duration: 30,
    totalQuestions: 30,
    subjects: ["Physics", "Mechanics", "Thermodynamics"],
    difficulty: "easy",
    participants: 1540,
  },
  {
    id: "mock-4",
    title: "Full NEET Mock Test",
    description:
      "Complete NEET pattern mock test with all subjects. Experience the real exam environment.",
    type: "mock",
    status: "ongoing",
    duration: 180,
    totalQuestions: 180,
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "hard",
    isFeatured: true,
    participants: 2100,
  },
];

// Upcoming scholarship exams
export const upcomingExams: Exam[] = [
  {
    id: "upcoming-1",
    title: "WinTouch Scholarship Exam 2026",
    description:
      "Annual scholarship examination for NEET aspirants. Win up to 100% scholarship on coaching fees!",
    type: "scholarship",
    status: "upcoming",
    duration: 60,
    totalQuestions: 60,
    scheduledDate: "2026-02-15T10:00:00+05:30",
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "medium",
    isFeatured: true,
    prize: "Up to ₹2,00,000 Scholarship",
  },
  {
    id: "upcoming-2",
    title: "Biology Olympiad Qualifier",
    description:
      "Qualifier round for the national biology olympiad. Top performers get direct entry to finals.",
    type: "assessment",
    status: "upcoming",
    duration: 90,
    totalQuestions: 75,
    scheduledDate: "2026-01-25T14:00:00+05:30",
    subjects: ["Biology", "Genetics", "Ecology"],
    difficulty: "hard",
  },
  {
    id: "upcoming-3",
    title: "Monthly Assessment - January",
    description:
      "Regular monthly assessment to track your preparation progress.",
    type: "assessment",
    status: "upcoming",
    duration: 60,
    totalQuestions: 50,
    scheduledDate: "2026-01-20T11:00:00+05:30",
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "medium",
  },
];

// Past exams with results
export const pastExams: Exam[] = [
  {
    id: "past-1",
    title: "WinTouch Scholarship Exam 2025",
    description:
      "Last year's scholarship examination. View your results and performance analysis.",
    type: "scholarship",
    status: "past",
    duration: 60,
    totalQuestions: 60,
    endDate: "2025-12-15T12:00:00+05:30",
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "medium",
    participants: 3500,
  },
  {
    id: "past-2",
    title: "December Monthly Assessment",
    description:
      "Monthly assessment conducted in December 2025. Check your performance report.",
    type: "assessment",
    status: "past",
    duration: 60,
    totalQuestions: 50,
    endDate: "2025-12-20T13:00:00+05:30",
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "medium",
    participants: 1800,
  },
  {
    id: "past-3",
    title: "NEET Mock Test Series - Round 5",
    description:
      "Fifth round of full-length NEET mock test series with detailed solutions.",
    type: "mock",
    status: "past",
    duration: 180,
    totalQuestions: 180,
    endDate: "2025-12-10T15:00:00+05:30",
    subjects: ["Physics", "Chemistry", "Biology"],
    difficulty: "hard",
    participants: 2200,
  },
];
