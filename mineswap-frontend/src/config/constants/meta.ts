import memoize from 'lodash/memoize'
import { ContextApi } from '@pancakeswap/localization'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CloudBase',
  description:
    'CloudBase is a one-stop decentralized trading protocol that utilizes the security, scalability, and decentralization of the BASE blockchain, creating an open and safe marketplace for traders, liquidity providers, and developers.',
  image: '/peview.png',
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/swap': { basePath: true, title: t('Exchange') },
      // '/limit-orders': { basePath: true, title: t('Limit Orders') },
      '/add': { basePath: true, title: t('Add Liquidity') },
      '/remove': { basePath: true, title: t('Remove Liquidity') },
      '/liquidity': { title: t('Liquidity') },
      '/find': { title: t('Import Pool') },
      // '/competition': { title: t('Trading Battle') },
      // '/prediction': { title: t('Prediction') },
      // '/prediction/leaderboard': { title: t('Leaderboard') },
      // '/farms': { title: t('Farms') },
      // '/farms/auction': { title: t('Farm Auctions') },
      '/pools': { title: t('Pools') },
      // '/lottery': { title: t('Lottery') },
      // '/ifo': { title: t('Initial Farm Offering') },
      // '/teams': { basePath: true, title: t('Leaderboard') },
      // '/voting': { basePath: true, title: t('Voting') },
      // '/voting/proposal': { title: t('Proposals') },
      // '/voting/proposal/create': { title: t('Make a Proposal') },
      '/info': { title: t('Overview'), description: 'View statistics for CloudBase exchanges.' },
      '/info/pools': { title: t('Pools'), description: 'View statistics for CloudBase exchanges.' },
      '/info/tokens': { title: t('Tokens'), description: 'View statistics for CloudBase exchanges.' },
      // '/nfts/collections': { basePath: true, title: t('Collections') },
      // '/nfts/activity': { title: t('Activity') },
      '/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('CloudBase Squad') },
      // '/pottery': { basePath: true, title: t('Pottery') },
    },
    defaultTitleSuffix: t('CloudBase'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title} | ${t(pathList.defaultTitleSuffix)}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
