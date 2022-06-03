import styled from "styled-components";
import illustrationHero from "../starterFiles/order-summary-component-main/images/illustration-hero.svg";
import Button from "./Button";
import Plans from "./Plans";
import Summary from "./Summary";

const Card = () => {
	return (
		<CardContainer>
			<CardHeader>
				<Img src={illustrationHero} alt='hero' />
			</CardHeader>
			<CardBody>
				<Summary />
				{/* <Plans /> */}
				{/* <Button>Proceed to Payment</Button> */}
				{/* <Button className='cancel'>Cancel Order</Button> */}
			</CardBody>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 700px;
	width: 450px;
	background: #fff;
	border-radius: 20px;
	overflow: hidden;
	@media (max-width: 375px) {
		height: 570px;
		width: 325px;
	}
`;

const CardHeader = styled.div`
	height: 220px;
	width: 100%;
	overflow: hidden;
	@media (max-width: 375px) {
		height: 160px;
		width: 325px;
	}
`;

const Img = styled.img`
	height: 220px;
	@media (max-width: 375px) {
		object-fit: contain;
		height: 160px;
		width: 325px;
	}
`;

const CardBody = styled.div`
	/* padding: 2.75rem 1rem; */
	text-align: center;
`;
