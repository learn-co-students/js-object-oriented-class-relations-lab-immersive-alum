let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this)
  }
  
  trips() {
    return store.trips.filter(tripObj => tripObj.driverId === this.id)
  }
  
  passengers() {
    return this.trips().map(tripObj => tripObj.passenger())
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this)
  }
  
  trips() {
    return store.trips.filter(tripObj => tripObj.passengerId === this.id)
  }
  
  drivers() {
    return this.trips().map(tripObj => tripObj.driver())
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    store.trips.push(this)
  }
  
  passenger() {
    return store.passengers.find(passengerObj => passengerObj.id === this.passengerId)
  }
  
  driver() {
    return store.drivers.find(driverObj => driverObj.id === this.driverId)
  }
}