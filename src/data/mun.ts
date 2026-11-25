// Content of the "My Model UN story" page (/model-un/). Every text field has en, zh, fr.
// Conference records come from Melvin's own MUN record sheet. Conference and committee
// names stay in English in every language, the way they are used in Model UN.
import type { L } from '../i18n';

const t = (en: string, zh: string, fr: string): L => ({ en, zh, fr });

export const munPage = {
  title: t('My Model UN Story', '我的模聯故事', 'Mon parcours Model UN'),
  lead: t(
    'I started as a shy first-year who could barely get through a speech. Somewhere between drafting resolutions and making up speeches on the spot, I turned into someone who lives for the floor: a debater who wants the hardest seat in the room, a chair who runs it, and a lecturer who now passes it all on.',
    '我一開始是那種連一段演講都講不太完的害羞高一生，後來在一次次寫決議草案、臨場硬著頭皮站起來講話的過程裡，慢慢變成一個很享受在會場上的人，當代表的時候想拿最難的那個位置，當主席的時候可以撐住整個會場，現在也在把這些東西教給下一屆的人。',
    "J'ai commencé en élève de seconde timide, qui avait du mal à aller au bout d'un discours. Entre les projets de résolution et les discours improvisés, je suis devenu quelqu'un qui vit pour la séance : un débatteur qui veut la place la plus difficile, un président qui tient la salle, et un formateur qui transmet tout cela.",
  ),
  stats: [
    { n: '41', label: t('conferences', '場會議', 'conférences') },
    { n: '6', label: t('countries', '個國家', 'pays') },
    { n: '11', label: t('cities', '座城市', 'villes') },
  ],
};

export const toc = {
  motivation: t('Motivation', '起點', 'Le point de départ'),
  domestic: t('In Taiwan', '在台灣', 'À Taïwan'),
  delegating: t('Delegating', '當代表', 'Délégué'),
  chairing: t('Chairing', '當主席', 'Président'),
  hosting: t('Hosting / Advising', '辦會與顧問', 'Organiser / Conseiller'),
  international: t('International', '國際會議', 'International'),
  contents: t('On this page', '本頁內容', 'Sur cette page'),
  back: t('Debate & Public Speaking', '辯論與演講', 'Débat et prise de parole'),
  awardsOnly: t('Awards only', '只看得獎', 'Prix uniquement'),
  showAll: t('Show all', '全部', 'Tout afficher'),
  kmFromTaipei: t('km from Taipei', '公里（距離台北）', 'km de Taipei'),
  readMore: t('Read more', '看更多', 'En savoir plus'),
};

export const motivation: L[] = [
  t(
    'When I started high school in 2021, I had no idea what I wanted to do. Someone told me to just try things, so I joined almost every club I could: the English Debate Club, the Indie Music Creation Club, and, after a selection round, the Model UN club.',
    '2021 年剛上高中的時候，我其實完全不知道自己想做什麼，有人跟我說那就什麼都試試看，所以我幾乎能參加的社團都參加了，有英文辯論社、另類音樂創作社，也通過甄選進了模擬聯合國社。',
    "Quand je suis entré au lycée en 2021, je ne savais pas du tout ce que je voulais faire. On m'a conseillé d'essayer, alors je me suis inscrit à presque tous les clubs : le club de débat en anglais, le club de création musicale indépendante et, après une sélection, le club Model UN.",
  ),
  t(
    'My first conference was a mock conference at the end of that year. I was shy and had no idea how to give a speech. My second was online, and honestly nothing special.',
    '我的第一場會議是那年年底的一場模擬會，那時候我很害羞，也完全不知道演講要怎麼講。第二場是線上的，老實說也沒什麼特別的。',
    "Ma première conférence était une conférence d'entraînement à la fin de cette année-là. J'étais timide et je ne savais pas faire un discours. La deuxième était en ligne, et honnêtement sans rien de marquant.",
  ),
  t(
    'The third was Phoenix MUN in Tainan, and that one changed me. I came home with friends I still have and memories that still make me smile when I think about them.',
    '第三場是在台南的 Phoenix MUN，就是那一場改變了我。我在那裡認識了到現在都還很要好的朋友，也留下了很多現在想起來還是會笑出來的回憶。',
    "La troisième, Phoenix MUN à Tainan, m'a changé. J'en suis revenu avec des amis que j'ai encore aujourd'hui et des souvenirs qui me font toujours sourire.",
  ),
  t(
    'After that I fell for it completely: partly for the intellectual challenge, partly for the thrill of standing up to speak before you quite know what you are going to say, and partly for the people. It was a community where I could find others as obsessed as I was, at a time when not everyone around me spoke fluent English or cared about politics. That is how all of this started.',
    '從那之後我就完全愛上了模聯，一部分是因為那種腦袋被刺激的感覺，一部分是那種站起來演講、但其實還不太確定自己要講什麼的刺激感，還有一部分是因為人。那時候身邊不是每個人英文都很流利，也不是每個人都對政治有興趣，但在這個很支持彼此的圈子裡，我可以找到跟我一樣怪的人。這一切就是這樣開始的。',
    "Ensuite, je suis complètement tombé amoureux de cette activité : pour le défi intellectuel, pour le frisson de se lever et de parler sans savoir exactement ce qu'on va dire, et pour les gens. C'était une communauté où je trouvais d'autres passionnés comme moi, à une époque où tout le monde autour de moi ne parlait pas couramment anglais ni ne s'intéressait à la politique. C'est ainsi que tout a commencé.",
  ),
];

export const domesticIntro = t(
  'Almost all of it happened in Taiwan first: four years of weekends at conferences run by students, for students.',
  '一開始幾乎都是在台灣，連續四年的週末都在學生為學生辦的會議裡度過。',
  "Presque tout s'est d'abord passé à Taïwan : quatre ans de week-ends dans des conférences organisées par des élèves, pour des élèves.",
);

export const delegatingIntro = t(
  '14 conferences in Taiwan as a delegate, and 11 awards: 4 Best Delegate, 4 Outstanding Delegate, 2 Honourable Mentions and a Best Position Paper.',
  '在台灣當代表參加了 14 場會議，拿了 11 個獎，包括 4 次最佳代表、4 次傑出代表、2 次榮譽提名和 1 次最佳立場文件。',
  '14 conférences à Taïwan comme délégué, et 11 prix : 4 Best Delegate, 4 Outstanding Delegate, 2 mentions honorables et un prix du meilleur position paper.',
);

export const chairingIntro = t(
  '19 committees chaired in Taiwan, 4 of them as Head Chair, from mock conferences for first-timers to the International Court of Justice and crisis committees.',
  '在台灣總共當過 19 次委員會主席，其中 4 次是主主席，從給新手的模擬會，到國際法院和危機委員會都有。',
  "19 comités présidés à Taïwan, dont 4 comme président principal, des conférences d'entraînement pour débutants à la Cour internationale de justice et aux comités de crise.",
);

export const hostingIntro = t(
  'Then I moved behind the scenes: teaching at conferences for newcomers, advising other schools, running the academic side of the conferences our club hosted, and eventually building my own with MUN Society Taiwan.',
  '後來我慢慢走到幕後，在給新手的會議當講師、當別校會議的顧問、負責我們社團主辦的會議的學術部分，最後跟台灣模擬聯合國學會一起辦自己的會議。',
  "Puis je suis passé dans les coulisses : formateur dans des conférences pour débutants, conseiller d'autres lycées, responsable académique des conférences organisées par notre club, et enfin mes propres projets avec MUN Society Taiwan.",
);

const BD = t('Best Delegate', '最佳代表', 'Best Delegate');
const OD = t('Outstanding Delegate', '傑出代表', 'Outstanding Delegate');
const HM = t('Honourable Mention', '榮譽提名', 'Mention honorable');
const BPP = t('Best Position Paper', '最佳立場文件', 'Meilleur position paper');

export interface Row { year: string; conf: string; committee: string; as?: string; award?: L; role?: string; head?: boolean }

export const delegating: Row[] = [
  { year: '2021', conf: 'CK × ZS × CG × HSNU MockMUN', committee: 'GA Third Committee', as: 'Brazil', award: BPP },
  { year: '2022', conf: 'Winter Youth MUN', committee: 'Security Council', as: 'Russian Federation', award: HM },
  { year: '2022', conf: 'Phoenix MUN', committee: 'Coordinated Supervision Committee', as: 'Ireland' },
  { year: '2022', conf: 'SpringMock MUN', committee: 'ASEAN Regional Forum', as: 'Secretary-General of ASEAN', award: OD },
  { year: '2022', conf: 'CK × ZS × TFG MockMUN', committee: 'UNDP', as: 'United States' },
  { year: '2022', conf: 'TCGSMUN', committee: 'ECOSOC', as: 'Italy' },
  { year: '2022', conf: 'FongMUN', committee: 'Security Council', as: 'Norway & India', award: OD },
  { year: '2022', conf: 'Taiwan Capital MUN', committee: 'GA Second Committee', as: 'China', award: HM },
  { year: '2022', conf: 'TransMUN', committee: 'UN Environment Programme', as: 'Pakistan', award: BD },
  { year: '2022', conf: 'InterMUN', committee: 'UNHCR', as: 'Philippines', award: BD },
  { year: '2023', conf: 'Taiwan Capital MUN', committee: 'Security Council', as: 'Ukraine', award: OD },
  { year: '2023', conf: 'Spring MUN', committee: 'World Trade Organization', as: 'Malaysia', award: BD },
  { year: '2024', conf: 'Taiwan Capital MUN', committee: 'GA Emergency Special Session', as: 'South Africa', award: BD },
  { year: '2025', conf: 'CYCUMUN', committee: 'GA First Committee', as: 'China', award: OD },
];

export const chairing: Row[] = [
  { year: '2022', conf: 'Herocamp', committee: 'GA Third Committee', role: 'Chair' },
  { year: '2022', conf: 'MingDao MUN', committee: 'UNODC', role: 'Co-Chair' },
  { year: '2022', conf: 'Action!', committee: 'Human Rights Council', role: 'Chair' },
  { year: '2022', conf: 'CCMUN', committee: 'WHO Regional Committee for Europe', role: 'Co-Chair' },
  { year: '2022', conf: 'CK × ZS MockMock MUN', committee: 'GA First Committee', role: 'Chair' },
  { year: '2022', conf: 'CK × ZS × CG × HSNU × TFG MockMUN', committee: 'GA First Committee', role: 'Chair' },
  { year: '2023', conf: 'HSNUMUN', committee: 'Historic Security Council', role: 'Co-Chair' },
  { year: '2023', conf: 'CZMUN', committee: 'US National Security Council', role: 'Co-Chair' },
  { year: '2023', conf: 'National Experimental High School MUN', committee: 'World Trade Organization', role: 'Head Chair', head: true },
  { year: '2023', conf: "MUNer's Elite", committee: 'International Court of Justice', role: 'Head Chair', head: true },
  { year: '2023', conf: 'TransMUN', committee: 'Munich Security Conference', role: 'Co-Chair' },
  { year: '2024', conf: 'CZMUN', committee: 'GA Sixth Committee', role: 'Co-Chair' },
  { year: '2024', conf: 'TransMUN', committee: 'Security Council', role: 'Head Chair', head: true },
  { year: '2024', conf: 'Taichung Youth MUN', committee: 'Security Council', role: 'Head Chair', head: true },
  { year: '2024', conf: 'Taiwan International MUN', committee: 'WHO · Human Rights Council · IRENA', role: 'Chair' },
  { year: '2025', conf: 'CTFMUN', committee: 'Crisis: The Banana Wars', role: 'Chair' },
  { year: '2025', conf: 'ESMUN', committee: 'GA Third Committee', role: 'Chair' },
  { year: '2025', conf: 'TransMUN', committee: 'Crisis: Russo-Ukrainian Conflict', role: 'Co-Chair' },
  { year: '2026', conf: 'CTFMUN', committee: 'Crisis: The Triumvirate', role: 'Chair' },
];

export const hosting: { year: string; conf: string; role: L; note?: L; href?: string }[] = [
  { year: '2022', conf: 'TCGS introMUN', role: t('Instructor', '講師', 'Formateur') },
  { year: '2022', conf: 'CentMUN', role: t('Advisor', '顧問', 'Conseiller') },
  {
    year: '2023', conf: 'Winter Youth MUN', role: t('Academic Director', '學術總監', 'Directeur académique'),
    note: t('Hosted by our club: a joint conference of eight of Taiwan’s top high schools', '我們社團主辦，是台灣八所頂尖高中聯合舉辦的會議', 'Organisée par notre club : une conférence commune à huit des meilleurs lycées de Taïwan'),
  },
  { year: '2023', conf: 'TainanMUN', role: t('Advisor', '顧問', 'Conseiller') },
  {
    year: '2023', conf: 'CZMUN', role: t('Academic Director & Co-Chair', '學術總監暨共同主席', 'Directeur académique et coprésident'),
    note: t('Hosted by our club', '我們社團主辦', 'Organisée par notre club'),
  },
  { year: '2024–25', conf: 'Taiwan International MUN', role: t('Co-founder & Academic Director', '共同創辦人暨學術總監', 'Cofondateur et directeur académique'), href: 'work/timun/' },
  { year: '2026', conf: 'ReMUN', role: t('Founder & Convener', '創辦人暨召集人', 'Fondateur et organisateur'), href: 'work/remun/' },
];

export const internationalIntro = t(
  'From 2024 the conferences went international, in Taipei and across Asia, and eventually to the other side of the world. Pick a stop.',
  '從 2024 年開始，我參加的會議變成國際性的，有在台北的，也有在亞洲其他城市的，最後還到了地球的另一邊。點一站看看。',
  "À partir de 2024, les conférences sont devenues internationales, à Taipei, ailleurs en Asie, puis à l'autre bout du monde. Choisissez une étape.",
);

export interface Photo { src: string; caption: L }

/** Pictures placed inside the Taiwan chapters (files in public/model-un/). */
export const chapterPhotos: Record<'motivation' | 'delegating' | 'chairing' | 'hosting', Photo[]> = {
  motivation: [{ src: 'model-un/phoenix-polaroid.jpg', caption: t('A polaroid from Phoenix MUN, the conference that changed everything', 'Phoenix MUN 的拍立得，就是改變我的那一場', 'Un polaroid de Phoenix MUN, la conférence qui a tout changé') }],
  delegating: [{ src: 'model-un/springmun-2023.jpg', caption: t('Watching the floor at Spring MUN 2023', '在 Spring MUN 2023 看著會場', 'En observant la salle à Spring MUN 2023') }],
  chairing: [
    { src: 'model-un/transmun-2024-president.jpg', caption: t('Presiding over the Security Council as Head Chair, TransMUN 2024', 'TransMUN 2024，以主主席身分主持安理會', 'À la présidence du Conseil de sécurité, TransMUN 2024') },
    { src: 'model-un/czmun-2024.jpg', caption: t('CZMUN 2024', 'CZMUN 2024', 'CZMUN 2024') },
    { src: 'model-un/ctfmun-2025.jpg', caption: t('Keeping time in the Banana Wars crisis, CTFMUN 2025', 'CTFMUN 2025 香蕉戰爭危機委員會', 'Crise des guerres de la banane, CTFMUN 2025') },
    { src: 'model-un/transmun-2025.jpg', caption: t('TransMUN 2025', 'TransMUN 2025', 'TransMUN 2025') },
    { src: 'model-un/ctfmun-2026.jpg', caption: t('The Triumvirate crisis, CTFMUN 2026', 'CTFMUN 2026 三巨頭危機委員會', 'Crise du Triumvirat, CTFMUN 2026') },
  ],
  hosting: [{ src: 'model-un/czmun-2023-awards.jpg', caption: t('Award ceremony for the National Security Council, CZMUN 2023', 'CZMUN 2023 國家安全會議的頒獎典禮', 'Remise des prix du Conseil de sécurité nationale, CZMUN 2023') }],
};

export interface Stop {
  photos?: Photo[];
  id: string;
  city: string;
  conference: string;
  date: L;
  role?: L;
  text?: L;
  award?: L;
  href?: string;
  /** Notes for Melvin while a detail is missing (dev only). */
  todo?: string;
}

export interface City { id: string; name: L; country: L; lon: number; lat: number }

export const cities: City[] = [
  { id: 'taipei', name: t('Taipei', '台北', 'Taipei'), country: t('Taiwan', '台灣', 'Taïwan'), lon: 121.56, lat: 25.03 },
  { id: 'kuala-lumpur', name: t('Kuala Lumpur', '吉隆坡', 'Kuala Lumpur'), country: t('Malaysia', '馬來西亞', 'Malaisie'), lon: 101.69, lat: 3.14 },
  { id: 'bangkok', name: t('Bangkok', '曼谷', 'Bangkok'), country: t('Thailand', '泰國', 'Thaïlande'), lon: 100.5, lat: 13.75 },
  { id: 'manila', name: t('Manila', '馬尼拉', 'Manille'), country: t('Philippines', '菲律賓', 'Philippines'), lon: 120.98, lat: 14.6 },
  { id: 'jakarta', name: t('Jakarta', '雅加達', 'Jakarta'), country: t('Indonesia', '印尼', 'Indonésie'), lon: 106.85, lat: -6.21 },
  { id: 'lima', name: t('Lima', '利馬', 'Lima'), country: t('Peru', '秘魯', 'Pérou'), lon: -77.04, lat: -12.05 },
];

/** The international conferences in order. The map draws the route from one stop to the next. */
export const stops: Stop[] = [
  {
    id: 'hwmun-2024', city: 'taipei', conference: 'Harvard WorldMUN 2024',
    date: t('Mar 2024', '2024 年 3 月', 'mars 2024'),
    role: t('Assistant Chair, Council of Ministers of the Soviet Union', '蘇聯部長會議助理主席', "Président adjoint, Conseil des ministres de l'Union soviétique"),
    text: t('The world’s Model UN came to my home city.', '世界的模聯來到了我住的城市。', 'Le Model UN mondial est venu dans ma ville.'),
    photos: [{ src: 'model-un/taipei-hwmun2024.jpg', caption: t('Running the Council of Ministers of the Soviet Union', '在蘇聯部長會議主持會議', "À la tête du Conseil des ministres de l'Union soviétique") }],
  },
  {
    id: 'ayimun-14', city: 'kuala-lumpur', conference: 'Asia Youth International MUN, 14th edition',
    date: t('Aug 2024', '2024 年 8 月', 'août 2024'),
    role: t('Chair, World Trade Organization', '世界貿易組織主席', "Président, Organisation mondiale du commerce"),
    text: t('Topic: geopolitical conflicts and the challenges facing free trade agreements.', '議題是地緣政治衝突，以及自由貿易協定面對的挑戰。', 'Sujet : les conflits géopolitiques et les défis des accords de libre-échange.'),
    photos: [{ src: 'model-un/kuala-lumpur-ayimun14.jpg', caption: t('With my fellow WTO chairs in Kuala Lumpur', '和世界貿易組織的其他主席在吉隆坡', "Avec les autres présidents de l'OMC à Kuala Lumpur") }],
  },
  {
    id: 'ayimun-15', city: 'bangkok', conference: 'Asia Youth International MUN, 15th edition',
    date: t('Nov 2024', '2024 年 11 月', 'nov. 2024'),
    role: t('Chair, Human Rights Council', '人權理事會主席', 'Président, Conseil des droits de l’homme'),
    text: t('Topic: combating discrimination in sport.', '議題是打擊運動中的歧視。', 'Sujet : lutter contre les discriminations dans le sport.'),
    photos: [{ src: 'model-un/bangkok-ayimun15.jpg', caption: t('On the dais in Bangkok', '在曼谷的主席台上', 'À la tribune à Bangkok') }],
  },
  {
    id: 'hwmun-2025', city: 'manila', conference: 'Harvard WorldMUN 2025',
    date: t('Mar 2025', '2025 年 3 月', 'mars 2025'),
    role: t('Delegate of India, World Bank', '世界銀行，代表印度', "Délégué de l'Inde, Banque mondiale"),
    text: t('Representing Taiwan on the global stage, debating microloans and the debt trap.', '代表台灣站上國際舞台，在世界銀行討論微型貸款和債務陷阱。', 'Représenter Taïwan sur la scène mondiale, en débattant du microcrédit et du piège de la dette.'),
    photos: [{ src: 'model-un/manila-hwmun2025.jpg', caption: t('Speaking for India in the World Bank', '在世界銀行代表印度發言', "Prise de parole pour l'Inde à la Banque mondiale") }],
  },
  {
    id: 'nccumun-2025', city: 'taipei', conference: 'NCCUMUN 2025',
    date: t('May 2025', '2025 年 5 月', 'mai 2025'),
    role: t('Delegate of Iran, General Assembly Plenary', '大會全體會議，代表伊朗', "Délégué de l'Iran, Assemblée générale plénière"),
    award: BD,
    text: t('An international conference at home: about three quarters of the delegates came from outside Taiwan. Topic: misinformation, disinformation and election meddling.', '在台灣辦的國際會議，大概四分之三的代表都不是台灣人，議題是錯誤資訊、假訊息和選舉干預。', "Une conférence internationale à domicile : environ trois quarts des délégués venaient de l'étranger. Sujet : mésinformation, désinformation et ingérence électorale."),
    photos: [{ src: 'model-un/taipei-nccumun2025.jpg', caption: t('Speaking for Iran in the General Assembly', '在大會代表伊朗發言', "Prise de parole pour l'Iran à l'Assemblée générale") }],
  },
  {
    id: 'jimun-2025', city: 'jakarta', conference: 'Jakarta International MUN',
    date: t('Aug 2025', '2025 年 8 月', 'août 2025'),
    role: t('Co-Chair, Security Council', '安理會共同主席', 'Coprésident, Conseil de sécurité'),
    photos: [{ src: 'model-un/jakarta-jimun2025.jpg', caption: t('Between sessions in Jakarta', '在雅加達的會議空檔', 'Entre deux séances à Jakarta') }],
  },
  {
    id: 'hwmun-2026', city: 'lima', conference: 'Harvard WorldMUN 2026',
    date: t('Mar 2026', '2026 年 3 月', 'mars 2026'),
    role: t('Faculty Advisor, MUN Society Taiwan', '台灣模擬聯合國學會指導老師', 'Faculty Advisor, MUN Society Taiwan'),
    text: t(
      'The other side of the world. I trained 11 delegates for five months, brought them to Lima, and we set up a booth that brought a Taiwanese wedding banquet to the Global Village.',
      '地球的另一邊。我花了五個月培訓 11 位代表，帶他們到利馬，還在 Global Village 擺了一個把台灣辦桌搬過去的攤位。',
      "À l'autre bout du monde. J'ai préparé 11 délégués pendant cinq mois, je les ai emmenés à Lima, et nous avons monté un stand qui a apporté un banquet de mariage taïwanais au Global Village.",
    ),
    href: 'work/harvard-worldmun-2026/',
  },
];
