// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./src/styles/open-colors.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./data/**/*.mdx"],
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: colors.white,
        black: colors.black,
        dark: colors.dark,
        gray: colors.gray,
        red: colors.red,
        pink: colors.pink,
        grape: colors.grape,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        cyan: colors.cyan,
        teal: colors.teal,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        orange: colors.orange,

        "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
        "primary-light-focus":
          "rgb(var(--color-primary-light-focus) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",

        "secondary-light": "rgb(var(--color-secondary-light) / <alpha-value>)",
        "secondary-light-focus":
          "rgb(var(--color-secondary-light-focus) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-focus": "rgb(var(--color-secondary-focus) / <alpha-value>)",
        "secondary-content":
          "rgb(var(--color-secondary-content) / <alpha-value>)",

        "accent-light": "rgb(var(--color-accent-light) / <alpha-value>)",
        "accent-light-focus":
          "rgb(var(--color-accent-light-focus) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-focus": "rgb(var(--color-accent-focus) / <alpha-value>)",
        "accent-content": "rgb(var(--color-accent-content) / <alpha-value>)",

        "default-light": "rgb(var(--color-default-light) / <alpha-value>)",
        "default-light-focus":
          "rgb(var(--color-default-light-focus) / <alpha-value>)",
        default: "rgb(var(--color-default) / <alpha-value>)",
        "default-focus": "rgb(var(--color-default-focus) / <alpha-value>)",
        "default-content": "rgb(var(--color-default-content) / <alpha-value>)",

        "base-light-focus":
          "rgb(var(--color-base-light-focus) / <alpha-value>)",
        "base-light": "rgb(var(--color-base-light) / <alpha-value>)",
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-300": "rgb(var(--color-base-300) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
        "base-muted": "rgb(var(--color-base-muted) / <alpha-value>)",
        "base-heading": "rgb(var(--color-base-heading) / <alpha-value>)",

        // Admonition colors
        info: "rgb(var(--color-info) / <alpha-value>)",
        "info-focus": "rgb(var(--color-info-focus) / <alpha-value>)",
        "info-light": "rgb(var(--color-info-light) / <alpha-value>)",
        "info-content": "rgb(var(--color-info-content) / <alpha-value>)",

        success: "rgb(var(--color-success) / <alpha-value>)",
        "success-focus": "rgb(var(--color-success-focus) / <alpha-value>)",
        "success-light": "rgb(var(--color-success-light) / <alpha-value>)",
        "success-content": "rgb(var(--color-success-content) / <alpha-value>)",

        important: "rgb(var(--color-important) / <alpha-value>)",
        "important-focus": "rgb(var(--color-important-focus) / <alpha-value>)",
        "important-light": "rgb(var(--color-important-light) / <alpha-value>)",
        "important-content":
          "rgb(var(--color-important-content) / <alpha-value>)",

        warning: "rgb(var(--color-warning) / <alpha-value>)",
        "warning-focus": "rgb(var(--color-warning-focus) / <alpha-value>)",
        "warning-light": "rgb(var(--color-warning-light) / <alpha-value>)",
        "warning-content": "rgb(var(--color-warning-content) / <alpha-value>)",

        error: "rgb(var(--color-error) / <alpha-value>)",
        "error-focus": "rgb(var(--color-error-focus) / <alpha-value>)",
        "error-light": "rgb(var(--color-error-light) / <alpha-value>)",
        "error-content": "rgb(var(--color-error-content) / <alpha-value>)",

        tip: "rgb(var(--color-tip) / <alpha-value>)",
        "tip-focus": "rgb(var(--color-tip-focus) / <alpha-value>)",
        "tip-light": "rgb(var(--color-tip-light) / <alpha-value>)",
        "tip-content": "rgb(var(--color-tip-content) / <alpha-value>)",

        question: "rgb(var(--color-question) / <alpha-value>)",
        "question-focus": "rgb(var(--color-question-focus) / <alpha-value>)",
        "question-light": "rgb(var(--color-question-light) / <alpha-value>)",
        "question-content":
          "rgb(var(--color-question-content) / <alpha-value>)",

        quote: "rgb(var(--color-quote) / <alpha-value>)",
        "quote-focus": "rgb(var(--color-quote-focus) / <alpha-value>)",
        "quote-light": "rgb(var(--color-quote-light) / <alpha-value>)",
        "quote-content": "rgb(var(--color-quote-content) / <alpha-value>)",

        comment: "rgb(var(--color-comment) / <alpha-value>)",
        "comment-focus": "rgb(var(--color-comment-focus) / <alpha-value>)",
        "comment-light": "rgb(var(--color-comment-light) / <alpha-value>)",
        "comment-content": "rgb(var(--color-comment-content) / <alpha-value>)",

        docs: "rgb(var(--color-docs) / <alpha-value>)",
        "docs-focus": "rgb(var(--color-docs-focus) / <alpha-value>)",
        "docs-light": "rgb(var(--color-docs-light) / <alpha-value>)",
        "docs-content": "rgb(var(--color-docs-content) / <alpha-value>)",

        "border-color": "rgb(var(--border-color) / <alpha-value>)",
      },
      backgroundImage: {
        "body-pattern":
          "linear-gradient(rgb(var(--color-base-200) / 85%), rgb(var(--color-base-200) / 85%)), url('/static/images/background.svg')",
        "preview-pattern":
          "radial-gradient(rgb(var(--color-base-content) / 20%) .5px, rgb(var(--color-base-100) / 1) .5px)",
      },
      boxShadow: {
        "shadow-default":
          "0 0 0 2px rgb(var(--color-base-100), 0 0 0 4px rgb(var(--color-default-focus)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.base-content/1"),
            a: {
              color: theme("colors.important/1"),
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: `${theme("colors.important-focus/1")} !important`,
                textDecoration: "underline",
              },
              code: { color: theme("colors.primary/1") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.base-heading/1"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.base-heading/1"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.base-heading/1"),
            },
            "h4,h5,h6": {
              color: theme("colors.base-heading/1"),
            },
            pre: {
              backgroundColor: theme("colors.base-100/1"),
              color: theme("colors.base-content/1"),
              marginTop: "0px",
              marginBottom: "0px",
              borderRadius: "0.25rem",
            },
            code: {
              color: theme("colors.base-content/1"),
              backgroundColor: theme("colors.base-light/1"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.base-light/1"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.border-color/1") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.primary/1"),
            },
            ul: {
              listStyle: "none",
              marginTop: "1.25em",
              marginBottom: "1.25em",
              padding: "0",
              li: {
                listStyle: "none",
                position: "relative",
                paddingLeft: "1.75rem",
                "&::before": {
                  all: "unset",
                  position: "absolute",
                  left: 0,
                  fontWeight: 600,
                  padding: "0 0.5rem",
                  content: '"❯"',
                  color: theme("colors.primary/1"),
                },
              },
            },
            strong: { color: theme("colors.base-heading/1") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.quote/1"),
            },
          },
        },
      }),
      animation: {
        pop: "pop 0.25s ease-out",
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(0.95)",
          },
          "40%": {
            transform: "scale(1.02)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("./src/styles/plugin-css-variables.cjs"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
