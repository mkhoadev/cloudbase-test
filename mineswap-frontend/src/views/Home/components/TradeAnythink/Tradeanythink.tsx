import ConnectWalletButtonHome from 'components/ConnectWalletButtonHome'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'

/* eslint import/newline-after-import: "off" */
const Tradeanythink: React.FC<React.PropsWithChildren> = () => {
  // const { account } = useWeb3React()
  const { isDark } = useTheme()
  const router = useRouter()
  const handleClick = (to: string) => {
    router.push(to)
  }

  return (
    <div className="dflex mt-screen">
      <div style={{ order: '1', textAlign: 'center' }} className="width-screen">
        <img src="/img/stick-6@3x.png" alt="hero images" style={{ width: '80%' }} />
      </div>
      <div className="txt-banner">
        <div className="comunioner line-height-home">
          <span className="color-trade">Trade</span> anything. No registration, no hassle.
        </div>
        <div className="trade-earn">Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</div>
        <div className="dflex justifyContent">
          <span className="arrowBg">
            <span className="arrow arrowLeft">TRADE NOW</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tradeanythink
