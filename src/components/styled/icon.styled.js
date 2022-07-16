import { color, fontSize, position, space } from "styled-system"
import styled from "styled-components/macro"

const StyledIcon = styled.i`
    border: 1px solid #f7f7f7;
    cursor: pointer;
    box-shadow: 0 0 1px gray;
    padding-top: 1rem;
    border-radius: 8px;
    transition: transform 0.2s;
    ${fontSize} ${color} ${space} ${position};
    &:hover {
        transform: scale(1.5);
    }
`
export default StyledIcon
