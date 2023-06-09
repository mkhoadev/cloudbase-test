import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import { createPresale } from 'api/launchpad';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';
import HeaderSection from '../HeaderSection';
import { clearPresaleForm } from 'state/presale/action';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { withCatch } from 'utils/error';
const Description = ({ html }: any) => {
  return <Box dangerouslySetInnerHTML={{ __html: html }} />;
};

export const minimizeAddressSmartContract = (str: string) => {
  if (!str) return;
  return str.substring(0, 8) + '...' + str.substring(str.length - 4, str.length);
};

const Step06 = ({ data, onBackStep, setData, parseErrorMessage, handleSubmit }: any) => {
  const router = useRouter();
  const { chainId, account } = useActiveWeb3React();
  //const presaleFactoryContract = usePresaleFactoryContract();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const tokenContract = {
    chainId: 97,
    decimals: 18,
    symbol: 'JPM',
    name: 'MegaLott.io',
    isNative: false,
    isToken: true,
    address: '0x7499B4BAFA14c6b8783d0f02cfe4Ae4a42C3a1D1',
  };
  //useToken(data.tokenContract);
  const [onpenDescription, setOpenDescription] = useState(false);

  const quoteToken = {address: undefined};
  //useToken(data?.quoteToken);
  const [isReady, setIsReady] = useState(false);
  const [decimals, setDecimals] = useState(18);

  const tokenFeePercent = data.saleFee === '1' ? 2 : 0;
  const tokenForSale = Number(data.maxGoal) / Number(data.tokenPrice) || 0;
  const tokenForLiquidity =
    data.listing === '0'
      ? 0
      : (Number(data.liquidityPercentage) * Number(data.maxGoal)) / Number(data.listingPrice) || 0;
  const tokenForFee = (Number(data.maxGoal) * Number(tokenFeePercent)) / 100 / Number(data.tokenPrice);

  const projectReview = [
    {
      head: 'Project information',
      subHead: 'Important information that you want people focus',
      items: [
        {
          label: 'Total token',
          value: `${tokenForSale + tokenForLiquidity} ${tokenContract?.name}`,
        },
        {
          label: 'Address',
          value: `${data.tokenContract}`,
        },
        {
          label: 'Token name',
          value: `${tokenContract?.name}`,
        },
        {
          label: 'Token symbol',
          value: `${tokenContract?.symbol}`,
        },
        {
          label: 'Token decimals',
          value: `${tokenContract?.decimals}`,
        },
        {
          label: 'Token price',
          value: `${data.tokenPrice || 0} ${data.currency}`,
        },
        {
          label: 'Listing price',
          value: `${data.listingPrice || 0} ${data.currency}`,
        },
      ],
    },
    {
      head: 'Sale Information',
      subHead: 'The Launchpad information that you want to raise',
      items: [
        {
          label: 'Sale method',
          value: `${data.whitelist ? 'Whitelist' : 'Public'}`,
        },
        {
          label: 'Softcap',
          value: `${data.minGoal || 0} ${data.currency}`,
        },
        {
          label: 'Hardcap',
          value: `${data.maxGoal || 0} ${data.currency}`,
        },
        {
          label: 'Unsold tokens',
          value: `${data.unsoldToken === '0' ? 'Refund' : 'Burn'}`,
        },
        {
          label: 'Minimum buy',
          value: `${data.minSale || 0} ${data.currency}`,
        },
        {
          label: 'Maximum buy',
          value: `${data.maxSale || 0} ${data.currency}`,
        },
      ],
    },
    {
      head: 'Liquidity information',
      subHead: 'Token Liquidity information that you want to raise',
      items: [
        {
          label: 'Liquidity',
          value: `${data.liquidityPercentage || 0}%`,
        },
        {
          label: 'Start time',
          value: `${new Date(data.launchTime).toUTCString()}`,
        },
        {
          label: 'End time',
          value: `${new Date(data.endTime).toUTCString()}`,
        },
        {
          label: 'Liquidity lockup time',
          value: `${data.lockupTime} days`,
        },
        {
          label: 'Using vesting',
          value: `${data.vestingToken === '0' ? 'No' : 'Yes'}`,
        },
      ],
    },
    {
      head: 'Description',
      subHead:
        "Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are.",
      description:
        'A wallet address is a string of letters and numbers from which cryptocurrencies or NFTs can be sent to and from. A wallet address is also known as a Public Key and can be shared with different contacts like an email address....',
    },
    {
      head: 'Community',
      subHead: 'Where people can follow, discuss and find more information about your project',
      items: [
        {
          label: "Website",
          value: `${JSON.parse(data?.community)['website']}`,
        },
        {
          label: "Telegram",
          value: `${JSON.parse(data?.community)['telegram']}`,
        },
        {
          label: "Discord",
          value: `${JSON.parse(data?.community)['discord']}`,
        },
      ],
    },
  ];

  const showDescription = () => {
    setOpenDescription(!onpenDescription);
  };

  useEffect(() => {
    if (data.isQuoteETH) {
      setIsReady(true);
    } else if (quoteToken?.address) {
      setIsReady(true);
    }
  }, [data.isQuoteETH, quoteToken?.address]);

  const handleCreateSale = useCallback(
    async (data: any) => {
      setLoadingSubmit(true);
      // first get salt
      if (!chainId || !account ) return;

      const payloadInfo = {
        chainId: chainId,
        title: data.projectTitle,
        logo: data.projectLogo,
        banner: data.saleBanner,
        videoURL: data.videoPromo,
        socials: data.community,
        description: data.description,
      };

      const payloadContract = {
        owner: account,
        feeTo: account,
        router: data.router,
        token: data.tokenContract,
        quoteToken: data.quoteToken,
        isQuoteETH: data.isQuoteETH,
        isWhitelistEnabled: !!Number(data.whitelist),
        isBurnUnsold: !!Number(data.unsoldToken),
        price: ethers.utils.parseUnits(data.tokenPrice, decimals).toString(),
        listingPrice: ethers.utils.parseUnits(data.listingPrice, decimals).toString(),
        minPurchase: ethers.utils.parseUnits(data.minSale, decimals).toString(),
        maxPurchase: ethers.utils.parseUnits(data.maxSale, decimals).toString(),
        startTime: Number(data.launchTime) / 1000,
        endTime: Number(data.endTime) / 1000,
        lpPercent: Number(data.liquidityPercentage) * 100,
        softCap: ethers.utils.parseUnits(data.minGoal, decimals).toString(),
        hardCap: ethers.utils.parseUnits(data.maxGoal, decimals).toString(),
        isAutoListing: data.isAutoListing,
        baseFee: data.baseFee,
        tokenFee: data.tokenFee,
        tgeDate: data.tgeDate / 1000,
        tgeReleasePercent: Number(data.firstRelease) * 100,
        cycleDuration: Number(data.vestingPeriodEachCycle) * 86400,
        // cycleDuration: Number(data.vestingPeriodEachCycle) * 500,
        cycleReleasePercent: Number(data.tokenReleaseEachCycle) * 100,
        lockLPDuration: Number(data.lockupTime) * 86400,
        // lockLPDuration: Number(data.lockupTime) * 500,
      };

      // first estimate whether a successful transaction
      const mockSalt = '0x3633336261643334633339393335343462663266303961300000000000000000';
      // const { error: errorEstimate } = await withCatch(
      //   presaleFactoryContract.estimateGas.create(payloadContract, mockSalt, { value: ethers.utils.parseEther('0.5') }),
      // );

      // if (errorEstimate) {
      //   // TODO: toast
      //   return;
      // }

      const { error, result } = await withCatch(
        createPresale({
          ...payloadInfo,
          ...payloadContract,
        }),
      );

      if (error) {
        // TODO: toast
        setLoadingSubmit(false);
        return;
      }

      // const { error: errorCreateSale, result: tx } = await withCatch(
      //   presaleFactoryContract.create(payloadContract, (result as any).salt, {
      //     value: ethers.utils.parseEther('0.1'),
      //   }),
      // );

      // if (errorCreateSale) {
      //   // TODO: toast
      //   setLoadingSubmit(false);
      //   return;
      // }

      // const receipt = await (tx as any)?.wait();

      setLoadingSubmit(false);

      router.push('/dashboard/my-project');

      setData(clearPresaleForm());
    },
    [account, chainId, decimals, router, setData],
  );

  return (
    <>
      <HeaderSection
        data={data}
        activeStep={5}
        onBackStep={onBackStep}
        handleCreateSale={handleCreateSale}
        loadignSubmit={loadingSubmit}
        isReady={isReady}
      />
      {onpenDescription ? (
        <Box>
          <FlexBox onClick={showDescription} sx={{ cursor: 'pointer' }} gap="16px">
            <img src="/icons/keyboard_arrow_left.svg" alt="keyboard_arrow_left" />
            <Typography variant="h3" fontWeight="500" color="var(--colors-text)">
              Description
            </Typography>
          </FlexBox>
          <Description html={data.description} />
        </Box>
      ) : (
        <FlexBox flexDirection="column" gap="46px" pt="40px" pb="40px">
          <FlexBox flexDirection="column" alignItems="center">
            <Typography variant="h3" color="var(--colors-text)" fontWeight="400">
              6. Preview and Confirm Project
            </Typography>
            <Typography  color="gray.400" fontWeight="400">
              Get ready to launch your project
            </Typography>
          </FlexBox>
          <FlexBox flexDirection="column">
            {projectReview.map((item) => (
              <WrapLine key={item.head}>
                <WrapDescription>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    {item.head}
                  </Typography>
                  <Typography  className="content" color="#717D8A" fontWeight="400">
                    {item.subHead}
                  </Typography>
                </WrapDescription>
                <WrapValue>
                  <FlexBox flexDirection="column" gap="12px">
                    {item?.items?.map((i) => (
                      <BoxItem key={i?.label}>
                        <Typography  color="#717D8A" fontWeight="400">
                          {i?.label}
                        </Typography>
                        {i.label === 'Address' ? (
                          <FlexBox alignItems="center" justifyContent="center" gap="8px">
                            <Typography  color="var(--colors-text)" fontWeight="500">
                              {minimizeAddressSmartContract(i?.value)}
                            </Typography>
                            <img src="/icons/content_copy.svg" alt="content_copy" />
                          </FlexBox>
                        ) : item.head === 'Community' ? (
                          <a href={i?.value} target="_blank" rel="noreferrer">
                            <Typography
                              
                              color="var(--colors-text)"
                              fontWeight="500"
                              sx={{ textDecoration: 'underline' }}
                            >
                              {i?.value}
                            </Typography>
                          </a>
                        ) : (
                          <Typography  color="var(--colors-text)" fontWeight="500">
                            {i?.value}
                          </Typography>
                        )}
                      </BoxItem>
                    ))}
                    {item?.description && (
                      <Typography  color="#717D8A" fontWeight="400">
                        {item?.description}
                        <Button onClick={showDescription}>
                          <Typography  color="var(--colors-text)" fontWeight="400">
                            See all
                          </Typography>
                        </Button>
                      </Typography>
                    )}
                  </FlexBox>
                </WrapValue>
              </WrapLine>
            ))}
          </FlexBox>
          <FlexBox gap="24px">
            <WrapTag>
              <FlexBox flexDirection="column">
                <Typography color="var(--colors-text)" fontWeight="400">
                  Fee
                </Typography>
                <Typography  color="#717D8A" fontWeight="400">
                  All the fees you have to pay for create launchpad
                </Typography>
              </FlexBox>
              <FlexBox flexDirection="column" mt="32px" gap="8px">
                <BoxItem>
                  <Typography  color="#717D8A" fontWeight="400">
                    Pool create fee
                  </Typography>
                  <Typography  color="var(--colors-text)" fontWeight="500">
                    0.5 BNB
                  </Typography>
                </BoxItem>
                {data?.saleFee === '0' ? (
                  <BoxItem>
                    <Typography  color="#717D8A" fontWeight="400">
                      5% {data?.currency} raised only
                    </Typography>
                    <Typography  color="var(--colors-text)" fontWeight="500">
                      -- {data?.currency}
                    </Typography>
                  </BoxItem>
                ) : (
                  <>
                    <BoxItem>
                      <Typography  color="#717D8A" fontWeight="400">
                        2% {data?.currency} rasied
                      </Typography>
                      <Typography  color="var(--colors-text)" fontWeight="500">
                        -- {data?.currency}
                      </Typography>
                    </BoxItem>
                    <BoxItem>
                      <Typography  color="#717D8A" fontWeight="400">
                        2% {tokenContract?.symbol} sold
                      </Typography>
                      <Typography  color="var(--colors-text)" fontWeight="500">
                        {tokenForFee} {tokenContract?.symbol}
                      </Typography>
                    </BoxItem>
                  </>
                )}
              </FlexBox>
            </WrapTag>
            <WrapTag>
              <FlexBox flexDirection="column">
                <Typography color="var(--colors-text)" fontWeight="400">
                  Token for sale
                </Typography>
                <Typography  color="#717D8A" fontWeight="400">
                  Number of tokens for sale and add liquidity
                </Typography>
              </FlexBox>
              <FlexBox flexDirection="column" mt="32px" gap="8px">
                <BoxItem>
                  <Typography  color="#717D8A" fontWeight="400">
                    {tokenContract?.symbol} for sale
                  </Typography>
                  <Typography  color="var(--colors-text)" fontWeight="500">
                    {tokenForSale}
                  </Typography>
                </BoxItem>
                {data.listing === '1' && (
                  <>
                    <BoxItem>
                      <Typography  color="#717D8A" fontWeight="400">
                        {tokenContract?.symbol} for add liquidity
                      </Typography>
                      <Typography  color="var(--colors-text)" fontWeight="500">
                        {tokenForLiquidity}
                      </Typography>
                    </BoxItem>

                    <BoxItem>
                      <Typography  color="#717D8A" fontWeight="400">
                        {data?.currency} for add liquidity
                      </Typography>
                      <Typography  color="var(--colors-text)" fontWeight="500">
                        {data.liquidityPercentage}% of total raisied
                      </Typography>
                    </BoxItem>
                  </>
                )}
              </FlexBox>
            </WrapTag>
          </FlexBox>
          <FlexBox justifyContent="flex-end" gap="14px">
            <Back onClick={onBackStep}>
              <Typography  color="primary.main" fontWeight="600">
                Back
              </Typography>
            </Back>
            <Next onClick={() => handleCreateSale(data)} disabled={loadingSubmit || !isReady} sx={{}}>
              <Typography  color="#000000" fontWeight="600">
                {loadingSubmit ? 'Loading…' : 'Submit'}
              </Typography>
            </Next>
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
};

const FlexBox = styled(Box)`
  display: flex;
`;
const WrapLine = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 1px solid;
  border-color: #ccc;
`;
const WrapDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 328px;
  width: 100%;
`;
const WrapValue = styled(Box)`
  max-width: 617px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Next = styled(LoadingButton)`
  max-width: 200px;
  width: 100%;
  height: 45px;
  align-item: center;
  justify-content: center;
  display: flex;
  background-color: #ccc;
  border-radius: 4px;

  &.Mui-disabled {
    color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
const Back = styled(Button)`
  max-width: 200px;
  width: 100%;
  height: 45px;
  align-item: center;
  justify-content: center;
  display: flex;
  background-color: rgba(7, 224, 224, 0.15);
  border-radius: 4px;
`;
const BoxItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid;
  border-color: #ccc;
`;
const WrapTag = styled(Box)`
  border: 1px solid #373f47;
  border-radius: 4px;
  background: #0c1620;
  padding: 20px;
  width: 50%;
`;

export default Step06;
