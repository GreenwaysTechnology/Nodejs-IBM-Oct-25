const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    created(broker) {
        console.log('broker created')
    },
    started(broker) {
        console.log('broker started')
    },
    stopped(broker) {
        console.log('broker is stopped')
    }
})

broker.createService({
    name: "math",
    actions: {
        add: {
            //meta information
            params: {
                a: { type: "number", positive: true, integer: true, default: 0 },
                b: { type: "number", positive: true, integer: true, default: 0 }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
        }
    },
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
    }
})

async function main() {
    try {
        await broker.start()
        //will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
