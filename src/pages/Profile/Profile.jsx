// import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks/hooks'
import { useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms.jsx'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`

const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Profile() {
  const { id: queryId } = useParams()
  const [profileData, setProfileData] = useState({})
  const { theme } = useTheme()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const url = `http://localhost:8000/freelance?id=${queryId}`
        const response = await fetch(url)
        const jsonResponse = await response.json()
        setProfileData(jsonResponse?.freelanceData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [queryId])

  if (error) {
    return <pre>{error}</pre>
  }

  const { picture, name, location, tjm, job, skills, available } = profileData
  console.log(profileData)
  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <ProfileWrapper theme={theme}>
          <Picture src={picture} alt={name} height={150} width={150} />
          <ProfileDetails theme={theme}>
            <TitleWrapper>
              <Title>{name}</Title>
              <Location>{location}</Location>
            </TitleWrapper>
            <JobTitle>{job}</JobTitle>
            <SkillsWrapper>
              {skills &&
                skills.map((skill) => (
                  <Skill key={`skill-${skill}-${queryId}`} theme={theme}>
                    {skill}
                  </Skill>
                ))}
            </SkillsWrapper>
            <Availability available={available}>
              {available ? 'Disponible maintenant' : 'Indisponible'}
            </Availability>
            <Price>{tjm} € / jour</Price>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </div>
  )
}
export default Profile
