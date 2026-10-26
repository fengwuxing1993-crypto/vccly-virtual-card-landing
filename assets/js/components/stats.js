import { STATS, MERCHANTS, PILLARS } from '../data.js';
import { html, mount, $, fmtNum, countUp, observeOnce, logoUrl } from '../utils.js';

export const renderTrustBar = () => {
  const items = [
    { icon: 'ri-bank-line', label: '一级服务商 · 上游直连' },
    { icon: 'ri-shield-check-line', label: '合规持牌机构合作' },
    { icon: 'ri-earth-line', label: 'Visa / MasterCard / Discover' },
    { icon: 'ri-flashlight-line', label: '秒级开卡 · 批量开卡' },
    { icon: 'ri-code-s-slash-line', label: 'API 原生 · 开发者友好' },
  ];
  mount('#trustbar', html`
    <div class="bg-white border-b border-slate-100">
      <div class="container-x py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        ${items.map(i => html`
          <div class="flex items-center justify-center gap-2 text-slate-600 text-sm">
            <i class="${i.icon} text-brand-600 text-lg"></i>
            <span class="font-medium">${i.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `);
};

export const renderPlatformStats = () => {
  // merge merchants into one array to form marquee track
  const merchants = [...MERCHANTS.ai, ...MERCHANTS.ads, ...MERCHANTS.general];
  const marqueeItems = [...merchants, ...merchants]; // duplicate for seamless scroll

  const logoCard = (m) => html`
    <div class="shrink-0 w-[180px] h-[70px] bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center gap-3 px-4 hover:bg-white/[0.08] transition">
      <img src="${logoUrl(m.domain, 64)}"
           alt="${m.name}"
           loading="lazy"
           class="w-8 h-8 rounded object-contain bg-white p-0.5"
           onerror="this.style.display='none'; this.nextElementSibling.style.marginLeft='0'"/>
      <span class="text-white/85 text-sm font-semibold whitespace-nowrap">${m.name}</span>
    </div>
  `;

  const scenes = STATS.scenes.map(s => html`
    <div>
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2 text-white/85">
          <span class="w-2.5 h-2.5 rounded-full" style="background:${s.color}"></span>
          <span class="font-medium">${s.label}</span>
        </div>
        <div class="text-white font-bold tabular-nums">
          <span data-count-up="${s.value}">0</span>
          <span class="text-xs text-white/60 font-medium ml-1">笔 · ${s.pct}%</span>
        </div>
      </div>
      <div class="bar"><span style="width:0%" data-bar-width="${s.pct}%"></span></div>
    </div>
  `).join('');

  const markup = html`
    <div class="bg-ink-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-10"></div>
      <div class="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl"></div>

      <div class="container-x py-20 relative">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="chip chip-dark">
            <i class="ri-line-chart-line text-accent-cyan"></i> 平台数据
          </div>
          <h2 class="section-title mt-4">真实的交易量 · 真实的覆盖</h2>
          <p class="mt-3 text-white/70">覆盖主流 AI 平台、广告渠道与跨境电商生态，稳定支撑全球客户的日常跨境支付。</p>
        </div>

        <!-- Big numbers -->
        <div class="mt-12 grid md:grid-cols-3 gap-6 reveal">
          <div class="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-7">
            <div class="text-sm text-white/60 flex items-center gap-2"><i class="ri-exchange-dollar-line text-accent-cyan"></i> 累计成功交易</div>
            <div class="mt-2 flex items-end gap-1">
              <span class="text-5xl font-extrabold tabular-nums" data-count-up="${STATS.totalTx}">0</span>
              <span class="text-white/60 pb-2">笔</span>
            </div>
          </div>
          <div class="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-7">
            <div class="text-sm text-white/60 flex items-center gap-2"><i class="ri-currency-line text-accent-cyan"></i> 累计交易额</div>
            <div class="mt-2 flex items-end gap-1">
              <span class="text-5xl font-extrabold tabular-nums">$<span data-count-up="${STATS.totalAmount}" data-decimal="1">0</span></span>
              <span class="text-white/60 pb-2">M</span>
            </div>
          </div>
          <div class="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-7">
            <div class="text-sm text-white/60 flex items-center gap-2"><i class="ri-shield-check-line text-accent-cyan"></i> 支付成功率</div>
            <div class="mt-2 flex items-end gap-1">
              <span class="text-5xl font-extrabold tabular-nums"><span data-count-up="${STATS.successRate}" data-decimal="1">0</span></span>
              <span class="text-white/60 pb-2">%</span>
            </div>
          </div>
        </div>

        <div class="mt-10 grid lg:grid-cols-2 gap-8 reveal">
          <!-- Scenes bars -->
          <div class="rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-7">
            <div class="flex items-center justify-between mb-5">
              <div class="font-semibold">各场景累计成功支付笔数</div>
              <span class="chip chip-dark"><i class="ri-pie-chart-line"></i> 场景分布</span>
            </div>
            <div class="space-y-5">${scenes}</div>
          </div>
          <!-- Merchants marquee -->
          <div class="rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-7">
            <div class="flex items-center justify-between mb-5">
              <div class="font-semibold">客户常用我们的卡支付</div>
              <span class="chip chip-dark"><i class="ri-store-2-line"></i> ${merchants.length}+ 主流商户</span>
            </div>
            <div class="marquee">
              <div class="marquee-track">
                ${marqueeItems.map(logoCard).join('')}
              </div>
            </div>
            <div class="mt-4 text-xs text-white/50">
              商标与 LOGO 归属各自所有者，仅示意"我们的卡可用于向这些商户付款"。
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const root = mount('#platform-stats', markup);

  // Trigger count-up & bars when stats visible
  observeOnce(root, () => {
    root.querySelectorAll('[data-count-up]').forEach(el => {
      const to = Number(el.getAttribute('data-count-up'));
      const decimal = Number(el.getAttribute('data-decimal') || 0);
      const formatter = decimal > 0
        ? (n) => (Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)).toFixed(decimal)
        : fmtNum;
      // for decimal use raw tween without rounding to int
      if (decimal > 0) {
        const duration = 1600, start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = formatter(to * eased);
          if (t < 1) requestAnimationFrame(step); else el.textContent = formatter(to);
        };
        requestAnimationFrame(step);
      } else {
        countUp(el, { from: 0, to, duration: 1800, formatter });
      }
    });
    root.querySelectorAll('[data-bar-width]').forEach(el => {
      requestAnimationFrame(() => el.style.width = el.getAttribute('data-bar-width'));
    });
  });
};

export const renderPillars = () => {
  const markup = html`
    <div class="bg-section-grad">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">核心差异化</div>
          <h2 class="section-title mt-3">两大支柱，让客户 <span class="text-brand-600">用得起、用得稳</span></h2>
          <p class="mt-3 text-slate-600">既不是"单点便宜"，也不是"BIN 多就好"。两者组合，才是跨境支付降本提效的真正解法。</p>
        </div>

        <div class="mt-12 grid lg:grid-cols-2 gap-6">
          ${PILLARS.map((p, idx) => html`
            <div class="soft-card p-8 reveal" style="transition-delay:${idx * 100}ms">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center text-2xl shadow-glow">
                  <i class="${p.icon}"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="chip">${p.tag}</span>
                  <h3 class="mt-3 text-xl font-bold">${p.title}</h3>
                  <p class="mt-2 text-slate-600 leading-relaxed">${p.desc}</p>
                  <ul class="mt-4 space-y-2">
                    ${p.bullets.map(b => html`<li class="flex items-center gap-2 text-sm text-ink-800"><i class="ri-checkbox-circle-fill text-brand-600"></i>${b}</li>`).join('')}
                  </ul>
                  <a href="${p.link}" class="btn-ghost mt-5">${p.linkText} <i class="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  mount('#pillars', markup);
};
