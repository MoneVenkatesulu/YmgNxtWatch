import Styled from 'styled-components'

export const HomeFialureHeading = Styled.h1`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
`

export const HomeFailureText = Styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#202020')};
  margin: 0px;
`
