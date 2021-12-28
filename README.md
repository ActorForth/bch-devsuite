# Getting started

## Prerequisites

To run this node, you must have the follow software installed on your local machine:

- Docker (including docker-compose)
- Python 3
- Virtualenv (`sudo apt install python3-venv`)
- Openssl
- Git

## Cloning this repository

```bash
# Clone repository
git clone https://github.com/ActorForth/bch-toolkit.git
cd ./bch-toolkit

# Setup virtualenv
python3 -m venv venv
source ./venv/bin/activate

# Install script dependencies
pip install -r requirements.txt
```

## Setup infrastructure

This will check that the necessary software is installed, and then it will download and prepare the docker containers. For a full list of options, run ./setup with no arguments to see its usage.

**NOTE:** If you wish to have any custom changes applied to the Bitcoin Unlimited, or REST API services, be sure to apply those changes within the _bitcoin.conf_, _fulcrum-config.conf_, or _restapi-config.sh_ files, respectively, before executing the setup script. Bitcoin Cash Node can alternatively be used with fulcrum, by commenting out bitcoin unlimited and uncommenting bitcoin cash node and fulcrum. These can not currently run simultaneously, and one or the other must be used.

```bash
./bch-devsuite init
# First we select a network, which must be regtest, mainnet or testnet
# Next we specify the node, bitcoin unlimited or bitcoincash node
# Next we select a rest interface, bchrest is a fork of the rest.bitcoin.com api, while bchapi is a rest utilized with the bch-js library
# Slp is optional, selecting this option enables slpdb, slpserve and mongodb
# Lastly, we specify whether or not the ports will be exposed on the docker containers.
```

**NOTE:** A RPC password and username prompt will appear for the node, these values will be stored in generated docker-compose.yml file.

**NOTE:** The SLP option will prompt the user to input a MONGODB username and password, this is to prevent external parties from modifying your database if the ports are exposed.

## Running infrastructure

Execute the _services_ script to start the node, indexer, rest API, and/or SLPDB (depending which ones chose in the _setup_ script).

```bash
./bch-devsuite start
```

## Testing

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

## Stop infrastructure

Once you decide to call it a day, you can shut down your local environment by executing:

```bash
./bch-devsuite stop
```

## Cleaning Up

If you experience any issues, or would like to completely erase the current wallet and node containers, run the following script:

```bash
./clean
```

**NOTE:** this command may need to be ran with sudo while on linux

**WARNING:** The 'clean' script is very destructive, so make sure you only use it when you want to _completely erase_ the entire current instance of nodes and the wallet.

# Advance Usage

how to operate in advance use cases, use case by use case

# Reference

explanation of all available options/configurations that can be used

# Architecture

There is mainly 2 stack you can use 1. rest.bitcoin.com techstack 2. Chris Troutner JS tech stack

### 1. rest.bitcoin.com tech stack

![rest.bitcoin.com Tech Stack](/docs/assets/rest-bitcoin-com_techstack.jpg "rest.bitcoin.com Tech Stack")

All these component work together in stack means that if the lower part is missing then some of the API in [rest.bitcoin.com](https://github.com/ActorForth/rest.bitcoin.com) might not function properly.

The main reason that you should use all of our fork stack is because we maintain and guarantee that all of the components will work well with the Regtest address format. Allow you to test locally more easily.

The blue part is the node that you choose. Default node is Bitcoin unlimited and there is Bitcoin Cash node as an option as well. Currently this node is always required.

The red part is an indexer. ElectrsCash is for indexing Bitcoin cash transaction and aggregate BCH balance per address. Without these you won't be able to query the amount of BCH you own in a particular address. OpenSight is a shim micro services to make ElectrsCash compatible with [rest.bitcoin.com](https://github.com/ActorForth/rest.bitcoin.com) API interface.
[SLPDB](slp.dev/tooling/slpdb/#what-is-slpdb) is an indexer for SLP token, color coin on top of Bitcoin Cash, this will verified if the data relate to the color coin is valid and checking if the coin follow the SLP off-chain concensus.

The orange part is [rest.bitcoin.com](https://github.com/ActorForth/rest.bitcoin.com) API, a unify interface of anyone to interact with all of these complex services through REST API interface uniformly

The green part is the client SDK that will interact with [rest.bitcoin.com](https://github.com/ActorForth/rest.bitcoin.com) interface. [Bitcash](https://github.com/ActorForth/bitcash) is written in Python and [Bitbox](https://github.com/ActorForth/bitbox-sdk) is written in typescript.

### 2. Chris Troutner JS tech stack

![Chris Troutner JS Tech Stack](/docs/assets/Chris-Troutner-JS-techstack.jpg "Chris-Troutner-JS-techstack")

The main different is the rest interface. bch-api have a different API from rest.bitcoin.com and can talk directly to Electrscash without requiring the shim.

# Sponsorship

provide a way to funding us

# Roadmap

# Contribution Guide

# Archived

## About

This repo intends to be a toolkit for running a local version of a Bitcoin Unlimited for development and testing purposes. Currently it provides a self-hosted local node, indexer (Electrs), a drop-in Ninsight replacement (Opensight), a regtest version of the [rest.bitcoin.com](https://github.com/ActorForth/rest.bitcoin.com) REST APIs, an instance of SLPDB for token querying.

## Known Issues

There are a few issues with this setup that could use improvement in the future.

- Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.

- Currently blocks must be generated manually after transactions are made in order to mine them into blocks. The possibility of adding an automation to generate a block every few minutes could be a consideration to look into.
