let restaurant = {
    name: 'Poopy Mcpoop poops',
    guestCapcity: 75,
    guestCount: 0,
    checkAvailbility: function (partySize) {
        let seatsLeft = this.guestCapcity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//challenge area
//create two methods called - seatParty, removeParty
//seatParty added to guestCount
//removeParty subtracted from guestCount

restaurant.seatParty(72);
console.log(restaurant)
console.log(restaurant.checkAvailbility(4));
restaurant.removeParty(5);
console.log(restaurant)
console.log(restaurant.checkAvailbility(4));
