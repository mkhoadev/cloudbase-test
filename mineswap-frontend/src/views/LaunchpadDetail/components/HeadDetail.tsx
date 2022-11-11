import * as React from 'react';
import { Box, Link, Breadcrumbs, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DEFAULT_TOKEN_LIST from '../../../config/constants/tokenLists/pancake-default.tokenlist.json'
interface HeadDetailProps {
  avatar: string;
  name: string;
  type: any;
  endTime: number;
  startTime: number;
  unit?: string;
  isWhitelistEnabled?: boolean;
}

const HeadDetail: React.FC<HeadDetailProps> = ({
  avatar,
  name,
  type,
  endTime,
  startTime,
  unit,
  isWhitelistEnabled,
}) => {
  const currentTime = +new Date();
  const imgLogo = unit==='ETHW' ?  DEFAULT_TOKEN_LIST.tokens.filter((f) => f.symbol === 'WETHW') : DEFAULT_TOKEN_LIST.tokens.filter((f) => f.symbol === unit)
  return (
    <FlexBox alignItems="center" marginBottom="32px" flexWrap="wrap">
      <Box marginRight="24px">
        <Logo>
          <Box component="img" src={avatar} alt={name} />
        </Logo>
      </Box>
      <FlexBox flex="1" flexDirection="column">
        <FlexBox
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'start', md: 'center' },
            gap: { xs: '5px', md: '20px' },
          }}
        >
          <Typography  color="var(--colors-text)" fontSize={36} fontWeight="700">
            {name}
          </Typography>
          <FlexBox gap="15px">
            <FlexBox gap="8px" alignItems="center">
              <Box component="img" src={imgLogo.length > 0 ? imgLogo[0].logoURI : ''} width="24px" height="24px" alt={unit} />
              <Typography fontWeight="600" fontSize={18} color="var(--colors-text)">
                {unit}
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Typography color="#9B9B9B" fontSize={15} fontWeight="400">
          {type}
        </Typography>
      </FlexBox>
      <Box display="flex" alignItems="center" gap="15px">
        <Status
          sx={{
            backgroundColor: 'rgb(36, 45, 53)',
            ...(currentTime > startTime && {
              backgroundColor: '#08878E',
            }),
            ...(currentTime > endTime && {
              backgroundColor: 'gray.500',
            }),
          }}
        >
          <Typography color="white" fontSize={15} fontWeight="500">
            {currentTime < startTime ? 'Coming Soon' : currentTime < endTime ? 'Sale Open' : 'Sale Closed'}
          </Typography>
        </Status>
        {isWhitelistEnabled && (
          <Status
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: 'rgb(42, 200, 159)',
              padding: '2px 10px 4px !important',
            }}
          >
            <Typography  color="success.main" fontSize={15} fontWeight="500">
              Whilisted
            </Typography>
          </Status>
        )}
      </Box>
    </FlexBox>
  );
};

const FlexBox = styled(Box)`
  display: flex;
`;
const Status = styled(Box)`
  border-radius: 4px;
  padding: 3px 10px 5px;
`;
const Logo = styled(Box)`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #0c1620;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export default HeadDetail;
