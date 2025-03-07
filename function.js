// Ottieni token per autenticazione
const getWikiAuthToken = async (endpoint) => {   // dominio dell'istanza Wiki da interrogare, può essere 'https://www.wikidata.org/w/api.php' oppure stanze wikibase come 'https://vicobncf.wikibase.cloud/w/api.php'

    // Parametri URL
    const params = new URLSearchParams({
        action: "query",
        meta: "token",
        format: "json"
    });

    const url = `${endpoint}?${params.toString()}`; // API Endpoint per l'ottenimento del token di autenticazione
    const response = await fetch(url, { credentials: "include" });  // Esecuzione della chiamata
    const json = await response.json();  // Conversione della risposta
    const token = json.query.tokens.csrftoken  // Estrazione valore token di autenticazione

    return null ? token == "+\\" : token   // se il token è vuoto la funzione torna null

};

export { getWikiAuthToken }; // Esportazione per l'importazione in un modulo
