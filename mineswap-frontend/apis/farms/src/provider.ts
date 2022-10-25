import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const ethpowProvider = new StaticJsonRpcProvider(
  {
    url: 'https://ethw-mainnet.nodereal.io/v1/5c7a39799bd64643ac50d3a87d68c4d7',
    skipFetchSetup: true,
  },
  10001,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    skipFetchSetup: true,
  },
  5,
)
