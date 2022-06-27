import { IconButton, styled } from "@mui/material";

export const HeaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;

  margin-bottom: 45px;
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 !important;

  & > svg {
    width: 60px;
    height: 60px;
  }
`;
