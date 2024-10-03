import { createTheme } from "@mui/material";
import type { PaletteMode, Theme } from "@mui/material";
import { ColorPalette, themeConfig } from "./themeConfig";
import { muiComponentsProps } from "./muiComponents";

/**
 * Creates a custom MUI theme based on provided primary color, background color, and palette mode.
 */
export const createCustomTheme = (
  primaryColor: string,
  backgroundColor = "#232e58",
  mode: PaletteMode = "dark",
): Theme => {
  return createTheme({
    components: {
      ...muiComponentsProps,
    },
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: backgroundColor,
      },
      warning: {
        main: mode === "dark" ? ColorPalette.orange : ColorPalette.orangeDark,
      },
      error: {
        main: ColorPalette.red,
      },
      // background: {
      //   paper: mode === "dark" ? ColorPalette.darkMode : ColorPalette.lightMode,
      // },
      mode,
    },
  });
};

/**
 * List of available themes with their name and corresponding MUI theme object.
 */
export const Themes: { name: string; MuiTheme: Theme }[] = Object.entries(themeConfig).map(
  ([name, config]) => ({
    name: name as string,
    MuiTheme: createCustomTheme(config.primaryColor, config.secondaryColor),
  }),
);
