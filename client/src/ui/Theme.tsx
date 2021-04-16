import { extendTheme } from "@chakra-ui/react";
import { Mode } from "../types/mode";

import { dark, light } from "./Mode";

export const chakraDark = extendTheme({
    colors: {
        brand: {
            100: dark.primary,
            200: dark.text,
            300: dark.background,
            400: dark.grey,
        }
    }
});

export const chakraLight = extendTheme({
    colors: {
        brand: {
            100: light.primary,
            200: light.text,
            300: light.background,
            400: light.grey,
        }
    }
});

export const getChakraTheme = (mode: Mode) => {
    return mode.type === "light" ? chakraLight : chakraDark;
};