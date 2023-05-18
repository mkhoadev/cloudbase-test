import { ChainId } from '@pancakeswap/sdk'
import FarmsEthereumPowPriceHelper from './10001'
import FarmsGoerliPriceHelper from './5'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BASE:
      return FarmsEthereumPowPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    default:
      return []
  }
}
