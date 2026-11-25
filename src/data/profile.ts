import type { L } from '../i18n';

// Everything shown in the left profile card and the About section.
// Edit the text here; each field has an English, Chinese and French version.

export const profile = {
  name: 'Melvin Huang',
  nativeName: '黃隆翔',
  fullName: 'Lung Hsiang (Melvin) Huang',
  // Legal name, shown next to the Chinese name at the top of the site.
  legalName: 'Lung Hsiang Huang',
  location: { en: 'Taipei · Bangkok · Paris', zh: '台北・曼谷・巴黎', fr: 'Taipei · Bangkok · Paris' } satisfies L,
  // File in public/ (no leading slash). Set to '' to show your initials instead.
  photo: 'photo.jpg',
  initials: 'MH',
  email: 'huanglongshiang@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lung-hsiang-melvin-huang-6ba712316',
  // File in public/ (no leading slash).
  cv: 'Melvin Huang CV.pdf',
  // Put your Substack address here once it exists, e.g. 'https://melvinhuang.substack.com'.
  // While it is empty (''), the button is hidden.
  substack: '',

  tagline: {
    en: 'International Business at NTU',
    zh: '台大國際企業學系',
    fr: 'Commerce international à NTU',
  } satisfies L,

  // Education rows. `period` is shown on the left; each line in `points` sits under the school
  // (shown as bullet points when there is more than one).
  education: [
    {
      period: { en: '2024 – 2028', zh: '2024 – 2028', fr: '2024 – 2028' },
      school: { en: 'National Taiwan University', zh: '國立臺灣大學', fr: 'Université nationale de Taïwan' },
      points: [
        { en: 'BBA, International Business', zh: '國際企業學系 學士', fr: 'Licence en commerce international' },
        {
          en: 'Certificate Program in European Union Studies (in progress)',
          zh: '歐盟研究學程（修習中）',
          fr: "Certificat d'études européennes (en cours)",
        },
      ],
    },
    {
      period: { en: '2026.08 – 2026.12', zh: '2026.08 – 2026.12', fr: '2026.08 – 2026.12' },
      school: { en: 'HEC Paris', zh: '巴黎高等商學院', fr: 'HEC Paris' },
      points: [{ en: 'Exchange semester', zh: '交換學生', fr: "Semestre d'échange" }],
    },
    {
      period: { en: 'Graduated 2024', zh: '2024 畢業', fr: 'Diplômé en 2024' },
      school: {
        en: 'Taipei Municipal Jianguo High School',
        zh: '台北市立建國中學',
        fr: 'Lycée municipal Jianguo de Taipei',
      },
      points: [
        { en: 'Chief Instructor, Model UN Club', zh: '模擬聯合國社 教學長', fr: 'Formateur principal, club de Model UN' },
        { en: 'English Debate Club', zh: '英文辯論社', fr: 'Club de débat en anglais' },
        { en: 'Indie Music Creation Club', zh: '另類音樂創作社', fr: 'Club de création musicale indépendante' },
      ],
    },
  ] satisfies { period: L; school: L; points: L[] }[],

  languages: [
    { en: 'Mandarin (native)', zh: '中文（母語）', fr: 'Mandarin (langue maternelle)' },
    { en: 'English (IELTS 8.0)', zh: '英文（IELTS 8.0）', fr: 'Anglais (IELTS 8.0)' },
    { en: 'French (B1)', zh: '法文（B1）', fr: 'Français (B1)' },
    { en: 'German (A2)', zh: '德文（A2）', fr: 'Allemand (A2)' },
    { en: 'Taiwanese Hokkien (conversational)', zh: '台語（日常會話）', fr: 'Taïwanais (niveau conversationnel)' },
    { en: 'Thai (conversational)', zh: '泰文（日常會話）', fr: 'Thaï (niveau conversationnel)' },
  ] satisfies L[],


  bio: [
    {
      en: "I'm Melvin, an International Business student at National Taiwan University, spending the fall of 2026 at HEC Paris. I speak roughly six languages, some fluently and some just enough for everyday conversation, thanks to my family background and a real love of languages.",
      zh: '我是黃隆翔（Melvin），在台大念國際企業學系，2026 年秋天在巴黎高等商學院交換。因為家庭背景，再加上自己真的很喜歡學語言，我大概會講六種語言，有些很流利，有些則是日常溝通夠用的程度。',
      fr: "Je m'appelle Melvin, étudiant en commerce international à l'Université nationale de Taïwan, en échange à HEC Paris à l'automne 2026. Grâce à mon histoire familiale et à une vraie passion pour les langues, j'en parle environ six, certaines couramment, d'autres juste assez pour la conversation de tous les jours.",
    },
    {
      en: "I'm drawn to how things actually move around the world: goods through supply chains, and decisions through companies. I want to build my career in supply chain, and perhaps strategy, and keep studying both along the way.",
      zh: '我一直對東西在世界上實際是怎麼流動的很有興趣，貨物怎麼在供應鏈裡移動，決策又是怎麼在公司裡傳下去的。之後我想往供應鏈發展，也可能走策略，學術上也會繼續往這兩個方向讀下去。',
      fr: "Ce qui m'attire, c'est la façon dont les choses circulent réellement dans le monde : les marchandises dans les chaînes d'approvisionnement, les décisions dans les entreprises. Je veux construire ma carrière dans la supply chain, peut-être aussi en stratégie, et continuer à étudier les deux.",
    },
    {
      en: "I'm happiest in a room where people disagree, which is how I ended up spending most of high school in Model UN. Away from that, I'm usually reading old political philosophers or mixing pop and reggaeton in my bedroom.",
      zh: '我在一群意見不同的人中間最開心，這大概也是為什麼我高中大部分的時間都泡在模擬聯合國裡。其他時間，我通常是在讀一些很老的政治哲學家，或是在房間裡把流行歌和雷鬼動混在一起。',
      fr: "Je suis le plus heureux dans une salle où les gens ne sont pas d'accord, ce qui explique que j'aie passé l'essentiel du lycée en Model UN. Le reste du temps, je lis de vieux philosophes politiques ou je mixe de la pop et du reggaeton dans ma chambre.",
    },
  ] satisfies L[],

  currently: {
    en: 'On exchange at HEC Paris until December 2026 · open to internships in Taipei from January 2027',
    zh: '在巴黎高等商學院交換到 2026 年 12 月，2027 年 1 月起可以在台北開始實習',
    fr: "En échange à HEC Paris jusqu'en décembre 2026 · disponible pour un stage à Taipei dès janvier 2027",
  } satisfies L,

  interests: {
    en: 'Strategy & consulting · Supply chain · Industry research · Europe–Asia business',
    zh: '策略與顧問・供應鏈・產業研究・歐亞商業',
    fr: 'Stratégie et conseil · Supply chain · Études sectorielles · Affaires Europe–Asie',
  } satisfies L,
};
