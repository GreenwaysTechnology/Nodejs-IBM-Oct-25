const EventEmitter = require('node:events')


class Logger extends EventEmitter {
    constructor() {
        //register events
        super()
        // this.on('log', (data) => {
        //     console.log(`[Console] ${data.timestamp} - ${data.message}`)
        // })
        //Listener 2: fake file loger
        this.on('log', (data) => {
            console.log(`[File] Writing to file ${JSON.stringify(data)}`)
        })
    }
    //emit log
    log(message) {
        //Emit 'Log' Event with message and Timestamp
        this.emit('log', { message, timestamp: new Date().toISOString() })
    }
}
class UserService {
    logger;
    constructor(logger) {
        this.logger = logger
    }
    save(data) {
        console.log(data)
        this.logger.log('User has been saved')
    }
}
function main() {
    //create logger 
    // let logger = new Logger()
    // logger.log('User saved!')
    // logger.log('User updated!')
    let user = new UserService(new Logger())
    user.save({ id: 1, name: 'Subramaian' })
}
main()