
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
  Typography,
} from '@mui/material';
import { CloseIcon } from '@pancakeswap/uikit';
import BaseModal from 'components/BaseModal';


// import { parseEther } from 'ethers/lib/utils';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { useCallback, useState } from 'react';

const tokenTypes = [
  {
    value: 0,
    title: 'Standard Token',
  },
];

const CreateTokenModal = ({ open, onDismiss, onTokenCreated }: any) => {
  const Joi = require('joi');
  const [errors, setErrors] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const { chainId } = useActiveWeb3React();
  const [dataCreated, setDataCreated] = useState({
    tokenType: 0,
    name: '',
    symbol: '',
    decimal: '',
    totalSupply: '',
  });

  const handleCreateStandardToken = async () => {
    const { name, symbol, decimal, totalSupply } = dataCreated;

    // const token = await standardTokenContractFactory.deploy(
    //   name,
    //   symbol,
    //   decimal,
    //   parseEther(totalSupply),
    //   process.env.NEXT_PUBLIC_TOKEN_FEE_TO,
    //   parseEther(TOKEN_CREATION_FEE[chainId]),
    //   { value: parseEther(TOKEN_CREATION_FEE[chainId]!) },
    // );

    setIsCreating(true);
    // await token.deployed();
    setIsCreating(false);
    // onTokenCreated(token.address);
    onTokenCreated("0xf64f57e754c0cc641fcab2999ecc375016415a37")
    onDismiss();
  };

  const handleDismiss = useCallback(() => {
    onDismiss?.();
  }, [onDismiss]);

  const schema = Joi.object({
    tokenType: Joi.required(),
    name: Joi.string().max(30).required(),
    symbol: Joi.string().alphanum().pattern(/^[^0-9]+$/).max(6).min(2).required(),
    decimal: Joi.number().min(1).max(18).required(),
    totalSupply: Joi.string().required(),
  });

  const onCreateToken = async () => {
    try {
      setIsCreating(true);
      const value = await schema.validateAsync(
        {
          tokenType: dataCreated.tokenType,
          name: dataCreated.name,
          symbol: dataCreated.symbol,
          decimal: dataCreated.decimal,
          totalSupply: dataCreated.totalSupply,
        },
        { abortEarly: false },
      );
      setErrors([]);

      await handleCreateStandardToken();
      setIsCreating(false);
    } catch (err: any) {
      setIsCreating(false);
      setErrors(err?.details || []);
    }
  };

  const parseErrorMessage = (key: string) => {
    let message = '';
    errors?.map((item: any, index) => {
      if (item?.context?.key === key) {
        message = item?.message;
      }
    });
    return message;
  };

  const handleChange = (prop: any) => (event: any) => {
    setDataCreated({ ...dataCreated, [prop]: event.target.value });
  };

  return (
    <BaseModal
      open={open}
      sx={{
        padding: '24px',
        maxWidth: '556px',
        width: '100%',
        height: '90vh',
        overflowY: 'auto',
        background: 'var(--colors-bgrcard)'
      }}
    >
      <IconButton onClick={onDismiss} sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <FlexBox flexDirection="column" gap="24px">
        <Typography   fontWeight="500">
          Create token
        </Typography>
        <Typography  color="red" fontWeight="500">
          (*) is required field.
        </Typography>
        <WrapForm fullWidth>
          <Typography component="label"  color="gray.300" fontWeight="500">
            Token Type <RequireSymbol component="span">*</RequireSymbol>
          </Typography>
          {/* <InputCustom fullWidth
                        className={parseErrorMessage('tokenType') ? 'onError' : ''}
                        value={dataCreated.tokenType}
                        onChange={handleChange('tokenType')}
                        placeholder="Standard Token" /> */}
          <Select
            value={dataCreated.tokenType}
            onChange={handleChange('tokenType')}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {tokenTypes?.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <Typography  color="red" fontWeight="400">
            {parseErrorMessage('tokenType')}
          </Typography>
          <Typography color="primary.main" fontWeight="400">
            Fee: 0.1 ETHW
          </Typography>
        </WrapForm>
        <WrapForm fullWidth>
          <Typography component="label"  color="gray.300" fontWeight="500">
            Name <RequireSymbol component="span">*</RequireSymbol>
          </Typography>
          <InputCustom
            fullWidth
            className={parseErrorMessage('name') ? 'onError' : ''}
            value={dataCreated.name}
            onChange={handleChange('name')}
            placeholder="Enter token name"
          />
          <Typography  color="red" fontWeight="400">
            {parseErrorMessage('name')}
          </Typography>
        </WrapForm>
        <WrapForm fullWidth>
          <Typography component="label"  color="gray.300" fontWeight="500">
            Symbol <RequireSymbol component="span">*</RequireSymbol>
          </Typography>
          <InputCustom
            fullWidth
            className={parseErrorMessage('symbol') ? 'onError' : ''}
            value={dataCreated.symbol}
            onChange={handleChange('symbol')}
            placeholder="Enter token symbol"
          />
          <Typography  color="red" fontWeight="400">
            {parseErrorMessage('symbol')}
          </Typography>
        </WrapForm>
        <WrapForm fullWidth>
          <Typography component="label" color="gray.300" fontWeight="500">
            Decimals <RequireSymbol component="span">*</RequireSymbol>
          </Typography>
          <InputCustom
            type="number"
            fullWidth
            className={parseErrorMessage('decimal') ? 'onError' : ''}
            value={dataCreated.decimal}
            onChange={handleChange('decimal')}
            placeholder="Enter decimal"
          />
          <Typography color="red" fontWeight="400">
            {parseErrorMessage('decimal')}
          </Typography>
        </WrapForm>
        <WrapForm fullWidth>
          <Typography component="label" color="gray.300" fontWeight="500">
            Total supply <RequireSymbol component="span">*</RequireSymbol>
          </Typography>
          <InputCustom
            type="number"
            fullWidth
            className={parseErrorMessage('totalSupply') ? 'onError' : ''}
            value={dataCreated.totalSupply}
            onChange={handleChange('totalSupply')}
            placeholder="Enter token supply"
          />
          <Typography  color="red" fontWeight="400">
            {parseErrorMessage('totalSupply')}
          </Typography>
        </WrapForm>
        <FormGroup>
          <FormControlLabel
            control={<CheckboxCustom />}
            label={
              <Typography fontWeight="400">
                Implement Bion Anti-Bot System?
              </Typography>
            }
          />
        </FormGroup>
        <CreateToken onClick={onCreateToken} disabled={isCreating}>
          <Typography color="#000000" fontWeight="600">
            {isCreating ? 'Creating Token...' : 'Create Token'}
          </Typography>
        </CreateToken>
      </FlexBox>
    </BaseModal>
  );
};

const FlexBox = styled(Box)`
  display: flex;
`;
const WrapForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const RequireSymbol = styled(Box)`
  color: red;
`;
const InputCustom = styled(OutlinedInput)`
  fieldset {
    display: none;
  }

  input {
    font-family: 'Poppins', sans-serif;
    padding: 12px 16px;
    border: 1px solid;
    border-color: #ccc;
    border-radius: 4px;
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
    input {
      border-color: #9a6aff;
      box-shadow: rgba(175, 137, 255, 0.4) 0px 0px 0px 2px, rgba(175, 137, 255, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
  }

  &.onError {
    input {
      border-color: #ccc;
      box-shadow: none;
    }
  }
`;
const CheckboxCustom = styled(Checkbox)`
  color: #ccc;
`;
const CreateToken = styled(Button)`
  width: 100%;
  height: 52px;
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

export default CreateTokenModal;
