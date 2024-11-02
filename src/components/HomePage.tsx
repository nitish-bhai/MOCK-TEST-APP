import React from 'react';
import { GraduationCap, BookOpen, Check } from 'lucide-react';
import { useTestStore } from '../store/testStore';
import { chapters } from '../data/chapters';
import { Subject } from '../types';

export const HomePage: React.FC = () => {
  const { testConfig, updateTestConfig, startTest } = useTestStore();
  const subjects: Subject[] = ['physics', 'chemistry', 'mathematics'];

  const handleSubjectToggle = (subject: Subject) => {
    const newSubjects = testConfig.selectedSubjects.includes(subject)
      ? testConfig.selectedSubjects.filter(s => s !== subject)
      : [...testConfig.selectedSubjects, subject];
    
    // Remove chapters of unselected subjects
    const newChapters = testConfig.selectedChapters.filter(ch => 
      chapters.find(c => c.id === ch)?.subject !== subject || newSubjects.includes(subject)
    );
    
    updateTestConfig({ 
      selectedSubjects: newSubjects,
      selectedChapters: newChapters
    });
  };

  const handleChapterToggle = (chapterId: string) => {
    const newChapters = testConfig.selectedChapters.includes(chapterId)
      ? testConfig.selectedChapters.filter(ch => ch !== chapterId)
      : [...testConfig.selectedChapters, chapterId];
    updateTestConfig({ selectedChapters: newChapters });
  };

  const canStartTest = testConfig.selectedChapters.length > 0;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">JEE Mains Practice</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Select Subjects and Chapters
          </h2>

          <div className="space-y-6">
            {subjects.map(subject => (
              <div key={subject} className="border rounded-lg p-4">
                <button
                  onClick={() => handleSubjectToggle(subject)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                    testConfig.selectedSubjects.includes(subject)
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium capitalize">{subject}</span>
                  </div>
                  {testConfig.selectedSubjects.includes(subject) && (
                    <Check className="w-5 h-5 text-blue-600" />
                  )}
                </button>

                {testConfig.selectedSubjects.includes(subject) && (
                  <div className="mt-3 ml-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {chapters
                      .filter(chapter => chapter.subject === subject)
                      .map(chapter => (
                        <button
                          key={chapter.id}
                          onClick={() => handleChapterToggle(chapter.id)}
                          className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                            testConfig.selectedChapters.includes(chapter.id)
                              ? 'bg-green-50 text-green-700'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span>{chapter.name}</span>
                          {testConfig.selectedChapters.includes(chapter.id) && (
                            <Check className="w-4 h-4 text-green-600" />
                          )}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={startTest}
              disabled={!canStartTest}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                canStartTest
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Practice Test
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};