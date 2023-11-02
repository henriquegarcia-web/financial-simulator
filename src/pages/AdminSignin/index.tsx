import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as S from './styles'

import { Button, Input, Checkbox, theme } from 'antd'

import { Controller, useForm } from 'react-hook-form'

interface ISigninForm {
  adminEmail: string
  adminPassword: string
  adminPasswordConfirm: string
}

const AdminSignin = () => {
  const { token } = theme.useToken()

  const navigate = useNavigate()

  const [signinIsLoading, setSigninIsLoading] = useState(false)

  const { control, handleSubmit, reset, formState } = useForm<ISigninForm>()

  const { isValid } = formState

  const handleSignin = async (data: ISigninForm) => {
    setSigninIsLoading(true)

    navigate('/admin')
  }

  return (
    <S.AdminSignin>
      <S.AuthContainer
        color={token.colorText}
        background={token.colorBgContainer}
      >
        <S.AuthContainerHeader>
          <S.AuthContainerLogo style={{ color: token.colorTextSecondary }}>
            <h1>Watt Sistema</h1>
          </S.AuthContainerLogo>
          <span style={{ color: token.colorTextDescription }}>Entrar</span>
        </S.AuthContainerHeader>
        <S.AuthContainerContent>
          <S.AdminSigninForm
            layout="vertical"
            onFinish={handleSubmit(handleSignin)}
          >
            <Controller
              name="adminEmail"
              control={control}
              rules={{ required: 'Este campo é obrigatório' }}
              render={({ field }) => <Input {...field} placeholder="E-mail" />}
            />
            <Controller
              name="adminPassword"
              control={control}
              rules={{ required: 'Este campo é obrigatório' }}
              render={({ field }) => (
                <Input.Password {...field} placeholder="Senha" />
              )}
            />
            <S.AdminSigninFormFooter>
              <Button
                type="primary"
                htmlType="submit"
                loading={signinIsLoading}
                disabled={!isValid}
              >
                Entrar
              </Button>
            </S.AdminSigninFormFooter>
          </S.AdminSigninForm>
        </S.AuthContainerContent>
      </S.AuthContainer>

      {/* <S.AuthBackground>
        <img src="/background.jpeg" alt="" />
      </S.AuthBackground> */}
    </S.AdminSignin>
  )
}

export default AdminSignin
