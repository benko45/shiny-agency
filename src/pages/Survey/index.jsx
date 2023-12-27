// import { useParams } from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom'

function Survey() {
//   const { questionNumber } = useParams()
//   const questionNumberInt = parseInt(questionNumber)
//   const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
//   const nextQuestionNumber = questionNumberInt + 1
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
        <Link to="client">Questionnaire Client</Link>
        <Link to="freelance">Questionnaire Freelance</Link>
        <Outlet />
      {/* <h2>Question {questionNumber}</h2>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {questionNumberInt === 10 ? (
            <Link to="/results">Résultats</Link>
        ) : (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )} */}
    </div>
  )
}

export default Survey