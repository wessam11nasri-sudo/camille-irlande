// Chasse au trésor - Camille / Irlande
// + image permanente niveau 1 (acc.png)
// + image plein écran quelques secondes après chaque étape réussie

const OVERLAY_MS = 2200; // durée d'affichage plein écran (ms)

const levels = [
  {
    title: "Niveau 1 — Le CV de Camille",
    badge: "Master de référence",
    permanentImage: "acc.png", // image permanente
    text: `
      <p>Camille-> direction l’Irlande cet été ☘️</p>
      <p class="hint">
        Première énigme :<br>
        <b>Quel est le master de référence de ton CV ? (Ton talent caché)</b>
      </p>
      <p>Entre la clé (2 mots).</p>
    `,
    answer: "master clown",
    afterImage: "1000010633.png" // plein écran après réussite
  },
  {
    title: "Niveau 2 : Un invité surprise",
    badge: "Plot twist",
    text: `
      <p class="hint">
        “Je vais m’ennuyer 3 mois toute seule là-bas…”<br>
        Réponse : <b>Pas si mon ____ passe me voir</b>
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    answer: "amoureux",
    afterImage: "1000010632.png"
  },
  {
    title: "Niveau 3 — Le rêve ultime 🐴⛰️",
    badge: "Objectif final",
    text: `
      <p class="hint">
        Objectif final :<br>
        <b>Ouvrir un ____ sur les cote Irlandaise</b>
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    answer: "ranch",
    afterImage: "Capture-écran-2026-02-23-164916.png"
  },
  {
    title: "Niveau 4 — Le grand choix 🌴 vs ☘️",
    badge: "Dernière porte",
    text: `
      <p class="hint">
        Dernière question : <b>Île de la Réunion ou Irlande ?</b><br>
        (Indice : “Moi aussi je préfère la ____ pour élever le mioche.” )
      </p>
      <p>Entre la clé (1 mot).</p>
    `,
    answer: ["reunion", "la reunion", "réunion", "la réunion"],
    afterImage: "1000010635.jpg"
  },
  {
    title: "🎉 Trésor trouvé !",
    badge: "Fin",
    text: `
      <p><b>BRAVO Camille</b> 🏆</p>
      <p>Tu as terminé la chasse au trésor version Irlande ☘️</p>
      <p class="hint">
        <b>“Ranch en Irlande… mais la Réunion gagne (pour le mioche).”</b> 
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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function showOverlayImage(src, ms = OVERLAY_MS){
  return new Promise((resolve) => {
    if(!src) return resolve();

    const ov = document.createElement("div");
    ov.className = "overlay";
    ov.innerHTML = `<img src="${src}" alt="image étape">`;
    document.body.appendChild(ov);

    // Clic pour fermer plus vite (optionnel)
    ov.addEventListener("click", () => {
      ov.remove();
      resolve();
    });

    setTimeout(() => {
      if(document.body.contains(ov)) ov.remove();
      resolve();
    }, ms);
  });
}

function render(){
  const screen = document.getElementById("screen");
  const progress = document.getElementById("progress");
  progress.textContent = `Niveau ${Math.min(current+1, levels.length)}/${levels.length}`;

  const lvl = levels[current];

  const title = `<h2 style="margin:0 0 6px 0">${lvl.title}</h2>`;
  const badge = `<div class="badge">${lvl.badge}</div>`;

  const permanentImg = lvl.permanentImage
    ? `<img src="${lvl.permanentImage}" class="stepimg persist" alt="Image permanente">`
    : "";

  const body = `<div style="margin-top:12px">${permanentImg}${lvl.text}</div>`;

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

  async function check(){
    const got = normalize(input.value);

    if(!got){
      msg.textContent = "Entre une clé 😄";
      msg.className = "msg no";
      return;
    }
    if(expectedNorm.includes(got)){
      msg.textContent = "✅ Correct !";
      msg.className = "msg ok";

      // Image plein écran après réussite (si définie)
      await showOverlayImage(lvl.afterImage);

      current++;
      render();
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
