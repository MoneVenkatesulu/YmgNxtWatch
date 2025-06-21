import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  VideosContainer,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosText,
} from './StyledComponents'
import './index.css'

const Videos = props => {
  const {videosList} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTabId} = value
        const renderNoVideosView = () => (
          <NoVideosContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-videos-img"
            />
            <NoVideosHeading>No Search results found</NoVideosHeading>
            <NoVideosText>
              Try different key words or remove search filter
            </NoVideosText>
            <button type="button" className="no-videos-retry-button">
              Retry
            </button>
          </NoVideosContainer>
        )

        return videosList.length === 0 ? (
          renderNoVideosView()
        ) : (
          <VideosContainer
            isTrending={
              activeTabId === 'TRENDING' || activeTabId === 'SAVED_VIDEOS'
            }
          >
            {videosList.map(eachItem => (
              <VideoItem eachVideo={eachItem} key={eachItem.id} />
            ))}
          </VideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Videos
