let ecranWhite= document.getElementsByClassName("boutton1")[0]
let navBar= document.getElementsByClassName("back")[0]
let ecranBlack = document.getElementsByClassName("boutton2")[0]
let emporium = document.getElementsByClassName("emporium")[0]
let logo = document.getElementsByClassName("logo")[0]
let monA= document.getElementById("home")
let mesA = document.querySelectorAll(" .navbar-nav a")

// bouton blanc : changement du background en blanc
let changeColor= ()=> {

    emporium.style.backgroundColor="white"
    emporium.style.transition= ".9s"
    navBar.style.backgroundColor= "white"
    navBar.style.transition= ".9s"
    logo.style.color= "black"
    monA.style.color= "black"
    monA.style.fontWeight= "bold"
    for (let i=1; i<mesA.length; i++){
        mesA[i].style.color= "black"
}
}

ecranWhite.addEventListener("click", changeColor)





//boutton noir: changement du background en noir
let changeCouleur= ()=> {
    navBar.style.backgroundColor="black"
    navBar.style.transition= ".9s"
    emporium.style.backgroundColor="black"
    emporium.style.transition= ".9s"
    logo.style.color="white" 
    monA.style.color= "white"
    monA.style.fontWeight= "bold"
    for (let i=1; i<mesA.length; i++){
        mesA[i].style.color= "white"

}

}

ecranBlack.addEventListener("click", changeCouleur)

// fonction pour la NAVBAR: Apparait apres avoir parcouru sur l'axe des y , 600px

let navbar= document.getElementById("navbar")
console.log(navbar)

let rule =(b) =>{
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
                navbar.classList.add("fixed-top")
                navbar.style.backgroundColor= "white"
                navbar.style.transition= ".9s"

        }else{
                navbar.classList.remove("fixed-top")
                navbar.style.backgroundColor=  "transparent"
                navbar.style.transition= ".9s"
        
        }

}
window.addEventListener("scroll",() => {
 rule(event.currentTarget)})


//http://www.mattmorgante.com/technology/sticky-navigation-bar-javascript
      
         
//--MODAL--

let boutone= document.getElementById("btnModal")

let modal = document.getElementsByClassName("bg-modal")[0]

modalFct= () =>{
        modal.style.display = "flex"
}



boutone.addEventListener("click", modalFct)
//modal first closing x 
let croix = document.getElementsByClassName("close")[0]
console.log(croix)

let fermer =() =>{
        modal.style.display="none"
}
croix.addEventListener("click", fermer)

//modal 2

let ici = document.getElementsByClassName("ici")[0]
let modalSecond= document.getElementsByClassName("bg-modal2")[0]
// prevent defaut, c'est pour le form car il se rafrraichit automaic et je vois pas mon deuxieme modal

let modal2 =()=>{
        event.preventDefault();
        modal.style.display="none";
        modalSecond.style.display ="flex";

}

ici.addEventListener("click", modal2)

//modal second- closing x
let croix2 = document.getElementsByClassName("close2")[0]
console.log(croix)

let ferme =() =>{
        modalSecond.style.display="none"
}
croix2.addEventListener("click", ferme)



