import { Link } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

/* eslint import/newline-after-import: "off" */
const Earncrypto: React.FC<React.PropsWithChildren> = () => {
  const {isDark} = useTheme()
  return (
    <div className="dflex margin-top">
      <div style={{ width: '40%' }}>
        <img src="/img/stick-7@3x.png" alt="hero images" style={{ width: '80%', float: 'left' }} />
      </div>
      <div className="txt-banner-trade">
        <h3 className="comunioner">
          <span className="color-earn">Earn</span> passive income with crypto.
        </h3>
        <span className="trade-earn">
          Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.
        </span>
        <br />
        <div className="dflex mt-5">
          <Link href="/swap" className="imgbutton" style={{ backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)', color: isDark ? '' : '#121212' }}>
            LaunchApp
          </Link>
          <a className="sc-cabOPr imwMnF" style={{ marginLeft: '15px' }} href="#">
            Read the docs
          </a>
        </div>
      </div>
    </div>
  )
}

export default Earncrypto
