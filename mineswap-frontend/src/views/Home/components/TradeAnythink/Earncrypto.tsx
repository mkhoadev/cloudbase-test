// import { Link } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'

/* eslint import/newline-after-import: "off" */
const Earncrypto: React.FC<React.PropsWithChildren> = () => {
  const { isDark } = useTheme()
  const router = useRouter()

  const handleClick = (to: string) => {
    router.push(to)
  }

  return (
    <div className="dflex mt-screen">
      <div style={{ order: '-1' }} className="width-screen txtAlign">
        <img src={isDark ? '/img/stick-7@3x.png' : '/img/hujan_petir.png'} alt="hero images" style={{ width: '80%' }} />
      </div>
      <div className="txt-banner">
        <div className="comunioner line-height-home">
          <span className="color-earn">Connect</span> to the next journey on BASE
        </div>
        <div className="trade-earn">Exploit the values across networks.</div>
        <div className="dflex justifyContent">
          <span className="arrowBg">
            <span className="arrow arrowLeft">Launchpad</span>
          </span>
          <span>
            <span className="arrow arrowRight">Read the docs</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Earncrypto
