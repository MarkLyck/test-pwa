import React from 'react'
import { render, fireEvent } from 'src/test/test-utils'

import ThemeSwitch from './index'

test('renders theme switch', () => {
  const { container } = render(<ThemeSwitch />)

  const button: any = container.querySelector('button')
  expect(button).toHaveAttribute('aria-checked', 'true')

  fireEvent.click(button)

  expect(button).toHaveAttribute('aria-checked', 'false')

  fireEvent.click(button)

  expect(button).toHaveAttribute('aria-checked', 'true')
})
