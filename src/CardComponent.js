import * as React from "react";
import userimg from './img/user-icon.png';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function CardComponent({user}) {


  return (
    <Card sx={{ maxWidth: 250 , margin : 2 , }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#7289da" }} >
            {user.id}
          </Avatar>
        }
        
        title={user.name}
        subheader="September 14, 2023"
      />
   
      <CardContent>
        <Typography variant="body2">
        my name is {user.username} and my Email is {user.email} <br /> i live in {user.address.city} <br /> and this is my phone number {user.phone}
        <br /> now i work at {user.company.name} you can check my website <h3>{user.website}</h3>
        </Typography>
      </CardContent>
    </Card>
  );
}
