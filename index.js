const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=21935393364530c5d1a3f98d4b34225f&q=";
const searchBox=document.querySelector(".InputContainer input");
const searchBtn=document.querySelector(".InputContainer button");
async function checkWeather(city)
{
  const response=await fetch(apiUrl +city);
  if(response.status==404)
  {
    alert("Invalid Name");
  }
  else
  {
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".atmos").innerHTML=data.weather[0].main;
    document.querySelector(".hi-low").innerHTML=Math.round(data.main.temp_max)+"°C / "+Math.round(data.main.temp_min)+"°C";
    const datee=new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    document.querySelector(".date").innerHTML=days[datee.getDay()]+" "+datee.getDate()+" "+months[datee.getMonth()];

  }
}

searchBtn.addEventListener("click",()=>{
  
  checkWeather(searchBox.value);
  
});

searchBox.addEventListener("keypress",function(event){
  if(event.key=="Enter")
  checkWeather(searchBox.value);});
