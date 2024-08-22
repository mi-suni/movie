import { useNavigate, useParams } from 'react-router-dom'
import movieDetailData from '../assets/data/movieDetailData.json'
import styled from 'styled-components'

export const MovieDetail = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container onClick={() => navigate('/')}>
        <Div onClick={(e) => e.stopPropagation()}>
          <Img src={`https://image.tmdb.org/t/p/w500${movieDetailData.poster_path}`} />
          <DetailDiv>
            <H1>{movieDetailData.title}</H1>
            <P>평점: {movieDetailData.vote_average}</P>
            <GenreDiv>
              <H3>장르:</H3>
              {movieDetailData.genres.map((el) => (
                <Li>{el.name}</Li>
              ))}
            </GenreDiv>
            <hr />
            <H3>줄거리:</H3>
            <p>{movieDetailData.overview}</p>
          </DetailDiv>
        </Div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ecececee;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  background-color: #ffffff;
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Img = styled.img`
  width: 350px;
  height: 500px;
  object-fit: fill;
`
const DetailDiv = styled.div`
  width: 710px;
  margin: 10px 20px;
`

const H1 = styled.h1`
  font-size: 25px;
  margin-bottom: -5px;
`

const P = styled.p`
  margin-bottom: 30px;
`

const GenreDiv = styled.div`
  margin-bottom: 35px;
`

const H3 = styled.h3`
  font-size: 17px;
  margin-top: 30px;
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