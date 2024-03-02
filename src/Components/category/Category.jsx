import { Button, List, ListItem, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { AiOutlineBars } from "react-icons/ai";

const Category = () => {
  return (
    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Button
        sx={{
          "&:hover": { backgroundColor: "#ED3729" },
          bgcolor: "#ED3729",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px 15px",
          width: {xs:'100%',md:'35%',lg:'23%'}
        }}
      >
        <Typography marginRight={"20px"} fontSize={"24px"}>
          <AiOutlineBars />
        </Typography>
        <Typography fontSize={"14px"}>Категории</Typography>
      </Button>
      <List sx={{textWrap: 'nowrap', fontSize:'16px',display:{xs:'none',md:'flex'}, alignItems:'center',justifyContent:'space-between', gap:'15px', fontWeight:'600',overflowX:{md:'scroll',lg:'hidden'}}}>
        <li>Наши магазины</li>
        <li>Моноблоки</li>
        <li>Телефоны, планшеты</li>
        <li>Ноутбуки</li>
        <li>Комплектующие</li>
        <li>Сетевое оборудование</li>
        <li>Оргтехника</li>
      </List>
    </Stack>
  );
};

export default Category;
