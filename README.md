# ERC20

[![license-mit](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/license/mit/)
[![build-test](https://github.com/veeso-dev/erc20-template/actions/workflows/build-test.yml/badge.svg)](https://github.com/veeso-dev/erc20-template/actions/workflows/build-test.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

## Get started

### Setup env

```sh
cp .env.github .env
nano .env
```

- DEV_PRIVATE_KEY: should be set to deploy on devnet
- PROD_PRIVATE_KEY: should be set to deploy on production (KEEP IT SECRET!!!)
- OWNER_ADDRESS: must be set to initial owner of the contract

### Compile

Run

```sh
yarn
yarn compile
```

### Deploy

```sh
yarn deploy:localhost
yarn deploy:goerli
yarn deploy:ethereum
```

### Transfer and administrate the token

Enter directory `./app`

and run the NFT Web UI

```sh
yarn
# get web3.min.js
mkdir -p node_modules/web3/dist/
wget -O node_modules/web3/dist/web3.min.js "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
# run
yarn dev
```

Now browse to <http://localhost:1234/>.

## How to setup code from template

## Verify source code

put Etherscan apikey in `.env` file.

Then run:

```sh
yarn hardhat verify --network $NETWORK "$CONTRACT_ADDRESS" "$NAME" "$SYMBOL" "$OWNER_ADDRESS" "$INITIAL_SUPPLY" $DECIMALS
```

Network can be either:

- goerli
- ethereum

## License

ERC20 template is licensed under the MIT license.

See the full license [HERE](./LICENSE)
