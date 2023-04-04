export default class Alumno{
    constructor(username, DNI){
        this.username = username;
        this.Dni = Dni;
    }

    getUsername(){
        return this.username;
    }

    getDni(){
        return this.Dni;
    }
    
}