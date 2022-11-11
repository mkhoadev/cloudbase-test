import React from 'react'
import {
    Box,
    styled,
    Typography
} from '@mui/material'

export interface Props {
    title:string,
    isCurrent?: boolean,
    currentMessage?: string
}

const Title = ({title, isCurrent , currentMessage}:Props) => {
  return (
    <Flex>
        <Cross sx={{height: isCurrent ? '58px' : '20px'}}/>
        <Box>
            <Box>
                <Typography  fontWeight='700' color='var(--colors-text)'>
                    {title}
                </Typography>
            </Box>
            {
                isCurrent &&
                <Box>
                    <Typography  color='var(--colors-text)' fontWeight='400'>
                        {currentMessage}
                    </Typography>
                </Box>
            }
        </Box>
    </Flex>
  )
}

const Flex = styled(Box)`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Cross = styled(Box)`
    background-color: ${props => props.theme.palette.primary.main};
    width: 5px;
`

export default Title