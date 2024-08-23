import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const Signup = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <H1 onClick={() => navigate('/')}>M.Movie</H1>
        <Div>
          <SignUp>Sign Up</SignUp>
          <LabelContainer>
            <label><P>Name</P><Input /></label>
            <label><P>Email</P><Input type="email" /></label>
            <label><P>Password</P><Input type="password" /></label>
            <label><P>Confirm Password</P><Input type="password" /></label>
          </LabelContainer>
          <Button>Sign Up</Button>
        </Div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background-color: black;
`

const H1 = styled.h1`
  color: white;
  font-size: 24px;
  padding: 36px 20px 15px;
  cursor: pointer;
`

const Div = styled.div`
  width: 600px;
  height: 590px;
  margin: 0 auto 100px;
  background-color: white;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUp = styled.h1`
  margin: 35px 0 15px;
  font-size: 35px;
  font-weight: 900;
`

const LabelContainer = styled.div`
  background-color: #dedede1e;
  width: 500px;
  height: 410px;
`

const P = styled.p`
  margin: 30px 50px 0;
  font-size: 20px;
  font-weight: 500;
`

const Input = styled.input`
  width: 390px;
  height: 35px;
  margin: 0 50px;
`

const Button = styled.button`
  width: 500px;
  height: 35px;
  margin: 23px;
  background-color: #c4cfec;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    background-color: #8fa4de;
    font-weight: 800;
    transition: 0.2s;
    transform: scale(1.07);
  }

  &:active {
    background-color: #577adc;
    transform: scale(1.03);
  }
`