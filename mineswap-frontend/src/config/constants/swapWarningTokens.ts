import { Token } from '@pancakeswap/sdk'
import { ethereumTokens} from '@pancakeswap/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'

// const { bondly, itam, ccar, bttold } = ethereumTokens
const { pokemoney, free, safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  // safemoon,
  // bondly,
  // itam,
  // ccar,
  // bttold,
  // pokemoney,
  // free,
}

export default SwapWarningTokens
