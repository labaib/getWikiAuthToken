/**
* Ottieni token di autenticazione Wikidata
* @param {string} [endpoint="www.wikidata.org"] - opzionale
* @returns {string|null} - Ritorna una stringa o null
*/

const getWikiAuthToken = async (endpoint = "www.wikidata.org") => {   // istanza Wiki da interrogare

    // Parametri URL
    const params = new URLSearchParams({
        action: "query",
        meta: "tokens",
        format: "json"
    });

    const url = `https://${endpoint}/w/api.php?${params.toString()}`;
    const response = await fetch(url, { credentials: "include" }); 
    const json = await response.json();
    const token = json.query.tokens.csrftoken  // Estrazione valore da risposta

    return null ? token == "+\\" : token

};

export { getWikiAuthToken }; 
