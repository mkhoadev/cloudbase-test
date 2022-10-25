import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.ETHEREUMPOW || chainId === ChainId.GOERLI
}
