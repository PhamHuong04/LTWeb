
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
  },
  palette: {
    primary: {
      main: "#fe2c55",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#00A8CC",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#000",
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",

          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },

        maxWidthMd: {
          maxWidth: "860px",

          "@media (min-width: 900px)": {
            maxWidth: "860px",
          },
        },

        maxWidthLg: {
          maxWidth: "1150px",

          "@media (min-width: 1200px)": {
            maxWidth: "1150px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "#161823",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "IBM Plex Sans, sans-serif",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "white",
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            minWidth: "106px",
          },
        },
        {
          props: { variant: "text" },
          style: {
            "&:hover": {
              background: "rgba(22, 24, 35, 0.03)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: "rgb(22, 24, 35)",
            border: "1px solid rgb(22, 24, 35, 0.12)",
            backgroundColor: "white",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "600",

            "&:hover": {
              borderColor: "rgb(208, 209, 211)",
              backgroundColor: "rgb(248, 248, 248)",
            },
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },

      variants: [
        {
          props: { color: "secondary" },
          style: {
            backgroundColor: "#142850",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          },
        },
        {
          props: { size: "medium" },
          style: {
            border: "1px solid rgba(22, 24, 35, 0.2)",
            fontSize: "14px",
            display: "flex",
            height: "24px",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
