import useTheme from 'hooks/useTheme'
import { memo } from 'react'

type FooterVariant = 'default' | 'side'

const Footer: React.FC<React.PropsWithChildren<{ variant?: FooterVariant; helpUrl?: string }>> = () => {
  const { isDark } = useTheme()
  return (
    <div
      className="background-involved-swap"
      style={{
        backgroundImage: isDark ? 'url(/img/swapdark.webp)' : 'url(/img/swaplight.webp)',
        backgroundSize: '720px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="involved-involved">
        <div className="involved-div-swap">
          <div className="involved-txt-involved">Want to get involved?</div>
          <div className="involved-div-involved">
            <span className="color-span ">Or learn all about </span>
            <span className="color-span ">how to build on Onix</span>
            <span className="color-span ">.</span>
          </div>
        </div>
        <span className="arrowBg">
          <span className="arrow arrowLeft">JOIN THE COMMUNITY</span>
        </span>
      </div>
    </div>
  )
}

export default memo(Footer)
