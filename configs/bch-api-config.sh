#!/bin/bash

# Full node
export RPC_BASEURL=http://localhost:18443/
export RPC_USERNAME=regtest
export RPC_PASSWORD=regtest
export NETWORK=regtest

# SLPDB
export SLPDB_URL=http://localhost:12300/

# Blockbook
export BLOCKBOOK_URL=https://<Blockbook IP>:9131/
# Allow node.js to make network calls to https using self-signed certificate.
export NODE_TLS_REJECT_UNAUTHORIZED=0

# Mainnet Fulcrum / ElectrumX
export FULCRUM_URL=localhost
export FULCRUM_PORT=50002

export SECURITY=false
### require if SECURITY=true ###
export TOKENSECRET=somelongpassword
# Redis require for rate limite middleware
export REDIS_HOST=6379
export REDIS_PORT=127.0.0.1
##################################

npm start
