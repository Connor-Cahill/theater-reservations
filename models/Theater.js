const Session = require('./Session.js')


class Theater {

    constructor(obj) {
        this.name = obj.name;
        this.sessions = [];
    }

    /**
     * This method allows us to append a session to our theater class
     * @param {*} movieID - Unique ID 
     * @param {*} name - Name of Movie
     */

    addSession(movieID, name) {
        // X =
            this.sessions.push({ movieID: movieID, name: name });
    }

    repr() {
        return {
            name: this.name,
            sessions: this.sessions
        }
    }


}

module.exports = Theater;