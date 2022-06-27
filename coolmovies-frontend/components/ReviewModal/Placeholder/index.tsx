import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

import useReview from "../../../hooks/useReview";

import { InfoContainer } from "./styles";

interface PlaceholderProps {
  reviewId: string;
  onEdit: () => void;
  onCancel: () => void;
}

export default function Placeholder({
  reviewId,
  onEdit,
  onCancel,
}: PlaceholderProps) {
  const review = useReview(reviewId);

  return (
    <>
      <DialogTitle>{review?.title}</DialogTitle>
      <DialogContent>
        <Typography
          variant="body2"
          marginTop={2}
          fontWeight="bold"
          color="grey.400"
        >
          Movie: {review?.movieByMovieId.title}
        </Typography>
        <InfoContainer>
          <Typography
            variant="body2"
            marginTop={2}
            fontWeight="bold"
            color="grey.400"
            sx={{ marginTop: 0, marginRight: 0.5 }}
          >
            {review?.userByUserReviewerId.name} -
          </Typography>
          <Rating value={review?.rating} size="small" readOnly />
        </InfoContainer>
        <DialogContentText>{review?.body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onEdit}>Edit</Button>
      </DialogActions>
    </>
  );
}
