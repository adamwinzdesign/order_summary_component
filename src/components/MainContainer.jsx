import styled from "styled-components";
import { pale_blue } from "../colors";
import patternBackgroundDesktop from "../starterFiles/order-summary-component-main/images/pattern-background-desktop.svg";

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 1440px;
	background-image: url(${patternBackgroundDesktop});
	background-repeat: no-repeat;
	background-color: ${pale_blue};
`;

export default MainContainer;
