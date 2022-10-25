import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUMPOW = 10001,
  GOERLI = 5,
  // BSC = 56,
  // BSC_TESTNET = 97,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS_ETHPOW = '0xA3960E10A2604d41F2647059d3F474F194fe56e7'

const FACTORY_ADDRESS_ETH = '0xFB08f181292492FeBA6cDF3fd4B153Bf59c460F5'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUMPOW]: FACTORY_ADDRESS_ETHPOW,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
}
export const INIT_CODE_HASH_ETHPOW = '0x4f400f00fd8e309993cbfe2eb6b8f3abf957d1b03ff7bf8dbeafc2d157685188'

const INIT_CODE_HASH_ETH = '0x4f400f00fd8e309993cbfe2eb6b8f3abf957d1b03ff7bf8dbeafc2d157685188'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUMPOW]: INIT_CODE_HASH_ETHPOW,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUMPOW]: new Token(
    ChainId.ETHEREUMPOW,
    '0x7bf88d2c0e32de92cdaf2d43ccdc23e8edfd5990',
    18,
    'WETHW',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WETH = {
  // [ChainId.ETHEREUMPOW]: new Token(
  //   ChainId.ETHEREUMPOW,
  //   '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
  //   18,
  //   'WBNB',
  //   'Wrapped BNB',
  //   'https://www.binance.org'
  // ),
  // [ChainId.ETHEREUMPOW]: new Token(
  //   ChainId.ETHEREUMPOW,
  //   '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   18,
  //   'WBNB',
  //   'Wrapped BNB',
  //   'https://www.binance.org'
  // ),
  // [ChainId.GOERLI]: new Token(
  //   ChainId.GOERLI,
  //   '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  //   18,
  //   'WBNB',
  //   'Wrapped BNB',
  //   'https://www.binance.org'
  // ),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUMPOW]: WETH9[ChainId.ETHEREUMPOW],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  // [ChainId.ETHEREUMPOW]: WBNB[ChainId.ETHEREUMPOW],
  // [ChainId.GOERLI]: WBNB[ChainId.GOERLI],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUMPOW]: { name: 'Ether', symbol: 'ETHW', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  // [ChainId.ETHEREUMPOW]: {
  //   name: 'Binance Chain Native Token',
  //   symbol: 'BNB',
  //   decimals: 18,
  // },
  // [ChainId.GOERLI]: {
  //   name: 'Binance Chain Native Token',
  //   symbol: 'tBNB',
  //   decimals: 18,
  // },
}
