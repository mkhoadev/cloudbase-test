import styled from 'styled-components'
import { Box, Flex } from '@pancakeswap/uikit'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'
import { EXCHANGE_DOCS_URLS } from 'config/constants'
import useTheme from 'hooks/useTheme'

const StyledPage = styled.div<{ $removePadding: boolean; $noMinHeight }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
  // padding-bottom: 0;
  min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : '')};
  
  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '24px')};
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '32px')};
    padding-bottom: 0;
    min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : 'calc(100vh - 100px)')};
  }
  z-index:10;
`

const Page: React.FC<
  React.PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & {
      removePadding?: boolean
      hideFooterOnDesktop?: boolean
      noMinHeight?: boolean
      helpUrl?: string
    }
  >
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_DOCS_URLS,
  ...props
}) => {
  const {isDark} = useTheme()
  return (
    <>
      <PageMeta />
      {/* <ContainerBg/> */}
      <StyledPage  $removePadding={removePadding} $noMinHeight={noMinHeight} {...props}>
        {children}
        {/* <Flex flexGrow={1} /> */}
        <Box display={['block', null, null, hideFooterOnDesktop ? 'none' : 'block']} width="100%">
          <Footer helpUrl={helpUrl} />
        </Box>
      </StyledPage>
    </>
  )
}

export default Page

const ContainerBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background:url('/images/cloudbase/bg.png?version=1.0');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
`