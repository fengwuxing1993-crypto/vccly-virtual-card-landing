import { SOLUTIONS } from '../data.js';
import { html, mount } from '../utils.js';

const accentMap = {
  brand: { chip: 'bg-brand-50 text-brand-700 border-brand-100', ic: 'from-brand-500 to-brand-700', pr: 'text-brand-600' },
  cyan:  { chip: 'bg-cyan-50 text-cyan-700 border-cyan-100',   ic: 'from-cyan-400 to-brand-600',   pr: 'text-cyan-600'  },
  violet:{ chip: 'bg-violet-50 text-violet-700 border-violet-100', ic: 'from-violet-500 to-brand-700', pr: 'text-violet-600'},
  green: { chip: 'bg-emerald-50 text-emerald-700 border-emerald-100', ic: 'from-emerald-400 to-cyan-600', pr: 'text-emerald-600'},
  amber: { chip: 'bg-amber-50 text-amber-700 border-amber-100', ic: 'from-amber-400 to-amber-600',   pr: 'text-amber-600' },
};

const prioStyle = (p) => p === 'P0' ? 'bg-brand-600 text-white' : p === 'P1' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-700';

export const renderSolutions = () => {
  const [p01, p02, ...rest] = SOLUTIONS;

  const featured = (sol) => {
    const a = accentMap[sol.accent] || accentMap.brand;
    return html`
      <div id="${sol.id}" class="soft-card p-7 lg:p-8 relative overflow-hidden reveal grad-border">
        <div class="absolute -right-14 -top-14 w-56 h-56 rounded-full bg-gradient-to-br ${a.ic} opacity-10 blur-2xl"></div>
        <div class="flex items-start gap-4 relative">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${a.ic} text-white flex items-center justify-center text-2xl">
            <i class="${sol.icon}"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-bold px-2 py-0.5 rounded ${prioStyle(sol.priority)}">${sol.priority}</span>
              ${sol.badge ? html`<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700">${sol.badge}</span>` : ''}
              <span class="text-xs text-slate-500">${sol.audience}</span>
            </div>
            <h3 class="mt-2 text-2xl font-extrabold tracking-tight">${sol.title}</h3>
            <p class="mt-1 ${a.pr} font-semibold">${sol.tagline}</p>

            <div class="mt-5 grid sm:grid-cols-2 gap-6">
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">痛点</div>
                <ul class="space-y-1.5">
                  ${sol.pains.map(x => html`<li class="flex gap-2 text-sm text-slate-700"><i class="ri-close-circle-fill text-rose-400 mt-0.5"></i><span>${x}</span></li>`).join('')}
                </ul>
              </div>
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">我们的方案</div>
                <ul class="space-y-1.5">
                  ${sol.features.map(x => html`<li class="flex gap-2 text-sm text-slate-700"><i class="ri-checkbox-circle-fill text-emerald-500 mt-0.5"></i><span>${x}</span></li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <a href="#apply" class="btn-primary">申请开户</a>
              <a href="#calculator" class="btn-ghost">测算节省金额 <i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const normal = (sol) => {
    const a = accentMap[sol.accent] || accentMap.brand;
    return html`
      <a href="#${sol.id}" id="${sol.id}" class="soft-card p-6 group reveal block">
        <div class="flex items-start gap-3">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${a.ic} text-white flex items-center justify-center text-xl">
            <i class="${sol.icon}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold px-1.5 py-0.5 rounded ${prioStyle(sol.priority)}">${sol.priority}</span>
              <h3 class="text-base font-bold truncate">${sol.title}</h3>
            </div>
            <p class="text-sm ${a.pr} font-semibold mt-1 line-clamp-1">${sol.tagline}</p>
            <ul class="mt-3 space-y-1">
              ${sol.features.slice(0, 3).map(x => html`<li class="flex gap-2 text-xs text-slate-600"><i class="ri-check-line ${a.pr}"></i>${x}</li>`).join('')}
            </ul>
          </div>
          <i class="ri-arrow-right-up-line text-slate-300 group-hover:text-brand-600 transition"></i>
        </div>
      </a>
    `;
  };

  const markup = html`
    <div class="bg-white">
      <div class="container-x py-20">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div class="max-w-2xl">
            <div class="eyebrow">场景方案 Solutions</div>
            <h2 class="section-title mt-3">按客户优先级，<span class="text-brand-600">把 P0 场景做深做透</span></h2>
            <p class="mt-3 text-slate-600">不同客户的卡数量、支付频次与成本结构差异巨大。我们按场景出"卡产品 + 费率组合 + MCC 范围"的组合解法。</p>
          </div>
          <a href="#pricing" class="btn-ghost shrink-0">查看对应费率组合 <i class="ri-arrow-right-line"></i></a>
        </div>

        <!-- P0 featured -->
        <div class="mt-10 grid lg:grid-cols-2 gap-6">
          ${featured(p01)}
          ${featured(p02)}
        </div>

        <!-- Rest -->
        <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${rest.map(normal).join('')}
        </div>
      </div>
    </div>
  `;
  mount('#solutions', markup);
};
