import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI,WBTC_GOERLI } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.BASE_GOERLI],
  celr: new Token(ChainId.BASE_GOERLI, '0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f', 18, 'CELR', 'CelerToken', ''),
  leet: new Token(ChainId.BASE_GOERLI, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_GOERLI,
  wbtc: WBTC_GOERLI,
}
