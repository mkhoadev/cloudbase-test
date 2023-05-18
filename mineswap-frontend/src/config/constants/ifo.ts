import { Token, ChainId } from '@pancakeswap/sdk'
import { ethereumTokens} from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.BASE, CAKE_BNB_LP_MAINNET, 18, 'MINE-BNB LP')

const ifos: Ifo[] = []

export default ifos
