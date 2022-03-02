# Configuration examples

Examples of configuration TOML files, you can start with one of this and modify to meet your needs.

## [rest.bitcoin.com tech stack](./architecture#1.-rest.bitcoin.com-tech-stack)

```toml
# Example rest.bitcoin.com tech stack TOML config file

network = "mainnet"
rest_service = "bchrest"
exposed_ports = true
docker_network = "bch-devsuite-network"

[local_node]
node = "bu"
wait_time = 6

[slp]
username = "actorforth"
password = "123ldsfoijqwerj"

[bch_rpc_conf]
host = "http://bch-node"
port = "8332"
username = "actorforth"
password = "BWrzap0bqMjezoeHtOzgOOcUgzkxaL6w"
```

---

## [Chris Troutner JS tech stack](./architecture#2.-chris-troutner-js-tech-stack)

```toml
# Example Chris Troutner JS Tech Stack TOML config file

network = "mainnet"
rest_service = "bchapi"
exposed_ports = true
docker_network = "bch-devsuite-network"

[local_node]
node = "bu"
wait_time = 6

[slp]
username = "actorforth"
password = "123ldsfoijqwerj"

[bch_rpc_conf]
host = "http://bch-node"
port = "8332"
username = "actorforth"
password = "BWrzap0bqMjezoeHtOzgOOcUgzkxaL6w"
```

---

## SmartBCH Single Node Private Testnet

```toml
network = "regtest"
exposed_ports = true
docker_network = "bch-devsuite-network"

[local_node]
node = "bu"
regtest_blocks = "200"
wait_time = 6

[smartbch]
enabled = true
test_keys = [ "5f532666cf906ae915be2a58e591150a0e4371c124fec75bf4f9aff1d6d70d64", "6ffed448bfd71171822517facb73064d8ec259a8ed26c247ce686c35605648df", "b4d021fe956cfbb257dd9a1b27d40f0b9518b3b55ea03d65051302a3968906ea", "b671447e4ed28da42ee472890ab1bff4f7311250da8df848eeacfaf89bc6abbc", "b9e396537dc6b5dbb8c7c07f372a1e1848ff8e922615f284cd62fcc194324a29", "167f173b8cefd2c94d6f711ab2638492634e5408e8c3a96b79b414806d1f739d", "3ea051bb9ced8fd20eb826493da41b9ab8aa509af26e446a412178ae01c45caa", "8fea7384caa4b3dcffb5aeb779f065ecaf7bc681ceeba6523c3080b864df581c", "56ed2ec8f0c75365156847a7896905f82096df2cd60f104a486d0ff36616652e", "f5a1d4d0db63a9c7775ba02403eda7e20250907742266dca7d9e8242bc4d4182",]

[bch_rpc_conf]
host = "http://bch-node"
port = "18443"
username = "actorforth"
password = "yW8poFq39PXeNC8lnQPAXE6wWuCsBVNw"
```

## SmartBCH Testnet

```toml
network = "testnet"
exposed_ports = true
docker_network = "bch-devsuite-network"

[smartbch]
enabled = true

[bch_rpc_conf]
host = "http://35.220.203.194"
port = "8545"
username = "test"
password = "test"
```
