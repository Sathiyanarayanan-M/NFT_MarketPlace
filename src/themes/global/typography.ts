import type * as Mui from "@mui/material";

export const Typography = (): Pick<Mui.ThemeOptions, "typography"> => {
  return {
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  };
};