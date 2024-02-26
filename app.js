const countersEl = document.querySelectorAll(".counter");


countersEl.forEach(counterEl=>{
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        console.log(dataCeil);
        const increment = dataCeil/15;
        console.log("increment",increment);
        currentNum += Math.ceil(increment);
        counterEl.innerText = currentNum;
        if(currentNum < dataCeil){
            setTimeout(incrementCounter, 100)
        }else{
            counterEl.innerText=dataCeil
        }
    }

});