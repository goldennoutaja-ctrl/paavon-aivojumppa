const QUESTIONS = [
  {
    "category": "ajankohtaiset",
    "question": "Mikä suomalainen kaupunki on Euroopan kulttuuripääkaupunki vuonna 2026?",
    "answers": [
      "Lahti",
      "Turku",
      "Tampere",
      "Oulu"
    ],
    "correctIndex": 3,
    "explanation": "Oulu on Euroopan kulttuuripääkaupunki vuonna 2026."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä toinen kaupunki on Oulun lisäksi Euroopan kulttuuripääkaupunki vuonna 2026?",
    "answers": [
      "Tallinna",
      "Trenčín",
      "Bergen",
      "Lyon"
    ],
    "correctIndex": 1,
    "explanation": "Oulu jakaa kulttuuripääkaupunkivuoden Slovakian Trenčínin kanssa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on Oulu2026-hankkeen tunnettu englanninkielinen teema?",
    "answers": [
      "Cultural Climate Change",
      "Digital Europe",
      "Green Cities",
      "Northern Lights Forever"
    ],
    "correctIndex": 0,
    "explanation": "Oulu2026:n teema on Cultural Climate Change."
  },
  {
    "category": "ajankohtaiset",
    "question": "Missä maissa pelataan jalkapallon miesten MM-kisat vuonna 2026?",
    "answers": [
      "USA, Kanada ja Meksiko",
      "Brasilia, Argentiina ja Uruguay",
      "Saksa, Ranska ja Italia",
      "Espanja ja Portugali"
    ],
    "correctIndex": 0,
    "explanation": "Vuoden 2026 MM-kisat pelataan Yhdysvalloissa, Kanadassa ja Meksikossa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Kuinka monta joukkuetta osallistuu jalkapallon miesten MM-kisoihin vuonna 2026?",
    "answers": [
      "64",
      "48",
      "32",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "Vuoden 2026 MM-kisoissa on ensimmäistä kertaa 48 joukkuetta."
  },
  {
    "category": "ajankohtaiset",
    "question": "Milloin jalkapallon miesten MM-kisat 2026 alkavat?",
    "answers": [
      "1. tammikuuta 2026",
      "6. helmikuuta 2026",
      "15. elokuuta 2026",
      "11. kesäkuuta 2026"
    ],
    "correctIndex": 3,
    "explanation": "Vuoden 2026 jalkapallon MM-kisat alkavat 11. kesäkuuta."
  },
  {
    "category": "ajankohtaiset",
    "question": "Missä järjestettiin vuoden 2026 talviolympialaiset?",
    "answers": [
      "Calgary",
      "Milano-Cortina",
      "Sapporo",
      "Oslo"
    ],
    "correctIndex": 1,
    "explanation": "Vuoden 2026 talviolympialaiset järjestettiin Italiassa Milano-Cortinassa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä maa isännöi vuoden 2026 talviolympialaisia?",
    "answers": [
      "Italia",
      "Japani",
      "Norja",
      "Kanada"
    ],
    "correctIndex": 0,
    "explanation": "Milano-Cortina 2026 järjestettiin Italiassa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Milloin Milano-Cortina 2026 -talviolympialaisten avajaiset olivat?",
    "answers": [
      "1. toukokuuta 2026",
      "6. helmikuuta 2026",
      "11. kesäkuuta 2026",
      "24. joulukuuta 2026"
    ],
    "correctIndex": 1,
    "explanation": "Talviolympialaisten avajaiset olivat 6. helmikuuta 2026."
  },
  {
    "category": "ajankohtaiset",
    "question": "Milloin Milano-Cortina 2026 -talviolympialaiset päättyivät?",
    "answers": [
      "31. joulukuuta 2026",
      "11. kesäkuuta 2026",
      "22. helmikuuta 2026",
      "15. maaliskuuta 2026"
    ],
    "correctIndex": 2,
    "explanation": "Talviolympialaiset päättyivät 22. helmikuuta 2026."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä teknologia-aihe on ollut erityisen paljon esillä 2020-luvulla?",
    "answers": [
      "Faksit",
      "Lankapuhelimet",
      "VHS-nauhat",
      "Tekoäly"
    ],
    "correctIndex": 3,
    "explanation": "Tekoäly on ollut yksi 2020-luvun näkyvimmistä teknologia-aiheista."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mitä tarkoitetaan generatiivisella tekoälyllä?",
    "answers": [
      "Sähköpostin roskapostikansiota",
      "Näytön kirkkauden säätöä",
      "Tekoälyä, joka tuottaa uutta sisältöä",
      "Vanhaa puhelinverkkoa"
    ],
    "correctIndex": 2,
    "explanation": "Generatiivinen tekoäly voi tuottaa esimerkiksi tekstiä, kuvia tai ääntä."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on hyvä tapa suojautua verkkohuijauksilta?",
    "answers": [
      "Käyttää samaa salasanaa kaikkialla",
      "Tarkistaa linkit ja olla luovuttamatta tunnuksia",
      "Klikata kaikki linkit nopeasti",
      "Kertoa pankkitunnukset puhelimessa"
    ],
    "correctIndex": 1,
    "explanation": "Tunnuksia ei pidä antaa muille, ja epäilyttävät linkit kannattaa tarkistaa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mitä kaksivaiheinen tunnistautuminen tarkoittaa?",
    "answers": [
      "Kahden sähköpostin lukemista",
      "Kahden selaimen käyttöä",
      "Kahden näytön yhdistämistä",
      "Kirjautumisen lisävarmistusta"
    ],
    "correctIndex": 3,
    "explanation": "Kaksivaiheinen tunnistautuminen lisää kirjautumiseen toisen varmistuksen."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä liittyy nykypäivän maksamiseen kaupassa?",
    "answers": [
      "Lähimaksu",
      "Kirjekyyhky",
      "Oravannahat",
      "Telegrammi"
    ],
    "correctIndex": 0,
    "explanation": "Lähimaksu on nykyään yleinen maksutapa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on Suomessa julkisen palvelun mediayhtiö?",
    "answers": [
      "Yle",
      "BBC",
      "SVT",
      "CNN"
    ],
    "correctIndex": 0,
    "explanation": "Yle eli Yleisradio on Suomen julkisen palvelun mediayhtiö."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä liittyy sähköautojen yleistymiseen?",
    "answers": [
      "Latausverkosto",
      "Hevosasema",
      "Hiilikellari",
      "Höyrykattila"
    ],
    "correctIndex": 0,
    "explanation": "Sähköautot tarvitsevat latauspisteitä ja latausverkostoa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä Suomen naapurimaa liittyi Natoon vuonna 2024?",
    "answers": [
      "Norja",
      "Viro",
      "Tanska",
      "Ruotsi"
    ],
    "correctIndex": 3,
    "explanation": "Ruotsi liittyi Naton jäseneksi vuonna 2024."
  },
  {
    "category": "ajankohtaiset",
    "question": "Minä vuonna Suomi liittyi Natoon?",
    "answers": [
      "2023",
      "2014",
      "1995",
      "2002"
    ],
    "correctIndex": 0,
    "explanation": "Suomi liittyi Naton jäseneksi vuonna 2023."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on tärkeä digitaito?",
    "answers": [
      "Epäilyttävien linkkien varominen",
      "Kaikkien viestien uskominen",
      "Tunnusten lähettäminen sähköpostilla",
      "Salasanojen jakaminen"
    ],
    "correctIndex": 0,
    "explanation": "Hyviin digitaitoihin kuuluu varovaisuus epäilyttävien linkkien ja viestien kanssa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on yleinen tapa seurata uutisia puhelimella?",
    "answers": [
      "Uutissovellus",
      "Telegrammi",
      "C-kasetti",
      "Kaitafilmi"
    ],
    "correctIndex": 0,
    "explanation": "Monet seuraavat uutisia puhelimen uutissovelluksilla."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä liittyy ilmasto- ja energiakeskusteluun?",
    "answers": [
      "Käsikäyttöinen laskin",
      "Vinyylilevyt",
      "Uusiutuva energia",
      "Postimerkit"
    ],
    "correctIndex": 2,
    "explanation": "Uusiutuva energia on tärkeä osa ilmasto- ja energiakeskustelua."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on hyvä tapa suhtautua epäilyttävään uutiseen somessa?",
    "answers": [
      "Tarkistaa asia luotettavasta lähteestä",
      "Uskoa otsikko sellaisenaan",
      "Klikata kaikki mainokset",
      "Jakaa se heti"
    ],
    "correctIndex": 0,
    "explanation": "Epäilyttävät väitteet kannattaa tarkistaa luotettavista lähteistä."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on ollut paljon esillä terveydenhuollossa Suomessa?",
    "answers": [
      "Kauppakomppaniat",
      "Lääninhallitukset",
      "Kuningaskunnat",
      "Hyvinvointialueet"
    ],
    "correctIndex": 3,
    "explanation": "Hyvinvointialueet vastaavat sosiaali- ja terveyspalveluiden järjestämisestä."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä seuraavista on Euroopan unionin yhteinen valuutta monessa jäsenmaassa?",
    "answers": [
      "Punta",
      "Dollari",
      "Kruunu",
      "Euro"
    ],
    "correctIndex": 3,
    "explanation": "Euro on käytössä monissa EU-maissa, myös Suomessa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on verkkopankin turvallinen käyttöohje?",
    "answers": [
      "Älä kerro tunnuksia kenellekään",
      "Kirjoita tunnukset someen",
      "Anna tunnukset soittajalle",
      "Lähetä tunnukset sähköpostilla"
    ],
    "correctIndex": 0,
    "explanation": "Verkkopankkitunnuksia ei pidä koskaan luovuttaa muille."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on yksi huijausviestin tunnusmerkki?",
    "answers": [
      "Se painostaa kiireeseen ja pyytää tietoja",
      "Se tulee vain postitse",
      "Se on aina pitkä",
      "Se ei koskaan sisällä linkkejä"
    ],
    "correctIndex": 0,
    "explanation": "Huijausviestit yrittävät usein saada toimimaan nopeasti."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on 2020-luvun kulttuuri-ilmiö?",
    "answers": [
      "Telegrammit",
      "Mykkäelokuvat uutuutena",
      "Suoratoistopalvelut",
      "Kasettinauhurit uutuutena"
    ],
    "correctIndex": 2,
    "explanation": "Suoratoistopalvelut ovat muuttaneet television ja elokuvien katselua."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on yksi tapa vähentää liikenteen päästöjä?",
    "answers": [
      "Lisätä vähäpäästöistä liikennettä",
      "Vähentää pyöräteitä",
      "Lisätä hiilikellareita",
      "Kieltää kaikki kävely"
    ],
    "correctIndex": 0,
    "explanation": "Liikenteen päästöjä voidaan vähentää monilla teknisillä ja käytännön ratkaisuilla."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on tekoälyn käytössä tärkeää?",
    "answers": [
      "Jakaa kaikki henkilötiedot",
      "Poistaa kaikki lähteet",
      "Tarkistaa tärkeät tiedot",
      "Uskoa kaikki vastaukset suoraan"
    ],
    "correctIndex": 2,
    "explanation": "Tekoäly voi auttaa, mutta tärkeät tiedot kannattaa tarkistaa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on yleinen nykypäivän yhteydenpitoväline?",
    "answers": [
      "Postivaunu",
      "Videopuhelu",
      "Savumerkki",
      "Kaitafilmi"
    ],
    "correctIndex": 1,
    "explanation": "Videopuhelut ovat yleistyneet puhelimissa ja tietokoneissa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä seuraavista on tavallinen verkkokokoustyökalu?",
    "answers": [
      "Teleksi",
      "Teams",
      "VHS",
      "C-kasetti"
    ],
    "correctIndex": 1,
    "explanation": "Teams on yleinen verkkokokous- ja yhteistyötyökalu."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä on pilvipalvelu?",
    "answers": [
      "Sääennusteen ukkospilvi",
      "Paperikansio",
      "Vanhanaikainen radio",
      "Verkossa toimiva tallennus- tai ohjelmistopalvelu"
    ],
    "correctIndex": 3,
    "explanation": "Pilvipalvelu toimii internetin kautta."
  },
  {
    "category": "ajankohtaiset",
    "question": "Miksi varmuuskopiointi on tärkeää?",
    "answers": [
      "Se nopeuttaa sateen tuloa",
      "Se poistaa kaikki salasanat",
      "Tietoja ei menetetä yhtä helposti",
      "Se vaihtaa television kanavat"
    ],
    "correctIndex": 2,
    "explanation": "Varmuuskopio auttaa, jos laite rikkoutuu tai tiedosto katoaa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on turvallinen salasana?",
    "answers": [
      "salasana",
      "Pitkä ja vaikeasti arvattava",
      "oma nimi",
      "123456"
    ],
    "correctIndex": 1,
    "explanation": "Hyvä salasana on pitkä eikä helposti arvattava."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on ajankohtainen keskusteluaihe mediassa?",
    "answers": [
      "Höyryjunat kaikille kaduille",
      "Disinformaatio",
      "Mustavalkotelevision paluu pakolliseksi",
      "Kirjekyyhkyt uutisjakelussa"
    ],
    "correctIndex": 1,
    "explanation": "Disinformaatio tarkoittaa harhaanjohtavaa tai väärää tietoa."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä auttaa arvioimaan uutisen luotettavuutta?",
    "answers": [
      "Lähteen tarkistaminen",
      "Otsikon huutomerkkien määrä",
      "Kuvan värit",
      "Kommenttien pituus"
    ],
    "correctIndex": 0,
    "explanation": "Luotettava lähde on tärkeä osa uutisen arviointia."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä suomalainen kaupunki on erityisen esillä kulttuurissa vuonna 2026?",
    "answers": [
      "Rauma",
      "Salo",
      "Hanko",
      "Oulu"
    ],
    "correctIndex": 3,
    "explanation": "Oulu on Euroopan kulttuuripääkaupunki vuonna 2026."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä näistä on vuoden 2026 iso kansainvälinen urheilutapahtuma?",
    "answers": [
      "Jalkapallon EM-kisat 2024",
      "Helsingin olympialaiset",
      "Lontoon olympialaiset",
      "Jalkapallon MM-kisat"
    ],
    "correctIndex": 3,
    "explanation": "Vuonna 2026 pelataan jalkapallon miesten MM-kisat."
  },
  {
    "category": "ajankohtaiset",
    "question": "Mikä maa on yksi jalkapallon MM-kisojen 2026 isännistä?",
    "answers": [
      "Japani",
      "Etelä-Afrikka",
      "Kanada",
      "Qatar"
    ],
    "correctIndex": 2,
    "explanation": "Kanada isännöi MM-kisoja yhdessä Meksikon ja Yhdysvaltojen kanssa."
  },
  {
    "category": "urheilu",
    "question": "Mitä lajia Kalle Rovanperä edustaa?",
    "answers": [
      "Jääkiekko",
      "Tennis",
      "Mäkihyppy",
      "Ralli"
    ],
    "correctIndex": 3,
    "explanation": "Kalle Rovanperä tunnetaan rallin maailmanmestarina."
  },
  {
    "category": "urheilu",
    "question": "Mitä lajia Teemu Selänne pelasi?",
    "answers": [
      "Koripallo",
      "Tennis",
      "Pesäpallo",
      "Jääkiekko"
    ],
    "correctIndex": 3,
    "explanation": "Teemu Selänne on yksi Suomen tunnetuimmista jääkiekkoilijoista."
  },
  {
    "category": "urheilu",
    "question": "Kuka tunnetaan suomalaisessa jalkapallossa lempinimellä Kuningas?",
    "answers": [
      "Sami Hyypiä",
      "Jari Litmanen",
      "Teemu Pukki",
      "Mikael Forssell"
    ],
    "correctIndex": 1,
    "explanation": "Jari Litmasta kutsutaan usein Kuninkaaksi."
  },
  {
    "category": "urheilu",
    "question": "Mikä on Suomen miesten jääkiekkomaajoukkueen lempinimi?",
    "answers": [
      "Sudet",
      "Karhut",
      "Kotkat",
      "Leijonat"
    ],
    "correctIndex": 3,
    "explanation": "Leijonat on Suomen miesten jääkiekkomaajoukkue."
  },
  {
    "category": "urheilu",
    "question": "Mikä on Suomen miesten jalkapallomaajoukkueen lempinimi?",
    "answers": [
      "Karhut",
      "Huhkajat",
      "Kotkat",
      "Ilvekset"
    ],
    "correctIndex": 1,
    "explanation": "Huhkajat on Suomen miesten jalkapallomaajoukkue."
  },
  {
    "category": "urheilu",
    "question": "Mikä on Suomen miesten koripallomaajoukkueen lempinimi?",
    "answers": [
      "Susijengi",
      "Kotkat",
      "Pöllöt",
      "Leijonat"
    ],
    "correctIndex": 0,
    "explanation": "Susijengi on Suomen koripallomaajoukkue."
  },
  {
    "category": "urheilu",
    "question": "Montako pelaajaa jääkiekkojoukkueella on normaalisti jäällä maalivahti mukaan lukien?",
    "answers": [
      "7",
      "5",
      "8",
      "6"
    ],
    "correctIndex": 3,
    "explanation": "Jäällä on tavallisesti viisi kenttäpelaajaa ja maalivahti."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji liittyy Jukolan viestiin?",
    "answers": [
      "Suunnistus",
      "Hiihto",
      "Jalkapallo",
      "Pyöräily"
    ],
    "correctIndex": 0,
    "explanation": "Jukolan viesti on suuri suunnistustapahtuma."
  },
  {
    "category": "urheilu",
    "question": "Mikä suomalainen urheilija voitti Formula 1 -maailmanmestaruuden vuonna 2007?",
    "answers": [
      "Valtteri Bottas",
      "Kimi Räikkönen",
      "Mika Salo",
      "Heikki Kovalainen"
    ],
    "correctIndex": 1,
    "explanation": "Kimi Räikkönen voitti Formula 1 -mestaruuden vuonna 2007."
  },
  {
    "category": "urheilu",
    "question": "Kuka voitti Formula 1 -mestaruudet vuosina 1998 ja 1999?",
    "answers": [
      "Mika Häkkinen",
      "Keke Rosberg",
      "Kimi Räikkönen",
      "Valtteri Bottas"
    ],
    "correctIndex": 0,
    "explanation": "Mika Häkkinen voitti kaksi peräkkäistä maailmanmestaruutta."
  },
  {
    "category": "urheilu",
    "question": "Kuka suomalainen voitti Formula 1 -mestaruuden vuonna 1982?",
    "answers": [
      "Keke Rosberg",
      "Kimi Räikkönen",
      "Mika Häkkinen",
      "Leo Kinnunen"
    ],
    "correctIndex": 0,
    "explanation": "Keke Rosberg voitti maailmanmestaruuden vuonna 1982."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji teki Matti Nykäsestä kuuluisan?",
    "answers": [
      "Mäkihyppy",
      "Jääkiekko",
      "Ralli",
      "Yleisurheilu"
    ],
    "correctIndex": 0,
    "explanation": "Matti Nykänen oli yksi kaikkien aikojen menestyneimmistä mäkihyppääjistä."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji teki Lasse Virénistä olympiasankarin?",
    "answers": [
      "Jääkiekko",
      "Kestävyysjuoksu",
      "Keihäänheitto",
      "Mäkihyppy"
    ],
    "correctIndex": 1,
    "explanation": "Lasse Virén voitti useita olympiakultia juoksussa."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji on Suomen kansallispeli?",
    "answers": [
      "Pesäpallo",
      "Jalkapallo",
      "Jääkiekko",
      "Koripallo"
    ],
    "correctIndex": 0,
    "explanation": "Pesäpalloa pidetään Suomen kansallispelinä."
  },
  {
    "category": "urheilu",
    "question": "Missä lajissa käytetään termiä birdie?",
    "answers": [
      "Keilaus",
      "Golf",
      "Jääkiekko",
      "Tennis"
    ],
    "correctIndex": 1,
    "explanation": "Birdie tarkoittaa golfissa yhtä lyöntiä alle ihannetuloksen."
  },
  {
    "category": "urheilu",
    "question": "Mikä Grand Slam -turnaus pelataan Wimbledonissa?",
    "answers": [
      "Tennis",
      "Koripallo",
      "Jääkiekko",
      "Golf"
    ],
    "correctIndex": 0,
    "explanation": "Wimbledon on maailman tunnetuimpia tennisturnauksia."
  },
  {
    "category": "urheilu",
    "question": "Mikä pyöräilyn suurkilpailu ajetaan Ranskassa?",
    "answers": [
      "Tour de France",
      "Giro d'Italia",
      "Paris-Dakar",
      "Vuelta a España"
    ],
    "correctIndex": 0,
    "explanation": "Tour de France on maailman tunnetuin pyöräilykilpailu."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji liittyy NHL-liigaan?",
    "answers": [
      "Baseball",
      "Koripallo",
      "Jääkiekko",
      "Amerikkalainen jalkapallo"
    ],
    "correctIndex": 2,
    "explanation": "NHL on Pohjois-Amerikan jääkiekkoliiga."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji liittyy NBA-liigaan?",
    "answers": [
      "Golf",
      "Koripallo",
      "Jääkiekko",
      "Jalkapallo"
    ],
    "correctIndex": 1,
    "explanation": "NBA on maailman tunnetuin koripalloliiga."
  },
  {
    "category": "urheilu",
    "question": "Mikä on olympialaisten tunnus?",
    "answers": [
      "Kolme tähteä",
      "Sininen leijona",
      "Kultainen pallo",
      "Viisi rengasta"
    ],
    "correctIndex": 3,
    "explanation": "Olympialaisten symboli on viisi rengasta."
  },
  {
    "category": "urheilu",
    "question": "Mikä urheilulaji pelataan jäällä kivillä ja harjoilla?",
    "answers": [
      "Pikaluistelu",
      "Curling",
      "Ringette",
      "Jääkiekko"
    ],
    "correctIndex": 1,
    "explanation": "Curlingissa liu'utetaan kiviä jäällä ja harjataan jäätä."
  },
  {
    "category": "urheilu",
    "question": "Mikä urheilulaji yhdistää hiihdon ja ammunnan?",
    "answers": [
      "Ampumahiihto",
      "Freestyle",
      "Curling",
      "Yhdistetty"
    ],
    "correctIndex": 0,
    "explanation": "Ampumahiihdossa hiihdetään ja ammutaan."
  },
  {
    "category": "urheilu",
    "question": "Mikä maa on perinteisesti vahva maastohiihdossa Suomen lisäksi?",
    "answers": [
      "Kreikka",
      "Irlanti",
      "Norja",
      "Portugali"
    ],
    "correctIndex": 2,
    "explanation": "Norja on erittäin vahva maastohiihdossa."
  },
  {
    "category": "urheilu",
    "question": "Mikä kaupunki tunnetaan Tapparan ja Ilveksen kotikaupunkina?",
    "answers": [
      "Tampere",
      "Turku",
      "Kuopio",
      "Oulu"
    ],
    "correctIndex": 0,
    "explanation": "Tappara ja Ilves ovat tamperelaisia jääkiekkoseuroja."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji liittyy Salpausselän kisoihin?",
    "answers": [
      "Hiihto ja mäkihyppy",
      "Tennis",
      "Jalkapallo",
      "Golf"
    ],
    "correctIndex": 0,
    "explanation": "Salpausselän kisat tunnetaan talviurheilusta."
  },
  {
    "category": "urheilu",
    "question": "Mikä kaupunki yhdistetään Salpausselän kisoihin?",
    "answers": [
      "Rauma",
      "Kokkola",
      "Hämeenlinna",
      "Lahti"
    ],
    "correctIndex": 3,
    "explanation": "Salpausselän kisat järjestetään Lahdessa."
  },
  {
    "category": "urheilu",
    "question": "Mikä on jalkapallossa paitsio?",
    "answers": [
      "Sääntörikkomus hyökkäystilanteessa",
      "Maalivahdin hanska",
      "Kentän keskiviiva",
      "Ottelun päättymismerkki"
    ],
    "correctIndex": 0,
    "explanation": "Paitsio on jalkapallon sääntö hyökkäystilanteissa."
  },
  {
    "category": "urheilu",
    "question": "Mikä suomalainen jääkiekkoilija tunnetaan lempinimellä Finnish Flash?",
    "answers": [
      "Mikko Rantanen",
      "Aleksander Barkov",
      "Teemu Selänne",
      "Saku Koivu"
    ],
    "correctIndex": 2,
    "explanation": "Teemu Selännettä kutsuttiin NHL:ssä nimellä Finnish Flash."
  },
  {
    "category": "urheilu",
    "question": "Mikä suomalainen NHL-pelaaja on toiminut Florida Panthersin kapteenina?",
    "answers": [
      "Mikko Koivu",
      "Jari Kurri",
      "Aleksander Barkov",
      "Esa Tikkanen"
    ],
    "correctIndex": 2,
    "explanation": "Aleksander Barkov on toiminut Florida Panthersin kapteenina."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji liittyy Stanley Cupiin?",
    "answers": [
      "Ralli",
      "Koripallo",
      "Jalkapallo",
      "Jääkiekko"
    ],
    "correctIndex": 3,
    "explanation": "Stanley Cup on NHL:n mestaruuspalkinto."
  },
  {
    "category": "urheilu",
    "question": "Mikä maa voitti jalkapallon miesten MM-kisat vuonna 2022?",
    "answers": [
      "Saksa",
      "Argentiina",
      "Ranska",
      "Brasilia"
    ],
    "correctIndex": 1,
    "explanation": "Argentiina voitti vuoden 2022 MM-kisat."
  },
  {
    "category": "urheilu",
    "question": "Kuka suomalainen hiihtäjä tunnetaan perinteisen hiihtotavan vahvana osaajana?",
    "answers": [
      "Mika Häkkinen",
      "Iivo Niskanen",
      "Jari Litmanen",
      "Kimi Räikkönen"
    ],
    "correctIndex": 1,
    "explanation": "Iivo Niskanen on menestynyt maastohiihdossa."
  },
  {
    "category": "urheilu",
    "question": "Mikä seuraavista on yleisurheilulaji?",
    "answers": [
      "Rangaistuspotku",
      "Alivoima",
      "Pituushyppy",
      "Kotiutuslyönti"
    ],
    "correctIndex": 2,
    "explanation": "Pituushyppy kuuluu yleisurheiluun."
  },
  {
    "category": "urheilu",
    "question": "Mikä seuraavista on talviurheilulaji?",
    "answers": [
      "Soutu",
      "Rantalentopallo",
      "Ampumahiihto",
      "Kriketti"
    ],
    "correctIndex": 2,
    "explanation": "Ampumahiihto on talviurheilulaji."
  },
  {
    "category": "urheilu",
    "question": "Mikä väline kuuluu keihäänheittoon?",
    "answers": [
      "Kivi",
      "Maila",
      "Keihäs",
      "Miekka"
    ],
    "correctIndex": 2,
    "explanation": "Keihäänheitossa heitetään keihästä."
  },
  {
    "category": "urheilu",
    "question": "Mitä lajia Valtteri Bottas edustaa?",
    "answers": [
      "Pesäpallo",
      "Suunnistus",
      "Formula 1",
      "Tennis"
    ],
    "correctIndex": 2,
    "explanation": "Valtteri Bottas on suomalainen Formula 1 -kuljettaja."
  },
  {
    "category": "urheilu",
    "question": "Mitä lajia Sami Hyypiä pelasi?",
    "answers": [
      "Ralli",
      "Golf",
      "Jääkiekko",
      "Jalkapallo"
    ],
    "correctIndex": 3,
    "explanation": "Sami Hyypiä oli suomalainen jalkapalloilija."
  },
  {
    "category": "urheilu",
    "question": "Mikä on pesäpallossa kotipesän vastakkainen pesä?",
    "answers": [
      "Kolmospesä",
      "Kakkospesä",
      "Takapesä",
      "Ykköspesä"
    ],
    "correctIndex": 1,
    "explanation": "Kakkospesä on kentällä kotipesää vastapäätä."
  },
  {
    "category": "urheilu",
    "question": "Mikä laji tunnetaan Suomessa Vimpelin Vedon ja Sotkamon Jymyn menestyksestä?",
    "answers": [
      "Koripallo",
      "Jalkapallo",
      "Pesäpallo",
      "Jääkiekko"
    ],
    "correctIndex": 2,
    "explanation": "Vimpelin Veto ja Sotkamon Jymy tunnetaan pesäpallosta."
  },
  {
    "category": "urheilu",
    "question": "Mikä seuraavista on olympialaji?",
    "answers": [
      "Kyykkä",
      "Saappaanheitto",
      "Mölkky",
      "Keihäänheitto"
    ],
    "correctIndex": 3,
    "explanation": "Keihäänheitto on yleisurheilun olympialaji."
  },
  {
    "category": "historia",
    "question": "Minä vuonna Suomi itsenäistyi?",
    "answers": [
      "1905",
      "1945",
      "1939",
      "1917"
    ],
    "correctIndex": 3,
    "explanation": "Suomi julistautui itsenäiseksi 6. joulukuuta 1917."
  },
  {
    "category": "historia",
    "question": "Kuka oli Suomen ensimmäinen presidentti?",
    "answers": [
      "Risto Ryti",
      "C. G. E. Mannerheim",
      "K. J. Ståhlberg",
      "Urho Kekkonen"
    ],
    "correctIndex": 2,
    "explanation": "K. J. Ståhlberg oli Suomen ensimmäinen presidentti."
  },
  {
    "category": "historia",
    "question": "Mikä sota alkoi Suomessa vuonna 1939?",
    "answers": [
      "Lapin sota",
      "Talvisota",
      "Krimin sota",
      "Jatkosota"
    ],
    "correctIndex": 1,
    "explanation": "Talvisota alkoi marraskuussa 1939."
  },
  {
    "category": "historia",
    "question": "Mikä rauha päätti talvisodan vuonna 1940?",
    "answers": [
      "Moskovan rauha",
      "Pariisin rauha",
      "Haminan rauha",
      "Tarton rauha"
    ],
    "correctIndex": 0,
    "explanation": "Talvisota päättyi Moskovan rauhaan maaliskuussa 1940."
  },
  {
    "category": "historia",
    "question": "Kuka oli Suomen presidentti vuosina 1956–1982?",
    "answers": [
      "Mauno Koivisto",
      "Urho Kekkonen",
      "Tarja Halonen",
      "Risto Ryti"
    ],
    "correctIndex": 1,
    "explanation": "Urho Kekkonen johti Suomea poikkeuksellisen pitkään."
  },
  {
    "category": "historia",
    "question": "Minä vuonna Suomi liittyi Euroopan unioniin?",
    "answers": [
      "2001",
      "1995",
      "1989",
      "2010"
    ],
    "correctIndex": 1,
    "explanation": "Suomi liittyi EU:n jäseneksi vuonna 1995."
  },
  {
    "category": "historia",
    "question": "Mikä kaupunki oli Suomen pääkaupunki ennen Helsinkiä?",
    "answers": [
      "Turku",
      "Tampere",
      "Viipuri",
      "Porvoo"
    ],
    "correctIndex": 0,
    "explanation": "Turku oli Suomen tärkein hallinnollinen keskus ennen Helsinkiä."
  },
  {
    "category": "historia",
    "question": "Minä vuonna Helsingistä tuli Suomen pääkaupunki?",
    "answers": [
      "1812",
      "1863",
      "1917",
      "1809"
    ],
    "correctIndex": 0,
    "explanation": "Helsinki määrättiin pääkaupungiksi vuonna 1812."
  },
  {
    "category": "historia",
    "question": "Mikä maa hallitsi Suomea ennen vuotta 1809?",
    "answers": [
      "Venäjä",
      "Saksa",
      "Tanska",
      "Ruotsi"
    ],
    "correctIndex": 3,
    "explanation": "Suomi kuului pitkään Ruotsin valtakuntaan."
  },
  {
    "category": "historia",
    "question": "Mikä maa hallitsi Suomea vuosina 1809–1917 suuriruhtinaskuntana?",
    "answers": [
      "Ruotsi",
      "Norja",
      "Saksa",
      "Venäjä"
    ],
    "correctIndex": 3,
    "explanation": "Suomi oli osa Venäjän keisarikuntaa autonomisena suuriruhtinaskuntana."
  },
  {
    "category": "historia",
    "question": "Mikä oli vuoden 1918 tapahtuma Suomessa?",
    "answers": [
      "Jatkosota",
      "Sisällissota",
      "Talvisota",
      "Lapin sota"
    ],
    "correctIndex": 1,
    "explanation": "Suomen sisällissota käytiin vuonna 1918."
  },
  {
    "category": "historia",
    "question": "Milloin Jatkosota käytiin?",
    "answers": [
      "1918–1919",
      "1941–1944",
      "1945–1947",
      "1939–1940"
    ],
    "correctIndex": 1,
    "explanation": "Jatkosota käytiin vuosina 1941–1944."
  },
  {
    "category": "historia",
    "question": "Mikä sota käytiin Suomen ja Saksan välillä vuosina 1944–1945?",
    "answers": [
      "Nuijasota",
      "Lapin sota",
      "Talvisota",
      "Jatkosota"
    ],
    "correctIndex": 1,
    "explanation": "Lapin sota käytiin Suomen ja Saksan välillä."
  },
  {
    "category": "historia",
    "question": "Kuka oli marsalkka Mannerheim?",
    "answers": [
      "Suomen sotilasjohtaja ja presidentti",
      "Tutkimusmatkailija",
      "Säveltäjä",
      "Jääkiekkoilija"
    ],
    "correctIndex": 0,
    "explanation": "Mannerheim oli Suomen puolustusvoimien ylipäällikkö ja myöhemmin presidentti."
  },
  {
    "category": "historia",
    "question": "Mikä oli Helsingin olympiavuosi?",
    "answers": [
      "1948",
      "1960",
      "1972",
      "1952"
    ],
    "correctIndex": 3,
    "explanation": "Helsingin olympialaiset järjestettiin vuonna 1952."
  },
  {
    "category": "historia",
    "question": "Kuka kokosi Kalevalan?",
    "answers": [
      "Mika Waltari",
      "Elias Lönnrot",
      "Aleksis Kivi",
      "J. L. Runeberg"
    ],
    "correctIndex": 1,
    "explanation": "Elias Lönnrot kokosi Kalevalan kansanrunoudesta."
  },
  {
    "category": "historia",
    "question": "Kuka kirjoitti Seitsemän veljestä?",
    "answers": [
      "Väinö Linna",
      "Eino Leino",
      "Aleksis Kivi",
      "Minna Canth"
    ],
    "correctIndex": 2,
    "explanation": "Seitsemän veljestä on Aleksis Kiven tunnetuin teos."
  },
  {
    "category": "historia",
    "question": "Mikä muuri murtui vuonna 1989?",
    "answers": [
      "Kiinan muuri",
      "Hadrianuksen valli",
      "Berliinin muuri",
      "Länsimuuri"
    ],
    "correctIndex": 2,
    "explanation": "Berliinin muurin murtuminen symboloi kylmän sodan päättymistä."
  },
  {
    "category": "historia",
    "question": "Mikä valtio hajosi vuonna 1991?",
    "answers": [
      "Ruotsi",
      "Kanada",
      "Neuvostoliitto",
      "Japani"
    ],
    "correctIndex": 2,
    "explanation": "Neuvostoliitto hajosi vuonna 1991."
  },
  {
    "category": "historia",
    "question": "Kuka oli Winston Churchill?",
    "answers": [
      "Ranskan presidentti",
      "Suomen presidentti",
      "Britannian pääministeri toisen maailmansodan aikana",
      "Saksalainen säveltäjä"
    ],
    "correctIndex": 2,
    "explanation": "Churchill johti Britanniaa suuren osan toisesta maailmansodasta."
  },
  {
    "category": "historia",
    "question": "Mikä oli ensimmäisen maailmansodan ajankohta?",
    "answers": [
      "1939–1945",
      "1914–1918",
      "1808–1809",
      "1950–1953"
    ],
    "correctIndex": 1,
    "explanation": "Ensimmäinen maailmansota käytiin vuosina 1914–1918."
  },
  {
    "category": "historia",
    "question": "Mikä oli toisen maailmansodan ajankohta?",
    "answers": [
      "1914–1918",
      "1808–1809",
      "2001–2005",
      "1939–1945"
    ],
    "correctIndex": 3,
    "explanation": "Toinen maailmansota käytiin vuosina 1939–1945."
  },
  {
    "category": "historia",
    "question": "Kuka oli Napoleon Bonaparte?",
    "answers": [
      "Ranskan keisari ja sotapäällikkö",
      "Norjan tutkimusmatkailija",
      "Suomen säveltäjä",
      "Ruotsin kuningas"
    ],
    "correctIndex": 0,
    "explanation": "Napoleon oli Ranskan keisari ja sotapäällikkö."
  },
  {
    "category": "historia",
    "question": "Missä antiikin olympialaiset syntyivät?",
    "answers": [
      "Egyptissä",
      "Kiinnassa",
      "Roomassa",
      "Kreikassa"
    ],
    "correctIndex": 3,
    "explanation": "Olympialaisten juuret ovat antiikin Kreikassa."
  },
  {
    "category": "historia",
    "question": "Kuka maalasi Mona Lisan?",
    "answers": [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    "correctIndex": 2,
    "explanation": "Mona Lisa on Leonardo da Vincin maalaus."
  },
  {
    "category": "historia",
    "question": "Mikä maa tunnetaan faaraoiden ja pyramidien historiasta?",
    "answers": [
      "Meksiko",
      "Egypti",
      "Suomi",
      "Norja"
    ],
    "correctIndex": 1,
    "explanation": "Muinaisen Egyptin historiaan kuuluvat faaraot ja pyramidit."
  },
  {
    "category": "historia",
    "question": "Mikä historiallinen tie yhdisti Aasiaa ja Eurooppaa kauppareittinä?",
    "answers": [
      "Silkkitie",
      "Route 66",
      "Via Baltica",
      "Kuninkaantie"
    ],
    "correctIndex": 0,
    "explanation": "Silkkitie oli laaja kauppareittien verkosto."
  },
  {
    "category": "historia",
    "question": "Kuka oli J. V. Snellman?",
    "answers": [
      "Italialainen säveltäjä",
      "Venäläinen kosmonautti",
      "Ruotsalainen jääkiekkoilija",
      "Suomalainen filosofi ja valtiomies"
    ],
    "correctIndex": 3,
    "explanation": "Snellman vaikutti suomalaisuusaateeseen ja markan käyttöönottoon."
  },
  {
    "category": "historia",
    "question": "Mikä valuutta Suomessa oli ennen euroa?",
    "answers": [
      "Markka",
      "Punta",
      "Rupla",
      "Kruunu"
    ],
    "correctIndex": 0,
    "explanation": "Suomen valuutta ennen euroa oli markka."
  },
  {
    "category": "historia",
    "question": "Milloin eurosetelit ja -kolikot tulivat Suomessa käyttöön?",
    "answers": [
      "1986",
      "1995",
      "2010",
      "2002"
    ],
    "correctIndex": 3,
    "explanation": "Eurosetelit ja -kolikot tulivat käyttöön vuonna 2002."
  },
  {
    "category": "historia",
    "question": "Mikä tapahtuma tuhosi suuren osan Turusta vuonna 1827?",
    "answers": [
      "Nälkävuodet",
      "Iso viha",
      "Talvisota",
      "Turun palo"
    ],
    "correctIndex": 3,
    "explanation": "Turun palo vuonna 1827 tuhosi suuren osan kaupungista."
  },
  {
    "category": "historia",
    "question": "Mikä oli Porvoon valtiopäivien vuosi?",
    "answers": [
      "1863",
      "1917",
      "1812",
      "1809"
    ],
    "correctIndex": 3,
    "explanation": "Porvoon valtiopäivät järjestettiin vuonna 1809."
  },
  {
    "category": "historia",
    "question": "Kuka oli Suomen presidentti talvisodan aikana?",
    "answers": [
      "Kyösti Kallio",
      "Tarja Halonen",
      "Urho Kekkonen",
      "Mauno Koivisto"
    ],
    "correctIndex": 0,
    "explanation": "Kyösti Kallio oli presidenttinä talvisodan aikana."
  },
  {
    "category": "historia",
    "question": "Mikä kaupunki menetettiin Neuvostoliitolle sotien seurauksena?",
    "answers": [
      "Oulu",
      "Lahti",
      "Tampere",
      "Viipuri"
    ],
    "correctIndex": 3,
    "explanation": "Viipuri jäi Neuvostoliiton alueelle sotien jälkeen."
  },
  {
    "category": "historia",
    "question": "Mikä sopimus määritteli Suomen rauhanehtoja vuonna 1947?",
    "answers": [
      "Versailles'n rauha",
      "Pariisin rauhansopimus",
      "Haminan rauha",
      "Tarton rauha"
    ],
    "correctIndex": 1,
    "explanation": "Pariisin rauhansopimus määritteli Suomen rauhanehtoja toisen maailmansodan jälkeen."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka sävelsi Finlandian?",
    "answers": [
      "Toivo Kärki",
      "Leevi Madetoja",
      "Jean Sibelius",
      "Oskar Merikanto"
    ],
    "correctIndex": 2,
    "explanation": "Finlandia on Jean Sibeliuksen tunnetuimpia sävellyksiä."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka kirjoitti Tuntemattoman sotilaan?",
    "answers": [
      "Mika Waltari",
      "Elias Lönnrot",
      "Väinö Linna",
      "Aleksis Kivi"
    ],
    "correctIndex": 2,
    "explanation": "Tuntematon sotilas on Väinö Linnan tunnettu romaani."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka loi Muumit?",
    "answers": [
      "Tove Jansson",
      "Eeva Kilpi",
      "Sofi Oksanen",
      "Minna Canth"
    ],
    "correctIndex": 0,
    "explanation": "Tove Jansson loi Muumit."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen suurin järvi?",
    "answers": [
      "Inari",
      "Saimaa",
      "Oulujärvi",
      "Päijänne"
    ],
    "correctIndex": 1,
    "explanation": "Saimaa on Suomen suurin järvi."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen pisin joki?",
    "answers": [
      "Kokemäenjoki",
      "Tornionjoki",
      "Kemijoki",
      "Oulujoki"
    ],
    "correctIndex": 2,
    "explanation": "Kemijoki on Suomen pisin joki."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen korkein kohta?",
    "answers": [
      "Koli",
      "Levi",
      "Ruka",
      "Halti"
    ],
    "correctIndex": 3,
    "explanation": "Halti on Suomen korkein kohta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen kansallislintu?",
    "answers": [
      "Laulujoutsen",
      "Varis",
      "Harakka",
      "Kuikka"
    ],
    "correctIndex": 0,
    "explanation": "Laulujoutsen on Suomen kansallislintu."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen kansalliskukka?",
    "answers": [
      "Kielo",
      "Orvokki",
      "Ruusu",
      "Tulppaani"
    ],
    "correctIndex": 0,
    "explanation": "Kielo on Suomen kansalliskukka."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen kansalliseläin?",
    "answers": [
      "Hirvi",
      "Karhu",
      "Susi",
      "Ilves"
    ],
    "correctIndex": 1,
    "explanation": "Karhu on Suomen kansalliseläin."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä ruoka tunnetaan karjalaisena perinneruokana?",
    "answers": [
      "Sushi",
      "Pizza",
      "Karjalanpiirakka",
      "Tortilla"
    ],
    "correctIndex": 2,
    "explanation": "Karjalanpiirakka on tunnettu suomalainen perinneruoka."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka kirjoitti Sinuhe egyptiläisen?",
    "answers": [
      "J. L. Runeberg",
      "Mika Waltari",
      "Väinö Linna",
      "Aleksis Kivi"
    ],
    "correctIndex": 1,
    "explanation": "Sinuhe egyptiläinen on Mika Waltarin romaani."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on veden kemiallinen kaava?",
    "answers": [
      "O₂",
      "NaCl",
      "H₂O",
      "CO₂"
    ],
    "correctIndex": 2,
    "explanation": "Vesi koostuu vedystä ja hapesta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä planeetta on lähimpänä Aurinkoa?",
    "answers": [
      "Maa",
      "Merkurius",
      "Venus",
      "Mars"
    ],
    "correctIndex": 1,
    "explanation": "Merkurius on Aurinkoa lähin planeetta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mitä planeettaa kutsutaan punaiseksi planeetaksi?",
    "answers": [
      "Saturnus",
      "Jupiter",
      "Venus",
      "Mars"
    ],
    "correctIndex": 3,
    "explanation": "Mars tunnetaan punaisesta väristään."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on maailman korkein vuori?",
    "answers": [
      "K2",
      "Mount Everest",
      "Mont Blanc",
      "Kilimanjaro"
    ],
    "correctIndex": 1,
    "explanation": "Mount Everest on maailman korkein vuori."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Italian pääkaupunki?",
    "answers": [
      "Venetsia",
      "Rooma",
      "Napoli",
      "Milano"
    ],
    "correctIndex": 1,
    "explanation": "Rooma on Italian pääkaupunki."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Ruotsin pääkaupunki?",
    "answers": [
      "Göteborg",
      "Tukholma",
      "Malmö",
      "Uppsala"
    ],
    "correctIndex": 1,
    "explanation": "Tukholma on Ruotsin pääkaupunki."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Norjan pääkaupunki?",
    "answers": [
      "Tromssa",
      "Oslo",
      "Trondheim",
      "Bergen"
    ],
    "correctIndex": 1,
    "explanation": "Oslo on Norjan pääkaupunki."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Viron pääkaupunki?",
    "answers": [
      "Narva",
      "Pärnu",
      "Tartto",
      "Tallinna"
    ],
    "correctIndex": 3,
    "explanation": "Tallinna on Viron pääkaupunki."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä suomalainen design-yritys tunnetaan värikkäistä kuoseistaan?",
    "answers": [
      "Volvo",
      "Sony",
      "Marimekko",
      "Lego"
    ],
    "correctIndex": 2,
    "explanation": "Marimekko on tunnettu suomalainen designyritys."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä suomalainen lasi- ja muotoilubrändi tunnetaan esimerkiksi Aalto-maljakosta?",
    "answers": [
      "Iittala",
      "Nokia",
      "Ikea",
      "Lego"
    ],
    "correctIndex": 0,
    "explanation": "Iittala tunnetaan suomalaisesta lasi- ja muotoiluperinteestä."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä sana liittyy saunomiseen?",
    "answers": [
      "Birdie",
      "Paitsio",
      "Touchdown",
      "Löyly"
    ],
    "correctIndex": 3,
    "explanation": "Löyly tarkoittaa kiukaalle heitetystä vedestä syntyvää höyryä ja lämpöä."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä marja on Suomessa hyvin yleinen metsissä?",
    "answers": [
      "Ananas",
      "Mustikka",
      "Papaija",
      "Mango"
    ],
    "correctIndex": 1,
    "explanation": "Mustikka on suomalaisissa metsissä yleinen marja."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä sieni tunnetaan punaisesta lakista ja valkoisista pilkuista?",
    "answers": [
      "Suppilovahvero",
      "Kanttarelli",
      "Kärpässieni",
      "Herkkutatti"
    ],
    "correctIndex": 2,
    "explanation": "Kärpässieni on punainen ja valkopilkkuinen, mutta myrkyllinen."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on kirjasto?",
    "answers": [
      "Jääkiekkoareena",
      "Sairaala",
      "Paikka, josta voi lainata kirjoja ja käyttää tietopalveluja",
      "Lentokenttä"
    ],
    "correctIndex": 2,
    "explanation": "Kirjasto tarjoaa kirjoja, lehtiä, digipalveluja ja tietoa."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen kansalliseepos?",
    "answers": [
      "Seitsemän veljestä",
      "Sinuhe egyptiläinen",
      "Kanteletar",
      "Kalevala"
    ],
    "correctIndex": 3,
    "explanation": "Kalevala on Suomen kansalliseepos."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka on kirjoittanut Maamme-laulun sanat ruotsiksi?",
    "answers": [
      "J. L. Runeberg",
      "Eino Leino",
      "Elias Lönnrot",
      "Jean Sibelius"
    ],
    "correctIndex": 0,
    "explanation": "Maamme-laulun alkuperäiset sanat kirjoitti J. L. Runeberg."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on maapallon suurin valtameri?",
    "answers": [
      "Intian valtameri",
      "Jäämeri",
      "Atlantti",
      "Tyynimeri"
    ],
    "correctIndex": 3,
    "explanation": "Tyynimeri on maapallon suurin valtameri."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka sävelsi oopperan Taikahuilu?",
    "answers": [
      "Jean Sibelius",
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Johann Strauss"
    ],
    "correctIndex": 1,
    "explanation": "Taikahuilu on Mozartin ooppera."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuka maalasi Tähtikirkas yö -teoksen?",
    "answers": [
      "Claude Monet",
      "Edvard Munch",
      "Vincent van Gogh",
      "Pablo Picasso"
    ],
    "correctIndex": 2,
    "explanation": "Tähtikirkas yö on Vincent van Goghin maalaus."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Kuinka monta kuukautta vuodessa on?",
    "answers": [
      "12",
      "13",
      "11",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "Vuodessa on 12 kuukautta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on vuoden lyhin kuukausi?",
    "answers": [
      "Helmikuu",
      "Marraskuu",
      "Kesäkuu",
      "Tammikuu"
    ],
    "correctIndex": 0,
    "explanation": "Helmikuu on vuoden lyhin kuukausi."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä on Suomen itsenäisyyspäivä?",
    "answers": [
      "31. joulukuuta",
      "1. toukokuuta",
      "24. kesäkuuta",
      "6. joulukuuta"
    ],
    "correctIndex": 3,
    "explanation": "Suomen itsenäisyyspäivää vietetään 6. joulukuuta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä juhla on 1. toukokuuta?",
    "answers": [
      "Joulu",
      "Juhannus",
      "Vappu",
      "Pääsiäinen"
    ],
    "correctIndex": 2,
    "explanation": "Vappua vietetään 1. toukokuuta."
  },
  {
    "category": "yleiskulttuuri",
    "question": "Mikä eläin vaihtaa talvella usein valkoiseen suojaväriin?",
    "answers": [
      "Metsäjänis",
      "Orava aina",
      "Siili",
      "Sammakko"
    ],
    "correctIndex": 0,
    "explanation": "Metsäjänis voi vaihtaa talvella vaaleampaan suojaväriin."
  }
];
