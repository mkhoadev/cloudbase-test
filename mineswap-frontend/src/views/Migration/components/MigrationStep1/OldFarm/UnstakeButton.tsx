import { useTranslation } from '@pancakeswap/localization'
import { AutoRenewIcon, Button, useToast } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import useCatchTxError from 'hooks/useCatchTxError'
import React from 'react'
import { useFarmUser } from 'state/farms/hooks'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useUnstakeFarms from '../../../hook/V1/Farms/useUnstakeFarms'

export interface UnstakeButtonProps {
  pid: number
}

const UnstakeButton: React.FC<React.PropsWithChildren<UnstakeButtonProps>> = ({ pid }) => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const { stakedBalance } = useFarmUser(pid)
  const { onUnstake } = useUnstakeFarms(pid)

  const isNeedUnstake = stakedBalance.gt(0)

  const handleUnstake = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()

    const receipt = await fetchWithCatchTxError(() => {
      const balance = getFullDisplayBalance(stakedBalance)
      return onUnstake(balance)
    })

    if (receipt?.status) {
      toastSuccess(
        `${t('Unstaked')}!`,
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your earnings have also been harvested to your wallet')}
        </ToastDescriptionWithTx>,
      )
      // dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
    }
  }

  return (
    <>
      {pendingTx ? (
        <Button
          width="138px"
          marginLeft="auto"
          isLoading={pendingTx}
          endIcon={<AutoRenewIcon spin color="currentColor" />}
        >
          {t('Confirming')}
        </Button>
      ) : (
        <Button width="138px" marginLeft="auto" disabled={!isNeedUnstake} onClick={handleUnstake}>
          {isNeedUnstake ? t('Unstake All') : t('Unstaked')}
        </Button>
      )}
    </>
  )
}

export default UnstakeButton
