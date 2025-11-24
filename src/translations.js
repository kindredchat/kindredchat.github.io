
export const TRANSLATIONS = {
  'zh-CN': {
    ui: {
      title: "恋爱依恋类型测试",
      subtitle: "探索你的亲密关系模式，找到幸福的钥匙",
      intro_why: "为什么我们在爱里总是重蹈覆辙？",
      intro_theory: "基于经典依恋理论，我们帮助你解析潜意识里的<b>焦虑</b>与<b>回避</b>倾向。",
      start_btn: "测试我自己",
      start_partner_btn: "测试我的伴侣",
      library_btn: "浏览依恋类型百科",
      back: "返回",
      library_title: "依恋类型百科",
      deep_analysis: "深度解析",
      ideal_match: "理想伴侣匹配",
      bad_match: "潜在雷区",
      growth_advice: "提升建议",
      calculating: "正在解码您的内心世界...",
      calculating_sub: "整合焦虑与回避维度数据",
      your_type: "您的依恋类型",
      partner_type: "对方的依恋类型",
      anxiety: "焦虑",
      avoidance: "回避",
      share_btn: "分享我的结果",
      explore_others: "了解其他类型",
      restart: "重新测试",
      note: "注：本测试基于ECR量表简化版，结果仅供自我探索参考，不能替代专业心理咨询诊断。",
      copied: "已复制结果到剪贴板！",
      share_text: "我在依恋类型测试中测出是【{type}】(焦虑: {anxiety}%, 回避: {avoidance}%)\n快来看看你的依恋类型是什么吧！\n{url}",
      question_progress: "问题 {current} / {total}",
      match_recommend: "推荐匹配：",
      match_secure: "安全型依恋",
    },
    chart: {
      anxious_high: "高焦虑",
      anxious_low: "低焦虑",
      avoidant_high: "高回避",
      avoidant_low: "低回避",
      secure: "安全型",
      preoccupied: "焦虑型",
      dismissive: "疏离型",
      fearful: "恐惧型",
      you_are_here: "结果位置"
    },
    questions: [
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
    ],
    questions_partner: [
      { id: 1, text: "他/她经常需要确认我还爱着他/她，或者担心我会离开。", dimension: "anxiety" },
      { id: 2, text: "当我试图太过亲近时，他/她似乎会感到紧张或不自在。", dimension: "avoidance" },
      { id: 3, text: "他/她渴望亲密关系，但这种渴望似乎反而把人推得更远。", dimension: "anxiety" },
      { id: 4, text: "他/她强调独立，不喜欢依赖我，也不喜欢我依赖他/她。", dimension: "avoidance" },
      { id: 5, text: "如果我没有及时回复消息，他/她会变得非常焦虑或生气。", dimension: "anxiety" },
      { id: 6, text: "他/她很难完全敞开心扉，很少分享内心深处的感受。", dimension: "avoidance" },
      { id: 7, text: "他/她似乎觉得在这段关系中，由于投入更多而感到不平衡。", dimension: "anxiety" },
      { id: 8, text: "如果我表现得太粘人或要求太多亲密感，他/她会试图逃避。", dimension: "avoidance" },
      { id: 9, text: "他/她需要我不断的确认和安抚才能感到安心。", dimension: "anxiety" },
      { id: 10, text: "在我们的关系中，他/她倾向于保持一定的距离感以保护自己。", dimension: "avoidance" },
      { id: 11, text: "他/她似乎害怕如果展示真实的自己，我就不会喜欢他/她了。", dimension: "anxiety" },
      { id: 12, text: "遇到问题时，他/她习惯自己解决，很少向我寻求安慰。", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "完全不符合" },
      { value: 2, label: "比较不符合" },
      { value: 3, label: "有点不符合" },
      { value: 4, label: "中立" },
      { value: 5, label: "有点符合" },
      { value: 6, label: "比较符合" },
      { value: 7, label: "完全符合" }
    ],
    types: {
      SECURE: {
        name: "安全型依恋 (Secure)",
        shortName: "安全型",
        desc: "在亲密关系中感到舒适和自信。不担心被抛弃，也乐于依赖他人或被他人依赖。能够有效地沟通需求，在冲突中保持情绪稳定。",
        detailedInfo: "安全型依恋者通常拥有温暖、充满回应的童年经历。成年后，拥有高自尊，也信任他人。不玩心理游戏，能够直接表达爱意和需求。既享受亲密，也能享受独处。",
        idealMatch: "安全型固然是“百搭”的理想伴侣，能带来稳定关系。但安全型之间也可能因为过于平淡而缺乏激情。关键在于双方是否愿意沟通和共同成长。",
        badMatch: "虽然能和任何人相处，但严重未觉察、不愿改变的非安全型伴侣，可能会带来巨大的情感消耗。",
        growth: [
            "继续保持开放和诚实，但也要保护好自己的能量。",
            "成为伴侣的“安全基地”，在他们情绪不稳定时提供支持，但不必承担拯救者的角色。",
            "学会设定界限，不要为了包容他人而过度牺牲自己的需求。"
        ]
      },
      ANXIOUS: {
        name: "焦虑型依恋 (Anxious)",
        shortName: "焦虑型",
        desc: "渴望高度的亲密感，但常担心伴侣不爱自己或会离开。对他人的情绪变化非常敏感，容易在关系中感到不安和情绪化。",
        detailedInfo: "焦虑型依恋者通常因为照顾者反应不一致而形成。成年后，倾向于通过“抗议行为”（如发脾气、冷战）来获取关注。自我价值感往往过度依赖伴侣的认可。",
        idealMatch: "安全型依恋者能给予最好的安抚。但其实，如果对方是愿意沟通、能够理解不安的“自我觉察型”焦虑者，也能因为深刻的共情而建立紧密的联结。关键是避免“追逃模式”。",
        badMatch: "完全回避沟通、冷暴力的伴侣（通常是未觉察的回避型）。追得越紧，跑得越远，这会让关系陷入痛苦的循环。",
        growth: [
            "建立自我价值感：列出优点，不依赖外界确认。",
            "学会“暂停”：在感到焦虑想发信息轰炸时，放下手机 30 分钟。",
            "直接沟通需求（“我需要一个拥抱”），而不是通过情绪化的行为（发脾气）让对方猜。",
            "练习独处，发现一个人时的快乐。"
        ]
      },
      DISMISSIVE: {
        name: "疏离-回避型依恋 (Dismissive)",
        shortName: "疏离型",
        desc: "强调独立和自给自足，往往将亲密关系视为对自由的威胁。会压抑自己的情感需求，在伴侣试图靠近时会下意识地后退。",
        detailedInfo: "疏离-回避型依恋者可能因为童年时期情感需求被忽视，学会了“靠自己”。通常压抑情绪，显得冷漠或理性。实际上也有亲密需求，但防御机制让他们否认这一点。",
        idealMatch: "能够尊重空间的安定型依恋者。此外，另一个独立的疏离型伴侣，只要双方达成共识，也能建立一种“相敬如宾”的稳定关系，虽然可能情感浓度不高，但彼此都感到自在。",
        badMatch: "过度依赖、情绪化严重且不愿独立的伴侣（通常是严重的焦虑型）。粘人会让人感到窒息，触发逃跑本能。",
        growth: [
            "重新定义独立：真正的强大是能够展示脆弱，而不仅仅是推开他人。",
            "练习表达感受：从简单的“我今天有点累”开始分享，而不是直接沉默。",
            "当想逃离时，试着留下来，告诉伴侣“我需要一点空间”，而不是直接消失。",
            "尝试依靠他人完成一些小事。"
        ]
      },
      FEARFUL: {
        name: "恐惧-回避型依恋 (Fearful)",
        shortName: "恐惧型",
        desc: "处于矛盾之中：既渴望亲密，又极度恐惧受伤。可能表现出“忽冷忽热”的特质，想靠近却又在靠近时感到恐慌。",
        detailedInfo: "恐惧型依恋者（也称混乱型）通常经历过创伤或极不稳定的照顾。想爱却不敢爱。在关系中，可能在极其粘人和极其冷漠之间摇摆。",
        idealMatch: "安全型依恋者是疗愈的最佳助攻，因为他们极其稳定。但如果有伴侣（无论何种类型）愿意展现极大的耐心，并接受心理咨询的辅助，关系依然可以很美好。这并非绝路，而是成长的起点。",
        badMatch: "情绪极不稳定、忽冷忽热的伴侣。这种不确定性会加剧内在混乱，让关系充满戏剧性和痛苦。",
        growth: [
            "寻求专业帮助：疗愈过去的创伤是关键，不要独自承担所有。",
            "识别触发点：记录下感到恐慌的时刻，区分“过去的创伤”和“现在的现实”。",
            "练习“自我安抚”：当恐惧袭来，告诉自己“我现在是安全的”。",
            "建立清晰的界限，这会让人感到更有掌控感。"
        ]
      }
    }
  },
  'zh-TW': {
    ui: {
      title: "戀愛依戀類型測試",
      subtitle: "探索你的親密關係模式，找到幸福的鑰匙",
      intro_why: "為什麼我們在愛裡總是重蹈覆轍？",
      intro_theory: "基於經典依戀理論，我們幫助你解析潛意識裡的<b>焦慮</b>與<b>迴避</b>傾向。",
      start_btn: "測試我自己",
      start_partner_btn: "測試我的伴侶",
      library_btn: "瀏覽依戀類型百科",
      back: "返回",
      library_title: "依戀類型百科",
      deep_analysis: "深度解析",
      ideal_match: "理想伴侶匹配",
      bad_match: "潛在雷區",
      growth_advice: "提升建議",
      calculating: "正在解碼您的內心世界...",
      calculating_sub: "整合焦慮與迴避維度數據",
      your_type: "您的依戀類型",
      partner_type: "對方的依戀類型",
      anxiety: "焦慮",
      avoidance: "迴避",
      share_btn: "分享我的結果",
      explore_others: "了解其他類型",
      restart: "重新測試",
      note: "註：本測試基於ECR量表簡化版，結果僅供自我探索參考，不能替代專業心理諮詢診斷。",
      copied: "已複製結果到剪貼板！",
      share_text: "我在依戀類型測試中測出是【{type}】(焦慮: {anxiety}%, 迴避: {avoidance}%)\n快來看看你的依戀類型是什麼吧！\n{url}",
      question_progress: "問題 {current} / {total}",
      match_recommend: "推薦匹配：",
      match_secure: "安全型依戀",
    },
    chart: {
      anxious_high: "高焦慮",
      anxious_low: "低焦慮",
      avoidant_high: "高迴避",
      avoidant_low: "低迴避",
      secure: "安全型",
      preoccupied: "焦慮型",
      dismissive: "疏離型",
      fearful: "恐懼型",
      you_are_here: "結果位置"
    },
    questions: [
      { id: 1, text: "我經常擔心伴侶會離開我，或者不再愛我。", dimension: "anxiety" },
      { id: 2, text: "當別人試圖與我太過親近時，我會感到緊張或不自在。", dimension: "avoidance" },
      { id: 3, text: "我很渴望親密關係，但我感覺這似乎會把人嚇跑。", dimension: "anxiety" },
      { id: 4, text: "我習慣保持獨立，不喜歡完全依賴別人或讓別人依賴我。", dimension: "avoidance" },
      { id: 5, text: "一旦沒有收到伴侶及時回覆，我就會開始胡思亂想。", dimension: "anxiety" },
      { id: 6, text: "我這個人很難完全向伴侶敞開心扉，分享內心深處的感受。", dimension: "avoidance" },
      { id: 7, text: "我覺得我對伴侶的感情投入，往往比對方對我的投入要多。", dimension: "anxiety" },
      { id: 8, text: "當伴侶表現得太黏人或要求太多親密感時，我會想逃離。", dimension: "avoidance" },
      { id: 9, text: "我非常需要伴侶不斷的確認和安撫才能感到安心。", dimension: "anxiety" },
      { id: 10, text: "在親密關係中，我傾向於保持一定的距離感以保護自己。", dimension: "avoidance" },
      { id: 11, text: "如果我展示真實的自己，我害怕對方會不喜歡我。", dimension: "anxiety" },
      { id: 12, text: "我不僅依靠自己解決問題，也不習慣向伴侶尋求安慰。", dimension: "avoidance" }
    ],
    questions_partner: [
      { id: 1, text: "他/她經常需要確認我還愛著他/她，或者擔心我會離開。", dimension: "anxiety" },
      { id: 2, text: "當我試圖太過親近時，他/她似乎會感到緊張或不自在。", dimension: "avoidance" },
      { id: 3, text: "他/她渴望親密關係，但這種渴望似乎反而把人推得更遠。", dimension: "anxiety" },
      { id: 4, text: "他/她強調獨立，不喜歡依賴我，也不喜歡我依賴他/她。", dimension: "avoidance" },
      { id: 5, text: "如果我沒有及時回覆訊息，他/她會變得非常焦慮或生氣。", dimension: "anxiety" },
      { id: 6, text: "他/她很難完全敞開心扉，很少分享內心深處的感受。", dimension: "avoidance" },
      { id: 7, text: "他/她似乎覺得在這段關係中，由於投入更多而感到不平衡。", dimension: "anxiety" },
      { id: 8, text: "如果我表現得太黏人或要求太多親密感，他/她會試圖逃避。", dimension: "avoidance" },
      { id: 9, text: "他/她需要我不斷的確認和安撫才能感到安心。", dimension: "anxiety" },
      { id: 10, text: "在我們的關係中，他/她傾向於保持一定的距離感以保護自己。", dimension: "avoidance" },
      { id: 11, text: "他/她似乎害怕如果展示真實的自己，我就不會喜歡他/她了。", dimension: "anxiety" },
      { id: 12, text: "遇到問題時，他/她習慣自己解決，很少向我尋求安慰。", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "完全不符合" },
      { value: 2, label: "比較不符合" },
      { value: 3, label: "有點不符合" },
      { value: 4, label: "中立" },
      { value: 5, label: "有點符合" },
      { value: 6, label: "比較符合" },
      { value: 7, label: "完全符合" }
    ],
    types: {
      SECURE: {
        name: "安全型依戀 (Secure)",
        shortName: "安全型",
        desc: "在親密關係中感到舒適和自信。不擔心被抛棄，也樂於依賴他人或被他人依賴。能夠有效地溝通需求，在衝突中保持情緒穩定。",
        detailedInfo: "安全型依戀者通常擁有溫暖、充滿回應的童年經歷。成年後，擁有高自尊，也信任他人。不玩心理遊戲，能夠直接表達愛意和需求。既享受親密，也能享受獨處。",
        idealMatch: "安全型固然是「百搭」的理想伴侶，能帶來穩定關係。但安全型之間也可能因為過於平淡而缺乏激情。關鍵在於雙方是否願意溝通和共同成長。",
        badMatch: "雖然能和任何人相處，但嚴重未覺察、不願改變的非安全型伴侶，可能會帶來巨大的情感消耗。",
        growth: [
            "繼續保持開放和誠實，但也要保護好自己的能量。",
            "成為伴侣的「安全基地」，在他們情緒不穩定時提供支持，但不必承擔拯救者的角色。",
            "學會設定界限，不要為了包容他人而過度犧牲自己的需求。"
        ]
      },
      ANXIOUS: {
        name: "焦慮型依戀 (Anxious)",
        shortName: "焦慮型",
        desc: "渴望高度的親密感，但常擔心伴侶不愛自己或會離開。對他人的情緒變化非常敏感，容易在關係中感到不安和情緒化。",
        detailedInfo: "焦慮型依戀者通常因為照顧者反應不一致而形成。成年後，傾向於通過「抗議行為」（如發脾氣、冷戰）來獲取關注。自我價值感往往過度依賴伴侶的認可。",
        idealMatch: "安全型依戀者能給予最好的安撫。但其實，如果對方是願意溝通、能夠理解不安的「自我覺察型」焦慮者，也能因為深刻的共情而建立緊密的連結。關鍵是避免「追逃模式」。",
        badMatch: "完全迴避溝通、冷暴力的伴侶（通常是未覺察的迴避型）。追得越緊，跑得越遠，這會讓關係陷入痛苦的循環。",
        growth: [
            "建立自我價值感：列出優點，不依賴外界確認。",
            "學會「暫停」：在感到焦慮想發訊息轟炸時，放下手機 30 分鐘。",
            "直接溝通需求（「我需要一個擁抱」），而不是通過情緒化的行為（發脾氣）讓對方猜。",
            "練習獨處，發現一個人時的快樂。"
        ]
      },
      DISMISSIVE: {
        name: "疏離-迴避型依戀 (Dismissive)",
        shortName: "疏離型",
        desc: "強調獨立和自給自足，往往將親密關係視為對自由的威脅。會壓抑自己的情感需求，在伴侶試圖靠近時會下意識地後退。",
        detailedInfo: "疏離-迴避型依戀者可能因為童年時期情感需求被忽視，學會了「靠自己」。通常壓抑情緒，顯得冷漠或理性。實際上也有親密需求，但防禦機制讓他們否認這一點。",
        idealMatch: "能夠尊重空間的安定型依戀者。此外，另一個獨立的疏離型伴侶，只要雙方達成共識，也能建立一種「相敬如賓」的穩定關係，雖然可能情感濃度不高，但彼此都感到自在。",
        badMatch: "過度依賴、情緒化嚴重且不願獨立的伴侶（通常是嚴重的焦慮型）。黏人會讓人感到窒息，觸發逃跑本能。",
        growth: [
            "重新定義獨立：真正的強大是能夠展示脆弱，而不僅僅是推開他人。",
            "練習表達感受：從簡單的「我今天有點累」開始分享，而不是直接沉默。",
            "當想逃離時，試著留下來，告訴伴侶「我需要一點空間」，而不是直接消失。",
            "嘗試依靠他人完成一些小事。"
        ]
      },
      FEARFUL: {
        name: "恐懼-迴避型依戀 (Fearful)",
        shortName: "恐懼型",
        desc: "處於矛盾之中：既渴望親密，又極度恐懼受傷。可能表現出「忽冷忽熱」的特質，想靠近卻又在靠近時感到恐慌。",
        detailedInfo: "恐懼型依戀者（也稱混亂型）通常經歷過創傷或極不穩定的照顧。想愛卻不敢愛。在關係中，可能在極其黏人和極其冷漠之間搖擺。",
        idealMatch: "安全型依戀者是療癒的最佳助攻，因為他們極其穩定。但如果有伴侶（無論何種類型）願意展現極大的耐心，並接受心理諮詢的輔助，關係依然可以很美好。這並非絕路，而是成長的起點。",
        badMatch: "情緒極不穩定、忽冷忽熱的伴侶。這種不確定性會加劇內在混亂，讓關係充滿戲劇性和痛苦。",
        growth: [
            "尋求專業幫助：療癒過去的創傷是關鍵，不要獨自承擔所有。",
            "識別觸發點：記錄下讓你感到恐慌的時刻，區分「過去的創傷」和「現在的現實」。",
            "練習「自我安撫」：當恐懼襲來，告訴自己「我現在是安全的」。",
            "建立清晰的界限，這會讓人感到更有掌控感。"
        ]
      }
    }
  },
  'en': {
    ui: {
      title: "Attachment Style Test",
      subtitle: "Discover your relationship patterns and unlock the key to happiness",
      intro_why: "Why do we repeat the same patterns in love?",
      intro_theory: "Based on classic attachment theory, we help you analyze your subconscious <b>anxiety</b> and <b>avoidance</b> tendencies.",
      start_btn: "Test Myself",
      start_partner_btn: "Test My Partner",
      library_btn: "Attachment Theory Library",
      back: "Back",
      library_title: "Attachment Encyclopedia",
      deep_analysis: "Deep Analysis",
      ideal_match: "Ideal Matches",
      bad_match: "Potential Pitfalls",
      growth_advice: "Growth Advice",
      calculating: "Decoding your inner world...",
      calculating_sub: "Integrating anxiety and avoidance metrics",
      your_type: "Your Attachment Style",
      partner_type: "Their Attachment Style",
      anxiety: "Anxiety",
      avoidance: "Avoidance",
      share_btn: "Share My Results",
      explore_others: "Explore Other Types",
      restart: "Retest",
      note: "Note: This test is based on a simplified ECR scale for self-exploration and is not a substitute for professional diagnosis.",
      copied: "Results copied to clipboard!",
      share_text: "I got 【{type}】 on the Attachment Style Test (Anxiety: {anxiety}%, Avoidance: {avoidance}%)\nFind out your style here!\n{url}",
      question_progress: "Question {current} / {total}",
      match_recommend: "Recommended Match:",
      match_secure: "Secure Attachment",
    },
    chart: {
      anxious_high: "High Anxiety",
      anxious_low: "Low Anxiety",
      avoidant_high: "High Avoidance",
      avoidant_low: "Low Avoidance",
      secure: "Secure",
      preoccupied: "Preoccupied",
      dismissive: "Dismissive",
      fearful: "Fearful",
      you_are_here: "Result"
    },
    questions: [
      { id: 1, text: "I often worry that my partner will leave me or stop loving me.", dimension: "anxiety" },
      { id: 2, text: "I feel nervous or uncomfortable when others try to get too close to me.", dimension: "avoidance" },
      { id: 3, text: "I crave intimacy, but I feel like I scare people away.", dimension: "anxiety" },
      { id: 4, text: "I prefer to be independent and rely on myself rather than others.", dimension: "avoidance" },
      { id: 5, text: "I start to overthink if I don't get a timely reply from my partner.", dimension: "anxiety" },
      { id: 6, text: "I find it hard to open up completely and share my deepest feelings.", dimension: "avoidance" },
      { id: 7, text: "I feel I put more into relationships than my partners do.", dimension: "anxiety" },
      { id: 8, text: "I want to escape when a partner is too clingy or demands too much intimacy.", dimension: "avoidance" },
      { id: 9, text: "I need constant reassurance to feel secure in a relationship.", dimension: "anxiety" },
      { id: 10, text: "I tend to keep some distance in relationships to protect myself.", dimension: "avoidance" },
      { id: 11, text: "I fear that if I show my true self, my partner won't like me.", dimension: "anxiety" },
      { id: 12, text: "I rely on myself to solve problems and don't usually seek comfort from partners.", dimension: "avoidance" }
    ],
    questions_partner: [
      { id: 1, text: "They frequently need reassurance that I still love them or won't leave.", dimension: "anxiety" },
      { id: 2, text: "They seem nervous or uncomfortable when I try to get too close.", dimension: "avoidance" },
      { id: 3, text: "They crave intimacy, but their behavior seems to push people away.", dimension: "anxiety" },
      { id: 4, text: "They emphasize their independence and dislike relying on me or having me rely on them.", dimension: "avoidance" },
      { id: 5, text: "They become very anxious or upset if I don't reply to messages immediately.", dimension: "anxiety" },
      { id: 6, text: "They find it hard to open up completely and rarely share deep feelings.", dimension: "avoidance" },
      { id: 7, text: "They seem to feel they invest more in the relationship than I do.", dimension: "anxiety" },
      { id: 8, text: "They try to escape or pull away if I am too clingy or demand too much intimacy.", dimension: "avoidance" },
      { id: 9, text: "They need constant reassurance from me to feel secure.", dimension: "anxiety" },
      { id: 10, text: "They tend to keep a certain distance in the relationship to protect themselves.", dimension: "avoidance" },
      { id: 11, text: "They seem afraid that if they show their true self, I won't like them.", dimension: "anxiety" },
      { id: 12, text: "They solve problems on their own and rarely seek comfort from me.", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Somewhat Disagree" },
      { value: 4, label: "Neutral" },
      { value: 5, label: "Somewhat Agree" },
      { value: 6, label: "Agree" },
      { value: 7, label: "Strongly Agree" }
    ],
    types: {
      SECURE: {
        name: "Secure Attachment",
        shortName: "Secure",
        desc: "Feels comfortable and confident in intimacy. Doesn't fear abandonment and is happy to depend on others. Communicates needs effectively and stays emotionally stable during conflict.",
        detailedInfo: "Secure individuals usually had responsive caregivers. As adults, they have high self-esteem and trust others. They don't play mind games and communicate needs directly. They enjoy both intimacy and solitude.",
        idealMatch: "Secure is generally a great match for anyone, providing stability. However, two secure people might sometimes lack 'drama' or intensity. Connection requires effort.",
        badMatch: "Severe, unaware insecure types who are unwilling to change may drain them emotionally.",
        growth: [
            "Maintain openness and honesty but protect energy.",
            "Be a 'secure base' for partners, but don't become their savior.",
            "Set boundaries; don't sacrifice needs just to accommodate others."
        ]
      },
      ANXIOUS: {
        name: "Anxious/Preoccupied",
        shortName: "Anxious",
        desc: "Craves intimacy but fears abandonment. Is sensitive to partners' moods and can become emotional.",
        detailedInfo: "Often formed from inconsistent caregiving. Adults may use 'protest behavior' to get attention. Self-worth often relies on partner validation.",
        idealMatch: "Secure partners offer the best reassurance. However, a self-aware anxious partner who communicates well can also form a deep, empathetic bond. Avoid the 'chase'.",
        badMatch: "Avoidant partners who refuse to communicate. This triggers the 'Anxious-Avoidant trap'.",
        growth: [
            "Build self-worth independent of external validation.",
            "Practice 'pausing': Wait 30 mins before sending that text when anxious.",
            "Communicate needs directly instead of acting out.",
            "Enjoy solitude and find happiness in being alone."
        ]
      },
      DISMISSIVE: {
        name: "Dismissive-Avoidant",
        shortName: "Dismissive",
        desc: "Values independence and sees intimacy as a threat to freedom. Suppresses emotional needs.",
        detailedInfo: "Often learned to rely only on self due to neglected emotional needs in childhood. May appear cold but actually has intimacy needs that are suppressed.",
        idealMatch: "Secure partners who respect space. Another independent Dismissive partner can also work if both agree on a low-intensity, stable dynamic.",
        badMatch: "Highly anxious, dependent partners who demand constant closeness.",
        growth: [
            "Redefine independence: True strength includes showing vulnerability.",
            "Practice expressing feelings: Start with small things like 'I'm tired'.",
            "When wanting to run, say 'I need space' instead of disappearing.",
            "Try relying on others for small tasks."
        ]
      },
      FEARFUL: {
        name: "Fearful-Avoidant",
        shortName: "Fearful",
        desc: "Craves intimacy but fears getting hurt. May oscillate between being clingy and distant.",
        detailedInfo: "Also known as Disorganized. Often stems from trauma. Wants love but is terrified of it, leading to hot-and-cold behavior.",
        idealMatch: "Secure partners are best for healing due to their stability. However, any partner with patience and professional support can make it work.",
        badMatch: "Unstable partners who fuel the chaos and uncertainty.",
        growth: [
            "Seek professional help to heal trauma.",
            "Identify triggers: Distinguish past trauma from present reality.",
            "Practice self-soothing: Tell yourself 'I am safe'.",
            "Establish clear boundaries for a sense of control."
        ]
      }
    }
  },
  'ja': {
    ui: {
      title: "愛着スタイル診断",
      subtitle: "あなたの恋愛パターンを知り、幸せへの鍵を見つけよう",
      intro_why: "なぜ恋愛で同じ失敗を繰り返してしまうのか？",
      intro_theory: "古典的な愛着理論に基づき、潜在意識にある<b>不安</b>と<b>回避</b>の傾向を分析します。",
      start_btn: "自分を診断する",
      start_partner_btn: "パートナーを診断する",
      library_btn: "愛着スタイル図鑑",
      back: "戻る",
      library_title: "愛着スタイル百科",
      deep_analysis: "詳細分析",
      ideal_match: "理想的なパートナー",
      bad_match: "注意すべき相手",
      growth_advice: "成長へのアドバイス",
      calculating: "あなたの内面を分析中...",
      calculating_sub: "不安と回避の指標を統合しています",
      your_type: "あなたの愛着スタイル",
      partner_type: "相手の愛着スタイル",
      anxiety: "不安",
      avoidance: "回避",
      share_btn: "結果をシェア",
      explore_others: "他のタイプを見る",
      restart: "もう一度診断する",
      note: "注：この診断はECR尺度を簡略化したものであり、自己理解のための参考です。専門的な診断の代わりにはなりません。",
      copied: "結果をクリップボードにコピーしました！",
      share_text: "愛着スタイル診断で私のタイプは【{type}】でした (不安: {anxiety}%, 回避: {avoidance}%)\nあなたの愛着スタイルも診断してみましょう！\n{url}",
      question_progress: "質問 {current} / {total}",
      match_recommend: "推奨マッチ：",
      match_secure: "安定型",
    },
    chart: {
      anxious_high: "不安 高",
      anxious_low: "不安 低",
      avoidant_high: "回避 高",
      avoidant_low: "回避 低",
      secure: "安定型",
      preoccupied: "不安型",
      dismissive: "愛着軽視型",
      fearful: "恐れ・回避型",
      you_are_here: "結果の位置"
    },
    questions: [
      { id: 1, text: "パートナーに捨てられる、あるいは愛されなくなるのではないかとよく心配する。", dimension: "anxiety" },
      { id: 2, text: "他人があまりに親しくなろうとすると、緊張したり不快に感じたりする。", dimension: "avoidance" },
      { id: 3, text: "親密な関係を強く望んでいるが、相手を怖がらせてしまう気がする。", dimension: "anxiety" },
      { id: 4, text: "自立を好み、他人に頼ったり頼られたりするのが好きではない。", dimension: "avoidance" },
      { id: 5, text: "パートナーからすぐに返信がないと、悪い方向に考えすぎてしまう。", dimension: "anxiety" },
      { id: 6, text: "パートナーに心を開き、深い感情を共有するのが難しい。", dimension: "avoidance" },
      { id: 7, text: "自分の方が相手よりも関係に深くコミットしていると感じることが多い。", dimension: "anxiety" },
      { id: 8, text: "パートナーが依存してきたり、過度な親密さを求めてくると逃げ出したくなる。", dimension: "avoidance" },
      { id: 9, text: "安心するためには、パートナーからの絶え間ない確認や愛情表現が必要だ。", dimension: "anxiety" },
      { id: 10, text: "自分を守るために、親密な関係でも一定の距離を置く傾向がある。", dimension: "avoidance" },
      { id: 11, text: "本当の自分を見せたら、パートナーに嫌われるのではないかと怖い。", dimension: "anxiety" },
      { id: 12, text: "問題は自分で解決し、パートナーに慰めを求めることはあまりない。", dimension: "avoidance" }
    ],
    questions_partner: [
      { id: 1, text: "その人は、私がまだ愛しているか、または私が去ってしまうのではないかと頻繁に確認を求める。", dimension: "anxiety" },
      { id: 2, text: "私が親しくなろうとすると、その人は緊張したり不快に感じているように見える。", dimension: "avoidance" },
      { id: 3, text: "その人は親密さを望んでいるが、その行動がかえって人を遠ざけているように見える。", dimension: "anxiety" },
      { id: 4, text: "その人は自立を強調し、私に頼ることや、私がその人に頼ることを好まない。", dimension: "avoidance" },
      { id: 5, text: "私がすぐに返信しないと、その人は非常に不安になったり怒ったりする。", dimension: "anxiety" },
      { id: 6, text: "その人は完全に心を開くことが難しく、深い感情を共有することはめったにない。", dimension: "avoidance" },
      { id: 7, text: "その人は、私よりも自分の方が関係に多くを捧げていると感じているようだ。", dimension: "anxiety" },
      { id: 8, text: "私が過度に依存したり親密さを求めすぎると、その人は逃げたり距離を置こうとする。", dimension: "avoidance" },
      { id: 9, text: "その人が安心するためには、私からの絶え間ない確認が必要だ。", dimension: "anxiety" },
      { id: 10, text: "私たちの関係において、その人は自分を守るために一定の距離を置く傾向がある。", dimension: "avoidance" },
      { id: 11, text: "その人は、本当の自分を見せたら私が嫌いになるのではないかと恐れているようだ。", dimension: "anxiety" },
      { id: 12, text: "問題が起きた時、その人は自分で解決しようとし、私に慰めを求めることはめったにない。", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "全く当てはまらない" },
      { value: 2, label: "当てはまらない" },
      { value: 3, label: "あまり当てはまらない" },
      { value: 4, label: "どちらとも言えない" },
      { value: 5, label: "やや当てはまる" },
      { value: 6, label: "当てはまる" },
      { value: 7, label: "非常に当てはまる" }
    ],
    types: {
      SECURE: {
        name: "安定型 (Secure)",
        shortName: "安定型",
        desc: "親密な関係において快適で自信を持っています。見捨てられる不安がなく、人を頼ることも頼られることも厭いません。ニーズを効果的に伝え、葛藤の中でも感情的に安定しています。",
        detailedInfo: "安定型は通常、温かく応答的な幼少期を過ごしています。自尊心が高く、他者を信頼できます。駆け引きをせず、愛情やニーズを率直に伝えます。親密さと孤独の両方を楽しむことができます。",
        idealMatch: "安定型は誰にとっても理想的なパートナーであり、安定をもたらします。ただし、安定型同士は刺激に欠けると感じることもあるため、関係を深める努力は必要です。",
        badMatch: "変わる気のない、重度の不安定な愛着スタイルを持つパートナーは、感情を消耗させる可能性があります。",
        growth: [
            "開放性と誠実さを保ちつつ、自分のエネルギーも守りましょう。",
            "パートナーの「安全基地」になりつつも、救世主にはならないように。",
            "境界線を設定し、他人を受け入れるために自分のニーズを犠牲にしないこと。"
        ]
      },
      ANXIOUS: {
        name: "不安型 (Anxious/Preoccupied)",
        shortName: "不安型",
        desc: "強い親密さを求めますが、愛されていない、捨てられると不安になりがちです。相手の感情に敏感で、感情的になりやすいです。",
        detailedInfo: "養育者の一貫性のない対応によって形成されることが多いです。大人の場合、気を引くために「抗議行動」（癇癪や無視など）をとることがあります。自尊心がパートナーの承認に依存する傾向があります。",
        idealMatch: "安定型のパートナーが最高の安心感を与えてくれます。また、コミュニケーションが取れる自己認識の高い不安型パートナーとも、深い共感で結ばれることができます。「追う・逃げる」の悪循環は避けましょう。",
        badMatch: "話し合いを避ける回避型のパートナー。あなたが追えば追うほど相手は逃げ、「追跡と逃走」の悪循環に陥ります。",
        growth: [
            "他者からの承認に依存せず、自己肯定感を高めましょう。",
            "「一時停止」を学ぶ：不安で連絡したくなった時は30分待ちましょう。",
            "感情的に振る舞うのではなく、「ハグしてほしい」などニーズを直接伝えましょう。",
            "一人の時間を楽しみ、孤独の中にある幸せを見つけましょう。"
        ]
      },
      DISMISSIVE: {
        name: "愛着軽視型 (Dismissive-Avoidant)",
        shortName: "回避型",
        desc: "自立を重視し、親密さを自由への脅威と見なします。感情的なニーズを抑圧します。",
        detailedInfo: "幼少期に感情的ニーズを無視され、「自分しか頼れない」と学んだ結果であることが多いです。冷淡に見えますが、実際には抑圧された親密さへの欲求を持っています。",
        idealMatch: "スペースを尊重してくれる安定型。また、互いに合意があれば、別の自立した回避型とも「程よい距離感」の安定した関係を築けます。",
        badMatch: "過度に依存し、感情的なパートナー（重度の不安型）。彼らの要求は窒息感を与え、逃走本能を刺激します。",
        growth: [
            "自立を再定義する：本当の強さは、弱さを見せられることです。",
            "感情表現の練習：「今日は疲れた」といった些細なことから共有しましょう。",
            "逃げたい時は、消えるのではなく「一人の時間が欲しい」と伝えましょう。",
            "小さなことで他人に頼ってみましょう。"
        ]
      },
      FEARFUL: {
        name: "恐れ・回避型 (Fearful-Avoidant)",
        shortName: "恐れ型",
        desc: "親密さを求めながらも、傷つくことを極端に恐れる矛盾の中にいます。極端な依存と拒絶の間で揺れ動くことがあります。",
        detailedInfo: "未解決のトラウマや不安定な養育環境に由来することが多いです。愛したいのに愛するのが怖い状態です。ホットとコールドな態度を繰り返します。",
        idealMatch: "非常に安定している安定型が癒やしに最適です。しかし、忍耐強く、心理的なサポートを受け入れるパートナーであれば、誰とでも良い関係を築ける可能性はあります。",
        badMatch: "情緒不安定で、態度がコロコロ変わるパートナー。不確実性が混乱を悪化させます。",
        growth: [
            "専門家の助けを求める：過去のトラウマを癒やすことが鍵です。",
            "トリガーを知る：パニックになる瞬間を記録し、過去と現実を区別しましょう。",
            "自己鎮静：恐怖が襲ってきたら「私は今安全だ」と言い聞かせましょう。",
            "明確な境界線を設定し、コントロール感覚を取り戻しましょう。"
        ]
      }
    }
  },
  'es': {
    ui: {
      title: "Test de Estilo de Apego",
      subtitle: "Descubre tus patrones de relación y encuentra la clave de la felicidad",
      intro_why: "¿Por qué repetimos los mismos patrones en el amor?",
      intro_theory: "Basado en la teoría clásica del apego, analizamos tus tendencias subconscientes de <b>ansiedad</b> y <b>evitación</b>.",
      start_btn: "Evaluarme a mí mismo",
      start_partner_btn: "Evaluar a mi pareja",
      library_btn: "Enciclopedia del Apego",
      back: "Volver",
      library_title: "Enciclopedia del Apego",
      deep_analysis: "Análisis Profundo",
      ideal_match: "Pareja Ideal",
      bad_match: "Posibles Riesgos",
      growth_advice: "Consejos de Crecimiento",
      calculating: "Decodificando tu mundo interior...",
      calculating_sub: "Integrando métricas de ansiedad y evitación",
      your_type: "Tu Estilo de Apego",
      partner_type: "Su Estilo de Apego",
      anxiety: "Ansiedad",
      avoidance: "Evitación",
      share_btn: "Compartir Resultados",
      explore_others: "Explorar Otros Tipos",
      restart: "Repetir Test",
      note: "Nota: Este test se basa en una escala ECR simplificada para la autoexploración y no sustituye un diagnóstico profesional.",
      copied: "¡Resultados copiados al portapapeles!",
      share_text: "Obtuve 【{type}】 en el Test de Estilo de Apego (Ansiedad: {anxiety}%, Evitación: {avoidance}%)\n¡Descubre tu estilo aquí!\n{url}",
      question_progress: "Pregunta {current} / {total}",
      match_recommend: "Pareja recomendada:",
      match_secure: "Apego Seguro",
    },
    chart: {
      anxious_high: "Ansiedad Alta",
      anxious_low: "Ansiedad Baja",
      avoidant_high: "Evitación Alta",
      avoidant_low: "Evitación Baja",
      secure: "Seguro",
      preoccupied: "Ansioso",
      dismissive: "Evitativo",
      fearful: "Temeroso",
      you_are_here: "Resultado"
    },
    questions: [
      { id: 1, text: "A menudo me preocupa que mi pareja me deje o deje de amarme.", dimension: "anxiety" },
      { id: 2, text: "Me siento nervioso o incómodo cuando otros intentan acercarse demasiado a mí.", dimension: "avoidance" },
      { id: 3, text: "Deseo intimidad, pero siento que asusto a las personas.", dimension: "anxiety" },
      { id: 4, text: "Prefiero ser independiente y confiar en mí mismo antes que en los demás.", dimension: "avoidance" },
      { id: 5, text: "Empiezo a pensar demasiado si no recibo una respuesta oportuna de mi pareja.", dimension: "anxiety" },
      { id: 6, text: "Me resulta difícil abrirme completamente y compartir mis sentimientos más profundos.", dimension: "avoidance" },
      { id: 7, text: "Siento que invierto más en las relaciones que mis parejas.", dimension: "anxiety" },
      { id: 8, text: "Quiero escapar cuando una pareja es demasiado pegajosa o exige demasiada intimidad.", dimension: "avoidance" },
      { id: 9, text: "Necesito tranquilidad constante para sentirme seguro en una relación.", dimension: "anxiety" },
      { id: 10, text: "Tiendo a mantener cierta distancia en las relaciones para protegerme.", dimension: "avoidance" },
      { id: 11, text: "Temo que si muestro mi verdadero yo, no le gustaré a mi pareja.", dimension: "anxiety" },
      { id: 12, text: "Confío en mí mismo para resolver problemas y no suelo buscar consuelo en mi pareja.", dimension: "avoidance" }
    ],
    questions_partner: [
      { id: 1, text: "Con frecuencia necesita que le asegure que todavía le amo o que no le dejaré.", dimension: "anxiety" },
      { id: 2, text: "Parece nervioso o incómodo cuando intento acercarme demasiado.", dimension: "avoidance" },
      { id: 3, text: "Desea intimidad, pero su comportamiento parece alejar a las personas.", dimension: "anxiety" },
      { id: 4, text: "Enfatiza su independencia y no le gusta depender de mí ni que yo dependa de él/ella.", dimension: "avoidance" },
      { id: 5, text: "Se pone muy ansioso o molesto si no respondo a los mensajes de inmediato.", dimension: "anxiety" },
      { id: 6, text: "Le resulta difícil abrirse completamente y rara vez comparte sentimientos profundos.", dimension: "avoidance" },
      { id: 7, text: "Parece sentir que invierte más en la relación que yo.", dimension: "anxiety" },
      { id: 8, text: "Intenta escapar o alejarse si soy demasiado pegajoso o exijo demasiada intimidad.", dimension: "avoidance" },
      { id: 9, text: "Necesita tranquilidad constante de mi parte para sentirse seguro.", dimension: "anxiety" },
      { id: 10, text: "Tiende a mantener cierta distancia en la relación para protegerse.", dimension: "avoidance" },
      { id: 11, text: "Parece temer que si muestra su verdadero yo, no me gustará.", dimension: "anxiety" },
      { id: 12, text: "Resuelve los problemas por su cuenta y rara vez busca consuelo en mí.", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "Totalmente en desacuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Algo en desacuerdo" },
      { value: 4, label: "Neutral" },
      { value: 5, label: "Algo de acuerdo" },
      { value: 6, label: "De acuerdo" },
      { value: 7, label: "Totalmente de acuerdo" }
    ],
    types: {
      SECURE: {
        name: "Apego Seguro (Secure)",
        shortName: "Seguro",
        desc: "Se siente cómodo y seguro en la intimidad. No teme el abandono y le agrada depender de otros. Comunica sus necesidades de manera efectiva y se mantiene emocionalmente estable durante los conflictos.",
        detailedInfo: "Las personas seguras suelen haber tenido cuidadores receptivos. Como adultos, tienen alta autoestima y confían en los demás. No juegan juegos mentales y comunican sus necesidades directamente. Disfrutan tanto de la intimidad como de la soledad.",
        idealMatch: "El estilo seguro es una gran pareja para cualquiera, aportando estabilidad. Sin embargo, dos personas seguras pueden carecer de 'drama' o intensidad. La conexión requiere esfuerzo.",
        badMatch: "Tipos inseguros graves y no conscientes que no están dispuestos a cambiar pueden agotarlos emocionalmente.",
        growth: [
            "Mantén tu apertura y honestidad, pero protege tu energía.",
            "Sé una 'base segura' para tu pareja, pero no te conviertas en su salvador.",
            "Establece límites; no sacrifiques tus necesidades solo para acomodar a otros."
        ]
      },
      ANXIOUS: {
        name: "Apego Ansioso (Anxious)",
        shortName: "Ansioso",
        desc: "Desea intimidad pero teme el abandono. Es sensible a los estados de ánimo de su pareja y puede volverse emocional.",
        detailedInfo: "A menudo formado por cuidados inconsistentes. Los adultos pueden usar 'conductas de protesta' para llamar la atención. Su autoestima a menudo depende de la validación de la pareja.",
        idealMatch: "Las parejas seguras ofrecen la mejor tranquilidad. Sin embargo, una pareja ansiosa autoconsciente que se comunique bien también puede formar un vínculo profundo y empático. Evita la 'persecución'.",
        badMatch: "Parejas evitativas que se niegan a comunicarse. Esto desencadena la 'trampa ansioso-evitativa'.",
        growth: [
            "Construye tu autoestima independientemente de la validación externa.",
            "Practica la 'pausa': Espera 30 minutos antes de enviar ese mensaje cuando estés ansioso.",
            "Comunica tus necesidades directamente en lugar de actuar emocionalmente.",
            "Disfruta de la soledad y encuentra la felicidad en estar solo."
        ]
      },
      DISMISSIVE: {
        name: "Evitativo-Desapegado (Dismissive)",
        shortName: "Evitativo",
        desc: "Valora la independencia y ve la intimidad como una amenaza a la libertad. Reprime sus necesidades emocionales.",
        detailedInfo: "A menudo aprendido a confiar solo en uno mismo debido a necesidades emocionales descuidadas en la infancia. Pueden parecer fríos pero tienen necesidades de intimidad reprimidas.",
        idealMatch: "Parejas seguras que respeten el espacio. Otra pareja evitativa independiente también puede funcionar si ambos acuerdan una dinámica estable y de baja intensidad.",
        badMatch: "Parejas altamente ansiosas y dependientes que exigen cercanía constante.",
        growth: [
            "Redefine la independencia: La verdadera fuerza incluye mostrar vulnerabilidad.",
            "Practica expresar sentimientos: Comienza con cosas pequeñas como 'estoy cansado'.",
            "Cuando quieras huir, di 'necesito espacio' en lugar de desaparecer.",
            "Intenta confiar en otros para tareas pequeñas."
        ]
      },
      FEARFUL: {
        name: "Evitativo-Temeroso (Fearful)",
        shortName: "Temeroso",
        desc: "Desea intimidad pero teme salir herido. Puede oscilar entre ser pegajoso y distante.",
        detailedInfo: "También conocido como Desorganizado. A menudo surge de traumas. Quiere amor pero le aterra, lo que lleva a un comportamiento de frío y calor.",
        idealMatch: "Las parejas seguras son las mejores para sanar debido a su estabilidad. Sin embargo, cualquier pareja con paciencia y apoyo profesional puede hacer que funcione.",
        badMatch: "Parejas inestables que alimentan el caos y la incertidumbre.",
        growth: [
            "Busca ayuda profesional para sanar traumas.",
            "Identifica detonantes: Distingue el trauma pasado de la realidad presente.",
            "Practica el auto-consuelo: Dite a ti mismo 'estoy a salvo'.",
            "Establece límites claros para tener sensación de control."
        ]
      }
    }
  },
  'ko': {
    ui: {
      title: "애착 유형 테스트",
      subtitle: "당신의 관계 패턴을 발견하고 행복의 열쇠를 찾으세요",
      intro_why: "왜 우리는 사랑에서 같은 패턴을 반복할까요?",
      intro_theory: "고전적 애착 이론을 바탕으로 당신의 무의식적인 <b>불안</b>과 <b>회피</b> 성향을 분석합니다.",
      start_btn: "내 유형 테스트",
      start_partner_btn: "파트너 유형 테스트",
      library_btn: "애착 유형 백과",
      back: "돌아가기",
      library_title: "애착 유형 백과",
      deep_analysis: "심층 분석",
      ideal_match: "이상적인 파트너",
      bad_match: "주의해야 할 관계",
      growth_advice: "성장을 위한 조언",
      calculating: "당신의 내면을 분석 중입니다...",
      calculating_sub: "불안 및 회피 데이터를 통합하고 있습니다",
      your_type: "당신의 애착 유형",
      partner_type: "상대의 애착 유형",
      anxiety: "불안",
      avoidance: "회피",
      share_btn: "결과 공유하기",
      explore_others: "다른 유형 알아보기",
      restart: "다시 테스트하기",
      note: "참고: 이 테스트는 자가 탐색을 위한 간소화된 ECR 척도를 기반으로 하며, 전문가의 진단을 대신할 수 없습니다.",
      copied: "결과가 클립보드에 복사되었습니다!",
      share_text: "애착 유형 테스트에서 제 유형은 【{type}】입니다 (불안: {anxiety}%, 회피: {avoidance}%)\n당신의 애착 유형도 확인해보세요!\n{url}",
      question_progress: "질문 {current} / {total}",
      match_recommend: "추천 매칭:",
      match_secure: "안정형 애착",
    },
    chart: {
      anxious_high: "불안 높음",
      anxious_low: "불안 낮음",
      avoidant_high: "회피 높음",
      avoidant_low: "회피 낮음",
      secure: "안정형",
      preoccupied: "불안형",
      dismissive: "거부-회피형",
      fearful: "공포-회피형",
      you_are_here: "결과 위치"
    },
    questions: [
      { id: 1, text: "파트너가 나를 떠나거나 더 이상 사랑하지 않을까 봐 자주 걱정한다.", dimension: "anxiety" },
      { id: 2, text: "다른 사람이 나와 너무 가까워지려고 하면 긴장되거나 불편하다.", dimension: "avoidance" },
      { id: 3, text: "나는 친밀감을 갈망하지만, 내가 사람들을 겁먹게 해서 쫓아버리는 것 같다.", dimension: "anxiety" },
      { id: 4, text: "나는 독립적인 것을 선호하며, 남에게 의지하거나 남이 나에게 의지하는 것을 좋아하지 않는다.", dimension: "avoidance" },
      { id: 5, text: "파트너로부터 제때 답장이 오지 않으면 안 좋은 쪽으로 생각이 꼬리에 꼬리를 문다.", dimension: "anxiety" },
      { id: 6, text: "파트너에게 마음을 완전히 열고 깊은 감정을 공유하는 것이 어렵다.", dimension: "avoidance" },
      { id: 7, text: "관계에서 내가 상대방보다 감정적으로 더 많이 투자한다고 느낀다.", dimension: "anxiety" },
      { id: 8, text: "파트너가 너무 집착하거나 지나친 친밀감을 요구하면 도망치고 싶어진다.", dimension: "avoidance" },
      { id: 9, text: "관계에서 안심하기 위해서는 끊임없는 확인과 안심이 필요하다.", dimension: "anxiety" },
      { id: 10, text: "나는 자신을 보호하기 위해 관계에서 어느 정도 거리를 두는 경향이 있다.", dimension: "avoidance" },
      { id: 11, text: "진정한 내 모습을 보여주면 파트너가 나를 싫어할까 봐 두렵다.", dimension: "anxiety" },
      { id: 12, text: "문제가 생기면 스스로 해결하려 하고, 보통 파트너에게 위로를 구하지 않는다.", dimension: "avoidance" }
    ],
    questions_partner: [
      { id: 1, text: "그 사람은 내가 여전히 그들을 사랑하는지, 혹은 떠나지 않을 것인지에 대해 자주 확인받고 싶어한다.", dimension: "anxiety" },
      { id: 2, text: "내가 너무 가까워지려고 하면 그 사람은 긴장하거나 불편해 보인다.", dimension: "avoidance" },
      { id: 3, text: "그 사람은 친밀감을 원하지만, 그 행동이 오히려 사람들을 밀어내는 것 같다.", dimension: "anxiety" },
      { id: 4, text: "그 사람은 독립성을 강조하며, 나에게 의지하거나 내가 그들에게 의지하는 것을 싫어한다.", dimension: "avoidance" },
      { id: 5, text: "내가 답장을 바로 하지 않으면 그 사람은 매우 불안해하거나 화를 낸다.", dimension: "anxiety" },
      { id: 6, text: "그 사람은 마음을 완전히 열기 어려워하며, 깊은 감정을 거의 공유하지 않는다.", dimension: "avoidance" },
      { id: 7, text: "그 사람은 관계에서 나보다 자신이 더 많이 투자한다고 느끼는 것 같다.", dimension: "anxiety" },
      { id: 8, text: "내가 너무 집착하거나 지나친 친밀감을 요구하면 그 사람은 도망치거나 거리를 두려 한다.", dimension: "avoidance" },
      { id: 9, text: "그 사람이 안심하기 위해서는 나의 끊임없는 확인이 필요하다.", dimension: "anxiety" },
      { id: 10, text: "관계에서 그 사람은 자신을 보호하기 위해 일정한 거리를 두는 경향이 있다.", dimension: "avoidance" },
      { id: 11, text: "그 사람은 자신의 진짜 모습을 보여주면 내가 싫어할까 봐 두려워하는 것 같다.", dimension: "anxiety" },
      { id: 12, text: "문제가 생기면 그 사람은 스스로 해결하려 하며, 나에게 위로를 구하는 일이 드물다.", dimension: "avoidance" }
    ],
    options: [
      { value: 1, label: "전혀 그렇지 않다" },
      { value: 2, label: "그렇지 않다" },
      { value: 3, label: "약간 그렇지 않다" },
      { value: 4, label: "중립" },
      { value: 5, label: "약간 그렇다" },
      { value: 6, label: "그렇다" },
      { value: 7, label: "매우 그렇다" }
    ],
    types: {
      SECURE: {
        name: "안정형 애착 (Secure)",
        shortName: "안정형",
        desc: "친밀한 관계에서 편안함과 자신감을 느낍니다. 버림받을 것을 걱정하지 않으며, 타인에게 의지하는 것을 편안하게 여깁니다. 필요를 효과적으로 소통하며, 갈등 상황에서도 감정적으로 안정되어 있습니다.",
        detailedInfo: "안정형은 보통 반응이 좋은 양육자와 함께 자랐습니다. 성인이 되어서도 자존감이 높고 타인을 신뢰합니다. 밀당을 하지 않고 자신의 필요를 직접적으로 표현합니다. 친밀감과 고독을 모두 즐길 수 있습니다.",
        idealMatch: "안정형은 누구에게나 이상적인 파트너이며 안정감을 줍니다. 하지만 안정형끼리는 자극이 부족하다고 느낄 수도 있습니다. 관계를 위해서는 노력이 필요합니다.",
        badMatch: "변할 의지가 없는 심각한 불안정 애착 유형은 당신의 감정을 고갈시킬 수 있습니다.",
        growth: [
            "개방성과 정직함을 유지하되 자신의 에너지를 보호하세요.",
            "파트너의 '안전기지'가 되어주되, 구원자가 되려고 하지 마세요.",
            "경계를 설정하세요. 타인을 포용하기 위해 자신의 필요를 희생하지 마세요."
        ]
      },
      ANXIOUS: {
        name: "불안형 애착 (Anxious)",
        shortName: "불안형",
        desc: "친밀감을 갈망하지만 버림받을까 두려워합니다. 파트너의 기분에 예민하고 감정적으로 행동할 수 있습니다.",
        detailedInfo: "종종 양육자의 일관되지 않은 반응으로 인해 형성됩니다. 성인은 관심을 끌기 위해 '항의 행동'을 할 수 있습니다. 자존감이 파트너의 인정에 의존하는 경향이 있습니다.",
        idealMatch: "안정형 파트너가 최고의 안심을 줍니다. 하지만 소통이 잘 되고 자기 인식이 있는 불안형 파트너와도 깊은 공감대를 형성할 수 있습니다. '쫓고 쫓기는' 관계는 피하세요.",
        badMatch: "소통을 거부하는 회피형 파트너. 이는 '불안-회피의 덫'을 유발합니다.",
        growth: [
            "외부의 확인 없이 스스로의 자존감을 키우세요.",
            "잠시 멈추기: 불안해서 연락하고 싶을 때 30분만 기다려보세요.",
            "감정적으로 행동하는 대신 필요한 것을 직접 말하세요.",
            "고독을 즐기고 혼자 있는 시간에서 행복을 찾으세요."
        ]
      },
      DISMISSIVE: {
        name: "거부-회피형 애착 (Dismissive)",
        shortName: "회피형",
        desc: "독립성을 중시하며 친밀감을 자유에 대한 위협으로 봅니다. 감정적 욕구를 억압합니다.",
        detailedInfo: "어린 시절 감정적 욕구가 무시되어 스스로에게만 의지하는 법을 배운 경우가 많습니다. 차가워 보일 수 있지만 억압된 친밀감의 욕구가 있습니다.",
        idealMatch: "당신의 공간을 존중해주는 안정형 파트너. 또한 서로 합의가 된다면 독립적인 회피형 파트너와도 안정적인 관계를 맺을 수 있습니다.",
        badMatch: "끊임없이 친밀감을 요구하는 의존적인 불안형 파트너.",
        growth: [
            "독립의 재정의: 진정한 강함은 취약함을 드러내는 것입니다.",
            "감정 표현 연습: '나 오늘 피곤해' 같은 사소한 것부터 공유하세요.",
            "도망치고 싶을 때, 사라지는 대신 '공간이 필요해'라고 말하세요.",
            "사소한 일은 타인에게 의지해보세요."
        ]
      },
      FEARFUL: {
        name: "공포-회피형 애착 (Fearful)",
        shortName: "공포형",
        desc: "친밀감을 원하지만 상처받는 것을 극도로 두려워합니다. 집착과 거리두기 사이를 오갈 수 있습니다.",
        detailedInfo: "혼란형이라고도 하며, 종종 트라우마에서 비롯됩니다. 사랑을 원하지만 사랑을 두려워하여 냉탕과 온탕을 오가는 행동을 보입니다.",
        idealMatch: "안정형 파트너는 그들의 안정성 때문에 치유에 가장 좋습니다. 하지만 인내심이 있고 전문적인 도움을 받는다면 어떤 파트너와도 잘 지낼 수 있습니다.",
        badMatch: "혼란과 불확실성을 부추기는 불안정한 파트너.",
        growth: [
            "트라우마 치유를 위해 전문가의 도움을 받으세요.",
            "트리거 식별: 과거의 트라우마와 현재의 현실을 구별하세요.",
            "스스로 진정시키기: '나는 지금 안전해'라고 스스로에게 말해주세요.",
            "통제감을 느끼기 위해 명확한 경계를 설정하세요."
        ]
      }
    }
  }
};
