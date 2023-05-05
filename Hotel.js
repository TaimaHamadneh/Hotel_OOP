class Hotel {
    #minFloor
    #maxFloor
    constructor(name, address, numRooms, minFloor, maxFloor, rooms) {
      this.name = name;
      this.address = address;
      this.numRooms = numRooms;
      this._minFloor = minFloor;
      this._maxFloor = maxFloor;
      this.rooms = rooms;
    }
  
    get minFloor() {
      return this._minFloor;
    }

    set minFloor(value) {
      this._minFloor = value;
    }

    get maxFloor() {
      return this._maxFloor;
    }

    set maxFloor(value) {
      this._maxFloor = value;
    }
  
    printAdvertisement() {
      console.log(`Welcome to our ${this.name} Hotel !! We are located at ${this.address} and have ${this.numRooms} rooms available.`);
    }
  
    listBookedRooms() {
      const bookedRooms = this.rooms.filter(room => room.isBooked);
      console.log(`Booked rooms: ${bookedRooms.map(room => room.roomNum).join(', ')}`);
    }
  }
  
  class Room {
    constructor(floorNum, roomNum, price, isBooked = false) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
      this.isBooked = isBooked;
    }
  
    printRoom() {
      console.log(`Room ${this.roomNum} on floor ${this.floorNum} costs $${this.price} per day.`);
    }
  
    book() {
      if (this.isBooked) {
        console.log(`Unfortunately, room ${this.roomNum} has already been booked.`);
      } else {
        this.isBooked = true;
        console.log(`Room ${this.roomNum} has been booked.`);
      }
    }
  
    isRoomBooked() {
      return this.isBooked;
    }
  }
  
  class RoomWithView extends Room {
    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
      super(floorNum, roomNum, price, isBooked);
      this.view = view;
      this.numberOfBeds = numberOfBeds;
    }

  }
  
  class SleepingRoom extends Room {
    constructor(floorNum, roomNum, price, isBooked, personCapacity) {
      super(floorNum, roomNum, price, isBooked);
      this.personCapacity = personCapacity;
    }
  
  }
  
  // Create some Room objects
  const room1 = new Room(1, '101', 150);
  const room2 = new RoomWithView(1, '102', 200, false, 'city view', 2);
  const room3 = new SleepingRoom(2, '201', 100, false, 4);
  
  // Put the Room objects into an array
  const rooms = [room1, room2, room3];
  
  // Create a Hotel object using the Room objects
  const hotel = new Hotel('The Hilton Hotel', '401 Main St', 3, 1, 2, rooms);
  
  // Call some methods on the Hotel and Room objects
  hotel.printAdvertisement();
  room2.book();
  room3.book();
  hotel.listBookedRooms();
