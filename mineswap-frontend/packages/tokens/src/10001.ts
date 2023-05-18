import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETH,BUSD } from '@pancakeswap/tokens'

export const ethereumPowTokens= {
  weth: WETH9[ChainId.BASE],
  usdt: USDT[ChainId.BASE],
  usdc: USDC[ChainId.BASE],
  wbtc: WBTC_ETH,
  busd:BUSD[ChainId.BASE]
}
