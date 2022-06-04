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
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f8f9fe;
	width: 100%;
	padding: 1.5rem;
	border-radius: 15px;
	margin: 1rem 0;
`;

const PlanInfo = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin: 0 16px;
	width: 10rem;
`;
