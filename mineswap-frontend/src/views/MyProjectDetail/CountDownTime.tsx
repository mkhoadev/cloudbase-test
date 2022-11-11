import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

const CountDownTime = ({ endTime }: any) => {
  const calculateTimeLeft = () => {
    let difference;
    difference = +new Date(Number(endTime)) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / 1000 / 60 / 60 / 24),
        hours: Math.floor((difference / 1000 / 60 / 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <FlexBox flexDirection="column" textAlign="left" gap="10px">
      <Typography color="gray.400" fontWeight="400">
        Days left
      </Typography>
      <WrapCountDownTime>
        <BoxItem>
          <Typography color="gray.400" fontWeight="500">
            {timeLeft?.days || 0}
          </Typography>
          <Typography color="gray.400" fontWeight="400">
            Days
          </Typography>
        </BoxItem>
        <Typography  color="gray.400" fontWeight="700">
          :
        </Typography>
        <BoxItem>
          <Typography   fontWeight="700">
            {timeLeft?.hours || 0}
          </Typography>
          <Typography  color="gray.400" fontWeight="400">
            Hours
          </Typography>
        </BoxItem>
        <Typography  color="gray.400" fontWeight="700">
          :
        </Typography>
        <BoxItem>
          <Typography   fontWeight="700">
            {timeLeft?.minutes || 0}
          </Typography>
          <Typography  color="gray.400" fontWeight="400">
            Minutes
          </Typography>
        </BoxItem>
        <Typography  color="gray.400" fontWeight="700">
          :
        </Typography>
        <BoxItem>
          <Typography  fontWeight="700">
            {timeLeft?.seconds || 0}
          </Typography>
          <Typography  color="gray.400" fontWeight="400">
            Seconds
          </Typography>
        </BoxItem>
      </WrapCountDownTime>
    </FlexBox>
  );
};

const FlexBox = styled(Box)`
  display: flex;
`;
const WrapCountDownTime = styled(Box)`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
const BoxItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52px;
  
  border-radius: 6px;
`;

export default CountDownTime;
