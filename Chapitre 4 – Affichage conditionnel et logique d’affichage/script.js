let produits = [
  { nom: "Too Faced : Born This Way Concealer", prix: 550, catégorie: "makeup"},
  { nom: "Yves Saint Laurent : Rouge Pur Couture Lipstick", prix: 1157, catégorie: "makeup"},
  { nom: "Huda Beauty : Easy Bake Loose Baking & Setting Powder", prix: 480, catégorie: "makeup"},
  { nom: "Dior : Blooming Bouquet Perfum", prix: 1912, catégorie: "perfum"},
];

let liste = document.getElementById("produits");

let produitsFiltres = produits.filter(p => p.prix < 100);

if (produitsFiltres.length === 0) {
  liste.innerHTML = "<li>Aucun produit en promotion.</li>";
} else {
  produitsFiltres.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.nom} – ${p.prix} €`;
    liste.appendChild(li);
  });
}
