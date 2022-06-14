const colores = ["Negro", "Blanco", "Gris"]
console.log(colores);

colores.push("Rojo");
console.log(colores);

colores.pop()
console.log(colores)

colores.forEach(function (el, index){
    console.log('<li id="$(index)">$(el)</li>');
});