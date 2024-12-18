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
    const versions = characterData.versions ? [...Object.values(characterData.versions)] : [characterData];
    // Update the results section

    const resultsHtml = versions.map(version => (`
            <h2>${version.name}</h2>
            <img src="${version.image}" alt="${version.name}" />
            <p><strong>Race:</strong> ${version.race}</p>
            <p><strong>Affiliation:</strong> ${version.affiliation}</p>
            <h3> Description: </h3>
            <p>${version.description}</p>
            <h3>Transformations:</h3>
            <ul>
                ${[...version.transformations].map(transform => `
                    <li>
                        <strong>${transform.name}</strong> (Power Level: ${transform.powerLevel})
                        <p>${transform.description}</p>
                        <img src="${transform.image}" />
                    </li>
                `).join('')}
            </ul>
        `)).join(' ');

    resultsDiv.innerHTML = resultsHtml;
}

function getCharacterData(characterName) {
    const data = {
        "goku": {
            "versions": {
                "z": {
                    name: "Goku (Z)",
                    image: "https://static.wikia.nocookie.net/characters-from-fiction/images/d/d5/Base_Goku_Z.webp",
                    race: "Saiyan",
                    affiliation: "Z Fighters",
                    description: "Son-Goku (Kakarot) is the second and youngest son of Bardock, married to Chi-Chi, and father to Gohan and Goten.",
                    transformations: [
                        {
                            name: "Super Saiyan",
                            powerLevel: "150,000,000",
                            description: "A transformation that turns Goku's hair golden and dramatically increases his power.",
                        },
                        {
                            name: "Super Saiyan 2",
                            powerLevel: "300,000,000",
                            description: "A more powerful form with lightning-like aura."
                        },
                        {
                            name: "Super Saiyan 3",
                            powerLevel: "",
                            description: "A more powerful form with lightning-like aura."
                        },
                    ]
                },
                "super": {
                    name: "Goku (Super)",
                    image: "https://example.com/super_goku.jpg", // Replace with actual Super Goku image URL
                    race: "Saiyan",
                    affiliation: "Z Fighters",
                    description: "Goku continues to grow stronger in Dragon Ball Super, where he gains new transformations and powers.",
                    transformations: [
                        {
                            name: "Super Saiyan God:",
                            powerLevel: "1,000,000,000",
                            description: "A transformation that combines Super Saiyan God and Super Saiyan."
                        },
                        {
                            name: "Super Saiyan God Super Saiyan (Super Saiyan Blue):",
                            powerLevel: "1,000,000,000",
                            description: "A transformation that combines Super Saiyan God and Super Saiyan."
                        },
                        {
                            name: "Ultra Instinct:",
                            powerLevel: "Unbound",
                            description: "A technique that allows Goku to react instinctively without thinking."
                        },
                    ]
                },
                "daima": {
                    name: "Goku (Daima)",
                    image: "https://example.com/daima_goku.jpg", // Replace with actual Daima Goku image URL
                    race: "Saiyan",
                    affiliation: "Z Fighters",
                    description: "In Dragon Ball Daima, Goku and his friends are turned into children. Goku doesn't really see this as a challenge though",
                    transformations: [
                        {
                            name: "Super Saiyan:",
                            powerLevel: "Unmeasured",
                            description: "Normal old Super Saiyan, it is just different as it's a mini/child like Goku."
                        }
                    ]
                }
            }
        },
        "vegeta": {
            name: "Vegeta",
            image: "https://example.com/goku-image.jpg", // Replace with real URL
            race: "Saiyan",
            affiliation: "Z Fighters (formerly apart of the Frieza Force)",
            description: "Prince Vegeta (Vegeta) was born on Planet Vegeta. He is the son of King Vegeta, he has 2 kids Trunks and Bulla.",
            transformations: [
                {
                    name: "Great Ape (Oozaru), Injured:",
                    powerLevel: "70,000",
                    description: "This was Vegeta's last resort as he was getting beaten heavily, he lost a bit of power level since he was injured. ",
                },
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
        },
        " future trunks": {
            name: "Future Trunks",
            image: "https://example.com/goku-image.jpg", // Replace with real URL
            race: "Half-Saiyan",
            affiliation: "Z Fighters",
            description: "Future Trunks is the future version of Trunks (kid), he is the son of Vegeta. The Androids destroyed his future so he came back in time to warn the Z Fighters.",
            transformations: [
                {
                    name: "Super Saiyan",
                    powerLevel: "15,000,000",
                    description: "A transformation that used to slice up Mecha Frieza and his father, King Cold.",
                },
                {
                    name: "Super Saiyan 2",
                    powerLevel: "50,000,000",
                    description: "Nothing much changes, he just gets lightning and more powerful.",
                },

                {
                    name: "Ultimate Gohan",
                    powerLevel: "300,000,000",
                    description: "A divine transformation that Vegeta worked so hard for.",
                },
                {
                    name: "Beast Gohan:",
                    powerLevel: "100",
                    description: "A level even higher than Super Saiyan God.",
                },
            ]
        },
        "gohan": {
            name: "Gohan",
            image: "https://example.com/goku-image.jpg", // Replace with real URL
            race: "Half-Saiyan",
            affiliation: "Z Fighters",
            description: "Gohan is the oldest son of Goku, he is the first human-saiyan kid of many. He has a daughter named Pan. When he was a kid he trained with Piccolo and fought against Nappa and Vegeta on earth.",
            transformations: [
                {
                    name: "Great Ape (Oozaru):",
                    powerLevel: "90,000",
                    description: "A transformation that all saiyans can do (if they have their tail), it is a 10x boost to their power level but it isn't used that often anymore.",
                },
                {
                    name: "Super Saiyan (Teen):",
                    powerLevel: "15,000,000",
                    description: "A transformation that Gohan unlocked while training with Goku in the hyperbolic time chamber",
                },
                {
                    name: "Super Saiyan (Adult):",
                    powerLevel: "15,000,000",
                    description: "Gohan stopped training, became a scholar so he is way weaker than normal.",
                },
                {
                    name: "Super Saiyan 2 (Teen):",
                    powerLevel: "50,000,000",
                    description: "This is the most famous Teen Gohan form, it was used in the fight against Cell.",
                },
                {
                    name: "Super Saiyan 2 (Adult):",
                    powerLevel: "50,000,000",
                    description: "Nothing much changes, he just gets lightning and more powerful.",
                },

                {
                    name: "Ultimate Gohan:",
                    powerLevel: "300,000,000",
                    description: "Ultimate Gohan is awakened after doing a watching Elder Kai do a dance/ritual for 20 Hours",
                },
                {
                    name: "Beast Gohan:",
                    powerLevel: "Not Known",
                    description: "This form is Gohan's strongest and newest form, it might even be on par with Ultra Instinct for strength",
                },
            ]
        },
    }
    return data[characterName.toLowerCase()];
}
