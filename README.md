# getWikiAuthToken
Funzione per l'ottenimento del token di autenticazione Wikidata tramite API


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { getWikiAuthToken } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiAuthToken@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { getWikiAuthToken } from './js/getWikiAuthToken.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { getWikiAuthToken } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiAuthToken@main/index.js';

 (async () => {
     const token = await getWikiAuthToken();
 })();

</script>
```
```
<script type="module">
        
  import { getWikiAuthToken } from './js/getWikiAuthToken.js';

  (async () => {
    const token = await getWikiAuthToken();
  })();

</script>
```
