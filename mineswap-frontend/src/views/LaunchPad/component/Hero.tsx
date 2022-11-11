import React from 'react'
import { Box, Container, styled, Typography, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  return (
    <Banner>
      <Container maxWidth="xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap="10px" flexDirection="column">
            <Typography
              color="var(--colors-text)"
              style={{
                margin: '0px',
                fontFamily: 'Karla',
                fontSize: '32px',
                lineHeight: '180%',
                color: 'var(--colors-text)',
              }}
            >
              Early access to the future
            </Typography>
            <Typography sx={{ color: 'var(--colors-text)' }}>
              Supported by industry-leading creators and funds
            </Typography>
            <Flex
              pt="30px"
              alignItems="center"
              flexWrap="wrap"
              sx={{
                gap: { xs: '12px', md: '15px' },
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              {/* <StyledBox
                
              >
                Create
              </StyledBox> */}
              <span className="arrowBg">
                <span className="arrow arrowLeft" onClick={(e) => {
                  e.preventDefault()
                  router.push('/launchpad/create')
                }}>
                Create
                </span>
              </span>
              {/* <ImageArrow>
                <img src="/images/launchpad/arrow.svg" alt="" width="35px" height="20px" />
              </ImageArrow>
              <StyledBox>Subcription</StyledBox>
              <ImageArrow>
                <img src="/images/launchpad/arrow.svg" alt="" width="35px" height="20px" />
              </ImageArrow>
              <StyledBox>Distribution</StyledBox> */}
            </Flex>
          </Flex>
          <WrapImage>
            <img src="/images/launchpad/hero-illus.png" alt="" width="508px" />
          </WrapImage>
        </Flex>
      </Container>
    </Banner>
  )
}

const Banner = styled(Box)`
  background-image: url('/images/launchpad/hero-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: cover;

  ${(props) => props.theme.breakpoints.down('lg')} {
    min-height: 300px;
    height: auto;
    display: flex;
    align-items: center;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 40px 0;
  }
`
const Flex = styled(Box)`
  display: flex;
`
const StyledBox = styled(Box)`
  border: 1px solid #ccc;
  color: #ccc;
  border-radius: 4px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 30px;
  font-weight: 600;
`
const WrapImage = styled(Box)`
  ${(props) => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`

export default Hero
