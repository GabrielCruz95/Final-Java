const myForm= document.querySelector(`#my-form`)
const inputNombre= myForm.querySelector('input[type=text]')
const inputTelefono= myForm.querySelector('input[type=number]')
const inputEmail= myForm.querySelector('input[type=email]')
const inputConsulta= myForm.querySelector('input[type=text]')
const botonenviar= document.querySelector(`#botoncons`)

const consultas = JSON.parse(localStorage.getItem('consultas')) || []

if(consultasLS !== null){
    consultas=consultasLS
}
botonenviar.addEventListener('click',()=>{
    Swal.fire({
        icon: 'success',
        title: 'Consulta enviada correctamente',
      })
})
myForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const consulta={
        nombre:inputNombre.value,
        telefono:inputTelefono.value,
        email:inputEmail.value,
        inputConsulta:inputConsulta.value
    }
    
    consultas.push(consulta)
    localStorage.setItem('consultas',JSON.stringify(consultas))
    myForm.reset()
    console.log(consultas)
    const consultasConten=document.querySelector('#consultas1')
    let ultimaconsulta= consultas[consultas.length - 1]
    const li=document.createElement('li')
    li.innerHTML=`
    <p> NOMBRE: ${ultimaconsulta.nombre} </h4>
    <p> TELEFONO: ${ultimaconsulta.telefono} </p>
    <p> EMAIL: ${ultimaconsulta.email} </p>
    <p> SU CONSULTA: ${ultimaconsulta.consulta} </p>
    `
    consultasConten.append(li)
})

