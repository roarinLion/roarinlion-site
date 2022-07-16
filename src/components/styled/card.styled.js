import styled from "styled-components"
import { space, layout, color, border, shadow } from "styled-system"

const StyledCard = styled.div`
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
    ${space} ${layout} ${color} ${border} ${shadow};
`

export default StyledCard
