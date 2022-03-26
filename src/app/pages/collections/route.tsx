import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Route = () =>
  Router.useRoutes([
    {
      index: true,
      element: <Pages.Collections.CollectionsList.Main />,
    },
    {
      path: ":colId",
      element: <Pages.Collections.NFTList.Main />,
    },
    {
      path: "*",
      element: <Components.PageNotFoundContainer />,
    },
  ]);
