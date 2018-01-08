"use strict";


const $ = require("jquery");
const planetTemplate = require("../templates/planetTemplate.hbs");

module.exports.outputToDom = (planet) => {
    $("#output").append(planetTemplate(planet));
};