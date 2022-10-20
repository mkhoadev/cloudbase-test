/* eslint import/newline-after-import: "off" */
type nftSaleType = {
  txt?: string,
  span?: string,
  type?: string,
}
const Amplified = ({ txt, span, type }: nftSaleType) => {
  console.log(txt, span)
  return (
    <div className={type === '2'? 'div-millions-user mb-5s' :  'div-millions-user'}>
      {/* <div className="txtmillionuser"></div> */}
      <div className="bEQugO">
        <div className="image-million">
          <div className="color_staked"></div>
          <img src="/img/subtract-4@1x.svg" alt="Subtract" className="sc-fyJLnQ ldtVzV" />
          <img src="/img/subtract@1x.png" alt="Subtract" className="sc-iXFbOp gdNydd" />
          <div className="sc-CqDOO boWQZJ"></div>
          {/* <div className="sc-jOiSOi gIUHqg">
            <div className="sc-iAEawV eojyCN">
              <div className="sc-eeMvmM jKblIE">
                <img src="./img/crystal-shadow-1@2x.png" alt="slices" className="sc-cUEOzv imhWGR" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="sc-eblUpn kAIfLV">
      <img src="/img/icon@2x.svg" alt="slices" className="img-qr" />
        {/* <div className="sc-eOSrOQ hpiEQ">
         
            {txt}
          
        </div> */}
        <div className="sc-fpRgNi hpiEQ">{txt}</div>
        <div className="sc-fpRgNi gltMei">{span}</div>
      </div>
      <div className="sc-iOMxnH dfbVyw">
        <div
          className="cLuDOM"
          style={{
            color: type === '0' ? 'var(--inchworm)' : type === '1' ? 'var(--blue-marguerite)' : 'var(--porsche)',
          }}
        >
          Online
        </div>
        {/* <img src="/img/arrow@2x.svg" alt="arrow" className="sc-eVFARG cHSmpO" /> */}
      </div>
    </div>
  )
}

export default Amplified
