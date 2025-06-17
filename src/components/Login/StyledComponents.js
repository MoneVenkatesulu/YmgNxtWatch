import Styled from 'styled-components'

export const LoadingContainer = Styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#202020' : '#f8fafc')};
  display: flex;
  justify-content:center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 10px;
    }
`

export const FormContainer = Styled.form`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #94a3b8;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`

export const FormLabel = Styled.label`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#202020')};
  padding-bottom: 3px;
`
