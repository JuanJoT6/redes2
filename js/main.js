let btndark = document.getElementById('DarkM');
let btnlight = document.getElementById('LightM');

//Dark mode y light Mode
btndark.addEventListener('click', () => {
    document.body.classList.remove('light');
})

btnlight.addEventListener('click', () => {
    document.body.classList.add('light');
})


var nombre;

var fechaNacimiento;

nombre=prompt("Ingrese su nombre");

var fechaNacimiento = prompt("Ingrese fecha de nacimiento (AAAA-MM-DD):");

var fechaActual = new Date();

var fechaNacimientoObjeto = new Date(fechaNacimiento);

var diferenciaTiempo = fechaActual.getTime() - fechaNacimientoObjeto.getTime();

var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));

alert(nombre);

alert(edad);