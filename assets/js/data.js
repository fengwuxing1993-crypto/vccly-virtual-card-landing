// Centralized i18n & data (Chinese primary for prototype)
export const BRAND = {
  name: 'Vccly',
  short: 'VCC',
  slogan: '成本更低、通过率更高的虚拟信用卡',
  sloganEn: 'Virtual cards that cost less and always get approved.',
  domain: 'vccly.io',
};

export const NAV = [
  { label: '产品', href: '#product', },
  {
    label: '解决方案',
    href: '#solutions',
    children: [
      { label: 'AI Token 中转站', desc: '低开卡费 · 批量开卡 · AI 平台友好 BIN', href: '#sol-ai', icon: 'ri-robot-2-line', badge: '首要' },
      { label: '广告投放', desc: '低支付手续费 · 广告专用 BIN · 可轮换', href: '#sol-ads', icon: 'ri-advertisement-line', badge: '次要' },
      { label: '跨境电商', desc: '多店铺多卡 · 多币种 · 防关联', href: '#sol-ecom', icon: 'ri-shopping-bag-3-line' },
      { label: 'SaaS/AI 订阅', desc: '即时开卡 · 可冻结 · 自动续费', href: '#sol-saas', icon: 'ri-vip-crown-2-line' },
      { label: '企业支出', desc: '员工卡 · 审批 · 报销报表', href: '#sol-exp', icon: 'ri-building-2-line' },
      { label: '平台发卡 BaaS', desc: 'API 发卡 · 白标 · 专属卡段', href: '#sol-embed', icon: 'ri-cloud-line' },
    ],
  },
  {
    label: '定价',
    href: '#pricing',
    children: [
      { label: '费率组合', desc: '按客户成本结构匹配卡产品', href: '#pricing', icon: 'ri-price-tag-3-line' },
      { label: '成本计算器', desc: '算一算你能省多少', href: '#calculator', icon: 'ri-calculator-line' },
    ],
  },
  {
    label: '开发者',
    href: '#developers',
    children: [
      { label: 'API 概览', desc: '发卡、BIN、MCC、Webhook', href: '#developers', icon: 'ri-code-s-slash-line' },
      { label: '快速开始', desc: '3 步集成，复制即跑', href: '#developers', icon: 'ri-rocket-2-line' },
      { label: '沙箱 Sandbox', desc: '免费、与生产隔离', href: '#developers', icon: 'ri-flask-line' },
      { label: 'API 文档', desc: '完整 Reference（二期）', href: '#developers', icon: 'ri-book-open-line' },
      { label: '服务状态', desc: '99.99% 可用性', href: '#developers', icon: 'ri-pulse-line' },
    ],
  },
  { label: '关于', href: '#about' },
];

// Platform stats (sample data per PRD 5.1.1)
export const STATS = {
  totalTx: 1286403,
  totalAmount: 48.2, // $M
  successRate: 99.2, // %
  scenes: [
    { key: 'ai',  label: 'AI 采购', value: 586420, pct: 45.6, color: '#2f5efc' },
    { key: 'ads', label: '广告投放', value: 452830, pct: 35.2, color: '#22d3ee' },
    { key: 'oth', label: '其他场景', value: 247153, pct: 19.2, color: '#8b5cf6' },
  ],
};

// Merchant logos (via Clearbit Logo API - public, high quality)
// Each row: { name, domain }
export const MERCHANTS = {
  ai: [
    { name: 'OpenAI', domain: 'openai.com' },
    { name: 'Anthropic', domain: 'anthropic.com' },
    { name: 'Google Gemini', domain: 'google.com' },
    { name: 'xAI (Grok)', domain: 'x.ai' },
    { name: 'OpenRouter', domain: 'openrouter.ai' },
    { name: 'Perplexity', domain: 'perplexity.ai' },
    { name: 'Poe', domain: 'poe.com' },
    { name: 'Midjourney', domain: 'midjourney.com' },
    { name: 'Cursor', domain: 'cursor.com' },
    { name: 'GitHub', domain: 'github.com' },
    { name: 'Microsoft Azure', domain: 'azure.microsoft.com' },
    { name: 'AWS', domain: 'aws.amazon.com' },
    { name: 'Cloudflare', domain: 'cloudflare.com' },
  ],
  ads: [
    { name: 'Meta Ads', domain: 'facebook.com' },
    { name: 'Google Ads', domain: 'ads.google.com' },
    { name: 'TikTok Ads', domain: 'tiktok.com' },
    { name: 'Microsoft Ads', domain: 'ads.microsoft.com' },
    { name: 'X Ads', domain: 'x.com' },
    { name: 'LinkedIn Ads', domain: 'linkedin.com' },
    { name: 'Pinterest Ads', domain: 'pinterest.com' },
    { name: 'Snap Ads', domain: 'snapchat.com' },
    { name: 'Amazon Ads', domain: 'amazon.com' },
  ],
  general: [
    { name: 'Shopify', domain: 'shopify.com' },
    { name: 'Amazon', domain: 'amazon.com' },
    { name: 'Netflix', domain: 'netflix.com' },
    { name: 'Spotify', domain: 'spotify.com' },
    { name: 'Notion', domain: 'notion.so' },
    { name: 'Figma', domain: 'figma.com' },
  ],
};

export const PILLARS = [
  {
    icon: 'ri-money-dollar-circle-line',
    tag: '综合成本更低',
    title: '不是单点便宜，是整条链路都更省',
    desc: '按不同客户的成本结构，提供"低开卡费"或"低支付手续费"的差异化费率组合。开卡 + 充值 + 交易 + 月费 + 拒付/换卡，综合成本更低。',
    bullets: ['一级服务商 · 上游直连', '无中间商加价 · 规模效应', '无隐藏费用 · 口径透明'],
    color: 'from-brand-500 to-brand-700',
    link: '#pricing',
    linkText: '查看费率组合',
  },
  {
    icon: 'ri-bank-card-2-line',
    tag: '卡 BIN 丰富',
    title: 'Visa / MasterCard / Discover 多卡组织、多 BIN',
    desc: '覆盖全球多发卡地区的 BIN，带来高通过率、场景适配、风险分散、快速切换；AI 平台与广告平台友好 BIN 支持。',
    bullets: ['AI 平台友好 BIN', '广告专用 BIN 轮换', '按场景智能匹配'],
    color: 'from-cyan-400 to-brand-600',
    link: '#product',
    linkText: '了解产品能力',
  },
];

export const SOLUTIONS = [
  {
    id: 'sol-ai',
    priority: 'P0',
    badge: '首要',
    icon: 'ri-robot-2-line',
    title: 'AI Token 中转站 / AI 采购',
    tagline: '大量卡、低开卡费，BIN 对 OpenAI/Anthropic 友好',
    audience: '中转站运营、AI 服务批量采购、代充团队',
    pains: ['卡数量多，开卡费累积高', 'AI 平台对 BIN 要求严格', '绑定失败/风控危及账户与余额', '批量开卡、充值、对账繁琐'],
    features: ['低 / 阶梯开卡费', '批量开卡 · 批量充值', '对 OpenAI/Claude 友好 BIN', 'MCC 限定软件/SaaS', '集中管理与对账'],
    accent: 'brand',
  },
  {
    id: 'sol-ads',
    priority: 'P0',
    badge: '次要',
    icon: 'ri-advertisement-line',
    title: '广告投放',
    tagline: '低支付手续费，BIN 稳定、可轮换',
    audience: '广告投手、代理商、出海投放团队',
    pains: ['小额高频，手续费累积快', 'BIN 被封/限流导致广告跑不出去', '多账户隔离与风控困难', '对账成本高'],
    features: ['低支付手续费', '广告专用 BIN · 可轮换', '一账户一卡 · 批量管理', 'MCC 限定广告服务', '7×24 技术支持'],
    accent: 'cyan',
  },
  {
    id: 'sol-ecom',
    priority: 'P1',
    icon: 'ri-shopping-bag-3-line',
    title: '跨境电商',
    tagline: '多店铺多卡防关联 · 多币种 · 对账顺畅',
    audience: '跨境电商卖家、独立站站群',
    pains: ['多平台多店多卡管理混乱', '币种/汇率成本高', '防关联风险'],
    features: ['Visa/MasterCard/Discover', '多币种支持', '多店铺多卡', '账单导出'],
    accent: 'violet',
  },
  {
    id: 'sol-saas',
    priority: 'P1',
    icon: 'ri-vip-crown-2-line',
    title: 'SaaS / AI 订阅',
    tagline: '即时开卡 · 订阅友好 · 可冻结',
    audience: '出海团队、个人开发者、设计师',
    pains: ['订阅扣款失败', '多订阅难管理', '取消困难'],
    features: ['订阅专用卡', '可冻结 / 可注销', '自动续费', '即时开卡'],
    accent: 'green',
  },
  {
    id: 'sol-exp',
    priority: 'P2',
    icon: 'ri-building-2-line',
    title: '企业支出 / 费用管理',
    tagline: '员工卡 · 额度审批 · 报销报表',
    audience: '企业财务、运营、差旅采购',
    pains: ['员工报销繁琐', '预算失控', '对账工作量大'],
    features: ['员工卡', '额度审批', '消费分类', '报表导出', '无月费'],
    accent: 'amber',
  },
  {
    id: 'sol-embed',
    priority: 'P2',
    icon: 'ri-cloud-line',
    title: '平台发卡 BaaS / 白标',
    tagline: '通过 API 把发卡能力嵌入自身产品',
    audience: '平台方 / 开发者 / 服务商',
    pains: ['自建成本高', '合规难', '资金模型复杂'],
    features: ['发卡 API', 'BIN/MCC 可配置', 'Webhook', '白标 · 专属卡段', '沙箱环境'],
    accent: 'brand',
  },
];

export const PLANS = [
  {
    name: 'AI 采购卡',
    enName: 'AI Procurement',
    target: 'AI Token 中转站 / 批量采购',
    mcc: '软件 / SaaS / 数字商品',
    highlight: '开卡费最低可至 $0.5/张',
    features: [
      { icon: 'ri-check-line', text: '开卡费：低 · 支持批量阶梯价' },
      { icon: 'ri-check-line', text: '支付手续费：标准（约 1.2%）' },
      { icon: 'ri-check-line', text: 'OpenAI / Anthropic 友好 BIN' },
      { icon: 'ri-check-line', text: '批量开卡 · 批量充值' },
      { icon: 'ri-check-line', text: 'USDT / 电汇充值' },
    ],
    scene: '绑定 OpenAI、Anthropic、Gemini 等 AI 平台充值',
    accent: 'brand',
    featured: true,
    cta: '申请开户',
  },
  {
    name: '广告专用卡',
    enName: 'Ads Card',
    target: '广告投手 / 代理商',
    mcc: '广告服务',
    highlight: '支付手续费低至 0.8%',
    features: [
      { icon: 'ri-check-line', text: '支付手续费：低（起价 0.8%）' },
      { icon: 'ri-check-line', text: '开卡费：合理 · 批量价' },
      { icon: 'ri-check-line', text: '广告专用 BIN · 可轮换' },
      { icon: 'ri-check-line', text: '一账户一卡 · 批量管理' },
      { icon: 'ri-check-line', text: '7×24 风控与客服支持' },
    ],
    scene: 'FB / Google / TikTok / X 广告扣费',
    accent: 'cyan',
    featured: false,
    cta: '申请开户',
  },
  {
    name: '通用消费卡',
    enName: 'Universal',
    target: '电商 / 订阅 / 差旅 / 企业支出',
    mcc: '不限',
    highlight: '一卡多用 · 稳健标准费率',
    features: [
      { icon: 'ri-check-line', text: '标准开卡费与手续费' },
      { icon: 'ri-check-line', text: '支持 Visa / MasterCard / Discover' },
      { icon: 'ri-check-line', text: '多币种 · 多店铺多卡' },
      { icon: 'ri-check-line', text: '订阅专用 · 可冻结' },
      { icon: 'ri-check-line', text: '账单导出 · 团队管理' },
    ],
    scene: '跨境电商、SaaS 订阅、企业差旅',
    accent: 'violet',
    featured: false,
    cta: '联系销售',
  },
];

// Default rate config for calculator
export const RATES = {
  ai: {
    label: 'AI 采购卡',
    openFee: 0.5,             // 开卡费 / 张（USD）
    openFeeTiered: [          // 批量阶梯：数量 ≥ qty 时单张开卡费
      { qty: 1,  fee: 0.8 },
      { qty: 20, fee: 0.6 },
      { qty: 50, fee: 0.5 },
      { qty: 200, fee: 0.3 },
    ],
    txFeeRate: 0.012,         // 1.2%
    topupFeeRate: 0.005,      // 0.5%
    monthlyFee: 0,
    industryOpenFee: 2.0,
    industryTxFeeRate: 0.018,
    industryTopupFeeRate: 0.010,
  },
  ads: {
    label: '广告专用卡',
    openFee: 1.0,
    openFeeTiered: [
      { qty: 1,  fee: 1.5 },
      { qty: 20, fee: 1.2 },
      { qty: 50, fee: 1.0 },
      { qty: 200, fee: 0.8 },
    ],
    txFeeRate: 0.008,         // 0.8%
    topupFeeRate: 0.005,
    monthlyFee: 0,
    industryOpenFee: 1.5,
    industryTxFeeRate: 0.020, // 行业约 2.0%
    industryTopupFeeRate: 0.012,
  },
  universal: {
    label: '通用消费卡',
    openFee: 2.0,
    openFeeTiered: [
      { qty: 1,  fee: 2.0 },
      { qty: 20, fee: 1.8 },
    ],
    txFeeRate: 0.015,
    topupFeeRate: 0.008,
    monthlyFee: 0,
    industryOpenFee: 2.5,
    industryTxFeeRate: 0.022,
    industryTopupFeeRate: 0.012,
  },
};

export const TESTIMONIALS = [
  { name: 'Daniel W.', role: 'AI SaaS 创始人 · 新加坡', quote: '我们一次性开 80 张卡绑定 OpenAI 账户，开卡费比以前节省了 60%，拒付率显著下降。', avatarSeed: 'daniel' },
  { name: 'Lin Chen', role: '广告代理 · 深圳', quote: '广告专用 BIN 稳定，手续费从 2% 降到 0.8%，一个月下来省出一个人力。', avatarSeed: 'lin' },
  { name: 'Priya S.', role: 'DTC 卖家 · 美国', quote: '多店铺多卡、多币种、账单清晰，财务对账效率翻倍。', avatarSeed: 'priya' },
  { name: 'Marco R.', role: 'BaaS 平台 CTO', quote: 'API 稳定、BIN/MCC 可编排，我们用两周完成了白标发卡集成。', avatarSeed: 'marco' },
];

export const FAQ = [
  { q: '为什么你们的综合成本更低？', a: '我们是一级服务商、上游直连，没有中间商加价；并按客户成本结构给不同费率组合，而不是一个费率平铺。规模效应与直接议价能力让整条链路更省。' },
  { q: '有没有隐藏费用？', a: '没有。开卡费、充值费、交易费、跨境/货币转换费、月费都会在费率组合页公开，并在合同中列明。' },
  { q: '便宜会不会影响安全或稳定？', a: '不会。资金托管于合作持牌机构，具备完整风控与 3DS 验证；安全合规与资金保障不打折。' },
  { q: '不同卡产品能否混用？MCC 限定如何影响我？', a: '可以同时持有多个卡产品，各自按 MCC 使用。MCC 限定既能带来更优费率，也能帮助风控；越界交易会被拒绝并有明确提示。' },
  { q: '支持哪些卡组织？', a: '支持 Visa、MasterCard、Discover，并覆盖丰富的 BIN 与多发卡地区，便于 AI 平台与广告平台绑定。' },
  { q: '开发者可以直接对接 API 吗？', a: '可以。提供免费沙箱、BIN/MCC 查询与配置、Webhook、SDK，几行代码即可完成发卡。' },
];
