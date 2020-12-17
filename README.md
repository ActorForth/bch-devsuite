# About

This repo intends to be a toolkit for running a local version of a Bitcoin Cash Node for development and testing purposes. Currently it provides a self-hosted local node, indexer (Fulcrum), a drop-in Ninsight replacement (Opensight), a regtest version of the rest.bitcoin.com REST APIs, an instance of SLPDB for token querying, and a regtest-patched version of Electron Cash SLP.

# Prerequisites

To run this node, you must have the follow software installed on your local machine:

* Docker (including docker-compose)
* Python 3
* Virtualenv
* Openssl
* Git

# Installation

Begin by cloning this repository.

```bash
git clone https://github.com/ActorForth/bch-toolkit.git 
cd ./bch-toolkit
```

Next, run the 'setup' script. This will check that the necessary software is installed, and then it will download and prepare the docker containers. For a full list of options, run ./setup with no arguments to see its usage. 

__NOTE:__ If you wish to have any custom changes applied to the Bitcoin Cash Node, Fulcrum, or REST API services, be sure to apply those changes within the _bitcoin.conf_, _fulcrum-config.conf_, or _restapi-config.sh_ files, respectively, before executing the setup script.

```bash
./setup node rest
```

Next, you should execute the _services_ script to start the node, indexer, rest API, and/or SLPDB (depending which ones chose in the _setup_ script).

```bash
./services run
```

Once you decide to call it a day, you can shut down your local environment by executing:

```bash
./services stop
```

**If you selected the Electron Cash SLP wallet:**

Once the Electron Cash SLP wallet GUI appears, it will ask you for "automatic" or "manually select a server". Either option is fine. After that, you'll go through the prompts to create a new wallet. Finally once the wallet is created, you'll be greated with the main interface.
__Please note:__ you may notice the status bar in the lower left corner indicates "Not connected." In order to remedy this, please open another terminal, navigate to the **bch-toolkit** directory, and execute:

```bash
./bitcoin-cli generatetoaddress bchreg:xxxx
```

where "xxxx" is a bitcoin cash address whose private keys you control. (It can be an address from the "Addresses" tab in Electron Cash SLP's main window.)

This script gives you easy access to the bitcoin-cli that communicates with the running node. When executed with no parameters, this script will simply generate 1 block on your regtest blockchain. After generating a block or two, you should open the "Networks" dialog in the Electron Cash SLP main window, navigate to the "Servers" tab, and un-ban the 'localhost' server. For some reason, the first time blocks are generated, the localhost server gets banned. This does only happen the first time, after which you shouldn't need to repeat this step in the future (at least until you run the './clean' script, which completely removes everything and starts you back from scratch.)

# Cleaning Up

If you experience any issues, or would like to completely erase the current wallet and node containers, run the following script:

```bash
./clean all
```

__WARNING:__ The 'clean' script is very destructive, so make sure you only use it when you want to _completely erase_ the entire current instance of nodes and the wallet.

# Known Issues

There are a few issues with this setup that could use improvement in the future.

* Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.

* Currently blocks must be generated manually after transactions are made in order to mine them into blocks. The possibility of adding an automation to generate a block every few minutes could be a consideration to look into.





