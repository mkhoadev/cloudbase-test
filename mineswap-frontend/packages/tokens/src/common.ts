import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new Token(
  ChainId.ETHEREUM,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'MineSwap Token',
  'https://mineswap.finance/',
)

export const CAKE_TESTNET = new Token(
  ChainId.GOERLI,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'MineSwap Token',
  'https://mineswap.finance/',
)

export const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')


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
  'test USD Coin',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
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
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
}

export const MINE = {
  [ChainId.ETHEREUM]: CAKE_MAINNET,
  [ChainId.GOERLI]: CAKE_TESTNET,
}

export const USDC = {
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.GOERLI]: USDT_GOERLI,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const WBTC_ETH = new Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
