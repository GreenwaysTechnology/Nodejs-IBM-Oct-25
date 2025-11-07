
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000, // in milliseconds,
    metrics: {
        enabled: false,
        reporter: [
            "Console"
        ]
    },
    tracing: {
        enabled: true,
        exporter: "Console",
        events: true,
        stackTrace: true
    }
});
broker.createService({
    name: 'math',
    actions: {
        add: {
            fallback: (ctx, err) => `Default value ${0}`,
            async handler(ctx) {
                const { a, b, timeout } = ctx.params
                let res = await ctx.call('calculator.add', { a, b }, {
                    timeout: timeout
                })
                //console.log(`Result Got From Remote Services ${res}`)
                return `Result Got From Remote Services ${res}`
            }
        }

    }
})
async function init() {
    await broker.start()
    broker.repl()
}
init();

