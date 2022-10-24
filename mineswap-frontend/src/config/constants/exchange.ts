import { ChainId, JSBI, Percent, Token, WNATIVE } from '@pancakeswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import { ethereumTokens, USDC, USDT, WBTC_ETH,WBTC_GOERLI } from '@pancakeswap/tokens'
import { ChainMap, ChainTokenList } from './types'

export const ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.ETHEREUMPOW]: '0xEfF92A263d31888d860bD50809A8D171709b7b1c',
  [ChainId.GOERLI]: '0xf66315F5e281326a9c8d10bb49c9743911236E3A',
  // [ChainId.ETHEREUMPOW]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  // [ChainId.GOERLI]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.ETHEREUMPOW]: [WNATIVE[ChainId.ETHEREUMPOW], USDC[ChainId.ETHEREUMPOW], USDT[ChainId.ETHEREUMPOW], WBTC_ETH],
  [ChainId.GOERLI]: [WNATIVE[ChainId.GOERLI], USDC[ChainId.GOERLI], USDT[ChainId.GOERLI],WBTC_GOERLI]
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.ETHEREUMPOW]: {
    // SNFTS-SFUND
    [ethereumTokens.usdc.address]: [ethereumTokens.usdc],
  },
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.ETHEREUMPOW]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.ETHEREUMPOW]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.ETHEREUMPOW]: [USDC[ChainId.ETHEREUMPOW], USDT[ChainId.ETHEREUMPOW], WNATIVE[ChainId.ETHEREUMPOW], WBTC_ETH],
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], USDT[ChainId.GOERLI]],
  // [ChainId.ETHEREUMPOW]: [ethereumTokens.busd, ethereumTokens.weth, ethereumTokens.btcb],
  // [ChainId.GOERLI]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.ETHEREUMPOW]: [USDC[ChainId.ETHEREUMPOW], WNATIVE[ChainId.ETHEREUMPOW], USDT[ChainId.ETHEREUMPOW], WBTC_ETH],
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], USDT[ChainId.GOERLI]],
  // [ChainId.ETHEREUMPOW]: [ethereumTokens.weth, ethereumTokens.dai, ethereumTokens.busd, ethereumTokens.usdt, ethereumTokens.weth],
  // [ChainId.GOERLI]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.ETHEREUMPOW]: [
    [WNATIVE[ChainId.ETHEREUMPOW], USDC[ChainId.ETHEREUMPOW]],
    [WBTC_ETH, WNATIVE[ChainId.ETHEREUMPOW]],
    [WNATIVE[ChainId.ETHEREUMPOW], USDT[ChainId.ETHEREUMPOW]],
  ],
  // [ChainId.ETHEREUMPOW]: [
  //   [ethereumTokens.weth, ethereumTokens.weth],
  //   [ethereumTokens.busd, ethereumTokens.usdt],
  //   [ethereumTokens.dai, ethereumTokens.usdt],
  // ],
}

export const BIG_INT_ZERO = JSBI.BigInt(0)
export const BIG_INT_TEN = JSBI.BigInt(10)

// one basis point
export const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(BIG_INT_TEN, JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(JSBI.BigInt(25), BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)

// BNB
export const DEFAULT_INPUT_CURRENCY = 'ETHW'
// CAKE
export const DEFAULT_OUTPUT_CURRENCY = '0x3F7a9178051f266C9d4834c1eBc68297b7a49172'

// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const LIMIT_ORDERS_DOCS_URL = 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/limit-orders'

export const EXCHANGE_PAGE_PATHS = ['/swap', '/limit-orders', 'liquidity', '/add', '/find', '/remove']
