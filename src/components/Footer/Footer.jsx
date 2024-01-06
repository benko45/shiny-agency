import { useContext } from "react"
import { ThemeContext } from "../../utils/context/ContextProvider"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import EmailInput from "../EmailInput/EmailInput.jsx"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton data-testid="bouton" onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "☀️" : "🌙"}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
