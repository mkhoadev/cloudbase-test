import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms/constants/priceHelperLps/getFarmsPriceHelperLpFiles'
import { ChainId } from '@pancakeswap/sdk'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
// import PoolsBscPriceHelper from './pools/56'
// import PoolsBscTestnetPriceHelper from './pools/97'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    // case ChainId.ETHEREUMPOW:
    //   return PoolsBscPriceHelper
    // case ChainId.GOERLI:
    //   return PoolsBscTestnetPriceHelper
    case ChainId.BASE:
      return PoolsEthereumPriceHelper
    case ChainId.BASE_GOERLI:
      return PoolsGoerliPriceHelper
    default:
      return []
  }
}
