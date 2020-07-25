# About

This repo intends to be a toolkit for running a local version of a Bitcoin Cash node for development and testing purposes.

# Prerequisites

To run this node, you must have the follow software installed on your local machine:

* Docker
* Python 3
* Virtualenv
* Openssl
* Git

# Installation

Start by cloning this repo

```bash
git clone https://github.com/repoa
cd ./bch-toolkit
```

Next, run the 'setup' script. This will prepare the docker containers, create certificates for ssl, and download Electron-Cash-SLP.

__Note:__ If you wish to have any custom changes applied to the Bitcoin Unlimited or Nginx services, be sure to apply those changes within the _bitcoin.conf_ and _nginx.conf_ files, respectively, before running the setup script.

```bash
./setup
```

Next, you should execute the 'run' script to start the Electron Cash SLP wallet.

```bash
./run
```

Once the Electron Cash SLP wallet gui appears, it will ask you for "automatic" or "manually select a server". Either option is fine. After that, you'll go through the prompts to create a new wallet. Finally once the wallet is created, you'll be greated with the main interface.
__Please note:__ you may notice the status bar in the lower left corner indicates "Not connected." In order to remedy this, please open another terminal, navigate to the **bch-toolkit** directory, and execute:

```bash
./fix
```
This 'fix' script simply generates 10 blocks. After generating the blocks, you should open the "Networks" dialog in the Electron Cash SLP main window, navigate to the "Servers" tab, and un-ban yourself. For some reason, the first time blocks are generated, the localhost server gets banned. This only happens the first time, and you shouldn't need to repeat this step in the future (at least until you run the './clean' script, which removes everything.)

# Cleaning Up

If you experience any issues, or would like to completely erase the current wallet and node containers, run the following script:

```bash
./clean
```

__WARNING:__ The 'clean' script is very destructive, so make sure you only use it when you want to _completely erase_ the entire current instance of nodes and the wallet.

# Known Issues

There are a few issues with this setup that could use improvement in the future.

* Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.

* This setup creates and deletes SSL certificates with little regard. Because it is only intended for local testing purposes, no safeguards are in place to prevent you from losing your certs.

* Currently blocks must be generated manually after transactions are made. The possibility of adding an automation to generate a block every few seconds could be a consideration to look into.





