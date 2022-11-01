import { Flex, IconButton, CogIcon, useModal } from '@pancakeswap/uikit'
import { useTheme } from 'styled-components'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
  mode?: string
  local?: string
}

const GlobalSettings = ({ color, mr = '8px', mode, local }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal mode={mode} />)
  const { isDark } = useTheme()
  return (
    // <img src="/img/Menubutton.png" alt="" onClick={onPresentSettingsModal} style={{ marginRight: '20px', height:'32px'}} id={`open-settings-dialog-button-${mode}`}/>
    <Flex>
      <IconButton
        onClick={onPresentSettingsModal}
        variant="text"
        scale="sm"
        mr={mr}
        id={`open-settings-dialog-button-${mode}`}
        style={{ padding: local === '1' ? '0' : '' }}
      >
        {/* <CogIcon height={24} width={24} color={color || 'textSubtle'} /> */}
        <img
          src={isDark ? '/icon/icondark.png' : '/icon/iconlight.png'}
          height={20}
          width={20}
          color={color || 'textSubtle'}
          alt=""
        />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
