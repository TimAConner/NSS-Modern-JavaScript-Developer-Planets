"use strict";

const earth = require("./earth");
const view = require("./view");
const _capitalize = require("lodash.capitalize");
const Handlebars = require("handlebars");

Handlebars.registerHelper('capitalize', function(item) {
    return _capitalize(item);
});

view.outputToDom(earth.getPlanetInfo());


