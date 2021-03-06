import styled from "styled-components";
import illustrationHero from "../images/illustration-hero.svg";
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
				<Plans />
				<Buttons>
					<Button>Proceed to Payment</Button>
					<Button className='cancel'>Cancel Order</Button>
				</Buttons>
			</CardBody>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.div`
	width: 450px;
	height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 15px;
	overflow: hidden;
	@media (max-width: 375px) {
		width: 325px;
		height: 570px;
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
	height: 480px;
	padding: 55px 50px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: 375px) {
		height: 410px;
		padding: 40px 25px;
	}
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (max-width: 375px) {
	}
`;
