const productos = [
  {
    id: "panel1",
    titulo: "Panel Solar 450 Wc Monocristalino",
    descripcion: "Alta eficiencia para uso residencial y comercial ligero.",
    categoria: "panel",
    watts: 450,
    precio: 850000,
    stock: "stock",
    marca: "SolTech",
    imagen: "../e-commerce/assets/img/Panel-Solar-450W-4k.jpg",
    ficha: {
      potencia: "450 W",
      voltaje: "48 V",
      garantia: "12 años",
      vida: "25 años",
      material: "Vidrio templado y aluminio anodizado"
    }
  },
  {
    id: "panel2",
    titulo: "Panel Solar Bifacial 550 Wc",
    descripcion: "Captura luz por ambos lados, ideal para alta irradiación.",
    categoria: "panel",
    watts: 550,
    precio: 1100000,
    stock: "stock",
    marca: "EcoFace",
    imagen: "../e-commerce/assets/img/Panel-solar-Monocristalino-550W.webp",
    ficha: {
      potencia: "550 W",
      voltaje: "48 V",
      garantia: "15 años",
      vida: "30 años",
      material: "Vidrio bifacial y marco de aluminio"
    }
  },
  {
    id: "eolica1",
    titulo: "Turbina Eólica 1 kW Vertical",
    descripcion: "Compacta y silenciosa, perfecta para uso doméstico.",
    categoria: "eolica",
    watts: 1000,
    precio: 3200000,
    stock: "stock",
    marca: "BreezeGen",
    imagen: "../e-commerce/assets/img/Turbina-Eólica-1-kW-Vertical.avif.jpg",
    ficha: {
      potencia: "1 kW",
      voltaje: "220 V",
      garantia: "5 años",
      vida: "20 años",
      material: "Aluminio y ABS UV"
    }
  },
  {
    id: "eolica2",
    titulo: "Turbina Eólica 5 kW Horizontal",
    descripcion: "Alta generación para granjas o comunidades rurales.",
    categoria: "eolica",
    watts: 5000,
    precio: 9500000,
    stock: "pedido",
    marca: "WindMaster",
    imagen: "../e-commerce/assets/img/Turbina-Eólica-5-k-Horizontal.webp",
    ficha: {
      potencia: "5 kW",
      voltaje: "380 V",
      garantia: "7 años",
      vida: "25 años",
      material: "Acero galvanizado y fibra de vidrio"
    }
  },
  {
    id: "kit1",
    titulo: "Kit Solar Residencial 2 kW",
    descripcion: "Todo en uno: paneles, inversor, baterías y controlador.",
    categoria: "kit",
    watts: 2000,
    precio: 5800000,
    stock: "stock",
    marca: "GreenHome",
    imagen: "../e-commerce/assets/img/kit-solar-residencial-2-kw.png",
    ficha: {
      potencia: "2 kW",
      voltaje: "48 V",
      garantia: "5 años",
      vida: "20 años",
      material: "Componentes solares completos"
    }
  },
  {
    id: "inversor1",
    titulo: "Inversor Híbrido 5 kW",
    descripcion: "Compatible con paneles solares y turbinas eólicas.",
    categoria: "inversor",
    watts: 5000,
    precio: 3200000,
    stock: "stock",
    marca: "PowerFlex",
    imagen: "../e-commerce/assets/img/Inversor-Híbrido-5-kW.webp",
    ficha: {
      potencia: "5 kW",
      voltaje: "48 V",
      garantia: "5 años",
      vida: "15 años",
      material: "Aluminio IP65, display LCD"
    }
  },
  {
    id: "inversor2",
    titulo: "Microinversor Panel a Panel 300 W",
    descripcion: "Incrementa la eficiencia en techos sombreados.",
    categoria: "inversor",
    watts: 300,
    precio: 250000,
    stock: "pedido",
    marca: "MicroSolar",
    imagen: "../e-commerce/assets/img/Microinversor-Panel-a-Panel-300-W.webp",
    ficha: {
      potencia: "300 W",
      voltaje: "DC-AC 48 V-230 V",
      garantia: "10 años",
      vida: "15 años",
      material: "Aluminio IP67"
    }
  },
  {
    id: "bateria1",
    titulo: "Batería Litio LiFePO₄ 48V 100Ah",
    descripcion: "Alta duración, ideal para almacenamiento solar.",
    categoria: "bateria",
    watts: 4800,
    precio: 4200000,
    stock: "stock",
    marca: "StorEnergy",
    imagen: "../e-commerce/assets/img/Batería-Litio-LiFePO₄-48V-100Ah.webp",
    ficha: {
      potencia: "4.8 kWh",
      voltaje: "48 V",
      garantia: "8 años",
      vida: "6000 ciclos",
      material: "Litio LiFePO₄"
    }
  },
  {
    id: "bateria2",
    titulo: "Batería AGM 12V 200Ah",
    descripcion: "Económica, buena para instalaciones básicas.",
    categoria: "bateria",
    watts: 2400,
    precio: 950000,
    stock: "stock",
    marca: "ClassicBat",
    imagen: "../e-commerce/assets/img/Batería-AGM-12V-200Ah.webp",
    ficha: {
      potencia: "2.4 kWh",
      voltaje: "12 V",
      garantia: "3 años",
      vida: "500 ciclos",
      material: "Plomo-ácido AGM"
    }
  },
  {
    id: "controlador1",
    titulo: "Controlador Solar MPPT 60A",
    descripcion: "Aumenta la eficiencia en condiciones variables.",
    categoria: "controlador",
    watts: 3600,
    precio: 950000,
    stock: "stock",
    marca: "SmartMPPT",
    imagen: "../e-commerce/assets/img/Controlador Solar MPPT 60A.webp",
    ficha: {
      potencia: "Hasta 3.6 kW",
      voltaje: "12-48 V",
      garantia: "3 años",
      vida: "10 años",
      material: "Aluminio y LCD retroiluminado"
    }
  },
  {
    id: "controlador2",
    titulo: "Controlador PWM 30A",
    descripcion: "Adecuado para sistemas pequeños de 12 V/24 V.",
    categoria: "controlador",
    watts: 500,
    precio: 250000,
    stock: "pedido",
    marca: "SimpleCharge",
    imagen: "../e-commerce/assets/img/Controlador PWM 30Awebp",
    ficha: {
      potencia: "Hasta 500 W",
      voltaje: "12-24 V",
      garantia: "1 año",
      vida: "5 años",
      material: "Plástico ABS"
    }
  },
  {
    id: "estructura1",
    titulo: "Estructura Solar Aluminio – Techo plano",
    descripcion: "Soporte resistente para paneles en techos planos.",
    categoria: "accesorio",
    watts: 0,
    precio: 300000,
    stock: "stock",
    marca: "MountTech",
    imagen: "../e-commerce/assets/img/Estructura Solar Aluminio – Techo plano.jpg",
    ficha: {
      potencia: "-",
      voltaje: "-",
      garantia: "10 años",
      vida: "25 años",
      material: "Aluminio anodizado"
    }
  },
  {
    id: "estructura2",
    titulo: "Cableado Solar 4 mm², rollo 100 m",
    descripcion: "Cable doble aislamiento UV para exteriores.",
    categoria: "accesorio",
    watts: 0,
    precio: 120000,
    stock: "stock",
    marca: "WireSafe",
    imagen: "../e-commerce/assets/img/Cableado Solar 4 mm², rollo 100 m.webp",
    ficha: {
      potencia: "-",
      voltaje: "1000 V DC",
      garantia: "5 años",
      vida: "20 años",
      material: "Cobre y PVC especial UV"
    }
  },
  {
    id: "kit2",
    titulo: "Kit Solar Híbrido 5 kW",
    descripcion: "Incluye turbina, paneles, baterías, inversor y cables.",
    categoria: "kit",
    watts: 5000,
    precio: 18000000,
    stock: "pedido",
    marca: "EcoHybrids",
    imagen: "../e-commerce/assets/img/Kit Solar Híbrido 5 kW.jpg",
    ficha: {
      potencia: "5 kW",
      voltaje: "48 V",
      garantia: "5 años",
      vida: "25 años",
      material: "Todo incluido"
    }
  },
  {
    id: "kit3",
    titulo: "Mini-kit Solar Portátil 200 W",
    descripcion: "Solución móvil para camping o emergencias.",
    categoria: "kit",
    watts: 200,
    precio: 650000,
    stock: "stock",
    marca: "SunGo",
    imagen: "../e-commerce/assets/img/Mini-kit Solar Portátil 200 W.webp",
    ficha: {
      potencia: "200 W",
      voltaje: "12 V",
      garantia: "1 año",
      vida: "10 años",
      material: "Panel plegable y banco de batería"
    }
  }
];


// Render inicial
const grid = document.getElementById("grid-tarjetas");
function renderProductos(lista) {
  grid.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "tarjeta";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.titulo}">
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <strong>$${p.precio.toLocaleString()}</strong></br></br>
      <button class="btn-carrito" onclick="abrirModal('${p.id}')">Ver más</button>
    `;
    grid.appendChild(card);
  });
}
renderProductos(productos);

// Filtrado
function filtrar() {
  const texto = document.getElementById("buscar").value.toLowerCase();
  const cats = [...document.querySelectorAll(".filtro-categoria:checked")].map(el => el.value);
  const minW = parseInt(document.getElementById("min-watts").value) || 0;
  const maxW = parseInt(document.getElementById("max-watts").value) || Infinity;
  const precioMax = parseInt(document.getElementById("precio").value) || Infinity;
  const stocks = [...document.querySelectorAll(".filtro-stock:checked")].map(el => el.value);
  const marcas = [...document.querySelectorAll(".filtro-marca:checked")].map(el => el.value);

  const filtrados = productos.filter(p => {
    return (
      p.titulo.toLowerCase().includes(texto) &&
      (cats.length === 0 || cats.includes(p.categoria)) &&
      p.watts >= minW &&
      p.watts <= maxW &&
      p.precio <= precioMax &&
      (stocks.length === 0 || stocks.includes(p.stock)) &&
      (marcas.length === 0 || marcas.includes(p.marca))
    );
  });
  renderProductos(filtrados);
}

// Eventos de filtros
document.getElementById("buscar").addEventListener("input", filtrar);
document.querySelectorAll(".filtro-categoria, .filtro-stock, .filtro-marca").forEach(el => el.addEventListener("change", filtrar));
document.getElementById("min-watts").addEventListener("input", filtrar);
document.getElementById("max-watts").addEventListener("input", filtrar);
document.getElementById("precio").addEventListener("input", e => {
  document.getElementById("precio-valor").textContent = "$" + parseInt(e.target.value).toLocaleString();
  filtrar();
});

// Modal
function abrirModal(id) {
  const p = productos.find(prod => prod.id === id);
  document.getElementById("modal-titulo").textContent = p.titulo;
  document.getElementById("modal-img").src = p.imagen;
  document.getElementById("modal-descripcion").textContent = p.descripcion;
  document.getElementById("ficha-potencia").textContent = p.ficha.potencia;
  document.getElementById("ficha-voltaje").textContent = p.ficha.voltaje;
  document.getElementById("ficha-garantia").textContent = p.ficha.garantia;
  document.getElementById("ficha-vida").textContent = p.ficha.vida;
  document.getElementById("ficha-material").textContent = p.ficha.material;
  document.getElementById("modal").style.display = "flex";
}
function cerrarModal() { document.getElementById("modal").style.display = "none"; }


document.addEventListener('DOMContentLoaded', function () {
  const hero  = document.querySelector('#hero');
  const slides = [...hero.querySelectorAll('.slide')];
  const dotsWrap = hero.querySelector('.dots');
  const nextBtn = hero.querySelector('.next');
  const prevBtn = hero.querySelector('.prev');

  let index = 0, timer = null, delay = 5000;

  // crear dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = i === 0 ? 'is-active' : '';
    b.setAttribute('aria-label', 'Ir a la diapositiva ' + (i + 1));
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  });
  const dots = [...dotsWrap.children];

  function go(i){
    slides[index].classList.remove('is-active');
    dots[index].classList.remove('is-active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    dots[index].classList.add('is-active');
  }

  function next(){ go(index + 1); }
  function prev(){ go(index - 1); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  function start(){ timer = setInterval(next, delay); }
  function stop(){ clearInterval(timer); }

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  start(); // autoplay
});

