import React from 'react'
import { render, screen } from 'src/test/test-utils'

import AppProvider from './AppProvider'

test('renders theme switch', () => {
    render(<AppProvider><div>test</div></AppProvider>)

    const childElement = screen.getByText(/test/i)
    expect(childElement).toBeInTheDocument()
})