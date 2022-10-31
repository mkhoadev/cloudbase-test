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
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="involved">
        <div className="involved-div-swap">
          <div className="involved-txt">Want to get involved?</div>
          <div className="involved-div-span">
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
