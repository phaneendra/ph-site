/* eslint-disable @typescript-eslint/no-var-requires */
// typescript typing not available for parseColor
const { parseColor } = require("tailwindcss/lib/util/color");
const plugin = require("tailwindcss/plugin");

const {
  indigo,
  red,
  yellow,
  gray,
  dark,
  white,
  cyan,
  blue,
  green,
  teal,
  violet,
  orange,
  black,
} = require("./open-colors.cjs");

/* Converts HEX color to RGB */
const toRGB = (value) => parseColor(value).color.join(" ");

module.exports = plugin(function ({ addBase }) {
  addBase({
    "[data-theme='light']": {
      "--color-primary-light": toRGB(indigo[800]) /* add alpha 0.2*/,
      "--color-primary-light-focus": toRGB(indigo[700]) /* add alpha 0.25*/,
      "--color-primary": toRGB(indigo[800]),
      "--color-primary-focus": toRGB(indigo[900]),
      "--color-primary-content": toRGB(indigo[200]),

      "--color-secondary-light": toRGB(red[700]) /* add alpha 0.2*/,
      "--color-secondary-light-focus": toRGB(red[600]) /* add alpha 0.25*/,
      "--color-secondary": toRGB(red[700]),
      "--color-secondary-focus": toRGB(red[800]),
      "--color-secondary-content": toRGB(red[200]),

      "--color-accent-light": toRGB(yellow[800]) /* add alpha 0.2*/,
      "--color-accent-light-focus": toRGB(yellow[700]) /* add alpha 0.25*/,
      "--color-accent": toRGB(yellow[800]),
      "--color-accent-focus": toRGB(yellow[900]),
      "--color-accent-content": toRGB(yellow[200]),

      "--color-default-light": toRGB(gray[800]) /* add alpha 0.2*/,
      "--color-default-light-focus": toRGB(gray[700]) /* add alpha 0.25*/,
      "--color-default": toRGB(gray[800]),
      "--color-default-focus": toRGB(gray[900]),
      "--color-default-content": toRGB(gray[200]),

      "--color-base-light-focus": toRGB(gray[300]) /* bg hover of light */,
      "--color-base-light": toRGB(
        gray[200]
      ) /* bg base of buttons and controls and inputs */,
      "--color-base-100": toRGB(gray[100]) /* bg base of panels, */,
      "--color-base-200": toRGB(white) /* bg base of body, */,
      "--color-base-300": toRGB(gray[100]) /* bg hover of default, */,
      "--color-base-content": toRGB(gray[800]) /* base text */,
      "--color-base-muted": toRGB(gray[600]) /* base text muted*/,
      "--color-base-heading": toRGB(black) /* heading text*/,

      /* Admonition colors */
      "--color-info": toRGB(cyan[800]),
      "--color-info-focus": toRGB(cyan[900]),
      "--color-info-light": toRGB(cyan[700]),
      "--color-info-content": toRGB(cyan[200]),

      "--color-success": toRGB(blue[800]),
      "--color-success-focus": toRGB(blue[900]),
      "--color-success-light": toRGB(blue[700]),
      "--color-success-content": toRGB(blue[200]),

      "--color-important": toRGB(blue[800]),
      "--color-important-focus": toRGB(blue[900]),
      "--color-important-light": toRGB(blue[700]),
      "--color-important-content": toRGB(blue[200]),

      "--color-warning": toRGB(orange[800]),
      "--color-warning-focus": toRGB(orange[900]),
      "--color-warning-light": toRGB(orange[700]),
      "--color-warning-content": toRGB(orange[200]),

      "--color-error": toRGB(red[800]),
      "--color-error-focus": toRGB(red[900]),
      "--color-error-light": toRGB(red[700]),
      "--color-error-content": toRGB(red[200]),

      "--color-tip": toRGB(green[800]),
      "--color-tip-focus": toRGB(green[900]),
      "--color-tip-light": toRGB(green[700]),
      "--color-tip-content": toRGB(green[200]),

      "--color-question": toRGB(teal[800]),
      "--color-question-focus": toRGB(teal[900]),
      "--color-question-light": toRGB(teal[700]),
      "--color-question-content": toRGB(teal[200]),

      "--color-quote": toRGB(teal[800]),
      "--color-quote-focus": toRGB(teal[900]),
      "--color-quote-light": toRGB(teal[700]),
      "--color-quote-content": toRGB(teal[200]),

      "--color-comment": toRGB(indigo[800]),
      "--color-comment-focus": toRGB(indigo[900]),
      "--color-comment-light": toRGB(indigo[700]),
      "--color-comment-content": toRGB(indigo[200]),

      "--color-docs": toRGB(violet[800]),
      "--color-docs-focus": toRGB(violet[900]),
      "--color-docs-light": toRGB(violet[700]),
      "--color-docs-content": toRGB(violet[200]),

      /* other variables */
      "--border-color": toRGB(gray[400]) /* default border color */,
      "--rounded-box": "1rem",
      "--rounded-btn": "0.5rem",
      "--rounded-badge": "1.9rem",
      "--animation-btn": "0.25s",
      "--animation-input": ".2s",
      "--btn-text-case": "uppercase",
      "--btn-focus-scale": "0.95",
      "--navbar-padding": ".5rem",
      "--border-btn": "1px",
      "--tab-border": "1px",
      "--tab-radius": "0.5rem",
    },

    "[data-theme='dark']": {
      "--color-primary-light": toRGB(indigo[800]) /* add alpha 0.2*/,
      "--color-primary-light-focus": toRGB(indigo[700]) /* add alpha 0.25*/,
      "--color-primary": toRGB(indigo[800]),
      "--color-primary-focus": toRGB(indigo[900]),
      "--color-primary-content": toRGB(indigo[200]),

      "--color-secondary-light": toRGB(red[700]) /* add alpha 0.2*/,
      "--color-secondary-light-focus": toRGB(red[600]) /* add alpha 0.25*/,
      "--color-secondary": toRGB(red[700]),
      "--color-secondary-focus": toRGB(red[800]),
      "--color-secondary-content": toRGB(red[200]),

      "--color-accent-light": toRGB(yellow[800]) /* add alpha 0.2*/,
      "--color-accent-light-focus": toRGB(yellow[700]) /* add alpha 0.25*/,
      "--color-accent": toRGB(yellow[800]),
      "--color-accent-focus": toRGB(yellow[900]),
      "--color-accent-content": toRGB(yellow[200]),

      "--color-default-light": toRGB(gray[800]) /* add alpha 0.2*/,
      "--color-default-light-focus": toRGB(gray[700]) /* add alpha 0.25*/,
      "--color-default": toRGB(gray[800]),
      "--color-default-focus": toRGB(gray[900]),
      "--color-default-content": toRGB(gray[200]),

      "--color-base-light-focus": toRGB(dark[500]) /* bg hover of light */,
      "--color-base-light": toRGB(
        dark[600]
      ) /* bg base of buttons controls inputs code */,
      "--color-base-100": toRGB(dark[700]) /* bg base of panels, */,
      "--color-base-200": toRGB(dark[800]) /* bg base of body, pre */,
      "--color-base-300": toRGB(dark[900]) /* bg hover of default, */,
      "--color-base-content": toRGB(dark[50]) /* base text */,
      "--color-base-muted": toRGB(dark[200]) /* base text muted*/,
      "--color-base-heading": toRGB(white) /* heading text*/,

      /* Admonition colors */
      "--color-info": toRGB(cyan[800]),
      "--color-info-focus": toRGB(cyan[900]),
      "--color-info-light": toRGB(cyan[700]),
      "--color-info-content": toRGB(cyan[200]),

      "--color-success": toRGB(blue[800]),
      "--color-success-focus": toRGB(blue[900]),
      "--color-success-light": toRGB(blue[700]),
      "--color-success-content": toRGB(blue[200]),

      "--color-important": toRGB(blue[800]),
      "--color-important-focus": toRGB(blue[900]),
      "--color-important-light": toRGB(blue[700]),
      "--color-important-content": toRGB(blue[200]),

      "--color-warning": toRGB(orange[800]),
      "--color-warning-focus": toRGB(orange[900]),
      "--color-warning-light": toRGB(orange[700]),
      "--color-warning-content": toRGB(orange[200]),

      "--color-error": toRGB(red[800]),
      "--color-error-focus": toRGB(red[900]),
      "--color-error-light": toRGB(red[700]),
      "--color-error-content": toRGB(red[200]),

      "--color-tip": toRGB(green[800]),
      "--color-tip-focus": toRGB(green[900]),
      "--color-tip-light": toRGB(green[700]),
      "--color-tip-content": toRGB(green[200]),

      "--color-question": toRGB(teal[800]),
      "--color-question-focus": toRGB(teal[900]),
      "--color-question-light": toRGB(teal[700]),
      "--color-question-content": toRGB(teal[200]),

      "--color-quote": toRGB(teal[800]),
      "--color-quote-focus": toRGB(teal[900]),
      "--color-quote-light": toRGB(teal[700]),
      "--color-quote-content": toRGB(teal[200]),

      "--color-comment": toRGB(indigo[800]),
      "--color-comment-focus": toRGB(indigo[900]),
      "--color-comment-light": toRGB(indigo[700]),
      "--color-comment-content": toRGB(indigo[200]),

      "--color-docs": toRGB(violet[800]),
      "--color-docs-focus": toRGB(violet[900]),
      "--color-docs-light": toRGB(violet[700]),
      "--color-docs-content": toRGB(violet[200]),

      /* other variables */
      "--border-color": toRGB(dark[400]) /* default border color */,
      "--rounded-box": "1rem",
      "--rounded-btn": "0.5rem",
      "--rounded-badge": "1.9rem",
      "--animation-btn": "0.25s",
      "--animation-input": ".2s",
      "--btn-text-case": "uppercase",
      "--btn-focus-scale": "0.95",
      "--navbar-padding": ".5rem",
      "--border-btn": "1px",
      "--tab-border": "1px",
      "--tab-radius": "0.5rem",
    },
  });
});
