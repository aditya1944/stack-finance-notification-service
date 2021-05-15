const producer = require('./producer');

const pushNotification = function(consumerMessage){
    const parsedMessage = JSON.parse(consumerMessage);
    /*
        implement authorization and unsubsribe methods here from UserUtils.js
     */
    const thirdPartyObj = {
        message: parsedMessage['message'],
        channelInfo: parsedMessage['channelInfo'],
    };
    producer.produceMessage(parsedMessage.channelId, JSON.stringify(thirdPartyObj));
};

module.exports = pushNotification;
