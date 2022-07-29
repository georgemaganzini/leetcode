class UndergroundSystem {
    constructor(){
        this.tripsInProgress = {};
        this.tripsCompleted = {};
    };

    checkIn(id, stationName, t){
       if (!this.tripsInProgress[id]) this.tripsInProgress[id] = [stationName, t];
    }

    // can still use orignal method of computing average time here to speed things up
    // depends on how often getAverageTime is called in real-world scenario
    checkOut(id, stationName, t){
        let start = this.tripsInProgress[id][0];
        let tripTime = t - this.tripsInProgress[id][1];
        delete this.tripsInProgress[id];
        if (this.tripsCompleted[`${start}->${stationName}`]){
            this.tripsCompleted[`${start}->${stationName}`].push(tripTime);
        } else this.tripsCompleted[`${start}->${stationName}`] = [tripTime];
    }

    getAverageTime(startStation, endStation){
        let trips =  this.tripsCompleted[`${startStation}->${endStation}`]
        return trips.reduce((a, c) => a + c, 0) / trips.length;
    }
};
