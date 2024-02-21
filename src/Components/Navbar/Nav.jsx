import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import { FiUser } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";



const Nav = () => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} padding={"20px"} justifyContent={"space-between"}>
      <Box>
        <img src="../../img/Logo.png" alt="" />
      </Box>
      <Stack flexDirection={"row"} sx={{border:"2px solid #ED3729", borderRadius:"7px"}} alignItems={"center"} width={"48%"} justifyContent={"space-between"} position={"relative"}>
          <Select sx={{color:"#202020", "& fieldset": { border: 'none' }, textOverflow:'ellipsis',overflow:'hidden',width:'26%'}} defaultValue={10}>
            <MenuItem value={10}>Все категории</MenuItem>
            <MenuItem value={20}>Телефоны, планшеты</MenuItem>
            <MenuItem value={30}>Ноутбуки</MenuItem>
            <MenuItem value={40}>Сетевое оборудование</MenuItem>
            <MenuItem value={50}>Видеонаблюдение</MenuItem>
            <MenuItem value={60}>Компьютеры</MenuItem>
            <MenuItem value={70}>Техника для офиса</MenuItem>
          </Select>
          <TextField placeholder='Телефоны и бытовая' variant="outlined" sx={{"& fieldset": { border: 'none' }, width:"56%"}}/>
          <MicNoneIcon sx={{position:"absolute", right:"21%",color:"#BDBDBD"}}/>
          <Button  sx={{"&:hover": { backgroundColor: "#ED3729" }, bgcolor:"#ED3729", color:"white", display:'flex', justifyContent:"space-between", padding:"16px 15px", borderStartStartRadius:0, borderBottomLeftRadius:0,}}><SearchIcon sx={{marginRight:"10px"}}/> Поиск</Button>
      </Stack>
      <Stack flexDirection={"row"}>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6'fontSize={"25px"} margin={"0 10px"}>
            <FiUser/>
            <Typography variant='h6' fontSize={"14px"}>Войти</Typography>
         </Typography>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6'fontSize={"25px"} margin={"0 10px"}>
            <PiScales />
            <Typography variant='h6' fontSize={"14px"}>Сравнение</Typography>
         </Typography>
         <Typography  display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6' fontSize={"25px"} margin={"0 10px"}>
           <FaRegHeart/>
           <Typography variant='h6' fontSize={"14px"}>Избранное</Typography>  
         </Typography>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"}  variant='h6' fontSize={"25px"} margin={"0 10px"}>
            <LuShoppingCart/>   
            <Typography variant='h6' fontSize={"14px"}>Корзина</Typography>
         </Typography>
      </Stack>
    </Stack>  
  )
}

export default Nav

