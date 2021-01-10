import React from 'react'
import { render, screen } from 'src/test/test-utils'

import Button from './Button'

test('renders default button', () => {
  render(<Button label="default-button" />)

  const linkElement = screen.getByText(/default-button/i)
  expect(linkElement).toBeInTheDocument()
})


test('renders small button', () => {
  render(<Button label="small-button" size="small" />)

  const linkElement = screen.getByText(/small-button/i)
  expect(linkElement).toBeInTheDocument()
})
