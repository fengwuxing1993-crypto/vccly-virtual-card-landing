import { PLANS, RATES } from '../data.js';
import { html, mount, $, $$, fmtMoney, toInt, toNum } from '../utils.js';

const accentMap = {
  brand: { ring: 'ring-brand-500', ic: 'from-brand-500 to-brand-700', bar: 'bg-brand-600', hl: 'text-brand-600' },
  cyan:  { ring: 'ring-cyan-500',  ic: 'from-cyan-400 to-brand-600',  bar: 'bg-cyan-600',  hl: 'text-cyan-600' },
  violet:{ ring: 'ring-violet-500',ic: 'from-violet-500 to-brand-700',bar: 'bg-violet-600',hl: 'text-violet-600' },
};

export const renderPricing = () => {
  const planCard = (p, idx) => {
    const a = accentMap[p.accent] || accentMap.brand;
    return html`
      <div class="relative soft-card p-7 ${p.featured ? `ring-2 ${a.ring} shadow-glow` : ''} reveal" style="transition-delay:${idx * 100}ms">
        ${p.featured ? html`<span class="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-600 text-white border-brand-600">⭐ 热门推荐</span>` : ''}
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${a.ic} text-white flex items-center justify-center text-xl">
            <i class="ri-bank-card-2-line"></i>
          </div>
          <div>
            <div class="font-extrabold text-xl">${p.name}</div>
            <div class="text-xs text-slate-500">${p.enName}</div>
          </div>
        </div>
        <div class="mt-4 pb-4 border-b border-slate-100">
          <div class="text-xs text-slate-500">目标客户</div>
          <div class="text-sm font-semibold">${p.target}</div>
          <div class="mt-2 text-xs text-slate-500">MCC 限定</div>
          <div class="text-sm font-semibold">${p.mcc}</div>
        </div>
        <div class="mt-4">
          <div class="text-xs text-slate-500 mb-1">核心卖点</div>
          <div class="text-xl font-extrabold ${a.hl}">${p.highlight}</div>
        </div>
        <ul class="mt-4 space-y-2">
          ${p.features.map(f => html`<li class="flex gap-2 text-sm text-slate-700"><i class="${f.icon} ${a.hl} mt-0.5"></i>${f.text}</li>`).join('')}
        </ul>
        <div class="mt-5 p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
          <i class="ri-information-line ${a.hl}"></i> 典型场景：${p.scene}
        </div>
        <div class="mt-5 flex gap-2">
          <a href="#apply" class="btn-primary flex-1">${p.cta}</a>
          <a href="#calculator" class="btn-ghost">
            <i class="ri-calculator-line"></i>
          </a>
        </div>
      </div>
    `;
  };

  const compareRows = [
    { k: '开卡费（单张）', us: '低至 $0.3', bank: '通常不支持', industry: '$1.5 – $2.5' },
    { k: '支付手续费',     us: '0.8% – 1.5%', bank: '0 – 1%（有年费）', industry: '1.5% – 2.5%' },
    { k: '充值方式',       us: 'USDT · 电汇 · 本地支付', bank: '仅本币银行账户', industry: '依机构不同' },
    { k: '多币种',         us: '支持（Visa/MC/Discover）', bank: '支持（受限）', industry: '多为单币' },
    { k: '批量开卡',       us: '支持（阶梯价）', bank: '不支持', industry: '支持（价格偏高）' },
    { k: 'BIN 可选 / 轮换', us: '支持', bank: '不支持', industry: '少数支持' },
    { k: '月费',           us: '$0', bank: '年费 $95 – $550', industry: '$0 – $20 不等' },
    { k: 'API / Webhook',  us: '原生支持', bank: '不支持', industry: '支持（质量不一）' },
  ];

  const markup = html`
    <div id="pricing" class="bg-section-grad">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">定价 Pricing · 费率组合</div>
          <h2 class="section-title mt-3">按客户成本结构，<span class="text-brand-600">匹配不同费率组合</span></h2>
          <p class="mt-3 text-slate-600">不做"一个费率打天下"。不同卡产品 → 不同费率 → MCC 限定可有效使用的场景。</p>
        </div>

        <!-- Plan cards -->
        <div class="mt-12 grid lg:grid-cols-3 gap-6">
          ${PLANS.map(planCard).join('')}
        </div>

        <!-- MCC explainer -->
        <div class="mt-10 soft-card p-6 lg:p-8 reveal">
          <div class="flex flex-col lg:flex-row gap-6 lg:items-center">
            <div class="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-2xl">
              <i class="ri-shield-flash-line"></i>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold">MCC 场景管控：换取更优费率、更稳通过率</h3>
              <p class="mt-1 text-sm text-slate-600 leading-relaxed">
                不同卡产品通过 MCC（商户类别码）限定有效场景（如 AI 采购卡限定软件/SaaS，广告专用卡限定广告服务）。
                越界交易会被拒绝并提示，既保护风控，又让我们敢于给出更优费率。
              </p>
            </div>
            <a href="#faq" class="btn-ghost shrink-0">了解 MCC 规则 <i class="ri-arrow-right-line"></i></a>
          </div>
        </div>

        <!-- Compare table -->
        <div class="mt-10 reveal">
          <h3 class="text-xl font-extrabold text-center">综合成本对比（不点名）</h3>
          <p class="text-center text-sm text-slate-500 mt-1">对比"行业常见水平"与"银行信用卡"，具体数字以合同为准</p>
          <div class="mt-6 overflow-x-auto soft-card">
            <table class="min-w-full text-sm">
              <thead class="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th class="text-left px-5 py-3 font-semibold">费用项 / 能力</th>
                  <th class="text-left px-5 py-3 font-semibold text-brand-700">${'我们 (VCCLY)'}</th>
                  <th class="text-left px-5 py-3 font-semibold">银行信用卡</th>
                  <th class="text-left px-5 py-3 font-semibold">行业常见虚拟卡</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${compareRows.map((r, i) => html`
                  <tr class="${i % 2 ? 'bg-slate-50/40' : ''}">
                    <td class="px-5 py-3 font-medium text-ink-800">${r.k}</td>
                    <td class="px-5 py-3 font-semibold text-brand-700"><i class="ri-checkbox-circle-fill mr-1"></i>${r.us}</td>
                    <td class="px-5 py-3 text-slate-600">${r.bank}</td>
                    <td class="px-5 py-3 text-slate-600">${r.industry}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <p class="mt-3 text-xs text-slate-500 text-center">
            * 估算值。实际费率以合同为准，支付"更便宜"不等于"安全缩水"：风控、3DS、资金保障仍保持高标准。
          </p>
        </div>
      </div>
    </div>
  `;
  mount('#pricing', markup);
};

const openFeeAtQty = (plan, qty) => {
  const t = [...plan.openFeeTiered].sort((a, b) => a.qty - b.qty);
  let fee = t[0].fee;
  for (const tier of t) { if (qty >= tier.qty) fee = tier.fee; }
  return fee;
};

const computeCost = (planKey, cardQty, monthlySpend) => {
  const p = RATES[planKey];
  const fee = openFeeAtQty(p, cardQty);
  const open = fee * cardQty;
  const tx = p.txFeeRate * monthlySpend;
  const topup = p.topupFeeRate * monthlySpend; // assume monthly topup equals monthly spend
  const month = p.monthlyFee * cardQty;
  const total = open + tx + topup + month;

  const indOpen = p.industryOpenFee * cardQty;
  const indTx = p.industryTxFeeRate * monthlySpend;
  const indTopup = p.industryTopupFeeRate * monthlySpend;
  const indTotal = indOpen + indTx + indTopup;

  const save = Math.max(0, indTotal - total);
  const savePct = indTotal > 0 ? (save / indTotal) * 100 : 0;

  return { fee, open, tx, topup, month, total, indTotal, save, savePct };
};

export const renderCalculator = () => {
  const markup = html`
    <div id="calculator" class="bg-white">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">成本计算器 Calculator</div>
          <h2 class="section-title mt-3">算一算，你每月能 <span class="text-brand-600">省多少</span></h2>
          <p class="mt-3 text-slate-600">按真实用量测算综合成本与节省金额。所有数字为估算值，以实际合同为准。</p>
        </div>

        <div class="mt-10 grid lg:grid-cols-5 gap-6">
          <!-- Inputs -->
          <div class="lg:col-span-2 soft-card p-6 reveal">
            <h3 class="font-bold text-lg mb-5">输入你的用量</h3>

            <label class="block text-sm font-semibold mb-2">卡产品 / 客户类型</label>
            <div class="grid grid-cols-3 gap-2 mb-5" id="plan-tabs">
              <button type="button" class="plan-tab py-2 rounded-lg text-sm font-semibold border-2 transition" data-plan="ai">AI 采购</button>
              <button type="button" class="plan-tab py-2 rounded-lg text-sm font-semibold border-2 transition" data-plan="ads">广告投放</button>
              <button type="button" class="plan-tab py-2 rounded-lg text-sm font-semibold border-2 transition" data-plan="universal">通用</button>
            </div>

            <label class="block text-sm font-semibold mb-2" id="qty-label">预计开卡数量</label>
            <div class="flex items-center gap-3 mb-5">
              <input type="range" min="1" max="500" step="1" value="50" id="qty-range" class="flex-1 accent-brand-600"/>
              <input type="number" min="1" value="50" id="qty-input" class="w-24 px-3 py-2 rounded-lg border border-slate-200 text-center font-semibold"/>
            </div>

            <label class="block text-sm font-semibold mb-2" id="spend-label">预计月充值 / 消费（USD）</label>
            <div class="flex items-center gap-3 mb-5">
              <input type="range" min="500" max="200000" step="500" value="20000" id="spend-range" class="flex-1 accent-brand-600"/>
              <input type="number" min="0" value="20000" id="spend-input" class="w-32 px-3 py-2 rounded-lg border border-slate-200 text-center font-semibold"/>
            </div>

            <div class="p-3 rounded-lg bg-brand-50 border border-brand-100 text-xs text-brand-700 flex gap-2">
              <i class="ri-lightbulb-flash-line text-base"></i>
              <span>默认示例：AI 采购 50 张卡 + 月充值 $20,000。拖动滑块查看成本变化。</span>
            </div>
          </div>

          <!-- Results -->
          <div class="lg:col-span-3 reveal">
            <div class="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-brand-600 to-brand-800 text-white relative overflow-hidden">
              <div class="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-accent-cyan/20 blur-3xl"></div>
              <div class="relative">
                <div class="text-sm text-white/70">在 <span id="result-plan" class="font-semibold text-white">AI 采购卡</span>下，你每月综合成本约为</div>
                <div class="mt-2 text-5xl font-extrabold tabular-nums">$<span id="result-total">0</span></div>
                <div class="mt-4 flex flex-wrap gap-4 text-sm">
                  <div class="chip-dark chip"><i class="ri-arrow-down-line text-accent-green"></i> 对比行业常见节省 <b class="text-white ml-1">$<span id="result-save">0</span></b></div>
                  <div class="chip-dark chip"><i class="ri-percent-line text-accent-cyan"></i> 节省比例 <b class="text-white ml-1"><span id="result-save-pct">0</span>%</b></div>
                </div>
                <div class="mt-6 flex gap-2 flex-wrap">
                  <a href="#apply" class="btn-primary bg-white !text-brand-700 hover:brightness-105">立即申请开户 <i class="ri-arrow-right-line"></i></a>
                  <a href="#apply" class="btn-secondary">联系销售</a>
                </div>
              </div>
            </div>

            <div class="mt-4 grid sm:grid-cols-2 gap-4">
              <div class="soft-card p-5">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">费用拆解（本方案）</div>
                <ul class="space-y-2 text-sm">
                  <li class="flex justify-between"><span class="text-slate-600">开卡费（单张 $<span id="row-fee">0</span>）</span><span class="font-semibold">$<span id="row-open">0</span></span></li>
                  <li class="flex justify-between"><span class="text-slate-600">支付手续费</span><span class="font-semibold">$<span id="row-tx">0</span></span></li>
                  <li class="flex justify-between"><span class="text-slate-600">充值手续费</span><span class="font-semibold">$<span id="row-topup">0</span></span></li>
                  <li class="flex justify-between"><span class="text-slate-600">月费</span><span class="font-semibold">$<span id="row-month">0</span></span></li>
                  <li class="pt-2 border-t border-slate-100 flex justify-between"><span class="font-semibold">合计</span><span class="font-extrabold text-brand-700">$<span id="row-total">0</span></span></li>
                </ul>
              </div>
              <div class="soft-card p-5">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">对比行业常见水平</div>
                <ul class="space-y-2 text-sm">
                  <li class="flex justify-between"><span class="text-slate-600">行业常见综合成本</span><span class="font-semibold">$<span id="row-ind">0</span></span></li>
                  <li class="flex justify-between"><span class="text-slate-600">我们综合成本</span><span class="font-semibold text-brand-700">$<span id="row-us">0</span></span></li>
                  <li class="pt-2 border-t border-slate-100 flex justify-between"><span class="font-semibold">您的净节省</span><span class="font-extrabold text-emerald-600">$<span id="row-save">0</span></span></li>
                </ul>
                <div class="mt-3 text-xs text-slate-500">估算值。实际数值以合同与真实用量为准。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  mount('#calculator', markup);

  // ---- Behavior ----
  let currentPlan = 'ai';

  const el = {
    tabs: $$('.plan-tab'),
    qtyR: $('#qty-range'),
    qtyI: $('#qty-input'),
    spR:  $('#spend-range'),
    spI:  $('#spend-input'),
    plan: $('#result-plan'),
    total:$('#result-total'),
    save: $('#result-save'),
    savePct: $('#result-save-pct'),
    fee:  $('#row-fee'),
    open: $('#row-open'),
    tx:   $('#row-tx'),
    topup:$('#row-topup'),
    month:$('#row-month'),
    rowTotal:$('#row-total'),
    rowInd:$('#row-ind'),
    rowUs: $('#row-us'),
    rowSave:$('#row-save'),
    qtyLabel: $('#qty-label'),
    spendLabel: $('#spend-label'),
  };

  const fmt = (n) => Math.round(n).toLocaleString('en-US');

  const update = () => {
    const qty = Math.max(1, toInt(el.qtyI.value, 1));
    const spend = Math.max(0, toNum(el.spI.value, 0));
    el.qtyR.value = Math.min(500, qty);
    el.spR.value  = Math.min(200000, spend);

    const r = computeCost(currentPlan, qty, spend);

    el.plan.textContent = RATES[currentPlan].label;
    el.total.textContent = fmt(r.total);
    el.save.textContent = fmt(r.save);
    el.savePct.textContent = r.savePct.toFixed(1);
    el.fee.textContent = r.fee.toFixed(2);
    el.open.textContent = fmt(r.open);
    el.tx.textContent = fmt(r.tx);
    el.topup.textContent = fmt(r.topup);
    el.month.textContent = fmt(r.month);
    el.rowTotal.textContent = fmt(r.total);
    el.rowInd.textContent = fmt(r.indTotal);
    el.rowUs.textContent = fmt(r.total);
    el.rowSave.textContent = fmt(r.save);
  };

  const setPlan = (plan) => {
    currentPlan = plan;
    el.tabs.forEach(t => {
      const active = t.dataset.plan === plan;
      t.classList.toggle('bg-brand-600', active);
      t.classList.toggle('text-white',   active);
      t.classList.toggle('border-brand-600', active);
      t.classList.toggle('border-slate-200', !active);
      t.classList.toggle('text-slate-700', !active);
      t.classList.toggle('hover:border-brand-300', !active);
    });
    // tweak labels per plan
    if (plan === 'ads') {
      el.qtyLabel.textContent = '预计广告账户 / 卡数量';
      el.spendLabel.textContent = '预计月广告消费（USD）';
    } else if (plan === 'ai') {
      el.qtyLabel.textContent = '预计开卡数量';
      el.spendLabel.textContent = '预计月充值金额（USD）';
    } else {
      el.qtyLabel.textContent = '预计开卡数量';
      el.spendLabel.textContent = '预计月消费金额（USD）';
    }
    update();
  };

  el.tabs.forEach(t => t.addEventListener('click', () => setPlan(t.dataset.plan)));
  el.qtyR.addEventListener('input', () => { el.qtyI.value = el.qtyR.value; update(); });
  el.qtyI.addEventListener('input', update);
  el.spR.addEventListener('input', () => { el.spI.value = el.spR.value; update(); });
  el.spI.addEventListener('input', update);

  // init
  setPlan('ai');
};
