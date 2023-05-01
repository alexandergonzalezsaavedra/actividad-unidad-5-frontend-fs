const calificacionUsuarios = document.querySelector('#calificacionUsuarios')
const formulariocomentariosUsuario = document.querySelector("#formulariocomentariosUsuario")
const comentariosUsuarios = document.querySelector('#comentariosUsuarios')
const templateComentariosProducto = document.querySelector('#templateComentariosProducto')
const fragment = document.createDocumentFragment();

const datos = []
let calificacionData = []

formulariocomentariosUsuario.addEventListener("submit", (e) => {
   e.preventDefault()
   let dataForm = new FormData(formulariocomentariosUsuario)
   let resData = {
      "nombre": dataForm.get("nombre"),
      "comentario": dataForm.get("comentario"),
      "calificacion": dataForm.get("dataCalificacion")
   }
   datos.push(resData)
   calificacionData.push(dataForm.get("dataCalificacion"))
   console.log(calificacionData)
   let sumaCalificacion = calificacionData.reduce((a, b) => a + b / calificacionData.length, 0)
   let calificacion = Math.trunc(sumaCalificacion)
   console.log(sumaCalificacion)
   console.log(calificacion)
   // Pintar comentarios segunda opción con template
   const clonarTemplateComentariosProducto = templateComentariosProducto.content.cloneNode(true)
   clonarTemplateComentariosProducto.querySelector('.nombreUsuario span').textContent = resData.nombre
   clonarTemplateComentariosProducto.querySelector('.comentarioUsuario span').textContent = resData.comentario
   clonarTemplateComentariosProducto.querySelector('.calificacionUsuario span').textContent = resData.calificacion
   fragment.appendChild(clonarTemplateComentariosProducto)
   comentariosUsuarios.appendChild(fragment)

   // Pintar comentarios segunda opción con innerHTML
   // comentariosUsuarios.innerHTML += `
   // <div class='row'>
   // <div class='col-sm-4'>
   //    <p>
   //    <strong>
   //    Usuario:
   //    </strong>
   //    <br>
   //    ${resData.nombre}
   //    </p>
   // </div>
   // <div class='col-sm-4'>
   //    <p>
   //    <strong>
   //    Comentario:
   //    </strong>
   //    <br>
   //    ${resData.comentario}
   //    </p>
   // </div>
   // <div class='col-sm-4'>
   //    <p>
   //    <strong>
   //    calificacion:
   //    </strong>
   //    <br>
   //    ${resData.calificacion}
   //    </p>
   // </div>
   // </div>
   // `

   if (calificacion == 1) {
      calificacionUsuarios.innerHTML = `
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      `
   }
   else if (calificacion == 2) {
      calificacionUsuarios.innerHTML = `
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      `
   }
   else if (calificacion == 3) {
      calificacionUsuarios.innerHTML = `
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-gris"></i>
      <i class="fas fa-star texto-gris"></i>
      `
   }
   else if (calificacion == 4) {
      calificacionUsuarios.innerHTML = `
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-gris"></i>
      `
   }
   else if (calificacion == 5 && calificacion >= 4.5) {
      calificacionUsuarios.innerHTML = `
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      <i class="fas fa-star texto-dorado"></i>
      `
   }
})

console.log(datos)

// function myFunction() {
//    var element = document.getElementById("myDIV");
//    element.classList.toggle("mystyle");
// }