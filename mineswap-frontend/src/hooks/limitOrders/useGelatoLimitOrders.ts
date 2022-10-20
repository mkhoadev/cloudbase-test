import { DerivedOrderInfo, useDerivedOrderInfo, useOrderState } from 'state/limitOrders/hooks'
import { OrderState } from 'state/limitOrders/types'
import useGelatoLimitOrdersHandlers, { GelatoLimitOrdersHandlers } from './useGelatoLimitOrdersHandlers'

const useGelatoLimitOrders = (): {
  handlers: GelatoLimitOrdersHandlers
  derivedOrderInfo: DerivedOrderInfo
  orderState: OrderState
} => {
  // const derivedOrderInfo = useDerivedOrderInfo()
  const derivedOrderInfo = null
  // const orderState = useOrderState()
const orderState = null
  const handlers = useGelatoLimitOrdersHandlers()

  return {
    handlers,
    derivedOrderInfo,
    orderState 
  }
}

export default useGelatoLimitOrders
