import { useTranslation } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import { SubMenuItems } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useEffect } from 'react'
import { useGetChainName } from 'state/info/hooks'
import { useRouter } from 'next/router'
import InfoNav from './components/InfoNav'

export const InfoPageLayout = ({ children }) => {
  const { account } = useWeb3React()
  const { chainId } = useActiveWeb3React()
  const router = useRouter()
  const chainName = useGetChainName()
  const { t } = useTranslation()

  useEffect(() => {
    if (account && chainId === ChainId.ETHEREUMPOW && router.query.chainName === 'ethw') window.location.href = '/info'
    if (account && chainId === ChainId.ETHEREUMPOW && router.query.chainName !== 'ethw') window.location.href = '/info/ethw'
  }, [chainId, account, chainName, router])

  const isStableSwap = router.query.type === 'stableSwap'
  return (
    <>
      {/* {chainName === 'GOERLI' && ( */}
      {chainName === 'ETHW' && ( 
        <SubMenuItems
          items={[
            {
              label: t('Swap'),
              href: '/info',
            },
            {
              label: t('StableSwap'),
              href: '/info?type=stableSwap',
            },
          ]}
          activeItem={isStableSwap ? '/info?type=stableSwap' : '/info'}
        />
      )}

      <InfoNav isStableSwap={isStableSwap} />
      {children}
    </>
  )
}
