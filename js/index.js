let productos


function filtroBotones(){
fetch("./js/JMK.JSON")
    .then(response => response.json())
    .then(json => console.log(json))

}
filtroBotones()