import StyledH1 from "../type/StyledH1";
import StyledP from "../type/StyledP";
import styled from "styled-components";

const Summary = () => {
	return (
		<SummaryContain>
			<StyledH1>Order Summary</StyledH1>
			<StyledP>
				You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you
				like!
			</StyledP>
		</SummaryContain>
	);
};

export default Summary;

const SummaryContain = styled.div`
	text-align: center;
`;
