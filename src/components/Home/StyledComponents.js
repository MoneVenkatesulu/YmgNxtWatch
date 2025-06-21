import Styled from 'styled-components'

export const WindowsContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomeBannerContainer = Styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const HomeContainer = Styled.div`
  height: 94vh;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  display: flex;

  @media (min-width: 768px) {
    height: 91vh;
  }
`
