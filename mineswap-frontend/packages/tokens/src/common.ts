import { ChainId, Token } from '@pancakeswap/sdk'

export const MINE_MAINNET = new Token(
  ChainId.ETHEREUMPOW,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'MineSwap Token',
  'https://mineswap.finance/',
)

export const MINE_TESTNET = new Token(
  ChainId.GOERLI,
  '0x3F7a9178051f266C9d4834c1eBc68297b7a49172',
  18,
  'MINE',
  'MineSwap Token',
  'https://mineswap.finance/',
)

export const USDC_ETH = new Token(ChainId.ETHEREUMPOW, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')


export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x74Bec6330C9a850697338c4C53068a8567ca8379',
  6,
  'USDC',
  'test USD Coin',
)
export const USDT_GOERLI = new Token(
  ChainId.GOERLI,
  '0xfe54279Bd3faA2fAF8797C5973CA9FB5816Ef048',
  6,
  'USDT',
  'test USD Coin1',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUMPOW,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUMPOW,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)


export const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUMPOW]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
}

export const MINE = {
  [ChainId.ETHEREUMPOW]: MINE_MAINNET,
  [ChainId.GOERLI]: MINE_TESTNET,
}

export const USDC = {
  [ChainId.ETHEREUMPOW]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.GOERLI]: USDT_GOERLI,
  [ChainId.ETHEREUMPOW]: USDT_ETH,
}

export const WBTC_ETH = new Token(
  ChainId.ETHEREUMPOW,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
export const WBTC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x9c556b18d2370d4c44f3b3153d340d9abfd8d995',
  8,
  'WBTC',
  'Wrapped BTC',
)
