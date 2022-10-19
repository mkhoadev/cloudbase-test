import Millionusers from './components/UserBy/Millionusers'
import Milliontrades from './components/UserBy/Milliontrades'
import Tradeanythink from './components/TradeAnythink/Tradeanythink'
import Billionstaked from './components/UserBy/Billionstaked'
import Earncrypto from './components/TradeAnythink/Earncrypto'
import Statistical from './components/TradeAnythink/Statistical'
import Amplified from './components/ScalingSolutions/Amplified'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <div className="home-style">
        <div className="dflex size-hearder">
          <div className="txt-banner">
            <h6 className="intro-swap">INTRODUCING MINESWAP</h6>
            <h3 className="comunioner">
              Community-owned <br />
              API of blockchains.
            </h3>
            <span className="trade-earn">
              Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
            </span>
          </div>
          <div style={{ width: '100%' }}>
            <img src="/img/hero-images@1x.svg" alt="hero images" style={{ width: '60%', float: 'right' }} />
          </div>
        </div>
        <div className="use-by">
          <div className="div_millions">
            <h3>
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
            <h3>Scaling solutions, amplified.</h3>
            <span className="intro-swap">Onix`s complete suite of blockchain-scaling solutions.</span>
          </div>
          <div className="div-millions-colum">
            <Amplified txt={'$820 million in BNB + MINE won so far'} span={'Predict the price trend of BNB or MINE to win'} type={'0'} />
            <Amplified txt={'$64,883 in MINE prizes this round'} span={'Buy tickets with MINE, win MINE if your numbers match'} type={'1'} />
            <Amplified txt={'mineswap Fraktal'} span={'EVM-compatible block sidechain, secured by a permissionless set of PoS validators.'} type={'2'}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
