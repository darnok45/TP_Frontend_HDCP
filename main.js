const cardData = [
    { 
        title: "Tarjeta 1", 
        description: "Esta es la descripción para la primera tarjeta.", 
        image: "https://via.placeholder.com/300" 
    },
    { 
        title: "Tarjeta 2", 
        description: "Esta es la descripción para la segunda tarjeta, con más texto para probar el diseño.", 
        image: "https://via.placeholder.com/300" 
    },
    { 
        title: "Tarjeta 3", 
        description: "Descripción de la tercera tarjeta.", 
        image: "https://via.placeholder.com/300" 
    }
];

const cardsContainer = document.getElementById('cards-container');


function createCard(data) {

    const card = document.createElement('div');
    card.classList.add(
        "bg-white", 
        "text-gray-800",
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