
const API_KEY="251f938559c6bc8dfef291e571e5a97b";
async function  showWeather(){
    // let lat=15.333;
    // let lon=74.878;
    // let limit=5;
   
    const response= await fetch(`https://api.weatherapi.com/v1/search.json?key=c996dcc23b9a4606ac645002241001&q=india`);
    let data=await response.json();
    console.log(data);
    let np=document.createElement('p');
    
    document.body.appendChild(np);
}
console.log(showWeather());