import ThemeContext from '../../context/ThemeContext'

import {
  TabListItem,
  TabHomeIcon,
  TabFireIcon,
  TabGamingIcon,
  TabPlaylistAddIcon,
  TabItemText,
} from './StyledComponents'
import './index.css'

const NavbarTabItem = props => {
  const {eachTab, isActive} = props
  const {tabId, displayText} = eachTab

  const renderTabIcons = () => {
    switch (tabId) {
      case 'HOME':
        return <TabHomeIcon isActive={isActive} />
      case 'TRENDING':
        return <TabFireIcon isActive={isActive} />
      case 'GAMING':
        return <TabGamingIcon isActive={isActive} />
      case 'SAVED_VIDEOS':
        return <TabPlaylistAddIcon isActive={isActive} />
      default:
        return null
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTabId} = value

        const onClickTabItem = () => {
          changeActiveTabId(tabId)
        }

        return (
          <TabListItem isActive={isActive}>
            <button
              type="button"
              onClick={onClickTabItem}
              className="tab-item-button"
            >
              {renderTabIcons()}
              <TabItemText isActive={isActive} isDarkTheme={isDarkTheme}>
                {displayText}
              </TabItemText>
            </button>
          </TabListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NavbarTabItem
