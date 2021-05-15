const KafkaClient = require('./kafka');
const fs = require('fs');
const pushNotification = require('./notification');
const {consumer_topic} = require('./config');

class Consumer extends KafkaClient{
    constructor(){
        super();
    }
    async consume(){
        try{
            await this._consumer.connect();
            await this._consumer.subscribe({
                topic: consumer_topic,
                fromBeginning: true,
            });
            await this._consumer.run({
                eachMessage:async ({message})=>{
                    pushNotification(message.value.toString());
                },
            });
        }catch(error){
            fs.appendFile('error.log',JSON.stringify(error));
            process.exit(1);
        }
    }
}

const consumer = new Consumer();

module.exports = consumer;
