import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => {
  return {
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          size: "small",
          disableRipple: true,
          disableFocusRipple: true,
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: "10px",
            textTransform: 'capitalize',
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            borderRadius: "10px",
          }
        }
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        }
      },
    }
  };
}