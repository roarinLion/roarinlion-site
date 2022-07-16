import styled from "styled-components"
import { space, layout, color, border, shadow } from "styled-system"

const StyledCard = styled.div`
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(31, 73, 125, 0.3),
        0px 0px 15px rgba(31, 73, 125, 0.1);
    -webkit-box-shadow: 0px 0px 5px rgba(31, 73, 125, 0.3),
        0px 0px 15px rgba(31, 73, 125, 0.1);
    ${space} ${layout} ${color} ${border} ${shadow};
`

export default StyledCard
