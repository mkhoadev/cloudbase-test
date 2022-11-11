import React from 'react'
import { Box , styled } from '@mui/material'

const Page = styled(Box)`
    min-height: 100vh;
    color: ${prop => prop.theme.palette.text.primary};
    padding: 30px 0px
`

export default Page