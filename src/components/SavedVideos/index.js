import {FaFire} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Videos from '../Videos'

import {
  WindowsContainer,
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  SavedVideosHeading,
  NoVideosContainer,
} from './StyledComponents'
import './index.css'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value

      const noVideosView = () => (
        <NoVideosContainer isDarkTheme={isDarkTheme}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            className="no-videos-img"
          />
          <h1>No saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </NoVideosContainer>
      )

      const renderSavedVideosView = () => {
        switch (true) {
          case savedVideosList.length === 0:
            return noVideosView()
          case savedVideosList.length > 0:
            return (
              <div className="saved-videos-list">
                <Videos videosList={savedVideosList} />
              </div>
            )
          default:
            return null
        }
      }

      return (
        <WindowsContainer data-testid="savedVideos">
          <Header />
          <SavedVideosContainer isDarkTheme={isDarkTheme}>
            <div className="navbar-container">
              <LeftNavbar />
            </div>
            <div className="saved-videos-content">
              <SavedVideosHeadingContainer
                data-testid="banner"
                isDarkTheme={isDarkTheme}
              >
                <div className="saved-videos-fire-icon-container">
                  <FaFire className="saved-videos-fire-icon" />
                </div>
                <SavedVideosHeading isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedVideosHeading>
              </SavedVideosHeadingContainer>
              {renderSavedVideosView()}
            </div>
          </SavedVideosContainer>
        </WindowsContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
