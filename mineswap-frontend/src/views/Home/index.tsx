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
            <div className="dflex">
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
          <div style={{ width: '100%' }}>
            <img
              src={isDark ? '/img/hero-images@1x.svg' : '/img/logolight.svg'}
              alt="hero images"
              style={{ width: '60%', float: 'right' }}
            />
          </div>
        </div>
        <div className="use-by">
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
        <div className="use-by" style={{ marginTop: '150px' }}>
          <div className="div_millions">
            <div className="h3-home">Scaling solutions, amplified.</div>
            <span className="intro-swap">Onix`s complete suite of blockchain-scaling solutions.</span>
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
          style={{ backgroundImage: isDark ? 'url(/img/Footerdark1.svg)' : 'url(/img/Footer1.svg)' }}
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
            <div
              className="btn-connect button-css"
              style={{ backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)' }}
            >
              <div className="txt-connect" style={{ color: isDark ? '' : '#121212' }}>
                JOIN THE COMMUNITY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
