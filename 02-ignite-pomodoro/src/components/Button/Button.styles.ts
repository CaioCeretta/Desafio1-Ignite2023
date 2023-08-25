import styled from 'styled-components'

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariants
}

// const buttonVariants = {
//   primary: 'purple',
//   secondary: 'pink',
//   danger: 'red',
//   success: 'green',
//   warning: 'orange',
//   info: 'blue',
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  border: 0;
  margin: 8px;
  padding: 1rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
