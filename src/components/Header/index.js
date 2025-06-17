import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {IoIosSunny, IoMdClose} from 'react-icons/io'
import {FaMoon, FaBars} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import LeftNavbar from '../LeftNavbar'

import {
  HeaderContainer,
  HeaderLogoutButton,
  PopContainer,
  HeaderPopText,
  MenuButton,
  MenuPopupContainer,
  HeaderPopupCloseButton,
} from './StyledComponents'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      let websiteLogoUrl = ''
      if (isDarkTheme) {
        websiteLogoUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      } else {
        websiteLogoUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      }
      const onClickThemeIcon = () => {
        changeTheme()
      }
      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const renderThemeIcon = () => (
        <button
          type="button"
          onClick={onClickThemeIcon}
          className="header-list-buttons"
        >
          {isDarkTheme ? (
            <IoIosSunny className=" header-icons theme-light-icon" />
          ) : (
            <FaMoon className="header-icons theme-moon-icon" />
          )}
        </button>
      )
      const renderMenuOrProfileIcon = () => (
        <>
          <button
            type="button"
            className="header-list-buttons header-porfile-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
              className="header-icons"
            />
          </button>
          <Popup
            modal
            trigger={
              <MenuButton type="button" isDarkTheme={isDarkTheme}>
                <FaBars className="header-icons" />
              </MenuButton>
            }
            className="popup-content"
          >
            {close => (
              <MenuPopupContainer isDarkTheme={isDarkTheme}>
                <HeaderPopupCloseButton
                  onClick={close}
                  isDarkTheme={isDarkTheme}
                >
                  <IoMdClose className="header-icons" />
                </HeaderPopupCloseButton>

                <LeftNavbar />
              </MenuPopupContainer>
            )}
          </Popup>
        </>
      )

      const renderLogoutButton = () => (
        <Popup
          modal
          trigger={
            <HeaderLogoutButton type="button" isDarkTheme={isDarkTheme}>
              Logout
            </HeaderLogoutButton>
          }
        >
          {close => (
            <PopContainer isDarkTheme={isDarkTheme}>
              <HeaderPopText isDarkTheme={isDarkTheme}>
                Are you sure you want to logout?
              </HeaderPopText>
              <div className="header-popup-buttons-container">
                <button
                  type="button"
                  className="header-popup-cancel-button"
                  onClick={close}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="header-popup-confirm-button"
                  onClick={onClickLogout}
                >
                  Confirm
                </button>
              </div>
            </PopContainer>
          )}
        </Popup>
      )

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <img
            src={websiteLogoUrl}
            alt="nxt watch logo"
            className="header-website-logo"
          />
          <ul className="header-list-container">
            <li>{renderThemeIcon()}</li>
            <li>{renderMenuOrProfileIcon()}</li>
            <li>{renderLogoutButton()}</li>
          </ul>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
