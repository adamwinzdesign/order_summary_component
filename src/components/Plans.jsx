import styled from "styled-components";
import { dark_blue, desaturated_blue, very_pale_blue, pale_blue } from "../colors";
import iconMusic from "../starterFiles/order-summary-component-main/images/icon-music.svg";

const Plans = () => {
	return (
		<PlansContainer>
			<img src={iconMusic} alt='music' />
			<PlanInfo>
				<h2>Annual Plan</h2>
				<p>$59.99/year</p>
			</PlanInfo>
			<a href='/change'>Change</a>
		</PlansContainer>
	);
};

export default Plans;

const PlansContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f8f9fe;
	padding: 1.5rem;
	border-radius: 15px;
`;

const PlanInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 16px;
`;
