import Styled from 'styled-components'

const HomeContainer = Styled.div`
  height: 94vh;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  display: flex;

  @media (min-width: 768px) {
    height: 91vh;
  }
`

export default HomeContainer
