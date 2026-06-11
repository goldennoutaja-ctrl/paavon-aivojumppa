const HARD_QUESTIONS = [
  {
    "question": "Kuka oli Suomen presidentti vuosina 1946–1956?",
    "answers": [
      "Urho Kekkonen",
      "Risto Ryti",
      "Kyösti Kallio",
      "J. K. Paasikivi"
    ],
    "correctIndex": 3,
    "explanation": "J. K. Paasikivi oli Suomen presidentti ennen Urho Kekkosta."
  },
  {
    "question": "Minkä valtion pääkaupunki on Ljubljana?",
    "answers": [
      "Kroatia",
      "Serbia",
      "Slovakia",
      "Slovenia"
    ],
    "correctIndex": 3,
    "explanation": "Ljubljana on Slovenian pääkaupunki."
  },
  {
    "question": "Mikä alkuaine tunnetaan kemiallisella tunnuksella W?",
    "answers": [
      "Volframi",
      "Vanadiini",
      "Wolframiitti",
      "Vismutti"
    ],
    "correctIndex": 0,
    "explanation": "W on volframin kemiallinen merkki."
  },
  {
    "question": "Mikä on ihmiskehon suurin sisäelin?",
    "answers": [
      "Aivot",
      "Maksa",
      "Keuhkot",
      "Munuaiset"
    ],
    "correctIndex": 1,
    "explanation": "Maksa on ihmiskehon suurin sisäelin."
  },
  {
    "question": "Kuka voitti Wimbledonin miesten kaksinpelin vuonna 2008?",
    "answers": [
      "Roger Federer",
      "Andy Murray",
      "Rafael Nadal",
      "Novak Djokovic"
    ],
    "correctIndex": 2,
    "explanation": "Rafael Nadal voitti vuoden 2008 Wimbledonin finaalissa Roger Federerin."
  },
  {
    "question": "Mikä maa tunnettiin aiemmin nimellä Ceylon?",
    "answers": [
      "Thaimaa",
      "Myanmar",
      "Sri Lanka",
      "Kambodža"
    ],
    "correctIndex": 2,
    "explanation": "Sri Lanka tunnettiin aiemmin nimellä Ceylon."
  },
  {
    "question": "Kuka kirjoitti romaanin Sota ja rauha?",
    "answers": [
      "Leo Tolstoi",
      "Nikolai Gogol",
      "Fjodor Dostojevski",
      "Anton Tšehov"
    ],
    "correctIndex": 0,
    "explanation": "Sota ja rauha on Leo Tolstoin tunnettu romaani."
  },
  {
    "question": "Mikä on maailman syvin tunnettu valtamerihauta?",
    "answers": [
      "Mariaanien hauta",
      "Puerto Ricon hauta",
      "Perun-Chilen hauta",
      "Jaavan hauta"
    ],
    "correctIndex": 0,
    "explanation": "Mariaanien hauta on maailman syvin tunnettu valtamerihauta."
  },
  {
    "question": "Mikä planeetta pyörii akselinsa ympäri poikkeuksellisesti kyljellään?",
    "answers": [
      "Neptunus",
      "Mars",
      "Venus",
      "Uranus"
    ],
    "correctIndex": 3,
    "explanation": "Uranuksen akselin kallistuma on poikkeuksellisen suuri."
  },
  {
    "question": "Kuka sävelsi Neljä vuodenaikaa -teoksen?",
    "answers": [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Antonio Vivaldi",
      "Johann Sebastian Bach"
    ],
    "correctIndex": 2,
    "explanation": "Neljä vuodenaikaa on Vivaldin tunnettu viulukonserttojen sarja."
  },
  {
    "question": "Mikä valtio on pinta-alaltaan maailman suurin?",
    "answers": [
      "Yhdysvallat",
      "Kanada",
      "Kiina",
      "Venäjä"
    ],
    "correctIndex": 3,
    "explanation": "Venäjä on pinta-alaltaan maailman suurin valtio."
  },
  {
    "question": "Mikä on Ranskan kansallispäivän päivämäärä?",
    "answers": [
      "14. heinäkuuta",
      "6. joulukuuta",
      "1. toukokuuta",
      "11. marraskuuta"
    ],
    "correctIndex": 0,
    "explanation": "Ranskan kansallispäivää vietetään 14. heinäkuuta."
  },
  {
    "question": "Kuka oli antiikin Kreikan filosofi ja Platonin opettaja?",
    "answers": [
      "Aristoteles",
      "Pythagoras",
      "Epikuros",
      "Sokrates"
    ],
    "correctIndex": 3,
    "explanation": "Sokrates oli Platonin opettaja."
  },
  {
    "question": "Mikä on Suomen vanhin kaupunki?",
    "answers": [
      "Turku",
      "Porvoo",
      "Rauma",
      "Helsinki"
    ],
    "correctIndex": 0,
    "explanation": "Turkua pidetään Suomen vanhimpana kaupunkina."
  },
  {
    "question": "Kuka kirjoitti romaanin Täällä Pohjantähden alla?",
    "answers": [
      "Ilmari Kianto",
      "Mika Waltari",
      "Väinö Linna",
      "Aleksis Kivi"
    ],
    "correctIndex": 2,
    "explanation": "Täällä Pohjantähden alla on Väinö Linnan romaanitrilogia."
  },
  {
    "question": "Mikä on Ruotsin pisin joki?",
    "answers": [
      "Umeälven",
      "Torne älv",
      "Klarälven–Göta älv",
      "Dalälven"
    ],
    "correctIndex": 2,
    "explanation": "Klarälven–Göta älv -vesistöä pidetään Ruotsin pisimpänä jokijärjestelmänä."
  },
  {
    "question": "Mikä maa voitti jalkapallon miesten maailmanmestaruuden vuonna 1998?",
    "answers": [
      "Ranska",
      "Italia",
      "Saksa",
      "Brasilia"
    ],
    "correctIndex": 0,
    "explanation": "Ranska voitti vuoden 1998 MM-kisat kotikisoissaan."
  },
  {
    "question": "Kuka suomalainen sai Nobelin kirjallisuuspalkinnon vuonna 1939?",
    "answers": [
      "Eino Leino",
      "Mika Waltari",
      "F. E. Sillanpää",
      "Väinö Linna"
    ],
    "correctIndex": 2,
    "explanation": "F. E. Sillanpää on toistaiseksi ainoa suomalainen kirjallisuuden Nobel-voittaja."
  },
  {
    "question": "Mikä on fotosynteesin päätarkoitus kasville?",
    "answers": [
      "Tuottaa sokeria valon avulla",
      "Tuottaa hiekkaa",
      "Jäähdyttää lehtiä",
      "Hajottaa kiveä"
    ],
    "correctIndex": 0,
    "explanation": "Fotosynteesissä kasvi tuottaa energiaa sisältäviä yhdisteitä valon avulla."
  },
  {
    "question": "Mikä on Japanin korkein vuori?",
    "answers": [
      "Fuji",
      "Kilimanjaro",
      "Haku",
      "Aso"
    ],
    "correctIndex": 0,
    "explanation": "Fuji on Japanin korkein vuori."
  },
  {
    "question": "Kuka oli Yhdysvaltain presidentti Kuuhun laskeutumisen aikaan vuonna 1969?",
    "answers": [
      "Gerald Ford",
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Richard Nixon"
    ],
    "correctIndex": 3,
    "explanation": "Apollo 11:n laskeutumisen aikaan presidenttinä oli Richard Nixon."
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "answers": [
      "Volga",
      "Seine",
      "Rein",
      "Tonava"
    ],
    "correctIndex": 0,
    "explanation": "Volga on Euroopan pisin joki."
  },
  {
    "question": "Mikä kaupunki tunnetaan Vatikaanivaltion ympäröivänä kaupunkina?",
    "answers": [
      "Napoli",
      "Firenze",
      "Milano",
      "Rooma"
    ],
    "correctIndex": 3,
    "explanation": "Vatikaanivaltio sijaitsee Rooman kaupungin sisällä."
  },
  {
    "question": "Mikä on suurin pohjoismainen maa pinta-alaltaan?",
    "answers": [
      "Suomi",
      "Norja",
      "Ruotsi",
      "Tanska"
    ],
    "correctIndex": 2,
    "explanation": "Ruotsi on Pohjoismaista pinta-alaltaan suurin, jos Grönlantia ei lasketa Tanskan osaksi tässä vertailussa."
  },
  {
    "question": "Kuka sävelsi oopperan Carmen?",
    "answers": [
      "Richard Wagner",
      "Giuseppe Verdi",
      "Georges Bizet",
      "Giacomo Puccini"
    ],
    "correctIndex": 2,
    "explanation": "Carmen on Georges Bizet'n ooppera."
  },
  {
    "question": "Mikä maa on tunnettu historiallisesta Angkor Wat -temppelialueesta?",
    "answers": [
      "Vietnam",
      "Kambodža",
      "Laos",
      "Thaimaa"
    ],
    "correctIndex": 1,
    "explanation": "Angkor Wat sijaitsee Kambodžassa."
  },
  {
    "question": "Mikä on ihmisen normaalissa solussa kromosomien määrä?",
    "answers": [
      "48",
      "44",
      "23",
      "46"
    ],
    "correctIndex": 3,
    "explanation": "Ihmisen somaattisissa soluissa on normaalisti 46 kromosomia."
  },
  {
    "question": "Kuka maalasi Guernican?",
    "answers": [
      "Henri Matisse",
      "Pablo Picasso",
      "Salvador Dalí",
      "Joan Miró"
    ],
    "correctIndex": 1,
    "explanation": "Guernica on Pablo Picasson kuuluisa maalaus."
  },
  {
    "question": "Mikä valtio tunnetaan myös nimellä Suomi ruotsiksi?",
    "answers": [
      "Sverige",
      "Finland",
      "Norge",
      "Estland"
    ],
    "correctIndex": 1,
    "explanation": "Suomi on ruotsiksi Finland."
  },
  {
    "question": "Mikä on termi, joka tarkoittaa maapallon kuoren suuria liikkuvia laattoja?",
    "answers": [
      "Merivirrat",
      "Säteilyvyöhykkeet",
      "Litosfäärilaatat",
      "Pilvikerrokset"
    ],
    "correctIndex": 2,
    "explanation": "Mannerlaatat eli litosfäärilaatat liikkuvat maapallon pinnalla."
  },
  {
    "question": "Kuka oli Suomen presidentti ennen Mauno Koivistoa?",
    "answers": [
      "J. K. Paasikivi",
      "Martti Ahtisaari",
      "Risto Ryti",
      "Urho Kekkonen"
    ],
    "correctIndex": 3,
    "explanation": "Urho Kekkonen oli presidentti ennen Mauno Koivistoa."
  },
  {
    "question": "Mikä maa voitti jääkiekon miesten olympiakultaa vuonna 2022?",
    "answers": [
      "Ruotsi",
      "Kanada",
      "Venäjän olympiakomitea",
      "Suomi"
    ],
    "correctIndex": 3,
    "explanation": "Suomi voitti jääkiekon miesten olympiakultaa Pekingissä 2022."
  },
  {
    "question": "Mikä on klassisen musiikin termi hitaalle osalle tai hitaalle tempolle?",
    "answers": [
      "Presto",
      "Allegro",
      "Adagio",
      "Vivace"
    ],
    "correctIndex": 2,
    "explanation": "Adagio tarkoittaa hitaasti soitettavaa tempoa."
  },
  {
    "question": "Mikä näistä on alkuluku?",
    "answers": [
      "27",
      "17",
      "33",
      "21"
    ],
    "correctIndex": 1,
    "explanation": "17 on jaollinen vain yhdellä ja itsellään."
  },
  {
    "question": "Mikä on maailman väkirikkain maa nykyisin?",
    "answers": [
      "Kiina",
      "Yhdysvallat",
      "Intia",
      "Indonesia"
    ],
    "correctIndex": 2,
    "explanation": "Intia ohitti Kiinan maailman väkirikkaimpana maana 2020-luvulla."
  },
  {
    "question": "Kuka kirjoitti romaanin Rikos ja rangaistus?",
    "answers": [
      "Ivan Turgenev",
      "Fjodor Dostojevski",
      "Leo Tolstoi",
      "Anton Tšehov"
    ],
    "correctIndex": 1,
    "explanation": "Rikos ja rangaistus on Dostojevskin romaani."
  },
  {
    "question": "Mikä on Australian pääkaupunki?",
    "answers": [
      "Canberra",
      "Sydney",
      "Perth",
      "Melbourne"
    ],
    "correctIndex": 0,
    "explanation": "Australian pääkaupunki on Canberra."
  },
  {
    "question": "Mikä antiikin maailman seitsemästä ihmeestä on yhä olemassa?",
    "answers": [
      "Babylonin riippuvat puutarhat",
      "Gizan suuri pyramidi",
      "Artemiin temppeli",
      "Rodoksen kolossi"
    ],
    "correctIndex": 1,
    "explanation": "Gizan suuri pyramidi on ainoa yhä olemassa oleva antiikin seitsemästä ihmeestä."
  },
  {
    "question": "Mikä maa tunnetaan tulppaanien ja tuulimyllyjen maana?",
    "answers": [
      "Alankomaat",
      "Itävalta",
      "Tanska",
      "Belgia"
    ],
    "correctIndex": 0,
    "explanation": "Alankomaat tunnetaan tulppaaneista ja tuulimyllyistä."
  },
  {
    "question": "Mikä on lääketieteen termi korkealle verenpaineelle?",
    "answers": [
      "Hyperglykemia",
      "Anemia",
      "Hypotermia",
      "Hypertensio"
    ],
    "correctIndex": 3,
    "explanation": "Hypertensio tarkoittaa kohonnutta verenpainetta."
  },
  {
    "question": "Mikä on Suomen itäisin kunta?",
    "answers": [
      "Ilomantsi",
      "Inari",
      "Joensuu",
      "Kuusamo"
    ],
    "correctIndex": 0,
    "explanation": "Ilomantsi on Suomen itäisin kunta."
  },
  {
    "question": "Kuka oli ensimmäinen nainen Suomen presidenttinä?",
    "answers": [
      "Elisabeth Rehn",
      "Sanna Marin",
      "Anneli Jäätteenmäki",
      "Tarja Halonen"
    ],
    "correctIndex": 3,
    "explanation": "Tarja Halonen oli Suomen ensimmäinen naispuolinen presidentti."
  },
  {
    "question": "Mikä on Italian pisin joki?",
    "answers": [
      "Arno",
      "Tiber",
      "Adige",
      "Po"
    ],
    "correctIndex": 3,
    "explanation": "Po on Italian pisin joki."
  },
  {
    "question": "Mikä on termi aineelle, joka nopeuttaa kemiallista reaktiota kulumatta itse reaktiossa?",
    "answers": [
      "Isotooppi",
      "Elektrolyytti",
      "Liuotin",
      "Katalyytti"
    ],
    "correctIndex": 3,
    "explanation": "Katalyytti nopeuttaa reaktiota kulumatta itse pysyvästi."
  },
  {
    "question": "Kuka on kirjoittanut näytelmän Hamlet?",
    "answers": [
      "George Bernard Shaw",
      "Oscar Wilde",
      "Charles Dickens",
      "William Shakespeare"
    ],
    "correctIndex": 3,
    "explanation": "Hamlet on Shakespearen näytelmä."
  },
  {
    "question": "Mikä valtio on pinta-alaltaan Afrikan suurin?",
    "answers": [
      "Libya",
      "Sudan",
      "Kongon demokraattinen tasavalta",
      "Algeria"
    ],
    "correctIndex": 3,
    "explanation": "Algeria on Afrikan suurin valtio pinta-alaltaan."
  },
  {
    "question": "Mikä kaupunki oli Itä-Rooman eli Bysantin valtakunnan pääkaupunki?",
    "answers": [
      "Rooma",
      "Konstantinopoli",
      "Ateena",
      "Aleksandria"
    ],
    "correctIndex": 1,
    "explanation": "Konstantinopoli oli Bysantin valtakunnan pääkaupunki."
  },
  {
    "question": "Mikä on Suomen eduskunnan kansanedustajien määrä?",
    "answers": [
      "250",
      "150",
      "200",
      "180"
    ],
    "correctIndex": 2,
    "explanation": "Suomen eduskunnassa on 200 kansanedustajaa."
  },
  {
    "question": "Mikä seuraavista on jalokaasu?",
    "answers": [
      "Happi",
      "Neon",
      "Vety",
      "Typpi"
    ],
    "correctIndex": 1,
    "explanation": "Neon kuuluu jalokaasuihin."
  },
  {
    "question": "Mikä on termi, jolla tarkoitetaan eliölajien kirjoa luonnossa?",
    "answers": [
      "Inflaatio",
      "Biodiversiteetti",
      "Fotosfääri",
      "Magnetismi"
    ],
    "correctIndex": 1,
    "explanation": "Biodiversiteetti tarkoittaa luonnon monimuotoisuutta."
  }
];
