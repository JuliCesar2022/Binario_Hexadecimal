function funcion(){
numero = document.getElementById("tomardato").value.replaceAll("0","").replaceAll("1","").replaceAll("2","").replaceAll("3","").replaceAll("4","").replaceAll("5","").replaceAll("6","").replaceAll("7","").replaceAll("8","").replaceAll("9","")
validar = true;
listaCaracteres = numero.split("")
for(let i = 0; i <= listaCaracteres.length -1;i++ )  if( listaCaracteres[i] != "A" && listaCaracteres[i] != "a" && listaCaracteres[i] != "B" && listaCaracteres[i] != "b" && listaCaracteres[i] != "C"&&listaCaracteres[i] != "c"&&listaCaracteres[i] != "D"&&listaCaracteres[i] != "d"&&listaCaracteres[i] != "E"&&listaCaracteres[i] != "e"&&listaCaracteres[i] != "F"&&listaCaracteres[i] != "f") validar = false
if( validar ){
numero = document.getElementById("tomardato").value
suma=""
dividir= numero.split("")
dividir = dividir.map(function(element, index, array){
    return element.replaceAll("a","10").replaceAll("b","11").replaceAll("c","12").replaceAll("d","13").replaceAll("e","14").replaceAll("f","15");
});
dividir = dividir.map(function(element, index, array){
    return element.replaceAll("A","10").replaceAll("B","11").replaceAll("C","12").replaceAll("D","13").replaceAll("E","14").replaceAll("F","15");
});

potencias=[8,4,2,1]
for (let i = 0; i <dividir.length ; i++) {
 
    for (let j = 0; j < 4 ; j++) {
        if (dividir[i]>=potencias[j]) {
            console.log(dividir[i])
            suma+="1"
            acomularsuma =dividir[i]-potencias[j]
            dividir[i]=acomularsuma
          } else{
            suma+="0"
          }
        
    }
  }
   
console.log(suma)
document.getElementById("input2").value = suma
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Solo numeros hexadecimales'
  })
}
}
