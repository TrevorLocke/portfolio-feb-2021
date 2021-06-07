import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import GlobalStyle from "./styles/Global";
import Theme from "./theme";
import styled from "styled-components";
import AboutSection from "./components/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";

AOS.init({
	disable: "mobile",
});

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
				<HeroSection height="100vh" parallax textPosition="center" />
				<GlobalStyle />
				<AboutSection />
				<Projects />
			</Theme>
		);
	}
}

export default App;