import {
  Box,
  Container,
  Typography,
  linearProgressClasses,
  LinearProgress,
  styled,
  Button,
  Tabs,
  Tab,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { useRouter } from 'next/router'
import { getSaleDetail } from 'api/launchpad'
import { useEffect, useState } from 'react'
import { isAddress } from 'utils/validate'
import { useTotalSupply } from 'hooks/useTotalSupply'
import { formatEther, formatUnits } from 'ethers/lib/utils'
import CountDownTime from './CountDownTime'
import CountDownUnlockLP from './CountDownUnlockLP'
import { withCatch } from 'utils/error'
import ListContributorModal from 'components/ListContributorModal'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F1F1F1',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1C7744',
  },
}))

const saleTypes = [
  {
    value: false,
    label: 'Public',
  },
  {
    value: true,
    label: 'Whitelist',
  },
]

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const MyProjectDetail = () => {
  const [unlockLPLoading, setUnlockLPLoading] = useState(false)
  const [openListModal, setOpenListModal] = useState(false)
  const [data, setData] = useState<any>(null)
  const quoteERCToken = undefined
  const { account, chainId } = useActiveWeb3React()
  const router = useRouter()
  const { slug } = router.query
  const token = {
    chainId: 97,
    decimals: 18,
    symbol: 'LOTO',
    name: 'LOTO',
    isNative: false,
    isToken: true,
    address: '0x500A19D8A31760ba7969dF0F6e63C5abBB88f776',
  }

  const [decimals, setDecimals] = useState(18)
  const hardCap = formatUnits(data?.hardCap || 0, decimals)
  const lockLPDuration = Math.floor(data?.lockLPDuration / (3600 * 24))
  const price = formatUnits(data?.price || 0, decimals)
  const listingPrice = formatUnits(data?.listingPrice || 0, decimals)
  const minBuy = formatUnits(data?.minPurchase || 0, decimals)
  const maxBuy = formatUnits(data?.maxPurchase || 0, decimals)

  const isWhitelistEnabled = false

  const purchaserList = []

  const tgeDate = NaN

  const withdrawableTokens = undefined

  const currentCap = 0.0

  const totalSupply = '1,000,000,000'

  const tokensForPresale = Number(hardCap) / Number(price)
  const tokensForLP = (Number(hardCap) * (data?.lpPercent / 100)) / Number(listingPrice)
  const quoteNativeToken = {
    chainId: 97,
    decimals: 18,
    symbol: 'BNB',
    name: 'Binance Coin',
    isNative: true,
    isToken: false,
  }
  const quoteToken = data?.isQuoteETH ? quoteNativeToken : quoteERCToken
  const unit = quoteToken?.symbol

  const currentTime = +new Date()
  const startTime = data?.startTime * 1000
  const endTime = data?.endTime * 1000
  const linearProgress = 0.0
  const [value, setValue] = useState(0)

  const handleListModal = () => {
    setOpenListModal(!openListModal)
  }

  useEffect(() => {
    const handleCheckDecimal = () => {
      if (data?.isQuoteETH) {
        setDecimals(18)
      } else {
        setDecimals(quoteERCToken?.decimals || 9)
      }
    }

    handleCheckDecimal()
  }, [quoteERCToken, data])

  const fetchSaleDetail = async (saleAddress?: any) => {
    if (!isAddress(saleAddress)) return

    try {
      const res = await getSaleDetail(saleAddress)
      setData(res)
    } catch (error) {
      console.log('error==>', error)
    }
  }

  useEffect(() => {
    fetchSaleDetail(slug)
  }, [slug])

  const contributorData = [
    {
      label: 'Contributors',
      value: `${purchaserList.length}`,
    },
    {
      label: 'Raised',
      value: `${currentCap} ${unit}`,
    },
    {
      label: 'Days left',
      value: 0,
    },
  ]

  const dataConfig = [
    {
      title: 'Token Sale',
      tabs: [
        {
          label: 'Token',
          items: [
            {
              label: 'Name',
              value: token?.name,
            },
            {
              label: 'Symbol',
              value: token?.symbol,
            },
            {
              label: 'Token Address',
              value: token?.address,
            },
            {
              label: 'Total Supply',
              value: `${totalSupply} ${token?.symbol}`,
            },
            {
              label: 'Tokens For Presale',
              value: `${tokensForPresale.toLocaleString()} ${token?.symbol}`,
            },
            {
              label: 'Tokens For Liquidity',
              value: `${tokensForLP.toLocaleString()} ${token?.symbol}`,
            },
            {
              label: 'Standard',
              value: 'BEP20',
            },
          ],
        },
        {
          label: 'Presale',
          items: [
            {
              label: 'Price per token',
              value: `${price} ${unit}`,
            },
            {
              label: 'Minimum buy',
              value: `${minBuy} ${unit}`,
            },
            {
              label: 'Maximum buy',
              value: `${maxBuy} ${unit}`,
            },
            {
              label: 'Network',
              value: 'Binance Smart Chain',
            },
            {
              label: 'Start time',
              value: `${new Date(startTime).toUTCString()}`,
            },
            {
              label: 'End time',
              value: `${new Date(endTime).toUTCString()}`,
            },
          ],
        },
      ],
    },
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // const handleFinalize = async () => {
  //   if (!presaleContract || !account) return;

  //   if (data?.isQuoteETH) {
  //     const tx = await presaleContract.finalizeInETH();
  //     await tx.wait();
  //   } else {
  //     const tx = await presaleContract.finalize();
  //     await tx.wait();
  //   }
  // };

  // const handleCancel = async () => {
  //   if (!presaleContract || !account) return;
  //   const tx = await presaleContract.cancelSale();
  //   await tx.wait();
  // };

  // const handleChangeSaleMode = async (isWhitelistEnabled: boolean) => {
  //   if (!presaleContract || !account) return;

  //   const tx = await presaleContract.setWhitelistEnabled(isWhitelistEnabled);
  //   await tx.wait();
  // };

  // const handleUnlockLP = async () => {
  //   try {
  //     if (!bionLockContract || !account) return;
  //     setUnlockLPLoading(true);
  //     const { error, result: tx } = await withCatch<any>(bionLockContract?.unlock(lockId));
  //     const receipt = await tx.wait();
  //     setUnlockLPLoading(false);
  //   } catch (error: any) {
  //     setUnlockLPLoading(false);
  //     console.log('error===>', error);
  //   }
  // };

  // const handleSelectWhitelist = () => {
  //   handleChangeSaleMode(!isWhitelistEnabled);
  // };

  return (
    <Section>
      <HeadArea>
        <WrapContain>
          <FlexBox gap="10px" alignItems="center">
            <Typography color="var(--colors-textcard)" fontWeight="700">
              {data?.title}
            </Typography>
            <Status
              sx={{
                backgroundColor: 'gray.500',
                ...(currentTime < startTime && {
                  backgroundColor: 'gray.800',
                }),
                ...(currentTime < endTime && {
                  backgroundColor: '#08878E',
                }),
              }}
            >
              <Typography
                sx={{
                  color: 'background.paper',
                  fontWeight: '500',
                }}
              >
                {currentTime < startTime ? 'Coming Soon' : currentTime < endTime ? 'Sale Open' : 'Sale Closed'}
              </Typography>
            </Status>
          </FlexBox>
          <Typography color="gray.400" fontWeight="400">
            The next level decentralized
          </Typography>
          {/* <FlexBox gap="16px" mt="24px">
            <ViewProject>
              <img src="/icons/symbols/remove_red_eye.svg" alt="remove_red_eye" />
              <Typography variant="body3Poppins" color="primary.main" fontWeight="600">
                View project
              </Typography>
            </ViewProject>
            <EditInfo>
              <img src="/icons/symbols/edit.svg" alt="edit" />
              <Typography variant="body3Poppins" color="primary.main" fontWeight="600">
                Edit information
              </Typography>
            </EditInfo>
          </FlexBox> */}
        </WrapContain>
      </HeadArea>
      <BodyArea pt="50px" pb="50px">
        <Box mb="24px">
          <Typography fontWeight="700">Sale Progress</Typography>
        </Box>
        <FlexBox gap="44px">
          <InforBox>
            <ProcessBox>
              <FlexBox gap="30px">
                {contributorData.map((item, index) => (
                  <>
                    {item.label === 'Days left' ? (
                      <CountDownTime endTime={endTime} />
                    ) : (
                      <FlexBox flexDirection="column" gap="5px">
                        <Typography fontWeight="400">{item.label}</Typography>
                        <Typography fontWeight="500">{item.value}</Typography>
                      </FlexBox>
                    )}
                    {index < contributorData.length - 1 && <VerticalLine />}
                  </>
                ))}
              </FlexBox>
              <HorizonLine />
              <FlexBox flexDirection="column" gap="4px">
                <BorderLinearProgress variant="determinate" value={linearProgress} sx={{ width: '100%' }} />
                <FlexBox justifyContent="space-between">
                  <Typography color="primary.main" fontWeight="400">
                    {linearProgress}%
                  </Typography>
                  <Typography fontWeight="400">
                    {currentCap} {unit} /{' '}
                    <Typography color="#0FC66D" fontWeight="400">
                      {hardCap} {unit}
                    </Typography>
                  </Typography>
                </FlexBox>
              </FlexBox>
            </ProcessBox>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  {dataConfig.map((item, index) => (
                    <Tab key={item.title} label={item.title} {...a11yProps(index)} />
                  ))}
                </Tabs>
              </Box>
              {dataConfig.map((item, index) => (
                <TabPanelCustom key={item.title + index} value={value} index={index}>
                  {item.tabs.map((i, j) => (
                    <>
                      <Typography color="gray.300" fontWeight="500">
                        {i.label}
                      </Typography>
                      {i.items.map((a, b) => (
                        <FlexBox key={a.label} justifyContent="space-between">
                          <Typography color="#717D8A" fontWeight="400">
                            {a.label}
                          </Typography>
                          <Typography fontWeight="500">{a.value}</Typography>
                        </FlexBox>
                      ))}
                    </>
                  ))}
                </TabPanelCustom>
              ))}
            </Box>
          </InforBox>
          <ActiveBox>
            <SaleBox gap="18px">
              <Typography color="gray.50" fontWeight="500">
                Sale action
              </Typography>
              <FlexBox gap="15px" flexDirection="column">
                <ButtonInLine
                  sx={{ backgroundColor: 'rgba(160, 236, 138, 0.15)' }}
                  // onClick={handleFinalize}
                  // disabled={saleStatus !== 0 || currentTime < endTime}
                  disabled={currentTime < endTime}
                >
                  <Typography color="#000000" fontWeight="600">
                    Complete and Release token
                  </Typography>
                </ButtonInLine>
                {/* <ButtonInLine sx={{ backgroundColor: 'gray.200' }} onClick={handleCancel} disabled={saleStatus !== 0 || currentTime < endTime}> */}
                <ButtonInLine sx={{ backgroundColor: 'rgba(160, 236, 138, 0.15)' }} disabled={currentTime < endTime}>
                  <Typography color="#000000" fontWeight="600">
                    Cancel
                  </Typography>
                </ButtonInLine>
                <ButtonOutLine onClick={handleListModal}>
                  <Typography color="primary.main" fontWeight="600">
                    Contributors list
                  </Typography>
                </ButtonOutLine>
              </FlexBox>
            </SaleBox>
            <SaleBox gap="18px">
              <Typography color="gray.50" fontWeight="500">
                Sale Mode
              </Typography>
              <FormControl fullWidth>
                {/* <RadioGroup name="radio-buttons-group" value={isWhitelistEnabled} onChange={handleSelectWhitelist}> */}
                <RadioGroup name="radio-buttons-group" value={isWhitelistEnabled}>
                  {saleTypes?.map((item) => (
                    <FormControlLabel
                      key={item.label}
                      value={item.value}
                      label={
                        <Typography
                          color={isWhitelistEnabled === item.value ? 'gray.300' : 'gray.700'}
                          fontWeight="400"
                        >
                          {item.label}
                        </Typography>
                      }
                      control={
                        <Radio
                          sx={{
                            color: 'gray.700',
                            '&.Mui-checked': {
                              color: 'blue.500',
                            },
                          }}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </SaleBox>
            {data?.isAutoListing && (
              <SaleBox gap="18px">
                <Typography color="gray.50" fontWeight="500">
                  Liquidity
                </Typography>
                {tgeDate ? (
                  <FlexBox gap="15px" flexDirection="column">
                    <CountDownUnlockLP endTime={tgeDate} />
                    {currentTime >= tgeDate && withdrawableTokens === 0 ? (
                      <Typography color="primary.main" fontWeight="600" textAlign="center">
                        Project has unlocked
                      </Typography>
                    ) : (
                      // <ButtonOutLine disabled={currentTime <= tgeDate || unlockLPLoading} onClick={handleUnlockLP}>
                      <ButtonOutLine disabled={currentTime <= tgeDate || unlockLPLoading}>
                        <Typography color="primary.main" fontWeight="600">
                          {unlockLPLoading ? 'Loading.....' : 'Unlock LP'}
                        </Typography>
                      </ButtonOutLine>
                    )}
                  </FlexBox>
                ) : (
                  <Box>
                    <Typography>
                      Your liquidity will be locked {lockLPDuration} {lockLPDuration > 1 ? 'days' : 'day'} after sale
                      finalize
                    </Typography>
                  </Box>
                )}
              </SaleBox>
            )}
          </ActiveBox>
        </FlexBox>
      </BodyArea>
      <ListContributorModal
        open={openListModal}
        onDismiss={handleListModal}
        data={purchaserList}
        unit={unit}
        quoteERCToken={quoteERCToken}
      />
    </Section>
  )
}

const FlexBox = styled(Box)`
  display: flex;
`
const Section = styled(Box)`
  max-width: 1569px;
  margin: auto;
  padding: 30px 0px;
`
const HeadArea = styled(Box)`
  height: 285px;
  background-image: url('/images/Group.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`
const WrapContain = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 60px;
  padding-right: 60px;
`
const Status = styled(Box)`
  padding: 4px 19px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const BodyArea = styled(Box)`
  background-color: var(--colors-bgrcard);
  min-height: 100vh;
  height: auto;
  padding-left: 60px;
  padding-right: 60px;
`
const InforBox = styled(Box)`
  width: 65%;
`
const ActiveBox = styled(Box)`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const ProcessBox = styled(Box)`
  border-radius: 4px;
  padding: 16px 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--colors-bgrcard);
  border: 1px solid #014959;
`
const VerticalLine = styled(Box)`
  width: 1px;
  background-color: #ccc;
`
const HorizonLine = styled(Box)`
  width: 100%;
  height: 1px;
  background-color: var(--colors-bgrcard);
  border: 1px solid #014959;
`
const TabPanelCustom = styled(TabPanel)`
  > .MuiBox-root {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`
const SaleBox = styled(Box)`
  padding: 16px;
  background-color: var(--colors-bgrcard);
  border: 1px solid #014959;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ButtonInLine = styled(Button)`
  border: 1px solid;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.Mui-disabled {
    box-shadow: none;
    background-color: rgba(160, 236, 138, 0.15);

    span {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`
const ButtonOutLine = styled(Button)`
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.Mui-disabled {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.12);

    span {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`

export default MyProjectDetail
