// Prerender the EN / zh-Hant / zh-Hans static pages from the root (vi) index.html.
// Usage: start `node serve.mjs` first, then run `node build-langs.mjs`.
// Output: en/index.html, zh-hant/index.html, zh-hans/index.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUPPETEER_ENTRY = 'C:/Users/minhq/node_modules/puppeteer/lib/puppeteer/puppeteer.js';
const { default: puppeteer } = await import(pathToFileURL(PUPPETEER_ENTRY).href);

const SITE = 'https://datviet2.info';

const LANGS = {
  en: {
    dir: 'en',
    canonical: `${SITE}/en/`,
    title: 'Factory for Lease in Bau Bang, Binh Duong (HCMC), Vietnam | Dat Viet Hai',
    description: 'Ready-built factories for lease in Bau Bang, Binh Duong (HCMC), Vietnam – flexible sizes 3,000–5,424 m², full legal documents, fire safety certified, ready for handover. Contact us for a quote.',
    ogTitle: 'Factory for Lease in Bau Bang, Binh Duong – Dat Viet Hai',
    ogDescription: 'Ready-built factories 3,000–5,424 m², full legal documents, ready for handover in Bau Bang, Binh Duong (HCMC), Vietnam.',
    ogLocale: 'en_US',
    ldName: 'Dat Viet Hai Industrial Cluster – Factory for Lease',
    ldDescription: 'Ready-built factories for lease in Bau Bang, Binh Duong (HCMC), Vietnam – 10 units of 3,000–5,424 m², 55,000 m² total leasable area.',
    alts: {
      'img-overview': 'Master plan of Dat Viet Hai industrial cluster – factories for lease in Bau Bang, Binh Duong',
      'img-infra1': 'Aerial view of factories for lease – Dat Viet Hai, Bau Bang',
      'img-infra2': 'Construction progress of ready-built factories in Bau Bang, Binh Duong',
      'img-infra3': 'Southern factory zone – Units 07–10, Dat Viet Hai industrial cluster',
      'img-infra4': 'Completed ready-built factory awaiting handover in Bau Bang',
      'img-infra5': 'Site plan of 10 factories for lease – Dat Viet Hai industrial cluster',
      'img-infra6': 'Synchronized infrastructure – Dat Viet Hai, Bau Bang, Binh Duong',
      'img-unit1': 'Factory for lease 3,000 m² in Bau Bang – Unit A1',
      'img-unit2': 'Factory for lease 4,000 m² in Bau Bang – Unit B2',
    },
  },
  ja: {
    dir: 'ja',
    canonical: `${SITE}/ja/`,
    title: 'ベトナムの貸工場 – ビンズオン省バウバン（ホーチミン市）| Đất Việt Hai',
    description: 'ベトナム・ビンズオン省バウバン（ホーチミン市）の新築貸工場。面積3,000〜5,424㎡、法的書類完備、消防設備完備、即引き渡し可能。お見積りはお気軽にお問い合わせください。',
    ogTitle: 'ベトナム貸工場 – バウバン・ビンズオン – Đất Việt Hai',
    ogDescription: '新築工場3,000〜5,424㎡、法的書類完備、ベトナム・ビンズオン省バウバン（ホーチミン市）で即引き渡し可能。',
    ogLocale: 'ja_JP',
    ldName: 'Đất Việt Hai 工業団地 – 貸工場',
    ldDescription: 'ベトナム・ビンズオン省バウバン（ホーチミン市）の新築貸工場 – 全10棟 3,000〜5,424㎡、総賃貸面積55,000㎡。',
    alts: {
      'img-overview': 'Đất Việt Hai工業団地の全体計画図 – バウバン（ビンズオン）の貸工場',
      'img-infra1': '空撮：バウバンの貸工場全景 – Đất Việt Hai',
      'img-infra2': 'バウバンの新築工場の建設進捗',
      'img-infra3': '南側工場ゾーン 07〜10号棟 – Đất Việt Hai工業団地',
      'img-infra4': '完成した新築工場、引き渡し準備完了 – バウバン',
      'img-infra5': '貸工場10棟の配置図 – Đất Việt Hai工業団地',
      'img-infra6': '整備されたインフラ – バウバン、ビンズオン',
      'img-unit1': 'バウバンの貸工場3,000㎡ – A1棟',
      'img-unit2': 'バウバンの貸工場4,000㎡ – B2棟',
    },
  },
  tw: {
    dir: 'zh-hant',
    canonical: `${SITE}/zh-hant/`,
    title: '越南廠房出租 – 平陽保邦（胡志明市）| Đất Việt Hai',
    description: '越南平陽保邦全新廠房出租：面積 3,000–5,424 平方米，法律文件齊全，消防合規，隨時交付。歡迎聯繫獲取報價。',
    ogTitle: '越南廠房出租 – 平陽保邦 – Đất Việt Hai',
    ogDescription: '全新廠房 3,000–5,424 平方米，法律文件齊全，位於越南平陽保邦（胡志明市），隨時可交付。',
    ogLocale: 'zh_TW',
    ldName: '越南 Đất Việt Hai 工業區 – 廠房出租',
    ldDescription: '越南平陽保邦全新廠房出租 – 10 座廠房 3,000–5,424 平方米，總出租面積 55,000 平方米。',
    alts: {
      'img-overview': '越南 Đất Việt Hai 工業區總體規劃圖 – 平陽保邦廠房出租',
      'img-infra1': '空拍圖：平陽保邦出租廠房全景 – Đất Việt Hai',
      'img-infra2': '保邦全新廠房建設進度',
      'img-infra3': '南區廠房 07–10 – Đất Việt Hai 工業區',
      'img-infra4': '已完工全新廠房，隨時交付 – 保邦',
      'img-infra5': '10 座出租廠房平面配置圖 – Đất Việt Hai 工業區',
      'img-infra6': '配套齊全的基礎設施 – 平陽保邦',
      'img-unit1': '保邦 3,000 平方米出租廠房 – A1',
      'img-unit2': '保邦 4,000 平方米出租廠房 – B2',
    },
  },
  cn: {
    dir: 'zh-hans',
    canonical: `${SITE}/zh-hans/`,
    title: '越南厂房出租 – 平阳保邦（胡志明市）| Đất Việt Hai',
    description: '越南平阳保邦全新厂房出租：面积 3,000–5,424 平方米，法律文件齐全，消防合规，随时交付。欢迎联系获取报价。',
    ogTitle: '越南厂房出租 – 平阳保邦 – Đất Việt Hai',
    ogDescription: '全新厂房 3,000–5,424 平方米，法律文件齐全，位于越南平阳保邦（胡志明市），随时可交付。',
    ogLocale: 'zh_CN',
    ldName: '越南 Đất Việt Hai 工业区 – 厂房出租',
    ldDescription: '越南平阳保邦全新厂房出租 – 10 座厂房 3,000–5,424 平方米，总出租面积 55,000 平方米。',
    alts: {
      'img-overview': '越南 Đất Việt Hai 工业区总体规划图 – 平阳保邦厂房出租',
      'img-infra1': '航拍图：平阳保邦出租厂房全景 – Đất Việt Hai',
      'img-infra2': '保邦全新厂房建设进度',
      'img-infra3': '南区厂房 07–10 – Đất Việt Hai 工业区',
      'img-infra4': '已完工全新厂房，随时交付 – 保邦',
      'img-infra5': '10 座出租厂房平面配置图 – Đất Việt Hai 工业区',
      'img-infra6': '配套齐全的基础设施 – 平阳保邦',
      'img-unit1': '保邦 3,000 平方米出租厂房 – A1',
      'img-unit2': '保邦 4,000 平方米出租厂房 – B2',
    },
  },
};

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

for (const [lang, cfg] of Object.entries(LANGS)) {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate((lang, cfg) => {
    setLang(lang);
    // Per-language head
    document.title = cfg.title;
    document.querySelector('meta[name="description"]').setAttribute('content', cfg.description);
    document.querySelector('link[rel="canonical"]').setAttribute('href', cfg.canonical);
    document.querySelector('meta[property="og:title"]').setAttribute('content', cfg.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', cfg.ogDescription);
    document.querySelector('meta[property="og:url"]').setAttribute('content', cfg.canonical);
    document.querySelector('meta[property="og:locale"]').setAttribute('content', cfg.ogLocale);
    // Per-language JSON-LD
    const ld = document.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(ld.textContent);
    data.name = cfg.ldName;
    data.description = cfg.ldDescription;
    data.url = cfg.canonical;
    ld.textContent = JSON.stringify(data, null, 2);
    // Per-language image alts
    for (const [id, alt] of Object.entries(cfg.alts)) {
      const el = document.getElementById(id);
      if (el) el.setAttribute('alt', alt);
    }
    // Reset runtime state so the page loads clean
    document.querySelectorAll('.reveal.in').forEach((el) => el.classList.remove('in'));
    document.querySelectorAll('#navMenu a.active').forEach((el) => el.classList.remove('active'));
    const heroBg = document.getElementById('heroBg');
    if (heroBg) heroBg.removeAttribute('style');
    document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === 0));
  }, lang, cfg);

  let html = await page.content();
  // The wh-list toggle reads LANG_DATA[currentLang]; point it at this page's language
  html = html.replace("var currentLang = 'vi';", `var currentLang = '${lang}';`);
  if (!html.includes(`var currentLang = '${lang}'`)) throw new Error('currentLang not patched for ' + lang);

  const outDir = path.join(ROOT, cfg.dir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), '<!DOCTYPE html>\n' + html.replace(/^<!DOCTYPE html>\s*/i, ''), 'utf8');
  console.log(`built ${cfg.dir}/index.html (${(html.length / 1024).toFixed(0)}KB)`);
}

await browser.close();
