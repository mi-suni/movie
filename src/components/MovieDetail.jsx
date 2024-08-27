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
  width: 76%;
  height: 500px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 2;
  overflow: hidden;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 80%;
  }
`

const Img = styled.img`
  width: 350px;
  min-width: 300px;
  height: 500px;
  margin-right: 20px;
  object-fit: fill;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    display: none;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    display: none;
  }
`
const DetailDiv = styled.div`
  width: 65%;
  margin: 20px 0;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    width: 600px;
    margin: 30px 30px 60px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 750px;
    margin: 30px 30px 60px;
  }
`

const H1 = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
  transition: 0.3s;
`

const P = styled.p`
  width: 60%;
  margin-bottom: 30px;
  line-height: 25px;
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s;
`

const GenreDiv = styled.div`
  margin: 35px 0;
  transition: 0.3s;
`

const H3 = styled.h3`
  font-size: 17px;
  margin: 30px 0 15px;
  transition: 0.3s;
`

const Ul = styled.ul`
  height: 20px;
  margin-top: 23px;
  padding: 0;
  transition: 0.3s;
`

const Li = styled.li`
  list-style: none;
  display: inline;
  background-color: #e5e5e598;
  border: none;
  border-radius: 10px;
  padding: 6px 8px;
  margin-right: 15px;
  transition: 0.3s;
`