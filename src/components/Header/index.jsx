import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'

import LightLogo from '../../assets/light-logo.png'

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
    return (
        <NavContainer>
             <Link to="/">
                <HomeLogo src={LightLogo} />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                 </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header