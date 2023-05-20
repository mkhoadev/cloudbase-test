import { ChainId, Token } from '@pancakeswap/sdk'

// TODO: change this to the correct address
export const CLOUD_MAINNET = new Token(
  ChainId.BASE,
  '0x8ae3d0E14Fe5BC0533a5Ca5e764604442d574a00',
  18,
  'CLOUD',
  'CloudBase',
  'https://cloudbase.finance',
)

export const CLOUD_TESTNET = new Token(
  ChainId.BASE_GOERLI,
  '0x8ae3d0E14Fe5BC0533a5Ca5e764604442d574a00',
  18,
  'CLOUD',
  'CloudBase',
  'https://cloudbase.finance',
)

export const USDC_ETH = new Token(ChainId.BASE, '0x25DE68ef588cb0c2c8F3537861E828Ae699CD0DB', 6, 'USDC', 'USD Coin')

export const USDC_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0x74Bec6330C9a850697338c4C53068a8567ca8379',
  6,
  'USDC',
  'test USD Coin',
)
export const USDT_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0xfe54279Bd3faA2fAF8797C5973CA9FB5816Ef048',
  6,
  'USDT',
  'test USD Coin1',
)

export const USDT_ETH = new Token(
  ChainId.BASE,
  '0x2AD7868CA212135C6119FD7AD1Ce51CFc5702892',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_ETHW = new Token(
  ChainId.BASE,
  '0xf61eb8999f2F222f425d41dA4C2ff4b6D8320C87',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)


export const BUSD_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.BASE]: BUSD_ETHW,
  [ChainId.BASE_GOERLI]: BUSD_GOERLI,
}

export const CLOUD = {
  [ChainId.BASE]: CLOUD_MAINNET,
  [ChainId.BASE_GOERLI]: CLOUD_TESTNET,
}

export const USDC = {
  [ChainId.BASE]: USDC_ETH,
  [ChainId.BASE_GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BASE_GOERLI]: USDT_GOERLI,
  [ChainId.BASE]: USDT_ETH,
}

export const WBTC_ETH = new Token(
  ChainId.BASE,
  '0x4bbd68d8b1f25ae7b460e3347c637fe9e7338e0c',
  8,
  'BTCB',
  'BTCB Token',
)
export const WBTC_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0x9c556b18d2370d4c44f3b3153d340d9abfd8d995',
  8,
  'WBTC',
  'Wrapped BTC',
)
