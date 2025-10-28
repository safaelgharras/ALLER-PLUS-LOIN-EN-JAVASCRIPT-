let input = document.getElementById("input");
let button = document.getElementById("button");
let div = document.getElementById("div")

    input.addEventListener('keydown', function(t) {
      if (t.key === 'Enter'){
        t.preventDefault();
        button.click();
      }
    });


button.addEventListener("click",function(){
 let name = input.value;
 if(name !== ""){
    div.innerHTML= "";


    fetch(`https://api.github.com/users/${name}`)
  .then(response => response.json())
  .then(data => {
    if (data.message === "Not Found") {
      div.textContent = " Utilisateur introuvable !";
      return;
    }
    console.log("Données reçues :", data);

    let usersname = document.createElement("h3");
    usersname.textContent = `Name: ${data.name}`;

    let img = document.createElement("img");
    img.src = data.avatar_url;
    img.width = 100;

    let projets = document.createElement("p");
    projets.textContent = `Nombre des repositories: ${data.public_repos}`;

    let followers = document.createElement("p");
        followers.textContent = `Followers: ${data.followers}`;

    let id = document.createElement("p");
        id.textContent = `id: ${data.id}`;

        div.appendChild(usersname);
        div.appendChild(id);
        div.appendChild(followers);
        div.appendChild(projets);
        div.appendChild(img);
        
 })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  }); 
 }
})

 

/*fetch('https://api.github.com/users/founticode')
  .then(response => response.json())
  .then(data => {
    console.log("Données reçues :", data);
  })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });*/
