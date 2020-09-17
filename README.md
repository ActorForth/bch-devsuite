# About

This repo intends to be a toolkit for running a local version of a Bitcoin Cash node for development and testing purposes. Currently it provides a self-hosted local node, a patched version of Electron Cash SLP, and a localized version of the rest.bitcoin.com REST APIs.

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

Next, run the 'setup' script. This will check that the necessary software is installed, create certificates for use with SSL/TLS, build and prepare the docker containers, download the Electron-Cash-SLP repository, and patch necessary files to enable it to run on the regtest network.

__NOTE:__ If you wish to have any custom changes applied to the Bitcoin Unlimited, Nginx Reverse Proxy, or REST API services, be sure to apply those changes within the _bitcoin.conf_, _nginx.conf_, or _restapi-config.sh_ files, respectively, before executing the setup script.

```bash
./setup all
```

Next, you should execute the 'run' script to start the node service and the Electron Cash SLP wallet.

```bash
./run wallet
```
_**Alternatively**, if you only want the Bitcoin Unlimited node and REST APIs without using the wallet, you may execute it this way:_

```bash
./run server
```


_**JS stack bootup example**_
```bash
./run server slpdb js
```


Once the Electron Cash SLP wallet gui appears, it will ask you for "automatic" or "manually select a server". Either option is fine. After that, you'll go through the prompts to create a new wallet. Finally once the wallet is created, you'll be greated with the main interface.
__Please note:__ you may notice the status bar in the lower left corner indicates "Not connected." In order to remedy this, please open another terminal, navigate to the **bch-toolkit** directory, and execute:

```bash
./bitcoin-cli 
```

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

* Currently blocks must be generated manually after transactions are made. The possibility of adding an automation to generate a block every few seconds could be a consideration to look into.





