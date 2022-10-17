/* eslint import/newline-after-import: "off" */
const Tradeanythink : React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="dflex mt-screen">
      <div className="txt-banner">
        <h3 className="comunioner"><span className="color-trade">Trade</span> anything. No registration, no hassle.</h3>
        <span className="trade-earn">
          Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.
        </span>
        <br />
        <div className="dflex mt-5">
          <div className="sc-cjibBx bquLPr">
            <div className="btn-connect">
              <div className="txt-connect">CONNECT WALLET</div>
              <div className="sc-fLcnxK lhhHgp corner">
                <img className="imgLeft-btn-connect" src="/img/subtract@2x.svg" alt="Subtract" />
                <div className="border-connect">
                  <div className="border-btn-connect"></div>
                  <div className="border-btn-connect"></div>
                </div>
                <img className="img-btn-coonect" src="/img/subtract-1@2x.svg" alt="Subtract" />
              </div>
            </div>
          </div>
          <a className='sc-cabOPr imwMnF' href="#">TRADE NOW</a>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <img src="/img/stick-6@3x.png" alt="hero images" style={{ width: '45%', float: 'right' }} />
      </div>
    </div>
  );
};

export default Tradeanythink;
