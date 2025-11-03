// let input = document.getElementById("ville");
//     let button = document.getElementById("chercher");
//     let resultat = document.getElementById("resultat");

//     button.addEventListener("click", function() {
//       let ville = input.value.trim();
//       if (ville === "") return;
//       resultat.style.display='block';

//       resultat.innerHTML = "Chargement...";

//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=cba765bb7b83e524c283714e35c3791e&units=metric&lang=fr`)
//         .then(response => response.json())
//         .then(data => {
//           // if (data.cod !== 200) {
//           //   resultat.innerHTML = `Erreur: ${data.message}`;
//           //   return;
//           // }

//           resultat.innerHTML = `
//             <h2>Météo pour ${data.name}</h2>
//             <p>Température: ${data.main.temp} °C</p>
//             <p>Temps: ${data.weather[0].description}</p>
//             <p>Humidité: ${data.main.humidity}%</p>
//           `;
//         })
//         .catch(err => {
//           resultat.innerHTML = "Erreur lors de la récupération des données.";
//           console.error(err);
//         });
//     });


let input = document.getElementById("ville");
let bouton = document.getElementById("chercher");
let resultat = document.getElementById("resultat");

bouton.addEventListener("click", () => {
  let ville = input.value.trim();
  if (!ville) return alert("Veuillez entrer une ville !");

  resultat.style.display = 'block';
  resultat.innerHTML = `<p>Chargement en cours...</p>`;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=cba765bb7b83e524c283714e35c3791e&units=metric&lang=fr`)
    .then(res => {
      if (!res.ok) throw new Error("Ville introuvable");
      return res.json();
    })
    .then(data => {
      // أيقونة الطقس من OpenWeatherMap
      let iconCode = data.weather[0].icon;
      let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      resultat.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}" class="weather-icon">
        <p><strong>Température :</strong> ${Math.round(data.main.temp)} °C</p>
        <p><strong>Condition :</strong> ${data.weather[0].description}</p>
        <p><strong>Humidité :</strong> ${data.main.humidity}%</p>
        <p><strong>Vent :</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      resultat.innerHTML = `<p style="color:#e74c3c;">Erreur : ${err.message}</p>`;
    });
});

// دعم Enter
input.addEventListener("keypress", e => e.key === "Enter" && bouton.click());