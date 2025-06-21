import ThemeContext from '../../context/ThemeContext'

import {FialureHeading, FailureText} from './StyledComponents'
import './index.css'

const FailureView = props => {
  const {onClickFailureRetryButton} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <div className="failure-view-container">
            <img
              src={failureImage}
              alt="failure view"
              className="connection-failure-img"
            />
            <FialureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FialureHeading>
            <FailureText isDarkTheme={isDarkTheme}>
              We are having some trouble to completing your request.
            </FailureText>
            <FailureText isDarkTheme={isDarkTheme}>
              Please try again.
            </FailureText>
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
