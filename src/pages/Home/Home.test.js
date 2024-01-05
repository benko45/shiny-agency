import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Home from "./Home.jsx"
import { ThemeProvider } from "../../utils/context/ContextProvider.jsx"

describe("The Home component", () => {
  it("should render title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>,
    )
    expect(
      screen.getByRole("heading", {
        level: 2,
        text: "Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents",
      }),
    ).toBeTruthy()
  })
})
