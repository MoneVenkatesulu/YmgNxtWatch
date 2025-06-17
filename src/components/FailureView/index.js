import ThemeContext from '../../context/ThemeContext'

import {HomeFialureHeading, HomeFailureText} from './StyledComponents'
import './index.css'

const FailureView = props => {
  const {onClickFailureRetryButton} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <div className="failure-view-container">
            <img
              src={failureImage}
              alt="not found"
              className="connection-failure-img"
            />
            <HomeFialureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </HomeFialureHeading>
            <HomeFailureText isDarkTheme={isDarkTheme}>
              We are have some trouble to completing your request.
            </HomeFailureText>
            <HomeFailureText isDarkTheme={isDarkTheme}>
              Please try again.
            </HomeFailureText>
            <button
              type="button"
              className="failure-retry-button"
              onClick={onClickFailureRetryButton}
            >
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
