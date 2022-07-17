    const dateday2 = new Date();
    const day2 = dateday2.getDate();
    const month2 = dateday2.getMonth() ;
    const year2 = dateday2.getFullYear();

    const dateday3 = new Date();
    const day3 = dateday3.getDate();
    const month3 = dateday3.getMonth() ;
    const year3 = dateday3.getFullYear();

    const dateday4 = new Date();
    const day4 = dateday4.getDate();
    const month4 = dateday4.getMonth() ;
    const year4 = dateday4.getFullYear();

    const dateday5 = new Date();
    const day5 = dateday5.getDate();
    const month5 = dateday5.getMonth() ;
    const year5 = dateday5.getFullYear();

    const dateday6 = new Date();
    const day6 = dateday6.getDate();
    const month6 = dateday6.getMonth() ;
    const year6 = dateday6.getFullYear();

    const dateday7 = new Date();
    const day7 = dateday7.getDate();
    const month7 = dateday7.getMonth();
    const year7 = dateday7.getFullYear();

    const dateday8 = new Date();
    const day8 = dateday8.getDate();
    const month8 = dateday8.getMonth();
    const year8 = dateday8.getFullYear();

// GEVGELIJA---------------------------------------------------------------------------------------------------------------------------------
 //API CALL
 let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
 let lat = "lat=41.14&";
 let lon = "lon=22.5&";
 let apiOptions = "cnt=16&units=metric&exclude=minutely,alerts&";
 let apiKey = "appid=7c32874f3cb64088fc73e74d957291bc";
 let file = queryUrl + lat + lon + apiOptions + apiKey;

 fetch(file)
 .then((response) => response.json())
 .then((data) => {
  //Weather main data
  let main = data.current.weather[0].main;
  let description = data.current.weather[0].description;
 let temp = Math.round(data.current.temp);
  let pressure = data.current.pressure;
  let humidity = data.current.humidity;
  let name = "<b style='font-size:35px;  font-family: cursive;'>GEVGELIJA</b>";

  document.getElementById("wrapper-description").innerHTML = description;
   document.getElementById("wrapper-temp").innerHTML = temp + "°C"; 
   document.getElementById("wrapper-pressure").innerHTML = pressure;
   document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
   document.getElementById("wrapper-name").innerHTML = name;

  //Weather hourly data 
  let hourNow = Math.round(data.hourly[0].temp);
   let hour1 = Math.round(data.hourly[1].temp); 
   let hour2 = Math.round(data.hourly[2].temp);
   let hour3 = Math.round(data.hourly[3].temp);
   let hour4 = Math.round(data.hourly[4].temp);
   const hour5 = Math.round(data.hourly[5].temp);

   document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
   document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
   document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
   document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
   document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
   document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

 //TIME
   let timeNow = new Date().getHours();
   let time1 = timeNow + 1;
   let time2 = time1 + 1;
   let time3 = time2 + 1;
   let time4 = time3 + 1;
   const time5 = time4 + 1;
   document.getElementById("wrapper-time1").innerHTML = time1;
   document.getElementById("wrapper-time2").innerHTML = time2;
   document.getElementById("wrapper-time3").innerHTML = time3;
   document.getElementById("wrapper-time4").innerHTML = time4;
   document.getElementById("wrapper-time5").innerHTML = time5;

   // Weather daily data 

   //ICONS
   let iconBaseUrl =  "http://openweathermap.org/img/wn/";
   let iconFormat = ".png";

   // TODAY
   if(temp > 25 || (description == "rain")){
      document.getElementById("today").innerHTML = "Today";
      document.getElementById("wrapper-forecast-temp-today").innerHTML = temp + "°";
      let iconCodeToday = data.current.weather[0].icon;
      let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
      document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;
   }
   //Tomorrow
   let tomorrowTemp = Math.round(data.daily[0].temp.day);
   let descriptiontt = data.daily[0].weather[0].description;
   if(tomorrowTemp > 25 ||( descriptiontt == "rain" )){
        document.getElementById("tomorrow").innerHTML = "Tomorrow";
        document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML = tomorrowTemp + "°";
        let iconCodeTomorrow = data.daily[0].weather[0].icon;
        let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
        document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;
   }
   //Day After Tomorrow
   let dATTemp = Math.round(data.daily[1].temp.day);
   let descriptiondat = data.daily[1].weather[0].description;
   if(dATTemp > 25 || (descriptiondat == "rain")){
        document.getElementById("date-day2").innerHTML = day2+2 + "." + month2 + "." + year2;
        document.getElementById("wrapper-forecast-temp-dAT").innerHTML = dATTemp + "°";
        let iconCodeDAT = data.daily[1].weather[0].icon;
        let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
        document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;
   }
   //DAY 3
   let day3Temp = Math.round(data.daily[2].temp.day);
   let description3 = data.daily[2].weather[0].description;
   if(day3Temp > 25 || (description3 == "rain")){
        document.getElementById("date-day3").innerHTML = day3+3 + "." + month3 + "." + year3;
        document.getElementById("wrapper-forecast-temp-3").innerHTML = day3Temp + "°";
        let iconCode3 = data.daily[2].weather[0].icon;
        let iconFullyUrl3 = iconBaseUrl + iconCode3 + iconFormat;
        document.getElementById("wrapper-icon-3").src = iconFullyUrl3;
   }
   //DAY 4
   let day4Temp = Math.round(data.daily[3].temp.day);
   let description4 = data.daily[3].weather[0].description;
   if(day4Temp > 25 || (description4 == "rain")){
        document.getElementById("date-day4").innerHTML = day4+4 + "." + month4 + "." + year4;
        document.getElementById("wrapper-forecast-temp-4").innerHTML = day4Temp + "°";
        let iconCode4 = data.daily[3].weather[0].icon;
        let iconFullyUrl4 = iconBaseUrl + iconCode4 + iconFormat;
        document.getElementById("wrapper-icon-4").src = iconFullyUrl4;
   }
    //DAY 5
    let day5Temp = Math.round(data.daily[4].temp.day);
    let description5 = data.daily[4].weather[0].description;
    if(day5Temp > 25 || (description5 == "rain")){
          document.getElementById("date-day5").innerHTML = day5+5 + "." + month5 + "." + year5;
          document.getElementById("wrapper-forecast-temp-5").innerHTML = day5Temp + "°";
          let iconCode5 = data.daily[4].weather[0].icon;
          let iconFullyUrl5 = iconBaseUrl + iconCode5 + iconFormat;
          document.getElementById("wrapper-icon-5").src = iconFullyUrl5;
    }
   //DAY 6
   let day6Temp = Math.round(data.daily[5].temp.day);
   let description6 = data.daily[5].weather[0].description;
   if(day6Temp > 25 || (description6 == "rain")){
          document.getElementById("date-day6").innerHTML = day6+6 + "." + month6+ "." + year6;
          document.getElementById("wrapper-forecast-temp-6").innerHTML = day6Temp + "°";
          let iconCode6 = data.daily[5].weather[0].icon;
          let iconFullyUrl6 = iconBaseUrl + iconCode6 + iconFormat;
          document.getElementById("wrapper-icon-6").src = iconFullyUrl6;
   }
   //DAY 7
   let day7Temp = Math.round(data.daily[6].temp.day);
   let description7 = data.daily[6].weather[0].description;
   if(day7Temp > 25 || (description7 == "rain")){
        document.getElementById("date-day7").innerHTML = day7+7 + "." + month7 + "."+ year7;
        document.getElementById("wrapper-forecast-temp-7").innerHTML = day7Temp + "°";
        let iconCode7 = data.daily[6].weather[0].icon;
        let iconFullyUrl7 = iconBaseUrl + iconCode7 + iconFormat;
        document.getElementById("wrapper-icon-7").src = iconFullyUrl7;
   }
   //DAY 8
   let day8Temp = Math.round(data.daily[7].temp.day);
   let description8 = data.daily[7].weather[0].description;
   if(day8Temp > 25 || (description8 == "rain")){
        document.getElementById("date-day8").innerHTML = day8+8 + "." + month8 + "."+ year8;
        document.getElementById("wrapper-forecast-temp-8").innerHTML = day8Temp + "°";
        let iconCode8 = data.daily[7].weather[0].icon;
        let iconFullyUrl8 = iconBaseUrl + iconCode8 + iconFormat;
        document.getElementById("wrapper-icon-8").src = iconFullyUrl8;
   }
   //ICONS HOURLY

   //HOUR NOW
   let iconHourNow = data.hourly[0].weather[0].icon;
   let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat ;
   document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;

   //HOUR1
   let iconHour1 = data.hourly[1].weather[0].icon;
   let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
   document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

   //HOUR2
   let iconHour2 = data.hourly[2].weather[0].icon;
   let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
   document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour2;

    //HOUR3
    let iconHour3 = data.hourly[3].weather[0].icon;
   let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
   document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

    //HOUR4
    let iconHour4 = data.hourly[4].weather[0].icon;
   let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
   document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

   //HOUR 5
   const iconHour5 = data.hourly[5].weather[0].icon;
   const iconFullyHour5 = iconBaseUrl + iconHour5 + iconFormat;
   document.getElementById("wrapper-icon-hour5").src = iconFullyHour5;

   //BACKGROUNDS
   
   switch(main){
     case "Snow":
       document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/snow.jpg')";
       break;
     case "Clouds":
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/cloud.jpg')";
       break;
       case "Fog":
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/fog.jpg')";
       break;
       case "Rain":
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/rain.jpg')";
       break;
       case "Clear":
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
       case "Thunderstorm":
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/thunderstorm.jpg')";
       break;
     default:
     document.getElementById("wrapper-bg").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
   }

 });

 // STRUMICA-----------------------------------------------------------------------------------------------------------------------------------
 //API CALL
 let queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?";
 let lat2 = "lat=41.437801&";
 let lon2 = "lon=22.642742&";
 let apiOptions2 = "cnt=16&units=metric&exclude=minutely,alerts&";
 let apiKey2 = "appid=7c32874f3cb64088fc73e74d957291bc";
 let file2 = queryUrl2 + lat2 + lon2 + apiOptions2 + apiKey2;

 fetch(file2)
 .then((response) => response.json())
 .then((data) => {
  //Weather main data
  let main2 = data.current.weather[0].main;
  let description2 = data.current.weather[0].description;
  let temp2 = Math.round(data.current.temp);
  let pressure2 = data.current.pressure;
  let humidity2 = data.current.humidity;
  let name2 = "<b style='font-size:35px;  font-family: cursive;'>STRUMICA</b>";

  document.getElementById("wrapper-description2").innerHTML = description2;
   document.getElementById("wrapper-temp2").innerHTML = temp2 + "°C"; 
   document.getElementById("wrapper-pressure2").innerHTML = pressure2;
   document.getElementById("wrapper-humidity2").innerHTML = humidity2 + "°C";
   document.getElementById("wrapper-name2").innerHTML = name2;

  //Weather hourly data 
  let hourNow2 = Math.round(data.hourly[0].temp);
   let hour12 = Math.round(data.hourly[1].temp); 
   let hour22 = Math.round(data.hourly[2].temp);
   let hour32 = Math.round(data.hourly[3].temp);
   let hour42 = Math.round(data.hourly[4].temp);
   let hour52 = Math.round(data.hourly[5].temp);

   document.getElementById("wrapper-hour-now2").innerHTML = hourNow2 + "°";
   document.getElementById("wrapper-hour12").innerHTML = hour12 + "°";
   document.getElementById("wrapper-hour22").innerHTML = hour22 + "°";
   document.getElementById("wrapper-hour32").innerHTML = hour32 + "°";
   document.getElementById("wrapper-hour42").innerHTML = hour42 + "°";
  document.getElementById("wrapper-hour52").innerHTML = hour52 + "°";

 //TIME
 
   let timeNow = new Date().getHours();
   let time1 = timeNow + 1;
   let time2 = time1 + 1;
   let time3 = time2 + 1;
   let time4 = time3 + 1;
  let  time5 = time4 + 1;

   document.getElementById("wrapper-time12").innerHTML = time1;
   document.getElementById("wrapper-time22").innerHTML = time2;
   document.getElementById("wrapper-time32").innerHTML = time3;
   document.getElementById("wrapper-time42").innerHTML = time4;
    document.getElementById("wrapper-time52").innerHTML = time5;

   // Weather daily data 

   //ICONS
   let iconBaseUrl2 =  "http://openweathermap.org/img/wn/";
   let iconFormat2 = ".png";

   // TODAY
   if(temp2 > 25 || (description2 == "rain")){
    document.getElementById("today2").innerHTML = "Today";
    document.getElementById("wrapper-forecast-temp-today2").innerHTML = temp2 + "°";
   let iconCodeToday2 = data.current.weather[0].icon;
   let iconFullyUrlToday2 = iconBaseUrl2 + iconCodeToday2 + iconFormat2;
   document.getElementById("wrapper-icon-today2").src = iconFullyUrlToday2;
   }
   //Tomorrow
   let tomorrowTemp2 = Math.round(data.daily[0].temp.day);
   let descriptiontt2 = data.daily[0].weather[0].description;
   if(tomorrowTemp2 > 25 || (descriptiontt2 == "rain")){
        document.getElementById("tomorrow2").innerHTML = "Tomorrow";
        document.getElementById("wrapper-forecast-temp-tomorrow2").innerHTML = tomorrowTemp2 + "°";
        let iconCodeTomorrow2 = data.daily[0].weather[0].icon;
        let iconFullyUrlTomorrow2 = iconBaseUrl2 + iconCodeTomorrow2 + iconFormat2;
        document.getElementById("wrapper-icon-tomorrow2").src = iconFullyUrlTomorrow2;
   }
   //Day After Tomorrow
   let dATTemp2 = Math.round(data.daily[1].temp.day);
   let description22 = data.daily[1].weather[0].description;
   if(dATTemp2 > 25 || (description22 == "rain")){
        document.getElementById("date-day22").innerHTML = day2+2 + "." + month2 + "." + year2;
        document.getElementById("wrapper-forecast-temp-dAT2").innerHTML = dATTemp2 + "°";
        let iconCodeDAT2 = data.daily[1].weather[0].icon;
        let iconFullyUrlDAT2 = iconBaseUrl2 + iconCodeDAT2 + iconFormat2;
        document.getElementById("wrapper-icon-dAT2").src = iconFullyUrlDAT2;
   }
   //DAY 3
   let day3Temp2 = Math.round(data.daily[2].temp.day);
   let description32 = data.daily[2].weather[0].description;
   if(day3Temp2 > 25 || (description32 == "rain")){
        document.getElementById("date-day32").innerHTML = day3+3 + "." + month3 + "." + year3;
        document.getElementById("wrapper-forecast-temp-32").innerHTML = day3Temp2 + "°";
        let iconCode32 = data.daily[2].weather[0].icon;
        let iconFullyUrl32 = iconBaseUrl2 + iconCode32 + iconFormat2;
        document.getElementById("wrapper-icon-32").src = iconFullyUrl32;
   }
   //DAY 4
   let day4Temp2 = Math.round(data.daily[3].temp.day);
   let description42 = data.daily[3].weather[0].description;
 if(day4Temp2 > 25 || (description42 == "rain")){
        document.getElementById("date-day42").innerHTML = day4+4 + "." + month4 + "." + year4;
        document.getElementById("wrapper-forecast-temp-42").innerHTML = day4Temp2 + "°";
        let iconCode42 = data.daily[3].weather[0].icon;
        let iconFullyUrl42 = iconBaseUrl2 + iconCode42 + iconFormat2;
        document.getElementById("wrapper-icon-42").src = iconFullyUrl42;
 }
    //DAY 5
    let day5Temp2 = Math.round(data.daily[4].temp.day);
    let description52 = data.daily[4].weather[0].description;
    if(day5Temp2 > 25 || (description52 == "rain")){
          document.getElementById("date-day52").innerHTML = day5+5 + "." + month5 + "." + year5;
          document.getElementById("wrapper-forecast-temp-52").innerHTML = day5Temp2 + "°";
          let iconCode52 = data.daily[4].weather[0].icon;
         let iconFullyUrl52 = iconBaseUrl2 + iconCode52 + iconFormat2;
         document.getElementById("wrapper-icon-52").src = iconFullyUrl52;
    }
   //DAY 6
   let day6Temp2 = Math.round(data.daily[5].temp.day);
   let description62 = data.daily[5].weather[0].description;
   if(day6Temp2 > 25 || (description62 == "rain")){
        document.getElementById("date-day62").innerHTML = day6+6 + "." + month6+ "." + year6;
        document.getElementById("wrapper-forecast-temp-62").innerHTML = day6Temp2 + "°";
        let iconCode62 = data.daily[5].weather[0].icon;
        let iconFullyUrl62 = iconBaseUrl2 + iconCode62 + iconFormat2;
        document.getElementById("wrapper-icon-62").src = iconFullyUrl62;
   }
   //DAY 7
   let day7Temp2 = Math.round(data.daily[6].temp.day);
   let description72 = data.daily[6].weather[0].description;
   if(day7Temp2 > 25 || (description72 == "rain")){
        document.getElementById("date-day72").innerHTML = day7+7 + "." + month7 + "."+ year7;
        document.getElementById("wrapper-forecast-temp-72").innerHTML = day7Temp2 + "°";
        let iconCode72 = data.daily[6].weather[0].icon;
        let iconFullyUrl72 = iconBaseUrl2 + iconCode72 + iconFormat2;
        document.getElementById("wrapper-icon-72").src = iconFullyUrl72;
   }
   //DAY 8
   let day8Temp2 = Math.round(data.daily[7].temp.day);
   let description82 = data.daily[7].weather[0].description;
   if(day8Temp2 > 25 || (description82 == "rain")){
        document.getElementById("date-day82").innerHTML = day8+8 + "." + month8 + "."+ year8;
        document.getElementById("wrapper-forecast-temp-82").innerHTML = day8Temp2 + "°";
        let iconCode82 = data.daily[7].weather[0].icon;
        let iconFullyUrl82 = iconBaseUrl2 + iconCode82 + iconFormat2;
        document.getElementById("wrapper-icon-82").src = iconFullyUrl82;
   }
   //ICONS HOURLY

   //HOUR NOW
   let iconHourNow2 = data.hourly[0].weather[0].icon;
   let iconFullyUrlHourNow2 = iconBaseUrl2 + iconHourNow2 + iconFormat2 ;
   document.getElementById("wrapper-icon-hour-now2").src = iconFullyUrlHourNow2;

   //HOUR1
   let iconHour12 = data.hourly[1].weather[0].icon;
   let iconFullyUrlHour12 = iconBaseUrl2 + iconHour12 + iconFormat2;
   document.getElementById("wrapper-icon-hour12").src = iconFullyUrlHour12;

   //HOUR2
   let iconHour22 = data.hourly[2].weather[0].icon;
   let iconFullyUrlHour22 = iconBaseUrl2 + iconHour22 + iconFormat2;
   document.getElementById("wrapper-icon-hour22").src = iconFullyUrlHour22;

    //HOUR3
    let iconHour32 = data.hourly[3].weather[0].icon;
   let iconFullyUrlHour32 = iconBaseUrl2 + iconHour32 + iconFormat2;
   document.getElementById("wrapper-icon-hour32").src = iconFullyUrlHour32;

    //HOUR4
    let iconHour42 = data.hourly[4].weather[0].icon;
   let iconFullyUrlHour42 = iconBaseUrl2 + iconHour42 + iconFormat2;
   document.getElementById("wrapper-icon-hour42").src = iconFullyUrlHour42;

    //HOUR5
     let iconHour52 = data.hourly[5].weather[0].icon;
     let iconFullyUrlHour52 = iconBaseUrl2 + iconHour52 + iconFormat2;
    document.getElementById("wrapper-icon-hour52").src = iconFullyUrlHour52;

   //BACKGROUNDS
   switch(main2){
     case "Snow":
       document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/snow.jpg')";
       break;
     case "Clouds":
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/cloud.jpg')";
       break;
       case "Fog":
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/fog.jpg')";
       break;
       case "Rain":
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/rain.jpg')";
       break;
       case "Clear":
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
       case "Thunderstorm":
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/thunderstorm.jpg')";
       break;
     default:
     document.getElementById("wrapper-bg2").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
   }

 });

 //DOJRAN-----------------------------------------------------------------------------------------------------------------------------------------------------
 //API CALL
 let queryUrl3 = "https://api.openweathermap.org/data/2.5/onecall?";
 let lat3 = "lat=41.1792&";
 let lon3 = "lon=22.642742&";
 let apiOptions3 = "cnt=16&units=metric&exclude=minutely,alerts&";
 let apiKey3 = "appid=7c32874f3cb64088fc73e74d957291bc";
 let file3 = queryUrl3 + lat3 + lon3 + apiOptions3 + apiKey3;

 fetch(file3)
 .then((response) => response.json())
 .then((data) => {
  //Weather main data
  let main3 = data.current.weather[0].main;
  let description3 = data.current.weather[0].description;
  let temp3 = Math.round(data.current.temp);
  let pressure3 = data.current.pressure;
  let humidity3 = data.current.humidity;
  let name3 = "<b style='font-size:35px;  font-family: cursive;'>DOJRAN</b>";

  document.getElementById("wrapper-description3").innerHTML = description3;
   document.getElementById("wrapper-temp3").innerHTML = temp3 + "°C"; 
   document.getElementById("wrapper-pressure3").innerHTML = pressure3;
   document.getElementById("wrapper-humidity3").innerHTML = humidity3 + "°C";
   document.getElementById("wrapper-name3").innerHTML = name3;

  //Weather hourly data 
  let hourNow3 = Math.round(data.hourly[0].temp);
   let hour13 = Math.round(data.hourly[1].temp); 
   let hour23 = Math.round(data.hourly[2].temp);
   let hour33 = Math.round(data.hourly[3].temp);
   let hour43 = Math.round(data.hourly[4].temp);
   const hour53 = Math.round(data.hourly[5].temp);

   document.getElementById("wrapper-hour-now3").innerHTML = hourNow3 + "°";
   document.getElementById("wrapper-hour13").innerHTML = hour13 + "°";
   document.getElementById("wrapper-hour23").innerHTML = hour23 + "°";
   document.getElementById("wrapper-hour33").innerHTML = hour33 + "°";
   document.getElementById("wrapper-hour43").innerHTML = hour43 + "°";
  document.getElementById("wrapper-hour53").innerHTML = hour53 +  "°";

 //TIME
   let timeNow = new Date().getHours();
   let time1 = timeNow + 1;
   let time2 = time1 + 1;
   let time3 = time2 + 1;
   let time4 = time3 + 1;
   const time5 = time4 + 1;
   document.getElementById("wrapper-time13").innerHTML = time1;
   document.getElementById("wrapper-time23").innerHTML = time2;
   document.getElementById("wrapper-time33").innerHTML = time3;
   document.getElementById("wrapper-time43").innerHTML = time4;
  document.getElementById("wrapper-time53").innerHTML = time5;

   // Weather daily data 

   //ICONS
   let iconBaseUrl3 =  "http://openweathermap.org/img/wn/";
   let iconFormat3 = ".png";

   // TODAY
   if(temp3 > 25 || (description3 == "rain")){
        document.getElementById("today3").innerHTML = "Today";
        document.getElementById("wrapper-forecast-temp-today3").innerHTML = temp3 + "°";
        let iconCodeToday3 = data.current.weather[0].icon;
        let iconFullyUrlToday3 = iconBaseUrl3 + iconCodeToday3 + iconFormat3;
        document.getElementById("wrapper-icon-today3").src = iconFullyUrlToday3;
   }
   //Tomorrow
   let tomorrowTemp3 = Math.round(data.daily[0].temp.day);
   let descriptiontt3 = data.daily[0].weather[0].description;
  if(tomorrowTemp3 > 25 || (descriptiontt3 == "rain")){
        document.getElementById("tomorrow3").innerHTML = "Tomorrow";
        document.getElementById("wrapper-forecast-temp-tomorrow3").innerHTML = tomorrowTemp3 + "°";
        let iconCodeTomorrow3 = data.daily[0].weather[0].icon;
        let iconFullyUrlTomorrow3 = iconBaseUrl3 + iconCodeTomorrow3 + iconFormat3;
        document.getElementById("wrapper-icon-tomorrow3").src = iconFullyUrlTomorrow3;
  }
   //Day After Tomorrow
   let dATTemp3 = Math.round(data.daily[1].temp.day);
   let description23 = data.daily[1].weather[0].description;
   if(dATTemp3 > 25 || (description23 == "rain")){
        document.getElementById("date-day23").innerHTML = day2+2 + "." + month2 + "." + year2;
        document.getElementById("wrapper-forecast-temp-dAT3").innerHTML = dATTemp3 + "°";
        let iconCodeDAT3 = data.daily[1].weather[0].icon;
        let iconFullyUrlDAT3 = iconBaseUrl3 + iconCodeDAT3 + iconFormat3;
        document.getElementById("wrapper-icon-dAT3").src = iconFullyUrlDAT3;
   }
   //DAY 3
   let day3Temp3 = Math.round(data.daily[2].temp.day);
   let description33 = data.daily[2].weather[0].description;
   if(day3Temp3 > 25 || (description33 == "rain")){
        document.getElementById("date-day33").innerHTML = day3+3 + "." + month3 + "." + year3;
        document.getElementById("wrapper-forecast-temp-33").innerHTML = day3Temp3 + "°";
        let iconCode33 = data.daily[2].weather[0].icon;
        let iconFullyUrl33 = iconBaseUrl3 + iconCode33 + iconFormat3;
        document.getElementById("wrapper-icon-33").src = iconFullyUrl33;
   }
   //DAY 4
   let day4Temp3 = Math.round(data.daily[3].temp.day);
   let description43 = data.daily[3].weather[0].description;
   if(day4Temp3 > 25 || (description43 == "rain")){
        document.getElementById("date-day43").innerHTML = day4+4 + "." + month4 + "." + year4;
        document.getElementById("wrapper-forecast-temp-43").innerHTML = day4Temp3 + "°";
        let iconCode43 = data.daily[3].weather[0].icon;
        let iconFullyUrl43 = iconBaseUrl3 + iconCode43 + iconFormat3;
        document.getElementById("wrapper-icon-43").src = iconFullyUrl43;
   }
    //DAY 5
    let day5Temp3 = Math.round(data.daily[4].temp.day);
    let description53 = data.daily[4].weather[0].description;
    if(day5Temp3 > 25 || (description53 == "rain")){
          document.getElementById("date-day53").innerHTML = day5+5 + "." + month5 + "." + year5;
          document.getElementById("wrapper-forecast-temp-53").innerHTML = day5Temp3 + "°";
          let iconCode53 = data.daily[4].weather[0].icon;
          let iconFullyUrl53 = iconBaseUrl3 + iconCode53 + iconFormat3;
          document.getElementById("wrapper-icon-53").src = iconFullyUrl53;
    }
   //DAY 6
   let day6Temp3 = Math.round(data.daily[5].temp.day);
   let description63 = data.daily[5].weather[0].description;
    if(day6Temp3 > 25 || (description63 == "rain")){
        document.getElementById("date-day63").innerHTML = day6+6 + "." + month6+ "." + year6;
        document.getElementById("wrapper-forecast-temp-63").innerHTML = day6Temp3 + "°";
        let iconCode63 = data.daily[5].weather[0].icon;
        let iconFullyUrl63 = iconBaseUrl3 + iconCode63 + iconFormat3;
        document.getElementById("wrapper-icon-63").src = iconFullyUrl63;
    }
   //DAY 7
   let day7Temp3 = Math.round(data.daily[6].temp.day);
   let description73 = data.daily[6].weather[0].description;
   if(day7Temp3 > 25 || (description73 == "rain")){
        document.getElementById("date-day73").innerHTML = day7+7 + "." + month7 + "."+ year7;
        document.getElementById("wrapper-forecast-temp-73").innerHTML = day7Temp3 + "°";
        let iconCode73 = data.daily[6].weather[0].icon;
        let iconFullyUrl73 = iconBaseUrl3 + iconCode73 + iconFormat3;
        document.getElementById("wrapper-icon-73").src = iconFullyUrl73;
   }
   //DAY 8
   let day8Temp3 = Math.round(data.daily[7].temp.day);
   let description83 = data.daily[7].weather[0].description;
   if(day8Temp3 > 25 || (description83 == "rain")){
        document.getElementById("date-day83").innerHTML = day8+8 + "." + month8 + "."+ year8;
        document.getElementById("wrapper-forecast-temp-83").innerHTML = day8Temp3 + "°";
        let iconCode83 = data.daily[7].weather[0].icon;
        let iconFullyUrl83 = iconBaseUrl3 + iconCode83 + iconFormat3;
        document.getElementById("wrapper-icon-83").src = iconFullyUrl83;
   }
   //ICONS HOURLY

   //HOUR NOW
   let iconHourNow3 = data.hourly[0].weather[0].icon;
   let iconFullyUrlHourNow3 = iconBaseUrl3 + iconHourNow3 + iconFormat3 ;
   document.getElementById("wrapper-icon-hour-now3").src = iconFullyUrlHourNow3;

   //HOUR1
   let iconHour13 = data.hourly[1].weather[0].icon;
   let iconFullyUrlHour13 = iconBaseUrl3 + iconHour13 + iconFormat3;
   document.getElementById("wrapper-icon-hour13").src = iconFullyUrlHour13;

   //HOUR2
   let iconHour23 = data.hourly[2].weather[0].icon;
   let iconFullyUrlHour23 = iconBaseUrl3 + iconHour23 + iconFormat3;
   document.getElementById("wrapper-icon-hour23").src = iconFullyUrlHour23;

    //HOUR3
    let iconHour33 = data.hourly[3].weather[0].icon;
   let iconFullyUrlHour33 = iconBaseUrl3 + iconHour33 + iconFormat3;
   document.getElementById("wrapper-icon-hour33").src = iconFullyUrlHour33;

    //HOUR4
    let iconHour43 = data.hourly[4].weather[0].icon;
   let iconFullyUrlHour43 = iconBaseUrl3 + iconHour43 + iconFormat3;
   document.getElementById("wrapper-icon-hour43").src = iconFullyUrlHour43;

   //HOUR5
   let iconHour53 = data.hourly[5].weather[0].icon;
   const iconFullyUrlHour53 = iconBaseUrl3 + iconHour53 + iconFormat3;
   document.getElementById("wrapper-icon-hour53").src = iconFullyUrlHour53;

   //BACKGROUNDS
   switch(main3){
     case "Snow":
       document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/snow.jpg')";
       break;
     case "Clouds":
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/cloud.jpg')";
       break;
       case "Fog":
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/fog.jpg')";
       break;
       case "Rain":
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/rain.jpg')";
       break;
       case "Clear":
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
       case "Thunderstorm":
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/thunderstorm.jpg')";
       break;
     default:
     document.getElementById("wrapper-bg3").style.backgroundImage = 
       "url('img/clear.jpg')";
       break;
   }

 });
