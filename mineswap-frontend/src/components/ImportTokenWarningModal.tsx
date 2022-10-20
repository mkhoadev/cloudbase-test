import { Token } from '@pancakeswap/sdk'
import { Modal, Box, InjectedModalProps } from '@pancakeswap/uikit'
import ImportToken from 'components/SearchModal/ImportToken'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'

interface Props extends InjectedModalProps {
  tokens: Token[]
  onCancel: () => void
}

const ImportTokenWarningModal: React.FC<React.PropsWithChildren<Props>> = ({ tokens, onDismiss, onCancel }) => {
  const { t } = useTranslation()
  const {isDark} = useTheme()
  return (
    <Modal
      title={t('Import Token')}
      onDismiss={() => {
        onDismiss?.()
        onCancel()
      }}
      className={isDark ? 'test': 'test1'}
    >
      <Box maxWidth="380px">
        <ImportToken tokens={tokens} handleCurrencySelect={onDismiss} />
      </Box>
    </Modal>
  )
}

export default ImportTokenWarningModal
