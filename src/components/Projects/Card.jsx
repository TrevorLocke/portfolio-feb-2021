import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Card = () => {
	return (
		<CardWrapper>
			<StyledA href="#">
				<Wrapper>
					<ProjectSummary>
						<ProjectTitle>Project</ProjectTitle>
						<ProjectDesc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit
							ab excepturi illum accusantium explicabo voluptatibus atque
							perferendis blanditiis porro.
						</ProjectDesc>
						<ProjectLinks>
							<PreviewButton>View Site</PreviewButton>

							<div>
								<RestyledIcon name="github"> </RestyledIcon>
								<PreviewCode>View Code</PreviewCode>
							</div>
						</ProjectLinks>
					</ProjectSummary>
				</Wrapper>
			</StyledA>
		</CardWrapper>
	);
};

const StyledA = styled.a`
	text-decoration: none;
	color: inherit !important;
	height: 400px;
	margin-bottom: 50px;
`;

const CardWrapper = styled.article`
	max-width: 850px;
	margin: 20px auto;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Wrapper = styled.div`
	width: 350px;
	position: relative;
	height: auto;
	border: 1px solid ${({ theme: { colors } }) => colors.darkgray};
	border-radius: 6px;
	background: ${({ theme: { colors } }) => colors.lightblue};
	display: flex;
	flex-direction: column;
	background-image: url("https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg");
`;
const ProjectSummary = styled.div`
	margin-top: 260px;
	padding: 18px 20px;
	background: ${({ theme: { colors } }) => colors.offwhite};
	flex: 1;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
`;

const ProjectTitle = styled.h2`
	margin-bottom: 0;
	padding-top: 15px;
	color: ${({ theme: { colors } }) => colors.darkgray};
`;

const ProjectDesc = styled.p`
	color: ${({ theme: { colors } }) => colors.mediumgray};
	margin: 0;
	font-weight: 300;
	width: 100%;
`;
const ProjectLinks = styled.div`
	padding-top: 12px;
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const PreviewButton = styled.button`
	padding: 8px;
	border: none;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
	background-color: ${({ theme: { colors } }) => colors.lightgray};
	color: ${({ theme: { colors } }) => colors.darkgray};
	cursor: pointer;

	&:hover {
		color: ${({ theme: { colors } }) => colors.offwhite};
	}
	&:focus {
		border: none;
		outline: none;
	}
`;

const PreviewCode = styled.a`
	border: none;
`;

const StyledIcon = styled(Icon)``;

const RestyledIcon = styled(StyledIcon)`
	&&& {
		font-size: 20px;
		color: ${({ theme: { colors } }) => colors.lightblue};
	}
`;
export default Card;
