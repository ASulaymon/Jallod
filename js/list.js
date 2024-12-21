const words = [
    {
        word: "OLMA",
        hint: "Shirin, sersuv meva"
    },
    {
        word: "SHIRINLIK",
        hint: "Dessert turi"
    },
    {
        word: "KUN",
        hint: "24 soatdan iborat vaqt birligi"
    },
    {
        word: "TUN",
        hint: "Kunlik tsiklning kechki qismi"
    },
    {
        word: "YIL",
        hint: "365 kun"
    },
    {
        word: "MUZ",
        hint: "Suvning qattiq shakli"
    },
    {
        word: "KITOB",
        hint: "Ta'lim manbai"
    },
    {
        word: "QALAM",
        hint: "Yozish uchun asbob"
    },
    {
        word: "ISH",
        hint: "Mehnat natijasi"
    },
    {
        word: "UY",
        hint: "Yashash uchun joy"
    },
    {
        word: "SUV",
        hint: "Hayot manbai"
    },
    {
        word: "DAFTAR",
        hint: "Yozuv uchun o'quv quroli"
    },
    {
        word: "MASHINA",
        hint: "4ta g'ildirakdan iborat transport vositasi"
    },
    {
        word: "TARIX",
        hint: "Qadimiy zamonni qadimiy artifaktlar va yozuv manbaalari orqali o'rganuvchi fan"
    },
    {
        word: "XARITA",
        hint: "Yer yuzining qog'ozdagi tasviri"
    },
    {
        word: "QURILMA",
        hint: "Muayyan bir vazifani bajarish uchun ishlab chiqilgan buyum"
    },
    {
        word: "INSON",
        hint: "Odam so'zining sinonimi"
    },
    {
        word: "KIT",
        hint: "Dengiz hayvonlaridan biri bo'lib dunyodagi eng katta sut emizuvchi."
    },
    {
        word: "QUSH",
        hint: "Uchuvchi hayvon"
    },
    {
        word: "MAYSA",
        hint: "Yashil o'simlik"
    },
    {
        word: "TIL",
        hint: "Nutq vositasi"
    },
    {
        word: "RAQS",
        hint: "Musiqa ostida harakat"
    },
    {
        word: "SAMARQAND",
        hint: "Yurtimizda joylashgan qadimiy shahar"
    },
    {
        word: "ANDIJON",
        hint: "Yurtimizdagi viloyatlardan biri"
    },
    {
        word: "TOSHKENT",
        hint: "O'zekiston Poytaxti"
    },
    {
        word: "PARIJ",
        hint: "Fransiya poytaxti"
    },
    {
        word: "YETAKCHI",
        hint: "Lider so'zining sinonimi"
    },
    {
        word: "KUCH",
        hint: "Ta'sir qiluvchi, mehnat bajaruvchi xususiyat"
    },
    {
        word: "YURISH",
        hint: "Oyoqlar orqali sekin xarakatlanish"
    },
    {
        word: "YASMIN",
        hint: "O'simlik turi"
    },
    {
        word: "YOMON",
        hint: "Salbiy sifatlarga ega ma'nosini anglatuvchi so'z"
    },
    {
        word: "MAKTAB",
        hint: "O'rta yoshdagi bolalar uchuin ta'lim beruvchi muassasa"
    },
    {
        word: "ILM",
        hint: "Bilim so'zining sinonimi."
    },
    {
        word: "XURSAND",
        hint: "Baxtiyor so'zining sinonimi"
    },
    {
        word: "SIZ",
        hint: "Boshqa bir insonga odob bilan murojaat qilish uchun so'z."
    },
    {
        word: "BUYUK",
        hint: "Yuqori maqom, katta"
    },
    {
        word: "KICHIK",
        hint: "Past darajada"
    },
    {
        word: "MATN",
        hint: "Yozuvli axborot shakli"
    },
    {
        word: "SINF",
        hint: "Ta'lim xonasi"
    },
    {
        word: "XARAKAT",
        hint: "Faoliyat"
    },
    {
        word: "MAQSAD",
        hint: "Ehtiyojdan kelib chiquvchi, inson o'z oldiga qo'yuvchi aniq bir istak"
    },
    {
        word: "YANGI",
        hint: "Hozirgi"
    },
    {
        word: "ERTALAB",
        hint: "Tongi vaqt"
    },
    {
        word: "MANZARA",
        hint: "Tabiat tasviri"
    },
    {
        word: "RAHMAT",
        hint: "Minnatdorchilik ifodasi"
    },
    {
        word: "JUMA",
        hint: "Haftaning bir kuni"
    },
    {
        word: "XIZMAT",
        hint: "Bir inson ikkinchisi uchun bajarib berishi mumkin bo'lgan foydali ish"
    },
    {
        word: "MASHXUR",
        hint: "Taniqli so'zining sinonimi"
    },
    {
        word: "YUPITER",
        hint: "Quyosh tizimidagi sayyora"
    },
    {
        word: "MAKTUB",
        hint: "Yozuv orqali aloqa vositasi"
    },
    {
        word: "BAXT",
        hint: "Yuqori darajada xursandlik holati"
    },
    {
        word: "SHAMOL",
        hint: "Tabiat hodisalaridan biri"
    },
    {
        word: "TABIAT",
        hint: "Yer va undagi hayot"
    },
    {
        word: "SAVOL",
        hint: "Bilishni xohlaydigan talab"
    },
    {
        word: "TAVSIYA",
        hint: "Taqdim etilgan maslahat"
    },
    {
        word: "RAQAM",
        hint: "Matematik belgilar"
    },
    {
        word: "XIVA",
        hint: "Mamlakatimizdagi qadimiy shaharlardan biri"
    },
    {
        word: "MASAL",
        hint: "Saboqli hikoya"
    },
    {
        word: "DAFNA",
        hint: "O'simlik turi"
    },
    {
        word: "SADAQA",
        hint: "Xayriyaning bir turi"
    },
    {
        word: "HAMMA",
        hint: "Barcha so'zininhg sinonimi"
    },
    {
        word: "YUZ",
        hint: "Eng kichik 3 xonali son"
    },
    {
        word: "SAHNA",
        hint: "Tomosha uchun maxsus joy"
    },
    {
        word: "YUK",
        hint: "Og'ir narsa"
    },
    {
        word: "MALAKA",
        hint: "O'rganilgan mahorat"
    },
    {
        word: "MASALA",
        hint: "Ehtiyojli yechim"
    },
    {
        word: "XABAR",
        hint: "Axborot turi"
    },
    {
        word: "XIRURG",
        hint: "Amaliyot qiluvchi shifokor"
    },
    {
        word: "YASAMA",
        hint: "Yaratilgan narsa"
    },
    {
        word: "TULPOR",
        hint: "Ot so'zining sinonimii"
    },
    {
        word: "KURASH",
        hint: "Milliy sport turi"
    },
    {
        word: "UNIVERSITET",
        hint: "Katta yoshli insonlar uchun ta'lim muossasasi"
    }
];