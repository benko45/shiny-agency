import { render as rtlRender } from "@testing-library/react"
import {
  ThemeProvider,
  SurveyProvider,
} from "../../utils/context/ContextProvider.jsx"

import { MemoryRouter } from "react-router-dom"

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <SurveyProvider>{children}</SurveyProvider>
      </ThemeProvider>
    </MemoryRouter>
  )
}

export function render(ui) {
  rtlRender(ui, { wrapper: Wrapper })
}
