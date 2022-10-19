import useSWR from 'swr'
import { ChainId } from '@pancakeswap/sdk'
import { fetchCProxyAddress } from 'state/farms/fetchFarmUser'
import { farmFetcher } from '../../../../apis/farms/src/helper'

export const useFarmCProxyAddress = (account?: string, chainId?: number) => {
  const multiCallChainId = farmFetcher.isTestnet(chainId) ? ChainId.ETHEREUM : ChainId.ETHEREUM
  const { data } = useSWR(account && chainId && ['proxyAddress'], async () =>
    fetchCProxyAddress(account, multiCallChainId),
  )

  return {
    cProxyAddress: data,
  }
}
