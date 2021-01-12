import React from 'react'
import { render, screen } from 'src/test/test-utils'

import ThemeSwitch from './index'

test.skip('renders theme switch', () => {
    render(<ThemeSwitch />)

    const linkElement = screen.getByText(/default-button/i)
    expect(linkElement).toBeInTheDocument()
})