import styled from "styled-components";
import { bright_blue, desaturated_blue } from "../colors";

const Button = styled.button`
	box-shadow: 0 15px 15px #d1cff3;
	cursor: pointer;
	@media (max-width: 375px) {
	}
	&:hover {
		background: #756cf1;
	}
	&.cancel {
		&:hover {
			color: #000;
		}
	}
`;

export default Button;
