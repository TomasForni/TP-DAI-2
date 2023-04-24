import Alumno from "../models/alumno.js";

let alumno1 = new Alumno("RIcardo Fort", 20567533)
let alumno2 = new Alumno("Mauro Ezequiel Lombardo", 9389580);;
console.log(alumno1.mostrar() + " // " + alumno2.mostrar());