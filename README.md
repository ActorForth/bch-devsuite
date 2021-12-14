# About

This repo intends to be a toolkit for running a local version of a Bitcoin Unlimited for development and testing purposes. Currently it provides a self-hosted local node, indexer (Electrs), a drop-in Ninsight replacement (Opensight), a regtest version of the rest.bitcoin.com REST APIs, an instance of SLPDB for token querying.

# Prerequisites

To run this node, you must have the follow software installed on your local machine:

- Docker (including docker-compose)
- Python 3
- Virtualenv
- Openssl
- Git

# Getting started

## Cloning this repository.

```bash
git clone https://github.com/ActorForth/bch-toolkit.git
cd ./bch-toolkit
```

## Setup infrastructure.

This will check that the necessary software is installed, and then it will download and prepare the docker containers. For a full list of options, run ./setup with no arguments to see its usage.

**NOTE:** If you wish to have any custom changes applied to the Bitcoin Unlimited, or REST API services, be sure to apply those changes within the _bitcoin.conf_, _fulcrum-config.conf_, or _restapi-config.sh_ files, respectively, before executing the setup script. Bitcoin Cash Node can alternatively be used with fulcrum, by commenting out bitcoin unlimited and uncommenting bitcoin cash node and fulcrum. These can not currently run simultaneously, and one or the other must be used.

```bash
./setup {network} {bu or bchn} {slp} {bchrest or bchapi} {expose-ports}
# First we select a network, which must be regtest, mainnet or testnet
# Next we specify the node, bitcoin unlimited or bitcoincash node
# Slp is optional, selecting this option enables slpdb, slpserve and mongodb
# Next we select a rest interface, bchrest is a fork of the rest.bitcoin.com api, while bchapi is a rest utilized with the bch-js library
# Lastly, we specify whether or not the ports will be exposed on the docker containers.
```

**NOTE:** A RPC password and username prompt will appear for the node, these values will be stored in a pass.conf file. Subsequent setups will utilize these values, however changing these values while an existing toolkit is deployed may cause errors.

**NOTE:** The SLP option will prompt the user to input a MONGODB username and password, this is to prevent external parties from modifying your database if the ports are exposed.

## Running infrastructure.

Execute the _services_ script to start the node, indexer, rest API, and/or SLPDB (depending which ones chose in the _setup_ script).

```bash
./services start
```

## Testing.

```bash
./bitcoin-cli getblockchaininfo
```

Expected result

```
{
  "chain": "regtest",
  "blocks": 200,
  "headers": 200,
  "bestblockhash": "0714183b15ac3757e35152fadbc0fd2d73ec97c4d9e1ee486882b18da8b256ca",
  "difficulty": 4.656542373906925e-10,
  "mediantime": 1614598375,
  "verificationprogress": 1,
  "initialblockdownload": false,
  "chainwork": "0000000000000000000000000000000000000000000000000000000000000192",
  "size_on_disk": 48350,
  "pruned": false,
  "softforks": [
    {
      "id": "bip34",
      "version": 2,
      "reject": {
        "status": false
      }
    },
    {
      "id": "bip66",
      "version": 3,
      "reject": {
        "status": false
      }
    },
    {
      "id": "bip65",
      "version": 4,
      "reject": {
        "status": false
      }
    }
  ],
  "bip9_softforks": {
  },
  "bip135_forks": {
  }
}
```

## Stop infrastructure.

Once you decide to call it a day, you can shut down your local environment by executing:

```bash
./services stop
```

# Cleaning Up

If you experience any issues, or would like to completely erase the current wallet and node containers, run the following script:

```bash
./clean
```

**NOTE:** this command may need to be ran with sudo while on linux

**WARNING:** The 'clean' script is very destructive, so make sure you only use it when you want to _completely erase_ the entire current instance of nodes and the wallet.

# Known Issues

There are a few issues with this setup that could use improvement in the future.

- Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.

- Currently blocks must be generated manually after transactions are made in order to mine them into blocks. The possibility of adding an automation to generate a block every few minutes could be a consideration to look into.
