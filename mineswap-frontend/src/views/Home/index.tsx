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
            <h3 className="comunioner">Community-owned API of blockchains.</h3>
            <span className="trade-earn">
              Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
            </span>
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
              </div> */}
              <span className="arrowBg">
                <span className="arrow arrowLeft" onClick={() => handleClick(`/swap`)}>TRADE NOW</span>
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
        <div className='div-scroll'>
          <div className="scroll-down"></div>
          <div className='intro-swap txt-scroll'>SCROLL TO EXPLORE</div>
          
        </div>
        <div className="use-by mt-Used">
          <div className="div_millions">
            <h3 className="h3-home">
              Used by millions.
              <br />
              Trusted with billions.
            </h3>
          </div>
          <div className="div-millions-colum">
            <Millionusers />
            <Milliontrades />
            <Billionstaked />
          </div>
        </div>
        <Tradeanythink />
        <Earncrypto />
        <Statistical />
        <div className="use-by" style={{ marginTop: '100px' }}>
          <div className="div_millions">
            <div className="h3-home">Scaling solutions, amplified.</div>
            <span className="intro-swap">Onix&apos;s complete suite of blockchain-scaling solutions.</span>
          </div>
          <div className="div-millions-colum">
            <Amplified
              txt={'$820 million in BNB + MINE won so far'}
              span={'Predict the price trend of BNB or MINE to win'}
              type={'0'}
            />
            <Amplified
              txt={'$64,883 in MINE prizes this round'}
              span={'Buy tickets with MINE, win MINE if your numbers match'}
              type={'1'}
            />
            <Amplified
              txt={'mineswap Fraktal'}
              span={'EVM-compatible block sidechain, secured by a permissionless set of PoS validators.'}
              type={'2'}
            />
          </div>
          <img src="/img/cube2@1x.png" alt="cube2" className="sc-djTcra hkipsh" />
        </div>
        <div
          className="background-involved"
          style={{
            background: isDark
              ? 'url(/img/swapdark.webp) no-repeat center'
              : 'url(/img/swaplight.webp) no-repeat center',
            backgroundSize: '75%',
          }}
        >
          <div className="involved">
            <div className="involved-div">
              <div className="involved-txt">Want to get involved?</div>
              <div className="involved-div-span">
                <span className="color-span ">Or learn all about </span>
                <span className="color-span ">how to build on Onix</span>
                <span className="color-span ">.</span>
              </div>
            </div>
            <span className="arrowBg">
              <span className="arrow arrowLeft">JOIN THE COMMUNITY</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
