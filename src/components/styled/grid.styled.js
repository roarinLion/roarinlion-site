import styled from "styled-components/macro"
import {
    space,
    width,
    justifyContent,
    maxWidth,
    color,
    flexbox,
    textAlign,
    minHeight,
} from "styled-system"

export const Container = styled.div`
    margin: auto;
    ${space}
    ${maxWidth}
    ${color}
    ${flexbox}
    ${minHeight}
`

export const Row = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    ${space}
    ${justifyContent}
`

export const Col = styled.div`
    ${width}
    ${space}
    ${justifyContent}
    ${textAlign}
`
