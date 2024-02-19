import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { Category, Cheaper, Main, Popular, Swiper } from "../Components";

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
        margin={'70px 0'}
      >
        <Box width={'37%'}>
          <Typography variant="h1" fontSize={"42px"} color={"#202020"}>
            Apple iPhone X 64 ГБ
          </Typography>
          <Typography variant="h5" fontSize={"16px"} color={"#909090"} marginTop={'20px'}>
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
          <Typography variant="h1" fontSize={"42px"} color={"#ED3729"} fontWeight={'900'}>
            1 250 900 Сум
          </Typography>
          <Typography
            variant="h5"
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
      <Cheaper/>
    </>
  );
};

export default Home;
