const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000, // in milliseconds
    tracing: {
        enabled: true,
        exporter: "Console",
        events: true,
        stackTrace: true
    }
});

broker.createService({
    name: 'calculator',
    actions: {
        async add(ctx) {
            const { a, b } = ctx.params
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 3000, `${a + b} - ${broker.nodeID} `)
            })
        }
    }
})
async function init() {
    await broker.start()
    broker.repl()
}
init();