import { useCallback } from 'react'

import _isEmpty from 'lodash/isEmpty'
// import { useBCakeFarmBoosterContract } from 'hooks/useContract'
import useCatchTxError from 'hooks/useCatchTxError'
import { useCallWithMarketGasPrice } from 'hooks/useCallWithMarketGasPrice'

const useBoosterFarmHandlers = (farmPid: number, onDone) => {
  // const farmBoosterContract = useBCakeFarmBoosterContract()
  const { fetchWithCatchTxError, loading: isConfirming } = useCatchTxError()
  const { callWithMarketGasPrice } = useCallWithMarketGasPrice()

  const activate = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() => {
      // return callWithMarketGasPrice(farmBoosterContract, 'activate', [farmPid])
      return null
    })

    if (receipt?.status && onDone) {
      onDone()
    }
  }, [farmPid,  ,callWithMarketGasPrice, fetchWithCatchTxError, onDone])
  // farmBoosterContract

  const deactivate = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() => {
      // return callWithMarketGasPrice(farmBoosterContract, 'deactive', [farmPid])
      return null
    })

    if (receipt?.status && onDone) {
      onDone()
    }
  }, [farmPid,   , callWithMarketGasPrice, fetchWithCatchTxError, onDone])
  // farmBoosterContract
  return { activate, deactivate, isConfirming }
}

export default useBoosterFarmHandlers
