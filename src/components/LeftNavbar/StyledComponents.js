import Styled from 'styled-components'

export const NavbarContainer = Styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#202020' : '#f9f9f9')};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`

export const ContactUsHeading = Styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#202020')};
`

export const ContactUsText = Styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#202020')};
`
