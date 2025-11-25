import React, { useState, useEffect } from 'react';
import { Heart, Shield, AlertCircle, ArrowRight, RefreshCw, CheckCircle, XCircle, Info, BookOpen, Star, Zap, Activity, Share2, Globe, Users, Palette, Sparkles, Lock, ArrowUpRight } from 'lucide-react';
import { TRANSLATIONS } from './translations';

// --- CONSTANTS & LOGIC ---

const PARADOX_CONTENT = {
  'zh-CN': {
    title: "特别洞察：欲望对象与治愈对象",
    subtitle: "为何你总是爱上让你痛苦的人？",
    content: [
      {
        title: "1. 错误的“理想”：回避型陷阱",
        text: "焦虑型/狂热型人格本能地被疏离、不可预测的人（回避型/游戏型）吸引。对方的若即若离制造了间歇性强化，让你将焦虑误认为是激情的深度。这种伴侣往往是助燃剂，使关系陷入自我毁灭的循环。"
      },
      {
        title: "2. 真正的理想：安全型容器",
        text: "你唯一的功能性理想伴侣是安全型依恋者（且带有奉献型特质）。他们情绪一致、边界清晰、高度透明。只有这种平稳的反馈机制才能强制打破你的“猜疑-焦虑”循环。"
      },
      {
        title: "3. 必须克服的障碍：“无聊”感",
        text: "当你遇到真正对的人（安全型）时，第一反应可能是排斥，觉得“无聊”或“没感觉”。这是戒断反应。必须强行认知到：这种“无聊”就是安全感。只有耐受住初期的平淡，病理机制才能消退。"
      }
    ]
  },
  'en': {
    title: "Special Insight: The Paradox of Desire",
    subtitle: "Why do you fall for those who hurt you?",
    content: [
      {
        title: "1. The Avoidant Trap",
        text: "Anxious/Mania types are often attracted to distant, unpredictable partners (Avoidant/Ludus). Their inconsistency creates intermittent reinforcement, making you mistake anxiety for passion. This dynamic fuels a self-destructive cycle."
      },
      {
        title: "2. The Secure Container",
        text: "Your true functional match is a Secure partner (ideally with Agape traits). They provide consistency, boundaries, and transparency. Only this stable feedback loop can break your 'suspicion-anxiety' cycle."
      },
      {
        title: "3. The Barrier: 'Boredom'",
        text: "When you meet a Secure partner, you might feel bored or think there's 'no spark'. This is a withdrawal symptom from the emotional rollercoaster. You must realize: this 'boredom' is actually safety."
      }
    ]
  }
  // Fallbacks for other languages will use EN
};

// --- COMPONENTS ---

const QuadrantChart = ({ anxietyScore, avoidanceScore, t }) => {
  const min = 6;
  const max = 42;
  const range = max - min;

  const xPercent = ((avoidanceScore - min) / range) * 100;
  const yPercent = ((anxietyScore - min) / range) * 100;

  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto bg-white border-2 border-slate-200 rounded-lg shadow-sm mt-4 mb-6 overflow-hidden">
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
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-2 rounded whitespace-nowrap shadow-sm">
          {t.chart.you_are_here}
        </div>
      </div>
    </div>
  );
};

const TypeCard = ({ typeKey, typeData, isActive, onClick, isLoveStyle = false }) => {
    const getIcon = (key) => {
        if (isLoveStyle) return Palette;
        switch(key) {
            case 'SECURE': return Shield;
            case 'ANXIOUS': return AlertCircle;
            case 'DISMISSIVE': return XCircle;
            case 'FEARFUL': return Info;
            default: return Shield;
        }
    };
    const Icon = getIcon(typeKey);

    const getColorStyles = (key) => {
         if (isLoveStyle) {
            switch(key) {
              case 'EROS': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
              case 'LUDUS': return { color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" };
              case 'STORGE': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
              case 'MANIA': return { color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" };
              case 'PRAGMA': return { color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" };
              case 'AGAPE': return { color: "text-pink-600", bgColor: "bg-pink-50", borderColor: "border-pink-200" };
              default: return { color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200" };
            }
         }
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

// --- MAIN APP COMPONENT ---

export default function AttachmentTest() {
  // State
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const [language, setLanguage] = useState('zh-CN');
  const [screen, setScreen] = useState('language_select');
  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Quiz Context
  const [assessmentMode, setAssessmentMode] = useState('self'); // 'self', 'partner'
  const [testType, setTestType] = useState('attachment'); // 'attachment', 'love_style', 'reconciliation'

  // Persistent Results
  const [results, setResults] = useState({
      self: { attachment: null, love_style: null, reconciliation: null },
      partner: { attachment: null }
  });

  // Library State
  const [libraryTab, setLibraryTab] = useState('attachment');
  const [selectedLibraryType, setSelectedLibraryType] = useState('SECURE');
  const [showShareToast, setShowShareToast] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS['en'];

  useEffect(() => {
      // Force language selection on first load if not set
      if (!hasSelectedLanguage) {
          setScreen('language_select');
      }
  }, [hasSelectedLanguage]);

  // --- HELPERS ---

  const getTypeStyles = (key) => {
      if (['EROS', 'LUDUS', 'STORGE', 'MANIA', 'PRAGMA', 'AGAPE'].includes(key)) {
          switch(key) {
              case 'EROS': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200", icon: Heart };
              case 'LUDUS': return { color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200", icon: Zap };
              case 'STORGE': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200", icon: Users };
              case 'MANIA': return { color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200", icon: Activity };
              case 'PRAGMA': return { color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200", icon: CheckCircle };
              case 'AGAPE': return { color: "text-pink-600", bgColor: "bg-pink-50", borderColor: "border-pink-200", icon: Heart };
              default: return { color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200", icon: Heart };
          }
      }
      if (['HIGH', 'MEDIUM', 'LOW'].includes(key)) {
           switch(key) {
              case 'HIGH': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200", icon: CheckCircle };
              case 'MEDIUM': return { color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200", icon: AlertCircle };
              case 'LOW': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200", icon: XCircle };
              default: return { color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200", icon: Info };
           }
      }
      switch(key) {
        case 'SECURE': return { color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200", icon: Shield };
        case 'ANXIOUS': return { color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200", icon: AlertCircle };
        case 'DISMISSIVE': return { color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200", icon: XCircle };
        case 'FEARFUL': return { color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200", icon: Info };
        default: return { color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200", icon: Shield };
      }
  };

  const handleStart = (mode = 'self', type = 'attachment') => {
    setAssessmentMode(mode);
    setTestType(type);
    setScreen('quiz');
    setCurrentQIndex(0);
    setAnswers({});
    setSelectedOption(null);
  };

  const handleAnswer = (value) => {
    const questions = getQuestions();
    setSelectedOption(value);
    setAnswers(prev => ({ ...prev, [questions[currentQIndex].id]: value }));

    if (currentQIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQIndex(prev => prev + 1);
        setSelectedOption(null);
      }, 200);
    } else {
      setScreen('calculating');
      setTimeout(calculateAndSaveResult, 1500);
    }
  };

  const getQuestions = () => {
      if (testType === 'love_style') return t.questions_love_style;
      if (testType === 'reconciliation') return t.questions_reconciliation;
      return assessmentMode === 'partner' ? t.questions_partner : t.questions;
  };

  const calculateAndSaveResult = () => {
    let resultData = null;
    const questions = getQuestions();

    if (testType === 'attachment') {
        let anxiety = 0, avoidance = 0;
        questions.forEach(q => {
           const score = answers[q.id] || 4;
           if (q.dimension === 'anxiety') anxiety += score;
           if (q.dimension === 'avoidance') avoidance += score;
        });
        const threshold = 24;
        let typeKey = 'SECURE';
        if (anxiety > threshold && avoidance <= threshold) typeKey = 'ANXIOUS';
        else if (anxiety <= threshold && avoidance > threshold) typeKey = 'DISMISSIVE';
        else if (anxiety > threshold && avoidance > threshold) typeKey = 'FEARFUL';

        resultData = { typeKey, anxietyScore: anxiety, avoidanceScore: avoidance };
    } else if (testType === 'love_style') {
        const scores = { EROS: 0, LUDUS: 0, STORGE: 0, MANIA: 0, PRAGMA: 0, AGAPE: 0 };
        questions.forEach(q => {
            const score = answers[q.id] || 4;
            if (scores[q.dimension] !== undefined) scores[q.dimension] += score;
        });
        let maxScore = -1, typeKey = 'EROS';
        Object.entries(scores).forEach(([key, score]) => {
            if (score > maxScore) { maxScore = score; typeKey = key; }
        });
        resultData = { typeKey, scores };
    } else if (testType === 'reconciliation') {
        let total = 0;
        questions.forEach(q => total += (answers[q.id] || 4));
        // 10 questions, max 70, min 10.
        // High > 55, Medium > 40, Low <= 40
        let typeKey = 'LOW';
        if (total >= 55) typeKey = 'HIGH';
        else if (total >= 40) typeKey = 'MEDIUM';

        resultData = { typeKey, score: total };
    }

    // Save to persistent state
    setResults(prev => ({
        ...prev,
        [assessmentMode]: {
            ...prev[assessmentMode],
            [testType]: resultData
        }
    }));

    setScreen('result');
  };

  // --- RENDERERS ---

  if (screen === 'language_select') {
      const langs = [
        { code: 'zh-CN', label: '简体中文' },
        { code: 'zh-TW', label: '繁體中文' },
        { code: 'en', label: 'English' },
        { code: 'ja', label: '日本語' },
        { code: 'es', label: 'Español' },
        { code: 'ko', label: '한국어' }
      ];
      return (
          <div className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center p-6 text-white">
              <Globe className="w-16 h-16 mb-6 opacity-80" />
              <h1 className="text-2xl font-bold mb-8">Select Language / 选择语言</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                  {langs.map(l => (
                      <button
                        key={l.code}
                        onClick={() => {
                            setLanguage(l.code);
                            setHasSelectedLanguage(true);
                            setScreen('intro');
                        }}
                        className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm py-4 rounded-xl text-lg font-medium transition-all active:scale-95"
                      >
                          {l.label}
                      </button>
                  ))}
              </div>
          </div>
      );
  }

  // QUIZ SCREEN
  if (screen === 'quiz') {
    const questions = getQuestions();
    const question = questions[currentQIndex];
    const progress = ((currentQIndex) / questions.length) * 100;
    const colorClass = testType === 'love_style' ? 'pink' : (testType === 'reconciliation' ? 'teal' : 'indigo');
    const colorClassText = testType === 'love_style' ? 'text-pink-600' : (testType === 'reconciliation' ? 'text-teal-600' : 'text-indigo-600');
    const colorClassBg = testType === 'love_style' ? 'bg-pink-600' : (testType === 'reconciliation' ? 'bg-teal-600' : 'bg-indigo-600');

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col min-h-[500px]">
          <div className="h-2 bg-slate-100 w-full">
            <div className={`h-full transition-all duration-500 ease-out ${colorClassBg}`} style={{ width: `${progress}%` }}></div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className={`mb-2 font-bold text-xs tracking-wider uppercase flex justify-between ${colorClassText}`}>
              <span>{t.ui.question_progress.replace('{current}', currentQIndex + 1).replace('{total}', questions.length)}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-8 leading-relaxed mt-4">{question.text}</h2>
            <div className="space-y-3 mt-auto">
              {t.options.map((opt) => (
                <button
                  key={`${currentQIndex}-${opt.value}`}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${
                    selectedOption === opt.value
                      ? `border-${colorClass}-500 bg-${colorClass}-50 ring-1 ring-${colorClass}-500`
                      : `border-slate-200 hover:border-${colorClass}-600 hover:bg-${colorClass}-50`
                  }`}
                >
                  <span className="font-medium text-sm text-slate-700">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RESULT SCREEN
  if (screen === 'result') {
      const currentResult = results[assessmentMode][testType];
      if (!currentResult) return null;

      const isAttachment = testType === 'attachment';
      const isLoveStyle = testType === 'love_style';
      const isReconciliation = testType === 'reconciliation';

      let typeData, styles;
      if (isAttachment) {
          typeData = t.types[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      } else if (isLoveStyle) {
          typeData = t.types_love_style[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      } else {
          typeData = t.types_reconciliation[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      }

      return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`p-8 pb-6 ${styles.bgColor} border-b ${styles.borderColor} text-center`}>
              <p className="text-slate-500 font-medium mb-2 text-xs uppercase tracking-widest">
                  {isReconciliation ? t.ui.your_type_reconciliation : (isAttachment ? (assessmentMode === 'partner' ? t.ui.partner_type : t.ui.your_type) : t.ui.your_type_love_style)}
              </p>
              <h1 className={`text-2xl font-bold ${styles.color} mb-4 flex items-center justify-center gap-2`}>
                <styles.icon className="w-6 h-6" />
                {typeData.shortName || typeData.name.split(' ')[0]}
              </h1>
              {isAttachment && (
                  <div className="inline-flex gap-4 text-[10px] font-bold text-slate-600 bg-white/60 px-4 py-2 rounded-full border border-white/50 shadow-sm">
                  <span>{t.ui.anxiety}: {Math.round((currentResult.anxietyScore/42)*100)}%</span>
                  <span className="w-px h-3 bg-slate-300 my-auto"></span>
                  <span>{t.ui.avoidance}: {Math.round((currentResult.avoidanceScore/42)*100)}%</span>
                  </div>
              )}
            </div>

            <div className="p-8 pt-6 space-y-6">
                {isAttachment && <QuadrantChart anxietyScore={currentResult.anxietyScore} avoidanceScore={currentResult.avoidanceScore} t={t} />}

                <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-500" /> {t.ui.deep_analysis}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">{typeData.detailedInfo}</p>
                </div>

                {/* NEXT STEP PROMPTS */}
                {isAttachment && assessmentMode === 'self' && !results.self.loveStyle && (
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-xl text-white shadow-lg">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5"/> Unlock Full Profile</h3>
                        <p className="text-sm opacity-90 mb-4">Discover your "Love Style" (Color Wheel) to get a comprehensive analysis of your relationship patterns.</p>
                        <button onClick={() => handleStart('self', 'love_style')} className="w-full bg-white text-pink-600 font-bold py-3 rounded-lg hover:bg-pink-50 transition-colors shadow-sm">
                            Take Love Style Test
                        </button>
                    </div>
                )}

                {isLoveStyle && assessmentMode === 'self' && results.self.attachment && (
                    <div className="bg-slate-900 p-6 rounded-xl text-white shadow-lg">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Lock className="w-5 h-5 text-yellow-400"/> Comprehensive Analysis Ready</h3>
                        <p className="text-sm opacity-80 mb-4">We have data from both your Attachment Style and Love Style. View your deep psychological profile now.</p>
                        <button onClick={() => setScreen('comprehensive_report')} className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 rounded-lg transition-colors shadow-sm">
                            View Comprehensive Report
                        </button>
                    </div>
                )}

                {isAttachment && assessmentMode === 'self' && !results.partner.attachment && (
                     <div className="border-t border-slate-100 pt-4">
                        <p className="text-sm text-slate-500 mb-2">Want to know if you match?</p>
                        <button onClick={() => handleStart('partner', 'attachment')} className="w-full border-2 border-indigo-100 text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                            Test My Partner Next
                        </button>
                     </div>
                )}

                {isAttachment && assessmentMode === 'partner' && results.self.attachment && (
                    <div className="bg-indigo-600 p-6 rounded-xl text-white shadow-lg">
                        <h3 className="font-bold text-lg mb-2">Relationship Analysis</h3>
                        <p className="text-sm opacity-80 mb-4">Compare your {t.types[results.self.attachment.typeKey].shortName} with their {t.types[results.partner.attachment.typeKey].shortName}.</p>
                        <button onClick={() => setScreen('relationship_report')} className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg transition-colors shadow-sm">
                            View Relationship Report
                        </button>
                    </div>
                )}

                <button onClick={() => setScreen('intro')} className="w-full text-slate-400 hover:text-slate-600 text-sm py-2">
                    {t.ui.back}
                </button>
            </div>
          </div>
        </div>
      );
  }

  // COMPREHENSIVE REPORT (Self: Attachment + Love Style)
  if (screen === 'comprehensive_report') {
      const att = results.self.attachment;
      const ls = results.self.loveStyle;
      if (!att || !ls) return setScreen('intro');

      const attType = t.types[att.typeKey];
      const lsType = t.types_love_style[ls.typeKey];

      // Check for the "Paradox" condition: Anxious/Mania
      const isParadox = (att.typeKey === 'ANXIOUS' || att.typeKey === 'FEARFUL') && (ls.typeKey === 'MANIA' || ls.typeKey === 'EROS');
      // Or specifically Anxious + Mania as per request
      const isStrictParadox = att.typeKey === 'ANXIOUS' && ls.typeKey === 'MANIA';

      const paradoxText = PARADOX_CONTENT[language] || PARADOX_CONTENT['en'];

      return (
          <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
              <div className="max-w-md mx-auto space-y-6">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
                      <h1 className="text-2xl font-bold text-slate-900 mb-6">Comprehensive Profile</h1>

                      <div className="flex items-center justify-between mb-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div>
                              <p className="text-xs text-slate-500 uppercase font-bold">Attachment</p>
                              <p className="font-bold text-indigo-600">{attType.name}</p>
                          </div>
                          <div className="h-8 w-px bg-slate-200"></div>
                          <div className="text-right">
                              <p className="text-xs text-slate-500 uppercase font-bold">Love Style</p>
                              <p className="font-bold text-pink-600">{lsType.name}</p>
                          </div>
                      </div>

                      {(isStrictParadox || isParadox) && (
                          <div className="bg-slate-900 text-slate-200 rounded-xl p-6 space-y-4 border border-slate-800 shadow-2xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>
                              <h2 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
                                  <Sparkles className="w-5 h-5 text-yellow-400" />
                                  {paradoxText.title}
                              </h2>
                              <p className="text-sm text-slate-400 italic border-l-2 border-indigo-500 pl-3">
                                  {paradoxText.subtitle}
                              </p>

                              <div className="space-y-6 mt-6">
                                  {paradoxText.content.map((item, idx) => (
                                      <div key={idx} className="relative z-10">
                                          <h3 className="font-bold text-indigo-300 text-sm mb-1">{item.title}</h3>
                                          <p className="text-xs leading-relaxed text-slate-300">{item.text}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}

                      {!isParadox && (
                          <div className="bg-white border border-slate-200 p-6 rounded-xl">
                              <h3 className="font-bold text-slate-800 mb-2">Synthesis</h3>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                  Your combination of <b>{attType.shortName}</b> and <b>{lsType.shortName}</b> suggests a unique dynamic.
                                  {att.typeKey === 'SECURE'
                                    ? " Your secure base allows you to express your love style in a healthy way."
                                    : " Your attachment insecurity likely fuels the intensity or distance in your love style."}
                              </p>
                          </div>
                      )}
                  </div>

                  <button onClick={() => setScreen('intro')} className="w-full bg-white shadow-sm border border-slate-200 py-3 rounded-xl font-semibold text-slate-700">
                      Back to Home
                  </button>
              </div>
          </div>
      );
  }

  // RELATIONSHIP REPORT
  if (screen === 'relationship_report') {
      const self = results.self.attachment;
      const partner = results.partner.attachment;
      if (!self || !partner) return setScreen('intro');

      const selfType = t.types[self.typeKey];
      const partnerType = t.types[partner.typeKey];

      // Simple logic for dynamic text based on combination
      const isAnxiousAvoidant = (self.typeKey === 'ANXIOUS' && partner.typeKey === 'DISMISSIVE') || (self.typeKey === 'DISMISSIVE' && partner.typeKey === 'ANXIOUS');
      const isBothSecure = self.typeKey === 'SECURE' && partner.typeKey === 'SECURE';

      return (
          <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
                  <h1 className="text-2xl font-bold text-slate-900 mb-6">Relationship Dynamics</h1>

                  <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-2 text-indigo-600 font-bold">You</div>
                          <span className="text-xs font-bold px-2 py-1 bg-slate-100 rounded">{selfType.shortName}</span>
                      </div>
                      <ArrowRight className="text-slate-300" />
                      <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-2 text-pink-600 font-bold">Them</div>
                          <span className="text-xs font-bold px-2 py-1 bg-slate-100 rounded">{partnerType.shortName}</span>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <div className={`p-4 rounded-xl ${isAnxiousAvoidant ? 'bg-orange-50 border border-orange-100' : 'bg-slate-50 border border-slate-100'}`}>
                          <h3 className="font-bold mb-2 flex items-center gap-2">
                              {isAnxiousAvoidant && <AlertCircle className="w-4 h-4 text-orange-500"/>}
                              The Dynamic
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                              {isAnxiousAvoidant
                                ? "You are in the classic 'Anxious-Avoidant Trap'. One chases intimacy while the other runs from it. This creates a cycle of conflict and withdrawal."
                                : isBothSecure
                                    ? "You have a 'Secure-Secure' pairing. This is the gold standard for stability, though it requires effort to keep the spark alive."
                                    : `The interaction between a ${selfType.shortName} and a ${partnerType.shortName} can be complex. Understanding your differing needs for intimacy and space is key.`
                              }
                          </p>
                      </div>
                  </div>

                  <button onClick={() => setScreen('intro')} className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200">
                      Back to Home
                  </button>
              </div>
          </div>
      );
  }

  // DEFAULT INTRO (After language select)
  // ... This logic is handled by the `screen === 'intro'` block below ...

  if (screen === 'calculating') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className={`absolute inset-0 blur-xl opacity-20 animate-pulse rounded-full ${testType === 'love_style' ? 'bg-pink-500' : (testType === 'reconciliation' ? 'bg-teal-500' : 'bg-indigo-500')}`}></div>
            <RefreshCw className={`w-12 h-12 animate-spin mx-auto mb-4 relative z-10 ${testType === 'love_style' ? 'text-pink-600' : (testType === 'reconciliation' ? 'text-teal-600' : 'text-indigo-600')}`} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{testType === 'love_style' ? t.ui.calculating_love_style : (testType === 'reconciliation' ? t.ui.calculating_reconciliation : t.ui.calculating)}</h2>
          <p className="text-slate-500 mt-2 text-sm">{testType === 'love_style' ? "..." : (testType === 'reconciliation' ? "..." : t.ui.calculating_sub)}</p>
        </div>
      </div>
    );
  }

  // HOME SCREEN
  return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">

          <div className="absolute top-4 right-4 z-10">
             <button onClick={() => setScreen('language_select')} className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/40 transition-colors text-white">
                 <Globe className="w-5 h-5" />
             </button>
          </div>

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
            <div className="grid grid-cols-1 gap-3">
              {/* TEST MYSELF */}
              <button
                onClick={() => handleStart('self', 'attachment')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-between px-6 shadow-lg shadow-slate-900/20 group"
              >
                <span className="flex items-center gap-3"><Shield className="w-5 h-5" /> {t.ui.start_btn}</span>
                {results.self.attachment && <CheckCircle className="w-5 h-5 text-green-400" />}
              </button>

              {/* TEST PARTNER */}
              <button
                onClick={() => handleStart('partner', 'attachment')}
                className="w-full bg-white border-2 border-indigo-50 hover:border-indigo-100 text-indigo-900 font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-between px-6 group"
              >
                <span className="flex items-center gap-3"><Users className="w-5 h-5 text-indigo-500" /> {t.ui.start_partner_btn}</span>
                {results.partner.attachment && <CheckCircle className="w-5 h-5 text-green-500" />}
              </button>
            </div>

            {/* SECONDARY TESTS */}
            <div className="border-t border-slate-100 pt-4 space-y-3">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">More Tests</p>

                 <button
                    onClick={() => handleStart('self', 'love_style')}
                    className="w-full bg-gradient-to-r from-pink-50 to-white border border-pink-100 hover:border-pink-200 text-pink-700 font-medium py-3 rounded-xl transition-all flex items-center justify-between px-4"
                  >
                    <span className="flex items-center gap-2 text-sm"><Palette className="w-4 h-4" /> {t.ui.title_love_style}</span>
                    {results.self.loveStyle && <CheckCircle className="w-4 h-4 text-pink-500" />}
                  </button>

                  <button
                    onClick={() => handleStart('self', 'reconciliation')}
                    className="w-full bg-gradient-to-r from-teal-50 to-white border border-teal-100 hover:border-teal-200 text-teal-700 font-medium py-3 rounded-xl transition-all flex items-center justify-between px-4"
                  >
                    <span className="flex items-center gap-2 text-sm"><RefreshCw className="w-4 h-4" /> {t.ui.title_reconciliation}</span>
                    {results.self.reconciliation && <CheckCircle className="w-4 h-4 text-teal-500" />}
                  </button>
            </div>

            {/* RESULTS & LIBRARY */}
            <div className="grid grid-cols-2 gap-3 pt-2">
                 {(results.self.attachment || results.self.loveStyle) && (
                     <button
                        onClick={() => setScreen('comprehensive_report')}
                        className="col-span-2 w-full bg-slate-800 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                     >
                        <Sparkles className="w-4 h-4 text-yellow-400" /> View Full Report
                     </button>
                 )}

                 <button
                    onClick={() => {
                        setLibraryTab('attachment');
                        setSelectedLibraryType('SECURE');
                        setScreen('library');
                    }}
                    className="col-span-2 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
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