import React from 'react';
import { useTestStore } from '../store/testStore';

export const QuestionPanel: React.FC = () => {
  const { questions, currentQuestionIndex, answers, setAnswer } = useTestStore();
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <p className="text-gray-600">No questions available.</p>
      </div>
    );
  }

  const handleOptionSelect = (optionIndex: number) => {
    setAnswer({
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect: optionIndex === currentQuestion.correctAnswer,
      timeSpent: 0, // This would be calculated based on time spent on question
    });
  };

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
      <div className="mb-6">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <h3 className="mt-4 text-xl font-medium text-gray-900">
          {currentQuestion.text}
        </h3>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all
              ${currentAnswer?.selectedOption === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
              }`}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
            <span className="ml-2">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};