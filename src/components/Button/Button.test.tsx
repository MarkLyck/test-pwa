import React from 'react'
import { render, screen } from 'src/test/test-utils'

import Button from './Button'

test('renders learn react link', () => {
  render(<Button label="button-label" />)

  const linkElement = screen.getByText(/button-label/i)
  expect(linkElement).toBeInTheDocument()
})
