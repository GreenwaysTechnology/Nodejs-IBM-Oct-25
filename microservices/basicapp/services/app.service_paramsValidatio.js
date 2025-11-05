const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

// broker.createService({
//     name: 'math',
//     actions: {
//         multiply(ctx) {
//             const { a, b } = ctx.params
//             return a * b
//         }
//     }
// })
broker.createService({
    name: 'math',
    actions: {
        multiply: {
            //here we can add extra meta data about this method
            //validation logic
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true,
                },
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        // const add = await broker.call('math.multiply', { a: 10, b: 10 })
        // const add = await broker.call('math.multiply', { a: '10', b: 10 })
        // const add = await broker.call('math.multiply', { a: 10.6, b: 10 })
        const add = await broker.call('math.multiply', { a: -10, b: 10 })
        console.log(add)

    }
    catch (err) {
        console.log(err)
    }
}
main()