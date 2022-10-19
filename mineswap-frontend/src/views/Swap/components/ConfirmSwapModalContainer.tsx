import { Modal } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'

const ConfirmSwapModalContainer = ({ children, handleDismiss }) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  return (
    <Modal title={t('Confirm Swap')} className={isDark ? 'test': 'test1'} onDismiss={handleDismiss}>
      {children}
    </Modal>
  )
}

export default ConfirmSwapModalContainer
