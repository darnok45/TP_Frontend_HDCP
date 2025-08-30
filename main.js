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