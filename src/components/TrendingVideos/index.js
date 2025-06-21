import {Component} from 'react'
import Cookies from 'js-cookie'

import {FaFire} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Videos from '../Videos'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  WindowsContainer,
  TrendingVideosContainer,
  TrendingHeadingContainer,
  TrendingHeading,
} from './StyledComponents'
import './index.css'

const fetchedStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    videosList: [],
    fetchedStatus: fetchedStatusConstants.inProgress,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const videosUrl = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(videosUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const videosData = data.videos.map(eachItme => ({
        id: eachItme.id,
        title: eachItme.title,
        thumbnailUrl: eachItme.thumbnail_url,
        channel: {
          name: eachItme.channel.name,
          profileImageUrl: eachItme.channel.profile_image_url,
        },
        viewCount: eachItme.view_count,
        publishedAt: eachItme.published_at,
      }))

      this.setState({
        videosList: videosData,
        fetchedStatus: fetchedStatusConstants.success,
      })
    } else {
      this.setState({
        fetchedStatus: fetchedStatusConstants.failure,
      })
    }
  }

  onClickFailureRetryButton = () => {
    this.setState(
      {fetchedStatus: fetchedStatusConstants.inProgress},
      this.getAllVideos,
    )
  }

  render() {
    const {fetchedStatus, videosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const renderResponsiveVideos = () => {
            switch (fetchedStatus) {
              case fetchedStatusConstants.inProgress:
                return <LoadingView />
              case fetchedStatusConstants.failure:
                return (
                  <FailureView
                    onClickFailureRetryButton={this.onClickFailureRetryButton}
                  />
                )
              case fetchedStatusConstants.success:
                return (
                  <div className="trending-videos-content">
                    <TrendingHeadingContainer
                      data-testid="banner"
                      isDarkTheme={isDarkTheme}
                    >
                      <div className="trending-fire-icon-container">
                        <FaFire className="trending-fire-icon" />
                      </div>
                      <TrendingHeading isDarkTheme={isDarkTheme}>
                        Trending
                      </TrendingHeading>
                    </TrendingHeadingContainer>
                    <div className="trending-videos-list">
                      <Videos videosList={videosList} />
                    </div>
                  </div>
                )
              default:
                return null
            }
          }

          return (
            <WindowsContainer data-testid="trending" isDarkTheme={isDarkTheme}>
              <Header />
              <TrendingVideosContainer isDarkTheme={isDarkTheme}>
                <div className="navbar-container">
                  <LeftNavbar />
                </div>
                {renderResponsiveVideos()}
              </TrendingVideosContainer>
            </WindowsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
