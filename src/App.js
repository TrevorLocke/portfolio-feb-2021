import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection.js";
import GlobalStyle from "./styles/Global";
import Theme from "./theme";
import styled from "styled-components";

class App extends Component {
	state = {
		navbarOpen: false,
	};

	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	};
 
	render() {
		return (
			<Theme>
				<Navbar
					navbarState={this.state.navbarOpen}
					handleNavbar={this.handleNavbar}
				/>
				<HeroSection
					height="100vh"
					parallax
					textPosition="center"
				/>
				<GlobalStyle />
			</Theme>
		);
	}
}

export default App;