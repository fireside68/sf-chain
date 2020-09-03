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
        this.p2pserver.broadcastClearTransactions()
    }
}

module.exports = Miner