import styled from "styled-components";

export const EventDescription = styled.div`
	font-size: 0.7em;
`;

export const EventListContainer = styled.div`
	height: 100%;
	width: 90%;
	background-color: #ECECEC;
	display: flex;
	position: relative;
	margin-right: 20px;
`;

export const EventTitle = styled.div`
	font-weight: bold;
	font-size: 1em;
	margin-bottom: 10px;
`;

export const EventWrapper = styled.div`
	background-color: #FFFFFF;
	box-sizing: border-box;
	border: 1px solid black;
	height: ${props => props.height};
	left: ${props => props.left};
	position: absolute;
	top: ${props => props.top};
	width: ${props => props.width};
	text-align: left;
	padding: 10px;
	overflow: auto;
`;