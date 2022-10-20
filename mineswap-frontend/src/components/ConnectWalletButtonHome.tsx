import { WalletModalV2 } from '@pancakeswap/ui-wallets'
import { ButtonProps } from '@pancakeswap/uikit'
import { createWallets } from 'config/wallet'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useAuth from 'hooks/useAuth'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from 'hooks/useEagerConnect.bmp.ts'
import useTheme from 'hooks/useTheme'
import { useMemo, useState } from 'react'
import { useConnect } from 'wagmi'
import Trans from './Trans'

const ConnectWalletButtonHome = () => {
  const handleActive = useActiveHandle()
  const { login } = useAuth()
  const { connectAsync } = useConnect()
  const { chainId } = useActiveChainId()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      setOpen(true)
    }
  }

  const wallets = useMemo(() => createWallets(chainId, connectAsync), [chainId, connectAsync])
  const { isDark } = useTheme()
  return (
    <>
      <div className="txt-connect" style={{ color: isDark ? '' : '#121212' }} onClick={handleClick}>
        <Trans>Connect Wallet</Trans>
      </div>
      {/* <Button onClick={handleClick} {...props}>
        {children || <Trans>Connect Wallet</Trans>}
      </Button> */}
      <WalletModalV2 isOpen={open} wallets={wallets} login={login} onDismiss={() => setOpen(false)} />
    </>
  )
}

export default ConnectWalletButtonHome
