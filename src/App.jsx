import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Shield, AlertCircle, ArrowRight, RefreshCw, CheckCircle, XCircle,
  Info, BookOpen, Star, Zap, Activity, Share2, Globe, Users, Palette,
  Sparkles, Lock, ArrowUpRight, Home, MessageSquare, Bot, User, Compass,
  ChevronRight, Send
} from 'lucide-react';
import { CreateMLCEngine } from "@mlc-ai/web-llm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from './firebase';
import Auth from './components/Auth';
import { TRANSLATIONS } from './translations';

// --- CONSTANTS & LOGIC ---

// --- COMPONENTS ---

const BottomNav = ({ activeTab, setActiveTab, t }) => {
  const tabs = [
    { id: 'home', icon: Home, label: t.ui.explore_tab || '探索' },
    { id: 'ai', icon: Bot, label: t.ui.ai_tab || 'AI 聊愈' },
    { id: 'community', icon: Compass, label: t.ui.community_tab || '社区', disabled: true },
    { id: 'mine', icon: User, label: t.ui.mine_tab || '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex justify-between items-center z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const isDisabled = tab.disabled;
        return (
          <button
            key={tab.id}
            disabled={isDisabled}
            onClick={() => !isDisabled && setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              isDisabled ? 'opacity-30 cursor-not-allowed text-slate-600' :
              isActive ? 'text-gold-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

const QuadrantChart = ({ anxietyScore, avoidanceScore, t }) => {
  const min = 6;
  const max = 42;
  const range = max - min;
  const xPercent = ((avoidanceScore - min) / range) * 100;
  const yPercent = ((anxietyScore - min) / range) * 100;

  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto bg-white/5 border border-white/10 rounded-xl shadow-2xl mt-4 mb-6 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="bg-red-500/10 border-r border-b border-white/10 flex items-start justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-red-300 uppercase tracking-wider">{t.chart.anxious_high}</span>
        </div>
        <div className="bg-purple-500/10 border-b border-white/10 flex items-start justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-purple-300 uppercase tracking-wider">{t.chart.fearful}</span>
        </div>
        <div className="bg-green-500/10 border-r border-white/10 flex items-end justify-start p-2">
          <span className="text-[10px] sm:text-xs font-bold text-green-300 uppercase tracking-wider">{t.chart.secure}</span>
        </div>
        <div className="bg-blue-500/10 flex items-end justify-end p-2">
          <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider">{t.chart.dismissive}</span>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20 -translate-x-1/2"></div>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20 -translate-y-1/2"></div>

      <div
        className="absolute w-4 h-4 bg-gold-400 border-2 border-white rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)] transform -translate-x-1/2 translate-y-1/2 transition-all duration-1000 ease-out z-10"
        style={{ left: `${xPercent}%`, bottom: `${yPercent}%` }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800/90 text-gold-400 text-[10px] py-1 px-2 rounded whitespace-nowrap shadow-sm border border-gold-500/30">
          {t.chart.you_are_here}
        </div>
      </div>
    </div>
  );
};

// --- NEW TABS ---

const HomeTab = ({ t, handleStart, handleTestClick, results, setScreen, setLibraryTab, setSelectedLibraryType }) => {
  return (
    <div className="p-6 space-y-8 pb-24 animate-fade-in">
      {/* Header */}
      <div className="relative mt-4 mb-8">
        <div className="flex justify-between items-start">
          <div>
             <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">{t.ui.home_title || '知几 Kindred'}</h1>
             <p className="text-slate-400 text-sm">{t.ui.home_subtitle || '探索你的内心宇宙'}</p>
          </div>
          {/* <button onClick={() => setScreen('language_select')} className="p-2 glass-btn rounded-full text-slate-300">
             <Globe className="w-5 h-5" />
          </button> */}
        </div>
      </div>

      {/* Main Card */}
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all hover:bg-white/15" onClick={() => handleTestClick('self', 'attachment')}>
        <div className="absolute top-0 right-0 p-4 opacity-50">
          <Sparkles className="w-24 h-24 text-purple-500/20 rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">{t.ui.title}</h2>
          <p className="text-slate-300 text-sm mb-4 line-clamp-2">{t.ui.subtitle}</p>
          <div className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all">
            <span>{results.self.attachment ? (t.ui.view_result || '查看结果') : (t.ui.start_test || '开始测试')}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Secondary Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Love Style */}
        <div className="glass-card rounded-2xl p-4 relative overflow-hidden group cursor-pointer hover:bg-white/15" onClick={() => handleTestClick('self', 'love_style')}>
           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-3 shadow-lg shadow-pink-500/30">
              <Palette className="w-5 h-5 text-white" />
           </div>
           <h3 className="text-white font-bold mb-1">{t.ui.title_love_style}</h3>
           <p className="text-xs text-slate-400 mb-2">{t.ui.subtitle_love_style_short || '颜色理论'}</p>
           {results.self.loveStyle && <CheckCircle className="w-4 h-4 text-green-400 absolute top-4 right-4" />}
        </div>

        {/* Partner Test */}
        <div className="glass-card rounded-2xl p-4 relative overflow-hidden group cursor-pointer hover:bg-white/15" onClick={() => handleTestClick('partner', 'attachment')}>
           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/30">
              <Users className="w-5 h-5 text-white" />
           </div>
           <h3 className="text-white font-bold mb-1">{t.ui.start_partner_btn}</h3>
           <p className="text-xs text-slate-400 mb-2">{t.ui.subtitle_partner_short || '解码关系'}</p>
           {results.partner.attachment && <CheckCircle className="w-4 h-4 text-green-400 absolute top-4 right-4" />}
        </div>
      </div>

      {/* Library/Discovery Section */}
      <div>
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-gold-400" /> {t.ui.library_title}
        </h3>
        <div className="glass-card rounded-xl p-0 overflow-hidden">
          <div
             className="p-4 border-b border-white/5 flex items-center justify-between cursor-pointer hover:bg-white/5"
             onClick={() => { setLibraryTab('attachment'); setSelectedLibraryType('SECURE'); setScreen('library'); }}
          >
            <div className="flex items-center gap-3">
               <div className="bg-green-500/20 p-2 rounded-lg"><Shield className="w-4 h-4 text-green-400"/></div>
               <span className="text-slate-200 text-sm">{t.ui.library_description_attachment || '依恋类型百科'}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>
          <div
             className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5"
             onClick={() => { setLibraryTab('attachment'); setSelectedLibraryType('ANXIOUS'); setScreen('library'); }}
          >
             <div className="flex items-center gap-3">
               <div className="bg-red-500/20 p-2 rounded-lg"><AlertCircle className="w-4 h-4 text-red-400"/></div>
               <span className="text-slate-200 text-sm">{t.ui.library_description_anxiety || '深入理解焦虑型'}</span>
            </div>
             <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </div>

      {/* Reports Shortcut */}
      {(results.self.attachment || results.self.loveStyle) && (
        <button
          onClick={() => setScreen('comprehensive_report')}
          className="w-full bg-gradient-to-r from-gold-500 to-amber-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
        >
          <Sparkles className="w-5 h-5 text-white" /> {t.ui.view_cosmic_profile || '查看你的宇宙档案'}
        </button>
      )}
    </div>
  );
};

const CommunityTab = ({ t }) => {
  return (
    <div className="p-6 pb-24 h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold text-white mb-6 sticky top-0 bg-slate-900/80 backdrop-blur-md py-4 z-10">{t.ui.community_title || '星际广场'}</h1>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-xs font-bold text-indigo-300">U{i}</div>
              <div>
                <p className="text-sm font-bold text-slate-200">{t.ui.cosmic_traveler || '宇宙旅人'} #{2300 + i}</p>
                <p className="text-[10px] text-slate-500">{t.ui.ago_2_hours || '2小时前'}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-3 leading-relaxed">
              {t.ui.just_did_test || '刚做完测试...'}
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <button className="flex items-center gap-1 hover:text-pink-400 transition-colors"><Heart className="w-3 h-3" /> 24</button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition-colors"><MessageSquare className="w-3 h-3" /> 5</button>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-24 right-6 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-gold-500/40 hover:scale-110 transition-transform">
        <Sparkles className="w-6 h-6" />
      </button>
    </div>
  );
};

const AiChatTab = ({ t, results }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: t.ui.ai_intro || "你好，旅人。我是子期，你的内心宇宙向导。今天感觉如何？" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [engine, setEngine] = useState(null);
  const [initProgress, setInitProgress] = useState("");
  const messagesEndRef = useRef(null);

  const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1";

  useEffect(() => {
    const initEngine = async () => {
        try {
            const eng = await CreateMLCEngine(
                selectedModel,
                {
                    initProgressCallback: (progress) => {
                        setInitProgress(progress.text);
                    },
                }
            );
            setEngine(eng);
            setInitProgress("");
        } catch (error) {
            console.error("Failed to load engine", error);
            setInitProgress("Failed to load AI model.");
        }
    };
    initEngine();
  }, []);

  const generateSystemPrompt = () => {
      let prompt = `你叫子期。你是一位极具同理心、温柔且专业的心理咨询师。你的目标是成为用户心灵的树洞和向导。
请遵循以下原则：
1. **共情与倾听**：首先确认和接纳用户的情绪。使用“我感觉到你现在很...”或“这听起来真的很难受”等句式。
2. **引导而非说教**：不要直接丢出一大段理论。通过提问引导用户自我探索。例如：“这让你想起了什么吗？”或“如果...你会怎么做？”
3. **人性化对话**：像朋友一样交谈，避免机械的列表（1. 2. 3.）。回答要简短精炼，不要长篇大论。
4. **深度结合用户背景**：你是用户心理档案的专家。请参考以下详细分析来回答问题。

### 用户详细档案：
`;
      if (results?.self?.attachment) {
          const r = results.self.attachment;
          const typeInfo = t.types[r.typeKey];
          prompt += `\n**依恋类型 (自我)**: ${typeInfo.name} (焦虑: ${r.anxietyScore}, 回避: ${r.avoidanceScore})
- 定义: ${typeInfo.desc}
- 深度分析: ${typeInfo.detailedInfo}
- 理想伴侣: ${typeInfo.idealMatch}
- 潜在雷区: ${typeInfo.badMatch}
- 建议: ${typeInfo.growth.join('; ')}\n`;
      }
      if (results?.self?.loveStyle) {
          const r = results.self.loveStyle;
          const typeInfo = t.types_love_style[r.typeKey];
          prompt += `\n**爱情原型**: ${typeInfo.name}
- 定义: ${typeInfo.desc}
- 深度分析: ${typeInfo.detailedInfo}
- 理想伴侣: ${typeInfo.idealMatch}
- 潜在雷区: ${typeInfo.badMatch}
- 建议: ${typeInfo.growth.join('; ')}\n`;
      }
      if (results?.self?.reconciliation) {
          const r = results.self.reconciliation;
          const typeInfo = t.types_reconciliation[r.typeKey];
          prompt += `\n**复合概率**: ${typeInfo.name}
- 分析: ${typeInfo.detailedInfo}
- 建议: ${typeInfo.growth.join('; ')}\n`;
      }
      if (results?.partner?.attachment) {
          const r = results.partner.attachment;
          const typeInfo = t.types[r.typeKey];
          prompt += `\n**伴侣依恋类型**: ${typeInfo.name}
- 特点: ${typeInfo.desc}
- 互动建议: 与${typeInfo.shortName}相处时，${typeInfo.idealMatch}\n`;
      }

      prompt += `\n### 知识库 (其他类型参考)：
为了更好对比，请知晓：
- 安全型：自信、舒适、通过沟通解决问题。
- 焦虑型：渴望亲密、患得患失、需要确认。
- 疏离-回避型：独立、压抑情感、逃避亲密。
- 恐惧-回避型：既渴望又害怕、忽冷忽热。

请利用以上所有信息，以子期的身份进行对话。
`;
      return prompt;
  };

  const handleSend = async (textOverride = null) => {
    const textToSend = textOverride || input;
    if(!textToSend.trim()) return;
    // Removed engine check to allow UI testing without engine loaded, but in prod keep it.
    // For now, let's keep it safe but allow input clearing.
    if (!engine) {
       // Ideally show a toast, but here just log
       console.log("Engine not loaded yet");
       return;
    }

    const userMsg = { id: Date.now(), sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const systemPrompt = generateSystemPrompt();

    try {
        const reply = await engine.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                ...messages.filter(m => m.id !== 1).map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
                { role: "user", content: textToSend }
            ],
        });
        const botText = reply.choices[0].message.content;
        setMessages(prev => [...prev, { id: Date.now()+1, sender: 'bot', text: botText }]);
    } catch (error) {
        console.error("Chat error", error);
        setMessages(prev => [...prev, { id: Date.now()+1, sender: 'bot', text: t.ui.ai_error || "抱歉，我现在无法连接到星辰（模型加载失败）。" }]);
    } finally {
        setIsLoading(false);
    }
  };

  const suggestions = [
      "解读我的测试结果",
      "我和伴侣总是吵架",
      "如何建立安全感",
      "感觉没人理解我",
      "对方是回避型怎么办"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, initProgress]);

  return (
    <div className="flex flex-col h-screen pb-20 bg-slate-900">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5">
           <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
             <Bot className="w-6 h-6 text-purple-400" />
           </div>
        </div>
        <div>
           <h2 className="font-bold text-white">{t.ui.ai_title || "子期"}</h2>
           <div className="flex items-center gap-1 text-[10px] text-green-400">
             <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> {t.ui.online || "在线"}
           </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {initProgress && (
            <div className="text-center text-xs text-slate-500 p-4 bg-white/5 rounded-xl">
                {initProgress}
            </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
               msg.sender === 'user'
               ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-tr-none'
               : 'glass-card text-slate-200 rounded-tl-none border-none bg-white/10'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
             <div className="flex justify-start">
                 <div className="glass-card text-slate-200 p-3 rounded-2xl rounded-tl-none bg-white/10">
                    <span className="animate-pulse">...</span>
                 </div>
             </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
         {/* Suggestion Chips */}
         <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
            {suggestions.map((s, i) => (
                <button
                    key={i}
                    onClick={() => handleSend(s)}
                    disabled={!engine || isLoading}
                    className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-slate-300 transition-colors disabled:opacity-50"
                >
                    {s}
                </button>
            ))}
         </div>

         <div className="relative">
           <input
             type="text"
             value={input}
             onChange={e => setInput(e.target.value)}
             onKeyDown={e => e.key === 'Enter' && handleSend()}
             placeholder={t.ui.ai_placeholder || "输入消息..."}
             disabled={!engine || isLoading}
             className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600 disabled:opacity-50"
           />
           <button onClick={() => handleSend()} disabled={!engine || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-colors disabled:opacity-50">
              <Send className="w-4 h-4" />
           </button>
         </div>
      </div>
    </div>
  );
};

const MineTab = ({ results, t, user }) => {
  if (!user) {
    return (
      <div className="p-6 pb-24 min-h-screen flex flex-col justify-center">
        <Auth t={t} />
      </div>
    );
  }

  return (
    <div className="p-6 pb-24">
       <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-orange-500 p-1">
             <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-white/50" />
             </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{user.email.split('@')[0]}</h1>
            <p className="text-sm text-slate-400">ID: {user.uid.slice(0, 6)}</p>
            <span className="inline-block mt-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">{t.ui.premium || "高级会员"}</span>
          </div>
       </div>

       <div className="space-y-4">
         <div className="glass-card p-4 rounded-xl flex items-center justify-between">
            <span className="text-slate-300">{t.ui.my_reports || "我的报告"}</span>
            <span className="text-white font-bold">{Object.values(results.self).filter(Boolean).length}</span>
         </div>
         {/* Placeholder stats */}
         <div className="glass-card p-4 rounded-xl flex items-center justify-between">
            <span className="text-slate-300">{t.ui.saved_tests || "收藏的测试"}</span>
            <span className="text-white font-bold">2</span>
         </div>
       </div>

       <div className="mt-8 space-y-2">
         <button onClick={() => signOut(auth)} className="w-full text-left p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 transition-colors border border-red-500/20">
            {t.ui.logout || "退出登录"}
         </button>
         <button className="w-full text-left p-4 rounded-xl hover:bg-white/5 text-slate-300 transition-colors">{t.ui.settings || "设置"}</button>
         <button className="w-full text-left p-4 rounded-xl hover:bg-white/5 text-slate-300 transition-colors">{t.ui.help || "帮助与支持"}</button>
         <button className="w-full text-left p-4 rounded-xl hover:bg-white/5 text-slate-300 transition-colors">{t.ui.about || "关于"}</button>
       </div>
    </div>
  )
}

// --- MAIN APP COMPONENT ---

export default function AttachmentTest() {
  // State
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(true); // Default to selected
  const [language, setLanguage] = useState('zh-CN'); // Default to Chinese
  const [screen, setScreen] = useState('intro'); // Start at intro directly
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);

  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Quiz Context
  const [assessmentMode, setAssessmentMode] = useState('self');
  const [testType, setTestType] = useState('attachment');

  // Persistent Results
  const [results, setResults] = useState(() => {
      const local = localStorage.getItem('kindred_results');
      return local ? JSON.parse(local) : {
          self: { attachment: null, love_style: null, reconciliation: null },
          partner: { attachment: null }
      };
  });

  // Library State
  const [libraryTab, setLibraryTab] = useState('attachment');
  const [selectedLibraryType, setSelectedLibraryType] = useState('SECURE');

  const t = TRANSLATIONS[language] || TRANSLATIONS['zh-CN']; // Fallback to zh-CN

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Load data
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          let cloudData = {};
          if (docSnap.exists()) {
             const data = docSnap.data();
             if (data.results) {
               cloudData = data.results;
             }
          }

          // Merge local storage if exists
          const localDataString = localStorage.getItem('kindred_results');
          if (localDataString) {
              const localData = JSON.parse(localDataString);
              // Simple merge: prefer local if set, else cloud
              const newResults = {
                 self: {
                     attachment: localData.self?.attachment || cloudData.self?.attachment || null,
                     love_style: localData.self?.love_style || cloudData.self?.love_style || null,
                     reconciliation: localData.self?.reconciliation || cloudData.self?.reconciliation || null,
                 },
                 partner: {
                     attachment: localData.partner?.attachment || cloudData.partner?.attachment || null
                 }
              };
              setResults(newResults);
              // Sync back to cloud
              await setDoc(doc(db, "users", currentUser.uid), { results: newResults }, { merge: true });
              // Clear local storage
              localStorage.removeItem('kindred_results');
          } else {
             // Use cloud data
             setResults({
                 self: { attachment: null, love_style: null, reconciliation: null, ...cloudData.self },
                 partner: { attachment: null, ...cloudData.partner }
             });
          }
        } catch(e) {
          console.error("Error loading data:", e);
        }
      } else {
        // Logged out: load from local storage
        const local = localStorage.getItem('kindred_results');
        if (local) {
            setResults(JSON.parse(local));
        } else {
            setResults({
                self: { attachment: null, love_style: null, reconciliation: null },
                partner: { attachment: null }
            });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Helpers
  const getTypeStyles = (key) => {
      if (['EROS', 'LUDUS', 'STORGE', 'MANIA', 'PRAGMA', 'AGAPE'].includes(key)) {
          switch(key) {
              case 'EROS': return { color: "text-red-400", bgColor: "bg-red-500/10", borderColor: "border-red-500/20", icon: Heart };
              case 'LUDUS': return { color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20", icon: Zap };
              case 'STORGE': return { color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20", icon: Users };
              case 'MANIA': return { color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20", icon: Activity };
              case 'PRAGMA': return { color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20", icon: CheckCircle };
              case 'AGAPE': return { color: "text-pink-400", bgColor: "bg-pink-500/10", borderColor: "border-pink-500/20", icon: Heart };
              default: return { color: "text-slate-400", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/20", icon: Heart };
          }
      }
      switch(key) {
        case 'SECURE': return { color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20", icon: Shield };
        case 'ANXIOUS': return { color: "text-red-400", bgColor: "bg-red-500/10", borderColor: "border-red-500/20", icon: AlertCircle };
        case 'DISMISSIVE': return { color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20", icon: XCircle };
        case 'FEARFUL': return { color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20", icon: Info };
        default: return { color: "text-slate-400", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/20", icon: Shield };
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

  const handleTestClick = (mode, type) => {
      if (results[mode] && results[mode][type]) {
          setAssessmentMode(mode);
          setTestType(type);
          setScreen('result');
      } else {
          handleStart(mode, type);
      }
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
        let typeKey = 'LOW';
        if (total >= 55) typeKey = 'HIGH';
        else if (total >= 40) typeKey = 'MEDIUM';
        resultData = { typeKey, score: total };
    }

    setResults(prev => {
        const newResults = {
            ...prev,
            [assessmentMode]: {
                ...prev[assessmentMode],
                [testType]: resultData
            }
        };

        // Save to Firestore if logged in
        if (user) {
            setDoc(doc(db, "users", user.uid), { results: newResults }, { merge: true })
              .catch(e => console.error("Error saving result:", e));
        } else {
            // Save to local storage
            localStorage.setItem('kindred_results', JSON.stringify(newResults));
        }

        return newResults;
    });
    setScreen('result');
  };

  const handleQuit = () => {
    if (window.confirm(`${t.ui.quit_confirm_msg} ${t.ui.quit_confirm}`)) {
      setScreen('intro');
    }
  };


  // --- VIEWS ---

  if (screen === 'language_select') {
      // Keeping this just in case, but usually skipped
      const langs = [
        { code: 'zh-CN', label: '简体中文' },
        { code: 'zh-TW', label: '繁體中文' },
        { code: 'en', label: 'English' },
        { code: 'ja', label: '日本語' },
        { code: 'es', label: 'Español' },
        { code: 'ko', label: '한국어' }
      ];
      return (
          <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-starry"></div>
              <Globe className="w-16 h-16 mb-6 text-indigo-400 relative z-10" />
              <h1 className="text-2xl font-bold mb-8 relative z-10">Select Language</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md relative z-10">
                  {langs.map(l => (
                      <button
                        key={l.code}
                        onClick={() => {
                            setLanguage(l.code);
                            setHasSelectedLanguage(true);
                            setScreen('intro');
                        }}
                        className="glass-btn py-4 rounded-xl text-lg font-medium"
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

    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full glass-card rounded-2xl overflow-hidden flex flex-col min-h-[500px] border border-white/10 relative">
          <button
             onClick={handleQuit}
             className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors z-10"
          >
             <XCircle className="w-6 h-6" />
          </button>
          <div className="h-1 bg-white/10 w-full">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="mb-6 flex justify-between text-indigo-300 text-xs font-bold tracking-widest uppercase">
              <span>{t.ui.question_progress.replace('{current}', currentQIndex + 1).replace('{total}', questions.length)}</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-8 leading-relaxed">{question.text}</h2>
            <div className="space-y-3 mt-auto">
              {t.options.map((opt) => (
                <button
                  key={`${currentQIndex}-${opt.value}`}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${
                    selectedOption === opt.value
                      ? 'border-indigo-500 bg-indigo-500/20 text-white'
                      : 'border-white/10 hover:border-indigo-500/50 hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span className="font-medium text-sm">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CALCULATING
  if (screen === 'calculating') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
         <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
               <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
               <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
               <Sparkles className="absolute inset-0 m-auto text-indigo-400 w-8 h-8 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{t.ui.analyzing || "正在分析星象..."}</h2>
            <p className="text-slate-400">{t.ui.connecting || "连接你的灵魂图谱"}</p>
         </div>
      </div>
    );
  }

  // RESULT SCREEN
  if (screen === 'result') {
      const currentResult = results[assessmentMode][testType];
      if (!currentResult) return null;

      const isAttachment = testType === 'attachment';

      let typeData, styles;
      if (isAttachment) {
          typeData = t.types[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      } else if (testType === 'love_style') {
          typeData = t.types_love_style[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      } else {
          typeData = t.types_reconciliation[currentResult.typeKey];
          styles = getTypeStyles(currentResult.typeKey);
      }

      const Icon = styles.icon;

      return (
        <div className="min-h-screen bg-slate-900 py-8 px-4 pb-24">
          <div className="max-w-md mx-auto space-y-6">
            <div className={`glass-card rounded-2xl overflow-hidden`}>
              <div className={`p-8 pb-6 ${styles.bgColor} border-b ${styles.borderColor} text-center relative`}>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                <p className="text-slate-300 font-medium mb-2 text-xs uppercase tracking-widest relative z-10">
                   {isAttachment ? (assessmentMode === 'partner' ? t.ui.partner_type : t.ui.your_type) : "Archetype"}
                </p>
                <h1 className={`text-3xl font-bold ${styles.color} mb-4 flex items-center justify-center gap-2 relative z-10`}>
                  <Icon className="w-8 h-8" />
                  {typeData.shortName || typeData.name.split(' ')[0]}
                </h1>
                {isAttachment && (
                  <div className="inline-flex gap-4 text-[10px] font-bold text-slate-300 bg-black/20 px-4 py-2 rounded-full backdrop-blur-md relative z-10">
                    <span>{t.ui.anxiety}: {Math.round((currentResult.anxietyScore/42)*100)}%</span>
                    <span className="w-px h-3 bg-white/20 my-auto"></span>
                    <span>{t.ui.avoidance}: {Math.round((currentResult.avoidanceScore/42)*100)}%</span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-6">
                {isAttachment && <QuadrantChart anxietyScore={currentResult.anxietyScore} avoidanceScore={currentResult.avoidanceScore} t={t} />}

                <div>
                   <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Info className="w-4 h-4 text-indigo-400"/> Analysis</h3>
                   <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {typeData.detailedInfo}
                   </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
               <button onClick={() => handleStart(assessmentMode, testType)} className="w-full glass-btn py-3 rounded-xl text-white font-semibold bg-white/5 border border-white/10">
                  {t.ui.retake_test || "重新测试"}
               </button>
               <button onClick={() => setScreen('intro')} className="w-full glass-btn py-3 rounded-xl text-white font-semibold">
                  {t.ui.back || "返回"}
               </button>
            </div>
          </div>
        </div>
      );
  }

  // COMPREHENSIVE & RELATIONSHIP REPORTS
  // (Simplified for this UI update to keep it concise, can be expanded similarly with dark mode)
  if (screen === 'comprehensive_report' || screen === 'relationship_report' || screen === 'library') {
      // For now, reuse the basic structure but wrapped in dark theme
      return (
         <div className="min-h-screen bg-slate-900 p-4 pb-20 overflow-y-auto">
            <div className="max-w-md mx-auto glass-card rounded-2xl p-6 min-h-[50vh] text-slate-300">
               <button onClick={() => setScreen('intro')} className="mb-4 text-sm text-indigo-400 flex items-center gap-1">
                 &larr; {t.ui.back || "返回"}
               </button>
               <h1 className="text-2xl font-bold text-white mb-4">{t.ui.report_title || "详细报告"}</h1>

               {screen === 'library' && (
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-white">{selectedLibraryType}</h2>
                     <p>Detailed information about this style would go here, pulled from the translations file.</p>
                  </div>
               )}
               {screen === 'comprehensive_report' && (
                  <div>
                    <p className="mb-4">{t.ui.report_intro || "您的综合档案分析。"}</p>

                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                        <div className="flex justify-between mb-2">
                           <span>Attachment</span>
                           <span className="text-indigo-400">{results.self.attachment ? t.types[results.self.attachment.typeKey].name : '-'}</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Love Style</span>
                           <span className="text-pink-400">{results.self.loveStyle ? t.types_love_style[results.self.loveStyle.typeKey].name : '-'}</span>
                        </div>
                     </div>

                     {t.ui.paradox && (
                       <div className="space-y-4">
                         <h2 className="text-xl font-bold text-gold-400">{t.ui.paradox.title}</h2>
                         <p className="text-slate-400 text-sm italic mb-4">{t.ui.paradox.subtitle}</p>
                         <div className="space-y-4">
                           {t.ui.paradox.points.map((point, index) => (
                             <div key={index} className="bg-white/5 p-4 rounded-xl">
                               <h3 className="font-bold text-white mb-2">{point.title}</h3>
                               <p className="text-slate-300 text-sm">{point.text}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                     )}
                  </div>
               )}
            </div>
         </div>
      )
  }

  // --- MAIN LAYOUT (Intro) ---
  return (
      <div className="min-h-screen bg-slate-900 text-white pb-20 relative overflow-hidden font-sans">
          <div className="stars"></div> {/* CSS-based stars */}

          {activeTab === 'home' && (
             <HomeTab
               t={t}
               handleStart={handleStart}
               handleTestClick={handleTestClick}
               results={results}
               setScreen={setScreen}
               setLibraryTab={setLibraryTab}
               setSelectedLibraryType={setSelectedLibraryType}
             />
          )}
          {activeTab === 'community' && <CommunityTab t={t} />}
          {activeTab === 'ai' && <AiChatTab t={t} results={results} />}
          {activeTab === 'mine' && <MineTab results={results} t={t} user={user} />}

          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} t={t} />
      </div>
  );
}
