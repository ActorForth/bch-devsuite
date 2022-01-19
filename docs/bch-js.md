# Using with bch-js

### Prerequisites
node and npm

### 1. Cloning example repository.

```bash
git clone https://github.com/ActorForth/bch-js-example.git && cd bch-js-example
```
### 2. Install dependency.
```bash
npm install
```
### 3. Created wallet.
```bash
cd applications

node ./slp/create-wallet/create-wallet.js
```
Expected to see `wallet-info-regtest-mywallet.json` and `wallet-info-regtest-mywallet.txt` in /applications

### 4. Funding wallet.
```bash
cd bch-toolkit
```

Generate Bitcoin cash from mining 100 blocks. Coinbase will be in the node generated wallet.
```bash
./bitcoin-cli generate 100
```

Send coin from node generated wallet to the wallet you just created (you can find the address in /applications/wallet-info-regtest-mywallet.json you can look for address in cashaddress json key)
```bash
./bitcoin-cli sendtoaddress  <cashaddress> 100
```

Mine another 100 blocks to matures the coin base (https://coinguides.org/immature-confirmed-cleared/)
```bash
./bitcoin-cli generate 100
```
### 5. check wallet balance.
```bash
cd bch-js-example
cd applications
node ./slp/check-balance/check-balance.js

```
Expected to see

```
WALLET_NAME wallet-info-regtest-mywallet
CASHADDRESS bchreg:qpfg9kg3swcg0tln747hprcgtj5k80q7dcd0perd4t
SLPADDRESS slpreg:qpfg9kg3swcg0tln747hprcgtj5k80q7dcs0mggpvz
BCH Balance information for slpreg:qpfg9kg3swcg0tln747hprcgtj5k80q7dcs0mggpvz:
{
  "confirmed": 0,
  "unconfirmed": 10000000000
}
SLP Token information:
"No balance for this address"
```
