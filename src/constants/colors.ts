import * as React from "react";
import * as Contexts from "src/app/contexts";


export const Gradient = {
    darkBlue: (direction: Directions) => `linear-gradient(to ${direction}, rgb(45,51,63) 50%, rgb(70,73,74,0.6) 80%)`,
    coolSky: (direction: Directions) => `linear-gradient(to ${direction}, #00BCD4, #6dd5fa, #ffffff)`,
    nighthawk: (direction: Directions) => `linear-gradient(to ${direction}, #2980b9, #2c3e50)`,
    lawrencium: (direction: Directions) => `linear-gradient(to ${direction}, #0f0c29, #302b63, #311b92)`,
}

// export const mainBG = darkMode ? Gradient.lawrencium("top") : Gradient.coolSky("top");
// export const authBG = darkMode ? Gradient.nighthawk("right") : Gradient.coolSky("right");

export type Directions = 'right' | 'bottom' | 'left' | 'top';