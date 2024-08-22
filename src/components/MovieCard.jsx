import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = ({movies}) => {
  const navigate = useNavigate()

  return (
    <>
      <Ul>
        {movies.map((el) => (
          // <Li key={el.movieId} onClick={() => navigate(`/details/${el.movieId}`)} >
          <Li key={el.movieId} onClick={() => navigate(`/details`)} >
            <Img src={el.movieSrc} alt={el.movieTitle} />
            <H1>{el.movieTitle}</H1>
            <P>평점: {el.movieAverage}</P>
          </Li>
        ))}
      </Ul>
    </>
  )
}

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Li = styled.li`
  list-style: none;
  width: 190px;
  border: 1px solid gainsboro;
  margin: 15px; 
`

const Img = styled.img`
  width: 190px;
  height: 260px;
  object-fit: fill;
`

const H1 = styled.h1`
  font-size: 14px;
  margin-left: 8px;
`

const P = styled.p`
  font-size: 13px;
  margin: 8px;
`
