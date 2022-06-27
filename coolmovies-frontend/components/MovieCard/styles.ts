import { styled } from "@mui/material";

import { Card as MUICard } from "@mui/material";

export const Wrapper = styled("article")`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const Card = styled(MUICard)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageContainer = styled("div")`
  position: relative;
  display: flex;
`;

export const Image = styled("img")`
  object-fit: cover;

  height: 340px;
  width: 100%;
`;

export const ImageOverlay = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8) 100%);

  width: 100%;
  height: 100%;
`;

export const DescriptionContainer = styled("div")`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  background: #fff;
`;

export const MovieName = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  margin-bottom: 20px;
  margin-left: 20px;
`;

export const UserInfo = styled("div")`
  display: flex;
  align-items: center;
`;

export const Info = styled("div")`
  margin-left: 10px;
`;
