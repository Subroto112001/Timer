const display = document.getElementById("display");


let count = 0;
let inerval = setInterval(() => {
    display.innerHTML = count++;
    if (count > 30) {
        clearInterval(inerval);
    }
},1000)