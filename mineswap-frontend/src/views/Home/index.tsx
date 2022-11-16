import Millionusers from './components/UserBy/Millionusers'
import Milliontrades from './components/UserBy/Milliontrades'
import Tradeanythink from './components/TradeAnythink/Tradeanythink'
import Billionstaked from './components/UserBy/Billionstaked'
import Earncrypto from './components/TradeAnythink/Earncrypto'
import Statistical from './components/TradeAnythink/Statistical'
import Amplified from './components/ScalingSolutions/Amplified'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'

const Home: React.FC<React.PropsWithChildren> = () => {
  const { isDark } = useTheme()
  const router = useRouter()

  const handleClick = (to: string) => {
    router.push(to)
  }

  return (
    <>
      <div className="home-style">
        <div className="dflex size-hearder">
          <div className="txt-banner-tt">
            <h6 className="intro-swap">INTRODUCING MINESWAP</h6>
            <h3 className="comunioner">Swap, Farm & Launch on EthereumPoW</h3>
            <span className="trade-earn">An all-inclusive Defi platform for ETHW</span>
            <div className="dflex justifyContent" style={{ paddingTop: '10px' }}>
              {/* <div
                className="imgbutton"
                style={{
                  backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)',
                  color: isDark ? '#fff' : '#121212',
                }}
                onClick={() => handleClick(`/swap`)}
              >
                TRADE NOW
                Connect Wallet onClick={() => window.stargate.ui.connectWalletPopup.open()}
              </div> */}
              <span className="arrowBg">
                <span className="arrow arrowLeft" onClick={() => handleClick(`/swap`)}>
                  TRADE NOW
                </span>
              </span>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <img
              src={isDark ? '/img/logoDark.webp' : '/img/logolight.webp'}
              alt="hero images"
              className="style-img-home"
            />
          </div>
        </div>
        <div className="div-scroll">
          <div className="scroll-down"></div>
          <div className="intro-swap txt-scroll">SCROLL TO EXPLORE</div>
        </div>
        <div className="use-by mt-Used">
          <div className="div_millions">
            <h3 className="h3-home">A one-stop station</h3>
          </div>
          <div className="div-millions-colum">
            <Millionusers />
            <Milliontrades />
            <Billionstaked />
          </div>
        </div>
        <Tradeanythink />
        <Earncrypto />
        {/* <Statistical /> */}
        {/* <div className="use-by" style={{ marginTop: '100px' }}>
          <div className="div_millions">
            <div className="h3-home">Mine & swap</div>
            <span className="intro-swap">Onix&apos;s complete suite of blockchain-scaling solutions.</span>
          </div>
          <div className="div-millions-colum">
            <Amplified txt={'20+ cryptoassets supported'} span={'And more to be added to the platform'} type={'0'} />
            <Amplified txt={'$68686 of liquidity locked'} span={'Used and trusted globally'} type={'1'} />
            <Amplified txt={'20,000+ transactions'} span={'Secured by a permissionless system'} type={'2'} />
          </div>
          <img src="/img/cube2@1x.png" alt="cube2" className="sc-djTcra hkipsh" />
        </div> */}

        <div
          className="background-involved"
          style={{
            backgroundImage: isDark ? 'url(/img/swapdark.webp)' : 'url(/img/swaplight.webp)',
            backgroundSize: '90%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="involved">
            <img src="/img/sphere2.svg" alt="cube2" className="footer-img" />
            <div className="involved-div">
              <div className="involved-txt">Want to join us?</div>
              <div className="involved-div-span">
                <span style={{ color: 'var(--shuttle-gray)' }}>Learn more from our </span>
                <span className="color-span ">Whitepaper</span>
                <span className="color-span ">.</span>
              </div>
            </div>
            <span className="arrowBg">
              <span className="arrow arrowLeft">JOIN THE COMMUNITY</span>
            </span>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home
