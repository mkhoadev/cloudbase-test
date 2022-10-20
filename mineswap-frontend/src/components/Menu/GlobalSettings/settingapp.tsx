import { Flex, useModal } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string,
  mr?: string
  mode?: string,
}

const SettingApp = ({ mode }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal mode={mode} />)
  const {isDark} = useTheme()
  return (
    <Flex>
      <img src={isDark ? "/img/Menubutton1.svg" : "/img/Menubutton.png"} alt="" onClick={onPresentSettingsModal} style={{ marginRight: '20px', height:'40px'}} id={`open-settings-dialog-button-${mode}`}/>
    </Flex>
  )
}

export default SettingApp
