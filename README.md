# stack-finance-notification-service
Stack Finance Project for recruitment

To run this project apache-kafka should be installed.

Please run following commands to create topics.

1. bin/kafka-topics.sh --create \
  --zookeeper localhost:2181 \
  --replication-factor 1 \
  --partitions 1 \
  --topic internal_notification
  
2. bin/kafka-topics.sh --create \
  --zookeeper localhost:2181 \
  --replication-factor 1 \
  --partitions 1 \
  --topic external_email
 
3. bin/kafka-topics.sh --create \
  --zookeeper localhost:2181 \
  --replication-factor 1 \
  --partitions 1 \
  --topic external_sms
  
4. bin/kafka-topics.sh --create \
  --zookeeper localhost:2181 \
  --replication-factor 1 \
  --partitions 1 \
  --topic external_slack
  
Post running the above commands

run: node app.js
