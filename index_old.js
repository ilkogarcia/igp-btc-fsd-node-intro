const axios = require('axios');

const getAllCharacters = async () => {
    let allCharacters = await axios.get("https://rickandmortyapi.com/api/charactr");
    return allCharacters;
}

const getAllLocations = async () => {
    let allLocations = await axios.get("https://rickandmortyapi.com/api/location");
    return allLocations;
}

getAllCharacters()
    .then(
        res => {
            res.data.results.map( character => console.log(character.name))
        }
    )
    .catch(
        err => {
            switch (err.response.status) {
                case 404:
                    console.log("Página no encontrada");
                    break;
                case 501:
                    console.log("Acceso no autorizado");
                    break;
                default:
                    break;
            }
        }
    );


    
getAllLocations()
.then(
    res => {
        res.data.results.map( location => console.log(location?.name))
    }
)
.catch(
    err => {
        switch (err.response.status) {
            case 404:
                console.log("Página no encontrada");
                break;
            case 501:
                console.log("Acceso no autorizado");
                break;
            default:
                break;
        }
    }
);
