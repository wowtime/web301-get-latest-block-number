require('dotenv').config();

const { Web3 } = require('web3');
const apiKey = process.env.ALCHEMY_API_KEY;

// // replace YOUR_API_KEY with Alchemy API
alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
const web3 = new Web3(alchemyUrl);

async function getLatestBlockNumber() {
  const blockNumber=await web3.eth.getBlockNumber();
  console.log('Latest block number:', blockNumber);
}

module.exports = getLatestBlockNumber
