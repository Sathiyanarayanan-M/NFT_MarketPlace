import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const PasswordField = (props: Mui.TextFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Mui.TextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <Mui.InputAdornment position="end">
            <Mui.IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <MuiIcons.VisibilityOutlined color="primary" />
              ) : (
                <MuiIcons.VisibilityOffOutlined color="primary" />
              )}
            </Mui.IconButton>
          </Mui.InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
