// Si un número es mínimo en su fila y máximo en su columna

function isSaddlePoint(array)
{  
   let saddlePoints = [];
   // Recorremos las filas
   for(let i = 0; i < array.length; i++) {
      minimoFila = 101;
      colMinimo = -1;
      // Buscamos el minimo en la fila
      for (let j = 0; j < array[i].length; j++)
         if(array[i][j] < minimoFila) {
            minimoFila = array[i][j];
            colMinimo = j;
         }
      //console.log(`Fila:${i} Col:${colMinimo} Minimo:${minimoFila}`)
      /* 
         Recorremos la columna en la que se encuentra el minimo en esta fila
         comprobando si, en este fila, en la columna en la que encontramos el minimo,
         ese valor es el mayor en la columna
      */
      let contador=0
      for (let k=0;k<array.length;k++) {
          if (minimoFila>=array[k][colMinimo]) 
              contador++
      }
      //console.log(`Contador:${contador}`)
      /*
         Si es el mayor, lo añadimos al array de puntos de silla
      */
      if (contador==array.length)
         saddlePoints.unshift({ptoSilla:minimoFila,
                               Fila:i,
                               Columna:colMinimo});

    }
  return saddlePoints;
}

/*
  Funcion que crea un array bidimensional (filas x columnas) rellenado con numeros 
  aleatorios con valor entre min y max
*/
const Array2D = (filas, columnas,min,max) => Array.from(
   {length: filas}, 
   () => Array.from({length: filas}, () => Math.floor(min+(max-min)*Math.random()))
)

let filas=4
let columnas=4
matriz=Array2D(filas,columnas,50,100)

tabla="<table border>"
for(i=0;i<filas;i++) {
   tabla+="<tr>"
   for(j=0;j<columnas;j++)
      tabla+=`<td style='text-align:center;padding:4px'>${matriz[i][j]}</td>`
   tabla+="</tr>"
}
tabla+="</table>"
document.write(tabla)

/*
   Cambiamos el color de fondo en los puntos de silla
*/

puntosDeSilla=isSaddlePoint(matriz)
if (puntosDeSilla.length>0)  {
   filas=document.getElementsByTagName("tr")
   puntosDeSilla.forEach((punto) =>{
      columnas=filas[punto.Fila].getElementsByTagName("td");
      columnas[punto.Columna].style.background='red'
   })
}
