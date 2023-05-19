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
        <img
          src={isDark ? '/img/stick-6@3x.png' : '/img/hujan_berangin.png'}
          alt="hero images"
          style={{ width: '80%' }}
        />
      </div>
      <div className="txt-banner">
        <div className="comunioner line-height-home">
          <span className="color-trade">Explore</span> opportunities from BASE ecosystem
        </div>
        <div className="trade-earn">Automated and fully-audited trading mechanism in an understandable interface.</div>
        {/* <div className="dflex justifyContent">
          <span className="arrowBg">
            <span className="arrow arrowLeft" onClick={() => handleClick(`/swap`)}>
              CONNECT WALLET
            </span>
          </span>
          <span>
            <span className="arrow arrowRight" onClick={() => handleClick(`/swap`)}>
              TRADE NOW
            </span>
          </span>
        </div> */}
      </div>
    </div>
  )
}

export default Tradeanythink
