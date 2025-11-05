const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker({
    // transporter: "TCP"
     transporter:"nats://localhost:4222"

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
                return `${a + b} from ${broker.nodeID}`
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