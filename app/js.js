//////////////////
/// Variables ///
////////////////

    let whT= document.getElementById("whT")
    let whDescripcion= document.getElementById("whDescripcion")
    let whST= document.getElementById("whST")
    let whTm= document.getElementById("whTm")
    let whTM= document.getElementById("whTM")
    let whHumedad= document.getElementById("whHumedad")
    let whLocalidad= document.getElementById("whLocalidad")
    let whYear= document.getElementById("whYear")
    let whHours= document.getElementById("whHours") 
    let whMonth= document.getElementById("whMonth")
    let whDay= document.getElementById("whDay")
    let whButtonUbicacion= document.getElementById("whButtonUbicacion")
    let whYearMonthDay= document.getElementById("whYearMonthDay")
    let inputShowLocation = document.getElementById("inputShowLocation")
    let submitShowLocation = document.getElementById("submitShowLocation")
/////closure/////



/* | [EN PROCESO] --> call api by name |

///////////////////////////
///  GET API - by name ///
/////////////////////////

    console.log(submitShowLocation.value)
    submitShowLocation.addEventListener("click",()=>{
        //console.log(inputShowLocation.value)
    })
    
    let controladorClickCordCity = ""
    submitShowLocation.addEventListener("click",()=>{
        submitShowLocation.disabled = true
        if(controladorClickCordCity==="" || !controladorClickCordCity){
            function ajax(){
                let apiKEY = "2fdb50b51a03f3572806fcf0d88a1329"
                let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=
                ${inputShowLocation.value}
                &appid=${apiKEY}&units=metric`
                
                let xhr = new XMLHttpRequest
                
                xhr.open("get",urlAPI)
                xhr.addEventListener("load",()=>{
                    if(xhr.status===200){
                        let template = JSON.parse(xhr.response)
                        console.log(template)
                        showWeatherData(template)
                    }
                })
                xhr.send()
            }
            ajax()
            console.log("Ahre")
        }
        setTimeout(()=>{
            controladorClickCordCity = whLocalidad.innerHTML
            console.log(controladorClickCordCity)
            //linea 55, muestra el contenido escrito en el Dom
            //Aunque busque otra ubicacion en el dom figura que existe 
            //Dado como esta configurado como debe responder
            submitShowLocation.disabled = false
        },5000)
    })
    */
   
   
   
////////////////// ////////////////////////
///  GET API by latitude and longitude ///
/////////////////////////////////////////
let getlocalStorageLatN
let getlocalStorageLonN

function ajax(){
    let apiKEY = "2fdb50b51a03f3572806fcf0d88a1329"
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${getlocalStorageLatN||latitude}&lon=${getlocalStorageLonN||longitude}&appid=${apiKEY}&units=metric`
    let xhr = new XMLHttpRequest

    xhr.open("get",urlAPI)
    xhr.addEventListener("load",()=>{
        if(xhr.status===200){
            let template = JSON.parse(xhr.response)
            showWeatherData(template)
            whButtonUbicacion.remove()
        }
    })
    xhr.send()
}

let controladorClickCord = ""
whButtonUbicacion.addEventListener("click",(e)=>{
    whButtonUbicacion.disabled = true
    if(controladorClickCord==="" || !controladorClickCord){
        function getWheaterData (){
            navigator.geolocation.getCurrentPosition((success)=>{
                let {latitude, longitude} = success.coords
                   
                localStorage.setItem("latitude",latitude)
                localStorage.setItem("longitude",longitude)

                getlocalStorageLat = localStorage.getItem("latitude");
                getlocalStorageLon = localStorage.getItem("longitude");
                getlocalStorageLatN = Number(getlocalStorageLat);
                getlocalStorageLonN = Number(getlocalStorageLon);
    
                ajax()
        }) 
    }
    getWheaterData()
    ///// closure /////
    }
    setTimeout(()=>{
    controladorClickCord = whLocalidad.innerHTML
    whButtonUbicacion.disabled = true  
    },5000)
})



////////////////
///  DATE  ////
//////////////
function ageMounthDay (){
    let time = new Date ()

    // Year //
    let yearSet = time.getFullYear()
        
    // Monht //
    let month = time.getMonth()
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December" 
    ]
    let monthSet = months[month]
    
    // Day //
    let date = time.getDate()
    let getDay = time.getDay()
    const daysWeek = [
        "Sundays",
        "Mondays",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let daySet = daysWeek[getDay]

    whYearMonthDay.textContent = daySet +" "+date + ", "+ monthSet +", "+ yearSet  
}
ageMounthDay()
/////closure/////



////////////////
///  CLOCK  ///
//////////////
setInterval(()=>{
let time = new Date ()
    
// Clock //
let timeHour = time.getHours()

let timeMinutes = time.getMinutes()
if (timeMinutes < 10){timeMinutes = "0" + timeMinutes}

let timeSecond = time.getSeconds()
if (timeSecond < 10){timeSecond = "0" + timeSecond}

let clockSet = `${timeHour}:${timeMinutes}:${timeSecond}hs` 

whHours.textContent = clockSet
},1000)
/////closure/////



///////////////////////
// SHOW WHEATER DATA //
///////////////////////
function showWeatherData (data){

    // Variables //    
    let {temp,temp_max,temp_min,humidity,feels_like} = data.main
    let {name} = data
    let {country,sunrise,sunset} = data.sys
    let {description} = data.weather[0]

/*|[EN PROCESO] --> sunrise and sunset|
    let timeSunrise = new Date (sunrise*1000)
    let hourSunrise = timeSunrise.getHours()
    let minutesSunrise=timeSunrise.getMinutes()
    if (minutesSunrise < 10){minutesSunrise = "0" + minutesSunrise}
    let setSunrise = `${hourSunrise}:${minutesSunrise}hs`
    
    let timeSunset = new Date (sunset*1000)
    let hourSunset = timeSunset.getHours()
    let minutesSunset= timeSunset.getMinutes()
    if (minutesSunset < 10){minutesSunset = "0" + minutesSunset}
    let setSunset = `${hourSunset}:${minutesSunset}hs`
*/

    // Icon //
    let timeIcon = new Date ()
    let timeIconHour = timeIcon.getHours()
    let timeYear = timeIcon.getFullYear()
    let iconGetConditionWheater = data.weather[0].main
    
    let iconShowNight = {
        'Thunderstorm' : "./style/animated/thunder.svg",
        'Drizzle' : "./style/animated/rainy-2.svg",
        'Rain' : "./style/animated/rainy-7.svg",
        'Snow' : "./style/animated/snowy-6.svg",
        'Clear' : "./style/animated/night.svg",
        'Clouds' : "./style/animated/cloudy-night-1.svg",
        'Atmosphere' : "./style/animated/night.svg",
        'Mist' : "./style/animated/night.svg",
        'Smoke' : "./style/animated/night.svg",
        'Haze' : "./style/animated/night.svg",
        'Dust' : "./style/animated/night.svg",
        'Fog' : "./style/animated/night.svg",
        'Sand' : "./style/animated/night.svg",
        'Ash' : "./style/animated/night.svg",
        'Squall' : "./style/animated/night.svg",
        'Tornado' : "./style/animated/night.svg"
    }
    let iconShowDay = {
        'Thunderstorm' : "./style/animated/thunder.svg",
        'Drizzle' : "./style/animated/rainy-2.svg",
        'Rain' : "./style/animated/rainy-7.svg",
        'Snow' : "./style/animated/snowy-6.svg",
        'Clear' : "./style/animated/day.svg",
        'Clouds' : "./style/animated/cloudy-day-1.svg",
        'Atmosphere' : "./style/animated/day.svg",
        'Mist' : "./style/animated/day.svg",
        'Smoke' : "./style/animated/day.svg",
        'Haze' : "./style/animated/day.svg",
        'Dust' : "./style/animated/day.svg",
        'Fog' : "./style/animated/day.svg",
        'Sand' : "./style/animated/day.svg",
        'Ash' : "./style/animated/day.svg",
        'Squall' : "./style/animated/day.svg",
        'Tornado' : "./style/animated/day.svg"
    }

    let iconConditionWheater = timeIconHour>=19 || timeIconHour<=6 ? iconShowNight[iconGetConditionWheater] : iconShowDay[iconGetConditionWheater]

    let iconCreate = document.createElement("img")
    iconCreate.src = iconConditionWheater
    iconCreate.alt = iconGetConditionWheater
    iconCreate.style.margin = "-20px 7px"
    
    // Background-img //
    let containerBackground = document.getElementById("contBackground")
    let backgroundDecideDayNight = timeIconHour>=19 || timeIconHour<=6 ? "night" : "day"

    containerBackground.style.background = `no-repeat center fixed url(./style/img/${backgroundDecideDayNight}/${iconGetConditionWheater}.jpg)`
    containerBackground.style.backgroundSize = "cover" 
    
    // Insert Data Dom //
    whLocalidad.textContent += name +", " +country
    whT.textContent += Math.round(temp)+"°C"
    whDescripcion.textContent = description
    document.getElementById("whDescripcion").appendChild(iconCreate)
    whST.textContent += "sensacion termica: "+Math.round(feels_like)+"°C"
    whTm.textContent += "min: "+Math.round(temp_min)+"°C"
    whTM.textContent += "max: "+Math.round(temp_max)+"°C"
    whHumedad.textContent += "humedad: "+humidity + "%"
}
/////closure/////