import useTheme from 'hooks/useTheme'
import { memo } from 'react'

type FooterVariant = 'default' | 'side'

const Footer: React.FC<React.PropsWithChildren<{ variant?: FooterVariant; helpUrl?: string }>> = () => {
  const { isDark } = useTheme()
  return (
    <div
      className="background-involved-swap"
      style={{
        backgroundImage:  'url(/img/swap_footer.png)',
        backgroundSize: '1200px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="involved-involved">
        <div className="involved-div-swap">
          <div className="involved-txt-involved">Want to join us?</div>
          <div className="involved-div-involved">
            <span style={{ color: 'var(--shuttle-gray)' }}>Learn more from our </span>
            <span className="color-span ">Whitepaper</span>
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
