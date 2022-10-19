
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzMZdfFraNbK8Nw-adC9Fki0osHL2ywK4",
  authDomain: "firstproject-f8ccf.firebaseapp.com",
  projectId: "firstproject-f8ccf",
  storageBucket: "firstproject-f8ccf.appspot.com",
  messagingSenderId: "530174847018",
  appId: "1:530174847018:web:8ca918f7141267dd48fb53",
  measurementId: "G-5FXNLH6P7B"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//accesing the firebase data

function din(){
  const a=document.getElementById("laha").value;
  const output=a.toLowerCase();
  var addr = ref(db,output);
  onValue(addr, (snapshot)=>{
      const data = snapshot.val();
      let a1=data.a;
      let a2=data.b;
      let a3=data.c;
      let a4=data.d;
      weather.fetchWeather(a1);
      weather1.fetchWeather(a2);
      weather2.fetchWeather(a3);
      weather3.fetchWeather(a4);
}    )} 

var subbut = document.getElementById('submit')
subbut.addEventListener('click'|| 'Enter', submitpressed);
function submitpressed() {
  const a=document.getElementById("laha").value;
  const output=a.toLowerCase();
  if(output==="andhra pradesh"){
     din();
         }
  else if(output==='hyderabad'){
    din();
  }
  else if(output==='punjab'){
    din();
  }
  else if(output==='arunachal pradesh'){
    din();
  }
  else if(output==='assam'){
    din();
  }
  else if(output==='bihar'){
    din();
  }
  else if(output==='chhattisgarh'){
    din();
  }
  else if(output==='goa'){
    din();
  }
  else if(output==='gujarat'){
    din();
  }
  else if(output==='haryana'){
    din();
  }
  else if(output==='himachal pradesh'){
    din();
  }
  else if(output==='jharkhand'){
    din();
  }
  else if(output==='karnataka'){
    din();
  }
  else if(output==='kerala'){
    din();
  }
  else if(output==='madhya pradesh'){
    din();
  }
  else if(output==='maharashtra'){
    din();
  }
  else if(output==='manipur'){
    din();
  }
  else if(output==='meghalaya'){
    din();
  }
  else if(output==='mizoram'){
    din();
  }
  else if(output==='nagaland'){
    din();
  }
  else if(output==='odisha'){
    din();
  }
  else if(output==='rajasthan'){
    din();
  }
  else if(output==='sikkim'){
    din();
  }
  else if(output==='tamil nadu'){
    din();
  }
  else if(output==='tripura'){
    din();
  }
  else if(output==='uttar pradesh'){
    din();
  }
  else if(output==='uttarakhand'){
    din();
  }
  else if(output==='west bengal'){
    din();
  }
    else{
            alert("not vaild state in india plz reenter");
      } }
    let weather1 = {
      apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
          return response.json();
        })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city1").innerText = "Weather in " + name;
        document.querySelector(".icon1").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".temp1").innerText = temp + "°C";
        document.querySelector(".humidity1").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind1").innerText =
          "Wind speed: " + speed + " km/h";
          document.querySelector(".weather1").classList.remove("loading");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
    };
    let weather2 = {
      apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
          return response.json();
        })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city2").innerText = "Weather in " + name;
        document.querySelector(".icon2").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".temp2").innerText = temp + "°C";
        document.querySelector(".humidity2").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind2").innerText =
          "Wind speed: " + speed + " km/h";
          document.querySelector(".weather2").classList.remove("loading");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
    };
   
    let weather3 = {
      apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
          return response.json();
        })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city3").innerText = "Weather in " + name;
        document.querySelector(".icon3").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description3").innerText = description;
        document.querySelector(".temp3").innerText = temp + "°C";
        document.querySelector(".humidity3").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind3").innerText =
          "Wind speed: " + speed + " km/h";
          document.querySelector(".weather3").classList.remove("loading");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
    };
    
    let weather = {
      apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
          return response.json();
        })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
          document.querySelector(".weather").classList.remove("loading");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
    };
    
