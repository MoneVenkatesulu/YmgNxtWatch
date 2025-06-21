import {Link} from 'react-router-dom'

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

  const getActiveTab = () => {
    switch (tabId) {
      case 'HOME':
        return {
          tabPath: '/',
          tabIcon: <TabHomeIcon isActive={isActive} />,
        }
      case 'TRENDING':
        return {
          tabPath: '/trending',
          tabIcon: <TabFireIcon isActive={isActive} />,
        }
      case 'GAMING':
        return {
          tabPath: '/gaming',
          tabIcon: <TabGamingIcon isActive={isActive} />,
        }
      case 'SAVED_VIDEOS':
        return {
          tabPath: '/saved-videos',
          tabIcon: <TabPlaylistAddIcon isActive={isActive} />,
        }
      default:
        return null
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTabId} = value

        const {tabPath, tabIcon} = getActiveTab()

        const onClickTabItem = () => {
          changeActiveTabId(tabId)
        }

        return (
          <TabListItem
            as={Link}
            to={tabPath}
            isActive={isActive}
            onClick={onClickTabItem}
          >
            {tabIcon}
            <TabItemText isActive={isActive} isDarkTheme={isDarkTheme}>
              {displayText}
            </TabItemText>
          </TabListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NavbarTabItem
