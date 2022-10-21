import useTheme from 'hooks/useTheme';
import { memo } from 'react'

type FooterVariant = 'default' | 'side'

const Footer: React.FC<React.PropsWithChildren<{ variant?: FooterVariant; helpUrl?: string }>> = () => {
  const {isDark} = useTheme()
  return (
    <div className="background-involved-swap" style={{ backgroundImage: isDark ? 'url(/img/swapdark.svg)' : 'url(/img/swaplight.svg)' }}>
    <div className="involved">
      <div className="involved-div-swap">
        <div
          className="involved-txt"
        >
          Want to get involved?
        </div>
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
  )
}

export default memo(Footer)
