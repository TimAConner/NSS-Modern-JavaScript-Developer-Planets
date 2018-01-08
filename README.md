# NSS-Modern-JavaScript-Developer-Planets
## Motivation
This was Javascript practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Synopsis
You'll be creating a web page that will display important scientific data about all eight planets in our solar system. The information about each planet will be separate modules.
- [ ]  Each module will export a single function named `outputTo` that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.
    - [x] Earth
    - [x] Mercury
    - [x] Venus
    - [x] Mars
    - [x] Jupiter
    - [x] Saturn
    - [x] Uranus
    - [x] Neptune


    ```js
    function outputTo(domElement) {
      domElement.append(...);
    }
    ```
    
- [x]  Each module should output the following information.
    - [x]  Name
    - [x]  Year discovered
    - [x]  Mass
    - [x]  Size
    - [x]  Distance from Sun
    - [x]  Atmosphere composition
    - [x]  Satellites
    - [x]  Name of any probes/orbiters/explorers that have visited or landed on that planet
- [x]  Create a main module that uses `require` to include each planet's module as a dependency and then subsequently calls the `outputTo()` method for each one, in the right order.
 ## Bonus stretch goal

- [x] Once you've got the basic implementation working, find a way to have the `outputTo()` only defined once, and still be able to output each planet's information to the DOM. It can't be defined in the **main** module.
