import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.ETHEREUM || chainId === ChainId.GOERLI
}
