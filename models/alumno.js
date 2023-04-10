export default class Alumno{
    constructor(username, DNI){
        this.username = username;
        this.Dni = Dni;
    }

    mostrar(){
        return ("Nombre del alumno: " + this.username + " - DNI: " + this.DNI);
    }
}