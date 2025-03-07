// Ottieni token per autenticazione
const getWikiAuthToken = async (dominio) => {   // dominio dell'istanza Wiki da interrogare, può essere 'www.wikidata.org' oppure stanze wikibase come 'vicobncf.wikibase.cloud'

    const url = `https://${dominio}/w/api.php?action=query&meta=tokens&format=json`; // API Endpoint per l'ottenimento del token di autenticazione
    const response = await fetch(url, { credentials: "include" });  // Esecuzione della cihamata
    const json = await response.json();  // Conversione della risposta
    const token = json.query.tokens.csrftoken  // Estrazione valore token di autenticazione

    return null ? token == "+\\" : token   // se il token è vuoto la funzione torna null

};

export { getWikiAuthToken }; // Esportazione per l'importazione in un modulo
