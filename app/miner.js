class Miner {
    constructor(blockchain, transactionPool, wallet, p2pserver) {
        this.blockchain = blockchain
        this.transactionPool = transactionPool
        this.wallet = wallet
        this.p2pserver = p2pserver
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions()

        // include a reward for the miner
        // create a block consisting of the valid transactions
        // synchronize chains in peer-to-peer server
        // clear the transaction pool
        // broadcast to every miner to clear their transaction pools
    }
}

module.exports = Miner