import { extendTheme } from "@chakra-ui/react";
import { Mode } from "../types/mode";

import { dark, light } from "./Mode";

const styles = {
    global: {
        "body": {
            background: "base.background",
            lineHeight: "tall",
        },
        "a": {
            color: "base.primary",
        },
    },
}

// Override accessibility shadows and focus elements provided by Chakra UI
const shadows = {
    outline: "0 !important",
    toggle: '0 0 0 3px rgba(248,189,0,1)' // Primary Color
}

export const chakraDark = extendTheme({
    colors: {
        base: {
            primary: dark.primary,
            text: dark.text,
            background: dark.background,
            grey: dark.grey,
        }
    },
    shadows,
    styles,
});

export const chakraLight = extendTheme({
    colors: {
        base: {
            primary: light.primary,
            text: light.text,
            background: light.background,
            grey: light.grey,
        }
    },
    shadows,
    styles,
});

export const getChakraTheme = (mode: Mode) => {
    return mode.type === "light" ? chakraLight : chakraDark;
};