var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

axios.get("https://api.openweathermap.org/data/2.5/weather?q=bengaluru,in&APPID=82c5d4957b29029f35f9b7813403bc6f")
  .then(function (response) {
    console.log(response.data);
    const data = response.data;
    const cityName = data.name + ', ' + data.sys.country;
    document.querySelector(".place-name").textContent = cityName;

    const currDate = new Date(data.dt * 1000);
    const formattedDate = days[currDate.getDay()] + ', ' + currDate.toLocaleDateString();
    document.querySelector(".date").textContent = formattedDate;

    const currTemp = Math.round(data.main.temp - 273.15);
    document.querySelector(".temperature").textContent = currTemp + '°C';

    const weatherCondition = data.weather[0].main;
    document.querySelector(".condition").textContent = weatherCondition;

    const maxTemp = Math.round(data.main.temp_max - 273.15);
    const minTemp = Math.round(data.main.temp_min - 273.15);
    document.querySelector(".temp-variation").textContent = maxTemp + '°C / ' + minTemp + '°C';
  })
  .catch(function (error) {
    console.log(error);
  });

