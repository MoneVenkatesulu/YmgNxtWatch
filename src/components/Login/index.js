import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {LoadingContainer, FormContainer, FormLabel} from './StyledComponents'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  onChangeUsername = event => {
    const username = event.target.value
    this.setState({username})
  }

  onChangePassword = event => {
    const password = event.target.value
    this.setState({password})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          let formImageUrl = ''
          if (isDarkTheme) {
            formImageUrl =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          } else {
            formImageUrl =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }

          return (
            <LoadingContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                onSubmit={this.onSubmitCredentials}
                isDarkTheme={isDarkTheme}
              >
                <img
                  src={formImageUrl}
                  alt="nxt watch logo"
                  className="form-website-logo"
                />

                <FormLabel htmlFor="USERNAME" isDarkTheme={isDarkTheme}>
                  USERNAME
                </FormLabel>
                <input
                  type="text"
                  id="USERNAME"
                  placeholder="Username"
                  className="form-input"
                  onChange={this.onChangeUsername}
                  value={username}
                />

                <FormLabel htmlFor="PASSWORD" isDarkTheme={isDarkTheme}>
                  PASSWORD
                </FormLabel>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="PASSWORD"
                  placeholder="password"
                  className="form-input"
                  onChange={this.onChangePassword}
                  value={password}
                />

                <div>
                  <input
                    type="checkbox"
                    id="CHECKBOX"
                    className="form-checkbox"
                    onChange={this.onChangeCheckbox}
                  />
                  <FormLabel htmlFor="CHECKBOX" isDarkTheme={isDarkTheme}>
                    Show Password
                  </FormLabel>
                </div>

                <button type="submit" className="form-button">
                  Login
                </button>

                {errorMsg !== '' && (
                  <p className="error-msg">{`*${errorMsg}`}</p>
                )}
              </FormContainer>
            </LoadingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
