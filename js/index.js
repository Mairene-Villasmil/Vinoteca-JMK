async function infoVinoteca() {
    let dataApi
    let productosApi
    await fetch("./js/JMK.JSON")
        .then(response => response.json())
        .then(json => dataApi = json)

    productosApi = dataApi.productos
    mostrarPage()

    for (var i = 0; i < productosApi.length; i++) {
        if (productosApi[i].tipo === "Vino") {
            vinos.push(productosApi[i])
        } else
            if (productosApi[i].tipo === "Whisky") {
                whisky.push(productosApi[i])
            } else
                if (productosApi[i].tipo === "Cerveza") {
                    cerveza.push(productosApi[i])
                } else
                    if (productosApi[i].tipo === "Gift Card") {
                        giftCard.push(productosApi[i])
                    } else
                        if (productosApi[i].tipo === "Oferta") {
                            oferta.push(productosApi[i])
                        } else
                            if (productosApi[i].tipo === "Eventos") {
                                eventos.push(productosApi[i])
                            } else {
                                recorridos.push(productosApi[i])
                            }
    }

    display(oferta)
}
infoVinoteca()

let pagInicio = document.getElementById("uno")
let arrayFiltro = []
let vinos = []
let whisky = []
let cerveza = []
let giftCard = []
let oferta = []
let eventos = []
let recorridos = []
let categoriasProductos = document.getElementById("checkboxProductos")
let buscar = ""
let carruselInicio = document.getElementById("carruselInicio")
let carruselVino = document.getElementById("carruselVino")
let carruselWhisky = document.getElementById("carruselWhisky")
let carruseCerveza = document.getElementById("carruselCerveza")
let carruselEvento = document.getElementById("carruselEventos")
let carruselRecorridos = document.getElementById("carruselRecorridos")
let direcciones = [
    {
        lugar: "CABA",
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16943.51400161281!2d-58.425220504932355!3d-34.60020707499394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca795cae367b%3A0x96a078708e4bb085!2sDesarmadero%20Bar!5e0!3m2!1ses!2sar!4v1683759291678!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
        lugar: "CORDOBA",
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28624.632049267766!2d-64.21741563022573!3d-31.414805407709338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses!2sar!4v1683759517328!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
        lugar: "SANTA FE",
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.4241771886514!2d-60.71884062466108!3d-31.62223450623227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9d3f8084a8b%3A0x1d400f128baa0e62!2sCochabamba%204598%2C%20S3002%20HCW%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1683759633597!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
        lugar: "PROVINCIA DE BUENOS AIRES",
        mapa: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d105032.1099289019!2d-58.69499071328549!3d-34.64830201189187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scaba%20de%20vino%20en%20provincia%20de%20buenos%20aires!5e0!3m2!1ses!2sar!4v1683828725633!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
        lugar: "MENDOZA",
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43890.813249035265!2d-68.87663152123213!3d-32.885394911790314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091c4d27b735%3A0x4dbe53d1205464cc!2sBodegas%20Y%20Vi%C3%B1edos%20Benedetti!5e0!3m2!1ses!2sar!4v1683828642957!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
]
let cartInfo = document.querySelector(".cart-product")
let rowProduct = document.querySelector(".row-product")
let allProducts = [] //aca se van a agregar todos los productos que se agreguen al carrito
let carritoCompras = document.getElementById("carritoCompras")
let valorTotal = document.querySelector(".total-pagar")
let contadorProductos = document.getElementById("contador-productos")

var botonesNav = document.getElementsByClassName("nav-link")
for (var i = 0; i < botonesNav.length; i++) {
    const elementos = botonesNav[i]
    elementos.addEventListener("click", function (e) {
        mostrarPage(e.target.id)
    })
}

function mostrarPage(id) {

    switch (id) {
        case "nosotros":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            pagInicio.style.display = "flex"
            pagInicio.innerHTML = `
            <section>
    <h1>NOSOTROS</h1>
    <div class="nosotros">
        <div class="galeria">
            <div class="imagen-n">
                <img src="../imagenes/socioUno.jpg" alt="">
            </div>
            <div class="video-n">
                <img src="../imagenes/ezgif.com-video-to-gif.gif" alt="">
            </div>
        </div>
        <div class="texto-n">
            <p>MJK Vinos & Algo Más
                Cuenta con cinco viñedos repartidos por los principales terroirs de la provincia de Mendoza,
                a
                los pies de la cordillera de los Andes, y todos ellos dentro de una zona privilegiada
                conocida
                como la Primera Zona, por la calidad de sus uvas.
                Con más de 30 años de experiencia en el mercado. En nuestras sucursales ubicadas
                estratégicamente en distintos puntos del país, nos esforzamos para que usted reciba una
                cordial
                atención, adecuado asesoramiento, amplio surtido de productos y excelentes precios.
                Realizamos
                degustaciones, presentaciones de productos y otras actividades para generar un vínculo con
                nuestros clientes.
            </p>
        </div>
    </div>
</section>
            `
            break;

        case "vinos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "flex"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carritoCompras.style.display = "none"
            carruselRecorridos.style.display = "none"
            arrayFiltro = vinos
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
            pagInicio.style.display = "flex"
            display(vinos)
            productosVinoteca(vinos)
            break;

        case "whisky":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "flex"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            carritoCompras.style.display = "none"
            arrayFiltro = whisky
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
            pagInicio.style.display = "flex"
            display(whisky)
            productosVinoteca(whisky)
            break;

        case "cerveza":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "flex"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            carritoCompras.style.display = "none"
            arrayFiltro = cerveza
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
            pagInicio.style.display = "flex"
            display(cerveza)
            productosVinoteca(cerveza)
            break;

        case "giftcard":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            pagInicio.style.display = "flex"
            display(giftCard)
            break;
        case "eventos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            carruselEvento.style.display = "flex"
            pagInicio.style.display = "flex"
            display(eventos)
            break;

        case "recorridos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            carruselRecorridos.style.display = "flex"
            pagInicio.style.display = "flex"
            display(recorridos)
            break;

        case "contactanos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            pagInicio.style.display = "flex"
            pagInicio.innerHTML = `
            <section>
                <div class="formApp">
                    <div class="formulario">
                        <form class="form" id="formContactanos">
                            <h1>CONTACTA CON NOSOTROS</h1>
                            <div class="formulario_dos">
                              <label for="nombre"></label>
                              <input type="text" name="nombre" placeholder="Nombre">
                              <label for="email"></label>
                              <input type="email" name="email" placeholder="E-mail">
                              <label for="text"></label>
                              <textarea name="message" placeholder="Mensaje"></textarea>
                              <button id="content" type="submit">Enviar</button>
                            </div>
                          </form>

                    </div>
                    <div class="app">
                        <h1>DESCARGATE LA APP</h1>
                        <img src="../imagenes/QR.jpg" alt="">
                    </div>
                </div>
                <div class="sucursalM">
                    <div class="mapa" id="mapa">

                    </div>
                    <div class="sucursal">
                        <h1>ELEGÍ LA SUCURSAL MÁS CERCANA</h1>
                        <ul id="lugares">
                            <li class="lugar">CABA</li>
                            <li class="lugar">PROVINCIA DE BUENOS AIRES</li>
                            <li class="lugar">CORDOBA</li>
                            <li class="lugar">SANTA FE</li>
                            <li class="lugar">MENDOZA</li>
                        </ul>
                    </div>
                </div>
                <div id="modal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <p>¡Gracias por comunicarte con nosotros!</p>
              </div>
            </div>
            </section>
            `
            document.getElementById("formContactanos").addEventListener("submit", function (e) {
                e.preventDefault()
                console.log(e.target.id);
                //agregamos la funcion del modal
            })

            document.getElementById("mapa").innerHTML = `
            <aside>
                <iframe src="${direcciones[0].mapa}"></iframe>
            </aside>
            `
            let lugares = document.querySelectorAll(".lugar")
            console.log(lugares);
            for (var i = 0; i < lugares.length; i++) {
                lugares[i].addEventListener("click", function (e) {
                    displayMapa(e.target.innerHTML)
                    console.log(e.target.innerHTML)
                })
            }
            break;

        case "compras":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            pagInicio.style.display = "none"
            carritoCompras.style.display = "flex"
            carritoCompras.innerHTML =
                `
        <section id="siete">
            <div class="carrito">
                <div class="container-cart-products hidden-cart">
                <div class="row-product" id="tarjetasProductos">
					<div class="cart-product">
						<div class="info-cart-product" id="contenedorCarrito">
                        </div>
					</div>
                </div>
                    <div class="cart-total" id="totalDelCarrito">
                        
                    </div>
				</div>
                        <div class="eresSocio">
                            <label class="codigoDescuento">¿Eres Socio? Ingresa tu código de descuento</label>
                            <input type="text" placeholder="000-000-0000">
                           <p class="descuentoSocio">Con el codigo de socio tendras un 15% de descuento del total en tu compra</p>
                        </div>
                    </div>
            </div>
            <div class="carritoDos">
                    <div class="pagar">
                        <div class="total">
                            <h1 class="totalPago">TOTAL A PAGAR $</h1>
                            <label for="email"></label>
                            <input type="email" name="email" placeholder="E-mail">
                            <p class="facturaCorreo">A este correo se enviara la factura y detalles de su envío.</p>
                        </div>
                        <div class="datosTDC">
                            <img src="./imagenes/Screenshot 2023-04-06 23.05.39.png" alt="">
                            <label for="nombre"></label>
                            <input type="text" name="nombre" placeholder="0000-0000-0000-0000">
                            <label for="nombre"></label>
                            <input type="text" name="nombre" placeholder="Nombre">
                            <label for="date"></label>
                            <input type="text" name="date" placeholder="Fecha">
                            <label for="text"></label>
                            <input type="text" name="text" placeholder="CVC">
                            <button id="content" type="submit">Pagar</button>
                        </div>
                    </div>
                </div>
                <div id="modal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <p>¡Gracias por comunicarte con nosotros!</p>
              </div>
            </div>
        </section>
            `
            carrito()
            break;
        case "socio":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            pagInicio.style.display = "flex"
            pagInicio.innerHTML = `
    <section>
            <div class="botones-form">
                <a href="#comoFunciona"><button>Como Funciona</button></a>
                <a href="#beneficios"><button>Beneficios</button></a>
                <a href="#suscribirme"><button>Suscribirme</button></a>
            </div>
        <section class="whatsapp">
            <a href=""><img src="../imagenes/whatsapp.png" alt=""></a>
        </section>
        <div class="bloque cuatro" id="cuatro">
             <section>
                <div class="form-uno">
                    <div class="formulario">
                        <form class="form">
                            <h1>ESTAS A UN CLICK DE VIVIR ESTA ESPERIENCIA</h1>
                            <div class="formulario_dos">
                                <label for="nombre"></label>
                                <input type="text" name="nombre" placeholder="Nombre">
                                <label for="documento"></label>
                                <input type="documento" name="documento" placeholder="Número de DNI">
                                <label for="tel"></label>
                                <input type="tel" name="telefono" placeholder="Número de teléfono">
                                <label for="email"></label>
                                <input type="email" name="email" placeholder="E-mail">
                                <div class="plan">
                                    <p><input type="radio" name="opcionUno">Plan Mensual $20.000</p>
                                    <p><input type="radio" name="opcionUno">Plan Anual $180.000</p>
                                </div>
                                <button id="content" type="submit">Pagar</button>
                            </div>
                        </form>
                    </div>
                        <div class="imagenForm">
                            <img src="../imagenes/socioUno.jpg" alt="">
                        </div>
                </div>
            </section>
            <section id="comoFunciona">
                <div class="Funcion">
                    <div class="comoFunciona">
                        <h1>COMO FUNCIONA</h1>
                        <ul>
                            <li>Suscribite a nuestro Club y disfrutá desde tu casa.</li><br>
                            <li>Recibí todos los meses una caja con vinos seleccionados y recomendados por expertos
                                someliers.</li><br>
                            <li>Tendrás descuentos exclusivos en nuestra tienda online.</li>
                        </ul>
                    </div>
                    <div class="regalo">
                        <img src="../imagenes/socioDos.jpg" alt="">
                    </div>
                </div>
            </section>
            <section id="beneficios">
                <div class="Funcion">
                    <div class="regalo-beneficio">
                        <img src="../imagenes/socioTres.jpg" alt="">
                    </div>
                    <div class="beneficio">
                        <h1>BENEFICIOS</h1>
                        <ul>
                            <li>Recibe recetas y maridajes sugeridos por nuestros exclusivos someliers para disfrutar mejor
                                cada etiqueta.</li><br>
                            <li>Disfruta de eventos y recorridos exclusivos para nuestros socios.</li><br>
                            <li>Gastos de envios 100% bonificados a cualquier parte del pais.</li>
                        </ul>
                    </div>
                </div>
            </section>
    </section>
        </div>
            `
            break;

        default:
            carruselInicio.style.display = "flex"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            carritoCompras.style.display = "none"
            pagInicio.style.display = "flex"
            display(oferta)
    }

}

function displayMapa(lugar) {
    let funcionDirecciones = direcciones.filter(direccion => direccion.lugar === lugar)
    console.log(funcionDirecciones)
    document.getElementById("mapa").innerHTML = `
    <aside>
        <iframe src="${funcionDirecciones[0].mapa}"></iframe>
    </aside>
    `
}

function display(array) {
    let tarjetasHTML = "";
    for (var i = 0; i < array.length; i++) {
        tarjetasHTML += `
        <div class="card">
            <img src="../imagenes/${array[i].image}" class="img-car" alt="">
            <p class="tituloCard">${array[i].name}</p>
            <div class="detalles">
                <p class="precioDetalle">$${array[i].price}</p>
                <a href="#">Detalles</a>
            </div>
            <button class="add-cart">Agregar al Carrito <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `
    }
    pagInicio.innerHTML = tarjetasHTML
}

// Carrito de compras, las variables se declararon arriba en la global
pagInicio.addEventListener("click", e => {

    if (e.target.classList.contains("add-cart")) {
        let producto = e.target.parentElement // con parentElemen podemos acceder al elemento completo(retrocedemos), en este caso la tarjeta
        let infProducto = {
            cantidad: 1,
            titulo: producto.querySelector(".tituloCard").textContent,
            precio: producto.querySelector(".precioDetalle").textContent
        }

        let siExiste = allProducts.some(
            producto => producto.titulo === infProducto.titulo)
        if (siExiste) {
            let productoRepetido = allProducts.map(producto => {
                if (producto.titulo === infProducto.titulo) {
                    producto.cantidad++
                    return producto
                } else {
                    return producto
                }
            })
            allProducts = [...productoRepetido];
        } else {
            allProducts = [...allProducts, infProducto] //de esta manera combinamos estos 2 arrays
            console.log(infProducto)
            console.log(allProducts)
        }

    }
})


function carrito() {
    let listaCarrito = "";
    let totalPagar = 0;
    let totalProductos = 0;
    for (var i = 0; i < allProducts.length; i++) {
        listaCarrito += `
        <div class="cardCarrito">
          <span class="cantidad-producto-carrito">${allProducts[i].cantidad}</span>
          <p class="titulo-producto-carrito">${allProducts[i].titulo}</p>
          <span class="precio-producto-carrito">${allProducts[i].precio}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
		    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
          `;

          sumarTotal()
    }
    document.getElementById("contenedorCarrito").innerHTML = listaCarrito;

    
    valorTotal = `$${totalPagar}` 
    contadorProductos= totalProductos
}

function sumarTotal(){
    for (var i = 0; i < totalPagar.length; i++){
        totalPagar = totalPagar + parseInt(allProducts.cantidad * allProducts.price);
        allProducts = allProducts + allProducts.cantidad;
    totalPagar= `
        <h3>Total:</h3>
        <span class="total-pagar">$${allProducts.totalPagar}</span>
    `
    }
    document.getElementById("totalDelCarrito").innerHTML = totalPagar
}

// function carritoProductos(){
//     showHTML = ()=>{

// allProducts.forEach(product => {
// 		const containerProduct = document.createElement('div');
// 		containerProduct.classList.add('cart-product');

// 		rowProduct.append(containerProduct);
// 	});
// }
// }
// FUNCION PARA EL MODAL
// let form = document.querySelector("form")
// const modal = document.querySelector('#modal')
// const cerrar = document.querySelector('.close')
// form.addEventListener("submit", (event) => {
//     actionForm(event)
//     modal.style.display = "block"
// })

// function modalForm() {
//     modal.style.display = "none";
//     location.reload()
// }
// cerrar.addEventListener("click", modalForm);

// window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// })

let busquedaSearch = document.getElementById("inputSearch")
busquedaSearch.addEventListener("keyup", function (e) {
    var datoInput = e.target.value
    buscar = datoInput.trim().toLowerCase()
    filtrosCombinados()
})

function productosVinoteca(array) {
    let categories = array.map(evento => evento.category)
    let unica = new Set(categories)
    let todasLasCategorias = [...unica]
    let categoriasVinoteca = ""
    todasLasCategorias.map(category =>
        categoriasVinoteca +=
        `
    <label><input type="checkbox" value="${category}"> ${category}</label>
    `
    )
    document.getElementById("checkboxProductos").innerHTML = categoriasVinoteca
    checkboxListener()
}

function checkboxListener() {
    var checkboxs = document.querySelectorAll('input[type=checkbox]')
    for (i = 0; i < checkboxs.length; i++) {
        checkboxs[i].addEventListener("change", function () {
            checkedCheckboxes = []
            for (i = 0; i < checkboxs.length; i++) {
                if (checkboxs[i].checked) {
                    checkedCheckboxes.push(checkboxs[i].value)
                }
            }
            filtrosCombinados()
        })
    }
}

function filtrosCombinados() {
    var filtrado = []
    if (buscar !== "" && checkedCheckboxes.length > 0) {
        checkedCheckboxes.map(category => filtrado.push(...arrayFiltro.filter(evento =>
            evento.name.toLowerCase().trim().includes(buscar) && evento.category === category)
        ))
    }
    else if (buscar !== "" && checkedCheckboxes.length == 0) {
        filtrado = arrayFiltro.filter(evento => evento.name.toLowerCase().trim().includes(buscar))
    }
    else if (buscar === "" && checkedCheckboxes.length > 0) {
        checkedCheckboxes.map(category =>
            filtrado.push(...arrayFiltro.filter(evento => evento.category === category))
        )
    }
    else {
        filtrado = arrayFiltro
    }
    filtrado.length > 0 ?
        display(filtrado) :
        pagInicio.innerHTML = `
    <div class="ceroResultado">
    <h1 class="sinEventos" >No se encontró el producto buscado...</h1>
    </div>
    `
}

// let separador = location.buscar.split("?time=")
// function rutasPages() {
//     switch (time[1]) {
//         case "nosotros":
//             mostrarPage("nosotros")
//             break;
//         case "vinos":
//             mostrarPage("vinos")
//             break;
//         case "whisky":
//             mostrarPage("whisky")
//             break;
//         case "cerveza":
//             mostrarPage("cerveza")
//             break;
//         case "giftcard":
//             mostrarPage("giftcard")
//             break;
//         case "eventos":
//             mostrarPage("eventos")
//             break;
//         case "recorridos":
//             mostrarPage("recorridos")
//             break;
//         case "contactanos":
//             mostrarPage("contactanos")
//             break;
//         case "socio":
//             mostrarPage("socio")
//             break;
//         default:
//             mostrarPage("inicio")
//     }
// }
