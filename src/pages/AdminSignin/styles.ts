import styled from 'styled-components'
import { Window } from '@/utils/styles/globals'
import { Form } from 'antd'

interface IAuth {
  color: string
  background: string
}

export const AdminSignin = styled(Window)`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const AuthBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AuthContainer = styled.div<IAuth>`
  z-index: 100;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  max-width: 300px;
  padding: 30px 20px 20px 20px;
  border-radius: 10px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);

  backdrop-filter: blur(6px);

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ color }) => color};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px ${({ background }) => background};
  }
`

export const AuthContainerHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;

  img {
    width: 165px;
  }

  span {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.6);
  }
`

export const AuthContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  h1 {
    font-size: 22px;
    line-height: 22px;
    font-weight: 600;
  }
`

export const AuthContainerContent = styled.div`
  display: flex;
`

export const AdminSigninForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;

  .ant-form-item {
    margin-bottom: 0px;
  }
`

export const SignInFormChanger = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 6px;
  margin-top: 5px;

  font-size: 12px;
`

export const AdminSigninFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`
