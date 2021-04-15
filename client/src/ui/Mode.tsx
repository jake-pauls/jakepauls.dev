import { Mode } from "./mode";

const lightning = "#F8BD00";
const white = "#EDEDED";
const black = "#151515";
const grey = "#A1A1A1";

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