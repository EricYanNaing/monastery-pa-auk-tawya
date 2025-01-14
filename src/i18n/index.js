import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      monks: "Sayadaw's Biography",
      about: "About Monastery",
      donator: "Donator List",
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
    bio: {
      title: "Biography of Sayadaw Bhaddanta Kuntala",
      biograph1:
        "Sayadaw Bhaddanta Kunjala was born on the 12* October 1959 in the village of Si Tine in Sin Paung Wae, Magway, the Union of Myanmar. Sayadaw's lay person name was Mg Kan Tin. His parents were U Kyaw Nyein and Daw Myint, who were pious Buddhists.",
      title2: "Starting out as a novice",
      biograph2: `He was ordained as a novice named "Shin Kuntala" when he was nine years old by the supporting of his devoted parents. His preceptor was Sayadaw Bhaddanta Visuddha, from the Si Tine Village Ywar-Oo Monastery. Shin Kuntala took higher ordination "Upasampada" on 19" January, 1980.`,
      title3: "Education",
      subtitle3: "Shin Kuntala studied Buddhist scriptures",
      edu: {
        edu1: "at Si Tine Village Ywar-Oo Monastery in Magway",
        edu2: "Mahasudassanãrama Monastery in Pyay",
        edu3: "Saddhamma Pijjotãrama Monastery in Monywa",
        edu4: ` for seven years in the dedicated learning of Buddhist literature
"Pariyatti". He passed the Pathamalattan examination and continued learning in Pali, Authakathä, and Tika (the Buddhist canon, commentaries, and sub-commentaries).`,
        title4: "Meditation and religious duty",
        about4:
          "From 1988 to 1991, he learned and practiced meditation (Kammatthan) under the guidance of Sayadaw Bhaddanta Nagavamsa Thera, Saddhamma Pijjotarama Monastery in Monywa. In 1992, he became a meditation teacher and instructed meditation at Saggaing Hill, Dhamma Swan Yi, Maharsi Yeik Thar, Saggaing. Again, from 1993 to 1999, he learned and practiced mediation (Kammatthan) under the guidance of the most Venerable Sayadaw Bhaddanta Acinna, International Pa-auk Tawya Yeik Thar, Mawlamyine, Mon State.",
      },
      exp: {
        title: "Sayadaw Bhaddanta Kuntala serves many religious duties -",
        exp1: "From 1999 to till now, Member of Sangha Nayaka, International Pa-auk Tawya Yeik Thar (Main)",
        exp2: "-   Sangha Nayaka (Shwe Kyin), at Pyin Oo Lwin, for 11 years (2008-2019)",
        exp3: "-   From 2019 to till now, Vinaya Dura (Shwe Kyin), at Hlegu",
        exp4: "-   Padhana Nayaka Sayadaw, at Pa-auk Tawya Tat-Oo Dhamma Yeik Thar, Pyin Oo Lwin, for 11 years (2002-2012)",
        exp5: "-   From 2012 to till now, as Padhana Nayaka Sayadaw, at Yangon-Mandalay High way Road (18miles-3furlongs), International Pa-auk Tawya Vipassana Dhura Buddha Sasana Yeik Thar, Hlegu, Yangon, Sayadaw Bhaddanta Kuntala fulfill the propagation of the Buddha's Sasana ardently with great Saddha.",
      },
      exp2 : {
        title : "Both local and foreign,",
        about : `during 30-years of his meditation teachings, the average numbers of Yogi (9130) were taught the way of meditation. In honor of Sayadaw's hard working in the Buddhist missionary purpose, the Government of the Union of Myanmar conferred on him the title of "Kammatthanacariya" (Meditation Master) in 2018, and conferred on him the title of "Mahã-Kammatthanacariya" (Great Meditation Master) in 2022. Sayadaw Bhaddanta Kuntala with great compassion and loving-kindness on all living beings, he ever admonishes the Buddha's Dhamma-Vinaya for the benefits of all and he is still performing Dhamma duties more and more.`},
      teaching : {
        title : "Under the instruction of the most Venerable Pa-auk Tawya Sayadaw Bhaddanta Acinna, Sayadaw Bhaddanta Kuntala performed the duties of Meditation Teacher for the benefits of many devotees -",
        teach1 : "1.    6 years in International Pa-auk Tawya, Mawlamyine, Mon State",
        teach2 : "2.    2 years in Thanlyin Pa-auk Tawya, Yangon",
        teach3 : "3.    1 year in Lat-Lote-Taung Tawya, Naypyitaw",
        teach4 : "4.    1 year in Man-Taung-Chay Pa-auk Tawya, Mandalay",
        teach5 : "4.   5.    1 year in Samanasukha Pa-auk Tawya, Kaohsiung City, Nan-Hto District, Taiwan",
        teach6 : " Yearly visited to Pa-auk meditation centers of Singapore, Thai, Malaysia, and China branches for delivering the Dhamma talks and teaching meditation",
      },
      teaching2 : { 
        title : "   And starting from 1999, Sayadaw Bhaddanta Kuntala conducted regular meditation retreats 2-times per year at Shwe Oo Min Tawya, Paung Wa village, Sar Lin Gyi District, for 18 years. ",
        teach1 : "Altogether (15-days) meditation retreats (16-times)",
        teach1 : " (10-days) meditation retreats (20-times) ",
        teach1 : "with average numbers of Yogi(6150). In various parts of the country in Myanmar, Sayadaw held many other special meditation retreats and delivered Dhamma talks and gave proper instructions for mediation with loving-kindness.",
      }
    },
    monastery : {
      title : "Vipassana Dhura, Phar Auk Monastery (18-Mile)",
      subtitle : "Location:",
      about : "18 Miles and 3 Furlongs, Yangon-Mandalay Expressway, Hlegu Township",
      subtitle2: "Contact:",
      about2: "Phone: 09798844234",
      area : {
        title : "Location and Area",
        about: " Vipassana Dhura, Phar Auk Monastery (18-Mile) is a branch of the Phar Auk Meditation Retreat Center. It is located at 18 miles and 3 furlongs along the Yangon-Mandalay Expressway in Hlegu Township. A signboard indicating the monastery can be seen at this location, making it the closest spot to Yangon on Yangon-Mandalay expressway. The monastery spans over 100 acres of land, offering a vast and serene environment.",
      },
      foundation : {
        title : "Foundation of the Monastery",
        about1 : "The monastery site was first surveyed on Wednesday, 20th June 2012 (Waxing Day of Waso) by the presiding Sayadaw Bhaddanta Kunda and the family of U Ba Aye and Daw Hla Kyi. Subsequently, the Phar Auk Sayadaw and Nayaka Sayadaws officially designated the site as a monastery on Tuesday, 26th February 2013 (Waning Day of Tabodwe). The monastery was founded when U Ba Aye and Daw Hla Kyi donated 100 acres of land to the Phar Auk Sayadaw with a land-donation ceremony as a meritorious deed."
      },
      donations : {
        title : "Donations and Contributions",
        subtitle : "The foundation of the monastery and its development were made possible through contributions from devout donors, including the following:",
        donate1 : "1.	Planting of Maha Bodhi tree  ",
        donate2 : "2.	Construction of access roads",
        donate3 : "3.	Tree planting across the grounds",
        donate4 : "4.	Excavation of ponds and reservoirs",
        donate5 : "5.	Construction of a Pāsādika pagoda",
        donate6 : "6.	Building the Vipassana Meditation Hall",
        donate7 : "7.	Erecting the Phar Auk Sayadaw’s residential monastery",
        donate8 : "8.	Constructing the presiding Sayadaw Bhaddanta Kunda’s residence",
        donate9 : "9.	Building the monasteries for monks",
        donate10 : "10.	Establishing a dining hall",
        donate11 : "11.	Constructing a library and Pitaka hall",
        donate12 : "12.	Building dormitories and meditation halls for female yogis",
        donate13 : "13.	Excavating underground wells and ponds",
        donate14 : "Donating water purification systems",
        summary : "These developments and contributions play a vital role in supporting the continuation of the Buddha’s teachings, ensuring the prosperity and sustainability of the Sasana."
      },
      guide : {
        title : "Directions to the Monastery",
        subtitle: "",
        title1: "If coming from the Yangon-Mandalay Expressway towards Yangon: Turn right at Milepost 18 miles and 3 furlongs.",
        step1: "After turning right: Drive straight for about 5 minutes.",
        step2: "You will see the monastery entrance gate on the left:	Enter through the gate,Drive for another 5 minutes to reach the monastery grounds.",
        note: "Note: Please drive carefully and follow the directions.",
      },
      scan : {
        title : "ဝိပဿနာဓုရ (ဖားအောက်တောရ - ၁၈ မိုင်) သို့လှူဒါန်းလိုပါက အောက်ပါအတိုင်းဆောင်ရွက်နိုင်ပါသည် -",
        label1 : "QR Code ကို Scan ဖတ်၍ လှူဒါန်းခြင်း",
        scan1 :"အလှူငွေကို QR Code ဖြင့် လွယ်ကူစွာလှူဒါန်းနိုင်ပါသည်။",
        label2 : "လှူဒါန်းပြီးနောက် ဆက်သွယ်ရန်",
        scan2 : "လှူဒါန်းပြီးပါက အလှူရှင်နာမည်နှင့် လှူဒါန်းသော အကြောင်းအရာကို Viber (ဖုန်းနံပါတ် +95 9798844234) သို့ ဆက်သွယ်ပြီး အလှူမှတ်တမ်းတောင်းခံပေးပါရန် ပန်ကြားအပ်ပါသည်။"
      }
    }
  },
  myan: {
    nav: {
      home: "Home",
      monks: "ဆရာတော်ဘုရားကြီး အတ္ထုပ္ပတ္တိ",
      about: "ဘုန်းကြီးကျောင်း အကြောင်း",
      donator : "အလှူရှင်စာရင်း",
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
    bio: {
      title: "ဆရာတော် ဘဒ္ဒန္တကုဏ္ဍလ၏ အတ္ထုပ္ပတ္တိ",
      biograph1:
        "ဆရာတော် ဘဒ္ဒန္တကုဏ္ဍလသည် ၁၉၅၉ ခုနှစ် အောက်တိုဘာလ ၁၂ ရက်နေ့တွင် မြန်မာနိုင်ငံ၊ မကွေးတိုင်းဒေသကြီး၊ ဆင်ပေါင်ဝဲမြို့နယ်၊ စည်တိုင်းကျေးရွာ၌ ဖွားမြင်ခဲ့ပြီး လူဝတ်ကြောင်အမည်မှာ မောင်ကံတင် ဖြစ်သည်။ သူ့မိဘများမှာ ဦးကျော်ငြိမ်းနှင့် ဒေါ်မြင့်တို့ ဖြစ်ပြီး ဗုဒ္ဓဘာသာဝင်များ ဖြစ်သည်။",
      title2: "သာမဏေအဖြစ် စတင်ခြင်း",
      biograph2:
        "အသက် ကိုးနှစ်တွင် “ရှင်ကုဏ္ဍလ” ဟူသော သာမဏေအဖြစ် ဝင်ရောက်ခဲ့ပြီး၊ ဥပဇ္ဈာယ်ဆရာတော်မှာ စည်တိုင်းကျေးရွာ ရွာဦးကျောင်းတိုက်မှ ဆရာတော် ဘဒ္ဒန္တဝိသုဒ္ဓ ဖြစ်သည်။ ၁၉၈၀ ခုနှစ် ဇန်နဝါရီလ ၁၉ ရက်နေ့တွင် ရဟန်းဘဝအဖြစ် ရောက်ရှိခဲ့သည်။",
      title3: "ပညာသင်ကြားမှု",
      subtitle3: "ရှင်ကုဏ္ဍလသည် ၁၁ နှစ်ကြာ ဗုဒ္ဓစာပေများကို",
      edu: {
        edu1: "စည်တိုင်းကျေးရွာ ရွာဦးကျောင်းတိုက် (၃ နှစ်)",
        edu2: "ပြည်မြို့ သာသနာ့ဒီပါရုံကျောင်းတိုက် (၁ နှစ်)",
        edu3: "မုံရွာ သဒ္ဓမ္မပဇ္ဇောတာရုံကျောင်းတိုက် (၃ နှစ်)",
        edu4: "ပြည်မြို့ မဟာသုဒဿနာရာမကျောင်းတိုက် (၄ နှစ်)တွင် ပညာသင်ယူခဲ့သည်။",
      },
      title4: "တရားအားထုတ်မှုနှင့် သာသနာ့တာဝန်",
      about4:
        "၁၉၈၈-၁၉၉၁ ခုနှစ်များအတွင်း မုံရွာ သဒ္ဓမ္မပဇ္ဇောတာရုံတွင် ဆရာတော် ဘဒ္ဒန္တနာဂဝံသ၏ လမ်းညွှန်မှုဖြင့် ကမ္မဋ္ဌာန်းတရားကို လေ့လာခဲ့ပါသည်။ ၁၉၉၂ ခုနှစ်တွင် စစ်ကိုင်းတောင်ရှိ မဟာစည်ရိပ်သာ၌ ကမ္မဋ္ဌာန်းဆရာတော်ဖြစ်လာခဲ့သည်။ ၁၉၉၃-၁၉၉၉ ခုနှစ်အထိ မွန်ပြည်နယ် မော်လမြိုင် ဖားအောက်တောရရိပ်သာတွင် ဆရာတော် ဘဒ္ဒန္တအာစိဏ္ဏ၏ လမ်းညွှန်မှုဖြင့် ကမ္မဋ္ဌာန်းတရားများကို သင်ကြားပြသခဲ့သည်။",
      exp: {
        title: "တာဝန်ထမ်းဆောင်မှု",
        exp1: "1.	၁၉၉၉ ခုနှစ်မှ ယခုအချိန်အထိ အပြည်ပြည်ဆိုင်ရာ ဖားအောက်တောရရိပ်သာ ပင်မ၌ နာယကဆရာတော်",
        exp2: "2.	၂၀၀၈-၂၀၁၉ ပြင်ဦးလွင်မြို့နယ် သံဃာ့နာယက",
        exp3: "3.	အပြည်ပြည်ဆိုင်ရာ ဖားအောက်တောရဝိပဿနာဓုရ ဗုဒ္ဓသာသနာ့ရိပ်သာ(လှည်းကူးမြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး)",
        exp4: "၂၀၀၂-၂၀၁၂ ဝိနည်းထိုရ်အဖွဲ့ဝင်အဖြစ်",
        exp5: "၂၀၁၂ ခုနှစ်မှ ယနေ့အချိန်ထိ ပဓာနနာယက ဆရာတော်အဖြစ် သာသနာ့တာဝန်ထမ်းဆောင်နေသည်။",
      },
      exp2 : {
        title : "ပြည်ပတာဝန်များ",
        about : "ဆရာတော်သည် မြန်မာနိုင်ငံတစ်ဝန်းရှိ နေရာများတွင် တရားပွဲများ ကျင်းပခဲ့သလို စင်္ကာပူ၊ ထိုင်း၊ မလေးရှား၊ တရုတ်နှင့် ထိုင်ဝမ်နိုင်ငံများရှိ ယောဂီများကိုလည်း သင်ကြားခဲ့သည်။ နှစ်ပေါင်း ၃၀ အတွင်း ပြည်တွင်းနှင့်ပြည်ပတွင် ယောဂီအရေအတွက် ၉,၁၃၀ ကို သင်ကြားပို့ချပေးခဲ့ပါသည်။"
      },
      teaching: {
        title: "ဝိပဿနာတရားပြန့်ပွားရေး: တရားစခန်းများ ဖွင့်လှစ်မှု :",
        teach1: "၁။ မော်လမြိုင် ဖားအောက်တောရရိပ်သာ (၆ နှစ်)",
        teach2: "၂။ ရန်ကုန် သံလျှင် ဖားအောက်ရိပ်သာ (၂ နှစ်)",
        teach3: "၃။ နေပြည်တော် လက်လုပ်တောင်တောရ (၁ နှစ်)",
        teach4: "၄။ မန္တလေး မန်းတောင်ခြေ ဖားအောက်ရိပ်သာ (၁ နှစ်)",
        teach5: "၅။ ထိုင်ဝမ် သမဏသုခဖားအောက်တောရ (၁ နှစ်)",
        teach6:
          "၆။ နိုင်ငံတကာ တရားစခန်းများ (စင်္ကာပူ၊ ထိုင်း၊ မလေးရှား၊ တရုတ်)	နှစ်စဉ် သွားရောက်ပြီး တရားပွဲများပြုလုပ်မှု။",
      },
      teaching2 : { 
        title : "၁၉၉၉ ခုနှစ်မှ စတင်၍ တစ်နှစ်လျှင် ၂ ကြိမ် အထူးတရားစခန်းများဖွင့်လှစ်ခဲ့ပါသည်။",
        teach1 : "၁၅ ရက်တရားစခန်း - ၁၆ ကြိမ်",
        teach1 : "၁၀ ရက်တရားစခန်း - ၂၀ ကြိမ်",
        teach1 : "စုစုပေါင်းယောဂီ ၆,၁၅၀ ကျော် တရားအားထုတ်ခွင့်ရရှိခဲ့သည်။",
      },
      prize : {
        title : 'ဂုဏ်ပြုဆုတံဆိပ်များ',
        about : "ဆရာတော်ဘုရား၏ ဗုဒ္ဓသာသနာပြုရည်ရွယ်ချက်အတိုင်း သာသနာ့တာဝန်များကို စွမ်းဆောင်ကြိုးပမ်းမူများအပေါ် ပြည်ထောင်စု မြန်မာနိုင်ငံတော်အစိုးရမှ ဂုဏ်ပြုသောအားဖြင့်ဘွဲ့ တံဆိပ်တော်များ ပေးအပ်ခဲ့သည်။",
        prize1 : "1.	၂၀၁၈ ခုနှစ်•	ကမ္မဋ္ဌာနာစရိယဘွဲ့တံဆိပ်တော်အပ်နှင်းခံခဲ့ရသည်။",
        prize2 : "၂၀၂၂ ခုနှစ်•	မဟာကမ္မဋ္ဌာနာစရိယဘွဲ့တံဆိပ်တော် ထပ်မံအပ်နှင်းခံခဲ့ရသည်။",
        summary : "ဆရာတော်ဘုရားသည် သက်ရှိများအပေါ် မေတ္တာကရုဏာဖြင့် ဗုဒ္ဓဝိနယတရားများကို ညွှန်ပြလျက် သာသနာ့တာဝန်များကို စွမ်းစွမ်းတမံထမ်းဆောင်လျှက်ရှိသည်။"
      }
    },
    monastery : {
      title : "ဝိပဿနာဓုရ၊ ဖားအောက်တောရ (၁၈ မိုင်)",
      subtitle : "တည်နေရာ:",
      about : "၁၈ မိုင် ၃ ဖာလုံ၊ ရန်ကုန် မန္တလေး အမြန်လမ်း၊ လှည်းကူးမြို့နယ်",
      subtitle2: "ဆက်သွယ်ရန်:",
      about2: "ဖုန်း : 09798844234",
      area : {
        title : "တည်နေရာနှင့် အကျယ်အဝန်း",
        about: "ဝိပဿနာဓုရ ဖားအောက်တောရ (၁၈ မိုင်) သည် ဖားအောက်တောရ ရိပ်သာ၏ခွဲရိပ်သာတစ်ခုအဖြစ် ၁၈ မိုင် ၃ ဖာလုံ အမြန်လမ်း၊ လှည်းကူးမြို့နယ်တွင်တည်ရှိသည်။ ရန်ကုန်-မန္တလေးအမြန်လမ်းမပေါ်ရှိ ရန်ကုန်မြို့မှအနီးဆုံးအကွာအဝေးတွင် ၁၈ မိုင် ၃ ဖာလုံတွင် ကျောင်းလမ်းညွှန်ဆိုင်းဘုတ်ကို တွေ့မြင်နိုင်ပါသည်။ ကျောင်း၏ မြေဧရိယာမှာ စုစုပေါင်းဧက ၁၀၀ ကျော်ရှိပြီး ကျယ်ဝန်းလှသည်။",
      },
      foundation : {
        title : "ကျောင်းတိုက်ဖွဲ့စည်းလာပုံ",
        about1 : "၁၃၇၄ ခုနှစ် (ပ) ဝါဆိုလဆုတ် ၂ ရက် (၂၀.၆.၂၀၁၂) ဗုဒ္ဓဟူးနေ့တွင် ကျောင်းထိုင်ဆရာတော် ဘဒ္ဒန္တကုဏ္ဍလနှင့် ဦးဘအေး+ဒေါ်လှကြည် မိသားစုတို့မှ ကျောင်းမြေနေရာအား ပထဝီဒဿနမင်္ဂလာ ပြုလုပ်ကြည့်ရှုခဲ့ပါသည်။ အဆိုပါအခမ်းအနားပြီးနောက် ၁၃၇၄ ခုနှစ် တပို့တွဲလဆုတ် ၁ ရက် (၂၆.၂.၂၀၁၃) အင်္ဂါနေ့တွင် ဖားအောက်ဆရာတော်ကြီးနှင့် ဖားအောက်နာယကဆရာတော်များက ကျောင်းအဖြစ် သတ်မှတ်ခဲ့ပါသည်။ ဦးဘအေးနှင့် ဒေါ်လှကြည် မိသားစုမှ ဖားအောက်ဆရာတော်ကြီးအား မြေဧက (၁၀၀) ကို ပထဝီဒါနမင်္ဂလာဖြင့် လှူဒါန်းခြင်းဖြင့် ကျောင်း၏ မူလတည်ထောင်မှု စတင်ခဲ့ပါသည်။"
      },
      donations : {
        title : "ဤကျောင်းတည်ထောင်ရေးအတွက် လှူဒါန်းမှုများ",
        subtitle : "၇ ရက်သားသမီး ဒါယိကာ၊ ဒါယိကာမများမှ ပူးပေါင်း၍ ဆောင်ရွက်ခဲ့သော လှူဒါန်းမှုများမှာ အောက်ပါအတိုင်းဖြစ်ပါသည်-",
        donate1 : "၁။ မဟာဗောဒိပင် စိုက်ပျိုးလှူဒါန်းခြင်း",
        donate2 : "၂။ မဂ္ဂင်လမ်းများ ဖောက်လုပ်လှူဒါန်းခြင်း",
        donate3 : "၃။ သစ်ပင်စိုက်ပျိုးလှူဒါန်းခြင်း",
        donate4 : "၄။ ဆည်ရေကန်တူးဖော်လှူဒါန်းခြင်း",
        donate5 : "၅။ ပါသာဒိကာစေတီတော်မြတ်ကြီးတည်ထားလှူဒါန်းခြင်း",
        donate6 : "၆။ ဝိပဿနာကမ္မဌာန သိမ်တော်ကြီး ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate7 : "၇။ ဖားအောက်ဆရာတော်ကြီး၏ စံကျောင်း ဆောက်လုပ်လှူဒါန်းခြင်းး",
        donate8 : "၈။ ကျောင်းထိုင်ဆရာတော် ဘဒ္ဒန္တကုဏ္ဍလ၏ စံကျောင်း ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate9 : "၉။ သံဃာတော်များ သီတင်းသုံးနိုင်ရန် တစ်ပါးကျောင်း ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate10 : "၁၀။ ဆွမ်းစားကျောင်းဆောင် ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate11 : "၁၁။ ပိဋကတ်တိုက်နှင့် စာကြည့်တိုက် ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate12 : "၁၂။ အမျိုးသမီးဓမ္မာရုံနှင့် ယောဂီဆောင်များ ဆောက်လုပ်လှူဒါန်းခြင်း",
        donate13 : "၁၃။ မြေအောက်ရေတွင်းနှင့် ရေကန်တူးဖော်လှူဒါန်းခြင်း",
        donate14 : "၁၄။ သောက်ရေသန့်စက်များ လှူဒါန်းခြင်း",
        summary : "ဤကျောင်းတည်ထောင်ရေးနှင့် ဆောင်ရွက်မှုများသည် သာသနာတော်တည်တံ့ရေးအတွက် အထူးအရေးပါသော မင်္ဂလာကဏ္ဍများဖြစ်ပါသည်။"
      },
      guide : {
        title : "ကျောင်းတိုက်သို့လာရန်လမ်းညွှန်",
        subtitle: "ကျောင်းတိုက်သို့ရောက်ရန် လမ်းညွှန်ကို အကျဉ်းချုပ်ပြထားပေးလိုက်သည် -	",
        title1: "ရန်ကုန်-မန္တလေး အမြန်လမ်းပေါ်မှ ရန်ကုန်ဘက်မှလာပါက ၁၈ မိုင် ၃ ဖာလုံ အရောက်တွင် ညာဘက်သို့ ကွေ့ပါ။",
        step1: "ညာဘက်ကွေ့ပြီး	လမ်းအတိုင်း ကားဖြင့် ၅ မိနစ်ခန့်မောင်းပါ",
        step2: "ဘယ်ဘက်တွင် ကျောင်းအဝင်မုဒ်ဦး တွေ့ပါမည်။	ထိုနေရာမှ လမ်းအတွင်းသို့ဝင်ပြီး	၅ မိနစ်ခန့်မောင်းပါက ကျောင်းအတွင်းရောက်ရှိပါမည်။",
        note: "မှတ်ချက်: လမ်းညွှန်အတိုင်း သတိထား၍မောင်းနှင်ပါ။",
      },
      scan : {
        title : "ဝိပဿနာဓုရ (ဖားအောက်တောရ - ၁၈ မိုင်) သို့လှူဒါန်းလိုပါက အောက်ပါအတိုင်းဆောင်ရွက်နိုင်ပါသည် -",
        label1 : "QR Code ကို Scan ဖတ်၍ လှူဒါန်းခြင်း",
        scan1 :"အလှူငွေကို QR Code ဖြင့် လွယ်ကူစွာလှူဒါန်းနိုင်ပါသည်။",
        label2 : "လှူဒါန်းပြီးနောက် ဆက်သွယ်ရန်",
        scan2 : "လှူဒါန်းပြီးပါက အလှူရှင်နာမည်နှင့် လှူဒါန်းသော အကြောင်းအရာကို Viber (ဖုန်းနံပါတ် +95 9798844234) သို့ ဆက်သွယ်ပြီး အလှူမှတ်တမ်းတောင်းခံပေးပါရန် ပန်ကြားအပ်ပါသည်။"
      }
    }
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "myan",
  fallbackLocale: "myan",
  messages,
});
