import {Switch, Route, withRouter} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'

import './App.css'

// Replace your code here

const tabsList = [
  {tabId: 'HOME', displayText: 'Home'},
  {tabId: 'TRENDING', displayText: 'Trending'},
  {tabId: 'GAMING', displayText: 'Gaming'},
  {tabId: 'SAVED_VIDEOS', displayText: 'Saved videos'},
]

class App extends Component {
  state = {isDarkTheme: false, activeTabId: tabsList[0].tabId}

  componentDidMount() {
    const {activeTabId} = this.state
    this.navigateToTabRoute(activeTabId)
  }

  changeTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  navigateToTabRoute = tabId => {
    const {history} = this.props

    switch (tabId) {
      case tabsList[0].tabId:
        history.push('/')
        break
      case tabsList[1].tabId:
        history.push('/videos/trending')
        break
      case tabsList[2].tabId:
        history.push('/videos/gaming')
        break
      case tabsList[3].tabId:
        history.push('/videos/saved')
        break
      default:
        break
    }
  }

  changeActiveTabId = tabId => {
    this.setState({activeTabId: tabId}, () => this.navigateToTabRoute(tabId))
  }

  render() {
    const {isDarkTheme, activeTabId} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTabId,
          changeTheme: this.changeTheme,
          changeActiveTabId: this.changeActiveTabId,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/trending"
            component={TrendingVideos}
          />
          <ProtectedRoute
            exact
            path="/videos/gaming"
            component={GamingVideos}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
