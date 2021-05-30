/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/

const SHA256 = require("crypto-js/sha256");

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
  constructor(data) {
    this.height = "";
    this.timeStamp = "";
    this.data = data;
    this.previousHash = "0x";
    this.hash = "";
  }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class Blockchain {
  constructor() {
    // new chain array
    this.chain = [];

    // add first genesis block
    this.addBlock(this.createGenesisBlock());
  }

  // Create first block on the chain
  createGenesisBlock() {
    return new Block("First block in the chain - Genesis block");
  }

  // Get the latest block on the chain
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // addBlock function
  addBlock(newBlock) {
    // Block height
    newBlock.height = this.chain.length;

    // Block timeStamp
    newBlock.timeStamp = new Date().getTime().toString().slice(0, -3);

    // ? Condition, if there is block in he chain, or, if  the chain.lenght is greater than 0, we create a new block AND we get the hash from the previous block to put it on the new block.
    if (this.chain.length > 0) {
      // Previous block hash
      newBlock.previousHash = this.getLatestBlock().hash;
    }

    // SHA256 requires a string of data
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    console.log(JSON.stringify(newBlock));

    // Add block to chain
    this.chain.push(newBlock);
  }
}
