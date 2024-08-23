import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";


export const MovieCard = ({movies}) => {
  const [couter, setCounter] = useState(3)
  const navigate = useNavigate()

  const container = () => (
    <Swiper
      slidesPerView={6}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        769: {
          slidesPerView: 6,
          slidesPerGroup: 2,
        },
      }}
      scrollbar={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="mySwiper"
    >
      <Ul>
        {movies.map((el) => (
          <SwiperSlide>
            <Li key={el.movieId} onClick={() => navigate(`/details/${el.movieId}`)} >
              <Img src={el.movieSrc} alt={el.movieTitle} />
              <H1>{el.movieTitle}</H1>
              <P>평점: {el.movieAverage}</P>
            </Li>
          </SwiperSlide>
        ))}
      </Ul>  
    </Swiper>
  )

  return (
    <>
      {container()}
      {/* <Button onClick={() => {
        setCounter((prev) => prev + 1)
        container()
        }}>더 불러오기</Button> */}
    </>
  )
}

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  position: absolute;
`

const Li = styled.li`
  list-style: none;
  width: 190px;
  border: 1px solid gainsboro;
  margin: 15px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`

const Img = styled.img`
  width: 190px;
  height: 260px;
  object-fit: fill;
`

const H1 = styled.h1`
  font-size: 14px;
  margin-top: 5px;
  margin-left: 8px;
`

const P = styled.p`
  font-size: 13px;
  margin: 8px;
`

const Button = styled.button`
  width: 500px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 480px;
`
