import useTheme from "hooks/useTheme"

/* eslint import/newline-after-import: "off" */
const Milliontrades: React.FC<React.PropsWithChildren> = () => {
  const {isDark} = useTheme()
  return (
    <div className="div-millions-user">
      {/* <div className="txtmillionuser"></div> */}
      <div className="bEQugO">
        <div className="image-million">
          <div className="sc-eLdnOn color_trade"></div>
          <img src="/img/subtract-4@1x.svg" alt="Subtract" className="sc-fyJLnQ ldtVzV" />
          <img src={isDark ? "/img/subtract_dark.png" : "/img/subtract@1x.png"} alt="Subtract" className="sc-iXFbOp gdNydd" />
          <div className="sc-CqDOO boWQZJ"></div>
          <div className="sc-jOiSOi gIUHqg">
            <div className="sc-iAEawV eojyCN">
              <div className="sc-eeMvmM jKblIE">
                <img src="/img/crystal-shadow-1@2x.png" alt="slices" className="sc-cUEOzv imhWGR" />
                <img src={isDark ? "/img/swirlcurl@2x.png" : '/img/temperatur_panas.png'} alt="swirlcurl" className="imhWGR light"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-eblUpn kAIfLV">
        <div className="sc-eOSrOQ hpiEQ">
          <span className="inter-black-alto-32px">Launchpad </span>
          {/* <span className="sc-inNIpp hWpUlW" style={{color:'var(--porsche)'}}>trades</span> */}
        </div>
        <div className="sc-fpRgNi gltMei">Connect with Mineswap`s massive investor community</div>
      </div>
      <div className="sc-iOMxnH dfbVyw">
        <div className="sc-knMLgv gfrNDX" style={{ color: 'var(--yellow)' }}>
          Learn more
        </div>
        <img src="/img/arrow@2x.svg" alt="arrow" className="sc-eVFARG cHSmpO" />
      </div>
    </div>
  )
}

export default Milliontrades
