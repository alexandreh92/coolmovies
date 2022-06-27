import React, {
  forwardRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import Modal, { ModalHandles } from "../Modal";

import { RatingContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { MovieActions } from "../../store/slices/movies";
import { ReviewActions, NewReviewType } from "../../store/slices/reviews";
import useUser from "../../hooks/useUser";

interface CreateModalReview {
  onClose: () => void;
}

const initialState = {
  title: "",
  body: "",
  rating: 0,
  movieId: "",
};

const CreateReviewModal = forwardRef<ModalHandles, CreateModalReview>(
  ({ onClose }, ref) => {
    const dispatch = useDispatch();

    const user = useUser();

    const [newReview, setNewReview] =
      useState<Omit<NewReviewType, "userReviewerId">>(initialState);

    const { data: movies } = useSelector((state) => state.movie);

    useEffect(() => {
      dispatch(MovieActions.getMovies());
    }, [dispatch]);

    const handleOnChange = useCallback(({ target: { value, id } }) => {
      setNewReview((oldState) => ({ ...oldState, [id]: value }));
    }, []);

    const handleOnSelectChange = useCallback(({ target: { value } }) => {
      setNewReview((oldState) => ({ ...oldState, movieId: value }));
    }, []);

    const handleRatingChange = useCallback(
      (_: SyntheticEvent<Element, Event>, value: number | null) => {
        setNewReview((oldState) => ({ ...oldState, rating: value }));
      },
      []
    );

    const handleClose = useCallback(() => {
      setNewReview(initialState);
      onClose();
    }, [onClose]);

    const handleOnSubmit = useCallback(() => {
      dispatch(
        ReviewActions.createReview({ ...newReview, userReviewerId: user.id })
      );
      handleClose();
    }, [dispatch, newReview, user, handleClose]);

    return (
      <Modal ref={ref}>
        <DialogTitle>Create a new Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a movie and write a review for it
          </DialogContentText>
          <FormControl fullWidth sx={{ marginTop: 3 }}>
            <InputLabel id="create-new-movie">Movie</InputLabel>
            <Select
              labelId="create-new-movie"
              id="movieId"
              value={newReview.movieId}
              label="Movie"
              onChange={handleOnSelectChange}
            >
              {movies.map((movie) => (
                <MenuItem key={movie.id} value={movie.id}>
                  {movie.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <RatingContainer>
            <Typography variant="body2" marginY={2} marginRight={1}>
              Rating:
            </Typography>
            <Rating
              id="rating"
              size="small"
              value={newReview.rating}
              onChange={handleRatingChange}
            />
          </RatingContainer>
          <TextField
            sx={{ marginY: 3 }}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            required
            type="text"
            fullWidth
            variant="standard"
            value={newReview.title}
            onChange={handleOnChange}
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
            value={newReview.body}
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOnSubmit}>Save</Button>
        </DialogActions>
      </Modal>
    );
  }
);

CreateReviewModal.displayName = "CreateReviewModal";

export default CreateReviewModal;
