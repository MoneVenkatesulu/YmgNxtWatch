import Styled from 'styled-components'

const VideosContainer = Styled.ul`
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

export default VideosContainer
