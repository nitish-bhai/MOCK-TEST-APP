import { create } from 'zustand';
import { Question, UserAnswer, TestResult, Subject, TestConfig } from '../types';
import { sampleQuestions } from '../data/sampleQuestions';

interface TestState {
  questions: Question[];
  currentQuestionIndex: number;
  timeRemaining: number;
  answers: UserAnswer[];
  isTestComplete: boolean;
  testResult: TestResult | null;
  testConfig: TestConfig;
  isTestStarted: boolean;
  setAnswer: (answer: UserAnswer) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  completeTest: () => void;
  updateTestConfig: (config: Partial<TestConfig>) => void;
  startTest: () => void;
  resetTest: () => void;
}

export const useTestStore = create<TestState>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  timeRemaining: 10800,
  answers: [],
  isTestComplete: false,
  testResult: null,
  isTestStarted: false,
  testConfig: {
    selectedSubjects: [],
    selectedChapters: [],
  },

  setAnswer: (answer) => {
    set((state) => ({
      answers: [...state.answers.filter(a => a.questionId !== answer.questionId), answer]
    }));
  },

  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get();
    if (currentQuestionIndex < questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  previousQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  jumpToQuestion: (index) => {
    set({ currentQuestionIndex: index });
  },

  completeTest: () => {
    const { answers, questions } = get();
    const result: TestResult = {
      totalScore: answers.filter(a => a.isCorrect).length * 4,
      subjectScores: {
        physics: answers.filter(a => a.isCorrect && 
          questions.find(q => q.id === a.questionId)?.subject === 'physics').length * 4,
        chemistry: answers.filter(a => a.isCorrect && 
          questions.find(q => q.id === a.questionId)?.subject === 'chemistry').length * 4,
        mathematics: answers.filter(a => a.isCorrect && 
          questions.find(q => q.id === a.questionId)?.subject === 'mathematics').length * 4,
      },
      answers,
      timeTaken: 10800 - get().timeRemaining,
      completedAt: new Date().toISOString(),
    };
    set({ isTestComplete: true, testResult: result });
  },

  updateTestConfig: (config) => {
    set((state) => ({
      testConfig: { ...state.testConfig, ...config }
    }));
  },

  startTest: () => {
    const { testConfig } = get();
    const filteredQuestions = sampleQuestions.filter(q => 
      testConfig.selectedSubjects.includes(q.subject) &&
      testConfig.selectedChapters.includes(q.chapter)
    );
    
    // Shuffle questions
    const shuffledQuestions = [...filteredQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(filteredQuestions.length, 30)); // Limit to 30 questions
    
    set({
      questions: shuffledQuestions,
      isTestStarted: true,
      currentQuestionIndex: 0,
      answers: [],
      isTestComplete: false,
      testResult: null,
      timeRemaining: 10800,
    });
  },

  resetTest: () => {
    set({
      isTestStarted: false,
      testConfig: {
        selectedSubjects: [],
        selectedChapters: [],
      },
    });
  },
}));