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

const inp_Electricidad = document.getElementById("inp_Electricidad");
const btn_Electricidad = document.getElementById("btn_Electricidad");

inp_Electricidad.addEventListener("input", () => {
    if(inp_Electricidad.value.trim() !== ""){
        btn_Electricidad.disabled = false;
    }else{
        btn_Electricidad.disabled = true;
    }
})

const inp_Gas = document.getElementById("inp_Gas");
const btn_Gas = document.getElementById("btn_Gas");

inp_Gas.addEventListener("input", () => {
    if(inp_Gas.value.trim() !== ""){
        btn_Gas.disabled = false;
    }else{
        btn_Gas.disabled = true;
    }
})

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
    const selected = parseInt(inp_Electricidad.value);

    if(selected<=0){
        alert("El valor debe ser mayor a 0");
    }else{
        console.log("Electricidad: ", selected)
        respuestas.emisionElectricidad = selected * valores.FEred/1000;
        swiper.slideNext();
    }
});

btn_Gas.addEventListener("click", () => {
    const selected = parseInt(inp_Gas.value);
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