import { Box, Container, Typography, useMediaQuery, styled } from '@mui/material';
// import { ChainId } from '@bionswap/core-sdk';
import Breadcrumb from './components/Breadcrumb';
import HeadDetail from './components/HeadDetail';
import FundraiseArea from './components/FundraiseArea';
// import RecomendProjects from './components/RecomendProjects';
import TabsArea from './components/TabsArea';
import { useRouter } from 'next/router';
// import { getSaleDetail } from 'api/launchpad';
import { useEffect, useState } from 'react';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import dataCard from 'views/LaunchPad/data';
// import { NATIVE } from '@bionswap/core-sdk';
// import { useToken } from 'hooks/useToken';
import { isAddress } from 'utils/validate';
import { getSaleDetail } from 'api/launchpad';
// import { usePresaleContract } from 'hooks/useContract';
// import { useChain } from 'hooks';
// import NotSupportSection from 'components/NotSupportSection';

const config = [
  {
    icon: '/icons/launchpad/chat-icon.svg',
    content: 'MineSwap connects creators with backers to fund projects and many more features.',
  },
  {
    icon: '/icons/launchpad/reserving-project.svg',
    content: 'Reserving project tokens and extremly rare NFTs if you are lucky enough.',
  },
  {
    icon: '/icons/launchpad/verified-project.svg',
    content: 'Every verified projects is secured and checked by the BionSwap team.',
  },
];

const LaunchpadDetail = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>(null);
  // const [data, setData] = useState(dataCard.data[Number(slug)]);
  const { chainId } = useActiveWeb3React()
  // const presaleContract = usePresaleContract(data?.saleAddress);
  // const token = useToken(data?.token);
  // const quoteERCToken = useToken(data?.quoteToken);
  // const quoteNativeToken = NATIVE[chainId];
  // const quoteToken = data?.isQuoteETH ? quoteNativeToken : quoteERCToken;
  const unit = "ETHW"; 
  //quoteToken?.symbol;

  const fetchSaleDetail = async (saleAddress?: string) => {
    if (!isAddress(saleAddress)) return;

    try {
      const res = await getSaleDetail(saleAddress || '');
      setData(res);
    } catch (error) {
      console.log('error==>', error);
    }
  };

  useEffect(() => {
    fetchSaleDetail(slug as string);
  }, [slug]);

  return (
    <div className="home-style" style={{minHeight:'100vh', paddingTop:'100px'}}>
        <>
          <Container maxWidth="xl">
            <Breadcrumb name={data?.title} />
            <HeadDetail
              avatar={data?.logo}
              name={data?.title}
              type={data?.saleType}
              endTime={data?.endTime * 1000}
              startTime={data?.startTime * 1000}
              unit={unit}
              isWhitelistEnabled={data?.isWhitelistEnabled}
            />
            <FundraiseArea data={data} token={data?.token} quoteToken={unit} />
          </Container>
          <WrapService>
            <Container maxWidth="xl">
              <FlexBox
                justifyContent="space-between"
                sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: '40px', md: '30px' },
                }}
              >
                {config.map((item) => (
                  <FlexBox key={item.content} gap="25px" alignItems="center">
                    <img src={item.icon} alt="" />
                    <Box maxWidth="290px" width="100%">
                      <Typography  color="var(--colors-text)" fontWeight="400">
                        {item.content}
                      </Typography>
                    </Box>
                  </FlexBox>
                ))}
              </FlexBox>
            </Container>
          </WrapService>
          <WrapTabRecom>
            <TabsArea isMobile={isMobile} data={data} unit={unit} token={data?.tokenMetadata} />
            {/* <RecomendProjects data={crowdfundingConfig} /> */}
          </WrapTabRecom>
        </>
    </div>
  );
};

const Section = styled(Box)`
  background-color: #001015;
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
const WrapService = styled(Box)`
  background-color: var(--colors-bgrcard);
  padding: 57px 50px;
  margin-top: 50px;
`;
const WrapTabRecom = styled(Box)`
  margin-top:50px;
`;
const FlexBox = styled(Box)`
  display: flex;
`;

export default LaunchpadDetail;
