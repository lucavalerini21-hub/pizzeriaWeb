# pizzeriaWeb

Progetto di sviluppo collaborativo per il laboratorio di TPSI.
Sito web del menu della **Pizzeria Da Giotto**.

## Struttura del progetto

```
pizzeriaWeb/
├── index.html        <- pagina del menu (da completare)
├── css/style.css     <- foglio di stile del template
├── js/main.js        <- piccole interazioni (non modificare)
├── img/              <- immagini dei piatti
└── README.md
```

## Regole del gruppo di lavoro

Ogni sviluppatore deve aggiungere **due portate** nel proprio menu:

| Sviluppatore | Menu assegnato | Branch di lavoro |
|--------------|----------------|------------------|
| svi-A        | Pizze          | `menuPizza`      |
| svi-B        | Dolci          | `menuDolci`      |
| svi-C        | Bevande        | `menuBibite`     |

Regole del GitHub Flow da rispettare:

1. `main` contiene sempre la versione pubblicabile del progetto.
2. ogni sviluppatore lavora su un branch descrittivo (`menuPizza`, ...).
3. ogni volta che una parte di lavoro &egrave; pronta si esegue il push del branch.
4. al termine si apre una **pull request** verso `main` per la revisione del PM.
5. solo il PM approva e fa il merge: nessuno scrive direttamente su `main`.

## Come inserire una portata

Nel file `index.html` ogni sezione del menu ha questa struttura.
Questo &egrave; l'esempio (gi&agrave; presente nel template) della portata *Caff&egrave; Espresso*
nel menu Bevande:

```html
<li class="piatto">
  <img src="img/caffe.svg" alt="Caff&egrave; Espresso">
  <div>
    <h3>Caff&egrave; Espresso</h3>
    <p>Caff&egrave; napoletano, servito caldo</p>
  </div>
  <span class="prezzo">&euro; 1,20</span>
</li>
```

Per aggiungere una nuova portata:

1. copiare l'immagine del piatto nella cartella `img/`;
2. copiare il blocco `<li class="piatto"> ... </li>` e modificare
   immagine, nome, descrizione e prezzo;
3. collaudare la pagina in locale aprendo `index.html` nel browser;
4. eseguire `git add -A`, `git commit -m "..."` e `git push` sul proprio branch.
