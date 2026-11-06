// Pagine fisse: l'indirizzo è il nome del file (es. /la-nostra-storia/)
// e ogni pagina mostra in fondo i documenti della sua sezione.
const sezioni = {
  "convenzione-antiracket": "Convenzione Antiracket",
  "il-patto-antiracket": "Patto Antiracket",
  "por-campania": "P.O.R. Campania",
  "legge-124-2017": "Legge 124/2017",
};

export default {
  layout: "layouts/pagina.njk",
  permalink: "/{{ page.fileSlug }}/",
  eleventyComputed: {
    documenti_categoria: (data) => sezioni[data.page.fileSlug],
  },
};
