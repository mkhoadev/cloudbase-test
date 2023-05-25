import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Flex,
  Link,
  LogoutIcon,
  RefreshIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  UserMenuVariant,
} from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Trans from 'components/Trans'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useAuth from 'hooks/useAuth'
import useTheme from 'hooks/useTheme'
import { useEffect, useState } from 'react'
import { useProfile } from 'state/profile/hooks'
import { usePendingTransactions } from 'state/transactions/hooks'
import { useAccount } from 'wagmi'
import WalletModal, { WalletView } from './WalletModal'
import WalletUserMenuItem from './WalletUserMenuItem'
import { useRouter } from 'next/router'
const UserMenu = ({ isDark }) => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isWrongNetwork } = useActiveChainId()
  const { logout } = useAuth()
  const { hasPendingTransactions, pendingNumber } = usePendingTransactions()
  const { profile } = useProfile()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  const [onPresentWrongNetworkModal] = useModal(<WalletModal initialView={WalletView.WRONG_NETWORK} />)
  const avatarSrc = profile?.nft?.image?.thumbnail
  const [userMenuText, setUserMenuText] = useState<string>('')
  const [userMenuVariable, setUserMenuVariable] = useState<UserMenuVariant>('default')

  useEffect(() => {
    if (hasPendingTransactions) {
      setUserMenuText(t('%num% Pending', { num: pendingNumber }))
      setUserMenuVariable('pending')
    } else {
      setUserMenuText('')
      setUserMenuVariable('default')
    }
  }, [hasPendingTransactions, pendingNumber, t])

  const onClickWalletMenu = (): void => {
    if (isWrongNetwork) {
      onPresentWrongNetworkModal()
    } else {
      onPresentWalletModal()
    }
  }
  const router = useRouter()

  const handleClick = (to: string) => {
    router.push(to)
  }
  const UserMenuItems = () => {
    return (
      <>
        <WalletUserMenuItem isWrongNetwork={isWrongNetwork} onPresentWalletModal={onClickWalletMenu} />
        <UserMenuItem as="button" disabled={isWrongNetwork} onClick={onPresentTransactionModal}>
          {t('Recent Transactions')}
          {hasPendingTransactions && <RefreshIcon spin />}
        </UserMenuItem>
        {/* <UserMenuItem as="button" disabled={isWrongNetwork} onClick={() => handleClick(`/my-project`)}>
          {t('My LaunchPad')}
        </UserMenuItem> */}
        {/* <UserMenuDivider />
        <NextLink href={`/profile/${account?.toLowerCase()}`} passHref>
          <UserMenuItem as="a" disabled={isWrongNetwork || chainId !== ChainId.ETHEREUMPOW}>
            {t('Your NFTs')}
          </UserMenuItem>
        </NextLink>
        <ProfileUserMenuItem
          isLoading={isLoading}
          hasProfile={hasProfile}
          disabled={isWrongNetwork || chainId !== ChainId.ETHEREUMPOW}
        /> */}
        <UserMenuDivider />
        <UserMenuItem as="button" onClick={logout}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            {t('Disconnect')}
            <LogoutIcon />
          </Flex>
        </UserMenuItem>
      </>
    )
  }

  if (account) {
    return (
      <UIKitUserMenu account={account} avatarSrc={avatarSrc} text={userMenuText} variant={userMenuVariable}>
        {({ isOpen }) => (isOpen ? <UserMenuItems /> : null)}
      </UIKitUserMenu>
    )
  }

  if (isWrongNetwork) {
    return (
      <UIKitUserMenu text={t('Network')} variant="danger">
        {({ isOpen }) => (isOpen ? <UserMenuItems /> : null)}
      </UIKitUserMenu>
    )
  }
  return (
    <ConnectWalletButton scale="sm" style={{ backgroundColor: 'unset', boxShadow: 'unset' }}>
      <span className="arrowBg">
        <span className="arrow arrowLeft">
          <Box display={['none', , , 'block']}>
            <Trans>Connect Wallet</Trans>
          </Box>
          <Box display={['block', , , 'none']}>
            <Trans>Connect Wallet</Trans>
          </Box>
        </span>
      </span>
    </ConnectWalletButton>
  )
}

export default UserMenu
