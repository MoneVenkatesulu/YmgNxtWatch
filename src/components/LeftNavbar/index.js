import {withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import NavbarTabItem from '../NavbarTabItem'

import {
  NavbarContainer,
  ContactUsHeading,
  ContactUsText,
} from './StyledComponents'
import './index.css'

const tabsList = [
  {tabId: 'HOME', displayText: 'Home'},
  {tabId: 'TRENDING', displayText: 'Trending'},
  {tabId: 'GAMING', displayText: 'Gaming'},
  {tabId: 'SAVED_VIDEOS', displayText: 'Saved videos'},
]

const LeftNavbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTabId} = value

      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <ul className="tabs-container">
            {tabsList.map(eachItem => (
              <NavbarTabItem
                key={eachItem.tabId}
                eachTab={eachItem}
                isActive={activeTabId === eachItem.tabId}
              />
            ))}
          </ul>
          <div className="left-nav-contactus-container">
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <ul className="left-nav-contact-sites">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="left-nav-contact-icons"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="left-nav-contact-icons"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="left-nav-contact-icons"
                />
              </li>
            </ul>
            <ContactUsText isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsText>
          </div>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(LeftNavbar)
