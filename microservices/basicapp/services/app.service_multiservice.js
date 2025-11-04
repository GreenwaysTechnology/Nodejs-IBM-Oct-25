const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//service schema
broker.createService({
    name: 'hello',
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer!'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        //biz methods
        sayHai() {
            return 'Hai Moleculer!'
        }
    }
})

async function main() {
    try {
        await broker.start()
        console.log('broker is ready')
        //invoke biz logic of service
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        console.log(hello,hai)

    }
    catch (err) {
        console.log(err)
    }
}
main()