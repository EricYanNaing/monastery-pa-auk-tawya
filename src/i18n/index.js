import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      monks: "Sayadaw's Biography",
      about: "About Monastery",
      contact: "Contact",
    },
    home: {
      welcome: "WIPATHANADUYA, PA AUK TAWYA (18 Miles)",
      readMore: "Read More",
      aboutMonks: "About Our Monks",
      aboutMonastery: "About Our Monastery",
      monksDesc:
        "Our monastery is home to dedicated monks who devote their lives to spiritual practice and teaching.",
      monasteryDesc:
        "A peaceful sanctuary nestled in nature, our monastery has been a place of meditation and learning for generations.",
    },
  },
  myan: {
    nav: {
      home: "Home",
      monks: "ဆရာတော်ဘုရားကြီး အတ္ထုပ္ပတ္တိ",
      about: "ဘုန်းကြီးကျောင်း အကြောင်း",
      contact: "ဆက်သွယ်ရန်",
    },
    home: {
      welcome: "ဝိပဿနာဓုရ၊ ဖားအောက်တောရ (၁၈ မိုင်)",
      readMore: "ပိုပြီးဖတ်ပါရန်",
      aboutMonks: "ဆရာတော်ဘုရားကြီး အတ္ထုပ္ပတ္တိ",
      aboutMonastery: "ဘုန်းကြီးကျောင်း အကြောင်း",
      monksDesc:
        "ကျွန်တော်တို့ကျောင်းက ဘုန်းကြီးတွေကို အနုမောဒနာတရား ကျင့်ကြံအားထုတ်ပြီး စာသင်တဲ့ နေရာပါ။",
      monasteryDesc:
        "သဘာဝတရားဖြင့် အေးချမ်းစွာ တည်ရှိနေသော ကျွန်ုပ်တို့၏ ဘုန်းတော်ကြီးကျောင်းသည် မျိုးဆက်ပေါင်းများစွာ တရားအားထုတ်ရာ နေရာတစ်ခုဖြစ်သည်။",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "myan",
  fallbackLocale: "myan",
  messages,
});
