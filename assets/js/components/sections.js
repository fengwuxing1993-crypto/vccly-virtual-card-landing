import { TESTIMONIALS, FAQ, BRAND } from '../data.js';
import { html, mount, $, $$, avatarUrl } from '../utils.js';

export const renderTestimonials = () => {
  const markup = html`
    <div class="bg-section-grad">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">客户评价 Testimonials</div>
          <h2 class="section-title mt-3">来自真实客户的 <span class="text-brand-600">真实反馈</span></h2>
          <p class="mt-3 text-slate-600">服务于全球 AI 中转站、广告代理、跨境电商与 BaaS 平台。</p>
        </div>
        <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          ${TESTIMONIALS.map((t, i) => html`
            <div class="soft-card p-6 reveal" style="transition-delay:${i*80}ms">
              <div class="flex items-center gap-1 text-amber-400 text-sm">
                ${'<i class="ri-star-fill"></i>'.repeat(5)}
              </div>
              <p class="mt-3 text-sm text-slate-700 leading-relaxed">"${t.quote}"</p>
              <div class="mt-5 flex items-center gap-3">
                <img src="${avatarUrl(t.avatarSeed)}" alt="${t.name}" class="w-10 h-10 rounded-full"/>
                <div>
                  <div class="font-semibold text-sm">${t.name}</div>
                  <div class="text-xs text-slate-500">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  mount('#testimonials', markup);
};

export const renderCompliance = () => {
  const items = [
    { icon: 'ri-shield-keyhole-line', title: '资金托管', desc: '客户资金由合作持牌机构托管，与平台自有资金严格隔离。' },
    { icon: 'ri-lock-password-line',  title: '端到端加密', desc: 'TLS 1.3 全链路加密；敏感数据 AES-256 存储。' },
    { icon: 'ri-radar-line',          title: '智能风控',   desc: '多维度实时风控与规则引擎，3DS 二次验证降低拒付。' },
    { icon: 'ri-file-shield-2-line',  title: '合规资质',   desc: '香港公司主体、MSO 牌照【待确认】、与持牌发卡行合作。' },
    { icon: 'ri-service-line',        title: '7×24 支持',  desc: 'Telegram / Email / WhatsApp 多渠道支持，重大故障 30 分钟响应。' },
    { icon: 'ri-flow-chart',          title: '上游直连',   desc: '一级服务商直连，无中间加价、无链路丢失。' },
  ];
  const markup = html`
    <div id="about" class="bg-white">
      <div class="container-x py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <div class="eyebrow">合规与安全 Compliance</div>
            <h2 class="section-title mt-3">面向企业的 <span class="text-brand-600">安全与合规底座</span></h2>
            <p class="mt-3 text-slate-600 leading-relaxed">
              作为跨境支付一级服务商，${BRAND.name} 与持牌发卡机构深度合作，具备完整的 KYC/KYB、交易风控、资金清结算与争议处理能力。<br/>
              更低的综合成本，不代表安全缩水。
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#apply" class="btn-primary">申请开户</a>
              <a href="#" class="btn-ghost">查看合规资质 <i class="ri-arrow-right-line"></i></a>
            </div>
            <div class="mt-8 grid grid-cols-3 gap-3">
              <div class="soft-card p-4 text-center">
                <div class="text-2xl font-extrabold text-brand-600">99.99%</div>
                <div class="text-xs text-slate-500 mt-1">API 可用性</div>
              </div>
              <div class="soft-card p-4 text-center">
                <div class="text-2xl font-extrabold text-brand-600">99.2%</div>
                <div class="text-xs text-slate-500 mt-1">支付成功率</div>
              </div>
              <div class="soft-card p-4 text-center">
                <div class="text-2xl font-extrabold text-brand-600">24/7</div>
                <div class="text-xs text-slate-500 mt-1">风控与客服</div>
              </div>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 reveal">
            ${items.map(it => html`
              <div class="soft-card p-5">
                <div class="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl">
                  <i class="${it.icon}"></i>
                </div>
                <div class="mt-3 font-semibold">${it.title}</div>
                <div class="text-sm text-slate-600 mt-1 leading-relaxed">${it.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  mount('#compliance', markup);
};

export const renderFAQ = () => {
  const markup = html`
    <div id="faq" class="bg-section-grad">
      <div class="container-x py-20">
        <div class="grid lg:grid-cols-5 gap-10 items-start">
          <div class="lg:col-span-2 reveal">
            <div class="eyebrow">FAQ</div>
            <h2 class="section-title mt-3">常见问题</h2>
            <p class="mt-3 text-slate-600">没找到想要的答案？随时联系我们。</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <a href="#apply" class="btn-primary">申请开户</a>
              <a href="mailto:hello@vccly.io" class="btn-ghost">联系销售 <i class="ri-mail-line"></i></a>
            </div>
          </div>
          <div class="lg:col-span-3 space-y-3 reveal">
            ${FAQ.map((f, i) => html`
              <details class="soft-card group p-5 open:ring-1 open:ring-brand-200" ${i === 0 ? 'open' : ''}>
                <summary class="flex items-center justify-between cursor-pointer list-none font-semibold text-ink-900">
                  <span>${f.q}</span>
                  <i class="ri-add-line text-xl text-slate-400 group-open:rotate-45 transition"></i>
                </summary>
                <p class="mt-3 text-sm text-slate-600 leading-relaxed">${f.a}</p>
              </details>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  mount('#faq', markup);
};

export const renderApply = () => {
  const markup = html`
    <div id="apply" class="bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
      <div class="container-x py-20 relative">
        <div class="grid lg:grid-cols-5 gap-10">
          <div class="lg:col-span-2 reveal">
            <div class="eyebrow">申请开户 Open Account</div>
            <h2 class="section-title mt-3">准备好开始了吗？</h2>
            <p class="mt-3 text-slate-600 leading-relaxed">
              留下信息，我们的商务同学将在 1 个工作日内联系你，提供 1v1 开户与方案咨询。
            </p>
            <ul class="mt-6 space-y-3 text-sm">
              <li class="flex gap-2"><i class="ri-time-line text-brand-600 text-lg"></i>24 小时内响应</li>
              <li class="flex gap-2"><i class="ri-user-star-line text-brand-600 text-lg"></i>专属商务 1v1 服务</li>
              <li class="flex gap-2"><i class="ri-shield-user-line text-brand-600 text-lg"></i>信息严格保密</li>
              <li class="flex gap-2"><i class="ri-calculator-line text-brand-600 text-lg"></i>定制费率方案</li>
            </ul>

            <div class="mt-8 soft-card p-5">
              <div class="text-sm font-semibold mb-3">也可直接通过以下方式联系</div>
              <div class="space-y-2 text-sm text-slate-700">
                <div class="flex items-center gap-2"><i class="ri-mail-line text-brand-600"></i> sales@vccly.io</div>
                <div class="flex items-center gap-2"><i class="ri-telegram-line text-brand-600"></i> @vccly_support</div>
                <div class="flex items-center gap-2"><i class="ri-whatsapp-line text-brand-600"></i> +852 【待确认】</div>
                <div class="flex items-center gap-2"><i class="ri-time-line text-brand-600"></i> 工作时间：全年 7×24</div>
              </div>
            </div>
          </div>

          <form id="apply-form" class="lg:col-span-3 soft-card p-7 lg:p-8 reveal space-y-5" novalidate>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold mb-1.5">联系人姓名 <span class="text-rose-500">*</span></label>
                <input required type="text" name="name" placeholder="张三 / John Doe" class="form-input"/>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1.5">公司 / 团队名称 <span class="text-rose-500">*</span></label>
                <input required type="text" name="company" placeholder="Acme Inc." class="form-input"/>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1.5">工作邮箱 <span class="text-rose-500">*</span></label>
                <input required type="email" name="email" placeholder="you@company.com" class="form-input"/>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1.5">手机 / WhatsApp / Telegram <span class="text-rose-500">*</span></label>
                <input required type="text" name="contact" placeholder="+86 138****0000 / @yourid" class="form-input"/>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1.5">客户类型 <span class="text-rose-500">*</span></label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${[
                  { v: 'ai', label: 'AI Token 中转站', icon: 'ri-robot-2-line', priority: true },
                  { v: 'ads', label: '广告投放', icon: 'ri-advertisement-line', priority: true },
                  { v: 'ecom', label: '跨境电商', icon: 'ri-shopping-bag-3-line' },
                  { v: 'saas', label: 'SaaS/AI 订阅', icon: 'ri-vip-crown-2-line' },
                  { v: 'exp', label: '企业支出', icon: 'ri-building-2-line' },
                  { v: 'platform', label: '平台发卡', icon: 'ri-cloud-line' },
                ].map(o => html`
                  <label class="relative cursor-pointer">
                    <input type="radio" name="ctype" value="${o.v}" class="peer sr-only" ${o.v === 'ai' ? 'checked' : ''}/>
                    <div class="p-3 rounded-xl border-2 border-slate-200 peer-checked:border-brand-500 peer-checked:bg-brand-50 transition flex items-center gap-2">
                      <i class="${o.icon} text-brand-600"></i>
                      <span class="text-sm font-medium">${o.label}</span>
                      ${o.priority ? html`<span class="ml-auto text-[10px] font-bold text-brand-700">★</span>` : ''}
                    </div>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold mb-1.5">预计开卡数量 <span class="text-rose-500">*</span></label>
                <select name="qty" class="form-input">
                  <option>1 – 10</option>
                  <option>10 – 50</option>
                  <option selected>50 – 200</option>
                  <option>200 – 1,000</option>
                  <option>1,000+</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1.5">预计月充值 / 消费 <span class="text-rose-500">*</span></label>
                <select name="spend" class="form-input">
                  <option>$1k – $5k</option>
                  <option>$5k – $20k</option>
                  <option selected>$20k – $100k</option>
                  <option>$100k – $500k</option>
                  <option>$500k+</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1.5">充值方式偏好（可多选）</label>
              <div class="flex flex-wrap gap-2">
                ${['USDT','银行电汇','本地支付','其他'].map(m => html`
                  <label class="relative cursor-pointer">
                    <input type="checkbox" name="pay" value="${m}" class="peer sr-only"/>
                    <span class="px-3 py-1.5 text-sm rounded-full border-2 border-slate-200 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 transition inline-block">${m}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1.5">需求备注</label>
              <textarea name="note" rows="3" placeholder="简单描述你的业务与需求（可选）" class="form-input resize-none"></textarea>
            </div>

            <label class="flex items-start gap-2 text-sm text-slate-600">
              <input type="checkbox" required name="agree" checked class="mt-1 accent-brand-600"/>
              <span>我已阅读并同意 <a href="#" class="text-brand-600 font-semibold">《隐私政策》</a> 与 <a href="#" class="text-brand-600 font-semibold">《服务条款》</a>。</span>
            </label>

            <div class="flex items-center gap-3">
              <button type="submit" class="btn-primary flex-1 justify-center">提交申请 <i class="ri-send-plane-line"></i></button>
              <span class="text-xs text-slate-500 hidden sm:block">提交后 1 个工作日内联系</span>
            </div>

            <div id="apply-success" class="hidden rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 text-sm">
              <i class="ri-checkbox-circle-fill mr-1"></i> 提交成功！我们将在 1 个工作日内与您联系。(演示：未真实发送)
            </div>
          </form>
        </div>
      </div>

      <style>
        .form-input { width:100%; padding:.65rem .9rem; border-radius:.75rem; border:1px solid #e2e8f0; font-size:.9rem; transition:border-color .15s, box-shadow .15s; background:#fff; }
        .form-input:focus { outline:none; border-color:#2f5efc; box-shadow:0 0 0 3px rgba(47,94,252,.15); }
      </style>
    </div>
  `;
  mount('#apply', markup);

  $('#apply-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.querySelector('input[name=name]').value.trim();
    const email = form.querySelector('input[name=email]').value.trim();
    const contact = form.querySelector('input[name=contact]').value.trim();
    const company = form.querySelector('input[name=company]').value.trim();
    if (!name || !email || !contact || !company) {
      alert('请完整填写必填字段。');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { alert('请输入有效的邮箱地址。'); return; }
    $('#apply-success')?.classList.remove('hidden');
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.innerHTML = '已提交 <i class="ri-check-double-line"></i>';
    btn.classList.add('opacity-75');
  });
};

export const renderBottomCTA = () => {
  mount('#bottom-cta', html`
    <div class="bg-ink-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-10"></div>
      <div class="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl"></div>
      <div class="container-x py-16 relative">
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
          <div class="reveal">
            <h2 class="text-3xl lg:text-4xl font-extrabold tracking-tight">准备好用更低的综合成本<br/>开始跨境支付了吗？</h2>
            <p class="mt-3 text-white/70 max-w-xl">一键申请开户，让专属商务为你定制费率与方案。</p>
          </div>
          <div class="flex flex-wrap gap-3 reveal">
            <a href="#apply" class="btn-primary">申请开户 Open Account</a>
            <a href="#calculator" class="btn-secondary">成本计算器</a>
            <a href="#developers" class="btn-secondary">开发者文档</a>
          </div>
        </div>
      </div>
    </div>
  `);
};

export const renderFloatingActions = () => {
  mount('#floating-actions', html`
    <div class="fixed right-4 bottom-4 z-40 flex flex-col gap-2">
      <a href="#apply" class="w-12 h-12 rounded-full bg-brand-600 text-white shadow-glow flex items-center justify-center hover:brightness-110" title="在线咨询">
        <i class="ri-customer-service-2-line text-xl"></i>
      </a>
      <button id="back-top" class="w-12 h-12 rounded-full bg-white border border-slate-200 text-ink-700 shadow-card flex items-center justify-center hover:text-brand-600 transition opacity-0 pointer-events-none" title="回到顶部">
        <i class="ri-arrow-up-line text-xl"></i>
      </button>
    </div>
  `);

  const backTop = $('#back-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backTop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backTop.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};
