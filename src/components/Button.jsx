import styled from "styled-components";
import { bright_blue, desaturated_blue } from "../colors";

const Button = styled.button`
	background: ${bright_blue};
	font-weight: 900;
	color: #fff;
	border: none;
	outline: none;
	border-radius: 10px;
	padding: 20px 0;
	box-shadow: 0 15px 15px #d1cff3;
	cursor: pointer;
	@media (max-width: 375px) {
	}
	&:hover {
		background: #756cf1;
	}
	&.cancel {
		color: ${desaturated_blue};
		background: transparent;
		box-shadow: none;
		&:hover {
			color: #000;
		}
	}
`;

export default Button;
