# About

This repo intends to be a toolkit for running a local version of a Bitcoin Cash node for development and testing purposes.

# Prerequisites

To run this node, you must have the follow software installed on your local machine:

* Docker
* Python 3
* Openssl

# Installation

Start by cloning this repo

```bash
git clone https://github.com/repo
```

Next, navigate into the directory and run the 'setup' script

```bash
cd bch-toolkit
bash ./setup
```

This 'setup' script will put together the necessary docker images using the configuration located within this directory. If you would like to run any custom configurations on the Bitcoin Cash node, or the Nginx server, please make them in the **bitcoin.conf** and **nginx.conf** files respectively.

Lastly, you should run the 'run' script to start the Electron Cash SLP wallet.

# Known Issues

There are a few issues with this setup that could use improvement in the future.
* Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.

* This setup creates and deletes SSL certificates with little regard. Because it is only intended for local testing purposes, no safeguards are in place to prevent you from losing your certs.

* Currently blocks must be generated manually after transactions are made. The possibility of adding a cron job to generate a block every few seconds could be a consideration to look into.


