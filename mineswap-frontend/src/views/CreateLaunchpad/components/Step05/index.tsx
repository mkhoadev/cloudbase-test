import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  styled,
  FormControl,
  OutlinedInput,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@mui/material';
import { setPresaleForm } from 'state/presale/action';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import HeaderSection from '../HeaderSection';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Step05 = ({ data, setData, onNextStep, onBackStep }: any) => {
  const handleChange = (prop: any) => (event: any) => {
    setData(setPresaleForm({ [prop]: event }));
  };

  return (
    <>
      <HeaderSection data={data} activeStep={4} onBackStep={onBackStep} onNextStep={onNextStep} />
      <FlexBox flexDirection="column" gap="46px" pt="40px" pb="40px">
        <FlexBox flexDirection="column" alignItems="center">
          <Typography variant="h3" color="var(--colors-text)" fontWeight="400">
            5. Introduce your project
          </Typography>
          <Typography  color="gray.400" fontWeight="400">
            Tell people why they should be excited about your project. Get specific but be clear and be brief.
          </Typography>
        </FlexBox>
        <FlexBox flexDirection="column">
          <WrapLine>
            <WrapDescription>
              <Typography color="var(--colors-text)" fontWeight="400">
                Project description
              </Typography>
              <Typography  className="content" color="#717D8A" fontWeight="400">
                Describe what you`&lsquo;`re raising funds to do, why you care about it, how you plan to make it happen,
                and who you are. Your description should tell backers everything they need to know. Description must be
                from 128 - 512 characters long. If possible, include images to show them what your project is all about
                and what rewards look like. Read more about telling your story
              </Typography>
            </WrapDescription>
            <WrapValue>
              <ReactQuill value={data.description} onChange={handleChange('description')} />
            </WrapValue>
          </WrapLine>
        </FlexBox>
        <FlexBox justifyContent="flex-end" gap="14px">
          <Back onClick={onBackStep}>
            <Typography  color="primary.main" fontWeight="600">
              Back
            </Typography>
          </Back>
          <Next onClick={onNextStep}>
            <Typography  color="#000000" fontWeight="600">
              Next
            </Typography>
          </Next>
        </FlexBox>
      </FlexBox>
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
  flex-direction: column;
  gap: 50px;
  border-color: #ccc;
`;
const WrapDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
`;
const WrapValue = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fefcfc;
`;
const Next = styled(Button)`
  max-width: 200px;
  width: 100%;
  height: 45px;
  align-item: center;
  justify-content: center;
  display: flex;
  background-color: #ccc;
  border-radius: 4px;
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

export default Step05;
