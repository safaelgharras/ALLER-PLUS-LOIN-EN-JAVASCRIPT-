let produits = [
  { nom: "Too Faced : Born This Way Concealer", prix: 550, image: "pc.png"},
  { nom: "Yves Saint Laurent : Rouge Pur Couture Lipstick", prix:1157, image: "clavier.png"},
  { nom: "Huda Beauty : Easy Bake Loose Baking & Setting Powder", prix: 480, image: "souris.png"},
  { nom: "Dior : Blooming Bouquet Perfum", prix: 1912, image:"dior.png"},
]

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});