import { useState } from 'react'
export enum SwapType {
  SWAP,
  STABLE_SWAP,
}


export default function SwapTab({ children, showStable }) {
  const [swapTypeState, setSwapType] = useState(SwapType.SWAP)

  if (showStable) {
    return (
      <>
        {children(swapTypeState)}
      </>
    )
  }

  return children(SwapType.SWAP)
}
