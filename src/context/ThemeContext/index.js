import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTabId: '',
  changeActiveTabId: () => {},
})

export default ThemeContext
