import * as S from './styles'
import { IoArrowForwardOutline } from 'react-icons/io5'

interface IButton {
  type?: 'primary' | 'secondary'
  label: string
  loading?: boolean
  disabled?: boolean
  withArrow?: boolean
  onClick: () => void
}

const Button = ({
  type = 'primary',
  label,
  loading = false,
  disabled = false,
  withArrow = false,
  onClick
}: IButton) => {
  if (type === 'primary')
    return (
      <S.ButtonPrimary
        loading={loading ? 1 : 0}
        disabled={disabled ? 1 : 0}
        onClick={onClick}
      >
        {label}
        {withArrow && <IoArrowForwardOutline />}
      </S.ButtonPrimary>
    )

  return (
    <S.ButtonSecondary
      loading={loading ? 1 : 0}
      disabled={disabled ? 1 : 0}
      onClick={onClick}
    >
      {label}
      {withArrow && <IoArrowForwardOutline />}
    </S.ButtonSecondary>
  )
}

export default Button
