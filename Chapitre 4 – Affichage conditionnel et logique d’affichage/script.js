document.addEventListener("DOMContentLoaded", () => {
let produits = [
  { nom: "Too Faced : Born This Way Concealer", prix: 550, catégorie: "makeup"},
  { nom: "Yves Saint Laurent : Rouge Pur Couture Lipstick", prix: 1157, catégorie: "makeup"},
  { nom: "Huda Beauty : Easy Bake Loose Baking & Setting Powder", prix: 480, catégorie: "makeup"},
  { nom: "Dior : Blooming Bouquet Perfum", prix: 1912, catégorie: "perfum"},
];

let liste = document.getElementById("produits");

let filtresDiv = document.createElement("div");
  filtresDiv.style = "text-align:center; margin:20px 0;";

  let select = document.createElement("select");
  select.innerHTML = `
    <option value="toutes">Toutes catégories</option>
    <option value="makeup">Makeup</option>
    <option value="perfum">Parfum</option>
  `;

  filtresDiv.appendChild(select);
 
  document.body.insertBefore(filtresDiv, liste);

  function filtrer() {
    let cat = select.value;
    let filtres = produits.filter(p => p.prix >100 && (cat === "toutes" || p.catégorie === cat));

    liste.innerHTML = "";
    if (filtres.length === 0) {
      liste.innerHTML = "<li>Aucun produit en promotion.</li>";
    } else {
      filtres.forEach(p => {
        let li = document.createElement("li");
        li.textContent = `${p.nom} – ${p.prix} DH`;
        liste.appendChild(li);
      });
    }
  }
select.addEventListener("change", filtrer);
  btn.addEventListener("click", () => {
    select.value = "toutes";
    filtrer();
  });

  filtrer(); 
});