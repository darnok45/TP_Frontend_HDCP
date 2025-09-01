/*
    Definicion de datos genéricos:
    EM / EMc => Eficiencia del combustible
    FEn => Factor de emisión de la nafta
    R => Recorrido promedio por viaje
    AS => Cantidad de semanas al año
    FEg => Factor de emisión del gasoil
    C => Carga promedio por colectivo
    BD => Balance dieta argentina
    FEAA => Factor de emisión de alimentos de origen animal
    Ad => Cantidad de dias del año
    FEred => Factor de emisión de la red
    FEgn => Factor de emisión de gas natural
*/

const valores = {
    EM: 12,
    FEn: 2.37,
    R: 9,
    AS: 48,
    EMc: 16.66,
    FEg: 2.77,
    C: 20,
    BD: 3171,
    FEAA: 4.67,
    Ad: 365,
    FEred: 0.5,
    FEgn: 1.95
}

const respuestas = {};

/*
    Funciones para habilitar los botones cuando se presiona un Input radio
*/
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
    console.log("Vehiculo: ", selected)

    respuestas.emisionVehiculo = selected * (1/valores.EM) * valores.FEn/1000
});

document.getElementById("btn_Colectivo").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioColectivo"]:checked').value);
    console.log("Colectivo: ", selected)

    respuestas.emisionColectivo = (selected * valores.AS * valores.R * (1/valores.EMc) * valores.FEg) / (1000*valores.C)
});

document.getElementById("btn_Alimentacion").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioAlimentos"]:checked').value);
    console.log("Alimentos: ", selected)

    respuestas.emisionAlimentos = (selected * valores.BD / 100) * valores.FEAA * valores.Ad / 1000000
});

document.getElementById("btn_Electricidad").addEventListener("click", () => {
    const selected = parseInt(document.getElementById('inp_electricidad').value);
    console.log("Electricidad: ", selected)

    respuestas.emisionElectricidad = selected * valores.FEred/1000
});

document.getElementById("btn_Gas").addEventListener("click", () => {
    const selected = parseInt(document.getElementById('inp_Gas').value);
    console.log("Gas: ", selected)

    respuestas.emisionGas = selected * valores.FEgn/1000

    const calculoFinal = (respuestas.emisionVehiculo || 0) + (respuestas.emisionColectivo || 0) + respuestas.emisionAlimentos + respuestas.emisionElectricidad + respuestas.emisionGas

    console.log(calculoFinal)

    let msg
    if(calculoFinal < 4){
        msg = "Tu emisión de huella de carbono es baja. ¡Sigue asi! "
    }else if (calculoFinal < 8){
        msg = "Tu emisión de huella de carbono esta en la media."
    }else{
        msg = "Tu emisión de huella de carbono es alta. ¡Podemos mejorar!"
    }

    console.log(msg)

    const resultado_header = document.getElementById("resultado_header")
    const resultado_numero = document.getElementById("resultado-numero")

    resultado_header.textContent = msg

    resultado_numero.textContent = calculoFinal.toFixed(2)+"CO₂/Año"

    swiper.slideNext();
});