
var First = false

try {
 First = localStorage.getItem('First') || false;
    console.log(First)
} catch (error) {
    
}
if(First=="false"){
    localStorage.setItem('First', true);

    Swal.fire({
        title: 'Alerta',
        text: "Nesesita tener conocimientos Sobre Los sistemas Numericos Hexadecimal y Binario Para usar esta aplicacion web",
        icon: 'warning',
    })

}

function funcion(){
    
    numero= document.getElementById("tomardato").value.replaceAll("1","").replaceAll("0","")
    var expreg = /[0-1]+/g;
if(  expreg.test(numero) || ( numero == "" && document.getElementById("tomardato").value != "" )) {

    numero= document.getElementById("tomardato").value.split("").reverse().join().replaceAll(",","")
    console.log(numero)
    dividir = numero.match(/.{1,4}/g);

for (let i = 0; i < dividir.length; i++) {
   
    ultima= dividir[dividir.length-1]
    cuantos=ultima.length
   
    if (cuantos==1) {
        dividir[dividir.length-1] +="000"
    }
    if (cuantos==2) {
        dividir[dividir.length-1]+="00"
    }
    if (cuantos==3) {
        dividir[dividir.length-1] +="0"
    }

}

dividir = dividir.join().replaceAll(",","").split("").reverse().join().replaceAll(",","")

dividir = dividir.match(/.{1,4}/g);

console.log(dividir)
pocicion=[8,4,2,1]

numeroFinal = ""
for (let i = 0; i < dividir.length; i++) {
  dividircadapocicion= dividir[i].split("");

  acumulador = 0
  for (let h = 0; h< dividircadapocicion.length; h++)  if (dividircadapocicion[h]=="1") acumulador += pocicion[h]


  numeroFinal += i ==  dividir.length - 1 ? acumulador : acumulador+","

    
}

numeroFinal = numeroFinal.split(",")

numeroFinal = numeroFinal.map(function(element, index, array){

    return element.replaceAll("10","A").replaceAll("11","B").replaceAll("12","C").replaceAll("13","D").replaceAll("14","E").replaceAll("15","F");

});
    console.log(numeroFinal)
    numeroFinal = numeroFinal.join().replaceAll(",","")
    document.getElementById("input2").value = numeroFinal
}else{

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Solo numero binarios'
      })
}

}



window.addEventListener('beforeunload', function (e) {
    localStorage.setItem('First', false);
});
setInterval(() => {
  
   
    document.getElementById("tomardato").value = ""+document.getElementById("tomardato").value.replaceAll("e","")
    
    
}, -100);