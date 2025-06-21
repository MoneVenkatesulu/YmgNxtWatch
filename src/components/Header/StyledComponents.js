import Styled from 'styled-components'

export const HeaderContainer = Styled.nav`
  height: 6vh;
  background-color: ${props => (props.isDarkTheme ? '#202020' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  @media (min-width: 768px){
    height: 9vh;
    padding-left: 5%;
    padding-right: 5%;
    }
`

export const HeaderLogoutButton = Styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  border-radius: 5px;
  cursor: pointer;
  height: 23px;
  width: 60px;

  @media (min-width: 768px){
    height: 30px;
    width: 80px;
  }

  
`

export const PopContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#202020' : '#ffffff')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #475569;
`

export const HeaderPopText = Styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};
`

export const MenuButton = Styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width:768px) {
    display: none;
  }
`

export const MenuPopupContainer = Styled.div`
  background-color: ${props => (props.isDarkTheme ? '#202020' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`

export const HeaderPopupCloseButton = Styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#202020')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 20px;
  align-self: flex-end;
`
