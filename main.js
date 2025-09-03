const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

// Control de Swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    allowTouchMove: false
});

// Botón para iniciar
document.querySelector(".btn_iniciar").addEventListener("click", () => {
    swiper.slideTo(0);
});

document.querySelector(".button-next button").addEventListener("click", () => {
    swiper.slideNext();
});

document.querySelectorAll(".button-prev button").forEach(button =>{
    button.addEventListener("click", () => {
        swiper.slidePrev();
    });
})

// Botones de Si/No para vehiculos y colectivos
document.getElementById("btnVehiculoSi").addEventListener("click", () => {
    swiper.slideTo(2);
});

document.getElementById("btnVehiculoNo").addEventListener("click", () => {
    swiper.slideTo(3);
});

document.getElementById("btnColectivoSi").addEventListener("click", () => {
    swiper.slideTo(4);
});

document.getElementById("btnColectivoNo").addEventListener("click", () => {
    swiper.slideTo(5);
});


// Definicion de datos genéricos:
const valores = {
    EM: 12, // Eficiencia del combustible
    FEn: 2.37, // Factor de emisión de la nafta
    R: 9, // Recorrido promedio por viaje
    AS: 48, // Cantidad de semanas al año
    EMc: 16.66, // Eficiencia del combustible
    FEg: 2.77, // Factor de emisión del gasoil
    C: 20, // Carga promedio por colectivo
    BD: 3171, // Balance dieta argentina
    FEAA: 4.67, // Factor de emisión de alimentos de origen animal
    Ad: 365, // Cantidad de dias del año
    FEred: 0.5, // Factor de emisión de la red
    FEgn: 1.95 // Factor de emisión de gas natural
}

// Constante para guardar las respuestas del usuario
const respuestas = {};

// Funciones para habilitar los botones cuando se presiona un Input radio o se rellena
document.querySelectorAll('input[name="radioVehiculo"]').forEach(input => {
    input.addEventListener("change", () => {
        document.getElementById("btn_Vehiculo").disabled = false;
    });
});

document.querySelectorAll('input[name="radioColectivo"]').forEach(input => {
    input.addEventListener("change", () => {
        document.getElementById("btn_Colectivo").disabled = false;
    });
});

document.querySelectorAll('input[name="radioAlimentos"]').forEach(input => {
    input.addEventListener("change", () => {
        document.getElementById("btn_Alimentacion").disabled = false;
    });
});

// Toma de datos y calculos de emisión 
document.getElementById("btn_Vehiculo").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioVehiculo"]:checked').value);
    console.log("Vehiculo: ", selected);

    respuestas.emisionVehiculo = selected * (1/valores.EM) * valores.FEn/1000;

    swiper.slideNext();
});

document.getElementById("btn_Colectivo").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioColectivo"]:checked').value);
    console.log("Colectivo: ", selected);

    respuestas.emisionColectivo = (selected * valores.AS * valores.R * (1/valores.EMc) * valores.FEg) / (1000*valores.C);

    swiper.slideNext();
});

document.getElementById("btn_Alimentacion").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioAlimentos"]:checked').value);
    console.log("Alimentos: ", selected);

    respuestas.emisionAlimentos = (selected * valores.BD / 100) * valores.FEAA * valores.Ad / 1000000;

    swiper.slideNext();
});

btn_Electricidad.addEventListener("click", () => {
    const selected = parseInt(inp_Electricidad.value) || 3300;

    if(selected<=0){
        alert("El valor debe ser mayor a 0");
    }else{
        console.log("Electricidad: ", selected)
        respuestas.emisionElectricidad = selected * valores.FEred/1000;
        swiper.slideNext();
    }
});

btn_Gas.addEventListener("click", () => {
    const selected = parseInt(inp_Gas.value) || 1075;
    console.log("Gas: ", selected);

    if(selected<=0){
        alert("El valor debe ser mayor a 0")
    }else{
        respuestas.emisionGas = selected * valores.FEgn/1000;

        const calculoFinal = (respuestas.emisionVehiculo || 0) + (respuestas.emisionColectivo || 0) + respuestas.emisionAlimentos + respuestas.emisionElectricidad + respuestas.emisionGas;

        console.log(calculoFinal);

        let msg;
        if(calculoFinal < 4){
            msg = "Tu emisión de huella de carbono es baja. ¡Sigue asi! ";
        }else if (calculoFinal < 8){
            msg = "Tu emisión de huella de carbono esta en la media.";
        }else{
            msg = "Tu emisión de huella de carbono es alta. ¡Podemos mejorar!";
        }

        const resultado_header = document.getElementById("resultado_header");
        const resultado_numero = document.getElementById("resultado-numero");

        resultado_header.textContent = msg;
        resultado_numero.textContent = calculoFinal.toFixed(2)+"CO₂/Año";

        swiper.slideNext();
    }
});

// Cards: 
const cardData = [
    { 
        title: "PERSONAL", 
        description: "Se basa en hábitos de consumo de cada persona, tiene en cuenta las emisiones de GEI asociadas a medios de transporte, uso de energía en el hogar, hábitos alimenticios y consumo de bienes.", 
        image: "https://images.pexels.com/photos/17881972/pexels-photo-17881972.jpeg" 
    },
    { 
        title: "PRODUCTO",
        description: "Incluye las emisiones de GEI durante las etapas de extracción de materias primas, el proceso productivo, la generación de la energía necesaria, el transporte entre etapas, el uso por parte del cliente y su tratamiento como residuo.", 
        image: "https://images.pexels.com/photos/16862261/pexels-photo-16862261.jpeg" 
    },
    { 
        title: "CORPORATIVA", 
        description: "incluye emisiones de GEI asociado a la actividad de una empresa u organización en medidas de consumo energético así como otras medidas de actuación.", 
        image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg" 
    },
/*     { 
        title: "Excelente Trabajo", 
        description: "Tu huella de carbono está en un excelente promedio. Continua de esa manera", 
        image: "https://images.pexels.com/photos/33693329/pexels-photo-33693329.jpeg" 
    },
    { 
        title: "Vas por buen camino, pero se puede mejorar", 
        description: "Tu huella de carbono es no es alta, pero tampoco es baja. El medio ambiente lo cuidamos entre todos y cada acción cuenta", 
        image: "https://images.pexels.com/photos/33695227/pexels-photo-33695227.jpeg" 
    },
    { 
        title: "Huella de Carbono Alta", 
        description: "Tu huella de carbono está por encima del promedio. Deberias empezar a ser más conciente de tu consumo en día a día.", 
        image: "https://images.pexels.com/photos/33626324/pexels-photo-33626324.jpeg" 
    } */
];

const cardsContainer = document.getElementById('cards-container');


function createCard(data) {
    const card = document.createElement('div');
    card.setAttribute("style", "background-color: inherit !important;");
    card.classList.add(
        "bg-white",
        "dark:bg-gray-800",
        "text-gray-800",
        "dark:text-white",
        "rounded-lg",
        "shadow-lg",
        "p-6",
        "flex",
        "flex-col",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-300",
        "h-full"
    );

    const cardContent = 
        `<img src="${data.image}" alt="${data.title}" class="rounded-t-lg w-full h-48 object-cover mb-4">
        <h2 class="text-2xl font-semibold mb-2">${data.title}</h2>
        <p>${data.description}</p>`;

    card.innerHTML = cardContent;

    return card;
}

cardData.forEach(data => {
    const cardColumn = document.createElement("div");
    
    cardColumn.classList.add("w-full")

    const newCard = createCard(data);

    cardColumn.appendChild(newCard);
    
    cardsContainer.appendChild(cardColumn);
});