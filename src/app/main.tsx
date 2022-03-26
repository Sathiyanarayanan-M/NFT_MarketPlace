import * as Themes from "src/themes";
import * as Routes from "src/app/routes";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Providers from "src/app/providers";

export const Main = () => {
  return (
    <Themes.Main>
      <Providers.Main>
        <Contexts.Main>
          <Router.BrowserRouter>
            <Routes.Main />
          </Router.BrowserRouter>
        </Contexts.Main>
      </Providers.Main>
    </Themes.Main>
  );
};
