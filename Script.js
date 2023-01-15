let result = document.getElementById("result");
let searchBtn = document.getElementById("search-Btn");
let cityRef = document.getElementById("city");

// function to fectch Wether Details

let getWeather = () =>{
    let cityValue = cityRef.value;
    // if I/p feild is Empty 
    if(cityValue.length==0){
        result.innerHTML=`<h3> please enter a city name </h3>`;
    }
    else{
        let url=`https://api.openweathermap.org/data
        /2.5weather?q=${cityValue}&appid=${key}&
        units=metric`;
        fetch(url)
            .then((resp)=resp.json())
            // if City name is Valid 
            .then((data)=>{ 
            console.log(data);
            console.log(data.weather[0].icon);
            })
            .catch(()=>{
                result.innerHTML=`<h3> City Not Found </h3>`
            })
    }
}
