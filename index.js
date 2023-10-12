"use strict"

//this function returns the element by ID
function $(id) {
    return document.getElementById(id);
}

const addName = () => {
    let name = ["Y", "o", "h", "a", "n", " ", ".", ".", ".", "."];
    let myInterval = setInterval(()=>{
        if(name.length >= 1) {
            $("devName").innerHTML += name[0];
            name.shift();
        }
        if(name.length == 0) {
            clearInterval(myInterval);
            addOccupation($("devName").innerHTML);
        }
    }, 150);
}
const addOccupation = (str) => {
    let arrName = [];
    let occupation = ["a", " ", "F", "u", "l", "l", " ", "S", "t", "a", "c", "k"," ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

    //gets the devName
    for(let i = 0; i < str.length; i++) {
        arrName.push(str[i]);
    }

    let myInterval = setInterval(()=>{
        //if statement to delete the name
        if(arrName.length >= 1) {
            arrName.pop();
            let newName = ""
            for(let i = 0 ;i < arrName.length; i++) {
                newName += arrName[i];
            }
            $("devName").innerHTML = newName;
        } else {
            clearInterval(myInterval);
            //once empty add the occupation
            if($("devName").innerHTML.length == 0) {
                let mySecInterval = setInterval(()=>{
                    if(occupation.length >= 1) {
                        $("devName").innerHTML += occupation[0];
                        occupation.shift();
                    }
                    if(occupation.length == 0) {
                        clearInterval(mySecInterval);
                    }
                }, 150);
            }
        }
    }, 150)
}

let toggle = (x) => {
    x.classList.toggle("change");
    if($("nav-links").classList.contains("hide")) {
        $("nav-links").classList.remove("hide");
    } else {
        $("nav-links").classList.add("hide");
    }
}

window.onload = ()=> {
    $("home-desktop").style.opacity = "0.4";
    addName();
    addOccupation($("devName").textContent);

    let interval = setInterval(()=>{
        $("devName").innerHTML = "";
        addName();
        addOccupation($("devName").innerHTML);
    }, 9000);

    clearInterval(interval);

    $("blog").onclick = () => {
        window.alert("Sorry!\nProject section is not ready...\nCheck coding challeneges")    
    }
    $("movie-pro").onclick = () => {
        window.alert("Sorry!\nProject section is not ready...\nCheck coding challeneges")    
    }
}
window.onscroll = () => {
    if(window.pageYOffset > 5) {
        $("nav").style.backgroundColor = "black";
    }
    else {
        $("nav").style.background = "none";
    }
    
    if(window.screen.width >= 768 & window.screen.width <= 1044) {
        console.log(window.pageYOffset + " >=768");
        if(window.pageYOffset <= 5) {
            $("home-desktop").style.opacity = "0.7";
        } else {
            $("home-desktop").style.opacity = "1";    
        }
        if(window.pageYOffset > 1644 & window.pageYOffset < 3152) {
            $("project-desktop").style.opacity = "0.7";
        } else {
            $("project-desktop").style.opacity = "1";    
        }

        if(window.pageYOffset > 3152) {
            $("contact-desktop").style.opacity = "0.7";
        } else {
            $("contact-desktop").style.opacity = "1";
        }
    }

    if(window.screen.width >= 1045) {
        if(window.pageYOffset <= 5) {
            $("home-desktop").style.opacity = "0.7";
        } else {
            $("home-desktop").style.opacity = "1";    
        }
        if(window.pageYOffset > 1490 & window.pageYOffset < 2789) {
            $("project-desktop").style.opacity = "0.7";
        } else {
            $("project-desktop").style.opacity = "1";    
        }

        if(window.pageYOffset > 2789) {
            $("contact-desktop").style.opacity = "0.7";
        } else {
            $("contact-desktop").style.opacity = "1";
        }
    }
    
}

$("nav-links").onclick = () => {
    if(!$("nav-links").classList.contains("hide")) {
        $("nav-links").classList.add("hide");
    }
    $("icon-con").classList.remove("change");
}
