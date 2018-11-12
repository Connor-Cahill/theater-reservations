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
        let XSession = new Session({ movieID: movieID, name: name })
        this.sessions.push(XSession);
    }

    repr() {
        return {
            name: this.name,
            sessions: this.sessions
        }
    }


}

module.exports = Theater;