import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";
import * as Layouts from "src/app/layouts";

export const Main = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Layouts.Master.Main />,
      children: [
        {
          index: true,
          element: <Pages.Home.Main />,
        },
        {
          path: "collections/*",
          element: <Pages.Collections.Route />,
        },
        {
          path: "assets/:contractAddress/:tokenId",
          element: <Pages.Assets.Main />,
        },
        {
          path: "*",
          element: <Components.PageNotFoundContainer />,
        },
      ],
    },
  ]);
