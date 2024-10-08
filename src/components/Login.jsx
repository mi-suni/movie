import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <H1 onClick={() => navigate('/')}>M.Movie</H1>
        <Div>
          <LogIn>Login</LogIn>
          <LabelContainer>
            <label><P>Email</P><Input type="email" /></label>
            <label><P>Password</P><Input type="password" /></label>
          </LabelContainer>
          <Button>Login</Button>
        </Div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 300px;
  background-color: black;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    background-color: #9e2f2f;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    background-color: #f1b7b7;
  }
`

const H1 = styled.h1`
  color: white;
  font-size: 24px;
  padding: 36px 20px 15px;
  cursor: pointer;
`

const Div = styled.div`
  width: 600px;
  height: 420px;
  margin: 70px auto;
  background-color: white;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 500px;
  }
`

const LogIn = styled.h1`
  margin: 35px 0 15px;
  font-size: 35px;
  font-weight: 900;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    font-size: 31px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 33px;
  }
`

const LabelContainer = styled.div`
  background-color: #dedede1e;
  width: 500px;
  height: 230px;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 400px;
  }
`

const P = styled.p`
  margin: 30px 50px 0;
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 18px;
  }
`

const Input = styled.input`
  width: 390px;
  height: 35px;
  margin: 0 50px;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    width: 190px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 290px;
  }
`

const Button = styled.button`
  width: 500px;
  height: 35px;
  margin: 27px;
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

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 400px;
  }
`