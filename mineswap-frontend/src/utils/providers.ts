import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://ethw-mainnet.nodereal.io/v1/5c7a39799bd64643ac50d3a87d68c4d7'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
