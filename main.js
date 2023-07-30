const PI = 3.1416;

let areaCirculo;

let radio = 4;

areaCirculo = PI *  (radio * radio);
//document.write(areaCirculo);

//areaCiruculo es Pi * radioCirculoalcuadrado

radio = 10;
areaCirculo = PI *(radio * radio);
//document.write(areaCirculo);
//document es el docmuento html al que esta ligado el archivo 
//el operador punto me permite acceder a propiedades o métodos (acciones) del elemento
// write es un método (función que le pertence a alguien)

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Xareni Bernal Salgado')
  .pauseFor(300)
  .deleteChars(10)
  .start();