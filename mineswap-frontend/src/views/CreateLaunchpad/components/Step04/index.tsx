import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  styled,
  Typography,
} from '@mui/material';
import { useToast } from '@pancakeswap/uikit';
import { Toast } from '@pancakeswap/uikit/src/components/Toast';
import tryParseAmount from '@pancakeswap/utils/tryParseAmount';
import { ethers } from 'ethers';
import { useCurrency } from 'hooks/Tokens';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback';
import Joi from 'joi';
import { useEffect, useRef, useState } from 'react';
import { setPresaleForm } from 'state/presale/action';
import { PreSaleState } from 'state/presale/reducer';
import { useCurrencyBalance } from 'state/wallet/hooks';
import { Currency } from '../../../../../packages/swap-sdk/src/entities';
import HeaderSection from '../HeaderSection';

const listingOpts = [
  {
    value: '0',
    label: 'Manual listing',
    description: 'You can list token on other Dex with your own will',
  },
  {
    value: '1',
    label: 'Auto listing',
    description:
      'We will take a part of your raised fund to automatively add liquidity. This process will be done after you complete pre-sale.',
  },
];

const dexs = [
  {
    value: '0',
    label: 'PancakeSwap',
  },
];

const Step04 = ({ data, setData, onNextStep, onBackStep }: any) => {
  const { chainId, account } = useActiveWeb3React();
  // const presaleFactoryContract = usePresaleFactoryContract();
  const [pending, setPending] = useState(false);

  const tokenFeePercent = data.saleFee === '1' ? 2 : 0;
  const tokenForSale = Number(data.maxGoal) / Number(data.tokenPrice) || 0;
  const tokenForLiquidity =
    data.listing === '0'
      ? 0
      : (Number(data.liquidityPercentage) * Number(data.maxGoal)) / Number(data.listingPrice) || 0;
  const tokenForFee = (Number(data.maxGoal) * Number(tokenFeePercent)) / 100 / Number(data.tokenPrice);
  const tokenInTotal = tokenForSale + tokenForLiquidity + tokenForFee;

  // const parsedTotalTokenRequired = tryParseAmount(tokenInTotal.toString(), token as Currency);
  // const [approvalState, approveCallback] = useApproveCallback(
  //   parsedTotalTokenRequired,
  //   presaleFactoryContract?.address,
  // );
  const inputCurrency = useCurrency('ETHW')
  const approvalState = 3;
  // const presaleContract = usePresaleContract(data?.saleAddress);
  const token = data?.token //useToken(data?.token);
  // const quoteToken = useToken(USDT_ADDRESS[chainId]);
  const balance = useCurrencyBalance(account ?? undefined, inputCurrency ?? undefined)?.toSignificant(6) 
  const [errors, setErrors] = useState([]);
  const isTyped = useRef(false);

  const parseErrorMessage = (key: string) => {
    let message = '';
    errors?.map((item: any, index) => {
      if (item?.context?.key === key) {
        message = item?.message;
      }
    });
    return message;
  };

  const validate = async () => {
    try {
      const schemaStep04 = Joi.object({
        listing: Joi.number().integer().min(0).max(1).required().label('Listings options'),
        dex: Joi.required().label('Dex'),
        listingPrice: Joi.number().min(0.000001).required().label('Listing price'),
        liquidityPercentage: Joi.number().min(50).max(100).required().label('Liquidity percentage'),
        lockupTime: Joi.number().min(1).required().label('Lockup time'),
      });

      if (data.listing === '1') {
        const value = await schemaStep04.validateAsync(
          {
            listing: data.listing,
            dex: data.dex,
            listingPrice: data.listingPrice,
            liquidityPercentage: data.liquidityPercentage,
            lockupTime: data.lockupTime,
          },
          { abortEarly: false },
        );
      }

      setErrors([]);
      return true;
    } catch (error: any) {
      setErrors(error?.details || []);
      return false;
    }
  };

  useEffect(() => {
    if (isTyped.current) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleApprove = async () => {
    try {
      setPending(true);
      const balanceValidation = handleCheckBalanceToken();
      if (!balanceValidation) {
        setPending(false);
        return false;
      }
      // const approve = await approveCallback();
      setPending(false);
    } catch (error) {
      setPending(false);
    }
  };
  const { toastSuccess, toastError, toastWarning } = useToast()
  const handleCheckBalanceToken = () => {
    if (Number(balance) < tokenInTotal) {
      toastWarning(`Not enough balance in your wallet. Need ${tokenInTotal} ${token?.symbol} to create launchpad. (Your balance: ${balance} ${token?.symbol})`)
      return false;
    }
    return true;
  };

  const handleChange = (prop: any) => (event: any) => {
    setData(setPresaleForm({ [prop]: event.target.value }));
    if (!isTyped.current) {
      isTyped.current = true;
    }
  };

  useEffect(() => {
    switch (data.listing) {
      case '0': {
        setData(
          setPresaleForm({
            isAutoListing: false,
            router: ethers.constants.AddressZero,
            listingPrice: '1',
            liquidityPercentage: '0',
            lockupTime: 0,
          }),
        );
        break;
      }
      case '1': {
        setData(setPresaleForm({ isAutoListing: true }));
        break;
      }
    }
  }, [data.listing, setData]);

  // useEffect(() => {
  //   switch (data.dex) {
  //     default: {
  //       setData(setPresaleForm({ router: ROUTER_ADDRESS[chainId] }));
  //       break;
  //     }
  //   }
  // }, [chainId, data.dex, setData]);

  const handleNextStep = async () => {
    const isValid = await validate();

    if (isValid) {
      onNextStep();
    }
  };

  return (
    <>
      <HeaderSection
        data={data}
        activeStep={3}
        onBackStep={onBackStep}
        onNextStep={handleNextStep}
        approvalState={approvalState}
        handleApprove={handleApprove}
        pendingStep4={pending}
      />
      <FlexBox flexDirection="column" gap="46px" pt="40px" pb="40px">
        <FlexBox flexDirection="column" alignItems="center">
          <Typography variant="h3" color="var(--colors-text)" fontWeight="400">
            4. Add Liquidity
          </Typography>
          <Typography  color="gray.400" fontWeight="400">
            You need to add liquidity on a Dex to list that token
          </Typography>
        </FlexBox>
        <FlexBox flexDirection="column">
          <WrapLine>
            <WrapDescription>
              <Typography color="var(--colors-text)" fontWeight="400">
                Listings options
              </Typography>
              <Typography  className="content" color="#717D8A" fontWeight="400">
                You can choose to list your token by yourself or we can help you.
              </Typography>
            </WrapDescription>
            <WrapValue>
              <FormControl fullWidth>
                <RadioGroup
                  value={data.listing}
                  onChange={handleChange('listing')}
                  name="radio-buttons-group"
                  sx={{ gap: '25px' }}
                >
                  {listingOpts?.map((item) => (
                    <BoxRadioButtonItem key={item.label}>
                      <FormControlLabel
                        value={item.value}
                        label={
                          <>
                            <Typography
                              
                              color={data.listing === item.value ? 'gray.300' : 'gray.700'}
                              fontWeight="400"
                            >
                              {item.label}
                            </Typography>
                          </>
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
                      <Typography
                        
                        color={data.listing === item.value ? 'gray.300' : 'gray.700'}
                        fontWeight="400"
                      >
                        {item.description}
                      </Typography>
                    </BoxRadioButtonItem>
                  ))}
                  <Typography  color="red" fontWeight="400">
                    {parseErrorMessage('listing')}
                  </Typography>
                </RadioGroup>
              </FormControl>
            </WrapValue>
          </WrapLine>
          {data.listing === '1' && (
            <>
              <WrapLine>
                <WrapDescription>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    Which Dex will your token be listed on ?
                  </Typography>
                  <Typography  className="content" color="#717D8A" fontWeight="400">
                    You need to add liquidity on a Dex to list that token
                  </Typography>
                </WrapDescription>
                <WrapValue>
                  <FormControl fullWidth>
                    <Typography component="label"  color="gray.300" fontWeight="500">
                      Dex <RequireSymbol component="span">*</RequireSymbol>
                    </Typography>
                    <SelectCustom
                      value={data.dex}
                      onChange={handleChange('dex')}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      {dexs?.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </SelectCustom>
                    <Typography  color="red" fontWeight="400">
                      {parseErrorMessage('dex')}
                    </Typography>
                  </FormControl>
                </WrapValue>
              </WrapLine>
              <WrapLine>
                <WrapDescription>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    Listing price
                  </Typography>
                  <Typography  className="content" color="#717D8A" fontWeight="400">
                    Set a listing price for your token
                  </Typography>
                </WrapDescription>
                <WrapValue>
                  <WrapForm fullWidth>
                    <Typography component="label"  color="gray.300" fontWeight="500">
                      Listing price <RequireSymbol component="span">*</RequireSymbol>
                    </Typography>
                    <InputCustom
                      fullWidth
                      className={parseErrorMessage('listingPrice') ? 'onError' : ''}
                      value={data.listingPrice}
                      onChange={handleChange('listingPrice')}
                      placeholder="Enter token price"
                      type="number"
                      startAdornment={
                        <WrapStartAdornment>
                          <Typography  color="#2AC89F" fontWeight="400" textTransform="uppercase">
                            {data.currency}
                          </Typography>
                        </WrapStartAdornment>
                      }
                    />
                    <Typography  color="red" fontWeight="400">
                      {parseErrorMessage('listingPrice')}
                    </Typography>
                  </WrapForm>
                </WrapValue>
              </WrapLine>
              <WrapLine>
                <WrapDescription>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    How much percentage of fund raised are you wish to spend on listing your token
                  </Typography>
                  <Typography  className="content" color="#717D8A" fontWeight="400">
                    Enter the percentage of raised funds that should be allocated to liquidity on {dexs[data.dex].label}
                  </Typography>
                </WrapDescription>
                <WrapValue gap="10px !important">
                  <WrapForm fullWidth>
                    <Typography component="label"  color="gray.300" fontWeight="500">
                      Liquidity percentage <RequireSymbol component="span">*</RequireSymbol>
                    </Typography>
                    <InputCustom
                      fullWidth
                      className={parseErrorMessage('liquidityPercentage') ? 'onError' : ''}
                      value={data.liquidityPercentage}
                      onChange={handleChange('liquidityPercentage')}
                      placeholder="Enter liquidity percentage"
                      type="number"
                      startAdornment={
                        <WrapStartAdornment>
                          <Typography  color="#2AC89F" fontWeight="400" textTransform="uppercase">
                            %
                          </Typography>
                        </WrapStartAdornment>
                      }
                    />
                    <Typography  color="red" fontWeight="400">
                      {parseErrorMessage('liquidityPercentage')}
                    </Typography>
                  </WrapForm>
                  <Typography  fontWeight="400" color="blue.400">
                    &#8226; Need to greater than 50%
                  </Typography>
                </WrapValue>
              </WrapLine>
              <WrapLine>
                <WrapDescription>
                  <Typography color="var(--colors-text)" fontWeight="400">
                    Liquidity lockup
                  </Typography>
                  <Typography  className="content" color="#717D8A" fontWeight="400">
                    Set a lock-up time for liquidity pool
                  </Typography>
                </WrapDescription>
                <WrapValue gap="10px !important">
                  <WrapForm fullWidth>
                    <Typography component="label"  color="gray.300" fontWeight="500">
                      Lockup time <RequireSymbol component="span">*</RequireSymbol>
                    </Typography>
                    <InputCustom
                      fullWidth
                      className={parseErrorMessage('lockupTime') ? 'onError' : ''}
                      value={data.lockupTime}
                      onChange={handleChange('lockupTime')}
                      placeholder="Enter lockup time"
                      type="number"
                      startAdornment={
                        <WrapStartAdornment>
                          <Typography  color="#2AC89F" fontWeight="400" textTransform="uppercase">
                            Days
                          </Typography>
                        </WrapStartAdornment>
                      }
                    />
                    <Typography  color="red" fontWeight="400">
                      {parseErrorMessage('lockupTime')}
                    </Typography>
                  </WrapForm>
                  <Typography  fontWeight="400" color="blue.400">
                    &#8226; Lock up time must be greater than 15 days
                  </Typography>
                </WrapValue>
              </WrapLine>
            </>
          )}
          <WrapLine>
            <WrapDescription></WrapDescription>
            <WrapValue>
              <FlexBox flexDirection="column" gap="10px">
                <Typography  color="gray.300" fontWeight="400">
                  {token?.symbol} Token needed to launch
                </Typography>
                <Typography  color="#717D8A" fontWeight="400">
                  Token for sale:{' '}
                  <Typography  color="gray.300">
                    {tokenForSale}
                  </Typography>
                </Typography>
                <Typography  color="#717D8A" fontWeight="400">
                  Token for Auto liquidity:{' '}
                  <Typography  color="gray.300">
                    {tokenForLiquidity}
                  </Typography>
                </Typography>
                <Typography  color="#717D8A" fontWeight="400">
                  Token for fee:{' '}
                  <Typography  color="gray.300">
                    {tokenForFee}
                  </Typography>
                </Typography>
                <Line />
                <Typography  color="#717D8A" fontWeight="400">
                  In total:{' '}
                  <Typography  color="primary.main">
                    {tokenInTotal} {token?.symbol}
                  </Typography>
                </Typography>
              </FlexBox>
            </WrapValue>
          </WrapLine>
        </FlexBox>
        <FlexBox justifyContent="flex-end" gap="14px">
          <Back onClick={onBackStep}>
            <Typography  color="primary.main" fontWeight="600">
              Back
            </Typography>
          </Back>
          {
          <Next
            loading={pending && Number(approvalState) === ApprovalState.NOT_APPROVED}
            onClick={approvalState === ApprovalState.APPROVED ? handleNextStep : handleApprove}
          >
            {!(pending && Number(approvalState) === ApprovalState.NOT_APPROVED) && (
              <Typography  color="#000000" fontWeight="600">
                {approvalState === ApprovalState.APPROVED ? 'Next' : 'Enable'}
              </Typography>
            )}
          </Next>
          // <Next
          //   loading={pending }
          //   onClick={approvalState === ApprovalState.APPROVED ? handleNextStep : handleApprove}
          // >
          //   {!(Number(approvalState) === ApprovalState.NOT_APPROVED) && (
          //     <Typography  color="#000000" fontWeight="600">
          //       {approvalState === ApprovalState.APPROVED ? 'Next' : 'Enable'}
          //     </Typography>
          //   )}
          // </Next>
          }
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
const WrapStartAdornment = styled(Box)`
  max-width: 67px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid;
  border-color: #ccc;
`;
const WrapForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const InputCustom = styled(OutlinedInput)`
  padding: 0;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;

  fieldset {
    display: none;
  }

  input {
    font-family: 'Poppins', sans-serif;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    color: #ccc;

    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 180%;
      color: #ccc;
      opacity: 1;
    }
  }

  &.Mui-focused {
    border-color: #9a6aff;
    box-shadow: rgba(175, 137, 255, 0.4) 0px 0px 0px 2px, rgba(175, 137, 255, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  &.onError {
    border-color: #ccc;
    box-shadow: none;
  }
`;
const RequireSymbol = styled(Box)`
  color: #ccc;
`;
const BoxRadioButtonItem = styled(Box)`
  border: 1px solid #373f47;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
const Line = styled(Box)`
  background-color: #ccc;
  height: 1px;
  widht: 100%;
`;
const SelectCustom = styled(Select)`
  .MuiSelect-select {
    border: 1px solid;
    border-color: #ccc;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    color: #ccc;
  }

  fieldset {
    display: none;
  }
`;

export default Step04;
