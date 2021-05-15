
const KafkaClient = require('./kafka');
const {email_channel_id, sms_channel_id, slack_channel_id, email_topic, sms_topic, slack_topic} = require('./config');

class Producer extends KafkaClient{
    constructor(){
        super();
    }
    async produceMessage(channelId, message){
        try{
            await this._producer.connect();
            switch(channelId){
                case email_channel_id:
                    await this._producer.send({
                        topic: email_topic,
                        messages:[
                            {value: message},
                        ],
                    });
                    break;
                case sms_channel_id:
                    await this._producer.send({
                        topic: sms_topic,
                        messages:[
                            {value:message},
                        ],
                    });
                    break;
                case slack_channel_id:
                    await this._producer.send({
                        topic: slack_topic,
                        messages:[
                            {value: message},
                        ],
                    });
                    break;
                default:
                    return;
            }
        }catch(error){
            //kafka is down
            /*
                logs to console or data dump
            */
        }
    }
}

const producer = new Producer();

module.exports =  producer;
