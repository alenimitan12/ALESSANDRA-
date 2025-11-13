// Cache the DOM 
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")


// Add event listener
button.addEventListener("click", altaViata)

//Define function
function altaViata()
 {
         nume.innerHTML = "Software Engineer"
         prenume.innerHTML = "Google"

         educatie.innerHTML = "Experiente"
         astepari.innerHTML = "<ul><li>Workshops</li>
<li>Internship</li></ul>"

         img.src = "images/lion.jpg"
         img.style.opacity = "70%"
         img.style.width = "500px"
         img.style.height = "400px"
         img.style.border = "5px solid black"

}