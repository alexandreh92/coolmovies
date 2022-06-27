import {
  Avatar,
  Button,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { Card, ImageContainer, Info, UserInfo } from "./styles";

export default function MovieCard({ imgUrl }) {
  return (
    <Card>
      <ImageContainer src={imgUrl} />
      <CardContent>
        <UserInfo>
          <Avatar src="https://avatars.dicebear.com/api/initials/alexandre.svg" />
          <Info>
            <Typography
              variant="body2"
              component="h2"
              fontWeight="500"
              marginBottom={0.5}
            >
              h1. Heading
            </Typography>
            <Rating name="read-only" value={5} readOnly size="small" />
          </Info>
        </UserInfo>
        <Typography
          variant="body1"
          component="h3"
          marginTop={2}
          fontWeight="bold"
        >
          h1. Heading
        </Typography>
        <Typography
          variant="body2"
          component="h3"
          marginTop={1}
          fontWeight="lighter"
          color="grey.500"
        >
          h1. Heading
        </Typography>
      </CardContent>
      <Divider />

      <Button variant="text">Show Review</Button>
    </Card>
  );
}
