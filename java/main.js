//Fetch para buscar precios de tratamientos
const modalOpen = document.querySelector('#modal-open')
const modalClose = document.querySelector('#modal-close')
const modalContainer = document.querySelector('#modal-container')
const form=document.querySelector('#buscar')
const input=document.querySelector('#numero')
const precioContainer=document.querySelector('#precio-container')
modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('modal-container-active')
})
modalClose.addEventListener('click',()=> {
    modalContainer.classList.remove('modal-container-active')
})
const llamarPrecio= (id) => {
    fetch(`./json/data.json/${id}`)
    .then((resp)=> resp.json())
    .then((data)=> {
        const {nombre,precio}= data
        precioContainer.innerHTML=`
        <h2> ${nombre} </h2>
        <h2> $ ${precio} </h2>
        `
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const value= input.value
    if(value === '') return
    llamarPrecio(value)
})
//Registro
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

const button= document.querySelector('#consulta')

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

