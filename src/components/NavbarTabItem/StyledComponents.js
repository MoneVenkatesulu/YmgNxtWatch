import Styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const TabListItem = Styled.li`
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${props => (props.isActive ? '#475569' : 'transparent')};
`

export const TabHomeIcon = Styled(IoMdHome)`
  color: ${props => (props.isActive ? '#ff0b37' : '#475569')};
`

export const TabFireIcon = Styled(FaFire)`
  color: ${props => (props.isActive ? '#ff0b37' : '#475569')};
`

export const TabGamingIcon = Styled(SiYoutubegaming)`
  color: ${props => (props.isActive ? '#ff0b37' : '#475569')};
`

export const TabPlaylistAddIcon = Styled(MdPlaylistAdd)`
  color: ${props => (props.isActive ? '#ff0b37' : '#475569')};
`

export const TabItemText = Styled.span`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#202020')};
  color: ${props => props.isActive && '#f8fafc'};
  padding-left: 7px;
`
