import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import { FiUser } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} padding={"20px"} justifyContent={"space-between"}>
      <Box marginRight={'20px'} sx={{ display:{xs:'none',lg:'flex'}}}>
        <img src="../../img/Logo.png" alt="" />
      </Box>
        <Button sx={{ display:{xs:'flex',lg:'none'} , "&:hover": { backgroundColor: "#ED3729" }, bgcolor:"#ED3729", color:"white", justifyContent:"center", padding:"16px 0",fontSize:'25px', marginRight:'20px', borderRadius:'10px'}}><FaBars/></Button>
      <Stack flexDirection={"row"} sx={{width:{xs:'85%', md:'80%', lg:'57%'}, border:"2px solid #ED3729", borderRadius:"7px"}} alignItems={"center"} justifyContent={"space-between"} position={"relative"}>
          <Select sx={{display:{xs:'none', md:'flex'}, color:"#202020", "& fieldset": { border: 'none' }, textOverflow:'ellipsis',overflow:'hidden',width:'26%', }} defaultValue={10}>
            <MenuItem value={10}>Все категории</MenuItem>
            <MenuItem value={20}>Телефоны, планшеты</MenuItem>
            <MenuItem value={30}>Ноутбуки</MenuItem>
            <MenuItem value={40}>Сетевое оборудование</MenuItem>
            <MenuItem value={50}>Видеонаблюдение</MenuItem>
            <MenuItem value={60}>Компьютеры</MenuItem>
            <MenuItem value={70}>Техника для офиса</MenuItem>
          </Select>
          <TextField placeholder='Телефоны и бытовая' variant="outlined" sx={{"& fieldset": { border: 'none' }, width:{xs:'85%',md:'50%'}, left:{sx:'0',md:'-20px'}}}/>
          <MicNoneIcon sx={{display:{xs:'none', md:'flex'} ,color:"#BDBDBD"}}/>
          <Button  sx={{  display:{xs:'none',md:'flex'},"&:hover": { backgroundColor: "#ED3729" }, bgcolor:"#ED3729", color:"white", justifyContent:"space-between", padding:"16px 15px", borderStartStartRadius:0, borderBottomLeftRadius:0,}}><SearchIcon sx={{marginRight:"10px"}}/> Поиск</Button>
          <Button  sx={{ display:{xs:'flex',md:'none'} , "&:hover": { backgroundColor: "#ED3729" }, bgcolor:"#ED3729", color:"white", justifyContent:"center", padding:"16px", borderStartStartRadius:0, borderBottomLeftRadius:0,}}><SearchIcon/></Button>
      </Stack>
      <Stack sx={{display:{xs:'none', lg:'flex'}}} flexDirection={"row"}>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6'fontSize={"25px"} margin={"0 10px"}>
            <Link style={{height:'30px',color:'#202020'}} to={'/'}>
            <FiUser/>
            </Link>
            <Typography variant='h6' fontSize={"14px"}>Войти</Typography>
         </Typography>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6'fontSize={"25px"} margin={"0 10px"}>
            <Link style={{height:'30px',color:'#202020'}} to={'/'}>
            <PiScales />
            </Link>
            <Typography variant='h6' fontSize={"14px"}>Сравнение</Typography>
         </Typography>
         <Typography  display={"flex"}alignItems={"center"} flexDirection={"column"} variant='h6' fontSize={"25px"} margin={"0 10px"}>
           <Link style={{height:'33px',color:'#202020'}} to={'/favourites'}>
            <FaRegHeart/>
           </Link>
            <Typography variant='h1' fontSize={"14px"}>Избранное</Typography>  
         </Typography>
         <Typography display={"flex"}alignItems={"center"} flexDirection={"column"}  variant='h6' fontSize={"25px"} margin={"0 10px"}>
            <Link style={{height:'30px',color:'#202020'}} to={'/'}>
              <LuShoppingCart/>   
            </Link>
            <Typography variant='h6' fontSize={"14px"}>Корзина</Typography>
         </Typography>
      </Stack>
    </Stack>  
  )
}

export default Nav