document.getElementById('searchButton').addEventListener('click', function () {
    let searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchQuery === '') {
        alert('Please enter a character name!');
        return;
    }

    fetchCharacterData(searchQuery);
});

function fetchCharacterData(characterName) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Loading...';  // Show loading state
    resultsDiv.style.display = 'block';  // Make sure the results section is visible

    // Mock API data (custom api being made for all characters)
    const characterData = getCharacterData(characterName);

    if (!characterData) {
        resultsDiv.innerHTML = `<p>No data found for ${characterName}. Please try again.</p>`;
        return;
    }

    // Update the results section
    resultsDiv.innerHTML = `
        <h2>${characterData.name}</h2>
        <img src="${characterData.image}" alt="${characterData.name}" />
        <p><strong>Race:</strong> ${characterData.race}</p>
        <p><strong>Affiliation:</strong> ${characterData.affiliation}</p>
        <h3> Description: </h3>
        <p>${characterData.description}</p>
        <h3>Transformations:</h3>
        <ul>
            ${characterData.transformations.map(transform => `
                <li>
                    <strong>${transform.name}</strong> (Power Level: ${transform.powerLevel})
                    <p>${transform.description}</p>
                    <img src="${transform.image}" />
                </li>
            `).join('')}
        </ul>
    `;
}

function getCharacterData(characterName) {
    const data = {
        "goku": {
            name: "Goku",
            image: "https://static.wikia.nocookie.net/characters-from-fiction/images/d/d5/Base_Goku_Z.webp", // Replace with real URL
            description: "Goku is the second and youngest son of Bardock, he is married to Chi-Chi and has 2 kids (Gohan and Goten.)",
            race: "Saiyan",
            affiliation: "Z Fighters",
            transformations: [
                {
                    name: "Super Saiyan",
                    powerLevel: "150,000,000",
                    description: "A transformation that drastically increases power and turns Goku's hair golden.",
                    image: "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b1/Goku_%28Super_Saiyan%29_Artwork.png",
                },
                {
                    name: "Super Saiyan 2",
                    powerLevel: "300,000,000 (at least 2x as strong as Super Saiyan",
                    description: "A more powerful form with lightning-like aura.",
                    image: "",
                },
                {
                    name: "Super Saiyan 3",
                    powerLevel: "150,000,000",
                    description: "A transformation that has long hair and extreme power, but drains energy quickly."
                },
                {
                    name: "Super Saiyan God",
                    powerLevel: "300,000,000",
                    description: "A divine transformation that grants Goku god-like abilities."
                },
                {
                    name: "Super Saiyan God Super Saiyan (Super Saiyan Blue):",
                    powerLevel: "1",
                    description: "A level beyond Super Saiyan God.",
                },
                {
                    name: "Ultra Instinct:",
                    powerLevel: "Unbound (beyond gods,",
                    description: "Ultra Instinct (UI) is a technique that allows Goku to react instinctively, without thinking."
                }
            ]
        },
        "vegeta": {
            name: "Vegeta",
            image: "https://example.com/goku-image.jpg", // Replace with real URL
            race: "Saiyan",
            affiliation: "Z Fighters (formerly apart of the Frieza Force)",
            description: "Prince Vegeta (Vegeta) was born on Planet Vegeta. He is the son of King Vegeta, he has 2 kids Trunks and Bulla.",
            transformations: [
                {
                    name: "Super Saiyan",
                    powerLevel: "15,000,000",
                    description: "A transformation that drastically increases power and turns Goku's hair golden."
                },
                {
                    name: "Super Saiyan 2",
                    powerLevel: "50,000,000",
                    description: "Nothing much changes, he just gets lightning and more powerful."
                },

                {
                    name: "Super Saiyan God",
                    powerLevel: "300,000,000",
                    description: "A divine transformation that Vegeta worked so hard for."
                },
                {
                    name: "Super Saiyan God Super Saiyan (Super Saiyan Blue):",
                    powerLevel: "100",
                    description: "A level even higher than Super Saiyan God."
                },
                {
                    name: "Super Saiyan God Super Saiyan Evolved (Super Saiyan Blue Evolved):",
                    powerLevel: "100",
                    description: "This form was achieved when fighting Jiren, it has barely been seen outside of that fight."
                },
                {
                    name: "Ultra Ego:",
                    powerLevel: "100",
                    description: "This ultimate form, is Ultra Ego. Vegeta may have lost his eyebrows but he is even stronger. This form uses God Of Destruction abilities,"
                },
            ]
        }
    };

    return data[characterName.toLowerCase()];

}
