const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    logger: "Console"
})

broker.createService({
    name: 'user',
    actions: {
        list: {
            handler(ctx) {
                this.logger.info('handler is called')
                return [{
                    id: 1, name: 'Subramanian'
                },
                {
                    id: 2, name: 'Murugan'
                }]
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
