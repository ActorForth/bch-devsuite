#!/bin/bash

export db_name=slpdb_test
export db_url=mongodb://mongo-slpdb:27017
export slpserve_port=4000
export slpserve_timeout=30000
export slpserve_log=true

npm start
