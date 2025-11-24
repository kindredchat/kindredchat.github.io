import React, { useState, useEffect } from 'react';
import { Heart, Shield, AlertCircle, ArrowRight, RefreshCw, CheckCircle, XCircle, Info, BookOpen, Star, Zap, Activity, Share2, Globe, Users } from 'lucide-react';
import { TRANSLATIONS } from './translations';

// --- COMPONENTS ---

const QuadrantChart = ({ anxietyScore, avoidanceScore, t }) => {
  const min = 6;
  const max = 42;
  const range = max - min;

  const xPercent = ((avoidanceScore - min) / range) * 100;
  const yPercent = ((anxietyScore - min) / range) * 100;

  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto bg-white border-2 border-slate-200 rounded-lg shadow-sm mt-6 mb-8 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="bg-red-50/50 border-r border-b border-slate-300 flex items-start justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">{t.chart.anxious_high}</span>
        </div>
        <div className="bg-purple-50/50 border-b border-slate-300 flex items-start justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">{t.chart.fearful}</span>
        </div>
        <div className="bg-green-50/50 border-r border-slate-300 flex items-end justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-green-500 uppercase tracking-wider">{t.chart.secure}</span>
        </div>
        <div className="bg-blue-50/50 flex items-end justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">{t.chart.dismissive}</span>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800/20 -translate-x-1/2"></div>
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800/20 -translate-y-1/2"></div>

      <div className="absolute top-1/2 -translate-y-1/2 right-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">{t.chart.avoidant_high}</div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">{t.chart.avoidant_low}</div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">{t.chart.anxious_high}</div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">{t.chart.anxious_low}</div>

      <div
        className="absolute w-4 h-4 bg-slate-900 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 translate-y-1/2 transition-all duration-1000 ease-out z-10"
        style={{ left: `${xPercent}%`, bottom: `${yPercent}%` }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-2 rounded whitespace-nowrap">
          {t.chart.you_are_here}
        </div>
      </div>
    </div>
  );
};

const TypeCard = ({ typeKey, typeData, isActive, onClick }) => {
    // Map icon based on type key since icons are not in JSON
    const getIcon = (key) => {
        switch(key) {
            case 'SECURE': return Shield;
            case 'ANXIOUS': return AlertCircle;
            case 'DISMISSIVE': return XCircle;
            case 'FEARFUL': return Info;
            default: return Shield;
        }
    };
    const Icon = getIcon(typeKey);

    // Map colors (hardcoded in component to match original design logic, or passed via props if dynamic)
    const getColorStyles = (key) => {
         switch(key) {
            case 'SECURE': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
            case 'ANXIOUS': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
            case 'DISMISSIVE': return { color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" };
            case 'FEARFUL': return { color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" };
            default: return {};
        }
    };
    const styles = getColorStyles(typeKey);

    return (
      <div
        onClick={onClick}
        className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${isActive ? `${styles.bgColor} ${styles.borderColor} ring-2 ring-offset-1 ring-indigo-500` : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`w-5 h-5 ${styles.color}`} />
          <h3 className={`font-bold ${styles.color}`}>{typeData.shortName || typeData.name.split(' ')[0]}</h3>
        </div>
        <p className="text-xs text-slate-500 line-clamp-2">{typeData.desc}</p>
      </div>
    );
};

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
    const languages = [
        { code: 'zh-CN', label: '简体中文' },
        { code: 'zh-TW', label: '繁體中文' },
        { code: 'en', label: 'English' },
        { code: 'ja', label: '日本語' },
        { code: 'es', label: 'Español' },
        { code: 'ko', label: '한국어' }
    ];

    return (
        <div className="absolute top-4 right-4 z-50">
            <div className="relative group">
                <button className="bg-white/20 backdrop-blur-sm text-slate-800 p-2 rounded-full hover:bg-white/40 transition-colors border border-white/30">
                     <Globe className="w-5 h-5 text-indigo-100" />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden hidden group-hover:block">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => onLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition-colors ${currentLang === lang.code ? 'font-bold text-indigo-600' : 'text-slate-600'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}


// --- MAIN APP COMPONENT ---

export default function AttachmentTest() {
  const [screen, setScreen] = useState('intro'); // intro, quiz, calculating, result, library
  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedLibraryType, setSelectedLibraryType] = useState('SECURE');
  const [showShareToast, setShowShareToast] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [language, setLanguage] = useState('zh-CN');
  const [assessmentMode, setAssessmentMode] = useState('self'); // 'self' or 'partner'

  const t = TRANSLATIONS[language];

  // Use correct question set based on mode
  const currentQuestions = assessmentMode === 'partner' ? t.questions_partner : t.questions;

  const handleStart = (mode = 'self') => {
    setAssessmentMode(mode);
    setScreen('quiz');
    setCurrentQIndex(0);
    setAnswers({});
    setSelectedOption(null);
  };

  const handleAnswer = (value) => {
    setSelectedOption(value);
    setAnswers(prev => ({ ...prev, [currentQuestions[currentQIndex].id]: value }));

    if (currentQIndex < currentQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQIndex(prev => prev + 1);
        setSelectedOption(null);
      }, 250);
    } else {
      setScreen('calculating');
      setTimeout(calculateAndShowResult, 1500);
    }
  };

  const calculateAndShowResult = () => {
    let anxietyScore = 0;
    let avoidanceScore = 0;

    currentQuestions.forEach(q => {
       const score = answers[q.id] || 4;
       if (q.dimension === 'anxiety') anxietyScore += score;
       if (q.dimension === 'avoidance') avoidanceScore += score;
    });

    const threshold = 24;
    let typeKey = 'SECURE';
    if (anxietyScore > threshold && avoidanceScore <= threshold) typeKey = 'ANXIOUS';
    else if (anxietyScore <= threshold && avoidanceScore > threshold) typeKey = 'DISMISSIVE';
    else if (anxietyScore > threshold && avoidanceScore > threshold) typeKey = 'FEARFUL';

    setResult({ typeKey, anxietyScore, avoidanceScore });
    setScreen('result');
  };

  const handleShare = async () => {
    const type = t.types[result.typeKey];
    const anxietyPct = Math.round((result.anxietyScore / 42) * 100);
    const avoidancePct = Math.round((result.avoidanceScore / 42) * 100);

    let text = t.ui.share_text
        .replace('{type}', type.name.split(' ')[0])
        .replace('{anxiety}', anxietyPct)
        .replace('{avoidance}', avoidancePct)
        .replace('{url}', window.location.href);

    if (navigator.share) {
      try {
        await navigator.share({
          title: t.ui.title,
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  // Helper styles for result view
  const getTypeStyles = (key) => {
      switch(key) {
        case 'SECURE': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200", icon: Shield };
        case 'ANXIOUS': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200", icon: AlertCircle };
        case 'DISMISSIVE': return { color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200", icon: XCircle };
        case 'FEARFUL': return { color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200", icon: Info };
        default: return { color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200", icon: Shield };
    }
  };

  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">

          <LanguageSwitcher currentLang={language} onLanguageChange={setLanguage} />

          <div className="bg-indigo-600 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
              <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">{t.ui.title}</h1>
              <p className="text-indigo-100 text-sm font-light">{t.ui.subtitle}</p>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.ui.intro_why}<br/>
                <span dangerouslySetInnerHTML={{__html: t.ui.intro_theory}}></span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {Object.keys(t.types).map(key => {
                  const styles = getTypeStyles(key);
                  const typeData = t.types[key];
                  return (
                    <div key={key} className={`p-3 rounded-lg border ${styles.bgColor} ${styles.borderColor} flex flex-col items-center justify-center text-center gap-1`}>
                    <styles.icon className={`w-5 h-5 ${styles.color}`} />
                    <span className={`text-xs font-bold ${styles.color}`}>{typeData.shortName || typeData.name.split(' ')[0]}</span>
                    </div>
                  );
              })}
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleStart('self')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 group"
              >
                {t.ui.start_btn} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleStart('partner')}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 group"
              >
                <Users className="w-5 h-5" />
                {t.ui.start_partner_btn}
              </button>
              <button
                onClick={() => setScreen('library')}
                className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {t.ui.library_btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'library') {
    const activeType = t.types[selectedLibraryType];
    const styles = getTypeStyles(selectedLibraryType);

    return (
      <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[80vh] flex flex-col">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
            <button onClick={() => setScreen('intro')} className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" /> {t.ui.back}
            </button>
            <h2 className="font-bold text-slate-800">{t.ui.library_title}</h2>
            <div className="w-10"></div>
          </div>

          <div className="p-4 grid grid-cols-2 gap-2 bg-slate-50">
            {Object.keys(t.types).map(key => (
              <TypeCard
                key={key}
                typeKey={key}
                typeData={t.types[key]}
                isActive={selectedLibraryType === key}
                onClick={() => setSelectedLibraryType(key)}
              />
            ))}
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${styles.bgColor} ${styles.color}`}>
              <styles.icon className="w-4 h-4" />
              {activeType.name}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{t.ui.deep_analysis}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{activeType.detailedInfo}</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4" /> {t.ui.ideal_match}
                </h3>
                <p className="text-indigo-800 text-sm leading-relaxed">{activeType.idealMatch}</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-orange-500" /> {t.ui.bad_match}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{activeType.badMatch}</p>
              </div>

               <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                  <Activity className="w-4 h-4 text-green-500" /> {t.ui.growth_advice}
                </h3>
                <ul className="space-y-2">
                  {activeType.growth.map((tip, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-green-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'quiz') {
    const question = currentQuestions[currentQIndex];
    const progress = ((currentQIndex) / currentQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col min-h-[500px]">
          <div className="h-2 bg-slate-100 w-full">
            <div
              className="h-full bg-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <div className="mb-2 text-indigo-600 font-bold text-xs tracking-wider uppercase flex justify-between">
              <span>{t.ui.question_progress.replace('{current}', currentQIndex + 1).replace('{total}', currentQuestions.length)}</span>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-8 leading-relaxed mt-4">
              {question.text}
            </h2>

            <div className="space-y-3 mt-auto">
              {t.options.map((opt) => (
                <button
                  key={`${currentQIndex}-${opt.value}`}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${
                    selectedOption === opt.value
                      ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedOption === opt.value ? 'text-indigo-900' : 'text-slate-600 group-hover:text-indigo-900'}`}>
                    {opt.label}
                  </span>
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    selectedOption === opt.value
                      ? 'border-indigo-600 bg-indigo-600'
                      : 'border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'calculating') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse rounded-full"></div>
            <RefreshCw className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4 relative z-10" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{t.ui.calculating}</h2>
          <p className="text-slate-500 mt-2 text-sm">{t.ui.calculating_sub}</p>
        </div>
      </div>
    );
  }

  if (screen === 'result' && result) {
    const type = t.types[result.typeKey];
    const styles = getTypeStyles(result.typeKey);

    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`p-8 pb-6 ${styles.bgColor} border-b ${styles.borderColor} text-center`}>
            <p className="text-slate-500 font-medium mb-2 text-xs uppercase tracking-widest">
                {assessmentMode === 'partner' ? t.ui.partner_type : t.ui.your_type}
            </p>
            <h1 className={`text-2xl font-bold ${styles.color} mb-4 flex items-center justify-center gap-2`}>
              <styles.icon className="w-6 h-6" />
              {type.shortName || type.name.split(' ')[0]}
            </h1>
            <div className="inline-flex gap-4 text-[10px] font-bold text-slate-600 bg-white/60 px-4 py-2 rounded-full border border-white/50 shadow-sm">
              <span>{t.ui.anxiety}: {Math.round((result.anxietyScore/42)*100)}%</span>
              <span className="w-px h-3 bg-slate-300 my-auto"></span>
              <span>{t.ui.avoidance}: {Math.round((result.avoidanceScore/42)*100)}%</span>
            </div>
          </div>

          <div className="p-8 pt-4">
            <QuadrantChart anxietyScore={result.anxietyScore} avoidanceScore={result.avoidanceScore} t={t} />

            <div className="mb-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-500" />
                  {t.ui.deep_analysis}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {type.detailedInfo}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  {t.ui.ideal_match}
                </h3>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 text-sm text-slate-700">
                  <p className="mb-2 font-medium text-pink-900">{t.ui.match_recommend} {t.ui.match_secure}</p>
                  <p className="leading-relaxed">{type.idealMatch}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  {t.ui.growth_advice}
                </h3>
                <div className="bg-yellow-50/50 p-4 rounded-lg border border-yellow-100">
                  <ul className="space-y-3">
                    {type.growth.map((tip, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleShare}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-indigo-200"
              >
                <Share2 className="w-4 h-4" />
                {t.ui.share_btn}
              </button>
              <button
                onClick={() => {
                   setSelectedLibraryType(result.typeKey);
                   setScreen('library');
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {t.ui.explore_others}
              </button>
              <button
                onClick={() => handleStart('self')}
                className="w-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                {t.ui.restart}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[10px] mt-8 pb-4 max-w-xs mx-auto">
          {t.ui.note}
        </p>

        {/* Toast for copy feedback */}
        {showShareToast && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-2 px-4 rounded-full shadow-lg transition-opacity animate-fade-in-up">
            {t.ui.copied}
          </div>
        )}
      </div>
    );
  }

  return null;
}
