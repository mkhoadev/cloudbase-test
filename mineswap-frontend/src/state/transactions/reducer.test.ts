import { ChainId } from '@pancakeswap/sdk'
import { createStore, Store } from 'redux'
import {
  addTransaction,
  checkedTransaction,
  clearAllTransactions,
  finalizeTransaction,
  clearAllChainTransactions,
} from './actions'
import reducer, { initialState, TransactionState } from './reducer'

describe('transaction reducer', () => {
  let store: Store<TransactionState>

  beforeEach(() => {
    store = createStore(reducer, initialState)
  })

  describe('addTransaction', () => {
    it('adds the transaction', () => {
      const beforeTime = new Date().getTime()
      store.dispatch(
        addTransaction({
          chainId: ChainId.ETHEREUM,
          summary: 'hello world',
          hash: '0x0',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      const txs = store.getState()
      expect(txs[ChainId.ETHEREUM]).toBeTruthy()
      expect(txs[ChainId.ETHEREUM]?.['0x0']).toBeTruthy()
      const tx = txs[ChainId.ETHEREUM]?.['0x0']
      expect(tx).toBeTruthy()
      expect(tx?.hash).toEqual('0x0')
      expect(tx?.summary).toEqual('hello world')
      expect(tx?.approval).toEqual({ tokenAddress: 'abc', spender: 'def' })
      expect(tx?.from).toEqual('abc')
      expect(tx?.addedTime).toBeGreaterThanOrEqual(beforeTime)
    })
  })

  describe('finalizeTransaction', () => {
    it('no op if not valid transaction', () => {
      store.dispatch(
        finalizeTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          receipt: {
            status: 1,
            transactionIndex: 1,
            transactionHash: '0x0',
            to: '0x0',
            from: '0x0',
            contractAddress: '0x0',
            blockHash: '0x0',
            blockNumber: 1,
          },
        }),
      )
      expect(store.getState()).toEqual({})
    })
    it('sets receipt', () => {
      store.dispatch(
        addTransaction({
          hash: '0x0',
          chainId: ChainId.ETHEREUM_TESTNET,
          approval: { spender: '0x0', tokenAddress: '0x0' },
          summary: 'hello world',
          from: '0x0',
        }),
      )
      const beforeTime = new Date().getTime()
      store.dispatch(
        finalizeTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          receipt: {
            status: 1,
            transactionIndex: 1,
            transactionHash: '0x0',
            to: '0x0',
            from: '0x0',
            contractAddress: '0x0',
            blockHash: '0x0',
            blockNumber: 1,
          },
        }),
      )
      const tx = store.getState()[ChainId.ETHEREUM_TESTNET]?.['0x0']
      expect(tx?.summary).toEqual('hello world')
      expect(tx?.confirmedTime).toBeGreaterThanOrEqual(beforeTime)
      expect(tx?.receipt).toEqual({
        status: 1,
        transactionIndex: 1,
        transactionHash: '0x0',
        to: '0x0',
        from: '0x0',
        contractAddress: '0x0',
        blockHash: '0x0',
        blockNumber: 1,
      })
    })
  })

  describe('checkedTransaction', () => {
    it('no op if not valid transaction', () => {
      store.dispatch(
        checkedTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          blockNumber: 1,
        }),
      )
      expect(store.getState()).toEqual({})
    })
    it('sets lastCheckedBlockNumber', () => {
      store.dispatch(
        addTransaction({
          hash: '0x0',
          chainId: ChainId.ETHEREUM_TESTNET,
          approval: { spender: '0x0', tokenAddress: '0x0' },
          summary: 'hello world',
          from: '0x0',
        }),
      )
      store.dispatch(
        checkedTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          blockNumber: 1,
        }),
      )
      const tx = store.getState()[ChainId.ETHEREUM_TESTNET]?.['0x0']
      expect(tx?.lastCheckedBlockNumber).toEqual(1)
    })
    it('never decreases', () => {
      store.dispatch(
        addTransaction({
          hash: '0x0',
          chainId: ChainId.ETHEREUM_TESTNET,
          approval: { spender: '0x0', tokenAddress: '0x0' },
          summary: 'hello world',
          from: '0x0',
        }),
      )
      store.dispatch(
        checkedTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          blockNumber: 3,
        }),
      )
      store.dispatch(
        checkedTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          hash: '0x0',
          blockNumber: 1,
        }),
      )
      const tx = store.getState()[ChainId.ETHEREUM_TESTNET]?.['0x0']
      expect(tx?.lastCheckedBlockNumber).toEqual(3)
    })
  })

  describe('clearAllChainTransactions', () => {
    it('removes all transactions for the chain', () => {
      store.dispatch(
        addTransaction({
          chainId: ChainId.ETHEREUM,
          summary: 'hello world',
          hash: '0x0',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      store.dispatch(
        addTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          summary: 'hello world',
          hash: '0x1',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      expect(Object.keys(store.getState())).toHaveLength(2)
      expect(Object.keys(store.getState())).toEqual([String(ChainId.ETHEREUM), String(ChainId.ETHEREUM_TESTNET)])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM] ?? {})).toEqual(['0x0'])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM_TESTNET] ?? {})).toEqual(['0x1'])
      store.dispatch(clearAllChainTransactions({ chainId: ChainId.ETHEREUM }))
      expect(Object.keys(store.getState())).toHaveLength(2)
      expect(Object.keys(store.getState())).toEqual([String(ChainId.ETHEREUM), String(ChainId.ETHEREUM_TESTNET)])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM] ?? {})).toEqual([])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM_TESTNET] ?? {})).toEqual(['0x1'])
    })
  })

  describe('clearAllTransactions', () => {
    it('removes all transactions for all chains', () => {
      store.dispatch(
        addTransaction({
          chainId: ChainId.ETHEREUM,
          summary: 'hello world',
          hash: '0x0',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      store.dispatch(
        addTransaction({
          chainId: ChainId.ETHEREUM_TESTNET,
          summary: 'hello world',
          hash: '0x1',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      expect(Object.keys(store.getState())).toHaveLength(2)
      expect(Object.keys(store.getState())).toEqual([String(ChainId.ETHEREUM), String(ChainId.ETHEREUM_TESTNET)])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM] ?? {})).toEqual(['0x0'])
      expect(Object.keys(store.getState()[ChainId.ETHEREUM_TESTNET] ?? {})).toEqual(['0x1'])
      store.dispatch(clearAllTransactions())
      expect(Object.keys(store.getState())).toHaveLength(0)
    })
  })
})
