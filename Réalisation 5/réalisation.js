let produits = []; 

let inputPrix = document.getElementById("prix-min");
let inputRecherche = document.getElementById("recherche");
let boutonFiltrer = document.getElementById("filtrer");
let liste = document.getElementById("liste-produits");

function chargerProduits() {
    fetch('réalisation.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            return response.json();
        })
        .then(data => {
            produits = data;
            afficherProduits();
        })
        .catch(err => {
            console.error("Erreur API:", err);
            liste.innerHTML = "";
            let li = document.createElement("li");
            li.innerHTML = '<strong style="color: #8b4513;">Erreur de chargement des produits.</strong>';
            li.style.textAlign = "center";
            liste.appendChild(li);
        });
}

function afficherProduits() {
    liste.innerHTML = "";

    let prixMin = parseInt(inputPrix.value) || 0;
    let recherche = inputRecherche.value.toLowerCase().trim();

    let produitsFiltres = produits.filter(function(produit) {
        let okPrix = produit.prix >= prixMin;
        let okRecherche = recherche === "" || produit.nom.toLowerCase().includes(recherche);
        return okPrix && okRecherche;
    });

    if (produitsFiltres.length === 0) {
        let li = document.createElement("li");
        li.innerHTML = '<strong>Aucun talon trouvé.</strong>';
        li.style.textAlign = "center";
        li.style.color = "#8b4513";
        li.style.fontStyle = "italic";
        liste.appendChild(li);
        return;
    }

    produitsFiltres.forEach(function(produit) {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}" class="produit-image">
            <div>
                <strong>${produit.nom}</strong><br>
                ${produit.prix} MAD (${produit.categorie})
            </div>
        `;
        liste.appendChild(li);
    });
}

boutonFiltrer.addEventListener("click", afficherProduits);

chargerProduits(); 