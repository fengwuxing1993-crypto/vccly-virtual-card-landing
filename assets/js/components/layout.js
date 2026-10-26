import { BRAND, NAV } from '../data.js';
import { html, mount, $, $$ } from '../utils.js';

const renderDropdown = (children) => html`
  <div class="absolute left-0 top-full pt-3 w-[560px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
    <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-1">
      ${children.map(c => html`
        <a href="${c.href}" class="flex gap-3 p-3 rounded-xl hover:bg-slate-50 transition group/item">
          <div class="shrink-0 w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl group-hover/item:bg-brand-600 group-hover/item:text-white transition">
            <i class="${c.icon}"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="font-semibold text-ink-900">${c.label}</span>
              ${c.badge ? html`<span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${c.badge === '首要' ? 'bg-brand-600 text-white' : 'bg-amber-100 text-amber-700'}">${c.badge}</span>` : ''}
            </div>
            <div class="text-xs text-slate-500 mt-0.5 line-clamp-2">${c.desc}</div>
          </div>
        </a>
      `).join('')}
    </div>
  </div>
`;

const renderNavItem = (item) => {
  if (!item.children) {
    return html`<a href="${item.href}" class="px-3 py-2 text-[15px] font-medium text-ink-700 hover:text-brand-600 transition">${item.label}</a>`;
  }
  return html`
    <div class="relative group">
      <button class="px-3 py-2 text-[15px] font-medium text-ink-700 hover:text-brand-600 inline-flex items-center gap-1 transition">
        ${item.label} <i class="ri-arrow-down-s-line text-base"></i>
      </button>
      ${renderDropdown(item.children)}
    </div>
  `;
};

export const renderHeader = () => {
  const markup = html`
    <div class="container-x h-16 flex items-center justify-between gap-6">
      <a href="#top" class="flex items-center gap-2 shrink-0">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-glow">
          <i class="ri-bank-card-2-fill text-xl"></i>
        </div>
        <div class="leading-tight">
          <div class="text-lg font-extrabold tracking-tight">${BRAND.name}</div>
          <div class="text-[10px] text-slate-500 -mt-0.5">Virtual Card Platform</div>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-1">
        ${NAV.map(renderNavItem).join('')}
      </nav>

      <div class="flex items-center gap-2">
        <div class="hidden md:flex items-center gap-1 text-sm text-slate-600 border border-slate-200 rounded-full px-3 py-1.5">
          <i class="ri-global-line"></i>
          <button class="font-semibold text-brand-600" data-lang="zh">中文</button>
          <span class="text-slate-300">/</span>
          <button class="hover:text-ink-900" data-lang="en">EN</button>
        </div>
        <a href="#developers" class="hidden sm:inline-flex btn-ghost">
          <i class="ri-code-s-slash-line"></i> 开发者
        </a>
        <a href="#apply" class="btn-primary">
          申请开户 <i class="ri-arrow-right-line"></i>
        </a>
        <button id="menu-toggle" class="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg border border-slate-200 text-ink-800">
          <i class="ri-menu-3-line text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-100 bg-white">
      <div class="container-x py-3 space-y-1">
        ${NAV.map(n => html`
          <details class="group">
            <summary class="flex items-center justify-between py-2 font-medium list-none cursor-pointer">
              <span>${n.label}</span>
              ${n.children ? html`<i class="ri-arrow-down-s-line transition group-open:rotate-180"></i>` : ''}
            </summary>
            ${n.children ? html`
              <div class="pl-3 pb-2 space-y-1">
                ${n.children.map(c => html`<a href="${c.href}" class="block py-1.5 text-sm text-slate-600 hover:text-brand-600"><i class="${c.icon} mr-2 text-brand-500"></i>${c.label}</a>`).join('')}
              </div>
            ` : ''}
          </details>
        `).join('')}
        <div class="pt-2 flex gap-2">
          <a href="#apply" class="btn-primary flex-1">申请开户</a>
          <a href="#developers" class="btn-ghost">开发者</a>
        </div>
      </div>
    </div>
  `;
  mount('#site-header', markup);

  $('#menu-toggle')?.addEventListener('click', () => {
    $('#mobile-menu')?.classList.toggle('hidden');
  });

  $$('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('语言切换为演示入口。正式版将支持中文（/zh/）与英文（/）双语路由与 hreflang。');
    });
  });
};

export const renderFooter = () => {
  const col = (title, items) => html`
    <div>
      <div class="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">${title}</div>
      <ul class="space-y-2 text-sm text-white/80">
        ${items.map(i => html`<li><a href="${i.href}" class="hover:text-white transition">${i.label}</a></li>`).join('')}
      </ul>
    </div>
  `;

  const markup = html`
    <div class="bg-dark-grad text-white">
      <div class="container-x py-14">
        <div class="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div class="col-span-2 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <i class="ri-bank-card-2-fill text-xl"></i>
              </div>
              <div class="text-xl font-extrabold">${BRAND.name}</div>
            </div>
            <p class="text-sm text-white/70 max-w-xs leading-relaxed">
              跨境支付一级服务商。虚拟信用卡 · 多 BIN · 低综合成本 · 开发者友好。为 AI 中转站、广告投放、跨境电商提供稳定可靠的发卡能力。
            </p>
            <div class="mt-5 flex items-center gap-3 text-white/60">
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"><i class="ri-twitter-x-line"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"><i class="ri-telegram-line"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"><i class="ri-github-line"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"><i class="ri-linkedin-line"></i></a>
            </div>
          </div>
          ${col('产品', [
            { label: '虚拟卡', href: '#product' },
            { label: '费率组合', href: '#pricing' },
            { label: '成本计算器', href: '#calculator' },
            { label: '更新日志', href: '#' },
          ])}
          ${col('解决方案', [
            { label: 'AI Token 中转站', href: '#sol-ai' },
            { label: '广告投放', href: '#sol-ads' },
            { label: '跨境电商', href: '#sol-ecom' },
            { label: 'SaaS/AI 订阅', href: '#sol-saas' },
            { label: '企业支出', href: '#sol-exp' },
            { label: '平台发卡', href: '#sol-embed' },
          ])}
          ${col('开发者', [
            { label: 'API 文档', href: '#developers' },
            { label: '快速开始', href: '#developers' },
            { label: '沙箱', href: '#developers' },
            { label: 'BIN / MCC', href: '#developers' },
            { label: '服务状态', href: '#developers' },
            { label: 'SDK', href: '#developers' },
          ])}
          ${col('公司', [
            { label: '关于我们', href: '#about' },
            { label: '联系我们', href: '#apply' },
            { label: '博客', href: '#' },
            { label: '加入我们', href: '#' },
          ])}
        </div>

        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <div class="space-y-1">
            <div>© 2026 ${BRAND.name} Limited（香港注册） · Business Registration【待确认】 · MSO 牌照编号【待确认】</div>
            <div>注册地址：Hong Kong【待确认】 · 风险提示：虚拟信用卡仅用于合法合规支付场景</div>
          </div>
          <div class="flex items-center gap-5">
            <a href="#" class="hover:text-white/80">服务条款</a>
            <a href="#" class="hover:text-white/80">隐私政策</a>
            <a href="#" class="hover:text-white/80">Cookie 政策</a>
          </div>
        </div>

        <div class="mt-6 text-center">
          <p>由 <a href="https://with.woa.com/" style="color: #8A2BE2;" target="_blank">With</a> 通过自然语言生成</p>
        </div>
      </div>
    </div>
  `;
  mount('#site-footer', markup);
};
