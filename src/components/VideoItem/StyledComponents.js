import Styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const VideoItemContainer = Styled.li`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
   width: ${props => (props.isTrending ? '100%' : '30%')};
   display: flex;
   flex-direction: ${props => (props.isTrending ? 'row' : 'column')};
   gap: 20px;
  }
`

export const VideoProfileImg = Styled.img`
  width: 30px;
  height: 40px;
  @media (min-width: 768px) {
    display: ${props => (props.isTrending ? 'none' : 'flex')};
  }
`

export const VideoTitle = Styled.h1`
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};
    font-size: 13px;
    font-weight: 500;
    margin: 0px;
    padding-bottom: 5px;

    
  @media (min-width: 768px) {
    font-size: ${props => (props.isTrending ? '20px' : '13px')};
    font-weight:  ${props => (props.isTrending ? 'normal' : '500')};
  }
`

export const VideoDescription = Styled.p`
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};
    font-size: 13px;
    margin: 0px;
    padding-bottom: 5px;
`

export const DotIcon = Styled(BsDot)`
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
