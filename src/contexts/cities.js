const cities = [
    {
        name: "ADANA",
        lat: 37,
        lon: 35.3213333,
    },
    {
        name: "ADIYAMAN",
        lat: 37.7641667,
        lon: 38.2761667,
    },
    {
        name: "AFYONKARAHİSAR",
        lat: 38.76376,
        lon: 30.54034,
    },
    {
        name: "AĞRI",
        lat: 39.7216667,
        lon: 43.0566667,
    },
    {
        name: "AMASYA",
        lat: 40.65,
        lon: 35.8333333,
    },
    {
        name: "ANKARA",
        lat: 39.92077,
        lon: 32.85411,
    },
    {
        name: "ANTALYA",
        lat: 36.88414,
        lon: 30.70563,
    },
    {
        name: "ARTVİN",
        lat: 41.1833333,
        lon: 41.8166667,
    },
    {
        name: "AYDIN",
        lat: 37.8444,
        lon: 27.8458,
    },
    {
        name: "BALIKESİR",
        lat: 39.648369,
        lon: 27.88261,
    },
    {
        name: "BİLECİK",
        lat: 40.150131,
        lon: 29.983061,
    },
    {
        name: "BİNGÖL",
        lat: 38.885349,
        lon: 40.498291,
    },
    {
        name: "BİTLİS",
        lat: 38.4,
        lon: 42.1166667,
    },
    {
        name: "BOLU",
        lat: 40.739479,
        lon: 31.611561,
    },
    {
        name: "BURDUR",
        lat: 37.726909,
        lon: 30.288876,
    },
    {
        name: "BURSA",
        lat: 40.18257,
        lon: 29.06687,
    },
    {
        name: "ÇANAKKALE",
        lat: 40.155312,
        lon: 26.41416,
    },
    {
        name: "ÇANKIRI",
        lat: 40.6,
        lon: 33.6166667,
    },
    {
        name: "ÇORUM",
        lat: 40.5505556,
        lon: 34.9555556,
    },
    {
        name: "DENİZLİ",
        lat: 37.77652,
        lon: 29.08639,
    },
    {
        name: "DİYARBAKIR",
        lat: 37.91441,
        lon: 40.230629,
    },
    {
        name: "EDİRNE",
        lat: 41.6666667,
        lon: 26.5666667,
    },
    {
        name: "ELAZIĞ",
        lat: 38.680969,
        lon: 39.226398,
    },
    {
        name: "ERZİNCAN",
        lat: 39.75,
        lon: 39.5,
    },
    {
        name: "ERZURUM",
        lat: 39.9043189,
        lon: 41.2678853,
    },
    {
        name: "ESKİŞEHİR",
        lat: 39.784302,
        lon: 30.51922,
    },
    {
        name: "GAZİANTEP",
        lat: 37.06622,
        lon: 37.38332,
    },
    {
        name: "GİRESUN",
        lat: 40.912811,
        lon: 38.38953,
    },
    {
        name: "GÜMÜŞHANE",
        lat: 40.4602778,
        lon: 39.4813889,
    },
    {
        name: "HAKKARİ",
        lat: 37.5833333,
        lon: 43.7333333,
    },
    {
        name: "HATAY",
        lat: 36.4018488,
        lon: 36.3498097,
    },
    {
        name: "ISPARTA",
        lat: 37.7666667,
        lon: 30.55,
    },
    {
        name: "MERSİN(İÇEL)",
        lat: 36.8,
        lon: 34.6333333,
    },
    {
        name: "İSTANBUL",
        lat: 41.00527,
        lon: 28.97696,
    },
    {
        name: "İZMİR",
        lat: 38.41885,
        lon: 27.12872,
    },
    {
        name: "KARS",
        lat: 40.59267,
        lon: 43.077831,
    },
    {
        name: "KASTAMONU",
        lat: 41.38871,
        lon: 33.78273,
    },
    {
        name: "KAYSERİ",
        lat: 38.7333333,
        lon: 35.4833333,
    },
    {
        name: "KIRKLARELİ",
        lat: 41.7333333,
        lon: 27.2166667,
    },
    {
        name: "KIRŞEHİR",
        lat: 39.15,
        lon: 34.1666667,
    },
    {
        name: "KOCAELİ",
        lat: 40.8532704,
        lon: 29.8815203,
    },
    {
        name: "KONYA",
        lat: 37.8666667,
        lon: 32.4833333,
    },
    {
        name: "KÜTAHYA",
        lat: 39.4166667,
        lon: 29.9833333,
    },
    {
        name: "MALATYA",
        lat: 38.35519,
        lon: 38.30946,
    },
    {
        name: "MANİSA",
        lat: 38.619099,
        lon: 27.428921,
    },
    {
        name: "KAHRAMANMARAŞ",
        lat: 37.5833333,
        lon: 36.9333333,
    },
    {
        name: "MARDİN",
        lat: 37.3122361,
        lon: 40.735112,
    },
    {
        name: "MUĞLA",
        lat: 37.2152778,
        lon: 28.3636111,
    },
    {
        name: "MUŞ",
        lat: 38.7432926,
        lon: 41.5064823,
    },
    {
        name: "NEVŞEHİR",
        lat: 38.62442,
        lon: 34.723969,
    },
    {
        name: "NİĞDE",
        lat: 37.9666667,
        lon: 34.6833333,
    },
    {
        name: "ORDU",
        lat: 40.9833333,
        lon: 37.8833333,
    },
    {
        name: "RİZE",
        lat: 41.02005,
        lon: 40.523449,
    },
    {
        name: "SAKARYA",
        lat: 40.7568793,
        lon: 30.378138,
    },
    {
        name: "SAMSUN",
        lat: 41.292782,
        lon: 36.33128,
    },
    {
        name: "SİİRT",
        lat: 37.94429,
        lon: 41.93288,
    },
    {
        name: "SİNOP",
        lat: 42.0264222,
        lon: 35.1550745,
    },
    {
        name: "SİVAS",
        lat: 39.747662,
        lon: 37.017879,
    },
    {
        name: "TEKİRDAĞ",
        lat: 40.9833333,
        lon: 27.5166667,
    },
    {
        name: "TOKAT",
        lat: 40.3166667,
        lon: 36.55,
    },
    {
        name: "TRABZON",
        lat: 41,
        lon: 39.7333333,
    },
    {
        name: "TUNCELİ",
        lat: 39.1079868,
        lon: 39.5401672,
    },
    {
        name: "ŞANLIURFA",
        lat: 37.15,
        lon: 38.8,
    },
    {
        name: "UŞAK",
        lat: 38.682301,
        lon: 29.40819,
    },
    {
        name: "VAN",
        lat: 38.4941667,
        lon: 43.38,
    },
    {
        name: "YOZGAT",
        lat: 39.82,
        lon: 34.8044444,
    },
    {
        name: "ZONGULDAK",
        lat: 41.456409,
        lon: 31.798731,
    },
    {
        name: "AKSARAY",
        lat: 38.36869,
        lon: 34.03698,
    },
    {
        name: "BAYBURT",
        lat: 40.255169,
        lon: 40.22488,
    },
    {
        name: "KARAMAN",
        lat: 37.17593,
        lon: 33.228748,
    },
    {
        name: "KIRIKKALE",
        lat: 39.846821,
        lon: 33.515251,
    },
    {
        name: "BATMAN",
        lat: 37.881168,
        lon: 41.13509,
    },
    {
        name: "ŞIRNAK",
        lat: 37.5163889,
        lon: 42.4611111,
    },
    {
        name: "BARTIN",
        lat: 41.6344444,
        lon: 32.3375,
    },
    {
        name: "ARDAHAN",
        lat: 41.110481,
        lon: 42.702171,
    },
    {
        name: "IĞDIR",
        lat: 39.9166667,
        lon: 44.0333333,
    },
    {
        name: "YALOVA",
        lat: 40.65,
        lon: 29.2666667,
    },
    {
        name: "KARABÜK",
        lat: 41.2,
        lon: 32.6333333,
    },
    {
        name: "KİLİS",
        lat: 36.718399,
        lon: 37.12122,
    },
    {
        name: "OSMANİYE",
        lat: 37.06805,
        lon: 36.261589,
    },
    {
        name: "DÜZCE",
        lat: 40.843849,
        lon: 31.15654,
    },
];

export default cities;