import { useCurrency } from 'hooks/Tokens'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { CHAIN_IDS } from 'utils/wagmi'
import RemoveLiquidity from 'views/RemoveLiquidity'


import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useNativeCurrency from 'hooks/useNativeCurrency'
import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { resetMintState } from 'state/mint/actions'
// import RemoveStableLiquidity from 'views/RemoveLiquidity/RemoveStableLiquidity'
// import useStableConfig, { StableConfigContext } from 'views/Swap/StableSwap/hooks/useStableConfig'

const RemoveLiquidityPage = () => {
  const router = useRouter()

  const [currencyIdA, currencyIdB] = router.query.currency || []

  const [currencyA, currencyB] = [useCurrency(currencyIdA) ?? undefined, useCurrency(currencyIdB) ?? undefined]

  // const { stableSwapConfig, ...config } = useStableConfig({
  //   tokenA: currencyA,
  //   tokenB: currencyB,
  // })

  const props = {
    currencyIdA,
    currencyIdB,
    currencyA,
    currencyB,
  }

  return <RemoveLiquidity {...props} />
  // return <div>Helloword</div>
}

RemoveLiquidityPage.chains = CHAIN_IDS

export default RemoveLiquidityPage

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const currency = (params.currency as string[]) || []
  // if (currency.length === 0) {
  //   return {
  //     notFound: true,
  //   }
  // }
  // if (currency.length === 1) {
    // if (!OLD_PATH_STRUCTURE.test(currency[0])) {
    //   return {
    //     redirect: {
    //       statusCode: 307,
    //       destination: `/pool`,
    //     },
    //   }
    // }

  //   const split = currency[0].split('-')
  //   if (split.length > 1) {
  //     const [currency0, currency1] = split
  //     return {
  //       redirect: {
  //         statusCode: 307,
  //         destination: `/remove/${currency0}/${currency1}`,
  //       },
  //     }
  //   }
  // }

  // return {
  //   props: {},
  // }
// }
