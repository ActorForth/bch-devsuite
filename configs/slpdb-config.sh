#!/bin/bash

# This file should be copied to the config directory mounted by the Docker
# container at started. Edit this file to customize the environment variables
# controlling the infrastructure that SLPDB depends on.

# Set the MongoDB IP address and port. By default uses the MongoDB Docker
# container bundled in the docker-compose.yml file.
#export db_url=mongodb://localhost:27017
export db_url=mongodb://mongo-slpdb:27017
echo db_url $db_url
./node_modules/migrate-mongo/bin/migrate-mongo.js up
echo "Finished DB migrations."


# Set the full node IP address and port
export rpc_protocol='http'
export rpc_host=bitcoind-regtest
export rpc_port=18332
export rpc_user=regtest
export rpc_pass=regtest
export core_from=543375
export core_from_testnet=0
export zmq_incoming_host=bitcoind-regtest
export zmq_incoming_port=28332

# Turn off graph search
export enable_graph_search=0

# Turn off ZMQ output port
export zmq_outgoing_enable=0

# Set the telemtry name for this node
export telemetry_advertised_host=trout-docker-unedited

npm start
#tsc && node --max_old_space_size=8192 index run --startHeight 604260
