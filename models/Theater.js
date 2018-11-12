const Session = require('./Session.js')


class Theater {

    constructor(name) {
        this.name = name;
        this.sessions = [];
    }

    /**
     * This method allows us to append a session to our theater class
     * @param {*} movieID - Unique ID 
     * @param {*} name - Name of Movie
     */
    
    addSession(movieID, name) {
        this.sessions.push({ movieID: movieID, name: name });
    }


}

module.exports = Theater;