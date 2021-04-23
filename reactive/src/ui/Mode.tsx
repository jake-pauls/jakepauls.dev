import { Mode } from "../types/mode";

import { lightning, white, black, grey } from "./Styles";

export const dark: Mode = {
    type: "dark",
    text: white,
    background: black,
    grey: grey,
    primary: lightning,
};

export const light: Mode = {
    type: "light",
    text: black,
    background: white,
    grey: grey,
    primary: lightning,
};