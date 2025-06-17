import VideoItem from '../VideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'

import VideosContainer from './StyledComponents'
import './index.css'

const fetchedStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Videos = props => {
  const {videosList, fetchedStatus, onClickFailureRetryButton} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTabId} = value

        const renderAllVideos = () => (
          <VideosContainer isTrending={activeTabId === 'TRENDING'}>
            {videosList.map(eachItem => (
              <VideoItem eachVideo={eachItem} key={eachItem.id} />
            ))}
          </VideosContainer>
        )

        const renderVideosResponsiveSection = () => {
          switch (fetchedStatus) {
            case fetchedStatusConstants.success:
              return renderAllVideos()
            case fetchedStatusConstants.failure:
              return (
                <FailureView
                  onClickFailureRetryButton={onClickFailureRetryButton}
                />
              )
            case fetchedStatusConstants.inProgress:
              return <LoadingView />
            default:
              return null
          }
        }

        return renderVideosResponsiveSection()
      }}
    </ThemeContext.Consumer>
  )
}

export default Videos
