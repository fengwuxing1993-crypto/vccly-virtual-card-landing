import { html, mount } from '../utils.js';

export const renderDevelopers = () => {
  const code = `curl <span class="tk-k">-X</span> POST https://api.vccly.io/v1/cards \\
  <span class="tk-k">-H</span> <span class="tk-s">"Authorization: Bearer $API_KEY"</span> \\
  <span class="tk-k">-H</span> <span class="tk-s">"Content-Type: application/json"</span> \\
  <span class="tk-k">-d</span> <span class="tk-s">'{
    "type": "VIRTUAL",
    "currency": "USD",
    "brand": "VISA",
    "bin": "453201",
    "mcc_allow": ["5734","7372"],
    "spend_limit": 500
  }'</span>

<span class="tk-c"># =&gt; 201 Created</span>
{
  <span class="tk-k">"id"</span>: <span class="tk-s">"card_01HFR..."</span>,
  <span class="tk-k">"bin"</span>: <span class="tk-s">"453201"</span>,
  <span class="tk-k">"last4"</span>: <span class="tk-s">"0421"</span>,
  <span class="tk-k">"status"</span>: <span class="tk-s">"ACTIVE"</span>,
  <span class="tk-k">"created_at"</span>: <span class="tk-s">"2026-10-26T09:12:03Z"</span>
}`;

  const capabilities = [
    { icon: 'ri-bank-card-line',  title: '创建 / 管理卡', desc: '虚拟卡秒开，单用途/多用途、限额、冻结、注销' },
    { icon: 'ri-exchange-line',   title: '充值 / 余额',   desc: 'USDT、电汇、本地支付；余额查询与账单' },
    { icon: 'ri-list-check',      title: '交易查询',     desc: '实时交易流水、拒付、争议、对账导出' },
    { icon: 'ri-shield-flash-line', title: 'BIN / MCC', desc: '可查询可用 BIN、开卡指定 BIN、灵活 MCC 白名单' },
    { icon: 'ri-webhook-line',    title: 'Webhook',      desc: '订阅卡状态、交易、风控、BIN 维护事件' },
    { icon: 'ri-shield-user-line',title: '幂等 & 鉴权',  desc: 'Bearer Token、HMAC 签名、幂等键、限流重试' },
  ];

  const markup = html`
    <div id="developers" class="bg-ink-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-10"></div>
      <div class="absolute -top-24 right-10 w-96 h-96 rounded-full bg-brand-600/25 blur-3xl"></div>

      <div class="container-x py-20 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div class="reveal">
            <div class="chip chip-dark"><i class="ri-code-s-slash-line text-accent-cyan"></i> 开发者 Developers</div>
            <h2 class="section-title mt-4">发卡 API, <br/><span class="bg-gradient-to-r from-accent-cyan to-brand-300 bg-clip-text text-transparent">为开发者而建。</span></h2>
            <p class="mt-4 text-white/75">RESTful API · 免费沙箱 · BIN/MCC 接口 · Webhook · 多语言 SDK。几行代码完成发卡集成。</p>

            <div class="mt-6 grid sm:grid-cols-2 gap-3">
              ${capabilities.map(c => html`
                <div class="rounded-xl bg-white/[0.05] border border-white/10 p-4">
                  <div class="flex items-start gap-3">
                    <div class="w-9 h-9 rounded-lg bg-brand-600/30 text-accent-cyan flex items-center justify-center">
                      <i class="${c.icon}"></i>
                    </div>
                    <div>
                      <div class="font-semibold">${c.title}</div>
                      <div class="text-xs text-white/60 mt-0.5">${c.desc}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#apply" class="btn-primary">获取 API Key <i class="ri-key-2-line"></i></a>
              <a href="#" class="btn-secondary">阅读文档 <i class="ri-book-open-line"></i></a>
              <a href="#" class="btn-secondary">进入沙箱 <i class="ri-flask-line"></i></a>
            </div>

            <div class="mt-6 flex items-center gap-6 text-xs text-white/60">
              <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>Status: Operational</span>
              <span>API Uptime 30d · 99.99%</span>
              <span>P95 延迟 · 180ms</span>
            </div>
          </div>

          <div class="reveal">
            <div class="rounded-2xl bg-[#0b1226] border border-white/10 overflow-hidden shadow-glow">
              <div class="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                <div class="flex items-center gap-2 text-xs text-white/60">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span class="ml-3">POST · /v1/cards · 创建虚拟卡</span>
                </div>
                <div class="flex items-center gap-3 text-xs">
                  <button class="px-2 py-1 rounded bg-brand-600 text-white font-semibold">cURL</button>
                  <button class="text-white/60 hover:text-white">Node</button>
                  <button class="text-white/60 hover:text-white">Python</button>
                </div>
              </div>
              <pre class="code-block !border-0 !rounded-none"><code>${code}</code></pre>
              <div class="px-4 py-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span><i class="ri-shield-check-line text-accent-cyan"></i> HTTPS · HMAC 签名 · 幂等键</span>
                <span>Base URL: <code class="text-white/80">api.vccly.io</code></span>
              </div>
            </div>

            <div class="mt-5 grid grid-cols-3 gap-3">
              <div class="rounded-xl bg-white/[0.05] border border-white/10 p-4 text-center">
                <div class="text-2xl font-extrabold">30+</div>
                <div class="text-xs text-white/60 mt-1">API 端点</div>
              </div>
              <div class="rounded-xl bg-white/[0.05] border border-white/10 p-4 text-center">
                <div class="text-2xl font-extrabold">5</div>
                <div class="text-xs text-white/60 mt-1">官方 SDK</div>
              </div>
              <div class="rounded-xl bg-white/[0.05] border border-white/10 p-4 text-center">
                <div class="text-2xl font-extrabold">99.99%</div>
                <div class="text-xs text-white/60 mt-1">API 可用性</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  mount('#developers', markup);
};

export const renderHowItWorks = () => {
  const steps = [
    { n: '01', icon: 'ri-file-list-3-line', title: '申请开户', desc: '提交企业信息、业务场景、预计用量。KYC 审核通过后开通账户。', time: '≤ 24h' },
    { n: '02', icon: 'ri-vip-crown-2-line', title: '选择卡产品 / 充值', desc: '按客户类型匹配 AI 采购卡 / 广告专用卡 / 通用卡；USDT 或电汇充值。', time: '即时' },
    { n: '03', icon: 'ri-bank-card-2-line', title: '开卡使用', desc: '控制台或 API 批量开卡；绑定 AI 平台、广告账户、SaaS 订阅；实时管控。', time: '秒级' },
  ];
  mount('#howitworks', html`
    <div class="bg-white">
      <div class="container-x py-20">
        <div class="text-center max-w-2xl mx-auto reveal">
          <div class="eyebrow">How it works</div>
          <h2 class="section-title mt-3">三步，从申请到用卡</h2>
          <p class="mt-3 text-slate-600">从首次接触到真正开卡使用，整条路径短而稳定。</p>
        </div>
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          ${steps.map((s, i) => html`
            <div class="relative soft-card p-7 reveal" style="transition-delay:${i*100}ms">
              <div class="absolute -top-5 left-7 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-extrabold flex items-center justify-center shadow-glow">${s.n}</div>
              <div class="mt-4 w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl">
                <i class="${s.icon}"></i>
              </div>
              <h3 class="mt-4 text-lg font-bold">${s.title}</h3>
              <p class="mt-1 text-sm text-slate-600 leading-relaxed">${s.desc}</p>
              <div class="mt-3 chip"><i class="ri-time-line"></i>${s.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `);
};
