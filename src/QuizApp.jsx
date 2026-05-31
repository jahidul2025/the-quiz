import React, { useState } from 'react';
import { questions } from './questions';
import { useAuth } from './context/AuthContext';


export default function QuizApp() {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]); // tracks: { questionId, selected, correct, isCorrect }

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (hasAnswered) return; // Prevent multiple clicks

    const isCorrect = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setHasAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        selected: option,
        correct: currentQuestion.correctAnswer,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setHasAnswered(false);
    setAnswersHistory([]);
  };

  // UI helper functions for option button styling
  const getOptionStyle = (option) => {
    if (!hasAnswered) {
      return "bg-slate-800/40 hover:bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-200 cursor-pointer transform hover:-translate-y-0.5";
    }

    const isCurrentOption = option === selectedOption;
    const isCorrectOption = option === currentQuestion.correctAnswer;

    if (isCorrectOption) {
      return "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-medium ring-2 ring-emerald-500/30 cursor-not-allowed";
    }

    if (isCurrentOption && !isCorrectOption) {
      return "bg-rose-500/20 border-rose-500 text-rose-300 font-medium ring-2 ring-rose-500/30 cursor-not-allowed";
    }

    return "bg-slate-800/20 border-slate-800 text-slate-500 opacity-60 cursor-not-allowed";
  };

  const progressPercentage = ((currentIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 md:py-16">
      {/* Header Info */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Trivia Master
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Test your frontend and general knowledge!
        </p>
      </div>

      {!isFinished ? (
        <div className="glass-card rounded-2xl p-6 md:p-8 animate-pop-in relative overflow-hidden">
          {/* Progress Bar Container */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 progress-bar-transition"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Stats Bar */}
          <div className="flex justify-between items-center mb-6 mt-2 text-xs md:text-sm font-semibold tracking-wide text-slate-400">
            <span>
              QUESTION <span className="text-indigo-400">{currentIndex + 1}</span> OF <span className="text-slate-300">{questions.length}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-indigo-300">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
              </svg>
              SCORE: {score}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg md:text-2xl font-bold text-slate-100 mb-8 leading-snug">
            {currentQuestion.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = option === selectedOption;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${getOptionStyle(option)}`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border 
                      ${!hasAnswered 
                        ? 'bg-slate-900/50 border-slate-700 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-200' 
                        : isCorrect
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : isSelected
                            ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                            : 'bg-slate-900/20 border-slate-800 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm md:text-base font-medium">{option}</span>
                  </span>

                  {/* Feedback Icons */}
                  {hasAnswered && (
                    <span>
                      {isCorrect && (
                        <svg className="w-6 h-6 text-emerald-400 animate-pop-in" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {isSelected && !isCorrect && (
                        <svg className="w-6 h-6 text-rose-400 animate-pop-in" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Navigation Panel */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-800/60 min-h-[64px]">
            <div className="flex-1">
              {hasAnswered && (
                <div className="animate-pop-in flex items-center gap-2">
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <span className="text-emerald-400 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      ✨ Correct Answer!
                    </span>
                  ) : (
                    <span className="text-rose-400 font-semibold text-sm md:text-base">
                      ❌ Incorrect response.
                    </span>
                  )}
                </div>
              )}
            </div>

            {hasAnswered && (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 animate-slide-up"
              >
                <span>{currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Score & Results Page */
        <div className="glass-card rounded-2xl p-6 md:p-8 animate-pop-in">
          {/* Trophy Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 mb-4 animate-bounce">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.42 1.72 4.44 4.005 4.901C7.893 16.299 9.8 18 12 18v2H8v2h8v-2h-4v-2c2.2 0 4.107-1.701 4.995-4.099C19.28 12.44 21 10.42 21 8V7c0-1.1-.9-2-2-2zM5 10V7h2v3c0 .87-.27 1.68-.73 2.37C5.45 11.83 5 11 5 10zm14 0c0 1-.45 1.83-1.27 2.37-.46-.69-.73-1.5-.73-2.37V7h2v3z"/>
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mb-1">
              Quiz Completed!
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Here is how you performed, {user?.username || 'Guest'}.
            </p>
          </div>

          {/* Large Score Indicator */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 text-center mb-8 max-w-xs mx-auto">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-2">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="text-slate-300 text-sm font-semibold">
              You scored <span className="text-indigo-400">{score}</span> out of <span className="text-slate-100">{questions.length}</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              {score === questions.length 
                ? '🏆 Perfect score! You are a master.' 
                : score >= questions.length * 0.7 
                  ? '🎉 Well done! Excellent knowledge.' 
                  : '👍 Good effort! Try again to improve your score.'}
            </p>
          </div>

          {/* Detailed Question Review Breakdown */}
          <div className="space-y-4 mb-8 text-left">
            <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-3 px-1">
              Question Summary
            </h3>

            {answersHistory.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl border text-sm transition-all duration-300 
                  ${item.isCorrect 
                    ? 'bg-emerald-950/15 border-emerald-800/40 text-slate-300' 
                    : 'bg-rose-950/15 border-rose-800/40 text-slate-300'
                  }`}
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <span className="font-semibold text-slate-200">
                    Q{index + 1}: {item.questionText}
                  </span>
                  <span>
                    {item.isCorrect ? (
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                        Correct
                      </span>
                    ) : (
                      <span className="bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                        Incorrect
                      </span>
                    )}
                  </span>
                </div>
                
                <div className="space-y-1 text-slate-400 text-xs">
                  <div>
                    Your answer: <span className={item.isCorrect ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                      {item.selected}
                    </span>
                  </div>
                  {!item.isCorrect && (
                    <div>
                      Correct answer: <span className="text-emerald-400 font-medium">{item.correct}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleRestart}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span>Restart Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}
