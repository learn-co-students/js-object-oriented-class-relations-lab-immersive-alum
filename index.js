let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{

  constructor(name){
    this.id = driverId++;
    this.name = name;
    store.drivers.push(this)
  }

  trips(){
    // let trips = [];
    // for(let trip of store.trips){
    //   if(trip.driverId === this.id){
    //     trips.push(trip);
    //   }
    // }
    // return trips;
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers(){
    // let passengers = [];
    // for(let trip of this.trips()){
    //   passengers.push(trip.passenger())
    // }
    // return passengers;
    return this.trips().map(trip => trip.passenger())
  }

}

class Passenger{

  constructor(name){
    this.id = passengerId++;
    this.name = name;
    store.passengers.push(this)
  }

  trips(){
    // let trips = [];
    // for(let trip of store.trips){
    //   if(trip.passengerId === this.id){
    //     trips.push(trip);
    //   }
    // }
    // return trips;
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers(){
    // let drivers = [];
    // for(let trip of this.trips()){
    //   drivers.push(trip.driver())
    // }
    // return drivers;
    return this.trips().map(trip => trip.driver())
  }
}

class Trip{

  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    this.driverObj = driver;
    this.passengerObj = passenger
    store.trips.push(this)
  }

  driver(){
    return this.driverObj
  }

  passenger(){
    return this.passengerObj
  }

}
