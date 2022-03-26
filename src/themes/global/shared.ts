import * as Mui from "@mui/material";
import * as Themes from "src/themes";

export const Shared = (): Mui.ThemeOptions => {
  const components = Themes.Global.Components();
  const typography = Themes.Global.Typography();
  const palette = Themes.Global.Palette();

  return {
    ...components,
    ...typography,
    ...palette,
  };
};
