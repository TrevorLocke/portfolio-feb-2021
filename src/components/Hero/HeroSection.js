import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import heroimg from "../../assets/heroimg.png";
import { Icon } from "semantic-ui-react";

const HeroSection = () => {
	return (
		<Fragment>
			<div style={{ backgroundColor: "#2d2f33" }}>
				<HeroWrapper>
					<div>
						<StyledH3>Hi, I'm Trevor! A Front End Developer.</StyledH3>
						<StyledH1>Lets Turn Your Dreams Into Code!</StyledH1>
						<StyledButton
							href="add-website-here"
							target="_blank"
							rel="nofollow"
						>
							Let's Chat
						</StyledButton>
					</div>
					<ChildrenWrapper>
						<HeroImg src={heroimg} />
					</ChildrenWrapper>
				</HeroWrapper>
				<ReStyledIcon name="chevron down" />
			</div>
		</Fragment>
	);
};

const StyledButton = styled.button`
	border-radius: 18px;
	border: none;
	padding: 1.5rem;
	margin: 2rem 2rem;
	font-size: 2rem;
	background-color: ${({ theme: { colors } }) => colors.lightblue};
	color: #fff;
	cursor: pointer;
`;

const StyledH1 = styled.h1`
	font-size: 50px;
	color: ${({ theme: { colors } }) => colors.offwhite};
	padding-top: 1.2rem;
`;

const StyledH3 = styled.h3`
	font-size: 30px;
	color: ${({ theme: { colors } }) => colors.lightgray};
`;

const HeroWrapper = styled.div`
	margin: 0 auto;
	align-items: center;
	display: flex;
	position: relative;
	text-align: center;
	width: 80%;
	height: 100vh;
	justify-content: space-between;
`;

const HeroImg = styled.img`
	height: 400px;
`;

const ChildrenWrapper = styled.div`
	height: 400px;
	margin-left: 2rem;
`;

const StyledIcon = styled(Icon)``;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-20px);} 
   60% {transform: translateY(-15px);}
`;

const ReStyledIcon = styled(StyledIcon)`
	&&& {
		font-size: 60px;
		color: ${({ theme: { colors } }) => colors.lightgray};
		margin: 0 auto;
		position: absolute;
		top: 93%;
		left: 50%;
		right: 50%;
		animation-name: ${bounce};
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}
`;

export default HeroSection;
