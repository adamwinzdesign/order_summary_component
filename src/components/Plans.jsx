import styled from "styled-components";
import iconMusic from "../starterFiles/order-summary-component-main/images/icon-music.svg";
import StyledH2 from "../type/StyledH2";
import StyledP from "../type/StyledP";
import StyledA from "../type/StyledA";

const Plans = () => {
	return (
		<PlansContainer>
			<img src={iconMusic} alt='music' />
			<PlanInfo>
				<StyledH2>Annual Plan</StyledH2>
				<StyledP>$59.99/year</StyledP>
			</PlanInfo>
			<StyledA href='/change'>Change</StyledA>
		</PlansContainer>
	);
};

export default Plans;

const PlansContainer = styled.div`
	background-color: #f8f9fe;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px;
	border-radius: 15px;
	@media (max-width: 375px) {
		padding: 15px;
	}
`;

const PlanInfo = styled.div``;
