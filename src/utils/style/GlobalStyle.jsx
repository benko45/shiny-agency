import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context/ContextProvider"
import colors from "./colors"

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? colors.backgroundDark : "white"};
        margin: 0;
    }
`
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === "dark"} />
}

export default GlobalStyle
