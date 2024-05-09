import { Web3 } from 'web3';
import { config } from 'dotenv';
config()


const web3 = new Web3(`https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);

// web3.eth.getBlockNumber().then(console.log);


const account = web3.eth.accounts.wallet.add(process.env.ACCOUNT_5_PRIV) // priv key


const senderPubAdress = "0xA65fb8FCDD3AF2eD82C5A07E4F1D29a28E58B76C"
const resiverPubAdress = account[0].address;
console.log(`The sender: ${senderPubAdress} has ${await web3.eth.getBalance(senderPubAdress)}`);
console.log(`The resiver:${resiverPubAdress} has: ${await web3.eth.getBalance(resiverPubAdress)}`);


const tx = {
  from: senderPubAdress,
  to: resiverPubAdress,
  value: web3.utils.toWei('.00001', 'ether'),
  maxFeePerGas: web3.utils.toWei('.001', 'ether'),
  gas: 21000,  // Typical gas limit for a straightforward transfer
  maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),  // Adjust based on current network conditions
  maxFeePerGas: web3.utils.toWei('100', 'gwei')  // This should also be based on current conditions
}


const txReceipt = await web3.eth.sendTransaction(tx);
console.log('Tx hash:', txReceipt.transactionHash)


console.log(`The sender: ${senderPubAdress} has ${await web3.eth.getBalance(senderPubAdress)}`);
console.log(`The resiver:${resiverPubAdress} has: ${await web3.eth.getBalance(resiverPubAdress)}`);





