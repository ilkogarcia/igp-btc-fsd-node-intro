const axios = require('axios');

console.log("Hola, aquí tienes el nombre y modelo de cada nave de Star Wars");

const bringSpaceShips = async () => {
    let spaceships = await axios.get("https://swapi.dev/api/starships/")
    return spaceships;
}

let misNaves = [];

bringSpaceShips()
    .then (
        resultado => (
            misNaves = Array.from(resultado.data.results)
            )
        )
    .catch (
        error => console.log(error)
    )

console.log(misNaves);

// muestra todas las naves con su indice
const showAllShips = () => {
    for (let i = 1; i < misNaves.length; i++) {
        console.log(`${i} -> Nombre: ${misNaves[i].name} / Modelo: ${misNaves[i].model}`)
    }
}

