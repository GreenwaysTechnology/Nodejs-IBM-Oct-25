const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

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

            }
        }
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