import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  BASE = 10001,
  GOERLI = 84531,

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

export const FACTORY_ADDRESS_BASE = '0xA3960E10A2604d41F2647059d3F474F194fe56e7' // TODO: Add base address

const FACTORY_ADDRESS_GOERLI = '0x3601503d707987FD9B2362E2b73AdEE2D6890b5D'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.BASE]: FACTORY_ADDRESS_BASE,
  [ChainId.GOERLI]: FACTORY_ADDRESS_GOERLI,
}
export const INIT_CODE_HASH_BASE = '0x4f400f00fd8e309993cbfe2eb6b8f3abf957d1b03ff7bf8dbeafc2d157685188' // TODO: Add base hash

const INIT_CODE_HASH_GOERLI = '0x6485c117a4d9930b8fe3e738f007721cb08c1f2f23b2a6e9e5fd15c31d449957'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.BASE]: INIT_CODE_HASH_BASE,
  [ChainId.GOERLI]: INIT_CODE_HASH_GOERLI,
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
  [ChainId.BASE]: new Token(
    // TODO: add base address
    ChainId.BASE,
    '0x7Bf88d2c0e32dE92CdaF2D43CcDc23e8Edfd5990',
    18,
    'WETHW',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether',
    'https://goerli.basescan.org/token/0x4200000000000000000000000000000000000006'
  ),
}

export const WETH = {}

export const WNATIVE: Record<number, Token> = {
  [ChainId.BASE]: WETH9[ChainId.BASE],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.BASE]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
}
