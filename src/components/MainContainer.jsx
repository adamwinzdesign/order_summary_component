import styled from "styled-components";
import { pale_blue } from "../colors";
import patternBackgroundDesktop from "../starterFiles/order-summary-component-main/images/pattern-background-desktop.svg";
import patternBackgroundMobile from "../starterFiles/order-summary-component-main/images/pattern-background-mobile.svg";

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-image: url(${patternBackgroundDesktop});
	background-repeat: no-repeat;
	background-color: ${pale_blue};
	@media (max-width: 375px) {
		background-image: url(${patternBackgroundMobile});
	}
`;

export default MainContainer;
