import { Component } from 'react'
import PropTypes from 'prop-types'

import { CardImage, CardLabel, CardTitle, CardWrapper } from './style.jsx'

import DefaultPicture from '../../assets/profile.png'

// function Card({ label, title, picture }) {
//   const { theme } = useTheme()
//   const [isFavorite, setIsFavorite] = useState(false)
//   const star = isFavorite ? "⭐️" : ""

//   return (
//     <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//       <CardLabel theme={theme}>{label}</CardLabel>
//       <CardImage src={picture} alt="freelance" />
//       <CardTitle theme={theme}>
//         {star} {title} {star}
//       </CardTitle>
//     </CardWrapper>
//   )
// }

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isFavorite: false,
    }
  }
  // updateIsFavorite = (value) => {
  //   this.setState({ isFavorite: value })
  // }

  render() {
    const { theme, label, picture } = this.props
    // const star = this.state.isFavorite ? '🌟' : ''
    return (
      <CardWrapper
        theme={theme}
        // onClick={() => {
        //   this.updateIsFavorite(!this.state.isFavorite)
        // }
        // }
      >
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>{/* {star} {title} {star} */}</CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
