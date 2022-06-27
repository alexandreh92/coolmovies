import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../store/slices/user";

interface UserWrapperProps {
  children: ReactNode;
}

export default function UserWrapper({ children }: UserWrapperProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.getUser());
  }, [dispatch]);

  return <>{children}</>;
}
