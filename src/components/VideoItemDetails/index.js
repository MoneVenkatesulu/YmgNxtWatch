import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  WindowsContainer,
  VideoContent,
  VideoHeading,
  ViewsPublishLikesSavedContainer,
  LikeElement,
  DislikeElement,
  SaveElement,
  ChannelDescription,
} from './StyledComponents'
import './index.css'

const fetchedStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    fetchedStatus: fetchedStatusConstants.inProgress,
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoDetails: fetchedData,
        fetchedStatus: fetchedStatusConstants.success,
      })
    } else {
      this.setState({fetchedStatus: fetchedStatusConstants.failure})
    }
  }

  onClickFailureRetryButton = () => {
    this.setState(
      {fetchedStatus: fetchedStatusConstants.inProgress},
      this.getVideoDetails,
    )
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))
  }

  onClickDislinkButton = () => {
    this.setState(prevState => ({liked: false, disliked: !prevState.disliked}))
  }

  renderVideoDetails = (
    isDarkTheme,
    savedVideosList,
    updateSavedVideosList,
  ) => {
    const {videoDetails, liked, disliked} = this.state
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    const date = new Date(publishedAt)
    const formatedDate = formatDistanceToNow(date)

    const onClickAddToList = () => {
      updateSavedVideosList(videoDetails)
    }

    const isSaved = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    return (
      <>
        <ReactPlayer url={videoUrl} controls width="100%" />
        <VideoHeading isDarkTheme={isDarkTheme}>{title}</VideoHeading>
        <ViewsPublishLikesSavedContainer isDarkTheme={isDarkTheme}>
          <div className="video-details-sub-container">
            <p>{viewCount} views</p>
            <BsDot />
            <p>{`${publishedAt}|${formatedDate}`}</p>
          </div>
          <div className="video-details-sub-container">
            <LikeElement
              type="button"
              onClick={this.onClickLikeButton}
              clickOrUnclick={liked}
            >
              <BiLike />
              Like
            </LikeElement>
            <DislikeElement
              type="button"
              onClick={this.onClickDislinkButton}
              clickOrUnclick={disliked}
            >
              <BiDislike />
              Dislike
            </DislikeElement>
            <SaveElement
              type="button"
              isSaved={isSaved}
              onClick={onClickAddToList}
            >
              <MdPlaylistAdd />
              {isSaved ? 'Saved' : 'Save'}
            </SaveElement>
          </div>
        </ViewsPublishLikesSavedContainer>
        <hr className="hr-line" />
        <div className="channel-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channel-logo"
          />
          <div className="channel-content">
            <VideoHeading isDarkTheme={isDarkTheme}>{name}</VideoHeading>
            <ChannelDescription isDarkTheme={isDarkTheme}>
              {subscriberCount} subscribers
            </ChannelDescription>
            <ChannelDescription isDarkTheme={isDarkTheme}>
              {description}
            </ChannelDescription>
          </div>
        </div>
      </>
    )
  }

  renderResponsiveContent = (
    isDarkTheme,
    savedVideosList,
    updateSavedVideosList,
  ) => {
    const {fetchedStatus} = this.state

    switch (fetchedStatus) {
      case fetchedStatusConstants.success:
        return this.renderVideoDetails(
          isDarkTheme,
          savedVideosList,
          updateSavedVideosList,
        )
      case fetchedStatusConstants.failure:
        return (
          <div className="no-data-container">
            <FailureView
              onClickFailureRetryButton={this.onClickFailureRetryButton}
            />
          </div>
        )
      case fetchedStatusConstants.inProgress:
        return (
          <div className="no-data-container">
            <LoadingView />
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {Value => {
          const {isDarkTheme, savedVideosList, updateSavedVideosList} = Value

          return (
            <WindowsContainer data-testid="videoItemDetails">
              <Header />
              <div className="video-details-container">
                <div className="left-navbar-container">
                  <LeftNavbar />
                </div>
                <VideoContent isDarkTheme={isDarkTheme}>
                  {this.renderResponsiveContent(
                    isDarkTheme,
                    savedVideosList,
                    updateSavedVideosList,
                  )}
                </VideoContent>
              </div>
            </WindowsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
