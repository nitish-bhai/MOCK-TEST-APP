export type Subject = 'physics' | 'chemistry' | 'mathematics';

export interface Chapter {
  id: string;
  name: string;
  subject: Subject;
}

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  chapter: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean;
  timeSpent: number;
}

export interface TestResult {
  totalScore: number;
  subjectScores: Record<Subject, number>;
  answers: UserAnswer[];
  timeTaken: number;
  completedAt: string;
}

export interface TestConfig {
  selectedSubjects: Subject[];
  selectedChapters: string[];
}