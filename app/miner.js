const Transaction = require('../wallet/transaction')
const Wallet = require('../wallet')
class Miner {
    constructor(blockchain, transactionPool, wallet, p2pserver) {
        this.blockchain = blockchain
        this.transactionPool = transactionPool
        this.wallet = wallet
        this.p2pserver = p2pserver
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions()
        validTransaction.push(Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet()))
        const block = this.blockchain.addBlock(validTransactions)
        this.p2pserver.syncChains()
        this.transactionPool.clear()
        // clear the transaction pool
        // broadcast to every miner to clear their transaction pools
    }
}

module.exports = Miner