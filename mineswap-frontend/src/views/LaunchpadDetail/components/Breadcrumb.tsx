import * as React from 'react';
import { Box, Breadcrumbs, Typography, styled } from '@mui/material';
import Link from 'next/link';

function handleClick(event: any) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface BreadcrumbProps {
  name: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ name }) => {
  return (
    <Box marginBottom="17px">
      <FlexBox gap="16px" alignItems="center">
        <Box sx={{ cursor: 'pointer' }}>
          <Link href="/launchpad">
            <Typography fontSize={16} color="#9B9B9B" fontWeight="400">
              Project
            </Typography>
          </Link>
        </Box>
        <img src="/icons/launchpad/keyboard_arrow_right.svg" alt="" />
        <Typography fontSize={18} color="var(--colors-text)" fontWeight="600">
          {name}
        </Typography>
      </FlexBox>
    </Box>
  );
};

const FlexBox = styled(Box)`
  display: flex;
`;

export default Breadcrumb;
