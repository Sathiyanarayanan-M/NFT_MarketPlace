import * as Mui from "@mui/material";

export const Palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
    palette: {
        primary: {
            main: "#1d41a4",
        },
        info: {
            main: "#1d41a4",
        },
        // background: {
        //     paper: "green",
        // },
        text: {
            primary: "rgb(45,51,63)",
        }
    },
});