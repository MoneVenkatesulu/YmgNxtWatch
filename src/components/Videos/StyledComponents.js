import Styled from 'styled-components'

export const VideosContainer = Styled.ul`
list-style-type: none;
  display: flex;
  flex-direction: ${props => (props.isTrending ? 'column' : 'row')};
  flex-wrap: ${props => (props.isTrending ? 'no-wrap' : 'wrap')};
  gap: 15px;
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const NoVideosContainer = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosHeading = Styled.h1`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  text-align: center;
  
`

export const NoVideosText = Styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#202020')};
  text-align: center;
`
