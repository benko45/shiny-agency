import { Link, useLocation } from "react-router-dom"
import { StyledLink } from "../../utils/style/Atoms"
import styled from "styled-components"

import LightLogo from "../../assets/light-logo.png"

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  // flex: 1;
`

const HomeLogo = styled.img`
  height: 70px;
`
function Header() {
  let location = useLocation()
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LightLogo} />
      </Link>
      <div>
        <StyledLink to="/" $isFullLink={location.pathname === "/"}>
          Accueil
        </StyledLink>
        <StyledLink
          to="/freelances"
          $isFullLink={location.pathname.includes("freelances")}
        >
          Profils
        </StyledLink>
        <StyledLink
          to="/survey/1"
          $isFullLink={location.pathname.includes("survey")}
        >
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
