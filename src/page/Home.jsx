import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Brend, Category, Cheaper, Main, Popular, Swiper } from "../Components";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <Category />
      <Swiper />
      <Main />
      <Popular />
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        padding={"30px"}
        justifyContent={"space-between"}
        margin={"70px 0"}
      >
        <Box width={"37%"}>
          <Typography variant="h1" fontSize={"42px"} color={"#202020"}>
            Apple iPhone X 64 ГБ
          </Typography>
          <Typography
            variant="h1"
            fontSize={"16px"}
            color={"#909090"}
            marginTop={"20px"}
          >
            Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
            который удобно лежит в руке и потрясающие выглядит, — это и есть
            iPhone X.
          </Typography>
        </Box>
        <Box>
          <CardMedia
            sx={{ width: "auto" }}
            component="img"
            image="../../img/892 1.png"
            alt="green iguana"
          />
        </Box>
        <Box>
          <Typography
            variant="h1"
            fontSize={"42px"}
            color={"#ED3729"}
            fontWeight={"900"}
          >
            1 300 900 Сум
          </Typography>
          <Typography
            variant="h1"
            fontSize={"20px"}
            color={"#909090"}
            margin={"20px 0"}
            sx={{ textDecoration: "line-through" }}
          >
            2 220 900 Сум
          </Typography>
          <Button
            sx={{
              "&:hover": { borderColor: "#ED3729" },
              borderColor: "#ED3729",
              color: "#ED3729",
              fontSize: "16px",
              padding: "12px 51px",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            Показать еще
          </Button>
        </Box>
      </Stack>
      <Cheaper />
      <Stack>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={'40px 0 30px 0'}
        >
          <Typography
            variant="h2"
            fontSize={"24px"}
            color={"#202020"}
            fontWeight={"60"}
          >
            Рекомендуем
          </Typography>
          <Typography variant="h2" fontSize={"16px"} color={"#909090"}>
            Посмотреть все →
          </Typography>
        </Box>
        <Stack flexDirection={"row"}>
          <Box>
            <img src="../../img/newHotRus 1.png" alt="" />
          </Box>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            marginLeft={'30px'}
          >
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/1.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    458 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    529 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Умные часы Haylou RT-LS05S
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/2.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    18 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    99 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Наушники Panasonic RP-HJE130E-R
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/3.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    9 530 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    10 520 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Iphone 13 pro 306 Gb
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/4.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    600 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    909 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Источник бесперебойного питания AVT 600 AVR (EA260)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/5.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    130 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    200 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Беспроводная мышь Logitech M220 SILENT
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
            <Card sx={{ width: "230px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/6.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    18 000 сум/мес
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    303 000 сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    Кард-ридер Earldom OT27
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Stack>
      <Brend/>
    </>
  );
};

export default Home;
