import React from "react";
import styled, {css} from 'styled-components';

// div형태의 component 생성
const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
        // props.inverted == true일때 css속성 적용
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover{
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponent;