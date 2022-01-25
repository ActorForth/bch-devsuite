# Using with BitCash
### Prerequisites
pip or git
A Python terminal ex: ipython
### Installation

PyPI
```bash
pip install bitcash  # pip3 if pip is Python 2 on your system.
```
Source Code
```bash
git clone git://github.com/pybitcash/bitcash.git
```

### Importing a Private Key from a WIF
```python
from bitcash import *
my_key = PrivateKeyRegtest("L3rxLrwj84YMCSapeHuhaFXnLyjqXd2NcU8MyFGpg5HjKhdCsdor")
```

### Getting balance of your key
```python
In: my_key.get_balance()
Out: '0'
```

### Funding wallet
First we need your key's public address
```python
In: my_key.address
Out: bchreg:qpfa9att2xf70s2gnanc4xhjkrl4j0qvp530d2pkvk
```
Inside the bch-toolkit directory:
```bash
./bitcoin-cli sendtoaddress bchreg:qpfa9att2xf70s2gnanc4xhjkrl4j0qvp530d2pkvk 1 # sends 1 BCH
```
Expected result:

Bch-toolkit will output a txid of the funding transaction, however this txid will change each time.
```bash
7968bb43da66d142998baac34eb293abe20b6992a8a0776928610f099610ed76
```
```bash
./bitcoin-cli # generates a new block
```
Expected result:
```bash
Generating 1 block...
[
  "3b4ae3173c43b4dbbea6343f19e8d4148ae84373091975b08d2334694c0cb6f2" # Your txid will be different
]
Blocks generated.
```
Getting new balance
```python
In: my_key.get_balance()
Out: '100000000'
```
Now your regtest key is ready to send transactions.


### BitCash Docs
Further instructions may be found at the official BitCash Documentation:
https://pybitcash.github.io/bitcash/index.html
