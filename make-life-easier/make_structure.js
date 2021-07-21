var category_list = {
  Health: {
    en: "Health",
    ru: "Здоровье",
    ja: "健康",
    "zh-cn": "健康",
    tr: "Sağlık",
    de: "Gesundheit",
    es: "Salud",
    fr: "Santé",
    it: "Salute",
    ar: "الصحة",
    id: "Kesehatan",
    pt: "Saúde",
    pl: "Zdrowie",
    fa: "سلامتی",
    hi: "स्वास्थ्य",
    bn: "স্বাস্থ্য",
  },

  Travel: {
    en: "Travel",
    ru: "Путешествовать",
    ja: "トラベル",
    "zh-cn": "旅行",
    tr: "Seyahat",
    de: "Reise",
    es: "Viajar",
    fr: "Voyage",
    it: "Viaggio",
    ar: "السفر",
    id: "Perjalanan",
    pt: "Viagem",
    pl: "Podróżować",
    fa: "مسافرت رفتن",
    hi: "यात्रा",
    bn: "ভ্রমণ",
  },
  Technology: {
    en: "Technology",
    ru: "Технология",
    ja: "技術",
    "zh-cn": "技术",
    tr: "teknoloji",
    de: "Technologie",
    es: "Tecnología",
    fr: "La technologie",
    it: "Tecnologia",
    ar: "تقنية",
    id: "Teknologi",
    pt: "Tecnologia",
    pl: "Technologia",
    fa: "فن آوری",
    hi: "प्रौद्योगिकी",
    bn: "প্রযুক্তি",
  },

  Social: {
    en: "Social",
    ru: "Социальное",
    ja: "ソーシャル",
    "zh-cn": "社会的",
    tr: "Sosyal",
    de: "Sozial",
    es: "Social",
    fr: "Social",
    it: "Sociale",
    ar: "الاجتماعية",
    id: "Sosial",
    pt: "Social",
    pl: "Społeczny",
    fa: "اجتماعی",
    hi: "सामाजिक",
    bn: "সামাজিক",
  },

  News: {
    en: "News",
    ru: "Новости",
    ja: "ニュース",
    "zh-cn": "新闻",
    tr: "Haberler",
    de: "Nachrichten",
    es: "Noticias",
    fr: "Nouvelles",
    it: "notizia",
    ar: "أخبار",
    id: "Berita",
    pt: "Notícia",
    pl: "Aktualności",
    fa: "اخبار",
    hi: "समाचार",
    bn: "খবর",
  },

  Food: {
    en: "Food",
    ru: "Еда",
    ja: "食物",
    "zh-cn": "餐饮",
    tr: "Gıda",
    de: "Essen",
    es: "Comida",
    fr: "Nourriture",
    it: "Cibo",
    ar: "طعام",
    id: "Makanan",
    pt: "Comida",
    pl: "jedzenie",
    fa: "غذا",
    hi: "खाना",
    bn: "খাদ্য",
  },

  People: {
    en: "People",
    ru: "люди",
    ja: "人",
    "zh-cn": "人",
    tr: "İnsanlar",
    de: "Menschen",
    es: "Personas",
    fr: "Gens",
    it: "Persone",
    ar: "اشخاص",
    id: "Orang-orang",
    pt: "Pessoas",
    pl: "Ludzie",
    fa: "مردم",
    hi: "लोग",
    bn: "মানুষ",
  },

  "About Us": {
    en: "About Us",
    ru: "Насчет нас",
    ja: "私たちに関しては",
    "zh-cn": "关于我们",
    tr: "Hakkımızda",
    de: "Über uns",
    es: "Sobre nosotros",
    fr: "À propos de nous",
    it: "Riguardo a noi",
    ar: "معلومات عنا",
    id: "Tentang kami",
    pt: "Sobre nós",
    pl: "O nas",
    fa: "درباره ما",
    hi: "हमारे बारे में",
    bn: "আমাদের সম্পর্কে",
  },
};

var supported_languages = {
  en: "English",
  ru: "русский",
  ja: "日本人",
  "zh-cn": "中文",
  tr: "Türk",
  de: "Deutsche",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ar: "عربى",
  id: "bahasa Indonesia",
  pt: "Português",
  pl: "Polskie",
  fa: "فارسی",
  hi: "हिंदी",
  bn: "বাংলা",
};

var languageDirectory = {
  title: "Every Page Site",
  topic: "Every Page Site",
  date: new Date().toISOString(),
  publishdate: new Date().toISOString(),
  tags: "[]",
  comments: "true",
  langName: "English",
  langCode: "en",
  type: "languageList",
  images: "https://everypage.site/images/logo_image.png",
};

var categoryDirectory = {
  title: "Health",
  topic: "Health",
  date: new Date().toISOString(),
  publishdate: new Date().toISOString(),
  tags: "[]",
  comments: "true",
  draft: "false",
  nav: "true",
  images: "https://everypage.site/images/logo_image.png",
  author: "everypage.site",
};

var languageDirectoryHeader =
  "---\n" +
  "title: " +
  languageDirectory["title"] +
  "\n" +
  "topic: " +
  languageDirectory["topic"] +
  "\n" +
  "date: " +
  languageDirectory["date"] +
  "\n" +
  "publishdate: " +
  languageDirectory["publishdate"] +
  "\n" +
  "tags: " +
  languageDirectory["tags"] +
  "\n" +
  "comments: " +
  languageDirectory["comments"] +
  "\n" +
  "langName: " +
  "\n  " +
  languageDirectory["langName"] +
  "\n" +
  "langCode: " +
  "\n  " +
  languageDirectory["langCode"] +
  "\n" +
  "type: " +
  "\n  " +
  languageDirectory["type"] +
  "\n" +
  "images:" +
  languageDirectory["images"] +
  "\n" +
  "\n---\n";

var categoryDirectoryHeader =
  "---\n" +
  "title: " +
  categoryDirectory["title"] +
  "\n" +
  "topic: " +
  categoryDirectory["topic"] +
  "\n" +
  "date: " +
  categoryDirectory["date"] +
  "\n" +
  "publishdate: " +
  categoryDirectory["publishdate"] +
  "\n" +
  "tags: " +
  categoryDirectory["tags"] +
  "\n" +
  "comments: " +
  categoryDirectory["comments"] +
  "\n" +
  "draft: " +
  "\n  " +
  categoryDirectory["draft"] +
  "\n" +
  "nav: " +
  "\n  " +
  categoryDirectory["nav"] +
  "\n" +
  "images:" +
  languageDirectory["images"] +
  "\n" +
  "\n---\n";

var fs = require("fs");

// Creating LANGUAGE index.md files (make sure folders exist)
var languageLoop = Object.keys(supported_languages);
//console.log(languageLoop)
for (i = 0; i < languageLoop.length; i++) {
  console.log(languageLoop[i]);
  console.log(supported_languages[languageLoop[i]]);
  var languageDirectoryHeader =
    "---\n" +
    'title: "' +
    languageDirectory["title"] +
    '"\n' +
    'topic: "' +
    languageDirectory["topic"] +
    '"\n' +
    "date: " +
    languageDirectory["date"] +
    "\n" +
    "publishdate: " +
    languageDirectory["publishdate"] +
    "\n" +
    "tags: " +
    languageDirectory["tags"] +
    "\n" +
    "comments: " +
    languageDirectory["comments"] +
    "\n" +
    "langName: " +
    '"' +
    supported_languages[languageLoop[i]] +
    '"\n' +
    "langCode: " +
    '"' +
    languageLoop[i] +
    '"\n' +
    "type: " +
    '"' +
    languageDirectory["type"] +
    '"\n' +
    "images: " +
    '\n  - "' +
    languageDirectory["images"] +
    '"' +
    "\n---\n";

  // Check if category directory exists
  var dir = "../content/" + languageLoop[i];
  console.log(dir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  var indexFilePath = dir + "/_index.md";
  fs.writeFile(indexFilePath, languageDirectoryHeader, function (err, data) {
    if (err) {
      return console.log("There was error while writing this file", err);
    }
    console.log("success! for ", indexFilePath);
  });
}

console.log("\n\n\n STARTING CATEGORY DIRECTORIES NOW\n\n\n");

// Creating CATEGORY Folders + index.md files
var categoryLoop = Object.keys(category_list);

// console.log(categoryCountryLoop)
for (i = 0; i < categoryLoop.length; i++) {
  //var countryMap = categoryLoop[i]
  console.log(categoryLoop[i]);
  var categoryCountryLoop = category_list[categoryLoop[i]];
  var countryList = Object.keys(categoryCountryLoop);
  // console.log(countryList[0])

  for (j = 0; j < countryList.length; j++) {
    // console.log(countryList[j])

    var countryCategory = categoryCountryLoop[countryList[j]];
    var countryCategoryEn = categoryCountryLoop["en"];
    // console.log(countryCategory)

    var categoryDirectoryHeader =
      "---\n" +
      'title: "' +
      countryCategory +
      '"\n' +
      'topic: "' +
      categoryLoop[i] +
      '"\n' +
      "date: " +
      categoryDirectory["date"] +
      "\n" +
      "publishdate: " +
      categoryDirectory["publishdate"] +
      "\n" +
      "tags: " +
      categoryDirectory["tags"] +
      "\n" +
      "comments: " +
      categoryDirectory["comments"] +
      "\n" +
      "draft: " +
      categoryDirectory["draft"] +
      "\n" +
      "nav: " +
      categoryDirectory["nav"] +
      "\n" +
      "images: " +
      '\n  - "' +
      languageDirectory["images"] +
      '"' +
      "\n---\n";

    // Check if category directory exists
    var dir = "../content/" + countryList[j] + "/" + countryCategoryEn;
    console.log(dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    var indexFilePath = dir + "/_index.md";
    fs.writeFile(indexFilePath, categoryDirectoryHeader, function (err, data) {
      if (err) {
        return console.log("There was error while writing this file", err);
      }
      console.log("success! for ", indexFilePath);
    });
  }
}
