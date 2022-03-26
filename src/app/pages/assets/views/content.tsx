import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Content = () => {
  const { contractAddress, tokenId } = Router.useParams();

  return (
    <Mui.Box>
      <Mui.Typography>Contract Address: {contractAddress}</Mui.Typography>
      <Mui.Typography>TokenId: {tokenId}</Mui.Typography>
    </Mui.Box>
  );
};
