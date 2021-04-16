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

export const chakraDark = extendTheme({
    colors: {
        base: {
            primary: dark.primary,
            text: dark.text,
            background: dark.background,
            grey: dark.grey,
        }
    },
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
    styles,
});

export const getChakraTheme = (mode: Mode) => {
    return mode.type === "light" ? chakraLight : chakraDark;
};