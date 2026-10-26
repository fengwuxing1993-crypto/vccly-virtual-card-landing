import { html, mount } from '../utils.js';

// Reusable virtual card SVG (used in hero and other places)
export const cardSVG = ({ brand = 'VISA', bin = '4532 01', theme = 'brand', chip = true } = {}) => {
  const palettes = {
    brand:  ['#2f5efc', '#1636b0'],
    cyan:   ['#06b6d4', '#1b45e0'],
    violet: ['#8b5cf6', '#1b45e0'],
    dark:   ['#0b1226', '#1b2448'],
    gold:   ['#f59e0b', '#c2410c'],
  };
  const [c1, c2] = palettes[theme] || palettes.brand;
  const brandMark = brand === 'VISA'
    ? `<text x="300" y="195" fill="#ffffff" font-family="Inter, sans-serif" font-weight="800" font-style="italic" font-size="34" text-anchor="end" letter-spacing="2">VISA</text>`
    : brand === 'MC'
      ? `<g transform="translate(230,160)">
           <circle cx="25" cy="25" r="25" fill="#eb001b" opacity="0.95"/>
           <circle cx="55" cy="25" r="25" fill="#f79e1b" opacity="0.95"/>
         </g>`
      : `<text x="300" y="195" fill="#ffffff" font-family="Inter, sans-serif" font-weight="800" font-size="22" text-anchor="end" letter-spacing="2">DISCOVER</text>`;

  return `
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <defs>
      <linearGradient id="g-${theme}-${brand}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="shine-${theme}-${brand}" cx="20%" cy="20%" r="80%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="320" height="200" rx="18" fill="url(#g-${theme}-${brand})"/>
    <rect width="320" height="200" rx="18" fill="url(#shine-${theme}-${brand})"/>
    <circle cx="280" cy="40" r="60" fill="#ffffff" opacity="0.08"/>
    <circle cx="40" cy="170" r="80" fill="#ffffff" opacity="0.06"/>
    ${chip ? `<rect x="22" y="60" width="42" height="32" rx="6" fill="#f0d58b"/>
     <path d="M30 68h26 M30 76h26 M30 84h26" stroke="#b78c3f" stroke-width="1.2"/>` : ''}
    <text x="22" y="130" fill="#ffffff" font-family="Inter, sans-serif" font-weight="700" font-size="18" letter-spacing="3">${bin} •• •••• ••••</text>
    <text x="22" y="162" fill="#ffffff" opacity="0.8" font-family="Inter, sans-serif" font-size="10">CARDHOLDER</text>
    <text x="22" y="178" fill="#ffffff" font-family="Inter, sans-serif" font-weight="600" font-size="12">VCCLY USER</text>
    <text x="150" y="162" fill="#ffffff" opacity="0.8" font-family="Inter, sans-serif" font-size="10">EXPIRES</text>
    <text x="150" y="178" fill="#ffffff" font-family="Inter, sans-serif" font-weight="600" font-size="12">12/29</text>
    ${brandMark}
  </svg>`;
};

export const renderHero = () => {
  const markup = html`
    <div class="relative bg-hero-grad text-white overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-20"></div>
      <div class="container-x pt-16 pb-24 lg:pt-24 lg:pb-32 relative grid lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 reveal">
          <div class="inline-flex items-center gap-2 chip-dark mb-5">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
            一级服务商 · Visa / MasterCard / Discover 多卡组织
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            成本更低 · 通过率更高<br/>
            <span class="bg-gradient-to-r from-accent-cyan via-brand-300 to-accent-violet bg-clip-text text-transparent">的虚拟信用卡</span>
          </h1>
          <p class="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">
            专为 <b class="text-white">AI Token 中转站</b> 与 <b class="text-white">广告投放</b> 等跨境场景设计。
            按客户成本结构匹配费率组合，多 BIN 保通过率，秒级开卡，开发者友好。
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a href="#apply" class="btn-primary text-base">
              <i class="ri-rocket-2-line"></i> 申请开户 Open Account
            </a>
            <a href="#developers" class="btn-secondary text-base">
              <i class="ri-code-s-slash-line"></i> 查看 API 文档
            </a>
            <a href="#calculator" class="btn-secondary text-base">
              <i class="ri-calculator-line"></i> 成本计算器
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
            <div class="flex items-center gap-2"><i class="ri-shield-check-line text-accent-cyan text-lg"></i>低费率 Low fees</div>
            <div class="flex items-center gap-2"><i class="ri-bank-card-line text-accent-cyan text-lg"></i>多 BIN Multi-BIN</div>
            <div class="flex items-center gap-2"><i class="ri-flashlight-line text-accent-cyan text-lg"></i>秒级开卡 Instant</div>
            <div class="flex items-center gap-2"><i class="ri-24-hours-line text-accent-cyan text-lg"></i>7×24 支持</div>
          </div>
        </div>

        <div class="lg:col-span-5 relative h-[380px] sm:h-[440px]">
          <div class="absolute inset-0 flex items-center justify-center">
            <!-- Floating cards stack -->
            <div class="relative w-[320px] h-[200px]">
              <div class="absolute -top-16 -left-8 w-[280px] h-[175px] float-card" style="--rot:-12deg; animation-delay:-2s">
                ${cardSVG({ brand: 'MC', bin: '5399 02', theme: 'violet' })}
              </div>
              <div class="absolute -top-6 left-6 w-[300px] h-[188px] float-card" style="--rot:-4deg; animation-delay:-1s">
                ${cardSVG({ brand: 'DISCOVER', bin: '6011 04', theme: 'cyan' })}
              </div>
              <div class="relative w-[320px] h-[200px] float-card" style="--rot:4deg">
                ${cardSVG({ brand: 'VISA', bin: '4532 01', theme: 'brand' })}
              </div>
              <!-- Floating badges -->
              <div class="absolute -right-6 -top-10 bg-white/10 backdrop-blur border border-white/15 rounded-xl px-3 py-2 text-xs text-white float-card" style="--rot:0deg; animation-delay:-3s">
                <div class="flex items-center gap-2"><i class="ri-robot-2-line text-accent-cyan"></i> OpenAI · Claude 友好</div>
              </div>
              <div class="absolute -left-10 bottom-0 bg-white/10 backdrop-blur border border-white/15 rounded-xl px-3 py-2 text-xs text-white float-card" style="--rot:0deg; animation-delay:-4s">
                <div class="flex items-center gap-2"><i class="ri-advertisement-line text-accent-cyan"></i> 广告专用 · 可轮换</div>
              </div>
              <div class="absolute right-0 -bottom-10 bg-gradient-to-br from-brand-500/90 to-brand-700/90 rounded-xl px-3 py-2 text-xs text-white float-card shadow-glow" style="--rot:0deg; animation-delay:-5s">
                <div class="flex items-center gap-2"><i class="ri-check-double-line"></i> 通过率 99.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Smooth transition -->
      <div class="absolute inset-x-0 -bottom-px h-16 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  `;
  mount('#hero', markup);
};
