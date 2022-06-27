import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { forwardRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import useReview from "../../hooks/useReview";
import { ReviewActions } from "../../store/slices/reviews";

import Modal, { ModalHandles, ModalProps } from "../Modal";
import Form, { EditedReview } from "./Form";
import Placeholder from "./Placeholder";

import { ModalContent } from "./styles";

interface ReviewModalProps extends Omit<ModalProps, "children"> {
  reviewId: string;
  onClose: () => void;
}

const ReviewModal = forwardRef<ModalHandles, ReviewModalProps>(
  ({ reviewId, onClose }, ref) => {
    const review = useReview(reviewId);

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

    const handleOnClose = useCallback(() => {
      setEditMode(false);
      onClose();
    }, [onClose]);

    const handleOnEdit = useCallback(() => {
      setEditMode(true);
    }, []);

    const handleOnSave = (editedReview: EditedReview) => {
      dispatch(
        ReviewActions.updateReview({
          ...editedReview,
          id: review?.id,
          movieId: review?.movieByMovieId.id,
        })
      );
      handleOnClose();
    };

    return (
      <Modal ref={ref}>
        {editMode ? (
          <Form
            reviewId={reviewId}
            onSave={handleOnSave}
            onCancel={handleOnClose}
          />
        ) : (
          <Placeholder
            reviewId={reviewId}
            onEdit={handleOnEdit}
            onCancel={handleOnClose}
          />
        )}
      </Modal>
    );
  }
);

ReviewModal.displayName = "ReviewModal";

export default ReviewModal;
