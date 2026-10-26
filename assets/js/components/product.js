import { html, mount } from '../utils.js';
import { cardSVG } from './hero.js';

export const renderProduct = () => {
  const binRows = [
    { brand: 'VISA',     count: '120+', regions: 'US · UK · HK · SG · EU', good: 'AI 平台 / 广告 / 订阅',       color: 'from-brand-500 to-brand-700', ic: '🟦' },
    { brand: 'MasterCard', count: '80+', regions: 'US · UK · HK · EU',      good: '广告投放 / 电商 / 订阅',     color: 'from-rose-500 to-amber-500',  ic: '🟥' },
    { brand: 'Discover', count: '20+',  regions: 'US',                       good: '美国本土 / 风险分散 / 轮换', color: 'from-amber-500 to-orange-600', ic: '🟧' },
  ];

  const abilities = [
    { group: '开卡', icon: 'ri-add-box-line', items: ['即时开卡 / 批量开卡', '单用途 / 多用途卡', '可重复充值 · 可冻结 / 注销'] },
    { group: '管控', icon: 'ri-shield-user-line', items: ['单卡 / 总额度限制', '商户白名单 · MCC 限制', '一账户一卡 · 防关联'] },
    { group: '卡与币种', icon: 'ri-coins-line', items: ['USD / EUR / HKD 等多币种', 'Visa / MasterCard / Discover', '可申请 Apple Pay / Google Pay【待确认】'] },
    { group: '充值', icon: 'ri-wallet-3-line', items: ['USDT 加密货币', '银行电汇 · 本地支付', '到账时效：5 – 30 分钟'] },
    { group: '管理', icon: 'ri-dashboard-3-line', items: ['实时交易 · 余额', '账单导出 · 对账', '子账号 · 团队 · 权限'] },
    { group: '安全', icon: 'ri-shield-check-line', items: ['端到端加密 · 3DS', '智能风控 · 异常拦截', '争议处理 · 全程跟踪'] },
  ];

  const markup = html`
    <div id="product-anchor" class="bg-white">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">产品 Product · 虚拟卡</div>
          <h2 class="section-title mt-3">多 BIN · 多卡组织，<span class="text-brand-600">按场景精准匹配</span></h2>
          <p class="mt-3 text-slate-600">BIN 的数量和广度，直接决定了跨境支付的通过率、稳定性与可切换空间。</p>
        </div>

        <!-- BIN cards row -->
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          ${binRows.map((b, i) => html`
            <div class="soft-card p-6 reveal" style="transition-delay:${i*80}ms">
              <div class="aspect-[320/200] w-full mb-4">
                ${cardSVG({ brand: b.brand === 'VISA' ? 'VISA' : b.brand === 'MasterCard' ? 'MC' : 'DISCOVER',
                            bin: b.brand === 'VISA' ? '4532 01' : b.brand === 'MasterCard' ? '5399 02' : '6011 04',
                            theme: b.brand === 'VISA' ? 'brand' : b.brand === 'MasterCard' ? 'violet' : 'cyan' })}
              </div>
              <div class="flex items-center justify-between">
                <div class="font-extrabold text-lg">${b.brand}</div>
                <span class="chip">${b.count} BIN</span>
              </div>
              <div class="mt-3 text-xs text-slate-500">覆盖地区</div>
              <div class="text-sm font-semibold">${b.regions}</div>
              <div class="mt-2 text-xs text-slate-500">擅长场景</div>
              <div class="text-sm font-semibold">${b.good}</div>
            </div>
          `).join('')}
        </div>

        <!-- MCC explainer banner -->
        <div class="mt-10 rounded-2xl overflow-hidden grad-border p-6 lg:p-8 reveal relative bg-gradient-to-br from-brand-50 to-white">
          <div class="grid lg:grid-cols-5 gap-6 items-center">
            <div class="lg:col-span-3">
              <div class="chip">MCC 场景管控</div>
              <h3 class="mt-3 text-2xl font-extrabold">卡类型不同 → 费率不同 → 可用场景不同</h3>
              <p class="mt-2 text-slate-600 leading-relaxed">
                不同卡产品通过 MCC 限定有效使用场景。既能让我们敢给更优费率，又能帮客户控风险、避"误伤"。
                当交易越界，网络侧直接拒绝并提示用户切换对应卡产品。
              </p>
              <div class="mt-4 grid sm:grid-cols-3 gap-2 text-xs">
                <div class="rounded-xl bg-white p-3 border border-slate-100">
                  <div class="font-bold text-brand-600">AI 采购</div>
                  <div class="text-slate-500 mt-0.5">MCC 5734, 7372, 5968</div>
                </div>
                <div class="rounded-xl bg-white p-3 border border-slate-100">
                  <div class="font-bold text-cyan-600">广告服务</div>
                  <div class="text-slate-500 mt-0.5">MCC 7311, 7372</div>
                </div>
                <div class="rounded-xl bg-white p-3 border border-slate-100">
                  <div class="font-bold text-violet-600">通用消费</div>
                  <div class="text-slate-500 mt-0.5">不限 MCC</div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-2">
              <div class="rounded-2xl bg-ink-900 text-white p-5 space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <i class="ri-checkbox-circle-fill text-emerald-400"></i>
                  <span>AI 采购卡 → 支付 OpenAI</span>
                  <span class="ml-auto chip chip-dark text-emerald-300 border-emerald-300/30">通过</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="ri-checkbox-circle-fill text-emerald-400"></i>
                  <span>广告专用卡 → Facebook Ads</span>
                  <span class="ml-auto chip chip-dark text-emerald-300 border-emerald-300/30">通过</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="ri-close-circle-fill text-rose-400"></i>
                  <span>广告专用卡 → 跨境电商付款</span>
                  <span class="ml-auto chip chip-dark text-rose-300 border-rose-300/30">拒绝</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="ri-close-circle-fill text-rose-400"></i>
                  <span>AI 采购卡 → 餐饮消费</span>
                  <span class="ml-auto chip chip-dark text-rose-300 border-rose-300/30">拒绝</span>
                </div>
                <div class="pt-2 border-t border-white/10 text-xs text-white/60">
                  <i class="ri-information-line"></i> 实际 MCC 范围以合同为准。
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Abilities grid -->
        <div class="mt-12 reveal">
          <h3 class="text-center text-xl font-extrabold">完整的产品能力矩阵</h3>
          <p class="text-center text-sm text-slate-500 mt-1">从开卡到对账，一站式覆盖跨境用卡全链路。</p>
          <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${abilities.map((g, i) => html`
              <div class="soft-card p-6 reveal" style="transition-delay:${i*60}ms">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-xl">
                    <i class="${g.icon}"></i>
                  </div>
                  <div class="font-bold text-lg">${g.group}</div>
                </div>
                <ul class="mt-4 space-y-2">
                  ${g.items.map(x => html`<li class="flex gap-2 text-sm text-slate-700"><i class="ri-checkbox-circle-fill text-emerald-500 mt-0.5"></i>${x}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  mount('#product', markup);
};
