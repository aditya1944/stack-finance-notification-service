const {Kafka} = require('kafkajs');
const fs = require('fs');
const {client_id,broker_1,group_id} = require('./config');

class KafkaClient{
    constructor(){
        try{
            this._kafkaClient = new Kafka({
                clientId: client_id,
                brokers:[broker_1],
            });
            this._consumer = this._kafkaClient.consumer({
                groupId: group_id,
            });
            this._producer = this._kafkaClient.producer();
        }catch(error){
            fs.appendFile('error.log',JSON.stringify(error));
            process.exit(0);
        }
    }
}

module.exports = KafkaClient;
