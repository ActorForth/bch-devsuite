# Creates a docker container running the rest.bicoin.com REST API. This is
# the API used by BITBOX.

#IMAGE BUILD COMMANDS
#FROM ubuntu:18.04
FROM christroutner/ct-base-ubuntu
LABEL Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get upgrade

#Set the working directory to be the home directory
WORKDIR /home/safeuser

# Switch to user account.
USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
RUN git clone https://github.com/christroutner/rest.bitcoin.com

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/rest.bitcoin.com
#RUN git checkout stage
# EDIT THE LINE ABOVE TO REFLECT THE BRANCH YOU WANT TO USE

# Install dependencies
#RUN npm install
RUN npm install -g yarn
RUN /home/safeuser/.npm-global/bin/yarn

# Expose the port the API will be served on.
EXPOSE 3000

# Copy the config file.
# EDIT THESE LINES TO REFLECT THE CONFIG FILE YOU WANT TO USE
# COPY config/start-mainnet.sh /home/safeuser/rest.bitcoin.com/start-mainnet.sh
# COPY config/start-testnet.sh /home/safeuser/rest.bitcoin.com/start-testnet.sh
COPY config/start-regtest.sh /home/safeuser/rest.bitcoin.com/start-regtest.sh

# Startup bitcore, insight, and the full node.
# CMD ["/home/safeuser/rest.bitcoin.com/start-mainnet.sh"]
#CMD ["/home/safeuser/rest.bitcoin.com/start-testnet.sh"]
CMD ["/home/safeuser/rest.bitcoin.com/start-regtest.sh"]

