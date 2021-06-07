import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		offwhite: "#dfe6e9",
		lightgray: "#b6b6b6",
		lightblue: "#1BC0EC",
		darkgray: "#25272B",
		mediumgray: "#2D2F33",
	},
	fonts: ["sans-serif", "Roboto"],
	fontSizes: {
		small: "1em",
		medium: "1.62em",
		large: "2.62em",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
