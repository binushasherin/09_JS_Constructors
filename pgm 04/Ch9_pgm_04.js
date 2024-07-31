var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.showPlanet();


var Planet1 = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet1 = function () {
        var info = this.name + ": planet1 " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet1 = new Planet( "Earth", 3, "Terrestrial" );

planet1.showPlanet();