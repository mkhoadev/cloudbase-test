import styled from 'styled-components'
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
            <h6 className="intro-swap">INTRODUCING CLOUDBASE</h6>
            <h3 className="comunioner">Pioneer DEX on BASE All-in-One Platform</h3>
            <span className="trade-earn">An all-inclusive Defi platform for BASE</span>
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
              {/* <span className="arrowBg">
                <span className="arrow arrowLeft" onClick={() => handleClick(`/swap`)}>
                  CONNECT WALLET
                </span>
              </span>
              <span>
                <span className="arrow arrowRight" onClick={() => handleClick(`/swap`)}>
                  TRADE NOW
                </span>
              </span> */}
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <img
              src={isDark ? '/img/logoDark.webp' : '/img/hero_images.png'}
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
            <h3 className="h3-home">Why CloudBase</h3>
          </div>
          <GridLayout isMaxHeight isMargintop>
            <Millionusers />
            <Milliontrades />
            <Billionstaked />
          </GridLayout>
        </div>
        <Tradeanythink />
        <Earncrypto />
        {/* <Statistical /> */}

        <div className="use-by" style={{ marginTop: '100px' }}>
          <div className="div_millions">
            <div className="h3-home">STATISTIC</div>
            {/* <span className="intro-swap">Onix&apos;s complete suite of blockchain-scaling solutions.</span> */}
          </div>
          <GridLayout>
            <Amplified txt={'0 cryptoassets supported'} span={'And more to be added to the platform'} type={'0'} />
            <Amplified txt={'$0 of liquidity locked'} span={'Used and trusted globally'} type={'1'} />
            <Amplified txt={'0 transactions'} span={'Secured by a permissionless system'} type={'2'} />
          </GridLayout>
          <img src="/img/salju.png" alt="cube2" className="sc-djTcra hkipsh" />
        </div>

        <div
          className="background-involved"
          style={{
            backgroundImage: 'url(/img/hero_images_footer.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="involved">
            <img src="/img/awan_cerah.png" alt="cube2" className="footer-img" />
            <img src="/img/pelangi.png" alt="cube2" className="footer-pelangi" />
            <div className="involved-div">
              <div className="involved-txt">Join us now</div>
              <div className="involved-div-span">
                <span style={{ color: 'var(--supernova)' }}>Read our </span>
                <span className="color-span" style={{ fontWeight: '600' }}>
                  Whitepaper
                </span>
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

const GridLayout = styled.div<{ isMaxHeight?: boolean; isMargintop?: boolean }>`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  height: auto;
  @media screen and (max-width: 1380px) and (min-width: 921px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: ${({ isMaxHeight }) => (isMaxHeight ? '10rem' : '3rem')};
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10rem;
    grid-row-gap: ${({ isMaxHeight }) => (isMaxHeight ? '10rem' : '3rem')};
    margin-top: ${({ isMargintop }) => (isMargintop ? '5rem' : '0rem')};
  }
`
