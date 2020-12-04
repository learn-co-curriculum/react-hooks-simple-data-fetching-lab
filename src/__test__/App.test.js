import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { server } from '../mocks/server'

import App from '../App';

describe('<App />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('displays names of the astronauts after fetching', async () => {
    render(<App />)

    await screen.findByText(/Sergey Ryzhikov/g)

    expect(screen.getByText(/Sergey Ryzhikov/g)).toBeInTheDocument()

    expect(screen.getByText(/Victor Glover/g)).toBeInTheDocument()
  })
})
