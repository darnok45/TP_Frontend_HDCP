# 🌍 Huella de Carbono Personal

Este proyecto es una aplicación web que permite calcular la **huella de carbono personal**, entendida como el rastro de los gases de efecto invernadero (GEI) generados por nuestras actividades diarias.  

La app promueve la **conciencia ambiental** y ofrece un resultado personalizado (bajo, medio o alto) en función de los cálculos basados en transporte, consumo eléctrico, gas y alimentación.

---

## 📖 Introducción

La **huella de carbono** es un indicador ambiental que mide las emisiones de gases de efecto invernadero (como CO₂, CH₄, N₂O, entre otros).  

Existen diferentes tipos de huella de carbono:
- **Personal**: hábitos de transporte, energía en el hogar, alimentación y consumo de bienes.
- **Producto**: emisiones desde la extracción de materias primas hasta su uso y disposición.
- **Corporativa**: emisiones asociadas a la actividad de empresas u organizaciones.

Fórmula general: Huella de Carbono = Dato de Actividad × Factor de Emisión

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
   `bash`
   git clone https://github.com/usuario/huella-carbono-personal.git
   cd huella-carbono-personal

---

## 📚 Bibliotecas utilizadas

El proyecto utiliza las siguientes librerias externas:
- [Bootstrap](https://getbootstrap.com/ "Bootstrap")
- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- [Swiper.JS](https://swiperjs.com "Swiper.JS")
- [Font Awesome](https://fontawesome.com/ "Font Awesome")

---

## 💻 Funcionalidad de JavaScript (Calculos y toma de datos)

### 🚗 Cálculos de vehículo
```
document.getElementById("btn_Vehiculo").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioVehiculo"]:checked').value);
    console.log("Vehiculo: ", selected);

    respuestas.emisionVehiculo = selected * (1 / valores.EM) * valores.FEn / 1000;

    swiper.slideNext();
});
```

- #### Calculos de colectivo:
```
document.getElementById("btn_Colectivo").addEventListener("click", () => {
	const selected = parseInt(document.querySelector('input[name="radioColectivo"]:checked').value);
 	console.log("Colectivo: ", selected);
  	respuestas.emisionColectivo = (selected * valores.AS * valores.R * (1/valores.EMc) * valores.FEg) / (1000 * valores.C);
   	swiper.slideNext();
});
```

- #### Calculos de alimentación:
```
document.getElementById("btn_Alimentacion").addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="radioAlimentos"]:checked').value);
    console.log("Alimentos: ", selected);
    respuestas.emisionAlimentos = (selected * valores.BD / 100) * valores.FEAA * valores.Ad / 1000000;
    swiper.slideNext();
});
```

- #### Calculos de electricidad:
```
btn_Electricidad.addEventListener("click", () => {
    const selected = parseInt(inp_Electricidad.value) || 3300;
    if(selected <= 0){
	alert("El valor debe ser mayor a 0");
    } else {
	console.log("Electricidad: ", selected);
	respuestas.emisionElectricidad = selected * valores.FEred / 1000;
	swiper.slideNext();
    }
});
```

- #### Calculos de gas y resultado:
```
btn_Gas.addEventListener("click", () => {
    const selected = parseInt(inp_Gas.value) || 1075;
    console.log("Gas: ", selected);
    if(selected<=0){
    alert("El valor debe ser mayor a 0")
    }else{
	respuestas.emisionGas = selected \* valores.FEgn/1000;
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
```

---

## 📸 Capturas de pantalla
- #### Vista inicial desde computadora:
[![Vista desde computadora](https://prnt.sc/PHFe4GyQFQnn "Vista desde computadora")](https://prnt.sc/PHFe4GyQFQnn "Vista desde computadora")

- #### Vista inicial desde movil:
[![Vista desde movil](https://prnt.sc/Gk6HGtjFOs-w "Vista desde movil")](https://prnt.sc/Gk6HGtjFOs-w "Vista desde movil")

- #### Vista calculadora desde movil:
[![Vista calculadora](https://prnt.sc/__lnyoeasUpr "Vista calculadora")](https://prnt.sc/__lnyoeasUpr "Vista calculadora")

---

## 📚 Bibliografía

Iberdrola. (s. f.). [¿Qué es la huella de carbono?](https://www.iberdrola.com/sostenibilidad/huella-de-carbono?utm_source "¿Qué es la huella de carbono?")

Repsol. (s. f.). [¿Qué es la huella de carbono y por qué es importante?](https://www.repsol.com/es/sostenibilidad/ejes-sostenibilidad/cambio-climatico/reduccion-huella-carbono/index.cshtml "¿Qué es la huella de carbono y por qué es importante?")

Gobierno de Córdoba (2015). [Documento Base – Cambio Climático.](https://www.cba.gov.ar/wp-content/4p96humuzp/2015/07/Documento-Base-Cambio-Clim%C3%A1tico-2.pdf "Documento Base – Cambio Climático.")

OpenAI (2025). [Respuesta generada por ChatGPT sobre huella de carbono per cápita.](https://chatgpt.com/ "Respuesta generada por ChatGPT sobre huella de carbono per cápita.")
