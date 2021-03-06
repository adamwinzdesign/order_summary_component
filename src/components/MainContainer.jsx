import styled from "styled-components";
import { pale_blue } from "../colors";
import patternBackgroundDesktop from "../images/pattern-background-desktop.svg";
import patternBackgroundMobile from "../images/pattern-background-mobile.svg";

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-image: url(${patternBackgroundDesktop});
	background-repeat: no-repeat;
	background-color: ${pale_blue};
	@media (max-width: 375px) {
		background-image: url(${patternBackgroundMobile});
	}
`;

export default MainContainer;
