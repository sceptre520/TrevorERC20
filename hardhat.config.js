require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "MC416XCJTt_vK-u2cdtLgzyzJR7mRlOy";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "e25fb7af78f9d9de04ba4bf42fc4a6bfd54b6014ca1f1b8c6ed0ddb349837928";
const LOCAL_PRIVATE_KEY = "f88665b8d112ae968777d7e306ec5949abcb4f1a844d1d3d00e0c4d15e7a42bf";
// const LOCAL_PRIVATE_KEY = "33bfa8dd580ff502ebceff4e2e73a79167e771113023c136239b5915a538ac69";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    local: {
      url: `http://127.0.0.1:6000`,
      // url: `http://127.0.0.1:7545`,
      accounts: [`0x${LOCAL_PRIVATE_KEY}`]
    }
  }
};