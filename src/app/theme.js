import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode) => {
    return createTheme({
        palette:{
            mode,

            primary: {
                main: "#3b82f6",
                light:"#93c5fd",
                dark: "#1d4ed8",
            },

            secondary:{
                main: "#8b5cf6",
            },

            error: {
                main: "#ef4444",
            },

            background:
                mode === "dark"
                 ? {
                    default: "#0f172a",
                    paper: "#1e293b",
                 }
                 : {
                    default: "#f8fafc",
                    paper: "#ffffff",
                 },
        },

        typography: {
            fontFamily:
                "Inter, system-ui, sans-serif",
            
            h1: {
                fontSize: "2rem",
                fontWeight: 700,
                lineHeight: 1.2,
            },

            h2: {
                fontSize: "1.5rem",
                fontWeight: 600,
            },

            body1: {
                fontSize: "1rem",
                lineHeight: 1.6,
            },

            body2: {
                fontSize: "0.875rem",
                lineHeight: 1.5,
            },
        },

        shape: {
            borderRadius: 10,
        },

        spacing: 8,

        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },

                styleOverrides: {
                    root: {
                        textTransform: "none",
                        borderRadius: 10,
                        fontWeight: 600,
                    },
                },
            },

            MuiTextField: {
                defaultProps: {
                    size: "small",
                    variant: "outlined",
                },

                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-root": {
                            borderRadius:8,
                        },
                    },
                },
            },

            MuiCard: {
                defaultProps: {
                    elevation: 0,
                },

                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        border:
                            "1px solid rgba(0,0,0,0.08)",
                    },
                },
            },

            MuiChip: {
                defaultProps: {
                    size: "small",
                },

                styleOverrides: {
                    root: {
                        fontWeight: 600,
                        borderRadius: 6,
                    },
                },
            },

            MuiTooltip: {
                defaultProps: {
                    arrow: true,
                },
            },
        },
    });
};