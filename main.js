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