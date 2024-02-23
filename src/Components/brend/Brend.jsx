import { Box, Card, CardActionArea, Stack, Typography } from '@mui/material'
import React from 'react'

const Brend = () => {
  return (
    <Stack>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={'40px 0 30px 0'}
        >
          <Typography
            variant="h2"
            fontSize={"24px"}
            color={"#202020"}
            fontWeight={"60"}
          >
            Рекомендуем
          </Typography>
          <Typography variant="h2" fontSize={"16px"} color={"#909090"}>
            ← →
          </Typography>
        </Box>
        <Stack flexDirection={'row'}>
          <Card sx={{width:'19%',margin:'0 15px'}}>
            <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'100px', border:'1px solid #E0E0E0'}}>
              <img src="../../img/Layer 48 copy 1.png" alt="" />
            </CardActionArea>
          </Card>
          <Card sx={{width:'19%',margin:'0 15px'}}>
            <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'100px', border:'1px solid #E0E0E0'}}>
              <img src="../../img/Layer 49 1.png" alt="" />
            </CardActionArea>
          </Card>
          <Card sx={{width:'19%',margin:'0 15px'}}>
            <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'100px', border:'1px solid #E0E0E0'}}>
              <img src="../../img/Layer 47 2.png" alt="" />
            </CardActionArea>
          </Card>
          <Card sx={{width:'19%',margin:'0 15px'}}>
            <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'100px', border:'1px solid #E0E0E0'}}>
              <img src="../../img/image 3.png" alt="" />
            </CardActionArea>
          </Card>
          <Card sx={{width:'19%',margin:'0 15px'}}>
            <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'100px', border:'1px solid #E0E0E0'}}>
              <img src="../../img/image 4.png" alt="" />
            </CardActionArea>
          </Card>
        </Stack>
    </Stack>
  )
}

export default Brend