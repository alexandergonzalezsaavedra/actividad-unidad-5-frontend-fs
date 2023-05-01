const calificacionUsuarios = document.querySelector('#calificacionUsuarios')
const formulariocomentariosUsuario = document.querySelector("#formulariocomentariosUsuario")
const comentariosUsuarios = document.querySelector('#comentariosUsuarios')
const ultimosComentariosUsuarios = document.querySelector("#ultimosComentariosUsuarios")
const templateComentariosProducto = document.querySelector('#templateComentariosProducto')
const templateUltimosComentariosProducto = document.querySelector("#templateUltimosComentariosProducto")
const fragment = document.createDocumentFragment();
//agregar
const formularioAgregarAlCarrito = document.querySelector("#agregarAlCarrito");

const datos = []
let calificacionData = []
formulariocomentariosUsuario.addEventListener("submit", (e) => {
   e.preventDefault()
   //obtener fecha y hora
   let date = new Date()
   let hora = date.getHours()
   let minuto = date.getMinutes()
   let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear()
   // obtener valores de formulario
   let dataForm = new FormData(formulariocomentariosUsuario)
   let resData = {
      "nombre": dataForm.get("nombre"),
      "comentario": dataForm.get("comentario"),
      "calificacion": dataForm.get("dataCalificacion"),
      "fechaHora": output + ' ' + hora + ':' + minuto
   }
   datos.push(resData)
   let saveString = JSON.stringify(datos);
   localStorage.setItem('comentariosGuardados', saveString)
   // Pintar comentarios segunda opción con template
   const clonarTemplateComentariosProducto = templateComentariosProducto.content.cloneNode(true)
   clonarTemplateComentariosProducto.querySelector('.nombreUsuario span').textContent = resData.nombre
   clonarTemplateComentariosProducto.querySelector('.fechaComentario span').textContent = resData.fechaHora
   clonarTemplateComentariosProducto.querySelector('.comentarioUsuario span').textContent = resData.comentario
   clonarTemplateComentariosProducto.querySelector('.calificacionUsuario span').textContent = resData.calificacion

   fragment.appendChild(clonarTemplateComentariosProducto)
   comentariosUsuarios.appendChild(fragment)
   let sumaCalificacion = calificacionData.reduce((a, b) => a + b / calificacionData.length, 0)
   let calificacion = Math.trunc(sumaCalificacion)
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
const pintarStorage = () => {
   let comentarios = localStorage.getItem('comentariosGuardados');
   let storageComentarios = JSON.parse(comentarios)
   storageComentarios.map(item => {
      calificacionData.push(item.calificacion)
      const clonartemplateUltimosComentariosProducto = templateUltimosComentariosProducto.content.cloneNode(true)
      clonartemplateUltimosComentariosProducto.querySelector('.nombreUsuario span').textContent = item.nombre
      clonartemplateUltimosComentariosProducto.querySelector('.fechaComentario span').textContent = item.fechaHora
      clonartemplateUltimosComentariosProducto.querySelector('.comentarioUsuario span').textContent = item.comentario
      clonartemplateUltimosComentariosProducto.querySelector('.calificacionUsuario span').textContent = item.calificacion
      fragment.appendChild(clonartemplateUltimosComentariosProducto)
   })
   ultimosComentariosUsuarios.appendChild(fragment)
}
console.log(calificacionData)
pintarStorage()
const pintarCalificacion = () => {
   let sumaCalificacion = calificacionData.reduce((a, b) => a + b / calificacionData.length, 0)
   let calificacion = Math.trunc(sumaCalificacion)
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
}
pintarCalificacion()


// agregar al carrito

let infoCompra = []
formularioAgregarAlCarrito.addEventListener("click", (e) => {
   e.preventDefault()
   let dataForm = new FormData(formularioAgregarAlCarrito)
   let resData = {
      "id": 1,
      "nombreProducto": "Arnes",
      "cantidad": dataForm.get("cantidad"),
      "color": dataForm.get("color")
   }
   console.log(resData)
})