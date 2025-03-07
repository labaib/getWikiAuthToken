const getWikiAuthToken = async (endpoint) => {   // istanza Wiki da interrogare

    // Parametri URL
    const params = new URLSearchParams({
        action: "query",
        meta: "tokens",
        format: "json"
    });

    const url = `${endpoint}?${params.toString()}`; // API Endpoint per l'ottenimento del token
    const response = await fetch(url, { credentials: "include" });  // Esecuzione della chiamata
    const json = await response.json();  // Conversione della risposta
    const token = json.query.tokens.csrftoken  // Estrazione valore token di autenticazione

    return null ? token == "+\\" : token   // se il token è vuoto la funzione torna null

};

export { getWikiAuthToken }; // Esportazione per l'importazione in un modulo
