<<<<<<< HEAD
// Memilih elemen-elemen HTML dengan menggunakan DOM API
const inputBox = document.querySelector(".input-box"); // Input kotak
const searchBtn = document.getElementById("searchBtn"); // Tombol pencarian
const weather_img = document.querySelector(".weather-img"); // Gambar cuaca
const temperature = document.querySelector(".temperature"); // Temperatur
const description = document.querySelector(".description"); // Deskripsi cuaca
const humidity = document.getElementById("humidity"); // Kelembaban
const wind_speed = document.getElementById("wind-speed"); // Kecepatan angin

const location_not_found = document.querySelector(".location-not-found"); // Pesan "Lokasi Tidak Ditemukan"

const weather_body = document.querySelector(".weather-body"); // Wadah informasi cuaca

// Fungsi async untuk memeriksa cuaca berdasarkan nama kota
async function checkWeather(city) {
    const api_key = "1d50d2d83785cdfdd7cbbb56c8b889e8"; // API Key OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; // URL API

    // Mengambil data cuaca dari API dengan fetch
    const weather_data = await fetch(`${url}`).then((response) =>
        response.json()
    );

    // Memeriksa apakah data cuaca valid
    if (weather_data.cod === `404`) {
        // Jika tidak valid, tampilkan pesan "Lokasi Tidak Ditemukan" dan sembunyikan informasi cuaca
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    // Jika data cuaca valid, tampilkan informasi cuaca
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    // Menampilkan informasi temperatur dan deskripsi cuaca
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    // Menampilkan informasi kelembaban dan kecepatan angin
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    // Mengubah gambar cuaca berdasarkan jenis cuaca
    switch (weather_data.weather[0].main) {
        case "Clouds":
            weather_img.src = "/assets/cloud.png";
            break;
        case "Clear":
            weather_img.src = "/assets/clear.png";
            break;
        case "Rain":
            weather_img.src = "/assets/rain.png";
            break;
        case "Mist":
            weather_img.src = "/assets/mist.png";
            break;
        case "Snow":
            weather_img.src = "/assets/snow.png";
            break;
    }

    console.log(weather_data);
}

// Menambahkan event listener pada tombol pencarian
searchBtn.addEventListener("click", () => {
    // Memanggil fungsi checkWeather dengan input kota dari pengguna
    checkWeather(inputBox.value);
});
=======
// Memilih elemen-elemen HTML dengan menggunakan DOM API
const inputBox = document.querySelector(".input-box"); // Input kotak
const searchBtn = document.getElementById("searchBtn"); // Tombol pencarian
const weather_img = document.querySelector(".weather-img"); // Gambar cuaca
const temperature = document.querySelector(".temperature"); // Temperatur
const description = document.querySelector(".description"); // Deskripsi cuaca
const humidity = document.getElementById("humidity"); // Kelembaban
const wind_speed = document.getElementById("wind-speed"); // Kecepatan angin

const location_not_found = document.querySelector(".location-not-found"); // Pesan "Lokasi Tidak Ditemukan"

const weather_body = document.querySelector(".weather-body"); // Wadah informasi cuaca

// Fungsi async untuk memeriksa cuaca berdasarkan nama kota
async function checkWeather(city) {
    const api_key = "1d50d2d83785cdfdd7cbbb56c8b889e8"; // API Key OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; // URL API

    // Mengambil data cuaca dari API dengan fetch
    const weather_data = await fetch(`${url}`).then((response) =>
        response.json()
    );

    // Memeriksa apakah data cuaca valid
    if (weather_data.cod === `404`) {
        // Jika tidak valid, tampilkan pesan "Lokasi Tidak Ditemukan" dan sembunyikan informasi cuaca
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    // Jika data cuaca valid, tampilkan informasi cuaca
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    // Menampilkan informasi temperatur dan deskripsi cuaca
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    // Menampilkan informasi kelembaban dan kecepatan angin
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    // Mengubah gambar cuaca berdasarkan jenis cuaca
    switch (weather_data.weather[0].main) {
        case "Clouds":
            weather_img.src = "/assets/cloud.png";
            break;
        case "Clear":
            weather_img.src = "/assets/clear.png";
            break;
        case "Rain":
            weather_img.src = "/assets/rain.png";
            break;
        case "Mist":
            weather_img.src = "/assets/mist.png";
            break;
        case "Snow":
            weather_img.src = "/assets/snow.png";
            break;
    }

    console.log(weather_data);
}

// Menambahkan event listener pada tombol pencarian
searchBtn.addEventListener("click", () => {
    // Memanggil fungsi checkWeather dengan input kota dari pengguna
    checkWeather(inputBox.value);
});
>>>>>>> 7c93f8dbf8ee831339173cb779430a2be34e9cf2
