import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTabId: '',
  changeActiveTabId: () => {},
  savedVideosList: [],
  updateSavedVideosList: () => {},
})

export default ThemeContext
