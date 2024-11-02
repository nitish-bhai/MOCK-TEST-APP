import React from 'react';
import { Timer } from './components/Timer';
import { QuestionPanel } from './components/QuestionPanel';
import { QuestionNavigation } from './components/QuestionNavigation';
import { TestResults } from './components/TestResults';
import { HomePage } from './components/HomePage';
import { useTestStore } from './store/testStore';
import { GraduationCap } from 'lucide-react';

function App() {
  const { isTestStarted, isTestComplete } = useTestStore();

  if (!isTestStarted) {
    return <HomePage />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">JEE Mains Practice</h1>
            </div>
            <Timer />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isTestComplete ? (
          <TestResults />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <QuestionPanel />
            </div>
            <div>
              <QuestionNavigation />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;