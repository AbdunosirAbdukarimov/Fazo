import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Popular = () => {
  return (
    <>
      <Typography
        variant="h1"
        fontSize={"24px"}
        fontWeight={"600"}
        margin={"40px 0 20px 0"}
      >
        Популярные категории
      </Typography>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   '@0.00': {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }}
        modules={[Pagination]}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Компьютеры
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Computer 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Телефоны, <br />
                планшеты
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/phone 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
      </Swiper>      
    </>
  );
};

export default Popular;
