import styled from "styled-components"
import { space, layout, color, border, shadow } from "styled-system"

const StyledCard = styled.div`
    overflow: hidden;
    border-radius: 8px;
    ${space} ${layout} ${color} ${border} ${shadow};
`

export default StyledCard
