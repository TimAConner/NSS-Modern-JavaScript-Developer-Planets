"use strict";

let planetInformation = {
    "name": "Earth",
    "yearDiscovered" : "NA",
    "mass": 7024597220000000000, // KG
    "size": 3959, // Mi
    "distance_from_sun": {
        "aphelion": 94500000, //mi
        "perihelion": 91401000 //mi
    },
    "atmosphere_composition":{
        "nitrogen": 78.08,
        "oxygen": 20.95,
        "argon": 0.930,
        "carbon dioxide": 0.0402
    },
    "satellite": "Just a few.",
    "probes_and_explorers": "All of humanity."
};

module.exports.getPlanetInfo = () => planetInformation;