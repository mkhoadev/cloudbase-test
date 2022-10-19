/* eslint import/newline-after-import: "off" */
const Earncrypto : React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="dflex margin-top">
      <div style={{ width: '100%'}}>
        <img src="/img/stick-7@3x.png" alt="hero images" style={{ width: '45%', float: 'left' }} />
      </div>
      <div className="txt-banner-trade">
        <h3 className="comunioner"><span className="color-earn">Earn</span> passive income with crypto.</h3>
        <span className="trade-earn">
          Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.
        </span>
        <br />
        <div className="dflex mt-5">
          <div className="sc-cjibBx bquLPr">
            <div className="btn-connect button-css">
              <div className="txt-connect">LAUNCH APP</div>
            </div>
          </div>
          <a className='sc-cabOPr imwMnF' style={{marginLeft:'15px'}} href="#">Read the docs</a>
        </div>
      </div>
      
    </div>
  );
};

export default Earncrypto;
