const services = document.getElementById('services')
const showServices = document.getElementById('show-services')
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
})