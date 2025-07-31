import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

const tabsList = [
  {tabId: 'HOME', displayText: 'Home'},
  {tabId: 'TRENDING', displayText: 'Trending'},
  {tabId: 'GAMING', displayText: 'Gaming'},
  {tabId: 'SAVED_VIDEOS', displayText: 'Saved videos'},
]

class App extends Component {
  state = {
    savedVideosList: [],
    isDarkTheme: false,
    activeTabId: tabsList[0].tabId,
  }

  componentDidMount() {
    document.title = 'NxtWatch-App'
  }

  changeTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  changeActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  updateSavedVideosList = videoDetails => {
    const {savedVideosList} = this.state
    const isIncludes = savedVideosList.find(
      eachItem => eachItem.id === videoDetails.id,
    )
    if (isIncludes) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachItem => eachItem.id !== videoDetails.id && {...eachItem},
        ),
      }))
    } else {
      this.setState(preState => ({
        savedVideosList: [...preState.savedVideosList, videoDetails],
      }))
    }
  }

  render() {
    const {savedVideosList, isDarkTheme, activeTabId} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTabId,
          savedVideosList,
          changeTheme: this.changeTheme,
          changeActiveTabId: this.changeActiveTabId,
          updateSavedVideosList: this.updateSavedVideosList,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
