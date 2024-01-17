const services = document.getElementById('services')
const showServices = document.getElementById('show-services')
const hideServices = document.getElementById('hide-services')
const txt = `
              <div class="card-servicio">
                <img src="img/coronas.svg" alt="Prótesis Imagotipo">
                <h4>Coronas</h4>
                <p>Las coronas dentales son recomendadas cuando un diente o muela presenta una endodoncia o una destrucción.</p>
                <a href="">Ver más</a>
              </div>
              <div class="card-servicio">
                <img src="img/blanqueamiento.svg" alt="Prótesis Imagotipo">
                <h4>Blanqueamiento</h4>
                <p>El blanqueamiento dental es uno de los tratamientos preferidos por los pacientes, debido al gran cambio estético que se logra. Dientes mas blancos y brillantes en una sola cita.</p>
                <a href="">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/limpieza.svg" alt="Prótesis Imagotipo">
                <h4>Limpieza</h4>
                <p>La limpieza dental, también conocida como profilaxis, es realizada mediante ultrasonido, el cual funciona a base de vibración y agua a presión.</p>
                <a href="">Ver más</a>
              </div>
              <div class="card-servicio">
                <img src="img/endodoncia.svg" alt="Prótesis Imagotipo">
                <h4>Endodoncia</h4>
                <p>La Endodoncia, también conocida como “matar el nervio”, tiene como principal objetivo salvar el diente.</p>
                <a href="">Ver más</a>
              </div> 
            `

showServices.addEventListener('click', () => {
  services.insertAdjacentHTML('beforeend', txt)
  showServices.style.display = 'none'
  hideServices.style.display = 'flex'
})
hideServices.addEventListener('click', () => {
  services.innerHTML = `
                        <div class="card-servicio">
                          <img src="img/ortodoncia.svg" alt="Ortodoncia Imagotipo">
                          <h4>Ortodoncia</h4>
                          <p>Con la ortodoncia logramos alinear los dientes, y conseguimos una correcta relación entre los dientes superiores e inferiores.</p>
                          <a href="">Ver más</a>
                        </div>
                        <div class="card-servicio">
                          <img src="img/ortopedia.svg" alt="Ortopedia Imagotipo">
                          <h4>Ortopedia Dental</h4>
                          <p>La ortopedia está dirigida a niños entre 4 y 12 años para corregir problemas de paladar o mandíbula mediante el uso de alineadores.</p>
                          <a href="">Ver más</a>
                        </div>
                        <div class="card-servicio">
                          <img src="img/protesis.svg" alt="Prótesis Imagotipo">
                          <h4>Prótesis</h4>
                          <p>Mediante la pérdida de uno o más dientes, existe la opción de reponerlos mediante el uso de una prótesis dental fija.</p>
                          <a href="">Ver más</a>
                        </div> 
                        `
  showServices.style.display = 'flex'
  hideServices.style.display = 'none'
})
