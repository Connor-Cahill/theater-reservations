class Session {

    constructor(obj) {
        this.movieId = obj.movieId;
        this.name = obj.name;
        this.seats = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    }

   /**
    * Updates the user seats
    * @param {*} seat  - Seat index
    * @param {*} status - Status
    */
    updateSeats(seat, status) {
        // todo()
    }

    repr() {
        return {
            movieId: this.movieId,
            name: this.name,
            seats: this.seats
        }
    }

}


module.exports = Session;