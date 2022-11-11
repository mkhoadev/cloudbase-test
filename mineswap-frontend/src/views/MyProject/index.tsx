import React, { useEffect, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import Page from 'components/Page'
import ProjectCard from 'components/ProjectCard'
import { getSaleList } from 'api/launchpad'
import SkeletonCard from 'components/SkeletonCard'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const MyProject = () => {
  const { account, chainId } = useActiveWeb3React()
  const [launchData, setLaunchData] = useState<any>(null)
  const [params, setParams] = useState({
    page: 1,
    limit: 12,
    chainId: '97',
    owner: account,
    keyword: '',
    sortBy: null,
  })

  const getLaunchData = async () => {
    try {
      const launchData = await getSaleList(
        params.page,
        params.limit,
        params.chainId.toString(),
        params.owner || '',
        params.keyword,
        params.sortBy,
      )
      setLaunchData(launchData)
    } catch (error) {
      console.log('error====>', error)
    }
  }

  useEffect(() => {
    getLaunchData()
  }, [params])

  return (
    <Page>
      <Wrapper>
        <Box mb="50px">
          <Typography color="var(--colors-text)">My Projects</Typography>
        </Box>

        <FlexBox gap="30px" flexWrap="wrap">
          {launchData && launchData.data ? (
            launchData?.data?.map((item: any) => (
              <Item key={item.title}>
                <ProjectCard data={item} />
              </Item>
            ))
          ) : (
            <SkeletonCard />
          )}
        </FlexBox>
      </Wrapper>
    </Page>
  )
}

const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1569px;
  padding: 30px 40px;
  margin: auto;
`
const Item = styled(Box)`
  max-width: 423px;
`
const FlexBox = styled(Box)`
  display: flex;
`

export default MyProject
