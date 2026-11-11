// Pagine fisse: l'indirizzo è il nome del file (es. /la-nostra-storia/)
// e ogni pagina mostra in fondo i documenti della sua sezione.
// Indirizzi diversi dal nome del file
const indirizzi = {
  "legge-124-2017": "/legge-124/",
};

const sezioni = {
  "convenzione-antiracket": "Convenzione Antiracket",
  "il-patto-antiracket": "Patto Antiracket",
  "por-campania": "P.O.R. Campania",
  "legge-124-2017": "Legge 124/2017",
};

export default {
  layout: "layouts/pagina.njk",
  permalink: (data) => indirizzi[data.page.fileSlug] || `/${data.page.fileSlug}/`,
  eleventyComputed: {
    documenti_categoria: (data) => sezioni[data.page.fileSlug],
  },
};
