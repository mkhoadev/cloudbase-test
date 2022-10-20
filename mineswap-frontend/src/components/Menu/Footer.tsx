import { memo } from 'react'

type FooterVariant = 'default' | 'side'

const Footer: React.FC<React.PropsWithChildren<{ variant?: FooterVariant; helpUrl?: string }>> = () => {
  return (
    <div className="involved">
      <div className="involved-div">
        <div className="involved-txt">Want to get involved?</div>
        <div className="involved-div-span">
          <span className="color-span ">Or learn all about </span>
          <span className="color-span ">how to build on Onix</span>
          <span className="color-span ">.</span>
        </div>
      </div>
        <div className="btn-connect button-css">
          <div className="txt-connect">JOIN THE COMMUNITY</div>
        </div>
    </div>
  )
}

export default memo(Footer)
