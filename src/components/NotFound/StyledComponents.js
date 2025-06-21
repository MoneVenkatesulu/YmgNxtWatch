import Styled from 'styled-components'

const NotFoundContainer = Styled.div`
  height: 94vh;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  display: flex;

  @media (min-width: 768px) {
    height: 91vh;
  }
`
export default NotFoundContainer
