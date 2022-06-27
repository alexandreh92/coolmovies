import { Dialog as MUIDialog, DialogProps } from "@mui/material";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

export interface ModalProps {
  children: React.ReactNode;
}

export type ModalHandles = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalHandles, ModalProps>(
  ({ children, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    const open = useCallback(() => {
      setVisible(true);
    }, []);

    const close = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [open, close]
    );

    if (visible) {
      return (
        <MUIDialog open={visible} {...props} fullWidth>
          {children}
        </MUIDialog>
      );
    }

    return null;
  }
);

Modal.displayName = "Modal";

export default Modal;
