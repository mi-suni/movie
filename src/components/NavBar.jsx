import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import useDebounce from "../hooks/useDebounce"
import { MovieCard } from "./MovieCard"

export const NavBar = ({search, setSearch}) => {
  const navigate = useNavigate()
  const movies = useDebounce(search)
  // const [searchList, setSearchList] = useState([])
  console.log("movies", movies)

  if(!movies) {
    return (<p>검색 정보가 없습니다.</p>)
  } else {
  }

  return (
    <>
      <Nav>
        <H1 onClick={() => navigate('/')}>M.Movie</H1>
        <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a movie..." />
        <Div>
          <Button onClick={() => navigate('/signup')}>회원가입</Button>
          <Button onClick={() => navigate('/login')}>로그인</Button>
        </Div>
      </Nav>
      {search ? <MovieCard movies={movies} /> : null}
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
  margin: 20px;
  cursor: pointer;
`

const Input = styled.input`
  width: 35%;
  height: 35px;
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