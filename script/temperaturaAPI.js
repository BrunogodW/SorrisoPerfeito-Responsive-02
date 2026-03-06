let cidade = "sapucaia do sul";

const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=e355c23ba8adfc8a397cfe9f8a9b71fb&units=metric&lang=pt_br`;

fetch(api)
    .then((res) => res.json())
    .then((data) => {
        if (data.cod !== 200) return;
        let temp = Math.round(data.main.temp);
        let icon = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.getElementById("temp").textContent = `${temp}°C`;
        document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById("weatherIcon").alt = data.weather[0].description;
    })
    .catch(() => {
        document.getElementById("temp").textContent = "--°C";
    });