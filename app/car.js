'use strict';


let Car = function(name, model, type) {
  this.name = name || 'General';
  this.model = model || 'GM';
  this.type = type;
  
  this.numOfDoors = (this.name === 'Porshe' || this.name === 'Koenigsegg') ? 2 : 4;
  this.numOfWheels = this.type === 'trailer' ? 8: 4;
  
  this.isSaloon = this.type === 'trailer' ? false : true;
  this.speed = '0 km/h';
};

Car.prototype.drive = function(gear) {
  if (this.name === 'Porshe') {
	  if (gear === 5) this.speed = '250 km/h';
  }
  
  if (this.type === 'trailer') {
	  if (gear === 7) this.speed = '77 km/h';
  }
  
  return this;
};

module.exports = Car;


