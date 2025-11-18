/*
    --text: #1f1805;
    --background: #fdfaed;
    --primary: #ddab22;
    --secondary: #adc4a7;
    --accent: #8bb191;
*/

import { createTheme } from "@shopify/restyle";

const palette = {
    text: '#1f1805',
    background: '#fdfaed',
    primary: '#ddab22',
    secondary: '#adc4a7',
    accent: '#8bb191',
};

const theme = createTheme({
  colors: {
    text: palette.text,
    background: palette.background,
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
      color: 'text',
    },
    header2: {
      fontWeight: "600",
      fontSize: 24,
      color: 'text',
    },
    header3: {
      fontWeight: "500",
      fontSize: 20,
      color: 'text',
    },
    body: {
      fontWeight: "350",
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    tabBar: {
      fontWeight: "700",
      fontSize: 12,
      color: 'text',
    },
    defaults: {
      // We can define a default text variant here.
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export default theme;
