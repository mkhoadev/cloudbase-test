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
        <img src="/img/stick-7@3x.png" alt="hero images" style={{ width: '80%' }} />
      </div>
      <div className="txt-banner">
        <div className="comunioner line-height-home">
          <span className="color-earn">Earn</span> passive income with crypto.
        </div>
        <div className="trade-earn">PancakeSwap makes it easy to make your crypto work for you.</div>
        <div className="dflex justifyContent">
          <span className="arrowBg">
            <span className="arrow arrowLeft">TRADE NOW</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Earncrypto
