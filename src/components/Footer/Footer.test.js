import Footer from './Footer.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/ContextProvider.jsx'

test('Change theme', async () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>,
  )
  const nightModeButton = screen.getByTestId('bouton')
  expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
  fireEvent.click(nightModeButton)
  expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
})
