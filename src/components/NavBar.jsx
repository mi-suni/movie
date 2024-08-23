import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <Nav>
        <H1 onClick={() => navigate('/')}>M.Movie</H1>
        <Div>
          <Button onClick={() => navigate('/signup')}>회원가입</Button>
          <Button onClick={() => navigate('/login')}>로그인</Button>
        </Div>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`

const H1 = styled.h1`
  color: white;
  margin: 20px;
  cursor: pointer;
`

const Div = styled.div`
  margin: 20px;
`

const Button = styled.button`
  margin: 3px;
  padding: 8px;
  background-color: gainsboro;
  border: none;
  border-radius: 5px;
`