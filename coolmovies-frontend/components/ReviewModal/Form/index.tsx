import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  RatingProps,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useCallback, useState } from "react";

import useReview from "../../../hooks/useReview";

import { RatingContainer } from "./styles";

export type EditedReview = {
  title?: string;
  body?: string;
  rating?: number;
};

interface FormProps {
  reviewId: string;
  onCancel: () => void;
  onSave: (editedReview: EditedReview) => void;
}

export default function Form({ reviewId, onCancel, onSave }: FormProps) {
  const review = useReview(reviewId);

  const [editedReview, setEditedReview] = useState({
    title: review?.title,
    body: review?.body,
    rating: review?.rating,
  });

  const handleOnRatingChange = (
    _: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    if (!value) return;
    setEditedReview((oldState) => ({ ...oldState, rating: value }));
  };

  const handleOnTextChange = useCallback(({ target: { id, value } }) => {
    setEditedReview((oldState) => ({ ...oldState, [id]: value }));
  }, []);

  const handleOnSave = useCallback(() => {
    onSave(editedReview);
  }, [editedReview, onSave]);

  return (
    <>
      <DialogTitle>Editing Review</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit the review as desired.</DialogContentText>
        <RatingContainer>
          <Typography variant="body2" marginY={2} marginRight={1}>
            Rating:
          </Typography>
          <Rating
            id="rating"
            size="small"
            value={editedReview.rating}
            onChange={handleOnRatingChange}
          />
        </RatingContainer>
        <TextField
          sx={{ marginBottom: 3 }}
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          required
          type="text"
          fullWidth
          variant="standard"
          value={editedReview.title}
          onChange={handleOnTextChange}
        />
        <TextField
          multiline
          minRows={4}
          margin="dense"
          id="body"
          required
          label="Body"
          type="text"
          fullWidth
          variant="standard"
          value={editedReview.body}
          onChange={handleOnTextChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleOnSave}>Save</Button>
      </DialogActions>
    </>
  );
}
