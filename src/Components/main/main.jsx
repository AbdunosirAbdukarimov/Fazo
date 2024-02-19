import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Main = () => {
  return (
    <Stack marginTop={"60px"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2" fontSize={"24px"} color={"#202020"} fontWeight={'600'}>
          Горящие предложения
        </Typography>
        <Typography variant="h2" fontSize={"16px"} color={"#909090"}>
          Посмотреть все →
        </Typography>
      </Box>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1.png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 373 000 сум |
                </span>{" "}
                1 304 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (8).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 529 000 сум |
                </span>{" "}
                350 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Умные часы Haylou <br /> RT-LS05S
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (1).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 529 000 сум |
                </span>{" "}
                1 350 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                TP-LINK TL-WR940N 450M (черный)
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (2).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 529 000 сум |
                </span>{" "}
                350 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Умные часы Haylou <br />
                RT-LS05S
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (7).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 529 000 сум |
                </span>{" "}
                350 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Клавиатура 2E <br />
                Gaming KG330
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (3).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  159 000 сум |
                </span>{" "}
                79 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Наушники Panasonic RP-HJE125E-R
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (4).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  1 529 000 сум |
                </span>{" "}
                350 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Телефон TECNO POP 4 BC2c 2/32GB Ice Lake Green
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
        <Card sx={{ width: "22%", margin: "20px 20px 20px 0px" }}>
          <CardActionArea>
            <img
              src="../../img/lWGeSFc0Y6jBoVxA4hQw-home_default 1 (5).png"
              alt=""
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <CardContent>
              <Typography
                margin={"10px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"18px"}
                color={"#ED3729"}
                fontWeight={"600"}
                textAlign={"center"}
                variant="h5"
                component="div"
              >
                <span
                  style={{
                    marginRight: "10px",
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  350 000 сум |
                </span>{" "}
                200 000 сум
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"700"}
                color={"black"}
              >
                Motorola <br />
                Smartwatch
              </Typography>
              <Typography
                margin={"10px 0"}
                variant="h5"
                color={"#909090"}
                fontSize={"15px"}
                textAlign={"center"}
              >
                Предложение заканчивается через:
                <Stack
                  margin={"10px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      27
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ДНЕЙ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      21
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      ЧАСОВ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      32
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      МИНУТ
                    </Typography>
                  </Stack>
                  |
                  <Stack margin={"5px 10px"}>
                    <Typography variant="h3" fontSize={"16px"}>
                      05
                    </Typography>
                    <Typography variant="h5" fontSize={"8px"}>
                      СЕКУНД
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            fontSize={"25px"}
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
  );
};

export default Main;
