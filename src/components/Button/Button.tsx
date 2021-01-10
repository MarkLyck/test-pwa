import React from 'react'
import styled from '@emotion/styled'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

type StyledButtonProps = {
  primary: boolean
  size: string
  theme?: any
  [key: string]: any
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(p: StyledButtonProps) =>
    p.primary ? p.theme.palette.text[0] : p.theme.palette.text[500]};
  background-color: ${(p: StyledButtonProps) =>
    p.primary ? p.theme.palette.primary[500] : 'transparent'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  font-size: ${(p: StyledButtonProps) => {
    if (p.size === 'small') {
      return '12px;'
    } else if (p.size === 'medium') {
      return '14px;'
    } else if (p.size === 'large') {
      return '16px;'
    }
  }}
  padding: ${(p: StyledButtonProps) => {
    if (p.size === 'small') {
      return '10px 16px;'
    } else if (p.size === 'medium') {
      return '11px 20px;'
    } else if (p.size === 'large') {
      return '12px 24px;'
    }
  }}
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" primary={primary} size={size} {...props}>
      {label}
    </StyledButton>
  )
}

export default Button