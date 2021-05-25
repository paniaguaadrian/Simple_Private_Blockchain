// Create a class javascript component to consum our block data model
class Block {
  // Each class can only have one constructor
  constructor(data) {
    this.height = "";
    this.timeStamp = "";
    this.data = data;
    this.previousHash = "0x";
    this.hash = "";
  }
}

// Create a class for a new Blockchain
class Bockchain {
  constructor() {
    this.chain = [];
  }
  // Creation of a new function to add a block to the blockchain
  addBlock(newBlock) {
    this.chain.push(newBlock);
  }
}
