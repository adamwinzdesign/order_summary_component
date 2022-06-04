import styled from "styled-components";
import { bright_blue, desaturated_blue } from "../colors";

const Button = styled.button`
	width: 100%;
	border-radius: 12px;
	border: none;
	background: ${bright_blue};
	color: #fff;
	height: 3.125rem;
	font-size: 0.9rem;
	/* margin-bottom: 1rem; */
	box-shadow: 0 15px 15px #d1cff3;
	cursor: pointer;
	@media (max-width: 375px) {
		width: 90%;
	}
	&:hover {
		background: #756cf1;
	}
	&.cancel {
		background: #fff;
		color: ${desaturated_blue};
		font-weight: 700;
		box-shadow: none;
		&:hover {
			color: #000;
		}
	}
`;

export default Button;
