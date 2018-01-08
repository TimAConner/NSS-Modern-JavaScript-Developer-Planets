"use strict";


const view = require("./view");
const helper = require("./helper");


const earth = require("./earth");
view.outputToDom(earth.getPlanetInfo());

const jupiter = require("./jupiter");
view.outputToDom(jupiter.getPlanetInfo());


const mars = require("./mars");
view.outputToDom(mars.getPlanetInfo());


const mercury = require("./mercury");
view.outputToDom(mercury.getPlanetInfo());


const neptune = require("./neptune");
view.outputToDom(neptune.getPlanetInfo());


const saturn = require("./saturn");
view.outputToDom(saturn.getPlanetInfo());


const uranus = require("./uranus");
view.outputToDom(uranus.getPlanetInfo());


const venus = require("./venus");
view.outputToDom(venus.getPlanetInfo());