import Styled from 'styled-components'

export const FialureHeading = Styled.h1`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  text-align: center;
`

export const FailureText = Styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#202020')};
  text-align: center;
  margin: 0px;
`
