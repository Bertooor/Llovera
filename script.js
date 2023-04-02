const API_KEY = "6dcfbe4f5d769224af0c28453d74d3e7";

const climaPosicionUsuario = async (posicion) => {
  const { latitude, longitude } = posicion.coords;

  const respuesta = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );

  const datos = await respuesta.json();
  console.log("datos: ", datos);

  const section = document.querySelector("section");

  const ul = document.createElement("ul");

  ul.innerHTML = `
    <li>${new Date(datos.dt * 1000).toLocaleString()} ${datos.name}, ${
    datos.sys.country
  }</li>
    <li>${datos.main.temp}°C</li>
    <img src=${`https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`} alt='icono tiempo'/>
  `;

  section.append(ul);

  const respuesta2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );

  const datos2 = await respuesta2.json();
  console.log("datos2: ", datos2);

  const ul2 = document.createElement("ul");

  ul2.innerHTML = `
    <li>${
      datos2.list[1].dt_txt
    } <img src=${`https://openweathermap.org/img/wn/${datos2.list[1].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[1].main.temp
  } </li>
  <li>${
    datos2.list[3].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[3].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[3].main.temp
  } </li>
  <li>${
    datos2.list[5].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[5].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[5].main.temp
  } </li>
<li>${
    datos2.list[7].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[7].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[7].main.temp
  } </li>
<li>${
    datos2.list[15].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[15].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[15].main.temp
  } </li>
<li>${
    datos2.list[23].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[23].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[23].main.temp
  } </li>
<li>${
    datos2.list[31].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[31].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[31].main.temp
  } </li>
<li>${
    datos2.list[39].dt_txt
  } <img src=${`https://openweathermap.org/img/wn/${datos2.list[39].weather[0].icon}@2x.png`} alt='icono tiempo' /> ${
    datos2.list[39].main.temp
  } </li>
  `;

  section.append(ul2);
};

const geolocalizacion = () => {
  window.navigator.geolocation.getCurrentPosition(climaPosicionUsuario);
};
geolocalizacion();
