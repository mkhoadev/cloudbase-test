import { infoClient, infoClientETH, infoClienGOERLI, infoStableSwapClient } from 'utils/graphql'
import { INFO_CLIENT, INFO_CLIENT_ETH, BLOCKS_CLIENT, BLOCKS_CLIENT_ETH, BLOCKS_CLIENT_GOERLI } from 'config/constants/endpoints'
import { ChainId } from '@pancakeswap/sdk'
import { PCS_V2_START, PCS_ETH_START, ETH_TOKEN_BLACKLIST, TOKEN_BLACKLIST } from 'config/constants/info'

// export type MultiChainName = 'BSC' | 'ETHW'
export type MultiChainName = 'ETHW' | 'GOERLI'

export const multiChainQueryMainToken = {
  // BSC: 'BNB',
  ETH: 'ETHW',
  GOERLI: 'GOERLI',
}

export const multiChainBlocksClient = {
  // BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  GOERLI: BLOCKS_CLIENT_GOERLI,
}

export const multiChainStartTime = {
  // BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
}

export const multiChainId = {
  ETH: ChainId.ETHEREUMPOW,
}

export const multiChainPaths = {
  [ChainId.ETHEREUMPOW]: '/eth',
}

export const multiChainQueryClient = {
  // BSC: infoClient,
  ETH: infoClientETH,
  GOERLI: infoClienGOERLI,
}

export const multiChainQueryEndPoint = {
  // BSC: INFO_CLIENT,
  GOERLI: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
}

export const multiChainScan = {
  // BSC: 'BscScan',
  ETH: 'EtherScan',
}

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
