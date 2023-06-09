import { Heading, Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { CompetitionProps } from 'views/TradingCompetition/types'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useRouter } from 'next/router'

const ReactivateProfile: React.FC<React.PropsWithChildren<CompetitionProps>> = ({ onDismiss }) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/profile/${account.toLowerCase()}`)
    onDismiss()
  }

  return (
    <>
      <Heading scale="md" mb="24px">
        {t('Reactivate your profile!')}
      </Heading>
      <Text color="textSubtle">
        {t('It looks like you’ve disabled your account by removing your MineSwapCollectible (NFT) profile picture.')}
      </Text>
      <Text>
        {t('You need to reactivate your profile by replacing your profile picture in order to join the competition.')}
      </Text>
      <Button mt="24px" width="100%" onClick={handleClick}>
        {t('Go to my profile')}
      </Button>
    </>
  )
}

export default ReactivateProfile
