import styled from "styled-components"
import image404 from '../../assets/404.svg'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: ${colors.backgroundLight};
justify-content: space-around;
align-items: center;
margin: auto;
`
const ErrorTitle = styled.h1`
font-weight: 300;
`

const ErrorSubTitle = styled.h2`
color: ${colors.secondary};
font-weight: 300;
`

const Illustration = styled.img`
    max-width: 800px;
    // height: 218px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src={image404} alt="image 404"/>
            <ErrorSubTitle>Il semblerait que cette page n'existe pas</ErrorSubTitle>
        </ErrorWrapper>
    )
}
 
export default Error