# Archived

### About

This repo intends to be a toolkit for running a local version of a Bitcoin Unlimited for development and testing purposes. Currently it provides a self-hosted local node, indexer (Electrs), a drop-in Ninsight replacement (Opensight), a regtest version of the&#x20;

### Known Issues <a href="#known-issues" id="known-issues"></a>

There are a few issues with this setup that could use improvement in the future.

* Currently, this setup relies on the built-in Electrscash indexing server included in the Bitcoin Unlimited node. This isn't an issue per se, but to test with other nodes (such as Bitcoin ABC, Bitcoin Cash Node, or bchd) it will be necessary to seperate the indexing server into a seperate container.
*
