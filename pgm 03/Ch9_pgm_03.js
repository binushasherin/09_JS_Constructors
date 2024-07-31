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

var planets = [
    buildPlanet( "Jupiter", 5, "Gas Giant" ),
    buildPlanet( "Neptune", 8, "Ice Giant" ),
    buildPlanet( "Mercury", 1, "Terrestrial" ),
    buildPlanet( "Mars", 4, "Terrestrial" ),
    buildPlanet( "earth", 3, "Terrestrial" )
];

planets.forEach(function (planet) {
    planet.showPlanet();
    console.log('------------------');
});
