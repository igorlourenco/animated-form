import {theme} from "@chakra-ui/core";

const customTheme = {
    ...theme,
    fonts: {
        body: "Lato, system-ui, sans-serif",
        heading: "Lato, system-ui, sans-serif",
        mono: "Menlo, monospace"
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: "300",
        medium: "400",
        bold: "700"
    },
    radii: {
        ...theme.radii,
        sm: "5px",
        md: "8x"
    },
    fontSizes: {
        ...theme.fontSizes,
        "6xl": "54x"
    },
}

export default customTheme;