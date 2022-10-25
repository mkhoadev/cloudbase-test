import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens= {
  weth: WETH9[ChainId.ETHEREUMPOW],
  usdt: USDT[ChainId.ETHEREUMPOW],
  usdc: USDC[ChainId.ETHEREUMPOW],
  wbtc: WBTC_ETH,
}
