import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTestStore } from '../store/testStore';

export const TestResults: React.FC = () => {
  const { testResult, questions } = useTestStore();

  if (!testResult) return null;

  const subjectData = Object.entries(testResult.subjectScores).map(([subject, score]) => ({
    subject: subject.charAt(0).toUpperCase() + subject.slice(1),
    score,
    total: questions.filter(q => q.subject === subject).length * 4
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Results</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900">Total Score</h3>
          <p className="text-3xl font-bold text-blue-600">
            {testResult.totalScore}/{questions.length * 4}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900">Time Taken</h3>
          <p className="text-3xl font-bold text-green-600">
            {Math.floor(testResult.timeTaken / 3600)}h {Math.floor((testResult.timeTaken % 3600) / 60)}m
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900">Accuracy</h3>
          <p className="text-3xl font-bold text-purple-600">
            {Math.round((testResult.answers.filter(a => a.isCorrect).length / questions.length) * 100)}%
          </p>
        </div>
      </div>

      <div className="h-80 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject-wise Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={subjectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#3B82F6" name="Your Score" />
            <Bar dataKey="total" fill="#93C5FD" name="Maximum Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Detailed Analysis</h3>
        {questions.map((question, index) => {
          const answer = testResult.answers.find(a => a.questionId === question.id);
          return (
            <div 
              key={question.id} 
              className={`p-4 rounded-lg border ${
                answer?.isCorrect 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">Question {index + 1}</span>
                <span className={`font-medium ${
                  answer?.isCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {answer?.isCorrect ? '+4' : '0'}
                </span>
              </div>
              <p className="text-gray-800 mb-2">{question.text}</p>
              {!answer?.isCorrect && (
                <div className="mt-2 p-3 bg-white rounded border border-red-100">
                  <p className="text-sm font-medium text-red-800">Explanation:</p>
                  <p className="text-sm text-gray-700">{question.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};