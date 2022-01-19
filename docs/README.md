# Getting started

### Prerequisites

To run this node, you must have the follow software installed on your local machine:

* Docker (including docker-compose)
* Python 3
* Virtualenv (`sudo apt install python3-venv`)
* Openssl
* Git

### Cloning this repository

```bash
# Clone repository
git clone https://github.com/ActorForth/bch-devsuite.git
cd ./bch-devsuite

# Setup virtualenv
python3 -m venv venv
source ./venv/bin/activate

# Install script dependencies
pip install -r requirements.txt
```

### Setup infrastructure

This will check that the necessary software is installed, and then it will download and prepare the docker containers. For a full list of options, run ./setup with no arguments to see its usage.

**NOTE:** If you wish to have any custom changes applied to the Bitcoin Unlimited, or REST API services, be sure to apply those changes within the _bitcoin.conf_, _fulcrum-config.conf_, or _restapi-config.sh_ files, respectively, before executing the setup script. Bitcoin Cash Node can alternatively be used with fulcrum, by commenting out bitcoin unlimited and uncommenting bitcoin cash node and fulcrum. These can not currently run simultaneously, and one or the other must be used.

```bash
./bch-devsuite init
# First we select a network, which must be regtest, mainnet or testnet
# Next we specify the node, bitcoin unlimited or bitcoincash node
# Next we select a rest interface, bchrest is a fork of the rest.bitcoin.com api, while bchapi is a rest utilized with the bch-js library
# Slp is optional, selecting this option enables slpdb, slpserve and mongodb
# Smartbch is optional, if the network is regtest, this also generate 10 test keys.
```

**NOTE:** A RPC password and username prompt will appear for the node, these values will be stored in generated docker-compose.yml file.

**NOTE:** The SLP option will prompt the user to input a MONGODB username and password, this is to prevent external parties from modifying your database if the ports are exposed.

### Running infrastructure

Execute the _services_ script to start the node, indexer, rest API, and/or SLPDB (depending which ones chose in the _setup_ script).

```bash
./bch-devsuite start
```

### Testing

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

### Stop infrastructure

Once you decide to call it a day, you can shut down your local environment by executing:

```bash
./bch-devsuite stop
```

### Cleaning Up

If you experience any issues, or would like to completely erase the current wallet and node containers, run the following script:

```bash
./clean
```

**NOTE:** this command may need to be ran with sudo while on linux

**WARNING:** The 'clean' script is very destructive, so make sure you only use it when you want to _completely erase_ the entire current instance of nodes and the wallet.



## Sponsorship

provide a way to funding us

## Roadmap



## Contribution Guide
