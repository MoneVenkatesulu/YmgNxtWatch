import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'

import NotFoundContainer from './StyledComponents'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div className="windows-container">
          <Header />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <div className="navbar-container">
              <LeftNavbar />
            </div>
            <div className="not-found-container">
              <img
                src={notFoundImage}
                alt="not found"
                className="not-found-image"
              />
              <h1>Page Not Found</h1>
              <p>we are sorry, the page you requested could not be found.</p>
            </div>
          </NotFoundContainer>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
