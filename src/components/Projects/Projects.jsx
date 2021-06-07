import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Projects = () => {
	return (
		<Main>
			<Title>Projects</Title>
			<Wrapper>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Wrapper>
		</Main>
	);
};

const Title = styled.h1`
	color: ${({ theme: { colors } }) => colors.offwhite};
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	margin: 0 auto;
	justify-content: space-around;
	gap: 15px;
	flex-wrap: wrap;
	padding: 3rem 0;
`;

const Main = styled.div`
	background-color: ${({ theme: { colors } }) => colors.mediumgray};
`;

export default Projects;
