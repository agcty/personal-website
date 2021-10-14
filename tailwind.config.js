// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "media",
  purge: {
    content: ["./src/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [/^bg-\w+-\d+/, /^text-\w+-\d+/],
    },
  },
  theme: {
    // good to know: add default line height https://tailwindcss.com/docs/font-size#app
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      100: "100px",
      200: "200px",
      300: "300px",
      400: "400px",
    },
    extend: {
      boxShadow: {
        nav: "0 0 6.8125rem 0 rgb(0 0 0 / 20%)",
      },
      colors: {
        primary: "#e6007a",
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        border: {
          primary: "#E3DCDC",
        },
        accent: {
          gray: "#ABAAA5",
        },
        gray: {
          100: "#E3DCDC",
          300: "#ABAAA5",
          800: "#373737",
        },
        green: {
          100: "#D5E7E2",
          500: "#519B86",
        },
        beige: {
          10: "rgb(255, 254, 252)",
          50: "#f9f5f1",
          100: "#F0EEE4",
          200: "#e7e4d4",
          300: "#cfcdbe",
          400: "#988989",
          500: "#9A947A",
        },
        mud: {
          300: "#B7A5A5",
        },
        geist: {
          50: "#fafafa",
          100: "#eaeaea",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
        dark: {
          1100: "rgb(26,26,26)",
          1000: "#2B2B2B",
          900: "#404040",
          800: "#4D4D4D",
          700: "#5e5e5e",
          600: "#676767",
          500: "#a6a6a6",
          400: "#CFCFCF",
          300: "#D9D9D9",
          200: "#ebebeb",
          100: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.normal"),
              lineHeight: theme("lineHeight.tight"),
              color: theme("colors.black"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.dark.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.dark.900"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.dark.900"),
            },
            "ul li:before": {
              color: theme("colors.dark.900"),
            },
            li: {
              color: theme("colors.dark.900"),
            },
            strong: {
              backgroundColor: "#fef09f",
            },
            code: {
              color: theme("colors.dark.900"),
            },
            a: {
              color: theme("colors.red.500"),
            },
            p: {
              color: theme("colors.black"),
            },
            pre: {
              color: theme("colors.dark.200"),
              backgroundColor: theme("colors.dark.800"),
            },
            blockquote: {
              color: theme("colors.dark.900"),
              borderLeftColor: theme("colors.dark.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.normal"),
              lineHeight: theme("lineHeight.tight"),
              color: theme("colors.dark.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.dark.200"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.dark.200"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.dark.400"),
            },
            "ul li:before": {
              color: theme("colors.dark.400"),
            },
            li: {
              color: theme("colors.dark.400"),
            },
            strong: {
              backgroundColor: theme("colors.dark.700"),
              color: theme("colors.dark.400"),
              borderRadius: "0.125rem",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
            },
            code: {
              color: theme("colors.dark.400"),
            },
            a: {
              color: theme("colors.red.500"),
            },
            p: {
              color: theme("colors.dark.400"),
            },
            pre: {
              color: theme("colors.dark.200"),
              backgroundColor: theme("colors.dark.800"),
            },
            blockquote: {
              color: theme("colors.dark.900"),
              borderLeftColor: theme("colors.dark.200"),
            },
          },
        },
      }),
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
