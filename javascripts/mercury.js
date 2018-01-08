"use strict";

let planetInformation = {
    "name": "Mercury",
    "yearDiscovered" : "NA",
    "mass": 7024597220000000000, // KG
    "size": 3959, // Mi
    "distanceFromSun": {
        "aphelion": 94500000, //mi
        "perihelion": 91401000 //mi
    },
    "atmosphereComposition":{
        "nitrogen": 78.08,
        "oxygen": 20.95,
        "argon": 0.930,
        "carbon dioxide": 0.0402
    },
    "satellite": "Just a few.",
    "probesAndExplorers": "All of humanity."
};

module.exports.getPlanetInfo = () => planetInformation;