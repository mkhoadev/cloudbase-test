import { Modal, Flex, Text, useToast } from '@pancakeswap/uikit'
import { BigNumber } from '@ethersproject/bignumber'
import { formatUnits } from '@ethersproject/units'
import { useTranslation } from '@pancakeswap/localization'
// import { useCake, useProfileContract } from 'hooks/useContract'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { useProfile } from 'state/profile/hooks'
import { requiresApproval } from 'utils/requiresApproval'
import { useCallWithMarketGasPrice } from 'hooks/useCallWithMarketGasPrice'
import { ToastDescriptionWithTx } from 'components/Toast'
import ApproveConfirmButtons from 'components/ApproveConfirmButtons'
import { REGISTER_COST } from './config'
import { State } from './contexts/types'

interface Props {
  userName: string
  selectedNft: State['selectedNft']
  account: string
  teamId: number
  minimumCakeRequired: BigNumber
  allowance: BigNumber
  onDismiss?: () => void
}

const ConfirmProfileCreationModal: React.FC<React.PropsWithChildren<Props>> = ({
  account,
  teamId,
  selectedNft,
  minimumCakeRequired,
  allowance,
  onDismiss,
}) => {
  const { t } = useTranslation()
  // const profileContract = useProfileContract()
  const { refresh: refreshProfile } = useProfile()
  const { toastSuccess } = useToast()
  // const { reader: cakeContractReader, signer: cakeContractApprover } = useCake()
  const { callWithMarketGasPrice } = useCallWithMarketGasPrice()

  // const { isApproving, isApproved, isConfirmed, isConfirming, handleApprove, handleConfirm } =
  //   useApproveConfirmTransaction({
  //     onRequiresApproval: async () => {
  //       return requiresApproval(cakeContractReader, account, profileContract.address, minimumCakeRequired)
  //     },
  //     onApprove: () => {
  //       return callWithMarketGasPrice(cakeContractApprover, 'approve', [profileContract.address, allowance.toJSON()])
  //     },
  //     onConfirm: () => {
  //       return callWithMarketGasPrice(profileContract, 'createProfile', [
  //         teamId,
  //         selectedNft.collectionAddress,
  //         selectedNft.tokenId,
  //       ])
  //     },
  //     onSuccess: async ({ receipt }) => {
  //       refreshProfile()
  //       onDismiss()
  //       toastSuccess(t('Profile created!'), <ToastDescriptionWithTx txHash={receipt.transactionHash} />)
  //     },
  //   })

  // return (
  //   <Modal title={t('Complete Profile')} onDismiss={onDismiss}>
  //     <Text color="textSubtle" mb="8px">
  //       {t('Submitting NFT to contract and confirming User Name and Team.')}
  //     </Text>
  //     <Flex justifyContent="space-between" mb="16px">
  //       <Text>{t('Cost')}</Text>
  //       <Text>{t('%num% MINE', { num: formatUnits(REGISTER_COST) })}</Text>
  //     </Flex>
  //     <ApproveConfirmButtons
  //       isApproveDisabled={isConfirmed || isConfirming || isApproved}
  //       isApproving={isApproving}
  //       isConfirmDisabled={!isApproved || isConfirmed}
  //       isConfirming={isConfirming}
  //       onApprove={handleApprove}
  //       onConfirm={handleConfirm}
  //     />
  //   </Modal>
  // )
  return null
}

export default ConfirmProfileCreationModal
