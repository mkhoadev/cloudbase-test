import { ChainId } from '@pancakeswap/sdk'
import { getFarmConfig } from '@pancakeswap/farms/constants'
import { useSlowRefreshEffect } from 'hooks/useRefreshEffect'

export const useFetchPublicPoolsData = () => {
  
  useSlowRefreshEffect(() => {
    const fetchPoolsDataWithFarms = async () => {
      const farmsConfig = await getFarmConfig(ChainId.BASE)
      farmsConfig.filter((farm) => farm.v1pid !== 0)
      // await dispatch(fetchFarmsPublicDataAsync(activeFarms.map((farm) => farm.v1pid)))
    }

    fetchPoolsDataWithFarms()
  })
}
