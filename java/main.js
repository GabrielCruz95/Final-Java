const button= document.querySelector('#consulta')





function registrarPaciente(){
    class Paciente{
        constructor(nombre,dni,email){
            this.nombre= nombre;
            this.dni=dni;
            this.email=email;
        };
        mostrarDatos(){
            alert("Datos del paciente registrado:\nNombre: "+ this.nombre +"\nDNI: "+ this.dni +"\nEmail: "+ this.email);
        };
    }; 
    let n=prompt("Ingrese un nombre: ");
    let d=parseInt(prompt("Ingrese el Dni: "));
    let e=prompt("Ingrese el email: ");
    let pacientes= new Paciente(n,d,e);
    pacientes.mostrarDatos();
    let listaPacientes=[];
    listaPacientes.push(pacientes);
    alert(JSON.stringify(listaPacientes));
}
function buscar(){
    let bus= False;
    let bdni=parseInt(prompt("ingrese el dni a buscar: "));
    bus=listaPacientes.some((pacientes)=>pacientes.dni===bdni);
    if (bus===True){
        alert("Existe el paciente");

    }else{
        alert("No existe el paciente");
    };
};
function consultaPrecio(){
    do{
        alert("Servicios para consultar precios aprox:\n1-Ortodoncia\n2-Extraccion de diente\n3-Protesis\n4-salir")
        n = parseInt(prompt("Ingrese alguna opcion:"));
        switch(n){
            case 1: 
                ortodoncia();
                break;
            case 2: 
                extraccion();
                break;
            case 3: 
                protesis();
                break;
            case 4: 
                alert("Saliendo.");
                break;
            default: 
                alert("Ingrese una opcion correcta");
                break;
        }
    }while(n != 4);
}
function ortodoncia(){
    let iva= 1.2;
    let ortodon=35600;
    let resul= ortodon * iva;
    alert("El precio para la ortodoncia es: "+ resul +" Pesos Argentinos. Precio efectivo : "+ ortodon + " Pesos Argentinos");
}
function extraccion(){
    alert("Que diente esta interesado en extraccion: 1-molar 2-premolar 3-incisivos 4-caninos");
    let n = parseInt(prompt("Ingrese una opcion: "));
    let can= 5000;
    let molar= 10000;
    let inci= 6000;
    let premo= 8000;
    let iva= 1.2;
        switch(n){
            case 1: 
                let re1 = molar * iva ;
                alert("El precio por diente molar mas iva es: "+ re1 +" Pesos Argentinos. Precio efectivo : "+ molar + " Pesos Argentinos");
                break;
            case 2: 
                let re2 = premo * iva ;
                alert("El precio por diente premolar mas iva es: "+ re2 +" Pesos Argentinos. Precio efectivo : "+ premo + " Pesos Argentinos");
                break;
            case 3: 
                let re3= inci * iva ;
                alert("El precio por diente incisivo mas iva es: "+ re3 +" Pesos Argentinos. Precio efectivo : "+ inci + " Pesos Argentinos");
                break;
            case 4: 
                let re4= can * iva ;
                alert(`El precio por diente canino mas iva es: ${re4} Pesos Argentinos. Precio efectivo : ${can} Pesos Argentinos` );
                break;
            default: 
                alert("Ingrese una opcion correcta");
                break;
        }
}
function protesis(){
    alert("Que protesis desea consultar: 1-Parcial 2-Completa");
    let n= parseInt(prompt("Ingrese una opcion: "));
    let par= 20000;
    let comp= 40000;
    let iva= 1.2;
    switch(n){
        case 1:
            let re=par * iva;
            alert("El precio de la protesis parcial mas iva es: "+re+ " Pesos Argentinos. Precio en Efectivo: "+par+" Pesos Argentinos");
            break;
        case 2:
            let re2=comp * iva;
            alert("El precio de la protesis completa mas iva es: "+re2+ " Pesos Argentinos. Precio en Efectivo: "+comp+" Pesos Argentinos");
            break;
        default:
            alert("Ingrese una opcion correcta");
            break;    
    }

}

button.addEventListener('click',() => {
    let n=0;
    do{
        alert("MENU\n1*Registrar nuevo paciente\n2*Buscar paciente\n3*Consultar precios de tratamientos\n4*SALIR")
        n = parseInt(prompt("Ingrese alguna opcion:"));
        switch(n){
            case 1: 
                registrarPaciente();
                break;
            case 2: 
                buscar();
                break;
            case 3: 
                consultaPrecio();
                break;
            case 4: 
                alert("Saliendo.");
                break;
            default: 
                alert("Ingrese una opcion correcta");
                break;
        }
    }while(n != 4);
})