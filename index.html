// Chasse au trésor - Camille / Irlande
// Réponses en minuscules, sans accents si possible (pour éviter les erreurs de saisie).

const levels = [
  {
    title: "Niveau 1 — Le CV de Camille 🇮🇪",
    badge: "Master de référence",
    text: `
      <p>Camille, mission : direction l’Irlande cet été ☘️</p>
      <p class="hint">
        Première énigme :<br>
        <b>Quel est le master de référence de ton CV ?</b>
      </p>
      <p>Entre la clé (2 mots).</p>
    `,
    answer: "master clown",
  },
  {
    title: "Niveau 2 — 3 mois là-bas 😭",
    badge: "Plot twist",
    text: `
      <p class="hint">
        “Je vais m’ennuyer 3 mois toute seule là-bas…”<br>
        Réponse : <b>Pas si mon ____ passe me voir</b>
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    answer: "amoureux",
  },
  {
    title: "Niveau 3 — Le rêve ultime 🐴⛰️",
    badge: "Objectif final",
    text: `
      <p class="hint">
        Objectif final :<br>
        <b>Ouvrir un ____ dans les montagnes de l’Irlande</b>
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    answer: "ranch",
  },
  {
    title: "Niveau 4 — Le grand choix 🌴 vs ☘️",
    badge: "Dernière porte",
    text: `
      <p class="hint">
        Dernière question : <b>Île de la Réunion ou Irlande ?</b><br>
        (Indice : “Moi aussi je préfère la ____ pour élever le mioche.” 😄)
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    // On accepte plusieurs variantes pour éviter qu'elle se fasse bloquer
    answer: ["reunion", "la reunion", "réunion", "la réunion"],
  },
  {
    title: "🎉 Trésor trouvé !",
    badge: "Fin",
    text: `
      <p><b>BRAVO Camille</b> 🏆</p>
      <p>Tu as terminé la chasse au trésor version Irlande ☘️</p>
      <p class="hint">
        Message final :<br>
        <b>“Ranch en Irlande… mais la Réunion gagne (pour le mioche).”</b> 😄
      </p>
      <p style="margin-top:14px" class="muted">
        (Tu peux remplacer ce message final par une image/gif si tu veux.)
      </p>
      <div class="row" style="margin-top:16px">
        <button id="restart">Recommencer</button>
      </div>
    `,
    final: true
  }
];

let current = 0;

function normalize(s){
  return (s || "")
    .trim()
    .toLowerCase()
    // simplif accents (basic)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function render(){
  const screen = document.getElementById("screen");
  const progress = document.getElementById("progress");
  progress.textContent = `Niveau ${Math.min(current+1, levels.length)}/${levels.length}`;

  const lvl = levels[current];

  const title = `<h2 style="margin:0 0 6px 0">${lvl.title}</h2>`;
  const badge = `<div class="badge">${lvl.badge}</div>`;
  const body = `<div style="margin-top:12px">${lvl.text}</div>`;

  if (lvl.final) {
    screen.innerHTML = `${title}${badge}${body}`;
    document.getElementById("restart").onclick = () => {
      current = 0;
      render();
    };
    return;
  }

  screen.innerHTML = `
    ${title}
    ${badge}
    ${body}
    <div class="row">
      <input id="input" placeholder="Entre la clé…" autocomplete="off" />
      <button id="btn">Valider</button>
    </div>
    <div id="msg" class="msg"></div>
    <div class="hint muted">Astuce : pas besoin de majuscules, les accents sont ignorés.</div>
  `;

  const input = document.getElementById("input");
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  const expectedList = Array.isArray(lvl.answer) ? lvl.answer : [lvl.answer];
  const expectedNorm = expectedList.map(normalize);

  function check(){
    const got = normalize(input.value);

    if(!got){
      msg.textContent = "Entre une clé 😄";
      msg.className = "msg no";
      return;
    }
    if(expectedNorm.includes(got)){
      msg.textContent = "✅ Correct !";
      msg.className = "msg ok";
      setTimeout(() => { current++; render(); }, 450);
    } else {
      msg.textContent = "❌ Nope. Réessaie 😈";
      msg.className = "msg no";
    }
  }

  btn.onclick = check;
  input.addEventListener("keydown", (e)=>{ if(e.key==="Enter") check(); });
  input.focus();
}

render();
