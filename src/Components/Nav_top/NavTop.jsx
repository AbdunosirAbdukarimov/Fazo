import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Stack } from "@mui/system";
import { List, MenuItem, Select, Typography } from "@mui/material";


const NavTop = () => {
  return (
    <Stack width={"100%"} bgcolor={"#ED3729"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} padding={"13px"} color={"white"} >
      <Typography fontWeight={"400"} variant="h6" display={"flex"} alignItems={"center"} fontSize={"14px"}><LocationOnIcon/>Toshkent</Typography>
      <List sx={{display:"flex",justifyContent:"center", fontWeight:"400", alignItems:"center", fontSize:"14px",gap:"30px", margin: "0 60px"}}>
        <li>Наши магазины</li>
        <li>B2B продажи</li>
        <li>Покупка в рассрочку</li>
        <li>Способы оплаты</li>
        <li>Гарантия на товары</li>
      </List>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Typography fontWeight={"400"} variant="h6" display={"flex"} alignItems={"center"} fontSize={"18px"}><CallIcon/>+998 95 123 55 88</Typography>
          <Select sx={{color:"white", marginLeft:"20px","& fieldset": { border: 'none' },}} defaultValue={10}>
            <MenuItem value={10}>Рус</MenuItem>
            <MenuItem value={20}>Узб</MenuItem>
          </Select>
      </Stack>
    </Stack>
  )
}

export default NavTop