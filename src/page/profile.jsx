import { Box, Button, Fab, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FiCreditCard } from "react-icons/fi";

const Profile = () => {
  return (
    <Stack>
      <Typography
        variant="h1"
        fontSize={"14px"}
        color={"#626364"}
        margin={"20px 0"}
      >
        Главная › Личный кобинет
      </Typography>
      <Stack flexDirection={'row'}>
        <Stack width={'360px'} borderRight={'1px solid #f2f2f2'} marginRight={'30px'}>
          <Box padding={"20px 0"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <FiUser />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
              >
                Shukurillo Tojonazarov +998 99 0333848
              </Typography>
            </Stack>
          </Box>
          <Box padding={"20px 0"} borderTop={"1px solid #f2f2f2"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <LuShoppingCart />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
              >
                Мои рассрочки
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <IoDocumentSharp />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
              >
                История платежей
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <MdOutlineAccessTime />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
              >
                Онлайн заказы
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <CiLogout />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
              >
                Выйти
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack width={'550px'}>
          <Box border={'1px solid #f2f2f2'} borderRadius={'4px'} marginBottom={'30px'}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={'space-between'}
              borderBottom={'1px solid #f2f2f2'}
              padding={'15px'}
            >
              <Stack flexDirection={'row'} alignItems={"center"} justifyContent={'space-between'}>
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <FiUser />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                fontWeight={'600'}
              >
                Личные данные
              </Typography>
              </Stack>
              <Button
              variant="outlined"
              sx={{
                width: "25%",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#ED3729",
                },
                color: "#ED3729",
                borderColor: "#ED3729",
                margin: "20px 0",
              }}
            >
              Изменит
            </Button>
            </Stack>
            <Stack padding={'20px'}>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'} fontWeight={'600'}>
              Shukurillo Tojinazarov
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#626364'} margin={'15px 0'}>
              Телефон: +998 99 0333848
              </Typography>
            </Stack>
          </Box>
          <Box border={'1px solid #f2f2f2'} borderRadius={'4px'}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={'space-between'}
              borderBottom={'1px solid #f2f2f2'}
              padding={'15px'}
            >
              <Stack flexDirection={'row'} alignItems={"center"} justifyContent={'space-between'}>
              <Fab
                disabled
                sx={{ fontSize: "22px", color: "#909090", bgcolor: "#F7F7F7" }}
              >
                <FiCreditCard />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                fontWeight={'600'}
              >
                Моя карта
              </Typography>
              </Stack>
            </Stack>
            <Stack padding={'20px'}>
              <Typography variant="h1" fontSize={'14px'} color={'#626364'} margin={'15px 0'}>
              Отсутствует
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
