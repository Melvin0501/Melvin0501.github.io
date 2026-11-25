import type { L } from '../i18n';

// Every case competition, organization and project on the site.
// Each item becomes a row on the homepage and its own page at /work/<slug>/.
// The order inside this file is the order on the site.
//
// `todo` boxes show up on the page as dashed "To fill in" notes.
// Replace them with real text (or delete them) before the site goes live.

export type Category = 'case' | 'org' | 'research' | 'interest';

export interface Section {
  heading: L;
  text?: L;
  bullets?: L[];
  /** A link to another item's page, shown as "label →" (e.g. a sub-page) */
  link?: { href: string; label: L };
  /** A picture shown inside this section, under its text */
  image?: Image;
  todo?: L;
}

/** A photo or slide shown at the bottom of an item's page. `src` is a file in public/ (no leading slash). */
export interface Image {
  src: string;
  alt: L;
  caption?: L;
}

/** A file listed under "Files" on an item's page (e.g. a full deck as PDF). `src` is in public/. */
export interface FileLink {
  src: string;
  label: L;
  /** Short type shown next to the name, e.g. 'PDF' */
  type: string;
}

export interface Item {
  slug: string;
  category: Category;
  /** For category 'org': the id of the organization in `orgs` this item is listed under */
  org?: string;
  icon: string;
  title: L;
  subtitle?: L;
  badge?: L;
  /** Gold badge for wins */
  win?: boolean;
  /** Skills used, shown as "Skills: a, b, c" on the homepage and the detail page */
  skills?: L[];
  date: L;
  where?: L;
  role: L;
  kind?: L;
  summary: L;
  sections: Section[];
  images?: Image[];
  /** Not listed on the homepage or in previous/next (a sub-page reached through a `link`) */
  hidden?: boolean;
  /** Only a homepage row, with no page of its own */
  noPage?: boolean;
  /** Show the thumbnail wide, at its own shape (e.g. a screenshot), instead of a 16:10 crop */
  thumbWide?: boolean;
  /** A "further reading" link shown under this item on the homepage */
  more?: { href: string; label: L };
  /** Homepage thumbnail, if it should differ from the first image (a file in `public/`) */
  thumb?: string;
  files?: FileLink[];
}

const t = (en: string, zh: string, fr: string): L => ({ en, zh, fr });

export const items: Item[] = [
  // ───────────────────────── Case competitions ─────────────────────────
  {
    slug: 'ntu-case-competition',
    category: 'case',
    icon: '🏆',
    title: t(
      'NTU College of Management Business Case Competition',
      '台大管理學院商業個案競賽',
      'Concours de cas du College of Management de NTU',
    ),
    badge: t('Champion · 1st of 38 teams', '冠軍・38 隊中第 1 名', 'Vainqueur · 1er sur 38 équipes'),
    win: true,
    date: t('Dec 2025', '2025 年 12 月', 'déc. 2025'),
    where: t('Taipei', '台北', 'Taipei'),
    role: t(
      'Led framing, storyline and final pitch · team of 4',
      '負責問題拆解、故事線和決賽簡報・4 人團隊',
      'Structuration, storyline et pitch final · équipe de 4',
    ),
    summary: t(
      'First of 38 teams. In the final, we gave HeyTea its edge back in a price war where every new drink gets copied, with a brand built on "inspiration" and a franchise model that pays for quality.',
      '在 38 支隊伍裡拿下冠軍。決賽的題目是喜茶，在大家互相抄新品又一直殺價的市場裡，我們用「靈感」重新定位品牌，再設計一套讓加盟店把品質做好就能賺更多的制度。',
      "Premiers sur 38 équipes. En finale, nous avons redonné un avantage à HeyTea dans une guerre des prix où chaque nouvelle boisson est copiée, avec une marque fondée sur « l'inspiration » et une franchise qui récompense la qualité.",
    ),
    sections: [
      {
        heading: t('Final: HeyTea', '決賽：喜茶', 'Finale : HeyTea'),
        text: t(
          'HeyTea, one of the brands that created China’s premium new-style tea market, had cut most drink prices below ¥30 and started franchising in 2022, growing to more than 4,400 stores by late 2024. Competitors copied its new drinks and the price war was eating into its premium. The question was how it could stay different while it kept growing.',
          '喜茶是帶起中國新式茶飲高端市場的品牌之一，但它後來把大部分飲料降到 30 元人民幣以下，2022 年又開放加盟，到 2024 年底已經超過 4,400 家店。新品很快就被對手模仿，價格戰也一直在吃掉它原本的品牌溢價，所以題目要我們想的是，喜茶要怎麼在繼續擴張的同時，還能保有自己和別人不一樣的地方。',
          "HeyTea, l'une des marques qui ont créé le thé « nouvelle génération » haut de gamme en Chine, avait baissé la plupart de ses prix sous 30 ¥ et lancé la franchise en 2022, jusqu'à plus de 4 400 boutiques fin 2024. Ses nouveautés étaient copiées et la guerre des prix rognait sa prime de marque. La question : comment rester différent tout en continuant à grandir ?",
        ),
        bullets: [
          t(
            'Found two pressures: copied products and price cuts wearing down the brand premium, and fast franchise growth putting quality at risk',
            '我們先找出兩個壓力，一個是產品被抄加上降價，讓品牌溢價越來越薄，另一個是加盟擴張太快，品質開始顧不好',
            "Deux pressions identifiées : produits copiés et baisses de prix qui usent la prime de marque, et croissance rapide de la franchise qui met la qualité en danger",
          ),
          t(
            'Ranked 10 options on an impact × feasibility matrix, and set aside ideas that sounded big but would not pay off, such as an IPO, fast overseas expansion or a cheaper sub-brand',
            '接著把 10 個可能的方向放進影響力和可行性的矩陣裡排順序，像 IPO、快速出海或開一個平價副牌這種聽起來很大、但其實不太划算的做法，就先放到後面',
            "Classement de 10 options sur une matrice impact × faisabilité ; les idées spectaculaires mais peu rentables (IPO, expansion rapide à l'étranger, sous-marque bon marché) ont été écartées",
          ),
          t(
            'Recommended the VIBE strategy: products and stores built around "inspiration"; a "HEYTEA Visionary" programme where customers co-create drinks and share the revenue; cheaper ingredients and first right to open new stores for franchisees with high quality scores; and remote quality checks using data from the brewing machines',
            '最後提出 VIBE 策略，內容包括圍繞「靈感」來設計產品和門市、推出讓顧客一起設計飲品並分潤的「HEYTEA Visionary」計畫、讓品質分數高的加盟店拿到比較便宜的原料和優先展店權，還有用製茶機器的數據做遠端品管',
            "Recommandation : la stratégie VIBE — produits et boutiques pensés autour de « l'inspiration », un programme « HEYTEA Visionary » où les clients co-créent des boissons et partagent les revenus, ingrédients moins chers et priorité d'ouverture pour les franchisés les mieux notés en qualité, et contrôle qualité à distance grâce aux données des machines",
          ),
          t(
            'Laid it out as a three-year roadmap from 2026 to 2028, starting with 10–20 mentor stores that coach the others',
            '整個計畫排成 2026 到 2028 年的三年路線圖，第一步是先挑 10 到 20 家示範店去帶其他門市',
            'Le tout sous forme de feuille de route sur trois ans (2026–2028), en commençant par 10 à 20 boutiques mentors qui accompagnent les autres',
          ),
        ],
      },
      {
        heading: t("Preliminary round: Maxim's Cakes", '初賽：美心西餅', "Premier tour : Maxim's Cakes"),
        text: t(
          "Maxim's Cakes is Hong Kong's largest bakery chain, but younger customers saw it as traditional and not something worth posting about. We had to find a way to win them back without losing the older customers who had grown up with it. We proposed cutting launches down to 36 focused products a year, a year-long story campaign with a character brand that releases a new product every quarter, and one membership programme shared across the Maxim's Group brands.",
          '美心西餅是香港市占最大的連鎖麵包店，但年輕人覺得它很傳統，也不是會想拍照上傳的品牌，所以我們要想辦法把年輕客群拉回來，同時又不能讓從小吃到大的老顧客流失。我們的提案是把每年的新品收斂成 36 個比較有重點的品項，再和角色 IP 合作做一個為期一年的故事活動，每一季推出一款新產品，另外也建議美心集團旗下的品牌共用同一套會員制度。',
          "Maxim's Cakes est la première chaîne de boulangeries de Hong Kong, mais les jeunes la jugeaient traditionnelle et peu « instagrammable ». Il fallait les reconquérir sans perdre les clients plus âgés qui ont grandi avec elle. Nous avons proposé de limiter les lancements à 36 produits ciblés par an, une campagne d'un an avec un personnage sous licence et un nouveau produit chaque trimestre, et un programme de fidélité commun aux marques du groupe Maxim's.",
        ),
      },
      {
        heading: t('My role', '我的角色', 'Mon rôle'),
        text: t(
          'In a team of four, I led the framing of the problem with an issue tree, built the storyline and gave the final pitch.',
          '在四個人的團隊裡，我負責用議題樹把問題拆開、整理整份簡報的故事線，也是決賽上台簡報的人。',
          "Dans une équipe de quatre, j'ai structuré le problème en arbre d'enjeux, construit la storyline et présenté le pitch final.",
        ),
      },
      {
        heading: t('Result', '結果', 'Résultat'),
        text: t('Champion, first out of 38 teams.', '在 38 支隊伍中拿下冠軍。', 'Vainqueurs, premiers sur 38 équipes.'),
      },
    ],
    images: [
      {
        src: 'work/ntu-case-competition/award.jpg',
        alt: t(
          'The four team members and a professor holding the Champion prize board',
          '四位隊員和教授拿著冠軍獎牌合照',
          "Les quatre membres de l'équipe et un professeur avec le panneau du premier prix",
        ),
        caption: t('Receiving the Champion award', '領取冠軍獎項', 'Remise du premier prix'),
      },
    ],
    files: [
      {
        src: 'work/ntu-case-competition/final-heytea-deck.pdf',
        label: t('Final round deck: HeyTea', '決賽簡報：喜茶', 'Présentation de la finale : HeyTea'),
        type: 'PDF',
      },
      {
        src: 'work/ntu-case-competition/preliminary-maxims-deck.pdf',
        label: t("Preliminary round deck: Maxim's Cakes", '初賽簡報：美心西餅', "Présentation du premier tour : Maxim's Cakes"),
        type: 'PDF',
      },
    ],
  },
  {
    slug: 'hsbc-hku-case-challenge',
    category: 'case',
    icon: '🌏',
    title: t(
      'HSBC/HKU Asia Pacific Business Case Challenge 2026',
      'HSBC/HKU 亞太商業個案挑戰賽 2026',
      'HSBC/HKU Asia Pacific Business Case Challenge 2026',
    ),
    date: t('Jun 2026', '2026 年 6 月', 'juin 2026'),
    where: t('Hong Kong', '香港', 'Hong Kong'),
    role: t('NTU representative · main pitch and Q&A lead', '台大代表隊・主講並負責 Q&A', 'Représentant de NTU · pitch principal et Q&R'),
    summary: t(
      "Taiwan's only team among 24 universities from 20 markets. Three live cases, each solved by hand in three hours with no laptops or phones.",
      '和來自 20 個市場的 24 所大學一起比賽，台大是台灣唯一的隊伍。總共三個現場個案，每一題都只有三個小時，而且不能用筆電和手機，全部用手寫完成。',
      "Seule équipe de Taïwan parmi 24 universités de 20 marchés. Trois cas en direct, chacun résolu à la main en trois heures, sans ordinateur ni téléphone.",
    ),
    sections: [
      {
        heading: t('The competition', '比賽形式', 'La compétition'),
        text: t(
          "Organised by the Asia Case Research Centre at HKU Business School and supported by HSBC. Each team gets three live cases; each one is solved in a three-hour round with no laptops or phones, then presented to a panel of judges. NTU's team was the only one from Taiwan.",
          '這個比賽由港大經管學院的亞洲個案研究中心主辦、滙豐贊助。每一隊都要解三個現場個案，每一題只有三個小時，過程中不能用筆電和手機，時間到就直接上台向評審簡報。台大是唯一來自台灣的隊伍。',
          "Organisée par l'Asia Case Research Centre de la HKU Business School avec le soutien de HSBC. Chaque équipe reçoit trois cas en direct, chacun résolu en trois heures sans ordinateur ni téléphone, puis présenté à un jury. L'équipe de NTU était la seule de Taïwan.",
        ),
      },
      {
        heading: t('My role', '我的角色', 'Mon rôle'),
        text: t(
          'I delivered the main pitch and led the Q&A with the judges.',
          '我負責主要的簡報，並帶領和評審之間的 Q&A。',
          "J'ai présenté le pitch principal et mené les questions-réponses avec le jury.",
        ),
      },
      {
        heading: t('The three cases', '三個個案', 'Les trois cas'),
        bullets: [
          t(
            'Revitalising Pop Mart',
            '泡泡瑪特（Pop Mart）的品牌再活化',
            'Relancer Pop Mart',
          ),
          t(
            'Promoting stablecoins in Hong Kong',
            '在香港推廣穩定幣',
            'Promouvoir les stablecoins à Hong Kong',
          ),
          t(
            "Hadia Ghaleb's global expansion strategy",
            'Hadia Ghaleb 的全球擴張策略',
            "La stratégie d'expansion internationale de Hadia Ghaleb",
          ),
        ],
      },
      {
        heading: t('Inside the Hadia Ghaleb case', '深入 Hadia Ghaleb 這一題', 'Zoom sur le cas Hadia Ghaleb'),
        text: t(
          'Working on paper, we split the answer in two. On product, high-end eyewear and bags build the brand image, and that image then sells everyday lines such as sunglasses, denim and modular athleisure. On marketing, what the brand already does well (celebrity and IP collaborations, pop-ups and retail) is paired with new formats built for each market, like catwalk shows, flagship experience stores and offline campaigns.',
          '我們在紙上把答案分成兩塊，產品方面是先用高端的眼鏡和包包把品牌形象做起來，再靠這個形象去帶動墨鏡、牛仔系列和模組化運動休閒服這些日常商品；行銷方面則是把品牌原本就做得不錯的名人和 IP 聯名、快閃店和零售通路，搭配為新市場量身設計的走秀、旗艦體驗店和線下活動。',
          "Sur papier, nous avons séparé la réponse en deux. Côté produit, lunettes et sacs haut de gamme construisent l'image, qui fait ensuite vendre des lignes du quotidien : lunettes de soleil, denim, athleisure modulable. Côté marketing, ce que la marque fait déjà bien (collaborations avec des célébrités et des licences, pop-ups, retail) est complété par des formats conçus pour chaque marché : défilés, boutiques-expériences, campagnes hors ligne.",
        ),
      },
      {
        heading: t('The field: 24 universities', '參賽學校：24 所大學', 'Les participants : 24 universités'),
        bullets: [
          t(
            'East Asia: Peking University, Fudan University, The University of Hong Kong, City University of Hong Kong, Macau University of Science and Technology, Korea University, Ritsumeikan Asia Pacific University, National Taiwan University',
            '東亞：北京大學、復旦大學、香港大學、香港城市大學、澳門科技大學、高麗大學、立命館亞洲太平洋大學、國立臺灣大學',
            'Asie de l’Est : Peking University, Fudan University, The University of Hong Kong, City University of Hong Kong, Macau University of Science and Technology, Korea University, Ritsumeikan Asia Pacific University, National Taiwan University',
          ),
          t(
            'Southeast Asia: Nanyang Technological University, Chulalongkorn University, Chulalongkorn Business School, Universiti Malaya, Sampoerna University, University of the Philippines Los Baños, Foreign Trade University',
            '東南亞：南洋理工大學、朱拉隆功大學、朱拉隆功大學商學院、馬來亞大學、印尼 Sampoerna University、菲律賓大學洛斯巴尼奧斯分校、越南外貿大學',
            'Asie du Sud-Est : Nanyang Technological University, Chulalongkorn University, Chulalongkorn Business School, Universiti Malaya, Sampoerna University, University of the Philippines Los Baños, Foreign Trade University',
          ),
          t(
            'South Asia: Christ University (Bangalore), Shri Ram College of Commerce (University of Delhi), Bangladesh University of Professionals, University of Colombo',
            '南亞：印度 Christ University（班加羅爾）、德里大學 Shri Ram 商學院、孟加拉 Bangladesh University of Professionals、斯里蘭卡可倫坡大學',
            'Asie du Sud : Christ University (Bangalore), Shri Ram College of Commerce (University of Delhi), Bangladesh University of Professionals, University of Colombo',
          ),
          t(
            'Oceania: The University of Sydney, University of Auckland',
            '大洋洲：雪梨大學、奧克蘭大學',
            'Océanie : The University of Sydney, University of Auckland',
          ),
          t(
            'Europe, Africa and the Middle East: University of Amsterdam, The American University in Cairo, University of Mauritius',
            '歐洲、非洲和中東：阿姆斯特丹大學、開羅美國大學、模里西斯大學',
            'Europe, Afrique et Moyen-Orient : University of Amsterdam, The American University in Cairo, University of Mauritius',
          ),
        ],
      },
      {
        heading: t('What I learned', '學到的事', "Ce que j'en retiens"),
        todo: t(
          'One or two sentences on what competing internationally taught you.',
          '用一兩句話寫參加國際賽讓你學到什麼。',
          "Une ou deux phrases sur ce que la compétition internationale vous a appris.",
        ),
      },
    ],
    images: [
      {
        src: 'work/hsbc-hku-case-challenge/pitch.jpg',
        alt: t(
          'Melvin presenting a handwritten slide on approaches to new markets to the judges',
          '黃隆翔向評審講解手寫的新市場策略',
          'Melvin présentant au jury une slide manuscrite sur les approches de nouveaux marchés',
        ),
        caption: t('Presenting our handwritten answer to the judges', '向評審報告我們手寫的答案', 'Présentation de notre réponse manuscrite au jury'),
      },
      {
        src: 'work/hsbc-hku-case-challenge/team.jpg',
        alt: t('The NTU team on stage with certificates', '台大隊伍在台上拿著證書合照', "L'équipe de NTU sur scène avec ses certificats"),
        caption: t('The NTU team at the closing ceremony', '台大隊伍在閉幕典禮上', "L'équipe de NTU à la cérémonie de clôture"),
      },
      {
        src: 'work/hsbc-hku-case-challenge/certificate.jpg',
        alt: t('Certificate of participation from HKU Business School', '港大經管學院頒發的參賽證書', 'Certificat de participation de la HKU Business School'),
        caption: t('Certificate of participation', '參賽證書', 'Certificat de participation'),
      },
    ],
  },
  {
    slug: 'bain-cup',
    category: 'case',
    icon: '📊',
    title: t('Bain Cup Case Competition', 'Bain Cup 個案競賽', 'Bain Cup'),
    badge: t('Outstanding Case Award', '優秀個案獎', 'Outstanding Case Award'),
    win: true,
    date: t('May 2026', '2026 年 5 月', 'mai 2026'),
    where: t('China & Taiwan (Remote)', '中國與台灣（線上）', 'Chine et Taïwan (à distance)'),
    role: t('Team member · city-by-city analysis', '團隊成員・負責城市分級分析', "Membre de l'équipe · analyse ville par ville"),
    summary: t(
      'Outstanding Case Award. We modelled 10 loss-making cities in Excel to show why growth was making the losses worse, and built a four-tier plan to break even.',
      '拿到優秀個案獎。我們用 Excel 把 10 個虧損城市的單位經濟一個一個算出來，說明為什麼越擴張反而虧越多，再依照結果把城市分成四級，規劃出各自走向損益兩平的路。',
      "Outstanding Case Award. Nous avons modélisé 10 villes déficitaires dans Excel pour montrer pourquoi la croissance aggravait les pertes, puis construit un plan en quatre niveaux pour atteindre l'équilibre.",
    ),
    sections: [
      {
        heading: t('The question', '題目', 'La question'),
        text: t(
          "Instant Retail Co. runs on-demand delivery in 10 smaller (Tier 3–4) cities in China. The market was booming: on-demand retail went from 26% to about 50% penetration in five years, and Meituan, Taobao and JD were pouring subsidies into exactly these cities. Yet 9 of the company's 10 cities were losing money, about ¥170M a year in total, and not one was sustainably profitable. How could it grow profitably?",
          'Instant Retail Co. 在中國 10 個三、四線城市做即時零售配送。這個市場其實正在快速成長，即時零售的滲透率在五年內從 26% 變成大約 50%，美團、淘寶和京東也都在這些城市大舉砸補貼。但這家公司的 10 個城市裡有 9 個在虧錢，一年加起來大約虧人民幣 1.7 億，而且沒有一個城市是穩定獲利的，所以題目要問的是，它要怎麼做才能一邊成長一邊賺錢。',
          "Instant Retail Co. fait de la livraison à la demande dans 10 villes chinoises de rang 3–4. Le marché explosait : la pénétration du commerce instantané est passée de 26 % à environ 50 % en cinq ans, et Meituan, Taobao et JD inondaient ces villes de subventions. Pourtant 9 villes sur 10 perdaient de l'argent, environ 170 M¥ par an au total, et aucune n'était durablement rentable. Comment croître de façon rentable ?",
        ),
      },
      {
        heading: t('How we worked as a team', '我們的分工流程', "Notre façon de travailler en équipe"),
        text: t(
          'We worked in four steps, each one built on the last, so the whole deck told one story:',
          '我們把整個題目拆成四個步驟，每一步都接著前一步的結論往下做，讓整份簡報最後只講一個完整的故事：',
          "Nous avons avancé en quatre étapes, chacune bâtie sur la précédente, pour que toute la présentation raconte une seule histoire :",
        ),
        bullets: [
          t(
            'Diagnose: find out whether the losses were cyclical or built into the model',
            '診斷：先判斷虧損是景氣循環造成的，還是商業模式本身的問題',
            "Diagnostiquer : déterminer si les pertes étaient conjoncturelles ou inscrites dans le modèle",
          ),
          t(
            'Prioritise: compare the 10 cities and decide where to invest, fix, test or pull back',
            '排序：把 10 個城市拿來比較，決定哪些要加碼、哪些要先修正、哪些先測試、哪些要收手',
            'Prioriser : comparer les 10 villes et décider où investir, corriger, tester ou se retirer',
          ),
          t(
            'Recommend: choose the few levers that close the gap per order',
            '建議：挑出少數幾個真的能把每一單的缺口補起來的槓桿',
            "Recommander : choisir les quelques leviers qui comblent l'écart par commande",
          ),
          t(
            'Implement: turn it into a 36-month roadmap with KPI gates and risks',
            '落地：把建議排成 36 個月的路線圖，每個階段都設好 KPI 門檻和風險對策',
            'Mettre en œuvre : en faire une feuille de route sur 36 mois, avec des seuils de KPI et les risques',
          ),
        ],
      },
      {
        heading: t('Method: Excel modelling', '方法：Excel 建模', 'Méthode : modélisation Excel'),
        bullets: [
          t(
            'Built a city-level unit-economics model in Excel: revenue per order (average order ¥45–62) against fulfilment cost (¥13–16) and subsidies (¥3.5–4.9) for each of the 10 cities',
            '用 Excel 建了一個以城市為單位的單位經濟模型，把每個城市每一單的營收（客單價人民幣 45 到 62 元）和配送成本（13 到 16 元）、補貼（3.5 到 4.9 元）放在一起比',
            "Modèle Excel d'économie unitaire par ville : revenu par commande (panier moyen 45–62 ¥) face au coût de livraison (13–16 ¥) et aux subventions (3,5–4,9 ¥), pour chacune des 10 villes",
          ),
          t(
            'Scored every city on readiness (order value, share of high-value users, chain-store supply, cost burden) and on market potential (daily orders × growth), and put all 10 on one bubble chart sized by annual loss',
            '再替每個城市打分數，一個軸看體質（客單價、高價值用戶比例、連鎖商家供給、成本負擔），另一個軸看市場潛力（每日訂單量乘上成長率），把 10 個城市放在同一張泡泡圖上，泡泡大小就是一年虧多少',
            "Chaque ville notée sur sa maturité (panier, part d'utilisateurs à forte valeur, offre des chaînes, poids des coûts) et son potentiel (commandes par jour × croissance), puis les 10 placées sur un même graphique à bulles dont la taille indique la perte annuelle",
          ),
          t(
            'Built a per-order bridge showing how much of the gap each lever closes: category mix, targeted subsidies, lighter fulfilment and chain merchants',
            '做了一張每一單的拆解圖，算出每個槓桿各可以補回多少缺口，包括品類組合、精準補貼、輕資產履約和連鎖商家',
            "Pont par commande montrant ce que chaque levier comble : mix de catégories, subventions ciblées, logistique allégée et enseignes de chaîne",
          ),
          t(
            'Stress-tested the cases that did not fit, like Xuzhou: 110,000 orders a day and 32% market share, yet ¥25M a year in losses',
            '也特別去檢查不合直覺的城市，例如徐州一天有 11 萬單、市占 32%，卻還是一年虧 2,500 萬',
            "Vérification des cas contre-intuitifs, comme Xuzhou : 110 000 commandes par jour et 32 % de part de marché, mais 25 M¥ de pertes par an",
          ),
        ],
      },
      {
        heading: t('What we found', '我們的發現', 'Ce que nous avons trouvé'),
        text: t(
          'The losses were structural, not cyclical. In these cities each order was too small to cover a fixed delivery cost, low market share forced heavy subsidies, and weak chain-store supply slowed every order down. So adding volume made the losses bigger instead of spreading them out.',
          '我們發現虧損是結構性的，不是景氣循環的問題。在這些城市裡，每一單的金額太小，蓋不過固定的配送成本，市占低又只能一直砸補貼，再加上連鎖商家太少，出貨效率也上不來，所以訂單越多反而虧越多，而不是把成本攤薄。',
          "Les pertes étaient structurelles, pas conjoncturelles. Dans ces villes, chaque commande était trop petite pour couvrir un coût de livraison fixe, une faible part de marché imposait de fortes subventions et le manque d'enseignes de chaîne ralentissait chaque commande. Plus de volume creusait donc les pertes au lieu de les diluer.",
        ),
      },
      {
        heading: t('What we recommended', '我們的建議', 'Ce que nous avons recommandé'),
        bullets: [
          t(
            'Four city tiers: consolidate the three nearly profitable cities, fix density in the three high-volume loss-makers before expanding, put Yichang on a 12-month KPI gate, and stop investing in the three weakest',
            '把城市分成四級：快要損益兩平的三個城市先穩住獲利；三個訂單很多卻在虧錢的城市，先把密度做起來再談擴張；宜昌設一個 12 個月的 KPI 門檻；最弱的三個城市就停止投資',
            "Quatre niveaux de villes : consolider les trois villes proches de l'équilibre, densifier les trois villes à fort volume avant d'étendre, soumettre Yichang à un seuil de KPI à 12 mois, et cesser d'investir dans les trois plus faibles",
          ),
          t(
            'Three levers: shift from food delivery to everyday goods with bigger baskets, use partner stores before building warehouses, and raise the share of chain merchants to 30%+',
            '三個槓桿：從外送餐飲轉向客單價比較高的日用品、先用合作店家的庫存而不是自己蓋倉庫，還有把連鎖商家的比例拉到 30% 以上',
            "Trois leviers : passer de la livraison de repas aux produits du quotidien à plus gros panier, s'appuyer sur les magasins partenaires avant de construire des entrepôts, et porter la part des enseignes de chaîne au-delà de 30 %",
          ),
          t(
            'A 36-month roadmap: stabilise, build profitable beachheads, then scale the playbook that works',
            '36 個月的路線圖：先止血，再做出幾個能獲利的據點，最後把驗證過的做法複製出去',
            "Une feuille de route sur 36 mois : stabiliser, créer des têtes de pont rentables, puis déployer ce qui marche",
          ),
        ],
      },
      {
        heading: t('My role', '我的角色', 'Mon rôle'),
        text: t(
          'I built the city-by-city analysis that sorted the 10 cities into four tiers, which shaped how the rest of our recommendation was organised.',
          '我負責逐一分析每個城市，把 10 個城市分成四個等級，後面整份建議也是照著這個分級去安排的。',
          "J'ai mené l'analyse ville par ville qui a classé les 10 villes en quatre groupes, sur laquelle s'est organisée toute notre recommandation.",
        ),
      },
      {
        heading: t('What the judges said', '評審的回饋', 'Le retour du jury'),
        todo: t(
          'Any feedback from the judges or Bain consultants, and what the award recognised.',
          '評審或 Bain 顧問給了什麼回饋？這個獎肯定的是什麼？',
          'Les retours du jury ou des consultants de Bain, et ce que le prix récompensait.',
        ),
      },
      {
        heading: t('Result', '結果', 'Résultat'),
        text: t('Outstanding Case Award.', '優秀個案獎。', 'Outstanding Case Award.'),
      },
    ],
    images: [
      {
        src: 'work/bain-cup/bain-cover.jpg',
        alt: t('Cover slide: Instant Retail Co. Profitable Growth Strategy', '簡報封面：Instant Retail Co. 獲利成長策略', 'Couverture : Instant Retail Co. Profitable Growth Strategy'),
        caption: t('Our deck: "Instant Retail Co. Profitable Growth Strategy"', '我們的簡報：Instant Retail Co. 獲利成長策略', 'Notre présentation : « Instant Retail Co. Profitable Growth Strategy »'),
      },
    ],
  },
  {
    slug: 'loreal-brandstorm',
    category: 'case',
    icon: '💡',
    title: t("L'Oréal Brandstorm 2024", "L'Oréal Brandstorm 2024", "L'Oréal Brandstorm 2024"),
    date: t('2024', '2024 年', '2024'),
    where: t('Taipei', '台北', 'Taipei'),
    role: t('Team member · consumer and market research', '團隊成員・負責消費者和市場研究', "Membre de l'équipe · études consommateurs et marché"),
    summary: t(
      "Designed AROMAX for L'Oréal Men Expert: a deodorant stick with built-in sensors, colour-changing odour strips and an AI app that tell men when and where to reapply.",
      "替萊雅的 L'Oréal Men Expert 設計 AROMAX，一支內建感測器的體香棒，搭配會變色的氣味檢測貼片和 AI app，告訴使用者什麼時候、在哪裡該補擦。",
      "Conception d'AROMAX pour L'Oréal Men Expert : un stick déodorant à capteurs, des patchs qui changent de couleur et une app IA qui indiquent quand et où en remettre.",
    ),
    sections: [
      {
        heading: t('The insight', '我們的觀察', 'Le constat'),
        text: t(
          "72% of millennial men worry about body odour and use odour-control products at least twice a day, yet deodorant is still put on out of routine rather than when it is actually needed. Body odour also changes from day to day with diet, heat and humidity, and stress.",
          '有 72% 的千禧世代男性會擔心自己的體味，一天至少用兩次除臭產品，但大家擦體香劑還是照習慣擦，而不是在真的需要的時候才擦。而且體味每天都會因為飲食、天氣的溫度和濕度、還有壓力而不一樣。',
          "72 % des hommes millennials s'inquiètent de leur odeur corporelle et utilisent un produit anti-odeur au moins deux fois par jour, mais le déodorant s'applique encore par habitude plutôt qu'au moment où il est utile. Et l'odeur change d'un jour à l'autre selon l'alimentation, la chaleur, l'humidité et le stress.",
        ),
      },
      {
        heading: t('The idea', '我們的提案', "L'idée"),
        bullets: [
          t(
            "Odour Detection Stick: built-in sensors apply deodorant precisely where it is needed, with a refillable cartridge that takes your favourite L'Oréal deodorant",
            "氣味檢測棒：內建感測器，可以把體香劑精準擦在需要的地方，而且用的是可替換的補充匣，裡面可以裝自己喜歡的萊雅體香劑",
            "Stick détecteur : des capteurs appliquent le déodorant là où il faut, avec une cartouche rechargeable compatible avec votre déodorant L'Oréal préféré",
          ),
          t(
            'Odour Detection Strips: light patches that stick to clothing and turn from yellow to dark red as odour builds up',
            '氣味檢測貼片：很輕、可以直接貼在衣服上，味道越重顏色就會從黃色慢慢變成深紅色',
            "Patchs détecteurs : légers, ils se collent aux vêtements et passent du jaune au rouge foncé quand l'odeur augmente",
          ),
          t(
            'AROMAX app: reads your schedule and the weather, tracks trends over time and reminds you before odour becomes a problem',
            'AROMAX app：會參考使用者的行程和天氣、記錄長期的變化，在味道變成問題之前就先提醒',
            "App AROMAX : elle tient compte de l'agenda et de la météo, suit l'évolution dans le temps et prévient avant que l'odeur ne devienne un problème",
          ),
        ],
      },
      {
        heading: t('Going to market', '上市策略', 'Mise sur le marché'),
        text: t(
          'We targeted men aged 25 to 50 in Europe and the US, with a "Your Scent Clinic" pop-up offering scent assessments and product trials, and a brand-ambassador film that treats personal scent as part of a first impression rather than a taboo.',
          '我們鎖定歐洲和美國 25 到 50 歲的男性，規劃了一個「Your Scent Clinic」快閃店，讓大家可以做氣味檢測和試用產品，再搭配品牌大使拍的形象影片，把個人氣味當成第一印象的一部分，而不是一個不能講的話題。',
          "Cible : les hommes de 25 à 50 ans en Europe et aux États-Unis, avec un pop-up « Your Scent Clinic » (diagnostic olfactif, essais produits) et un film avec un ambassadeur qui présente l'odeur personnelle comme une partie de la première impression, et non comme un tabou.",
        ),
      },
      {
        heading: t('My role', '我的角色', 'Mon rôle'),
        text: t(
          'I led the consumer and market research behind the idea: what causes male body odour, how men feel about it, and which markets to target first.',
          '我負責整個提案背後的消費者和市場研究，包括男性體味是怎麼來的、男生自己怎麼看這件事，還有應該先從哪些市場切入。',
          "J'ai mené les études consommateurs et marché derrière l'idée : les causes de l'odeur corporelle masculine, ce qu'en pensent les hommes, et les marchés à viser en premier.",
        ),
      },
      {
        heading: t('What I took away', '收穫', "Ce que j'en retiens"),
        todo: t(
          'This was your first case competition, so a sentence on what you learned and carried into the later ones works well here.',
          '這是你的第一場個案競賽，可以寫一句你從這裡學到、之後帶進其他比賽的東西。',
          "C'était votre premier concours : une phrase sur ce que vous en avez retenu pour la suite.",
        ),
      },
    ],
    images: [
      {
        src: 'work/loreal-brandstorm/aromax-product.jpg',
        alt: t(
          'Proposal slide showing the AROMAX stick, detection strips and app screens',
          '提案投影片，介紹 AROMAX 檢測棒、貼片和 app 畫面',
          "Slide de la proposition montrant le stick AROMAX, les patchs et l'app",
        ),
        caption: t('The AROMAX system: stick, strips and app', 'AROMAX 整套系統：檢測棒、貼片和 app', 'Le système AROMAX : stick, patchs et app'),
      },
      {
        src: 'work/loreal-brandstorm/aromax-insight.jpg',
        alt: t('Proposal slide on what causes male body odour', '提案投影片，說明影響男性體味的因素', "Slide de la proposition sur les causes de l'odeur corporelle masculine"),
        caption: t('Research behind the idea', '提案背後的研究', "Les recherches derrière l'idée"),
      },
    ],
  },

  // ───────────────────────── Organization & project experience ─────────────────────────
  // Each item here belongs to an organization (`org`, see `orgs` below) and is listed under it.
  {
    slug: 'echo-program',
    category: 'org',
    org: 'glo',
    icon: '🎤',
    title: t('ECHO Program', 'ECHO 計畫', 'Programme ECHO'),
    subtitle: t(
      'A 2-day English public-speaking program at Global Leadership Organization (GLO)',
      'Global Leadership Organization（GLO）的兩天英文演講培訓計畫',
      'Un programme de prise de parole en anglais de 2 jours, à la Global Leadership Organization (GLO)',
    ),
    date: t('Jul 2025 – Jan 2026', '2025 年 7 月 – 2026 年 1 月', 'juil. 2025 – janv. 2026'),
    where: t('Taipei', '台北', 'Taipei'),
    role: t('Director of Product Management', '產品管理總監', 'Directeur produit'),
    summary: t(
      'Led a 5-person team that took the 2-day program for 40 students from a loss to break-even, with 100% satisfaction and a Net Promoter Score of 87.5.',
      '帶著 5 個人的團隊，把這個 40 位學生參加、為期兩天的計畫從虧損做到損益兩平，滿意度 100%，淨推薦值（NPS）87.5。',
      "J'ai dirigé une équipe de 5 personnes qui a fait passer ce programme de 2 jours pour 40 élèves du déficit à l'équilibre, avec 100 % de satisfaits et un Net Promoter Score de 87,5.",
    ),
    sections: [
      {
        heading: t('ECHO at a glance', 'ECHO 簡介', 'ECHO en bref'),
        text: t(
          'A 2-day English public-speaking program for 40 students and 6 instructors, run by a team of 5 on a NT$100,000 budget. The previous edition had run at a loss.',
          'ECHO 是一個為期兩天的英文演講培訓計畫，有 40 位學生和 6 位講師參加，由 5 個人的團隊用新台幣 10 萬元的預算辦起來，而前一屆是虧損的。',
          "Un programme de prise de parole en anglais de 2 jours pour 40 élèves et 6 formateurs, organisé par une équipe de 5 avec un budget de 100 000 NT$. L'édition précédente était déficitaire.",
        ),
      },
      {
        heading: t('Leading the team', '帶領團隊', "Diriger l'équipe"),
        text: t(
          'As Director of Product Management, I led the 5-person team that ran ECHO from the first plan to the two event days. I set the direction, split the work so every member owned a clear piece of it, and kept everyone moving at the same pace through weekly meetings. Most of what follows came out of that team working together.',
          '擔任產品管理總監的時候，我帶著一個 5 個人的團隊，從一開始的規劃一路做到活動的那兩天。我負責定方向，把工作拆開讓每個人都有自己清楚負責的部分，再透過每週的會議讓大家的進度對得上，下面這些成果其實都是整個團隊一起做出來的。',
          "Comme directeur produit, j'ai dirigé l'équipe de 5 personnes qui a mené ECHO, du premier plan jusqu'aux deux jours de l'événement. J'ai fixé le cap, réparti le travail pour que chacun ait une partie clairement à lui, et gardé tout le monde au même rythme grâce à des réunions hebdomadaires. L'essentiel de ce qui suit est le fruit de ce travail d'équipe.",
        ),
      },
      {
        heading: t('What we did', '我們做了哪些事', 'Ce que nous avons fait'),
        bullets: [
          t(
            'Traced the previous loss mainly to venue cost and moved to an NTNU campus venue, cutting venue spend by over 50%; secured a sponsor and tightened catering and transport',
            '找出前一屆虧損主要來自場地費，於是把場地換到師大校園，場地支出減少一半以上，另外也拉到一個贊助商，並壓低餐飲和交通的費用',
            "Identification du coût de la salle comme cause principale de la perte : passage sur le campus de NTNU, dépenses de salle réduites de plus de 50 % ; obtention d'un sponsor et maîtrise des frais de restauration et de transport",
          ),
          t(
            'Broke the monthly roadmap into sub-projects with clear owners, tracked in weekly meetings, and built a staff run-sheet giving every member a station for each time slot',
            '把每個月的進度拆成有明確負責人的子專案，每週開會追蹤，並做了一份工作人員流程表，讓每個人在每個時段都知道自己該在哪裡',
            'Découpage de la feuille de route mensuelle en sous-projets avec un responsable chacun, suivi hebdomadaire, et planning de staff attribuant un poste à chaque membre pour chaque créneau',
          ),
          t(
            'Cross-checked 40 registrations against discount codes and referral answers: 45% of sign-ups came through the Model UN channel',
            '把 40 筆報名資料和折扣碼、推薦來源交叉比對，發現 45% 的報名來自模擬聯合國的管道',
            'Recoupement des 40 inscriptions avec les codes promo et les réponses de parrainage : 45 % venaient du réseau Model UN',
          ),
          t(
            'Designed the feedback survey: 100% satisfaction and an NPS of 87.5 (29 of 40 responding)',
            '設計回饋問卷，結果滿意度 100%，NPS 87.5（40 人中有 29 人回覆）',
            'Conception du questionnaire de satisfaction : 100 % de satisfaits et un NPS de 87,5 (29 réponses sur 40)',
          ),
          t(
            "Replaced the lowest-rated session with a persuasive-speaking module — ECHO's first external partnership",
            '把前一屆評分最低的課換成說服性演講的課程，這也是 ECHO 第一次和外部單位合作',
            "Remplacement de la session la moins bien notée par un module de discours persuasif — le premier partenariat externe d'ECHO",
          ),
        ],
      },
      {
        heading: t('Before ECHO: Business Development Associate', '在這之前：商務開發專員', 'Avant ECHO : chargé de développement'),
        text: t(
          "Jan – Jun 2025. Onboarded 2 of the chapter's 15 partner organizations: the Harvard Undergraduates in Asia Program and MUN Society Taiwan.",
          '2025 年 1 月到 6 月，我為分會談成了當季 15 個合作夥伴中的 2 個，分別是 Harvard Undergraduates in Asia Program 和台灣模擬聯合國學會。',
          "Janv. – juin 2025. Signature de 2 des 15 partenaires de l'antenne : le Harvard Undergraduates in Asia Program et MUN Society Taiwan.",
        ),
      },
    ],
    images: [
      {
        src: 'work/echo-program/group.jpg',
        alt: t('Group photo of ECHO participants and staff outside a campus building', 'ECHO 學員和工作人員在校園大樓前的大合照', "Photo de groupe des participants et de l'équipe d'ECHO devant un bâtiment du campus"),
        caption: t('Students and staff at ECHO', 'ECHO 的學員和工作人員', "Les élèves et l'équipe d'ECHO"),
      },
    ],
  },
  {
    slug: 'harvard-worldmun-2026',
    category: 'org',
    org: 'mst',
    icon: '🌎',
    title: t('Harvard WorldMUN 2026, Lima', 'Harvard WorldMUN 2026（利馬）', 'Harvard WorldMUN 2026, Lima'),
    date: t('Nov 2025 – Mar 2026', '2025 年 11 月 – 2026 年 3 月', 'nov. 2025 – mars 2026'),
    where: t('Lima, Peru', '秘魯利馬', 'Lima, Pérou'),
    role: t('Faculty Advisor', '指導老師（Faculty Advisor）', 'Faculty Advisor'),
    summary: t(
      'Trained 11 delegates for a conference of 500+ delegates from 40+ countries.',
      '培訓 11 位代表，去參加一場有來自 40 多個國家、超過 500 位代表的會議。',
      "J'ai préparé 11 délégués pour une conférence de plus de 500 délégués venus de plus de 40 pays.",
    ),
    sections: [
      {
        heading: t('What I did', '我做的事', "Ce que j'ai fait"),
        text: t(
          'As Faculty Advisor for MUN Society Taiwan, I led a 3-person team that trained 11 delegates for Harvard WorldMUN 2026 in Lima — a conference of 500+ delegates from 40+ countries.',
          '我以台灣模擬聯合國學會指導老師的身分，帶著 3 個人的團隊培訓 11 位代表去利馬參加 Harvard WorldMUN 2026，這場會議有來自 40 多個國家、超過 500 位代表。',
          "Comme Faculty Advisor de MUN Society Taiwan, j'ai dirigé une équipe de 3 personnes qui a préparé 11 délégués pour Harvard WorldMUN 2026 à Lima — plus de 500 délégués de plus de 40 pays.",
        ),
      },
      {
        heading: t('Building the delegation', '從零組出一支代表團', 'Construire la délégation'),
        bullets: [
          t(
            'Opened recruitment in December: built the application form and promoted the delegation at universities across Taiwan',
            '從 12 月就開始整理報名表單，到各大學去宣傳，把有興趣的人一個一個找進來',
            'Lancement du recrutement en décembre : formulaire de candidature et promotion de la délégation dans les universités de tout Taïwan',
          ),
          t(
            'Designed and ran 10 training sessions to get 11 delegates ready for an international conference',
            '規劃並帶了 10 場培訓，讓 11 位代表都準備好上國際會議的場',
            "Conception et animation de 10 séances de formation pour préparer 11 délégués à une conférence internationale",
          ),
          t(
            "Reached out to MUN trainers abroad to bring their debate and negotiation methods to Taiwanese university students, so our delegates prepared to an international standard",
            '主動聯絡國外也在教模聯的人，把他們那一套辯論和談判的方法帶回來給台灣的大學生，讓我們的代表是用國際的標準在準備，再一起帶出去比',
            "Prise de contact avec des formateurs de Model UN à l'étranger pour transmettre leurs méthodes de débat et de négociation aux étudiants taïwanais, afin que nos délégués se préparent selon des standards internationaux",
          ),
        ],
      },
      {
        heading: t('Five months of preparation', '五個月的密集籌備', 'Cinq mois de préparation'),
        text: t(
          'From November 2025 to March 2026 the team prepared everything for Lima together: the conference materials, the logistics of taking a delegation to South America, and how we would present Taiwan to more than 40 countries.',
          '從 2025 年 11 月到 2026 年 3 月，我和團隊一起密集籌備，從會議要用的資料、把整個代表團帶到南美洲的大小事，到我們要怎麼在 40 多個國家面前介紹台灣，全部都是一起一點一點準備起來的。',
          "De novembre 2025 à mars 2026, l'équipe a tout préparé ensemble pour Lima : les documents de conférence, la logistique d'un voyage en Amérique du Sud avec toute la délégation, et la manière de présenter Taïwan à plus de 40 pays.",
        ),
      },
      {
        heading: t('Bringing Taiwan to Lima', '把台灣帶到利馬', 'Apporter Taïwan à Lima'),
        text: t(
          "For the conference's cultural night, we built a booth around a Taiwanese wedding banquet: red tablecloths, paper-cut decorations and banquet drinks, served by a delegation in qipao and changshan. It was our way of sharing a piece of Taiwanese culture with delegates from around the world.",
          '會議的文化之夜，我們用台灣喜宴當主題擺了一個攤位，有紅桌巾、剪紙裝飾，還有喜宴上會喝的飲料，大家也都穿上旗袍和長袍來招待，用這種方式把一點台灣的文化分享給來自世界各地的代表。',
          "Pour la soirée culturelle de la conférence, nous avons monté un stand sur le thème d'un banquet de mariage taïwanais : nappes rouges, décorations en papier découpé et boissons de banquet, servies par une délégation en qipao et changshan. Notre façon de partager un peu de la culture taïwanaise avec des délégués du monde entier.",
        ),
      },
    ],
    images: [
      {
        src: 'work/harvard-worldmun-2026/badge.jpg',
        alt: t('My Faculty Advisor badge at the Harvard WorldMUN 2026 opening ceremony', '我在 Harvard WorldMUN 2026 開幕典禮上拿著指導老師識別證', "Mon badge de Faculty Advisor à la cérémonie d'ouverture de Harvard WorldMUN 2026"),
        caption: t('Faculty Advisor badge at the opening ceremony', '開幕典禮上的指導老師識別證', "Badge de Faculty Advisor à la cérémonie d'ouverture"),
      },
      {
        src: 'work/harvard-worldmun-2026/lima.jpg',
        alt: t('Three members of the delegation in Lima', '代表團的三位成員在利馬', 'Trois membres de la délégation à Lima'),
        caption: t('In Lima', '在利馬', 'À Lima'),
      },
      {
        src: 'work/harvard-worldmun-2026/cultural-booth.jpg',
        alt: t('Our Taiwanese wedding banquet booth at the cultural night', '我們在文化之夜擺的台灣喜宴攤位', 'Notre stand de banquet de mariage taïwanais à la soirée culturelle'),
        caption: t('Our Taiwanese wedding banquet booth at the cultural night', '文化之夜的台灣喜宴攤位', 'Notre stand de banquet de mariage taïwanais'),
      },
      {
        src: 'work/harvard-worldmun-2026/global-village.jpg',
        alt: t('Delegates from many countries at the cultural night', '文化之夜和各國代表的合照', 'Des délégués de nombreux pays à la soirée culturelle'),
        caption: t('With delegates from around the world', '和來自世界各地的代表一起', 'Avec des délégués du monde entier'),
      },
    ],
  },
  {
    slug: 'timun',
    category: 'org',
    org: 'mst',
    icon: '🏛️',
    title: t('Taiwan International MUN', '台灣國際模擬聯合國', 'Taiwan International MUN'),
    date: t('Jul 2024 – Dec 2025', '2024 年 7 月 – 2025 年 12 月', 'juil. 2024 – déc. 2025'),
    where: t('Taipei', '台北', 'Taipei'),
    role: t('Co-founder & Academic Director', '共同創辦人暨學術總監', 'Cofondateur et directeur académique'),
    summary: t(
      'Ran the academic program for 2 editions with 96 participants, and was the main contact for both co-hosts.',
      '負責兩屆、總共 96 位參加者的學術規劃，也是兩個合辦單位的主要窗口。',
      "J'ai dirigé le programme académique de 2 éditions (96 participants) et été l'interlocuteur principal des deux co-organisateurs.",
    ),
    sections: [
      {
        heading: t('What I did', '我做的事', "Ce que j'ai fait"),
        text: t(
          'I ran the academic program of Taiwan International Model UN (committees, topics, research standards) for 2 editions with 96 participants, and was the main contact for the two co-hosts: the Commercial Development Research Institute (funding) and Longteng Education (venue and administration).',
          '我負責台灣國際模擬聯合國（TIMUN）的學術規劃，包括委員會、議題和研究標準，總共辦了兩屆、96 位參加者，同時也是兩個合辦單位的主要窗口，分別是負責經費的商業發展研究院和負責場地與行政的龍騰（Longteng Education）。',
          "J'ai dirigé le programme académique de Taiwan International Model UN (comités, sujets, exigences de recherche) sur 2 éditions et 96 participants, et été l'interlocuteur principal des deux co-organisateurs : le Commercial Development Research Institute (financement) et Longteng Education (lieu et administration).",
        ),
      },
    ],
    images: [
      {
        src: 'work/timun/conference.jpg',
        alt: t('Delegates and guests at the 2nd Taiwan International Model United Nations Conference', '第二屆臺灣國際模擬聯合國會議的代表和貴賓合照', 'Délégués et invités de la 2e Taiwan International Model United Nations Conference'),
        caption: t('The 2nd TIMUN', '第二屆 TIMUN', 'La 2e édition de TIMUN'),
      },
      {
        src: 'work/timun/committee.jpg',
        alt: t('At the chair table during a TIMUN committee session', 'TIMUN 委員會進行時在主席台', 'À la table de la présidence pendant une session de comité à TIMUN'),
        caption: t('In committee', '委員會進行中', 'En comité'),
      },
      {
        src: 'work/timun/award.jpg',
        alt: t('Award presentation at the 2nd TIMUN', '第二屆 TIMUN 的頒獎', 'Remise de prix à la 2e édition de TIMUN'),
        caption: t('Award presentation', '頒獎', 'Remise de prix'),
      },
    ],
  },
  {
    slug: 'remun',
    category: 'org',
    org: 'mst',
    icon: '🗂️',
    title: t('ReMUN 2026', 'ReMUN 2026', 'ReMUN 2026'),
    subtitle: t(
      'A one-day reunion conference — RE for revisit, reunion and reimagine',
      '一天的模聯重聚會議，RE 代表 revisit、reunion 和 reimagine',
      "Une conférence de retrouvailles d'une journée — RE pour revisit, reunion et reimagine",
    ),
    date: t('Jul 2026', '2026 年 7 月', 'juil. 2026'),
    where: t('Taipei', '台北', 'Taipei'),
    role: t('Founder & Convener', '創辦人暨召集人', 'Fondateur et organisateur'),
    summary: t(
      "Started and ran a reunion conference that brought 20 invited delegates from different generations of Taiwan's MUN community together with 10 new high school delegates, spending about NT$24,000 and breaking even.",
      '自己發起並籌辦一場重聚會議，讓 20 位來自台灣模聯圈不同世代的受邀代表，和 10 位剛加入的高中新代表聚在一起，整天花了大約新台幣兩萬四千元，最後收支還打平了。',
      "J'ai lancé et organisé une conférence de retrouvailles réunissant 20 délégués invités de différentes générations du Model UN taïwanais et 10 nouveaux délégués lycéens, pour environ 24 000 NT$ de dépenses, à l'équilibre.",
    ),
    sections: [
      {
        heading: t('Why I started it', '為什麼要辦', "Pourquoi je l'ai lancée"),
        text: t(
          "Over four or five years of Model UN I had met a lot of people: some several years older and already in a master's or working, others several years younger and still in high school. We were like separate lines that had each crossed mine at different times, but had never all been in one room. That summer, the week before I left for my exchange, felt like the last chance to bring everyone together, and since I knew more of them than almost anyone, it probably would not happen unless I did it.",
          '模聯是我從高中以來最喜歡的活動，這四五年來我在不同的會議和場合認識了很多人，有人比我大好幾歲、現在已經在讀碩士或工作，也有人比我小好幾屆、還在讀高中，我們就像幾條不同的線，在不同的地方和我交會過，卻從來沒有同時聚在一起。出國交換前的那個暑假，我覺得可能是最後一個能把大家湊齊的機會，而我剛好是認識最多人的其中一個，如果我不做，這件事大概就不會發生，所以我決定自己把它辦起來。',
          "En quatre ou cinq ans de Model UN, j'avais rencontré beaucoup de monde : certains plus âgés, déjà en master ou au travail, d'autres plus jeunes, encore au lycée. Comme des lignes qui avaient chacune croisé la mienne à un moment différent, sans jamais se retrouver toutes au même endroit. L'été, la semaine avant mon départ en échange, semblait être la dernière occasion de réunir tout le monde ; et comme je connaissais plus de monde que presque personne, cela n'aurait sans doute pas eu lieu si je ne m'en chargeais pas.",
        ),
      },
      {
        heading: t('How I ran it', '我怎麼辦起來的', "Comment je l'ai organisée"),
        bullets: [
          t(
            'Listed everyone I wanted to invite, sent about 60 invitations and tracked every reply in a spreadsheet',
            '先列出所有想邀請的人，排好時程後寄出大約六十封邀請，再用 Google 試算表一個一個追蹤回覆',
            "Liste de toutes les personnes à inviter, environ 60 invitations envoyées et chaque réponse suivie dans un tableur",
          ),
          t(
            'Built the financial model and a project task tracker for the whole event myself',
            '整場活動的財務模型和專案進度追蹤表都是我自己做的',
            "Construction moi-même du modèle financier et du suivi des tâches de tout l'événement",
          ),
          t(
            'Put people of different ages in the same committee, and opened 10 places to first- and second-year high school delegates so the older and newer generations could meet',
            '讓不同年紀的人在同一場會議裡交手，也開放十個名額給高一高二的新代表，讓社群裡的新舊世代有機會認識彼此',
            "Des participants de tous âges dans un même comité, et 10 places ouvertes aux lycéens de première et deuxième année pour que les générations se rencontrent",
          ),
          t(
            'Kept the whole day, from the conference room in the daytime to the evening party, to about NT$24,000 and broke even: found a cheap venue, recruited staff through community posts in exchange for a free lunch, and designed the Instagram posts and promotion myself',
            '整天從白天的會議室和器材到晚上包場的派對和飲料食物，只花了大約兩萬四千元，最後收支還打平，我花了很多時間找便宜的場地，工作人員是在社群發文招募、用免費午餐當回報，IG 的版面和宣傳也都是我自己做的',
            "Toute la journée, de la salle de conférence à la soirée, pour environ 24 000 NT$, à l'équilibre : une salle bon marché, une équipe recrutée sur les réseaux de la communauté contre un déjeuner offert, et les visuels Instagram et la promotion conçus par moi",
          ),
        ],
      },
      {
        heading: t('The closing', '閉幕', 'La clôture'),
        text: t(
          'A normal Model UN conference only gives awards to the best debaters. At ReMUN I designed a certificate for every invited guest, made just for them. Watching people from different stages of my life meet in one place for the first time, and then head off again, was one of the most special moments of the past few years.',
          '一般的模擬聯合國會議只會頒獎給辯論表現最好的代表，那天我替每一位受邀的人都設計了一張只屬於他的紀念獎狀，看著這些在我人生不同階段出現過的人第一次聚在同一個地方，然後再各自出發，是我這幾年最特別的一刻。',
          "Une conférence de Model UN ne récompense d'habitude que les meilleurs orateurs. À ReMUN, j'ai conçu un certificat personnel pour chaque invité. Voir des personnes de différentes étapes de ma vie se retrouver pour la première fois au même endroit, puis repartir chacune de leur côté, a été l'un des moments les plus marquants de ces dernières années.",
        ),
      },
      {
        heading: t('What I took away', '收穫', "Ce que j'en retiens"),
        text: t(
          'Whether something is worth doing has little to do with its size. What matters is knowing exactly who it is for. People who had each only crossed paths with me finally met each other, and in a small way it was my way of giving back to the community that raised me.',
          '回想起來，我覺得這件事值不值得做其實跟規模沒什麼關係，重點是我有多清楚它是為誰而做，這些原本只和我各自交會的人，終於因為這場活動彼此有了交集，或多或少我覺得透過辦這個活動，也算是對得起、也延續了過去這個社群對我的栽培。',
          "Qu'une chose vaille la peine n'a pas grand-chose à voir avec sa taille ; l'essentiel est de savoir pour qui on la fait. Des personnes qui n'avaient croisé que moi se sont enfin rencontrées, et c'était, à ma manière, une façon de rendre à la communauté ce qu'elle m'avait donné.",
        ),
      },
    ],
    images: [
      {
        src: 'work/remun/group.jpg',
        alt: t('Group photo of ReMUN 2026 delegates and staff in the conference room', 'ReMUN 2026 的代表和工作人員在會議室的大合照', "Photo de groupe des délégués et de l'équipe de ReMUN 2026 dans la salle de conférence"),
        caption: t('Everyone at ReMUN 2026', 'ReMUN 2026 的大家', 'Tout le monde à ReMUN 2026'),
      },
      {
        src: 'work/remun/budget-vs-actual.png',
        alt: t('Budget vs. actual table from my ReMUN financial model', 'ReMUN 財務模型裡的預算與實際比較表', 'Tableau budget/réel de mon modèle financier pour ReMUN'),
        caption: t('Financial model: budget vs. actual', '財務模型：預算與實際比較', 'Modèle financier : budget et réel'),
      },
      {
        src: 'work/remun/task-tracker.png',
        alt: t('Project and task tracker for ReMUN', 'ReMUN 的專案與進度追蹤表', 'Suivi du projet et des tâches de ReMUN'),
        caption: t('Project & task tracker', '專案與進度追蹤表', 'Suivi du projet et des tâches'),
      },
    ],
  },

  // ───────────────────────── Analysis experience ─────────────────────────
  {
    slug: 'supply-chain-inventory-cycle',
    category: 'research',
    thumb: 'work/supply-chain-inventory-cycle/thumb.svg',
    icon: '🔗',
    title: t(
      "Taiwan's Electronics Supply Chain: Does Volatility Grow Upstream?",
      '台灣電子供應鏈庫存循環：越上游，營收波動越大嗎？',
      'Chaîne électronique taïwanaise : la volatilité augmente-t-elle en amont ?',
    ),
    kind: t('Self-initiated analysis · Excel', '自發研究・Excel', 'Analyse personnelle · Excel'),
    skills: [
      t('Power Query (ETL)', 'Power Query（資料匯入與整理）', 'Power Query (ETL)'),
      t('SUMIFS and INDEX/MATCH lookups', 'SUMIFS 與 INDEX/MATCH 查找', 'Recherches SUMIFS et INDEX/MATCH'),
      t('Pivot tables', '樞紐分析表', 'Tableaux croisés dynamiques'),
      t('Data validation and reconciliation', '資料驗證與對帳', 'Contrôle et rapprochement des données'),
      t('Volatility analysis', '波動分析', 'Analyse de volatilité'),
      t('Sensitivity checks', '穩健性檢查', 'Tests de sensibilité'),
    ],
    date: t('Oct 2026', '2026 年 10 月', 'oct. 2026'),
    role: t('', '', ''),
    summary: t(
      'Built a Power Query pipeline and a self-checking Excel model on 92 months of revenue for 5 listed firms.',
      '用 Power Query 建了一套資料流程，再做一個會自己檢查資料的 Excel 模型，整理 5 家上市公司 92 個月的營收。',
      "Pipeline Power Query et modèle Excel auto-vérifié sur 92 mois de chiffre d'affaires de 5 sociétés cotées.",
    ),
    sections: [
      {
        heading: t('The question', '研究問題', 'La question'),
        text: t(
          'The bullwhip effect says small changes in demand get amplified as they travel up a supply chain. I wanted to see whether Taiwan’s electronics chain looks like that, so I picked one listed company at each stage and compared how much their monthly revenue swings year over year. Revenue is not orders, so this is a proxy for the bullwhip effect, not a test of it.',
          '長鞭效應指的是需求的小變動，往供應鏈上游傳的時候會被放大。我想知道台灣電子業是不是也這樣，所以從上游到下游每個環節各挑一家上市公司，比較它們月營收年增率的波動。因為長鞭效應原本是看訂單，而我手上只有營收，所以這裡只能當成一個代理指標，不能說是直接檢驗了長鞭效應。',
          "Selon l'effet coup de fouet, de petites variations de la demande s'amplifient en remontant la chaîne d'approvisionnement. J'ai voulu voir si la chaîne électronique taïwanaise suit ce schéma : une société cotée par étape, et une comparaison de la volatilité de leur chiffre d'affaires mensuel sur un an. Le chiffre d'affaires n'est pas la commande : c'est un indicateur indirect de l'effet coup de fouet, pas un test de celui-ci.",
        ),
      },
      {
        heading: t('Five firms, upstream to downstream', '五家公司（上游到下游）', "Cinq sociétés, de l'amont vers l'aval"),
        text: t(
          'TSMC (foundry) → ASE Technology (packaging and testing) → WPG Holdings (IC distribution) → Quanta (ODM) → Acer (brand). Monthly consolidated revenue, Jan 2019 – Aug 2026, with year-over-year growth from 2020 on.',
          '台積電（晶圓代工）→ 日月光投控（封測）→ 大聯大（IC 通路）→ 廣達（ODM）→ 宏碁（品牌）。資料用的是 2019 年 1 月到 2026 年 8 月的單月合併營收，年增率從 2020 年開始算，2019 年只當比較的基期。',
          "TSMC (fonderie) → ASE Technology (assemblage et test) → WPG Holdings (distribution de composants) → Quanta (ODM) → Acer (marque). Chiffre d'affaires mensuel consolidé, janv. 2019 – août 2026, avec la croissance sur un an à partir de 2020.",
        ),
      },
      {
        heading: t('How I built it', '我怎麼做的', "Comment je l'ai construit"),
        bullets: [
          t(
            'Power Query: one query per company, appended into a single 460-row table (5 firms × 92 months), with cleaned headers, set data types, stock codes stored as text and months converted to month-end dates so lookups line up',
            'Power Query：五家公司各建一個查詢，再用附加查詢合併成一張 460 列的長表（5 家 × 92 個月），過程中把標題整理好、設定資料型別、代號存成文字，月份也轉成月底日期，這樣後面查找的時候才對得上',
            "Power Query : une requête par société, ajoutées en une seule table de 460 lignes (5 sociétés × 92 mois), avec en-têtes nettoyés, types de données définis, codes boursiers en texte et mois convertis en fin de mois pour que les recherches correspondent",
          ),
          t(
            'Worked around the Mac version of Power Query: it cannot read the source .xls files (they are really HTML) and has no "From Folder", so I re-saved each export as .xlsx and combined five queries instead',
            'Mac 版的 Power Query 有一些限制，它讀不了 Goodinfo 匯出的 .xls（裡面其實是 HTML），也沒有「從資料夾」匯入的功能，所以我先把每個檔案另存成 .xlsx，再用五個查詢加附加的方式合併',
            "Contournement des limites de Power Query sur Mac : il ne lit pas les fichiers .xls source (en réalité du HTML) et n'a pas l'option « À partir d'un dossier » ; j'ai donc réenregistré chaque export en .xlsx et combiné cinq requêtes",
          ),
          t(
            'Model: two-condition SUMIFS lookups (stock code + month) with mixed references instead of VLOOKUP, YoY growth, STDEV and AVERAGE, and INDEX + MATCH to find each firm’s highest and lowest month; inputs, calculations and outputs on separate sheets',
            '模型的部分，用 SUMIFS 同時比對代號和月份來撈數字，搭配混合參照，而不是用 VLOOKUP，因為 VLOOKUP 的欄號是寫死的，一插欄就會抓錯；再算年增率、STDEV、AVERAGE，用 INDEX＋MATCH 找出每家最高和最低的月份，輸入、計算和輸出也分在不同的工作表',
            "Modèle : recherches SUMIFS à deux critères (code + mois) avec références mixtes plutôt que VLOOKUP, croissance sur un an, STDEV et AVERAGE, et INDEX + MATCH pour trouver le mois le plus haut et le plus bas de chaque société ; entrées, calculs et résultats sur des feuilles séparées",
          ),
          t(
            'A pivot table of company × year using "% Difference From", leaving out 2026 because eight months compared with a full year would look like a decline',
            '做了一張公司 × 年度的樞紐分析表，用「差異百分比」顯示年增率，並且把 2026 年拿掉，因為只有 1 到 8 月，跟全年比會看起來像衰退',
            "Un tableau croisé dynamique société × année en « Différence en % par rapport à », sans 2026, car huit mois comparés à une année entière ressembleraient à une baisse",
          ),
          t(
            'A YoY line chart whose title states the finding, plus volatility for two sub-periods (2022–23 and 2020–24) to check whether the ranking depends on the years chosen',
            '畫了五家的年增率折線圖，標題直接寫結論，另外也算了 2022–23 和 2020–24 兩段期間的標準差，看排名會不會因為選的年份不同就改變',
            "Un graphique de la croissance sur un an dont le titre donne la conclusion, et la volatilité sur deux sous-périodes (2022–23 et 2020–24) pour vérifier si le classement dépend des années retenues",
          ),
        ],
      },
      {
        heading: t('How I checked the numbers', '我怎麼確認數字是對的', "Comment j'ai vérifié les chiffres"),
        bullets: [
          t(
            'A Check sheet that counts rows, first and last month, missing months, duplicates (FILTER + UNIQUE + COUNTA) and unreadable rows for every firm, with one status cell that only reads "All OK" when everything passes; I broke a cell on purpose to make sure it catches errors',
            '做了一張 Check 工作表，檢查每家的筆數、最早和最晚的月份、缺了幾個月、有沒有重複（FILTER＋UNIQUE＋COUNTA）和無法辨識的列，最上面有一格狀態，全部通過才會顯示「全部 OK」，我也故意改錯一格，確認它真的抓得到',
            "Une feuille de contrôle qui compte, pour chaque société, les lignes, le premier et le dernier mois, les mois manquants, les doublons (FILTER + UNIQUE + COUNTA) et les lignes illisibles, avec une cellule d'état qui n'affiche « tout est OK » que si tout passe ; j'ai volontairement faussé une cellule pour vérifier qu'elle détecte l'erreur",
          ),
          t(
            "Spot-checked 4 figures against Taiwan's official Market Observation Post System (at least one per firm, converting units, within 0.1%), and checked TSMC row by row against the raw export",
            '抽了 4 筆數字到公開資訊觀測站核對，每家至少一筆，因為官方的單位是千元，所以要先換算，容許 0.1% 的誤差，結果 4 筆都一致；台積電則另外用原始匯出檔逐列核對',
            "Vérification de 4 chiffres dans le Market Observation Post System officiel de Taïwan (au moins un par société, avec conversion d'unités, à 0,1 % près), et contrôle ligne par ligne de TSMC avec l'export brut",
          ),
          t(
            'Before switching the model from pasted data to Power Query, saved a snapshot of the results and compared all 50 cells afterwards, since matching totals can still hide a month that has shifted',
            '把資料來源從手動貼上換成 Power Query 之前，我先存了一份結果的快照，換完之後 50 格逐格比對，全部一樣才算數字沒變，因為就算合計一樣，也有可能是月份錯開了',
            "Avant de passer des données collées à Power Query, sauvegarde des résultats puis comparaison des 50 cellules une à une, car des totaux identiques peuvent cacher un mois décalé",
          ),
          t(
            'A decision log recording every method choice with its date and reason',
            '每個方法上的決定都記在一張 Log 工作表裡，寫下日期、決定了什麼和為什麼',
            'Un journal qui consigne chaque choix de méthode avec sa date et sa justification',
          ),
        ],
      },
      {
        heading: t('What the data shows', '數據的結果', 'Ce que montrent les données'),
        bullets: [
          t(
            'Over 2020–26, volatility does not rise steadily as you go upstream: Quanta (ODM) swings the most (σ 41.2%) and ASE the least (14.8%), with TSMC at 19.5%',
            '2020 到 2026 整段來看，波動並沒有越往上游越大，波動最大的是廣達（ODM，標準差 41.2%），最小的是日月光投控（14.8%），台積電則是 19.5%',
            "Sur 2020–26, la volatilité n'augmente pas régulièrement vers l'amont : Quanta (ODM) varie le plus (σ 41,2 %) et ASE le moins (14,8 %), TSMC étant à 19,5 %",
          ),
          t(
            'In the 2022–23 inventory correction, TSMC was the most volatile (27.6%), which partly fits the idea, but the five firms still do not line up from upstream to downstream',
            '在 2022–23 年的庫存修正期，台積電的波動最高（27.6%），這和原本的想法有一部分一致，但五家的排名還是沒有照上游到下游的順序排',
            "Pendant la correction des stocks de 2022–23, TSMC était la plus volatile (27,6 %), ce qui va en partie dans ce sens, mais les cinq sociétés ne se classent toujours pas de l'amont vers l'aval",
          ),
          t(
            'Adding 2025–26 lifts Quanta from 25.0% to 41.2%, the biggest jump of the five; AI server demand may be behind it, but I have not tested that yet',
            '把 2025–26 年加進來之後，廣達的標準差從 25.0% 升到 41.2%，是五家裡增加最多的，可能跟 AI 伺服器的需求有關，不過這一點我還沒有驗證，目前只是推論',
            "En ajoutant 2025–26, Quanta passe de 25,0 % à 41,2 %, la plus forte hausse des cinq ; la demande de serveurs IA pourrait l'expliquer, mais je ne l'ai pas encore vérifié",
          ),
        ],
      },
      {
        heading: t('Limits', '限制', 'Limites'),
        bullets: [
          t(
            'Revenue is not orders. When a foundry is running at full capacity it cannot take on extra orders, so its revenue may swing less than its order book',
            '營收不等於訂單，像台積電如果產能已經滿載，就接不了額外的訂單，所以營收的波動有可能比實際訂單的波動還小',
            "Le chiffre d'affaires n'est pas la commande : une fonderie à pleine capacité ne peut pas accepter de commandes supplémentaires, son chiffre d'affaires peut donc varier moins que son carnet de commandes",
          ),
          t(
            "One firm per stage, so a single company's customers, contracts or product mix (such as Quanta's AI servers) can outweigh the stage itself",
            '每個環節只有一家公司，所以個別公司的大客戶、長期合約或產品組合（例如廣達的 AI 伺服器）可能會蓋過整個環節本身的特性',
            "Une seule société par étape : les clients, contrats ou la gamme d'une société (comme les serveurs IA de Quanta) peuvent l'emporter sur les caractéristiques de l'étape",
          ),
          t(
            'Data stops at Aug 2026, and adding a new month still means re-saving each export by hand',
            '資料只到 2026 年 8 月，之後要更新新的月份時，每家都還是要手動打開檔案再另存一次',
            "Les données s'arrêtent à août 2026, et ajouter un mois demande encore de réenregistrer chaque export à la main",
          ),
        ],
      },
      {
        heading: t('Next', '接下來', 'Prochaines étapes'),
        text: t(
          'Not done yet: a lead–lag analysis (correlations shifted 0–6 months), quarterly ratios such as gross margin, inventory, receivable and payable days and the cash conversion cycle, and checking the capacity explanation against earnings-call material.',
          '還沒做的部分包括領先落後分析（把相關係數錯開 0 到 6 個月來看），還有季報的比率，像是毛利率、存貨、應收和應付天數以及現金轉換週期，另外也想用法說會的資料去驗證產能限制這個解釋。',
          "Pas encore fait : une analyse avance-retard (corrélations décalées de 0 à 6 mois), des ratios trimestriels comme la marge brute, les jours de stocks, de créances et de dettes fournisseurs et le cycle de conversion de trésorerie, et la vérification de l'explication par la capacité avec les supports des conférences de résultats.",
        ),
      },
    ],
    images: [
      {
        src: 'work/supply-chain-inventory-cycle/yoy-chart.svg',
        alt: t(
          'Line chart of monthly revenue year-over-year change for TSMC, ASE, WPG, Quanta and Acer, Jan 2020 to Aug 2026',
          '台積電、日月光投控、大聯大、廣達和宏碁 2020 年 1 月到 2026 年 8 月的月營收年增率折線圖',
          "Graphique de la croissance mensuelle sur un an du chiffre d'affaires de TSMC, ASE, WPG, Quanta et Acer, janv. 2020 – août 2026",
        ),
        caption: t(
          "Quanta's swings widen in 2025–26; the upstream firms do not swing more (redrawn from the workbook)",
          '廣達近期波動擴大，營收波動沒有呈現上游放大的現象（依活頁簿資料重畫）',
          "Les variations de Quanta s'élargissent en 2025–26 ; l'amont ne varie pas davantage (redessiné à partir du classeur)",
        ),
      },
      {
        src: 'work/supply-chain-inventory-cycle/volatility-by-period.svg',
        alt: t(
          'Bar chart of the standard deviation of revenue YoY for the five firms over three periods',
          '五家公司在三段期間的營收年增率標準差長條圖',
          "Diagramme en barres de l'écart-type de la croissance sur un an des cinq sociétés sur trois périodes",
        ),
        caption: t(
          'Volatility (σ of YoY) by firm and period',
          '各公司在不同期間的波動（年增率標準差）',
          'Volatilité (σ de la croissance sur un an) par société et par période',
        ),
      },
    ],
    files: [
      {
        src: 'work/supply-chain-inventory-cycle/taiwan-electronics-supply-chain.xlsx',
        label: t('The Excel workbook', 'Excel 活頁簿', 'Le classeur Excel'),
        type: 'XLSX',
      },
    ],
  },
  {
    slug: 'solar-lease-npv',
    category: 'research',
    thumb: 'work/solar-lease-npv/thumb.jpg',
    icon: '☀️',
    title: t(
      'Pricing the Sun: Structuring a 30-Year Solar Land Deal',
      '為陽光定價：設計一份 30 年的太陽能土地租約',
      'Fixer le prix du soleil : structurer un bail solaire de 30 ans',
    ),
    subtitle: t(
      'Consulting case designed by BCG consultants · Energy Transition Overview, HEC Paris',
      'BCG 顧問設計的顧問個案・巴黎高等商學院 Energy Transition Overview 課程',
      'Cas de conseil conçu par des consultants du BCG · Energy Transition Overview, HEC Paris',
    ),
    kind: t('HEC Paris · BCG-designed case', '巴黎高等商學院・BCG 設計的個案', 'HEC Paris · cas conçu par le BCG'),
    skills: [
      t('Excel financial modelling', 'Excel 財務模型', 'Modélisation financière sous Excel'),
      t('Developer economics (LCOE, DCF)', '開發商成本分析（LCOE、現金流折現）', 'Économie du développeur (LCOE, DCF)'),
      t('Scenario and sensitivity analysis', '情境與敏感度分析', 'Analyse de scénarios et de sensibilité'),
      t('Negotiation zone (ZOPA)', '談判空間分析（ZOPA）', 'Zone d’accord (ZOPA)'),
      t('Deal structuring', '合約條款設計', 'Structuration du contrat'),
      t('Pyramid-principle storyline', '金字塔原理故事線', 'Storyline en pyramide'),
      t('Model audit', '模型查核', 'Audit du modèle'),
      t('Client presentation', '客戶簡報', 'Présentation client'),
    ],
    date: t('Nov 2026', '2026 年 11 月', 'nov. 2026'),
    role: t(
      'Coordinator, slidewriter & presenter · team of 10',
      '統籌、簡報撰寫與上台報告・10 人團隊',
      'Coordination, rédaction des slides et présentation · équipe de 10',
    ),
    summary: t(
      "Modelled a 10 MW solar plant's economics in Excel and used the model to design a 30-year lease that creates 2.3× the value of a standard 20-year deal.",
      '用 Excel 建模分析一座 10 MW 太陽能電廠的成本結構，再從模型推出一份 30 年的租約，創造的總價值是一般 20 年方案的 2.3 倍。',
      "Modélisation sous Excel de l'économie d'une centrale solaire de 10 MW, puis conception à partir du modèle d'un bail de 30 ans qui crée 2,3 fois la valeur d'un contrat standard de 20 ans.",
    ),
    sections: [
      {
        heading: t('The course', '這門課', 'Le cours'),
        text: t(
          'Energy Transition Overview at HEC Paris is taught by a Senior Partner and a Principal from Boston Consulting Group. Drawing on their work in the energy sector, they design consulting cases for student teams and give feedback the way they would to a case team. We worked in their format: answer-first storyline, action titles, and an appendix page backing every main slide.',
          '巴黎高等商學院的 Energy Transition Overview 是由波士頓顧問公司（BCG）的一位資深合夥人和一位 Principal 來教的，他們用自己在能源產業的經驗設計顧問個案給學生分組做，給回饋的方式也跟他們平常帶顧問團隊一樣。我們也照他們的格式來做，先講答案，每一頁的標題都直接寫結論，而且每一張主頁都有一張附錄頁在後面支撐。',
          "Energy Transition Overview, à HEC Paris, est enseigné par un Senior Partner et un Principal du Boston Consulting Group. À partir de leur expérience du secteur de l'énergie, ils conçoivent des cas de conseil pour des équipes d'étudiants et font leurs retours comme à une équipe de mission. Nous avons suivi leur format : la réponse d'abord, des titres qui donnent la conclusion, et une page d'annexe derrière chaque slide principale.",
        ),
      },
      {
        heading: t('The case', '個案', 'Le cas'),
        text: t(
          'Sarah, a French landowner, rents 15 hectares to a tenant farmer for 180 €/ha a year (2.7 k€). A solar developer wants the land for a 10 MW plant costing 7.5 M€, and can only go ahead if its cost of electricity stays at or below 65 €/MWh. A second, hillier plot further from the grid could host another plant. Sarah asked us three things: should she engage, how should she negotiate, and which levers improve her deal, and by how much?',
          'Sarah 是一位法國地主，她把 15 公頃的地租給佃農，每公頃每年收 180 歐元，一年大概 2,700 歐元。現在有一家太陽能開發商想在這塊地上蓋一座 10 MW、造價 750 萬歐元的電廠，但前提是它的發電成本不能超過每 MWh 65 歐元。她另外還有一塊比較陡、離電網也比較遠的地，也有可能再蓋一座。Sarah 問了我們三個問題：要不要跟開發商談、要怎麼談，還有哪些槓桿可以讓她拿到更好的條件、大概可以多多少。',
          "Sarah, propriétaire en France, loue 15 hectares à un fermier pour 180 €/ha par an (2,7 k€). Un développeur solaire veut ces terres pour une centrale de 10 MW à 7,5 M€, à condition que son coût de l'électricité reste à 65 €/MWh au plus. Une seconde parcelle, plus pentue et plus loin du réseau, pourrait accueillir une autre centrale. Sarah nous a posé trois questions : faut-il négocier, comment, et quels leviers améliorent son accord, et de combien ?",
        ),
      },
      {
        heading: t('My role', '我負責的部分', 'Mon rôle'),
        bullets: [
          t(
            'Coordinated the 10-person team through the case',
            '統籌整個 10 人團隊的進度和分工',
            "Coordination de l'équipe de 10 tout au long du cas",
          ),
          t(
            'Restructured the storyline and design of the deck into a consulting format',
            '把簡報的故事線和設計重新整理成顧問簡報的格式',
            'Refonte de la storyline et de la mise en page de la présentation au format conseil',
          ),
          t(
            "Worked with the modelling team on the Excel model and turned its outputs into the deck's analysis and charts",
            '和負責建模的組員一起處理 Excel 模型，再把模型跑出來的結果整理成簡報裡的分析和圖表',
            "Travail avec l'équipe de modélisation sur le modèle Excel, et traduction de ses résultats en analyses et graphiques pour la présentation",
          ),
          t(
            'Audited every number in the deck against an independent rebuild of the model',
            '把簡報上的每一個數字都拿去跟另外重建的模型對過一遍',
            "Vérification de chaque chiffre de la présentation à partir d'une reconstruction indépendante du modèle",
          ),
          t(
            'Presented the core of the recommendation (pages 4–8) and the close',
            '上台報告建議的核心部分（第 4 到 8 頁）和最後的結尾',
            'Présentation du cœur de la recommandation (pages 4 à 8) et de la conclusion',
          ),
        ],
      },
      {
        heading: t('How we got to the answer', '我們怎麼找到答案', 'Comment nous sommes arrivés à la réponse'),
        bullets: [
          t(
            "Rebuilt the developer's cost per MWh (LCOE) year by year at a 5% real discount rate: 62.1 €/MWh before rent, leaving 2.9 €/MWh under the 65 ceiling",
            '用 5% 的實質折現率逐年算出開發商每 MWh 的發電成本（LCOE），租金前是 62.1 歐元，離 65 歐元的上限還有 2.9 歐元的空間',
            'Reconstitution année par année du coût du MWh du développeur (LCOE) à 5 % réel : 62,1 €/MWh avant loyer, soit 2,9 €/MWh sous le plafond de 65',
          ),
          t(
            'Solved backwards for the highest rent the developer can afford: ~2,190 €/ha a year, 12× the farm rent, but wiped out by a 6.6% cost overrun',
            '再反推開發商最多付得起多少租金，答案是每公頃每年大約 2,190 歐元，是農地租金的 12 倍，但只要成本超支 6.6% 這個空間就沒了',
            "Calcul à rebours du loyer maximal que le développeur peut payer : ~2 190 €/ha par an, 12 fois le fermage, mais effacé par un dépassement de coûts de 6,6 %",
          ),
          t(
            'Built a 30-year scenario: the same plant makes ~47% more electricity, lifting the rent ceiling to ~4,320 €/ha',
            '建了一個 30 年的情境，同一座電廠可以多發大約 47% 的電，租金的上限也提高到每公頃約 4,320 歐元',
            'Scénario sur 30 ans : la même centrale produit ~47 % d’électricité en plus, et le plafond de loyer monte à ~4 320 €/ha',
          ),
          t(
            'Tested four value levers one at a time and the economics of the second plot, which only works by sharing the first plot’s grid connection',
            '一次只動一個槓桿，比較四種可以提高租金的做法，也算了第二塊地的經濟效益，結果它只有在共用第一塊地的電網連接時才划算',
            "Test de quatre leviers de valeur, un à la fois, et de l'économie de la seconde parcelle, qui ne tient qu'en partageant le raccordement de la première",
          ),
          t(
            'Stress-tested the options across 14 scenarios, then mapped the negotiation zone against French market rents of 1,000–4,500 €/ha',
            '用 14 個情境對各個方案做壓力測試，再把談判空間拿去跟法國市場上每公頃 1,000 到 4,500 歐元的租金區間比較',
            'Tests de résistance sur 14 scénarios, puis cartographie de la zone d’accord face aux loyers du marché français (1 000 à 4 500 €/ha)',
          ),
          t(
            "Researched France's 2024 agrivoltaics rules and placed five risks on a likelihood × impact matrix, each tied to a contract clause",
            '研究法國 2024 年的農電共生法規，把五個風險放進可能性 × 影響程度的矩陣裡，每一個風險都對應到一條合約條款',
            "Étude des règles françaises de 2024 sur l'agrivoltaïsme, et cinq risques placés sur une matrice probabilité × impact, chacun lié à une clause du contrat",
          ),
        ],
      },
      {
        heading: t('The recommendation', '我們的建議', 'La recommandation'),
        bullets: [
          t(
            'Engage, and offer a 30-year lease at ~3,000 €/ha: total value of 1.05 M€ vs 0.45 M€ for a 20-year deal (2.3×), with Sarah’s NPV rising from 412 k€ to 729 k€',
            '建議 Sarah 跟開發商談，並且提出每公頃約 3,000 歐元的 30 年租約，雙方可以分的總價值是 105 萬歐元，20 年方案只有 45 萬（2.3 倍），Sarah 自己的淨現值也從 41.2 萬歐元提高到 72.9 萬歐元',
            "Négocier, et proposer un bail de 30 ans à ~3 000 €/ha : une valeur totale de 1,05 M€ contre 0,45 M€ pour un contrat de 20 ans (2,3×), et une VAN pour Sarah qui passe de 412 k€ à 729 k€",
          ),
          t(
            'Use a ~1,200 €/ha floor plus a revenue share instead of a fixed rent, which keeps the deal alive in 3 of 4 downside cases',
            '用每公頃約 1,200 歐元的保底租金再加上營收分成，而不是固定租金，這樣在四個不利情境裡有三個還是談得成',
            "Un plancher de ~1 200 €/ha plus un partage des revenus plutôt qu'un loyer fixe, ce qui maintient l'accord dans 3 cas défavorables sur 4",
          ),
          t(
            'Seven contract terms across the project’s life, from an option fee during permitting to a dismantling guarantee at the end',
            '在專案的每個階段設計了七條合約條款，從等待許可期間的選擇權費用，到最後的拆除保證都有',
            "Sept clauses sur toute la vie du projet, d'une indemnité d'option pendant les autorisations à une garantie de démantèlement à la fin",
          ),
        ],
      },
      {
        heading: t('The Excel model, and what we read from it', 'Excel 模型，以及我們從模型讀出來的東西', 'Le modèle Excel, et ce que nous en avons tiré'),
        text: t(
          'A six-sheet project-finance model in real euros, with every assumption in one input sheet so each scenario is a one-cell change.',
          '整個模型是一個用實質歐元計算的六張工作表專案融資模型，所有假設都集中在一張輸入表，所以每換一個情境只要改一格就好。',
          "Un modèle de financement de projet de six feuilles, en euros réels, avec toutes les hypothèses sur une feuille d'entrée : chaque scénario se teste en changeant une cellule.",
        ),
        bullets: [
          t(
            'Inputs: the case data, our scenario assumptions and a documented block of modelling choices (mid-year timing, capex schedule, rent during construction)',
            'Inputs：放個案給的數字、我們自己的情境假設，還有一區把建模上的選擇寫清楚，像是年中折現、資本支出的時間和施工期間要不要付租金',
            "Inputs : les données du cas, nos hypothèses de scénario et un bloc qui documente les choix de modélisation (flux en milieu d'année, calendrier des investissements, loyer pendant les travaux)",
          ),
          t(
            '20-year base model: a 22-year discounted cash-flow table giving an LCOE of 62.09 €/MWh and a maximum rent of 2,189 €/ha a year',
            '20 年基本模型：用 22 年的現金流折現表算出 LCOE 是每 MWh 62.09 歐元，開發商最多付得起每公頃每年 2,189 歐元的租金',
            'Modèle de base sur 20 ans : un tableau de flux actualisés sur 22 ans, avec un LCOE de 62,09 €/MWh et un loyer maximal de 2 189 €/ha par an',
          ),
          t(
            'Rent analysis: a rent ladder from 180 to 2,500 €/ha showing where the project stops being viable, and how much rent timing moves the ceiling (2,549 vs 2,189 €/ha)',
            'Rent Analysis：從每公頃 180 到 2,500 歐元排出租金階梯，看專案在哪裡開始不划算，也比較租金從哪一年開始付會讓上限差多少（2,549 對 2,189 歐元）',
            "Analyse du loyer : une grille de 180 à 2 500 €/ha qui montre où le projet cesse d'être viable, et l'effet du calendrier de paiement sur le plafond (2 549 contre 2 189 €/ha)",
          ),
          t(
            '30-year scenario: a 32-year model with an inverter replacement and lower late-life prices and yield, lifting the ceiling to ~4,320 €/ha with a developer NPV of ~321 k€',
            '30Y Scenario：32 年的模型，加進換逆變器的成本，以及後期比較低的電價和發電效率，結果租金上限提高到每公頃約 4,320 歐元，開發商的淨現值大約 32.1 萬歐元',
            "Scénario sur 30 ans : un modèle sur 32 ans avec remplacement de l'onduleur et prix et rendement plus faibles en fin de vie, qui porte le plafond à ~4 320 €/ha pour une VAN développeur de ~321 k€",
          ),
          t(
            'Sensitivity analysis: every downside case breaks the 20-year deal, while the 30-year lease still clears a ~1,200 €/ha floor in 3 of 4, but rarely at a fixed 3,000, which is what led us to a rent floor plus revenue share',
            'Sensitivity Analysis：只要是不利的情境，20 年方案全部都撐不住，30 年租約在四個裡面有三個還能付得起每公頃約 1,200 歐元的保底，只是很難付到固定的 3,000 歐元，這也是我們後來改用保底租金加營收分成的原因',
            "Analyse de sensibilité : tous les cas défavorables font échouer le contrat de 20 ans, alors que le bail de 30 ans dépasse encore un plancher de ~1 200 €/ha dans 3 cas sur 4, mais rarement un loyer fixe de 3 000, ce qui nous a menés au plancher plus partage des revenus",
          ),
          t(
            "Executive dashboard: the three options side by side, with Sarah's income rising 11× and 17× over farming and her NPV 9.4× and 16.7×",
            'Executive Dashboard：把三個方案並排比較，Sarah 的年收入分別是農地租金的 11 倍和 17 倍，淨現值則是 9.4 倍和 16.7 倍',
            "Tableau de bord : les trois options côte à côte, avec un revenu pour Sarah 11 et 17 fois supérieur au fermage, et une VAN 9,4 et 16,7 fois supérieure",
          ),
        ],
      },
    ],
    images: [
      {
        src: 'work/solar-lease-npv/slide-2.jpg',
        alt: t('Executive summary slide: value created by each option', '執行摘要投影片：各方案創造的價值', 'Slide de synthèse : valeur créée par chaque option'),
        caption: t('Executive summary', '執行摘要', 'Synthèse'),
      },
      {
        src: 'work/solar-lease-npv/slide-4.jpg',
        alt: t("Waterfall chart of the developer's cost per MWh against the 65 €/MWh ceiling", '開發商每 MWh 成本對比 65 歐元上限的瀑布圖', 'Graphique en cascade du coût du MWh du développeur face au plafond de 65 €/MWh'),
        caption: t('Developer economics', '開發商的成本結構', 'Économie du développeur'),
      },
      {
        src: 'work/solar-lease-npv/slide-5.jpg',
        alt: t('Bar chart of the rent the developer can afford under each lever', '各個槓桿下開發商付得起的租金長條圖', 'Diagramme du loyer que le développeur peut payer selon chaque levier'),
        caption: t('Value levers', '價值槓桿', 'Leviers de valeur'),
      },
      {
        src: 'work/solar-lease-npv/slide-7.jpg',
        alt: t('Seven contract terms placed on the project life cycle', '放在專案生命週期上的七條合約條款', 'Sept clauses placées sur le cycle de vie du projet'),
        caption: t('Deal terms', '合約條款', 'Clauses du contrat'),
      },
    ],
    files: [
      {
        src: 'work/solar-lease-npv/solar-lease-model.xlsx',
        label: t('Excel model (6 sheets)', 'Excel 模型（6 張工作表）', 'Modèle Excel (6 feuilles)'),
        type: 'XLSX',
      },
      {
        src: 'work/solar-lease-npv/solar-lease-deck.pdf',
        label: t('Final deck (17 pages)', '期末簡報（17 頁）', 'Présentation finale (17 pages)'),
        type: 'PDF',
      },
    ],
  },
  // ───────────────────────── Interests ─────────────────────────
  {
    slug: 'debate-public-speaking',
    category: 'interest',
    icon: '🎤',
    title: t('Debate & Public Speaking', '辯論與演講', 'Débat et prise de parole'),
    date: t('', '', ''),
    role: t('', '', ''),
    thumb: 'work/teaching/negotiation.jpg',
    more: { href: 'model-un/', label: t('My Model UN story', '我的模聯故事', 'Mon parcours Model UN') },
    summary: t(
      'I love the craft of persuasion: building an argument, holding a room, and getting people who disagree to sign the same text. I have done it at 41 Model UN conferences, and now I teach it.',
      '我很喜歡說服這件事本身，怎麼把論點建起來、怎麼讓整個場子聽你講，還有怎麼讓立場不同的人最後簽同一份文件。我在 41 場模擬聯合國會議裡做這些事，現在也在教別人怎麼做。',
      "J'aime l'art de convaincre : construire un argument, tenir une salle, et amener des gens en désaccord à signer le même texte. Je l'ai pratiqué dans 41 conférences Model UN, et aujourd'hui je l'enseigne.",
    ),
    sections: [
      {
        heading: t('Teaching', '教學', 'Enseigner'),
        bullets: [
          t(
            'Appointed Model UN Club advisor by two high schools: Taipei Municipal Jingmei Girls High School and Zhulin High School in New Taipei',
            '被兩所高中聘為模擬聯合國社的指導老師，分別是臺北市立景美女子高級中學和新北市私立竹林高級中學',
            'Nommé encadrant du club Model UN par deux lycées : le lycée de filles Jingmei (Taipei) et le lycée Zhulin (Nouveau Taipei)',
          ),
          t(
            'More than 30 lectures and workshops at over 10 high schools, on research, document drafting, persuasive speaking and negotiation',
            '在 10 多所高中講過 30 場以上的課和工作坊，內容包括研究方法、文件撰寫、說服性演講和談判',
            'Plus de 30 cours et ateliers dans plus de 10 lycées, sur la recherche, la rédaction, le discours persuasif et la négociation',
          ),
          t(
            'It started when I was Chief Instructor of my own high school’s Model UN club, and I still send a feedback form after every session',
            '一開始是在自己高中的模聯社當教學長，到現在每次上完課我都還是會發回饋表單',
            "Tout a commencé quand j'étais chef formateur du club Model UN de mon lycée, et j'envoie encore un questionnaire de retour après chaque séance",
          ),
        ],
        image: {
          src: 'work/teaching/workshop.jpg',
          alt: t('Group photo with students after a workshop on persuasive speaking', '說服性演講工作坊結束後和學生的合照', "Photo de groupe avec des élèves après un atelier sur le discours persuasif"),
          caption: t('After a workshop on persuasive speaking', '說服性演講工作坊結束後', 'Après un atelier sur le discours persuasif'),
        },
      },
      {
        heading: t('On the floor', '在會場上', 'En séance'),
        bullets: [
          t(
            'As a delegate: 12 awards in 16 conferences, including 5 Best Delegate, at conferences such as TransMUN, Taiwan Capital MUN and NCCUMUN, and at Harvard WorldMUN',
            '當代表的時候，16 場會議拿了 12 個獎，其中 5 次是最佳代表，包括 TransMUN、台灣首都模聯和政大模聯，也去過 Harvard WorldMUN',
            'Comme délégué : 12 prix en 16 conférences, dont 5 Best Delegate, notamment à TransMUN, Taiwan Capital MUN et NCCUMUN, et une participation à Harvard WorldMUN',
          ),
          t(
            'As a chair: 23 committees, 4 of them as Head Chair, from the International Court of Justice and the Security Council to crisis committees',
            '當主席的時候主持過 23 個委員會，其中 4 次是主主席，從國際法院、安理會到危機委員會都有',
            'Comme président : 23 comités, dont 4 comme président principal, de la Cour internationale de justice au Conseil de sécurité en passant par des comités de crise',
          ),
          t(
            'Behind the scenes: Academic Director of two conferences, and later the projects I built with MUN Society Taiwan',
            '在幕後的部分，當過兩場會議的學術總監，後來也跟台灣模擬聯合國學會一起辦了自己的計畫',
            'En coulisses : directeur académique de deux conférences, puis les projets que j’ai montés avec MUN Society Taiwan',
          ),
        ],
        image: {
          src: 'work/teaching/negotiation.jpg',
          alt: t('Negotiating with other delegates around a laptop at a Model UN conference', '在模聯會議上和其他代表圍著電腦協商', "Négociation avec d'autres délégués autour d'un ordinateur lors d'une conférence Model UN"),
          caption: t('Negotiating a draft with other delegates', '和其他代表協商草案', "Négociation d'un projet avec d'autres délégués"),
        },
      },
      {
        heading: t('A closer look', '再多看一點', 'Pour aller plus loin'),
        link: { href: 'model-un/', label: t('My Model UN story', '我的模聯故事', 'Mon parcours Model UN') },
      },
    ],
    images: [
      {
        src: 'work/teaching/jingmei-appointment.jpg',
        alt: t('Letter of appointment as Model UN Club advisor, Jingmei Girls High School', '景美女中模擬聯合國社指導老師聘書', "Lettre de nomination comme encadrant du club Model UN, lycée Jingmei"),
        caption: t('Appointment letter, Jingmei Girls High School', '景美女中聘書', 'Lettre de nomination, lycée Jingmei'),
      },
      {
        src: 'work/teaching/zhulin-appointment.jpg',
        alt: t('Letter of appointment as Model UN Club advisor, Zhulin High School', '竹林高中模擬聯合國社指導老師聘書', 'Lettre de nomination comme encadrant du club Model UN, lycée Zhulin'),
        caption: t('Appointment letter, Zhulin High School', '竹林高中聘書', 'Lettre de nomination, lycée Zhulin'),
      },
    ],
  },
  {
    slug: 'law-and-political-philosophy',
    category: 'interest',
    icon: '⚖️',
    title: t('International Law & Political Philosophy', '國際法與政治哲學', 'Droit international et philosophie politique'),
    date: t('', '', ''),
    role: t('', '', ''),
    thumb: 'work/international-law/rousseau.jpg',
    summary: t(
      'I keep coming back to two questions: what makes power legitimate, and what rules states actually answer to. In high school I wrote legal research guides on them; at university I read the philosophers.',
      '我一直對兩個問題很有興趣，一個是權力憑什麼正當，另一個是國家到底要遵守哪些規則。高中的時候我寫了幾份國際法的研究指南，上了大學就去讀這些政治哲學家。',
      "Deux questions me reviennent sans cesse : qu'est-ce qui rend un pouvoir légitime, et à quelles règles les États répondent-ils vraiment. Au lycée, j'ai écrit des guides de recherche juridique ; à l'université, j'ai lu les philosophes.",
    ),
    sections: [
      {
        heading: t('International law', '國際法', 'Droit international'),
        text: t(
          'As a high school student chairing Model UN committees, I co-wrote research guides that delegates used to prepare: built from treaties, court orders and academic books, fully footnoted, and written without AI tools.',
          '高中在模擬聯合國當主席的時候，我和其他主席一起寫了給代表準備會議用的研究指南，內容是從條約、法院的裁定和學術書籍整理出來的，也都有附上註腳，而且完全沒有用 AI 工具。',
          "Lycéen et président de comités Model UN, j'ai coécrit des guides de recherche pour la préparation des délégués : construits à partir de traités, de décisions de justice et d'ouvrages universitaires, entièrement sourcés, et écrits sans outils d'IA.",
        ),
        bullets: [
          t(
            'Ukraine v. Russia at the International Court of Justice (56 pages): the history from the Maidan Revolution to the invasion, the Court’s jurisdiction under the Genocide Convention, both sides’ arguments and the provisional measures, plus a guide to the sources of international law drawn from more than 20 books',
            '〈國際法院：烏克蘭訴俄羅斯〉（56 頁）：從廣場革命寫到入侵，整理法院依《防止及懲治滅絕種族罪公約》的管轄權、雙方的主張和臨時措施，另外還附了一份參考 20 多本書寫成的國際法法源導讀',
            "Ukraine c. Russie devant la Cour internationale de justice (56 pages) : de la révolution de Maïdan à l'invasion, la compétence de la Cour au titre de la Convention sur le génocide, les arguments des deux parties et les mesures conservatoires, avec un guide des sources du droit international tiré de plus de 20 ouvrages",
          ),
          t(
            'Nations under International Law (40 pages): what a nation is in law, self-determination, and the rights of peoples, written while asking what it all means for Taiwan',
            '〈國際法下的民族〉（40 頁）：討論在法律上民族是什麼、民族自決和民族的權利，寫的時候我一直在想這些對台灣來說代表什麼',
            "Les nations en droit international (40 pages) : ce qu'est une nation en droit, l'autodétermination et les droits des peuples, écrit en me demandant ce que tout cela signifie pour Taïwan",
          ),
          t(
            'A 95-slide lecture, “International Law in Model United Nations”, on the sources of law, its subjects, territory, humanitarian law and the Court, to get delegates reading treaties and cases, not only the news',
            '一堂 95 頁投影片的「模擬聯合國裡的國際法」入門課，內容包括法源、國際法主體、領土、人道法和國際法院，希望代表們除了看新聞，也會去讀條約和判例',
            'Un cours de 95 diapositives, « Le droit international en Model UN », sur les sources du droit, ses sujets, le territoire, le droit humanitaire et la Cour, pour que les délégués lisent les traités et la jurisprudence, pas seulement l’actualité',
          ),
        ],
      },
      {
        heading: t('Political philosophy', '政治哲學', 'Philosophie politique'),
        text: t(
          'At National Taiwan University I spent a year reading Western political thought, from Plato, Aristotle and Augustine through Christine de Pizan, Machiavelli, Bodin, Hobbes and Locke to Rousseau, Wollstonecraft and Marx. My final essay, “Locked In or Rousseau Out?”, asks how political authority can rest on equality when people are born unequal: Locke answers with consent, property and representation, Rousseau with equal participation in making the law.',
          '在台大我花了一整年讀西洋政治思想，從柏拉圖、亞里斯多德、奧古斯丁，到克莉絲汀・德・皮桑、馬基維利、布丹、霍布斯、洛克，再到盧梭、沃斯通克拉夫特和馬克思。我的期末論文〈Locked In or Rousseau Out?〉在問，如果人生下來就不平等，政治權威要怎麼建立在平等上，洛克的答案是同意、財產和代議，盧梭的答案則是每個人都平等地參與制定法律。',
          "À l'Université nationale de Taïwan, j'ai passé un an à lire la pensée politique occidentale, de Platon, Aristote et Augustin à Christine de Pizan, Machiavel, Bodin, Hobbes et Locke, puis Rousseau, Wollstonecraft et Marx. Mon essai final, « Locked In or Rousseau Out? », demande comment l'autorité politique peut reposer sur l'égalité quand les êtres humains naissent inégaux : Locke répond par le consentement, la propriété et la représentation, Rousseau par la participation égale à l'élaboration de la loi.",
        ),
      },
    ],
    files: [
      {
        src: 'work/international-law/icj-background-guide.pdf',
        label: t('Ukraine v. Russia at the ICJ (56 pages)', '國際法院：烏克蘭訴俄羅斯（56 頁）', 'Ukraine c. Russie devant la CIJ (56 pages)'),
        type: 'PDF',
      },
      {
        src: 'work/international-law/ga6-background-guide.pdf',
        label: t('Nations under International Law (40 pages)', '國際法下的民族（40 頁）', 'Les nations en droit international (40 pages)'),
        type: 'PDF',
      },
      {
        src: 'work/international-law/international-law-lecture.pdf',
        label: t('Lecture: International Law in Model UN (95 slides)', '課程：模擬聯合國裡的國際法（95 頁）', 'Cours : le droit international en Model UN (95 diapositives)'),
        type: 'PDF',
      },
      {
        src: 'work/international-law/locke-rousseau-essay.pdf',
        label: t('Essay: Locked In or Rousseau Out? (9 pages)', '論文：Locked In or Rousseau Out?（9 頁）', 'Essai : Locked In or Rousseau Out? (9 pages)'),
        type: 'PDF',
      },
    ],
  },
  {
    slug: 'djing',
    category: 'interest',
    noPage: true,
    icon: '🎧',
    title: t('DJing', 'DJ', 'DJ'),
    date: t('', '', ''),
    role: t('', '', ''),
    thumb: 'work/dj/thumb.jpg',
    thumbWide: true,
    summary: t(
      "I don't play shows. I just love mixing songs into each other and turning my room into a party, mostly pop and reggaeton.",
      '我沒有在接表演，就只是很喜歡把一首歌混進另一首，在自己房間裡開一場派對，最常放的是流行和雷鬼動。',
      "Je ne joue pas en soirée. J'aime simplement enchaîner les morceaux et transformer ma chambre en fête, surtout avec de la pop et du reggaeton.",
    ),
    sections: [],
  },
];

export const byCategory = (c: Category) => items.filter((i) => i.category === c && !i.hidden);

/** Organizations in "Organization & Project Experience". Their items are those with a matching `org`. */
export interface Org {
  id: string;
  name: L;
  /** One line under the name, e.g. what the organization is and your role in it */
  subtitle: L;
  period: L;
  /** Picture shown on the left; a file in public/. Empty shows the initials instead. */
  image: string;
  /** Show the picture as a circle (for round logos) */
  round?: boolean;
  initials: string;
}

export const orgs: Org[] = [
  {
    id: 'glo',
    name: t('Global Leadership Organization (GLO)', 'Global Leadership Organization（GLO）', 'Global Leadership Organization (GLO)'),
    subtitle: t(
      'Nonprofit founded at UC Berkeley · Taipei chapter',
      '源自 UC Berkeley 的非營利組織・台北分會',
      'Association fondée à UC Berkeley · antenne de Taipei',
    ),
    period: t('Jan 2025 – Jan 2026', '2025 年 1 月 – 2026 年 1 月', 'janv. 2025 – janv. 2026'),
    image: 'orgs/glo.jpg',
    round: true,
    initials: 'GLO',
  },
  {
    id: 'mst',
    name: t('MUN Society Taiwan (MST)', '台灣模擬聯合國學會（MST）', 'MUN Society Taiwan (MST)'),
    subtitle: t(
      'National debate-training nonprofit · Founding Member & Director',
      '全國性的辯論培訓非營利組織・創始成員暨理事',
      'Association nationale de formation au débat · membre fondateur et directeur',
    ),
    period: t('Jul 2023 – Jul 2026', '2023 年 7 月 – 2026 年 7 月', 'juil. 2023 – juil. 2026'),
    image: 'orgs/mst.png',
    round: true,
    initials: 'MST',
  },
];

export const itemsOfOrg = (id: string) => items.filter((i) => i.org === id);
