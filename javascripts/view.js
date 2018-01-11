"use strict";


const $ = require("jquery");
const planetTemplate = require("../templates/planetTemplate.hbs");
const _capitalize = require("lodash.capitalize");

// const jimTemplate = require("../templates/jimTemplate.hbs");

// let array = [
//     {
//         name: "Jim",
//         age: 35,
//     },
//     {
//         name: "Tim",
//         age: 35,
//     },
//     {
//         name: "Lim",
//         age: 35,
//     }
// ];

// let object = {
//     "array": array
// };

// console.log(jimTemplate(object));
var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper("capitalize", function(value) {
 return _capitalize(value);
});

module.exports.outputToDom = (planet) => {
    $("#output").append(planetTemplate(planet));
};