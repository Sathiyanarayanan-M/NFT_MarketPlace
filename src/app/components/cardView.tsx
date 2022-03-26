import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";

export const NFTCard = (props: CardViewProps) => {
  const navigate = Router.useNavigate();
  const handleNFTClick = () => {
    navigate(`/assets/${props.contractAddress}/${props.tokenId}`);
  };
  const handleAuthorClick = () => {};

  return (
    <Mui.Card
      sx={{ borderRadius: 3, cursor: "pointer" }}
      elevation={10}
      onClick={handleNFTClick}
    >
      <Mui.CardMedia component="img" height="140" image={props.thumbnail} />
      <Mui.CardContent>
        <Mui.Link
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
            handleAuthorClick();
          }}
          color={Mui.colors.grey[500]}
        >
          {props.author}
        </Mui.Link>
        <Mui.Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {props.title}
        </Mui.Typography>
        <Mui.Typography
          variant="subtitle1"
          color={Mui.colors.grey[600]}
          lineHeight={1}
        >
          {props.description}
        </Mui.Typography>
      </Mui.CardContent>
      <Mui.CardActions disableSpacing>
        <Mui.Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          minWidth="100%"
        >
          <Mui.Button sx={{ height: 30 }}>Buy</Mui.Button>
          <Mui.Stack>
            <Mui.Typography variant="body2" color={Mui.colors.grey[600]}>
              Price
            </Mui.Typography>
            <Mui.Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <img
                src={`${Constants.Config.CoinImageURI}${props.OnsaleIn}.svg`}
                alt={props.OnsaleIn}
                width={19}
                height={19}
              />
              <Mui.Typography>{props.price}</Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.CardActions>
    </Mui.Card>
  );
};

export interface CardViewProps {
  contractAddress: string;
  tokenId: string;
  title: string;
  description: string;
  avatar: string;
  author: string;
  thumbnail: string;
  price: number;
  OnsaleIn: string;
}
