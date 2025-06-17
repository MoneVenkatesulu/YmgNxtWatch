import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Videos from '../Videos'

import {
  GamingVideosContainer,
  GamingHeadingContainer,
  GamingHeading,
} from './StyledComponents'
import './index.css'

const fetchedStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
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
    const videosUrl = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(videosUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const videosData = data.videos.map(eachItme => ({
        id: eachItme.id,
        title: eachItme.title,
        thumbnailUrl: eachItme.thumbnail_url,
        viewCount: eachItme.view_count,
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
    const {videosList, fetchedStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div className="windows-container">
              <Header />
              <GamingVideosContainer isDarkTheme={isDarkTheme}>
                <div className="navbar-container">
                  <LeftNavbar />
                </div>
                <div className="gaming-videos-content">
                  <GamingHeadingContainer isDarkTheme={isDarkTheme}>
                    <div className="gaming-fire-icon-container">
                      <SiYoutubegaming className="gaming-fire-icon" />
                    </div>
                    <GamingHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingHeadingContainer>
                  <div className="gaming-videos-list">
                    <Videos
                      videosList={videosList}
                      fetchedStatus={fetchedStatus}
                      onClickFailureRetryButton={this.onClickFailureRetryButton}
                    />
                  </div>
                </div>
              </GamingVideosContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideos
