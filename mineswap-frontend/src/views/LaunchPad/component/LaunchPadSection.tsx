// import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Pagination,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { SearchIcon } from '@pancakeswap/uikit'
import { getSaleList } from 'api/launchpad'
// import { getSaleList } from 'api/launchpad';
import Card from 'components/Card'
import CardLaunchPad from 'components/CardLaunchPad'
import NoDataView from 'components/NoDataView'
import SkeletonCard from 'components/SkeletonCard'
// import { useDebounce, useRefetchIncreasedInterval } from 'hooks';
import { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import dataCard from '../data'
import Title from './Title/Title'

const LaunchPadSection = ({ chainId }: any) => {
  const [page, setPage] = useState(1)
  const [params, setParams] = useState({
    page: 1,
    limit: 8,
    owner: '',
    keyword: '',
    sortBy: '-createdAt',
  })
  const [launchData, setLaunchData]: any = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (prop: any) => (event: any) => {
    setParams({ ...params, [prop]: event.target.value })
  }

  const searchKeyword = (event: any) => {
    setSearchQuery(event.target.value)
  }

  // const [, cancelSearch] = useDebounce(
  //   () => {
  //     setParams({ ...params, ['keyword']: searchQuery });
  //   },
  //   500,
  //   [searchQuery],
  // );

  const getLaunchData = useCallback(
    async (params: any) => {
      try {
        const launchData = await getSaleList(
          params.page,
          params.limit,
          '97',
          params.owner,
          params.keyword,
          params.sortBy,
        );
        setLaunchData(launchData);
      } catch (error) {
        console.log('error====>', error);
      }
    },
    [chainId],
  );

  // useRefetchIncreasedInterval(
  //   async () => {
  //     await getLaunchData(params);
  //   },
  //   0,
  //   1000,
  //   [chainId, params],
  // );
  useEffect(() => {
    getLaunchData(params);
  }, [params, chainId, getLaunchData]);

  const handleChangePagidation = (event: React.ChangeEvent<unknown>, value: number) => {
    setParams({ ...params, page: value })
    setPage(value)
  }

  const settings = {
    arrows: false,
    speed: 500,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
  }

  return (
    <Box
      sx={{
        marginTop: { xs: '30px', md: '50px' },
        marginBottom: { xs: '30px', md: '70px' },
      }}
    >
      <Container maxWidth="xl">
        <Wrapper>
          <Section>
            <Title title="Current Projects" isCurrent currentMessage="Many ideas waiting for you to reach" />
            <TextField
              variant="standard"
              // onChange={searchKeyword}
              placeholder="Search by project name, token contract address or token symbol"
              sx={{
                '.MuiInputBase-root': {
                  padding: '12px',
                },

                input: {
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '180%',
                  color: 'var(--colors-text)',

                  '&:placeholder': {
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '180%',
                    color: 'var(--colors-text)',
                  },
                },

                '.MuiInput-root:before': {
                  borderBottom: '2px solid var(--colors-text)',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <Flex alignItems="center" justifyContent="space-between">
              <FormControl>
                <SelectCustom
                  value=""
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        '.MuiList-root': {
                          padding: '0',
                          border: '1px solid',
                          borderColor: 'var(--colors-text)',
                          overflow: 'hidden',
                          boxShadow: '0px 4px 11px #000000',
                          color: '#000',
                        },

                        '& .MuiMenuItem-root': {
                          padding: 1,
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>New launch </MenuItem>
                  <MenuItem value={20}>Verified</MenuItem>
                  <MenuItem value={30}>Loved by Bionswap</MenuItem>
                </SelectCustom>
              </FormControl>
              <Box>
                <Fillter>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    Fillter
                  </Typography>
                  <img src="/icons/launchpad/filter_list.svg" alt="filter_list" color="var(--colors-text)" />
                </Fillter>
              </Box>
            </Flex> */}
            <Flex
              flexWrap="wrap"
              sx={{
                gap: { xs: '20px', lg: '40px' },
              }}
            >
              {launchData ? (
                launchData.data ? (
                  launchData?.data?.map((item: any, index: number) => (
                    <WrapItem key={item?.saleAddress}>
                      <CardLaunchPad data={item} index={index} />
                    </WrapItem>
                  ))
                ) : (
                  <Box width="100%" height="40vh">
                    <NoDataView />
                  </Box>
                )
              ) : (
                <SkeletonCard />
              )}
            </Flex>
          </Section>
          <Flex alignItems="center" justifyContent="center">
            <Pagination count={launchData?.totalPages} page={page} onChange={handleChangePagidation} color="primary" />
          </Flex>
        </Wrapper>
      </Container>
    </Box>
  )
}

const Wrapper = styled(Box)`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 62px;
`
const Flex = styled(Box)`
  display: flex;
`
const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const WrapItem = styled(Box)`
  width: calc(100% / 4 - 30px);

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: calc(100% / 3 - 30px);
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: calc(100% / 3 - 14px);
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: calc(100% / 2 - 10px);
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
  }
`
const WrapSlideFeatureProject = styled(Box)`
  margin-left: -15px;
  margin-right: -15px;

  .slick-track {
    margin: 0px;
    display: flex;
  }
`
const Items = styled(Box)`
  padding-left: 15px;
  padding-right: 15px;
  width: 423px !important;

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100% !important;
  }
`
const FormControlLabelCustom = styled(FormControlLabel)`
  margin: 0;

  .MuiRadio-root {
    display: none;
  }

  .MuiTypography-root {
    padding: 6px 25px;
    color: #ccc;
    background-color: transparent;
    border-radius: 8px;
  }

  .Mui-checked + .MuiTypography-root {
    background: rgba(7, 224, 224, 0.15);
    font-weight: 600;
    color: #07e0e0;
  }
`
const Fillter = styled(Button)`
  width: 118px;
  height: 46px;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
const SelectCustom = styled(Select)`
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;

  .MuiSelect-select {
    font-family: 'Poppins', sans-serif;
    padding: 9.5px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #ccc;
  }

  fieldset {
    display: none;
  }
`

export default LaunchPadSection
