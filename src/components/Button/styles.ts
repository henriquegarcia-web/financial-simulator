import styled from 'styled-components'

interface IButton {
  loading: number
  disabled: number
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 15px 25px;
  border-radius: 4px;
  cursor: pointer;

  font-size: 15px;
  letter-spacing: 0.5px;

  svg {
    font-size: 20px;
  }
`

export const ButtonPrimary = styled(Button)`
  font-weight: 500;

  background-color: #2290ff;
  color: white;
`

export const ButtonSecondary = styled(Button)`
  font-weight: 500;

  background-color: #2290ff;
  color: white;
`
