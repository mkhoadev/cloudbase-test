import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import Hero from './component/Hero'
import LaunchPadSection from './component/LaunchPadSection'

const LaunchPad: React.FC<React.PropsWithChildren> = () => {
  const { isDark } = useTheme()
  const router = useRouter()
  const { chainId } = useActiveWeb3React()
  const handleClick = (to: string) => {
    router.push(to)
  }

  return (
    <div className="home-style" style={{minHeight:'100vh', paddingTop:'100px'}}>
      <Hero />
      <LaunchPadSection chainId={chainId} />
    </div>
  )
}

export default LaunchPad
