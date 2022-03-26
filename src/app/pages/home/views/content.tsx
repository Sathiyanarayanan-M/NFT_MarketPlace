import * as Mui from "@mui/material";
import * as Faker from "faker";
import * as Components from "src/app/components";

export const Content = () => {
  const sampleArray = Faker.datatype.array();
  const onSaleType = ["eth", "etc"];
  return (
    <Mui.Box>
      <Mui.Link>Explore Collections</Mui.Link>
    </Mui.Box>
  );
};
