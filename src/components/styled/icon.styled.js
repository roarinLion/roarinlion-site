import { color, fontSize, position, space } from "styled-system"
import styled from "styled-components/macro"

const StyledIcon = styled.i`
    cursor: pointer;
    padding-top: 1rem;
    border-radius: 8px;
    transition: "all 2s ease 1s";
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
    ${fontSize} ${color} ${space} ${position};
    &::hover {
        transform: scale(0.8);
    }
`
export default StyledIcon
