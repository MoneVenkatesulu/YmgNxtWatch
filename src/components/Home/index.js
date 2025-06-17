import {Component} from 'react'
import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Videos from '../Videos'

import HomeContainer from './StyledComponents'
import './index.css'

const fetchedStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    fetchedStatus: fetchedStatusConstants.inProgress,
    showBanner: true,
    userSearch: '',
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {userSearch} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${userSearch}`

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

  onChangeUserSearch = event => {
    const userSearch = event.target.value
    this.setState({userSearch})
  }

  onClickSearchVideo = () => {
    this.getAllVideos()
  }

  renderHomeBanner = () => {
    const onClickHideBanner = () => {
      this.setState({showBanner: false})
    }
    return (
      <div className="home-banner-container">
        <div className="home-banner-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="home-banner-logo"
          />
          <IoMdClose
            className="home-banner-close-icon"
            onClick={onClickHideBanner}
          />
        </div>
        <p className="home-banner-text">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button type="button" className="home-banner-button">
          GET IT NOW
        </button>
      </div>
    )
  }

  render() {
    const {videosList, showBanner, fetchedStatus, userSearch} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div className="windows-container">
              <Header />
              <HomeContainer isDarkTheme={isDarkTheme}>
                <div className="navbar-container">
                  <LeftNavbar />
                </div>
                <div className="home-videos-content">
                  {showBanner && this.renderHomeBanner()}

                  <div className="home-searchbar-container">
                    <input
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeUserSearch}
                      value={userSearch}
                      className="home-searchbar"
                    />
                    <button
                      type="button"
                      onClick={this.onClickSearchVideo}
                      className="search-icon-button"
                    >
                      <FaSearch />
                    </button>
                  </div>

                  <Videos
                    videosList={videosList}
                    fetchedStatus={fetchedStatus}
                    onClickFailureRetryButton={this.onClickFailureRetryButton}
                  />
                </div>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
