import styled from "styled-components";
import { very_pale_blue } from "../colors";
import illustrationHero from "../starterFiles/order-summary-component-main/images/illustration-hero.svg";

const Card = () => {
	return (
		<Container>
			<Header>
				<img src={illustrationHero} alt='hero' />
			</Header>
			<h1>Summary!</h1>
			<h1>Plans!</h1>
			<h1>Buttons!</h1>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-width: 400px;
	background: ${very_pale_blue};
	border-radius: 20px;
	overflow: hidden;
`;

const Header = styled.div`
	height: 220px;
`;
