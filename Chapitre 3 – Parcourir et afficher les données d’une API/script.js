let container = document.getElementById("articles");

fetch('https://api.github.com/users/safaelgharras/repos')
  .then(response => response.json())
  .then(repos => {
    let ul = document.createElement('ul');

    repos.forEach(repo => {
      let li = document.createElement('li');
      li.textContent = repo.name;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  })
  .catch(error => {
    container.innerText = "Erreur lors de la récupération des données.";
    console.error(error);
  });


 
