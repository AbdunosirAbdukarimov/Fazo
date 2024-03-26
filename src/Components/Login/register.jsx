import {
  Box,
  Button,
  ClickAwayListener,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import React from "react";
import { useNavigate } from "react-router-dom";

const egister = () => {
  const navigate = useNavigate();

  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"15"}
      bgcolor={"white"}
      position={"fixed"}
      top={"0"}
      left={"0"}
    >
      <Stack
        width={"40%"}
        padding={"72px 130px"}
        boxShadow={"0px 0px 33px 4px rgba(34, 60, 80, 0.2)"}
        borderRadius={"5px"}
      >
        <Box display={"flex"} justifyContent={"center"} mb={5}>
          <img src="../../img/Logo.png" alt="img not fount" />
        </Box>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            fontSize={"18px"}
            color={"#333333"}
            mb={1}
          >
            <CgMail fontSize={"23px"} />
            Электронной почта
          </Typography>
          <TextField
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
              },
            }}
          />
        </Stack>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            fontSize={"18px"}
            color={"#333333"}
            mb={1}
          >
            <RiLockPasswordLine fontSize={"23px"} />
            Пароль
          </Typography>
          <TextField
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
              },
            }}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} mt={5}>
          <Button
            onClick={() => navigate(`/login`)}
            variant="contained"
            sx={{
              fontSize: "15px",
              height: "42px",
              "&:hover": { backgroundColor: "#E0E0E0", boxShadow: "none" },
              bgcolor: "#E0E0E0",
              boxShadow: "none",
              color: "#636363",
            }}
          >
            Войти
          </Button>
          <Button
            onClick={() => navigate(`/login`)}
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#ED3729", boxShadow: "none" },
              bgcolor: "#ED3729",
              boxShadow: "none",
            }}
          >
            зарегистрироваться
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default egister;
