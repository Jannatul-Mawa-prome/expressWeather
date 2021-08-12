
 const date = new Date();

 function day() {
   var weekday = new Array(7);
   weekday[0] = "Sun";
   weekday[1] = "Mon";
   weekday[2] = "Tue";
   weekday[3] = "Wed";
   weekday[4] = "Thu";
   weekday[5] = "Fri";
   weekday[6] = "Sat";
   return weekday[date.getDay()];
 }

 function dateTime() {
   var month = new Array();
   month[0] = "January";
   month[1] = "February";
   month[2] = "March";
   month[3] = "April";
   month[4] = "May";
   month[5] = "June";
   month[6] = "July";
   month[7] = "August";
   month[8] = "September";
   month[9] = "October";
   month[10] = "November";
   month[11] = "December";
   return month[date.getMonth()];
 }

 const curDate = date.getDate();
//  day();
//  dateTime();

 const curDay = document.getElementById('day')
 const todayDate = document.getElementById('today_date');
 const getCityName = document.getElementById('cityName');
 const city = document.getElementById('city');
 const search = document.getElementById('search');
 const tempIcon = document.getElementById('tempIcon');
 const temp = document.getElementById('temp');

 curDay.innerHTML = `${day()}`;
 todayDate.innerHTML = `${curDate} ${dateTime()}`;


 const getData = async(event) => {
  event.preventDefault();
  let cityName = getCityName.value;
  if(cityName === ""){
    cityName.innerHTML = 'Please Write your City Name'
  }
  else{
    const respons =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6db5f4a787a17f4a0246e16e08e69d2e`);
    const jesonData =await respons.json();
    const objData = [jesonData];
    console.log(objData[0].weather[0].main);
    const weatherSymbol = objData[0].weather[0].main;
    const celsius = parseInt(objData[0].main.temp) - 273.15;
    const intCelsius = parseInt(celsius)


    if(weatherSymbol == 'Rain'){
      tempIcon.innerHTML = '<i class="fas fa-cloud-rain"></i>'
    }
    else if (weatherSymbol == "Haze") {
      tempIcon.innerHTML = `<i class='fas fa-sun'></i>`;
    }
    else if (weatherSymbol == "Clouds") {
      tempIcon.innerHTML = '<i class="fas fa-cloud"></i>';
    } 
    else{
      tempIcon.innerHTML = '<i class="fas fa-cloud"></i>';
    }

    temp.innerHTML =`<p>${intCelsius}<sup>0</sup>C</p>` ;
    city.innerText = `${objData[0].name}, ${objData[0].sys.country}`

    



    getCityName.value ='';
  }

 }
 search.addEventListener('click',getData)

