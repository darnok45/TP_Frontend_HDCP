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
    { 
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
    }
];

const cardsContainer = document.getElementById('cards-container');


function createCard(data) {
    const card = document.createElement('div');
    card.classList.add(
        "bg-white",
        "dark:bg-gray-800",
        "text-gray-800",
        "dark:text-gray-100",
        "rounded-lg",
        "shadow-lg",
        "p-6",
        "flex",
        "flex-col",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-300"
    );

    const cardContent = `
        <img src="${data.image}" alt="${data.title}" class="rounded-t-lg w-full h-48 object-cover mb-4">
        <h2 class="text-2xl font-semibold mb-2">${data.title}</h2>
        <p>${data.description}</p>
    `;

    card.innerHTML = cardContent;

    return card;
}

cardData.forEach(data => {
    const newCard = createCard(data);
    cardsContainer.appendChild(newCard);
});