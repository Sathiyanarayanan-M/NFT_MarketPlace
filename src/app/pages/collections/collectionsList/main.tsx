import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => {
  return (
    <Mui.Box>
      <Pages.Collections.CollectionsList.Views.Content />
    </Mui.Box>
  );
};
