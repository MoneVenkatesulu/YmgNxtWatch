import Styled from 'styled-components'

export const WindowsContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const VideoContent = Styled.div`
    background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
    width: 100%;
    overflow: auto;
    padding: 15px;

    @media (min-width:768px) {
        padding: 30px;
    }
`

export const VideoHeading = Styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 15px;
  } 
`

export const ViewsPublishLikesSavedContainer = Styled.div`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#94a3b8')};
  display: flex;
  justify-content: space-between;
  
`

export const LikeElement = Styled.button`
  color: ${props => (props.clickOrUnclick ? '#2563eb' : '#64748b')};
  font-weight: ${props => (props.clickOrUnclick ? 'bold' : 'normal')};
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const DislikeElement = Styled(LikeElement)``

export const SaveElement = Styled(LikeElement)`
  color: ${props =>
    props.isSaved || props.savedVideo ? '#2563eb' : '#64748b'};
  font-weight: ${props => (props.isSaved ? 'bold' : 'normal')};
`

export const ChannelDescription = Styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#94a3b8')};
  padding-bottom: 15px;
`
