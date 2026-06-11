# Aivojumppa tietovisa

Yksinkertainen mobiiliystävällinen tietovisasivu perhekäyttöön.

## Käyttö Cursorissa

1. Pura zip-tiedosto.
2. Avaa kansio Cursorissa.
3. Avaa `index.html` selaimessa.
4. Muokkaa kysymyksiä tiedostossa `app.js`.

## Julkaisu ilmaiseksi

Helpoin tapa:
- Luo GitHub-repository
- Lisää nämä tiedostot repositoryyn
- Julkaise Vercelissä tai Netlifyssä

Sivu ei vaadi tietokantaa, kirjautumista tai maksullista API:a.

## Kysymysten lisääminen

Lisää `app.js`-tiedoston `QUESTIONS`-listaan uusi kysymys näin:

{
  question: "Kysymys tähän?",
  answers: ["Vastaus 1", "Vastaus 2", "Vastaus 3", "Vastaus 4"],
  correctIndex: 0,
  explanation: "Lyhyt selitys oikeasta vastauksesta."
}

`correctIndex` alkaa nollasta:
- 0 = ensimmäinen vastaus
- 1 = toinen vastaus
- 2 = kolmas vastaus
- 3 = neljäs vastaus
