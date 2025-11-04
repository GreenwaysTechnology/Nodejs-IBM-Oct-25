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


async function main() {
    // broker.start().then(() => {
    //     console.log('Broker is ready')
    // }).catch(err => {
    //     console.log(err)
    // })
    try {
        await broker.start()
        console.log('broker is ready')
        //invoke biz logic of service
       const response = await  broker.call('hello.sayHello')
       console.log(response)

    }
    catch (err) {
        console.log(err)
    }
}
main()