import useTheme from "hooks/useTheme"

/* eslint import/newline-after-import: "off" */
const Millionusers = () => {
  const {isDark} = useTheme()
  return (
    <div className="div-millions-user">
      <div className="bEQugO">
        <div className="image-million">
          <div className="sc-eLdnOn eAGDqQ"></div>
          <img src="/img/subtract-4@1x.svg" alt="Subtract" className="sc-fyJLnQ ldtVzV" />
          <img src={isDark ? "/img/subtract_dark.png" : "/img/subtract@1x.png"} alt="Subtract" className="sc-iXFbOp gdNydd" />
          <div className="sc-CqDOO boWQZJ"></div>
          <div className="sc-jOiSOi gIUHqg">
            <div className="sc-iAEawV eojyCN">
              <div className="sc-eeMvmM jKblIE">
                <img src="/img/crystal-shadow-1@2x.png" alt="slices" className="sc-cUEOzv imhWGR" />
                <img src={isDark ? "/img/slices@2x.png" : '/img/angin_puyuh.png'} alt="slices" className="sc-cUEOzv imhWGR light" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-eblUpn kAIfLV">
        <div className="sc-eOSrOQ hpiEQ">
          <span className="inter-black-alto-32px">Trade Anything</span>
          {/* <span className="sc-inNIpp hWpUlW" >users</span> */}
        </div>
        <div className="sc-fpRgNi gltMei">Trade any token on BASE in seconds, just by connecting your wallet.</div>
      </div>
      <div className="sc-iOMxnH dfbVyw learn_more">
        <div className="sc-knMLgv gfrNDX">Learn more</div>
        <img src="/img/arrow@2x.svg" alt="arrow" className="sc-eVFARG cHSmpO" />
      </div>
    </div>
  )
}

export default Millionusers
