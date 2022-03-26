import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";

export const CollectionsCard = (props: CollectionCardProps) => {
  const navigate = Router.useNavigate();
  const handleCollectionClick = () => {
    navigate(`/collections/${props.id}`);
  };

  const handleUserLinkClick = () => console.log("handleUserLinkClick");
  return (
    <Mui.Card
      sx={{ borderRadius: 3, cursor: "pointer" }}
      elevation={10}
      onClick={handleCollectionClick}
    >
      <Mui.CardMedia component="img" height="140" image={props.banner} />
      <Mui.Stack alignItems="center" marginTop={-2.5}>
        <Mui.Avatar
          src={props.avatar}
          sx={{
            height: 50,
            width: 50,
            padding: 1,
            background: (theme) => theme.palette.background.paper,
          }}
          onClick={handleCollectionClick}
        />
      </Mui.Stack>
      <Mui.CardContent>
        <Mui.Typography
          variant="h5"
          sx={{ textTransform: "capitalize" }}
          textAlign="center"
        >
          {props.title}
        </Mui.Typography>
        <Mui.Typography
          gutterBottom
          variant="subtitle1"
          color={Mui.colors.grey[500]}
          textAlign="center"
        >
          by
          <Mui.Link
            underline="hover"
            onClick={(e) => {
              e.stopPropagation();
              handleUserLinkClick();
            }}
            variant="subtitle1"
            sx={{ paddingLeft: 1, zIndex: 1000 }}
          >
            {props.author}
          </Mui.Link>
        </Mui.Typography>
        <Mui.Typography
          variant="body2"
          color={Mui.colors.grey[600]}
          textAlign="center"
        >
          {props.description}
        </Mui.Typography>
      </Mui.CardContent>
    </Mui.Card>
  );
};

export interface CollectionCardProps {
  id: string;
  banner: string;
  avatar: string;
  title: string;
  author: string;
  description: string;
}
