let h1 = document.getElementById("myname")
console.log(h1);
let lists = document.getElementsByClassName("mylist")
console.dir(lists);


let firstel = document.querySelector("#myname")
console.dir(firstel)

// innertex,innerhtml

let nm = document.querySelector("#myname")
nm.innerHTML = "<i> Rifat al mamun</i>"
console.log(nm);

// for getting attribute or class name


let btn = document.querySelector("button");
console.log(btn.getAttribute("id"));

let list = document.querySelector("li");
console.log(list.getAttribute("class"));

// for set new class name

let lsts = document.querySelector("li")
console.log(lsts.setAttribute("class", "mylistsss"))
console.log(lsts.getAttribute("class"))

lsts.style.color = "red"

// for creating any element through javascript 

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<h1> Biography of Biplob </h1>"
newHeading.style.color = "black";
newHeading.style.alignItems = "center";
newHeading.style.display = "flex";
newHeading.style.justifyContent = "center";

document.querySelector("body").prepend(newHeading)


// Events

let mainbody = document.querySelector("#main");
  mainbody.onmouseover = () => {
  mainbody.innerHTML = "<button> click this button </button> "
  console.log("You are inside main body ") 
};

//Events objects
  mainbody.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
  };

 // Eventlistener 

mainbody.addEventListener("click",()=>{
      console.log("Click for a first time -handle 01") 
});
mainbody.addEventListener("click",()=>{
  console.log("Click for a first time -handle 02") 
});
  

const mainbdy=()=>{                                 // have to makeing  a function for remove 
  console.log("Click for a first time -handle 03") 
};
  
mainbody.addEventListener("click".mainbdy)

mainbody.removeEventListener("click",mianbdy);