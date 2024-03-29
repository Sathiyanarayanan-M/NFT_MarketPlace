import * as React from "react";
import * as Mui from "@mui/material";
import * as Faker from "faker";
import * as ReactQuery from "react-query";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Pages from "src/app/pages";

export const Content = () => {
  const isDataFetching = ReactQuery.useIsFetching("getNFTs");
  const { setIsLoading } = React.useContext(Contexts.LoadingContext);
  const sampleArray = [...Array(10).keys()];
  const onSaleType = ["eth", "etc"];
  const ownerAddr = "0xfAE46f94Ee7B2Acb497CEcAFf6Cff17F621c693D";
  const contractAddrs = [
    "0x34d77a17038491a2a9eaa6e690b7c7cd39fc8392",
    "0x76be3b62873462d2142405439777e971754e8e77",
  ];

  const nftLists = Pages.Collections.Hooks.getNFTs({
    ownerAddr,
  });

  React.useEffect(() => {
    setIsLoading(!!isDataFetching);
  }, [isDataFetching]);

  return (
    <Mui.Box>
      <Mui.Grid container spacing={2}>
        {nftLists?.ownedNfts.map((item, index) => (
          <Mui.Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Components.NFTCard
              ownerName={Faker.name.findName()}
              price={Faker.datatype.number()}
              OnsaleIn={
                onSaleType[
                  Faker.datatype.number({ min: 0, max: onSaleType.length - 1 })
                ]
              }
              nfts={item}
            />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
