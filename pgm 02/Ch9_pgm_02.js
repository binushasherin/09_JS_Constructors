var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

planet1.showPlanet();



var buildPlanet = function (name, position, type) {
    var planet2 = {};

    planet2.name = name;
    planet2.position = position;
    planet2.type = type;



    planet2.showPlanet = function () {
        var info = planet2.name;
        info += ": planet " + planet2.position;
        info += " - " + planet2.type;
        console.log(info);
    };
  

    return planet2;
};

var planet2 = buildPlanet(
    "Earth",
    3,
    "Terrestrial planet"
);

planet2.showPlanet();