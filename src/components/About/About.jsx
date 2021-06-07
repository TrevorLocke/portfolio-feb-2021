import React from "react";
import styled from "styled-components";
import aboutimg from "../../assets/about.png";

const AboutSection = () => {
	return (
		<StyledWrapper>
			<AboutWrapper
				data-aos="fade-right"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
			>
				<AboutImg src={aboutimg} />
				<ChildrenWrapper>
					<StyledH1>
						<span>A</span>bout Me
					</StyledH1>
					<StyledH3>Every great site has a even better story</StyledH3>

					<StyledP>
						I'm an infinitely curious JavaScript developer with a passion for
						ideas into functional websites.
						<br />
						<br />
						In my spare time I attend local meetups. Outside of development,
						some of my hobbies include gaming, music, art.
						<br />
						<br />
						But most importantly i am a proud father. When offline i enjoy
						nothing more than spending time with my family
					</StyledP>
				</ChildrenWrapper>
			</AboutWrapper>
		</StyledWrapper>
	);
};

const AboutWrapper = styled.div`
	max-width: 120rem;
	display: flex;
	margin: auto;
	padding: 250px 0;
	justify-content: space-between;
	height: 400px;
	align-items: center;
	text-align: center;
`;
const StyledWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme: { colors } }) => colors.darkgray};
	padding-bottom: 40px;
`;

const ChildrenWrapper = styled.div`
	height: 400px;
	margin-left: 2rem;
	width: 40%;
`;

const StyledH1 = styled.h1`
	color: ${({ theme: { colors } }) => colors.offwhite};
	padding-top: 0.8rem;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};

	span {
		border-bottom: 3px solid ${({ theme: { colors } }) => colors.lightblue};
	}
`;

const StyledH3 = styled.h3`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
	color: ${({ theme: { colors } }) => colors.lightgray};
`;

const StyledP = styled.p`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
	color: ${({ theme: { colors } }) => colors.offwhite};
	padding-top: 0.8rem;
`;

const AboutImg = styled.img`
	height: 400px;
`;

export default AboutSection;
