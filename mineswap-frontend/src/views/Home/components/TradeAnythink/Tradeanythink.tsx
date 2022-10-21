import ConnectWalletButtonHome from "components/ConnectWalletButtonHome"
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from "hooks/useTheme"
/* eslint import/newline-after-import: "off" */
const Tradeanythink: React.FC<React.PropsWithChildren> = () => {
  const { account } = useWeb3React()
  const {isDark} = useTheme()
  return (
    <div className="dflex mt-screen" style={{ marginLeft:'5%'}}>
      <div className="txt-banner">
        <h3 className="comunioner">
          <span className="color-trade">Trade</span> anything. No registration, no hassle.
        </h3>
        <div className="trade-earn">
          Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.
        </div>
        <br />
        <div className="dflex mt-5">
          <div className="sc-cjibBx bquLPr">
            {!account && <div className="btn-connect button-css" >
              {/* <div className="txt-connect"></div> */}
              <ConnectWalletButtonHome   />
            </div>}
          </div>
          <a className="sc-cabOPr imwMnF" href="#">
            TRADE NOW
          </a>
        </div>
      </div>
      <div style={{ width: '40%' }}>
        <img src="/img/stick-6@3x.png" alt="hero images" style={{ width: '80%'}} />
      </div>
    </div>
  )
}

export default Tradeanythink
