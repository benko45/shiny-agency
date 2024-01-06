import styled from 'styled-components'
// import { Component } from 'react'
import colors from '../../utils/style/colors.js'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks/hooks.jsx'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`
function EmailInput() {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email</StyledLabel>
      <StyledInput theme={theme} onChange={(e) => setEmail(e.target.value)} />
      {/* {email} */}
    </InputWrapper>
  )
}

export default EmailInput
