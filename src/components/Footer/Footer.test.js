import Footer from "./Footer.jsx"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../utils/context/ContextProvider.jsx"

describe("Footer", () => {
  test("Change theme", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole("button")
    expect(nightModeButton.textContent).toBe("Changer de mode : ☀️")
  })
})
