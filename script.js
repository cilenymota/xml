

// function result(){
// var total=10;
//     var puntos=0;
//     var myForm=document.forms["quizForm"];
//     var respuestas=["b", "a"];

//     for(var i=1; i<=total; i++){
//         if(myForm["p"+i].value === null||myForm["p"+i].value === ""){
//             alert("Please answer the question "+i);
//             return false;
//         }else{
//             if(myForm["p"+i].value === respuestas[i-1]){
//                 puntos++;
//             }
//         }
//     }

// var resultado=document.getElementById("resultado");
// resultado.innerHTML='<h3>Obtuviste<span>'+puntos+'</span> de <span>'+total+'puntos</span></h3>';

// return false;
// }
function result() {
    document.getElementsByClassName('container')[0];
    
    
    var puntos = 0;
    if (document.getElementById('correct1').checked) {
        puntos++;
    }
    if (document.getElementById('correct2').checked) {
        puntos++;
    }
    if (document.getElementById('correct3').checked) {
        puntos++;
    }
    if (document.getElementById('correct4').checked) {
        puntos++;
    }
    if (document.getElementById('correct5').checked) {
        puntos++;
    }
    if (document.getElementById('correct6').checked) {
        puntos++;
    }
    if (document.getElementById('correct7').checked) {
        puntos++;
    }
    if (document.getElementById('correct8').checked) {
        puntos++;
    }
    if (document.getElementById('correct9').checked) {
        puntos++;
    }
    if (document.getElementById('correct10').checked) {
        puntos++;
    }
    if (document.getElementById('correct11').checked) {
        puntos++;
    }

document.getElementById("resultado").innerHTML ='<h3> Obtuviste '+ puntos+ ' / 11 puntos.<h3>';



   }