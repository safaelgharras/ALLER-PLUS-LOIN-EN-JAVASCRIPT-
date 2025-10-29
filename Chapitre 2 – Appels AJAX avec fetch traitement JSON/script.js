fetch('https://api.github.com/users/founticode')
  .then(response => response.json())
  .then(data => {
    console.log("Données reçues :", data);
  })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });
