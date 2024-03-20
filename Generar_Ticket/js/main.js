//Variables
let btn_prueba = document.getElementById("Guardar");
let btn_prenviar = document.getElementById("btn-prenviar");
let cancelar = document.getElementById("cancelar");

let btn_preenviar = document.getElementById("btn-preenviar");

/*btn_prueba.addEventListener('click', PrinLocal);
btn_guardar.addEventListener('click',(e)=>{
    e.defaultPrevented();
    let formulario = document.getElementById("formulario");
    formulario.classList.toggle("ocultar");
});*/
btn_prenviar.addEventListener('click', ()=>{
    btn_preenviar.checked = true;
});
cancelar.addEventListener('click', ()=>{
    btn_preenviar.checked = false;
})

//Guardar datos en el local Storage
function PrinLocal(){
    localStorage.setItem("correo", "ninjadiaz9@gmail.com");
    localStorage.setItem("asunto", "Ticket");

    sessionStorage.setItem("correo", "ninjadiaz9@gmail.com");
    sessionStorage.setItem("asunto", "Ticket");
}