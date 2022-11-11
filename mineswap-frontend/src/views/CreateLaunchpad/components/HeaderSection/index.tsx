import { Stack, Typography, Box, styled, Button } from '@mui/material'
import { useCallback, useRef, useEffect } from 'react'
import { ApprovalState } from 'hooks/useApproveCallback'
import LoadingButton from '@mui/lab/LoadingButton'

const HeaderSection = ({
  data,
  activeStep,
  onBackStep,
  onNextStep,
  approvalState = null,
  pendingStep4 = false,
  handleApprove = null,
  handleCreateSale = null,
  loadignSubmit = false,
  isReady = false,
}: any) => {
  const tabHead = useRef<HTMLInputElement>(null)

  const pop = useCallback(() => {
    const position = window.pageYOffset
    if (tabHead.current) {
      position >= 100
        ? ((tabHead.current.style.top = '0'), (tabHead.current.style.position = 'fixed'))
        : ((tabHead.current.style.top = '78px'), (tabHead.current.style.position = 'absolute'))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', pop)
  }, [pop])

  return (
    <WrapHead ref={tabHead}>
      <Stack flexDirection="row" gap="4px">
        <Typography fontWeight="400" color="primary.main">
          Create a launch /
        </Typography>
        <Typography fontWeight="400" color="gray.400">
          {data?.projectTitle}
        </Typography>
      </Stack>
      <Stack flexDirection="row" gap="12px">
        {activeStep > 0 && (
          <Preview onClick={() => onBackStep()}>
            <Typography color="primary.main" fontWeight="600">
              Back
            </Typography>
          </Preview>
        )}
        {handleCreateSale ? (
          <Next onClick={() => handleCreateSale(data)} disabled={loadignSubmit || !isReady} sx={{}}>
            <Typography color="#000000" fontWeight="600">
              {loadignSubmit ? 'Loading…' : 'Submit'}
            </Typography>
          </Next>
        ) : approvalState === ApprovalState.APPROVED || activeStep !== 3 ? (
          <Next onClick={() => onNextStep()}>
            <Typography color="#000000" fontWeight="600">
              Next
            </Typography>
          </Next>
        ) : (
          <Next loading={pendingStep4 && approvalState === ApprovalState.NOT_APPROVED} onClick={handleApprove}>
            {!(pendingStep4 && approvalState === ApprovalState.NOT_APPROVED) && (
              <Typography color="#000000" fontWeight="600">
                Enable
              </Typography>
            )}
          </Next>
        )}
      </Stack>
    </WrapHead>
  )
}

const WrapHead = styled(Box)`
  justify-content: space-between;
  //border-bottom: 1px solid #424242;
  // padding: 32px;
  width: 80%;
  display: flex;
  position: fixed;
  top: 100px;
  left: 10%;
  z-index: 10;
  max-width:1569px;

`
const Next = styled(LoadingButton)`
  width: 140px;
  height: 35px;
  align-item: center;
  justify-content: center;
  display: flex;
  background-color: #ccc;
  border-radius: 4px;
`
const Preview = styled(Button)`
  width: 140px;
  height: 35px;
  align-item: center;
  justify-content: center;
  display: flex;
  background-color: rgba(7, 224, 224, 0.15);
  border-radius: 4px;
  gap: 10px;
`

export default HeaderSection
