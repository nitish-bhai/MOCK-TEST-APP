import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useTestStore } from '../store/testStore';

export const QuestionNavigation: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { 
    questions, 
    currentQuestionIndex, 
    answers, 
    nextQuestion, 
    previousQuestion, 
    jumpToQuestion,
    completeTest
  } = useTestStore();

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    completeTest();
    setShowConfirm(false);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between mb-4">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 
              hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 
              hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, index) => {
            const answer = answers.find(a => a.questionId === questions[index].id);
            return (
              <button
                key={index}
                onClick={() => jumpToQuestion(index)}
                className={`p-2 text-sm font-medium rounded-md transition-colors
                  ${currentQuestionIndex === index 
                    ? 'bg-blue-600 text-white' 
                    : answer 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <span>Questions Attempted:</span>
            <span className="font-medium">{answers.length} / {questions.length}</span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium
              hover:bg-blue-700 transition-colors"
          >
            Submit Test
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Confirm Submission</h3>
            </div>
            <p className="text-gray-600 mb-6">
              You have attempted {answers.length} out of {questions.length} questions. 
              Are you sure you want to submit the test?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg
                  text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg
                  font-medium hover:bg-blue-700 transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};