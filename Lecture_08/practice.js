let div = document.querySelector(".hello");
let Ev = document.querySelector(".Event")
let Event = document.querySelector(".AddEvent")

div.onmouseover = () => {

    console.log("hello world");
    confirm("hello world")
}


//  Event Object

  Ev.onmouseover = (e) => {

    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX , e.clientY)

  }



//   Event Listener


 Event.addEventListener("click", (evt) => {
    
    console.log("Button 1 was clicked - handler1")
 })

 Event.addEventListener("click", (evt) => {

    console.log("Button 1 was clicked - handler2")
 })

 Event.addEventListener("click", (evt) => {

    console.log("Button 1 was clicked - handler3")
 })

  const handler = () => {
      console.log("Buton 2 was clicked")
  }

 Event.addEventListener("click",handler )


//  Light And Dark Mode 

let currmode = "light";

let mode = document.querySelector(".mode");
mode.style.background = "black"
mode.style.color = "white"
mode.addEventListener("click",() => {
    if(currmode === "light") {
        currmode = "dark";
        mode.style.background = "white"
        mode.style.color = "black"
        document.querySelector("body").style.background = "black";
        document.querySelector("body").style.color = "white";
    }else {
        currmode = "light";
        document.querySelector("body").style.background = "white"
        document.querySelector("body").style.color = "black"
        mode.style.background = "black"
        mode.style.color = "white"
    }
    console.log(currmode);
})

Swift = document.querySelector(".Swift");




