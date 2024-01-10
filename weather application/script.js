
const API_key="251f938559c6bc8dfef291e571e5a97b";
async function  showWeather(){
    try{
        const lat=30.6510;
        let lon=76.3293;
           
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
        let data=await response.json();
        console.log(data);
        let newPara=document.createElement('p');
        newPara.textContent=    ` ${data?.main?.temp.toFixed(2)}`;
        document.body.appendChild(newPara);

    }
    catch(err){
        console.log("this is error")

    }
   
}

