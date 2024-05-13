import { Web3 } from 'web3';
import { config } from 'dotenv';
config()


const web3 = new Web3(`https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);

// web3.eth.getBlockNumber().then(console.log);

const account1 = web3.eth.accounts.privateKeyToAccount(process.env.ACCOUNT_1_PRIV)
web3.eth.accounts.wallet.add(account1)

const account5 = web3.eth.accounts.privateKeyToAccount(process.env.ACCOUNT_5_PRIV)
web3.eth.accounts.wallet.add(account5)

const senderPubAdress = account1[0].address
const resiverPubAdress = account5[0].address;
console.log(`The sender: ${senderPubAdress} has ${await web3.eth.getBalance(senderPubAdress)}`);
console.log(`The resiver:${resiverPubAdress} has: ${await web3.eth.getBalance(resiverPubAdress)}`);


const tx = {
  to: resiverPubAdress,
  value: web3.utils.toWei('.00001', 'ether'),
  gas: 21000, // Gas limit - set appropriately
  gasPrice: web3.utils.toWei('30', 'gwei'), // Gas price - set appropriately
}


web3.eth.accounts.signTransaction(tx, account1.privateKey)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
  .then(receipt => console.log('Transaction receipt:', receipt))
  .catch(err => console.error(err));

// const txReceipt = await web3.eth.signTransaction(tx);
// console.log('Tx hash:', txReceipt.transactionHash)


console.log(`The sender: ${senderPubAdress} has ${await web3.eth.getBalance(senderPubAdress)}`);
console.log(`The resiver:${resiverPubAdress} has: ${await web3.eth.getBalance(resiverPubAdress)}`);





