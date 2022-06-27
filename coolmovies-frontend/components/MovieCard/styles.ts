import { styled } from "@mui/material";

import { Card as MUICard } from "@mui/material";

export const Card = styled(MUICard)`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled("img")`
  object-fit: cover;

  height: 340px;
`;

export const UserInfo = styled("div")`
  display: flex;
  align-items: center;
`;

export const Info = styled("div")`
  margin-left: 10px;
`;
