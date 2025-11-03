let produits = [
  { nom: "Too Faced : Born This Way Concealer", prix: 550, image: "too-faced-born-this-way-.jpg"},
  { nom: "Yves Saint Laurent : Rouge Pur Couture Lipstick", prix:1157, image: "lipstickysl.webp"},
  { nom: "Huda Beauty : Easy Bake Loose Baking & Setting Powder", prix: 480, image: "hudabeauty.webp"},
  { nom: "Dior : Blooming Bouquet Perfum", prix: 1912, image:"diorperfum.avif"}
]

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} DH</p>
  `;
  catalogue.appendChild(carte);
});