// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


// 1. Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto:
// - creo un array di oggetti che rappresentano i membri del team.
const members = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "pic": "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        "name": "Angela Carroll",
        "role": "Chief Editor",
        "pic": "img/angela-caroll-chief-editor.jpg",
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "pic": "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "pic": "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "pic": "img/scott-estrada-developer.jpg",
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "pic": "img/walter-gordon-office-manager.jpg",
    },
];

console.log(members);

// 2. Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// - aggancio l'elemento HTML su cui andrò a stampare le card;
const teamContainer = document.querySelector(".team-container");
// - scorrendo tutto l'array members con ciclo definito...
for (let i = 0; i < members.length; i++) {
    // - aggiungo dinamicamente ogni elemento (card) dell'array members all'HTML;
    teamContainer.innerHTML += 
    // - importo TUTTA la struttura HTML della team-card;
    // - al posto di foto, nome e ruolo, inserisco il VALORE della relativa CHIAVE richiamandolo dall'array members con template literal

        `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${members[i].pic}"
                    alt="${members[i].name}"
                />
            </div>
            <div class="card-text">
                <h3>${members[i].name}</h3>
                <p>${members[i].role}</p>
            </div>
        </div>
        `
    ;
}