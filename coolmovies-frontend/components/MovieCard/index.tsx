import {
  Avatar,
  Button,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { useRef } from "react";

import { ModalHandles } from "../Modal";
import ReviewModal from "../ReviewModal";

import {
  Card,
  ImageContainer,
  Image,
  ImageOverlay,
  Info,
  UserInfo,
  MovieName,
  DescriptionContainer,
} from "./styles";

interface MovieCardProps {
  reviewId: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  movieName: string;
  imgUrl: string;
}

export default function MovieCard({
  reviewId,
  name,
  title,
  description,
  rating,
  movieName,
  imgUrl,
}: MovieCardProps) {
  const modalRef = useRef<ModalHandles>(null);

  return (
    <Card raised sx={{ height: "100%" }}>
      <ImageContainer>
        <Image src={imgUrl} alt={movieName} />
        <ImageOverlay />
        <MovieName>
          <Typography
            variant="body1"
            component="h3"
            color="grey.50"
            marginTop={2}
            fontWeight="bold"
          >
            {movieName}
          </Typography>
        </MovieName>
      </ImageContainer>
      <CardContent>
        <UserInfo>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
          />
          <Info>
            <Typography
              variant="body2"
              component="h2"
              fontWeight="500"
              marginBottom={0.5}
            >
              {name}
            </Typography>
            <Rating name="read-only" value={rating} readOnly size="small" />
          </Info>
        </UserInfo>
        <Typography
          variant="body1"
          component="h3"
          marginTop={2}
          fontWeight="bold"
        >
          {title}
        </Typography>
        <DescriptionContainer>
          <Typography
            variant="body2"
            component="h3"
            marginTop={1}
            fontWeight="lighter"
            color="grey.500"
          >
            {description}
          </Typography>
        </DescriptionContainer>
      </CardContent>
      <Divider />
      <Button variant="text" onClick={() => modalRef.current?.open()}>
        Show Review
      </Button>
      <ReviewModal
        reviewId={reviewId}
        ref={modalRef}
        onClose={() => modalRef.current?.close()}
      />
    </Card>
  );
}
