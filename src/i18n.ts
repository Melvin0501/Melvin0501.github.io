// Languages and interface text. English is the default and lives at the site root;
// Chinese lives under /zh/ and French under /fr/.

export const languages = ['en', 'zh', 'fr'] as const;
export type Lang = (typeof languages)[number];

/** A piece of text in all three languages. */
export type L = Record<Lang, string>;

export const langLabels: Record<Lang, string> = { en: 'EN', zh: '中文', fr: 'FR' };
export const htmlLang: Record<Lang, string> = { en: 'en', zh: 'zh-Hant-TW', fr: 'fr' };

/** Route param for each language: undefined means the site root. */
export const langParam = (lang: Lang) => (lang === 'en' ? undefined : lang);
export const toLang = (param: string | undefined): Lang =>
  param === 'zh' || param === 'fr' ? param : 'en';

/** The site's base path from astro.config.mjs, always ending in '/'. */
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Link to a file in public/ (e.g. 'cv.pdf'). Leaves full URLs untouched. */
export function asset(path: string): string {
  if (!path || /^[a-z]+:/i.test(path)) return path;
  return BASE + path.replace(/^\//, '');
}

/** Build a link inside the site for a given language. `path` has no leading slash. */
export function href(lang: Lang, path = ''): string {
  const prefix = lang === 'en' ? BASE : `${BASE}${lang}/`;
  return prefix + path;
}

export const ui = {
  about: { en: 'About', zh: '關於我', fr: 'À propos' },
  gallery: { en: 'Photos & slides', zh: '照片與簡報', fr: 'Photos et slides' },
  files: { en: 'Files', zh: '檔案', fr: 'Fichiers' },
  contact: { en: 'Contact', zh: '聯絡', fr: 'Contact' },
  currently: { en: 'Currently', zh: '近況', fr: 'Actuellement' },
  caseCompetitions: { en: 'Case Competitions', zh: '個案競賽', fr: 'Concours de cas' },
  organizational: { en: 'Organization & Project Experience', zh: '組織與專案經歷', fr: 'Organisations et projets' },
  research: { en: 'Analysis Experience', zh: '分析經歷', fr: 'Analyses' },
  interestsSection: { en: 'Interests / Other Experiences', zh: '興趣／其他經歷', fr: 'Intérêts / Autres expériences' },
  cv: { en: 'CV', zh: '履歷', fr: 'CV' },
  viewCv: { en: 'View my CV', zh: '查看我的履歷', fr: 'Voir mon CV' },
  furtherReading: { en: 'Further reading', zh: '延伸閱讀', fr: 'Pour aller plus loin' },
  sections: { en: 'Sections', zh: '章節', fr: 'Sections' },
  navCases: { en: 'Competitions', zh: '個案競賽', fr: 'Concours' },
  navOrgs: { en: 'Organizations', zh: '組織', fr: 'Organisations' },
  navAnalysis: { en: 'Analysis', zh: '分析', fr: 'Analyses' },
  navInterests: { en: 'Interests / Others', zh: '興趣／其他', fr: 'Intérêts / Autres' },
  theme: { en: 'Switch light / dark mode', zh: '切換淺色／深色模式', fr: 'Basculer mode clair / sombre' },
  scrollHint: { en: 'scroll for more', zh: '往下滑看更多', fr: 'faire défiler' },
  items: { en: 'items', zh: '項', fr: 'éléments' },
  back: { en: 'Back to home', zh: '回到首頁', fr: "Retour à l'accueil" },
  role: { en: 'Role', zh: '角色', fr: 'Rôle' },
  date: { en: 'Date', zh: '時間', fr: 'Date' },
  where: { en: 'Where', zh: '地點', fr: 'Lieu' },
  result: { en: 'Result', zh: '成果', fr: 'Résultat' },
  skillsUsed: { en: 'Skills', zh: '技能', fr: 'Compétences' },
  type: { en: 'Type', zh: '類型', fr: 'Type' },
  toFill: { en: 'To fill in', zh: '待補', fr: 'À compléter' },
  previous: { en: 'Previous', zh: '上一項', fr: 'Précédent' },
  next: { en: 'Next', zh: '下一項', fr: 'Suivant' },
  education: { en: 'Education', zh: '學歷', fr: 'Formation' },
  languages: { en: 'Languages', zh: '語言', fr: 'Langues' },
  interests: { en: 'Interests', zh: '興趣方向', fr: "Centres d'intérêt" },
  notFound: { en: 'Page not found', zh: '找不到這個頁面', fr: 'Page introuvable' },
} satisfies Record<string, L>;
