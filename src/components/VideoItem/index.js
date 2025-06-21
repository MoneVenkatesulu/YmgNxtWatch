import {Link, withRouter} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  VideoProfileImg,
  VideoTitle,
  VideoDescription,
  DotIcon,
} from './StyledComponents'
import './index.css'

const VideoItem = props => {
  const {eachVideo} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, activeTabId, changeActiveTabId} = value

        let publishedDate
        let formatedPublished
        if (publishedAt !== undefined) {
          publishedDate = new Date(publishedAt)
          formatedPublished = formatDistanceToNow(publishedDate)
        }

        const onClickVideo = () => {
          changeActiveTabId('')
        }

        return (
          <VideoItemContainer
            as={Link}
            to={`/videos/${id}`}
            onClick={onClickVideo}
            isTrending={
              activeTabId === 'TRENDING' || activeTabId === 'SAVED_VIDEOS'
            }
          >
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="video-thumbnail-img"
            />
            <div className="video-item-content">
              {channel !== undefined && (
                <VideoProfileImg
                  src={channel.profileImageUrl}
                  alt="channel logo"
                  isTrending={
                    activeTabId === 'TRENDING' || activeTabId === 'SAVED_VIDEOS'
                  }
                />
              )}
              <div className="home-video-descrition">
                <VideoTitle
                  isDarkTheme={isDarkTheme}
                  isTrending={
                    activeTabId === 'TRENDING' || activeTabId === 'SAVED_VIDEOS'
                  }
                >
                  {title}
                </VideoTitle>
                <div className="video-name-views-pusblished-container">
                  {channel !== undefined && (
                    <>
                      <VideoDescription isDarkTheme={isDarkTheme}>
                        {channel.name}
                      </VideoDescription>
                      <DotIcon
                        className="dot-hide-icon"
                        isDarkTheme={isDarkTheme}
                      />
                    </>
                  )}
                  <div className="home-video-views-pusblished-container">
                    {channel !== undefined && (
                      <>
                        <VideoDescription
                          isDarkTheme={isDarkTheme}
                        >{`${viewCount} views`}</VideoDescription>

                        <DotIcon isDarkTheme={isDarkTheme} />
                      </>
                    )}

                    {channel === undefined && (
                      <VideoDescription
                        isDarkTheme={isDarkTheme}
                      >{`${viewCount} Watching Worldwide`}</VideoDescription>
                    )}

                    <VideoDescription isDarkTheme={isDarkTheme}>
                      {`${publishedAt}|${formatedPublished}`}
                    </VideoDescription>
                  </div>
                </div>
              </div>
            </div>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(VideoItem)
