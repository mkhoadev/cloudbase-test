import { CLOUD, USDC } from '@pancakeswap/tokens'
import { useCurrency } from 'hooks/Tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useNativeCurrency from 'hooks/useNativeCurrency'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { resetMintState } from 'state/mint/actions'
import { CHAIN_IDS } from 'utils/wagmi'
import AddLiquidity from 'views/AddLiquidity'
// import AddStableLiquidity from 'views/AddLiquidity/AddStableLiquidity/index'
// import useStableConfig, { StableConfigContext } from 'views/Swap/StableSwap/hooks/useStableConfig'

export async function getServerSideProps({ params }) {
  // Fetch data or perform any server-side logic here
  const { currency = [] } = params
  const dynamicParams = currency.join('/') // Combine the dynamic parameters into a single string if needed

  // Return the props object
  return {
    props: {
      dynamicParams,
    },
  }
}

const AddLiquidityPage = ({ dynamicParams }) => {
  const router = useRouter()
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const native = useNativeCurrency()

  const [currencyIdA, currencyIdB] = dynamicParams.split('/') || [
    native.symbol,
    CLOUD[chainId]?.address ?? USDC[chainId]?.address,
  ]

  const currencyA = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)

  // const { stableSwapConfig, ...stableConfig } = useStableConfig({
  //   tokenA: currencyA,
  //   tokenB: currencyB,
  // })

  useEffect(() => {
    if (!currencyIdA && !currencyIdB) {
      dispatch(resetMintState())
    }
  }, [dispatch, currencyIdA, currencyIdB])

  // return stableSwapConfig ? (
  //   <StableConfigContext.Provider value={{ stableSwapConfig, ...stableConfig }}>
  //     <AddStableLiquidity currencyA={currencyA} currencyB={currencyB} />
  //   </StableConfigContext.Provider>
  // ) : (
  //   <AddLiquidity currencyA={currencyA} currencyB={currencyB} />
  // )

  return <AddLiquidity currencyA={currencyA} currencyB={currencyB} />
}

AddLiquidityPage.chains = CHAIN_IDS

export default AddLiquidityPage

//=============================================================================

// const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|WETH)-(0x[a-fA-F0-9]{40}|WETH)$/

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [{ params: { currency: [] } }],
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { currency = [] } = params
//   const [currencyIdA, currencyIdB] = currency
//   const match = currencyIdA?.match(OLD_PATH_STRUCTURE)

//   if (match?.length) {
//     return {
//       redirect: {
//         statusCode: 301,
//         destination: `/add/${match[0]}/${match[1]}`,
//       },
//     }
//   }

//   if (currencyIdB && currencyIdB && currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
//     return {
//       redirect: {
//         statusCode: 303,
//         destination: `/add/${currencyIdA}`,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
