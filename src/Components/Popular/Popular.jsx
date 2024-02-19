import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

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

      <Stack flexDirection={"row"}>
        <Card sx={{ width: "32%", margin: "0 30px 0 0" }}>
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
        <Card sx={{ width: "32%", margin: "0 30px 0 0" }}>
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
        <Card sx={{ width: "32%", margin: "0 30px 0 0" }}>
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
      </Stack>
    </>
  );
};

export default Popular;
