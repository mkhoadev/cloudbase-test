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
      <div className="txt-banner">
        <div className="comunioner line-height-home">
          <span className="color-trade">Trade</span> anything. No registration, no hassle.
        </div>
        <div className="trade-earn">Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</div>
        <div className="dflex">
          {/* <div className="sc-cjibBx bquLPr">
            {!account && (
              <div
                className="btn-connect button-css"
                style={{ backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)' }}
              >
                <ConnectWalletButtonHome />
              </div>
            )}
          </div> */}
          {/* <Link className="sc-cabOPr imwMnF" href="/swap">
            TRADE NOW
          </Link> */}
          <div
            className="imgbutton"
            style={{
              backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)',
              color: isDark ? '#fff' : '#121212',
            }}
            onClick={() => handleClick(`/swap`)}
          >
            TRADE NOW
          </div>
        </div>
      </div>
      <div style={{ width: '40%' }}>
        <img src="/img/stick-6@3x.png" alt="hero images" style={{ width: '80%' }} />
      </div>
    </div>
  )
}

export default Tradeanythink
