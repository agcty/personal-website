// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
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
      colors: {
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
          50: "#F8F7F3",
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
          1100: "#212121",
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
        default: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
