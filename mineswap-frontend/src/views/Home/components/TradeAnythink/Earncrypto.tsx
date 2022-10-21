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
    <div className="dflex margin-top">
      <div style={{ width: '40%' }}>
        <img src="/img/stick-7@3x.png" alt="hero images" style={{ width: '80%', float: 'left' }} />
      </div>
      <div className="txt-banner-trade">
        <div className="comunioner line-height-home">
          <span className="color-earn">Earn</span> passive income with crypto.
        </div>
        <div className="trade-earn">PancakeSwap makes it easy to make your crypto work for you.</div>
        <div className="dflex">
          <div
            className="imgbutton"
            style={{
              backgroundImage: isDark ? 'url(/img/Group40.png)' : 'url(/img/Group21.png)',
              color: isDark ? '#fff' : '#121212',
            }}
            onClick={() => handleClick(`/swap`)}
          >
            TRADE NOW
          </div>
          {/* <a className="sc-cabOPr imwMnF" style={{ marginLeft: '15px' }} href="#">
            Read the docs
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Earncrypto
