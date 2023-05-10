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

var botonesNav = document.getElementsByClassName("nav-link")
for (var i = 0; i < botonesNav.length; i++) {
    const elementos = botonesNav[i]
    elementos.addEventListener("click", function (e) {
        mostrarPage(e.target.id)
        console.log(botonesNav)
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
            carruselRecorridos.style.display = "none"
            display(vinos)
            arrayFiltro = vinos
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
            productosVinoteca(vinos)
            break;

        case "whisky":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "flex"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            display(whisky)
            arrayFiltro = whisky
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
            productosVinoteca(whisky)
            break;

        case "cerveza":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "flex"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "none"
            display(cerveza)
            arrayFiltro = cerveza
            checkedCheckboxes = []
            categoriasProductos.style.display = "flex"
            busquedaSearch.style.display = "flex"
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
            display(giftCard)
            break;
        case "eventos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "flex"
            carruselRecorridos.style.display = "none"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
            display(eventos)
            break;
        case "recorridos":
            carruselInicio.style.display = "none"
            carruselVino.style.display = "none"
            carruselWhisky.style.display = "none"
            carruseCerveza.style.display = "none"
            carruselEvento.style.display = "none"
            carruselRecorridos.style.display = "flex"
            categoriasProductos.style.display = "none"
            busquedaSearch.style.display = "none"
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
            pagInicio.style.display = "flex"
            pagInicio.innerHTML = `
            <section>
                <div class="formApp">
                    <div class="formulario">
                        <form class="form">
                            <h1>CONTACTA CON NOSOTROS</h1>
                            <div class="formulario_dos"> 
                              <label for="nombre"></label>   
                              <input type="text" name="nombre" placeholder="Nombre">
                              <label for="email"></label>
                              <input type="email" name="email" placeholder="E-mail">
                              <label for="text"></label>
                              <textarea name="message" placeholder="Mensaje"></textarea>
                              <button id="content" type="submit" >Enviar</button>
                            </div>
                          </form>
                    </div>
                    <div class="app">
                        <h1>DESCARGATE LA APP</h1>
                        <img src="../imagenes/QR.jpg" alt="">
                    </div>
                </div>
                <div class="sucursalM">
                    <div class="mapa">
                        <aside>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414606.090072612!2d-67.4132542735336!3d-36.012642004951196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses!2sar!4v1680838068662!5m2!1ses!2sar" width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </aside>
                    </div>
                    <div class="sucursal">
                        <h1>ELEGÍ LA SUCURSAL MÁS CERCANA</h1>
                        <ul>
                            <li>CABA</li>
                            <li>PROVINCIA DE BUENOS AIRES</li>
                            <li>CORDOBA</li>
                            <li>ROSARIO</li>
                            <li>MENDOZA</li>
                        </ul>
                    </div>
                </div>
            </section>
            `
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
            pagInicio.style.display = "flex"
            pagInicio.innerHTML = `
            <section>
                <div class="carrito">
                    <div class="subtotal">
                        <div class="tarjeta-c">
                            <a href="../paginas/detalles.html"><img src="../imagenes/RAME1.png" alt="vino"></a>
                            <p class="cantidad">01</p>
                            <p class="precio">$ 9.200</p>
                        </div>
                        <div class="tarjeta-c">
                            <a href="../paginas/detalles.html"><img src="../imagenes/9.png" alt="Whisky"></a>
                            <p class="cantidad">01</p>
                            <p class="precio">$ 65.000</p>
                        </div>
                        <div class="tarjeta-c">
                            <a href="../paginas/detalles.html"><img src="../imagenes/VintageRouge1.png" alt="vino"></a>
                            <p class="cantidad">01</p>
                            <p class="precio">$ 22.500</p>
                        </div>
                        <div class="tarjeta-c">
                            <a href="../paginas/detalles.html"><img src="../imagenes/Sweet1.png" alt="vino"></a>
                            <p class="cantidad">01</p>
                            <p class="precio">$ 17.300</p>
                        </div>
                        <div class="costo">
                            <h1 class="subtotal">SUBTOTAL $ 114.000</h1>
                        </div>
                        <div class="eresSocio">
                            <label class="codigoDescuento">¿Eres Socio? Ingresa tu código de descuento</label>
                            <input type="text" placeholder="000-000-0000">
                           <p class="descuentoSocio">En caso de ser socio se aplica un 15% de descuento al total de la compra</p>
                        </div>
                    </div>
                    <div class="pagar">
                        <div class="total">
                            <h1 class="totalPago">TOTAL A PAGAR $ 96.900</h1>
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
            </section>
            `
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
            display(oferta)
    }

}

function display(array) {
    let tarjetasHTML = "";
    for (var i = 0; i < array.length; i++) {
        tarjetasHTML += `
        <div class="card">
        <img src="../imagenes/${array[i].image}" alt="">
        <p>${array[i].name}</p>
        <div class="detalles">
            <p>$ ${array[i].price}</p>
            <a href="../paginas/detalles.html">Detalles</a>
        </div>
        <a href="../paginas/carrito.html" class="CARRITO">Agregar al Carrito <i class="fa-solid fa-cart-shopping"></i></a>
    </div>
            `
    }
    pagInicio.innerHTML = tarjetasHTML
}

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
