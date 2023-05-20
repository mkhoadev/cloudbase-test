import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BASE]: 'ethereumpow',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    // return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
    return `/images/${token.chainId}/tokens/${token.address}.png`
  }
  return null
}

export default getTokenLogoURL
