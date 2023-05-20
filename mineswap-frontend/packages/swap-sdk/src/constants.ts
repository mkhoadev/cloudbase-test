import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  BASE = 84531, // TODO: change to 8543
  BASE_GOERLI = 84531,

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

export const FACTORY_ADDRESS_BASE = '0x703EB7F1b24Ed0801E3B13d09932597b423Ac040' // TODO: Add base address

const FACTORY_ADDRESS_BASE_GOERLI = '0x703EB7F1b24Ed0801E3B13d09932597b423Ac040'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.BASE]: FACTORY_ADDRESS_BASE,
  [ChainId.BASE_GOERLI]: FACTORY_ADDRESS_BASE_GOERLI,
}
export const INIT_CODE_HASH_BASE = '0x7a1d6bc7df460b200a3b4ec03571f2d70efa35a1d13f3f117be42c20617cebb1' // TODO: Add base hash

const INIT_CODE_HASH_GOERLI = '0x7a1d6bc7df460b200a3b4ec03571f2d70efa35a1d13f3f117be42c20617cebb1'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.BASE]: INIT_CODE_HASH_BASE,
  [ChainId.BASE_GOERLI]: INIT_CODE_HASH_GOERLI,
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
    // TODO: add WETH address
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETHW',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.BASE_GOERLI]: new Token(
    ChainId.BASE_GOERLI,
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
  [ChainId.BASE_GOERLI]: WETH9[ChainId.BASE_GOERLI],
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
  [ChainId.BASE_GOERLI]: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
}
