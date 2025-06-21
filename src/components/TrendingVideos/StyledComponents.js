import Styled from 'styled-components'

export const WindowsContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const TrendingVideosContainer = Styled.div`
  height: 94vh;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  display: flex;

  @media (min-width: 768px) {
    height: 91vh;
  }
`

export const TrendingHeadingContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f5f9')};
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 50px;
  @media (max-width: 767px) {
    gap: 16px;
    padding-left: 25px;
  }
`

export const TrendingHeading = Styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};  
`
