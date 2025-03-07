# getWikiAuthToken
Funzione per l'ottenimento del token di autenticazione Wikidata tramite API


## Importazione

### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME corretto, L'URL segue questo formato: https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>.

```
<script type="module">
        
  import { getWikiAuthToken } from 'https://cdn.jsdelivr.net/gh/logo94/getWikiAuthToken@main/index.js';

  const token = await getWikiAuthToken("https://www.wikidata.org/w/api.php"); // utilizzare in una funzione asincrona

</script>
```

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
<script type="module">
        
  import { getWikiAuthToken } from './js/getWikiAuthToken.js';

  const token = await getWikiAuthToken("https://www.wikidata.org/w/api.php"); // utilizzare in una funzione asincrona

</script>
```
