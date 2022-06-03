import styled from "styled-components";
import illustrationHero from "../starterFiles/order-summary-component-main/images/illustration-hero.svg";
import Button from "./Button";
import Plans from "./Plans";
import Summary from "./Summary";

const Card = () => {
	return (
		<Container>
			<Header>
				<img src={illustrationHero} alt='hero' />
			</Header>
			<CardBody>
				<Summary />
				<Plans />
				<Button>Proceed to Payment</Button>
				<Button className='cancel'>Cancel Order</Button>
			</CardBody>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 400px;
	background: #fff;
	border-radius: 20px;
	overflow: hidden;
`;

const Header = styled.div`
	height: 220px;
`;

const CardBody = styled.div`
	padding: 2.75rem;
	text-align: center;
`;
