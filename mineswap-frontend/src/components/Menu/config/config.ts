import { MenuItemsType, SwapIcon, SwapFillIcon, EarnIcon, MoreIcon, TrophyIcon, EarnFillIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItemType, DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: true,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        {
          label: t('Bridge'),
          href: 'https://bridge.base.org',
          type: DropdownMenuItemType.EXTERNAL_LINK,
          isActive: true,
        },
        {
          label: t('Perpetual'),
          href: '#',
          disabled: true,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '#',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      disabled: true,
      items: [
        {
          label: t('Farms'),
          href: '#',
          status: { text: t('Soon'), color: 'warning' },
          disabled: true,
        },
        {
          label: t('Pools'),
          href: '#',
          status: { text: t('Soon'), color: 'warning' },
          disabled: true,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: '',
      icon: MoreIcon,
      hideSubNav: true,
      disabled: true,
      items: [
        {
          label: t('LaunchPad'),
          href: '#',
          status: { text: t('Soon'), color: 'warning' },
          disabled: true,
        },
        {
          label: t('NFT MarketPlace'),
          href: '#',
          status: { text: t('Soon'), color: 'warning' },
          disabled: true,
        },
        {
          label: t('AMM NFT'),
          href: '#',
          status: { text: t('Soon'), color: 'warning' },
          disabled: true,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
