import * as Mui from "@mui/material";
import * as Faker from "faker";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";

export const Content = () => {
  const sampleArray = [...Array(10).keys()];
  const onSaleType = ["eth", "etc"];
  const contractAddr = "0x61fce80d72363b731425c3a2a46a1a5fed9814b2";
  const nftCollections = Pages.Collections.Hooks.getNFTCollections({
    contractAddr,
  });
  return (
    <Mui.Box>
      <Mui.Grid container spacing={2}>
        {sampleArray.map((item) => (
          <Mui.Grid item xs={12} sm={6} md={4} lg={3} key={item}>
            <Components.CollectionsCard
              banner={Faker.image.nature()}
              title={Faker.lorem.words(2)}
              id={Faker.datatype.uuid()}
              author={Faker.name.findName()}
              description={Faker.lorem.sentence()}
              avatar={`https://avatars.dicebear.com/api/bottts/:${Faker.name.findName()}.svg`}
            />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
