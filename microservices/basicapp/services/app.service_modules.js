const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.loadService('./services/math.service')

async function main() {
    try {
        await broker.start()
        const add = await broker.call('math.add')
        const multiply = await broker.call('math.multiply')
        console.log(add, multiply)

    }
    catch (err) {
        console.log(err)
    }
}
main()