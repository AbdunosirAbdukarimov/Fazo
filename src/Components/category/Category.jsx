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
          width: '23%'
        }}
      >
        <Typography marginRight={"20px"} fontSize={"24px"}>
          <AiOutlineBars />
        </Typography>
        <Typography fontSize={"14px"}>Категории</Typography>
      </Button>
      <List sx={{fontSize:'16px',display:'flex', alignItems:'center',justifyContent:'space-between', gap:'15px', fontWeight:'600',}}>
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
