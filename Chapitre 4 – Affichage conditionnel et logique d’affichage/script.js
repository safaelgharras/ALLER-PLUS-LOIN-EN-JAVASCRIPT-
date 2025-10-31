let produits = [
  { nom: "Too Faced : Born This Way Concealer", prix: 550},
  { nom: "Yves Saint Laurent : Rouge Pur Couture Lipstick", prix:1157},
  { nom: "Huda Beauty : Easy Bake Loose Baking & Setting Powder", prix: 480},
  { nom: "Dior : Blooming Bouquet Perfum", prix: 1912},
];

let liste = document.getElementById("produits");

let produitsFiltres = produits.filter(p => p.prix < 1000);

if (produitsFiltres.length === 0) {
  liste.innerHTML = "<li>Aucun produit en promotion.</li>";
} else {
  produitsFiltres.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.nom} – ${p.prix} €`;
    liste.appendChild(li);
  });
}
