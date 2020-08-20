#!/bin/bash

# My DO Testnet Insight Server
export PORT=3000
export BITCOINCOM_BASEURL=http://localhost:3000/api/
export RPC_BASEURL=http://bitcoind-regtest:18332/
export RPC_PASSWORD=regtest
export RPC_USERNAME=regtest
export ZEROMQ_URL=0
export ZEROMQ_PORT=0
export NETWORK=regtest # for use with regtest mode

# My DO Testnet Insight Server
#export BITCOINCOM_BASEURL=http://<insight server IP>:<insight port>/api/
# the BITCOINCOM_BASEURL doesn't work on regtest

npm start
