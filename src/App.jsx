import React, { useState, useEffect } from 'react';
import { Heart, Shield, AlertCircle, ArrowRight, RefreshCw, CheckCircle, XCircle, Info, BookOpen, Star, Zap, Activity } from 'lucide-react';

// --- DATA & CONFIGURATION ---

const QUESTIONS = [
  { id: 1, text: "我经常担心伴侣会离开我，或者不再爱我。", dimension: "anxiety" },
  { id: 2, text: "当别人试图与我太过亲近时，我会感到紧张或不自在。", dimension: "avoidance" },
  { id: 3, text: "我很渴望亲密关系，但我感觉这似乎会把人吓跑。", dimension: "anxiety" },
  { id: 4, text: "我习惯保持独立，不喜欢完全依赖别人或让别人依赖我。", dimension: "avoidance" },
  { id: 5, text: "一旦没有收到伴侣的及时回复，我就会开始胡思乱想。", dimension: "anxiety" },
  { id: 6, text: "我很难完全向伴侣敞开心扉，分享内心深处的感受。", dimension: "avoidance" },
  { id: 7, text: "我觉得我对伴侣的感情投入，往往比对方对我的投入要多。", dimension: "anxiety" },
  { id: 8, text: "当伴侣表现得太粘人或要求太多亲密感时，我会想逃离。", dimension: "avoidance" },
  { id: 9, text: "我非常需要伴侣不断的确认和安抚才能感到安心。", dimension: "anxiety" },
  { id: 10, text: "在亲密关系中，我倾向于保持一定的距离感以保护自己。", dimension: "avoidance" },
  { id: 11, text: "如果我展示真实的自己，我害怕对方会不喜欢我。", dimension: "anxiety" },
  { id: 12, text: "我不仅依靠自己解决问题，也不习惯向伴侣寻求安慰。", dimension: "avoidance" }
];

const OPTIONS = [
  { value: 1, label: "完全不符合" },
  { value: 2, label: "比较不符合" },
  { value: 3, label: "有点不符合" },
  { value: 4, label: "中立" },
  { value: 5, label: "有点符合" },
  { value: 6, label: "比较符合" },
  { value: 7, label: "完全符合" }
];

const TYPES = {
  SECURE: {
    id: "SECURE",
    name: "安全型依恋 (Secure)",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: Shield,
    desc: "你在亲密关系中感到舒适和自信。你不担心被抛弃，也乐于依赖他人或被他人依赖。你能够有效地沟通需求，在冲突中保持情绪稳定。",
    detailedInfo: "安全型依恋者通常拥有温暖、充满回应的童年经历。成年后，他们拥有高自尊，也信任他人。他们不玩心理游戏，能够直接表达爱意和需求。他们既享受亲密，也能享受独处。",
    idealMatch: "安全型依恋者是所有类型的理想伴侣。最完美的匹配是另一个安全型依恋者，这会带来最稳定、最令人满意的关系。你也能很好地包容焦虑型或回避型伴侣，帮助他们走向安全。",
    badMatch: "虽然你能和任何人相处，但严重未觉察的恐惧-回避型可能会给你带来巨大的情感消耗。",
    growth: [
        "继续保持你的开放和诚实。",
        "成为伴侣的“安全基地”，在他们情绪不稳定时提供支持。",
        "学会设定界限，不要为了包容他人而过度牺牲自己的需求。"
    ]
  },
  ANXIOUS: {
    id: "ANXIOUS",
    name: "焦虑型依恋 (Anxious/Preoccupied)",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: AlertCircle,
    desc: "你渴望高度的亲密感，但常担心伴侣不爱你或会离开你。你对他人的情绪变化非常敏感，容易在关系中感到不安和情绪化。",
    detailedInfo: "焦虑型依恋者通常因为照顾者反应不一致而形成。成年后，他们倾向于通过“抗议行为”（如发脾气、冷战）来获取关注。他们的自我价值感往往过度依赖伴侣的认可。",
    idealMatch: "安全型依恋者是你最好的归宿。他们的稳定性和一致性可以抚平你的焦虑，让你确信自己是被爱的。避免找回避型伴侣，这通常会触发“焦虑-回避陷阱”。",
    badMatch: "疏离-回避型依恋。你追得越紧，他们跑得越远，这会让你陷入痛苦的循环。",
    growth: [
        "建立自我价值感：列出你的优点，不依赖外界确认。",
        "学会“暂停”：在感到焦虑想发信息轰炸时，放下手机 30 分钟。",
        "直接沟通需求，而不是通过情绪化的行为让对方猜。",
        "练习独处，发现一个人时的快乐。"
    ]
  },
  DISMISSIVE: {
    id: "DISMISSIVE",
    name: "疏离-回避型依恋 (Dismissive-Avoidant)",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: XCircle,
    desc: "你强调独立和自给自足，往往将亲密关系视为对自由的威胁。你会压抑自己的情感需求，在伴侣试图靠近时会下意识地后退。",
    detailedInfo: "疏离-回避型依恋者可能因为童年时期情感需求被忽视，学会了“靠自己”。他们通常压抑情绪，显得冷漠或理性。他们实际上也有亲密需求，但防御机制让他们否认这一点。",
    idealMatch: "安全型依恋者。他们尊重你的空间需求，同时不会像焦虑型那样给你施加压力，能让你慢慢卸下防备。两个回避型在一起可能相安无事，但会缺乏深层的情感连接。",
    badMatch: "焦虑型依恋。他们的粘人和情感需求会让你感到窒息，触发你的逃跑本能。",
    growth: [
        "重新定义独立：真正的强大是能够展示脆弱。",
        "练习表达感受：从简单的“我今天有点累”开始分享。",
        "当想逃离时，试着留下来，告诉伴侣“我需要一点空间”，而不是直接消失。",
        "尝试依靠他人完成一些小事。"
    ]
  },
  FEARFUL: {
    id: "FEARFUL",
    name: "恐惧-回避型依恋 (Fearful-Avoidant)",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: Info,
    desc: "你处于矛盾之中：既渴望亲密，又极度恐惧受伤。你可能表现出“忽冷忽热”的特质，想靠近却又在靠近时感到恐慌。",
    detailedInfo: "恐惧型依恋者（也称混乱型）通常经历过创伤或极不稳定的照顾。他们想爱却不敢爱。在关系中，他们可能在极其粘人和极其冷漠之间摇摆。",
    idealMatch: "安全型依恋者。你需要极大的耐心、稳定和安全感来疗愈过去的创伤。安全型伴侣能提供这种环境。专业的心理咨询也是非常重要的辅助。",
    badMatch: "恐惧型或焦虑型。不稳定的情绪碰撞会让关系充满戏剧性和痛苦。",
    growth: [
        "寻求专业帮助：疗愈过去的创伤是关键。",
        "识别触发点：记录下让你感到恐慌的时刻。",
        "练习“自我安抚”：当恐惧袭来，告诉自己“我现在是安全的”。",
        "建立清晰的界限，这会让你感到更有掌控感。"
    ]
  }
};

// --- COMPONENTS ---

const QuadrantChart = ({ anxietyScore, avoidanceScore }) => {
  const min = 6;
  const max = 42;
  const range = max - min;

  const xPercent = ((avoidanceScore - min) / range) * 100;
  const yPercent = ((anxietyScore - min) / range) * 100;

  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto bg-white border-2 border-slate-200 rounded-lg shadow-sm mt-6 mb-8 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="bg-red-50/50 border-r border-b border-slate-300 flex items-start justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">焦虑型</span>
        </div>
        <div className="bg-purple-50/50 border-b border-slate-300 flex items-start justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">恐惧型</span>
        </div>
        <div className="bg-green-50/50 border-r border-slate-300 flex items-end justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-green-500 uppercase tracking-wider">安全型</span>
        </div>
        <div className="bg-blue-50/50 flex items-end justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">疏离型</span>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800/20 -translate-x-1/2"></div>
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800/20 -translate-y-1/2"></div>

      <div className="absolute top-1/2 -translate-y-1/2 right-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">高回避</div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">低回避</div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">高焦虑</div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 text-[9px] text-slate-500 font-medium bg-white/80 px-1 rounded">低焦虑</div>

      <div
        className="absolute w-4 h-4 bg-slate-900 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 translate-y-1/2 transition-all duration-1000 ease-out z-10"
        style={{ left: `${xPercent}%`, bottom: `${yPercent}%` }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-2 rounded whitespace-nowrap">
          你在这里
        </div>
      </div>
    </div>
  );
};

const TypeCard = ({ type, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${isActive ? `${type.bgColor} ${type.borderColor} ring-2 ring-offset-1 ring-indigo-500` : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'}`}
  >
    <div className="flex items-center gap-3 mb-2">
      <type.icon className={`w-5 h-5 ${type.color}`} />
      <h3 className={`font-bold ${type.color}`}>{type.name.split(' ')[0]}</h3>
    </div>
    <p className="text-xs text-slate-500 line-clamp-2">{type.desc}</p>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function AttachmentTest() {
  const [screen, setScreen] = useState('intro'); // intro, quiz, calculating, result, library
  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedLibraryType, setSelectedLibraryType] = useState('SECURE');

  const handleStart = () => {
    setScreen('quiz');
    setCurrentQIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentQIndex].id]: value }));

    if (currentQIndex < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQIndex(prev => prev + 1), 250);
    } else {
      setScreen('calculating');
      setTimeout(calculateAndShowResult, 1500);
    }
  };

  const calculateAndShowResult = () => {
    let anxietyScore = 0;
    let avoidanceScore = 0;

    QUESTIONS.forEach(q => {
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

  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
              <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">恋爱依恋类型测试</h1>
              <p className="text-indigo-100 text-sm font-light">探索你的亲密关系模式，找到幸福的钥匙</p>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-slate-600 leading-relaxed text-sm">
                为什么我们在爱里总是重蹈覆辙？<br/>
                基于经典依恋理论，我们帮助你解析潜意识里的<b>焦虑</b>与<b>回避</b>倾向。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {Object.values(TYPES).map(t => (
                <div key={t.id} className={`p-3 rounded-lg border ${t.bgColor} ${t.borderColor} flex flex-col items-center justify-center text-center gap-1`}>
                  <t.icon className={`w-5 h-5 ${t.color}`} />
                  <span className={`text-xs font-bold ${t.color}`}>{t.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <button
                onClick={handleStart}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 group"
              >
                开始深度测评 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setScreen('library')}
                className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                浏览依恋类型百科
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'library') {
    const activeType = TYPES[selectedLibraryType];
    return (
      <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[80vh] flex flex-col">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
            <button onClick={() => setScreen('intro')} className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" /> 返回
            </button>
            <h2 className="font-bold text-slate-800">依恋类型百科</h2>
            <div className="w-10"></div>
          </div>

          <div className="p-4 grid grid-cols-2 gap-2 bg-slate-50">
            {Object.keys(TYPES).map(key => (
              <TypeCard
                key={key}
                type={TYPES[key]}
                isActive={selectedLibraryType === key}
                onClick={() => setSelectedLibraryType(key)}
              />
            ))}
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${activeType.bgColor} ${activeType.color}`}>
              <activeType.icon className="w-4 h-4" />
              {activeType.name}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">深度解析</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{activeType.detailedInfo}</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4" /> 理想伴侣匹配
                </h3>
                <p className="text-indigo-800 text-sm leading-relaxed">{activeType.idealMatch}</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-orange-500" /> 潜在雷区
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{activeType.badMatch}</p>
              </div>

               <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                  <Activity className="w-4 h-4 text-green-500" /> 提升建议
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
    const question = QUESTIONS[currentQIndex];
    const progress = ((currentQIndex) / QUESTIONS.length) * 100;

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
              <span>Question {currentQIndex + 1}</span>
              <span className="text-slate-400">/ {QUESTIONS.length}</span>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-8 leading-relaxed mt-4">
              {question.text}
            </h2>

            <div className="space-y-3 mt-auto">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-between group active:scale-[0.99]"
                >
                  <span className="text-slate-600 group-hover:text-indigo-900 font-medium text-sm">{opt.label}</span>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>
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
          <h2 className="text-xl font-bold text-slate-800">正在解码您的内心世界...</h2>
          <p className="text-slate-500 mt-2 text-sm">整合焦虑与回避维度数据</p>
        </div>
      </div>
    );
  }

  if (screen === 'result' && result) {
    const type = TYPES[result.typeKey];

    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`p-8 pb-6 ${type.bgColor} border-b ${type.borderColor} text-center`}>
            <p className="text-slate-500 font-medium mb-2 text-xs uppercase tracking-widest">您的依恋类型</p>
            <h1 className={`text-2xl font-bold ${type.color} mb-4 flex items-center justify-center gap-2`}>
              <type.icon className="w-6 h-6" />
              {type.name.split(' ')[0]}
            </h1>
            <div className="inline-flex gap-4 text-[10px] font-bold text-slate-600 bg-white/60 px-4 py-2 rounded-full border border-white/50 shadow-sm">
              <span>焦虑: {Math.round((result.anxietyScore/42)*100)}%</span>
              <span className="w-px h-3 bg-slate-300 my-auto"></span>
              <span>回避: {Math.round((result.avoidanceScore/42)*100)}%</span>
            </div>
          </div>

          <div className="p-8 pt-4">
            <QuadrantChart anxietyScore={result.anxietyScore} avoidanceScore={result.avoidanceScore} />

            <div className="mb-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-500" />
                  深度解析
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {type.detailedInfo}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  你的理想伴侣
                </h3>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 text-sm text-slate-700">
                  <p className="mb-2 font-medium text-pink-900">推荐匹配：安全型依恋</p>
                  <p className="leading-relaxed">{type.idealMatch}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  成长指南
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
                onClick={() => {
                   setSelectedLibraryType(result.typeKey);
                   setScreen('library');
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                了解其他类型
              </button>
              <button
                onClick={handleStart}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10"
              >
                <RefreshCw className="w-4 h-4" />
                重新测试
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[10px] mt-8 pb-4 max-w-xs mx-auto">
          注：本测试基于ECR量表简化版，结果仅供自我探索参考，不能替代专业心理咨询诊断。
        </p>
      </div>
    );
  }

  return null;
}
