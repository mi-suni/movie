import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import { movieDetailContext } from '../context/MovieDetailContext'

export const MovieDetail = () => {
  const movie = useContext(movieDetailContext)
  // console.log("movie", movie)
  const navigate = useNavigate()

  if(!movie) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Container key={movie.movieId} onClick={() => navigate('/')}>
        <Poster src={movie.movieBackSrc} />
        <Div onClick={(e) => e.stopPropagation()}>
          <Img src={movie.movieSrc} />
          <DetailDiv>
            <H1>{movie.movieTitle}</H1>
            <P>평점: {movie.movieAverage}</P>
            <GenreDiv>
              <H3>장르:</H3>
              <Ul>
                {movie.movieGenres.map(el => 
                  <Li key={el.id}>{el.name}</Li>
                )}
              </Ul>
            </GenreDiv>
            <hr />
            <H3>줄거리:</H3>
            <P>{movie.movieOverview}</P>
          </DetailDiv>
        </Div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #ecececee; */
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Poster = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
`

const Div = styled.div`
  background-color: #ffffff;
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 2;
`

const Img = styled.img`
  width: 350px;
  height: 500px;
  object-fit: fill;
`
const DetailDiv = styled.div`
  width: 710px;
  margin: 20px 20px;
`

const H1 = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
`

const P = styled.p`
  margin-bottom: 30px;
  line-height: 25px;
`

const GenreDiv = styled.div`
  margin: 35px 0;
`

const H3 = styled.h3`
  font-size: 17px;
  margin: 30px 0 15px;
`

const Ul = styled.ul`
  height: 20px;
  margin-top: 23px;
  padding: 0;
`

const Li = styled.li`
  list-style: none;
  display: inline;
  background-color: #e5e5e598;
  border: none;
  border-radius: 10px;
  padding: 6px 8px;
  margin-right: 15px;
`