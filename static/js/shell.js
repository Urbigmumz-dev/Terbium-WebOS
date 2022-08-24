// import windows from "./docks.js"
let clockele = document.getElementById("time");
let ft = document.getElementById("ft");
let ftd = document.getElementById("ftd");
let ftt = document.getElementById("ftt");
let win = document.getElementById("drag");
let appsL = document.getElementById("appsL");


// clock
setInterval(function () {
    var dt = new Date();
    var h = dt.getHours().toLocaleString();
    var m = dt.getMinutes();    
    
    var ap;
    // check if it is AM or PM then set ap to the correct value
    if(h < 12) {
        ap = "AM";
    } else {
        ap = "PM";
    }
    h = ("0" + h).slice(-2);
    if(h > 13) {
        h = (h - 12);
    } else if(h == 0) {
        h = 12;
    }
    h = (h > 12) ? h - 12 : h;
    m = ("0" + m).slice(-2);
    clockele.innerHTML = h + ":" + m + " " + ap;
}, 1000)

setInterval(function() {
    var dt = new Date();
    var h = dt.getHours().toLocaleString();
    var m = dt.getMinutes();  
    var s = dt.getSeconds();
    var ap = (h < 12) ? "AM" : "PM";

    h = (h > 12) ? h - 12 : h;
    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);

    s = ("0" + s).slice(-2);

    document.getElementById("ftt").innerHTML = h + ":" + m + ":" + s + " " + ap;
}, 1000)
let closeC = document.createElement('div');
closeC.classList.add("x-clock");
closeC.classList.add("nope");
closeC.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' id='close-clock'><line x1='18' y1='6' x2='6' y2='18' /><line x1='6' y1='6' x2='18' y2='18' /></svg>";
clockele.addEventListener("click", () => {
    if(ft.classList.contains("hidden")) {
        var dt = new Date();
        ft.classList.remove("hidden");
        ft.appendChild(closeC);
        ftd.innerHTML = dt.toDateString();
    }
    document.getElementById("background").addEventListener("click", () => {
        ft.classList.add("hidden");
    });
    document.getElementById("close-clock").addEventListener("click", () => {
        var closeCC = !!document.getElementById("close-clock");
        ft.classList.add("hidden");
        if(closeCC === false) {
            ft.removeChild(closeC)
        } else {
            return
        }
    });
});

// start menu
appsL.addEventListener("click", () => {
    document.querySelector(".apps").classList.toggle("hidden");
});

// document.getElementById("yts").addEventListener("click", () => {
//     if(document.querySelector(".apps").classList.contains("op")) {
//         document.querySelector(".apps").classList.add("hidden");
//         document.querySelector(".apps").classList.remove("op");
//     }
//     document.querySelector("#appsL").classList.remove("appsIF");
//     terb(); 
//     document.getElementById('frame').src = 'sw/hvtr%3A-%2Feomgne%2Ccmm'
// });

// document.getElementById("vss").addEventListener("click", () => {
//     if(document.querySelector(".apps").classList.contains("op")) {
//         document.querySelector(".apps").classList.add("hidden");
//         document.querySelector(".apps").classList.remove("op");
//     }
//     document.querySelector("#appsL").classList.remove("appsIF");
// });

document.querySelector(".start-btn").addEventListener("click", () => {
    document.querySelector(".apps").classList.toggle("hidden");
});

// let brightTRACK = document.getElementById("brightTRACK");
// let brightVal = document.getElementById("brightVal");
// let bright = document.getElementById("bright");

// brightTRACK.oninput = function() {
//     switch(this.value) {
//         case "3":
//             bright.style.opacity = "100%";
//             brightVal.innerText = "100%";
//             break
//         case "2":
//             bright.style.opacity = "50%";
//             brightVal.innerText = "50%";
//             break
//         case "1":
//             bright.style.opacity = "10%";
//             brightVal.innerText = "10%";
//             break
//     }
// }

document.getElementById("power").addEventListener("click", () => {
    let pow = localStorage.getItem("powd");
    if(!pow) {
        window.open("https://google.com", "_self");
    } else {
        window.open(pow, "_self");
    }
})