import { ChainId } from '@pancakeswap/sdk'
import { useAppDispatch } from 'state'
import { getFarmConfig } from '@pancakeswap/farms/constants'
import { useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import { fetchFarmsPublicDataAsync } from 'state/farms/index'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()

  useSlowRefreshEffect(() => {
    const fetchPoolsDataWithFarms = async () => {
      const farmsConfig = await getFarmConfig(ChainId.ETHEREUM)
      const activeFarms = farmsConfig.filter((farm) => farm.v1pid !== 0)
      // await dispatch(fetchFarmsPublicDataAsync(activeFarms.map((farm) => farm.v1pid)))
    }

    fetchPoolsDataWithFarms()
  })
}
