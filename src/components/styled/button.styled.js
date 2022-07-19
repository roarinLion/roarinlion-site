import styled, { css } from "styled-components"
import { theme } from "./theme"
import { darken } from "polished"
import { color, space } from "styled-system"

const StyledButton = styled.div`
    border-radius: 12px;
    ${space}
    ${color}
    ${props =>
        props.primary &&
        css`
            color: ${theme.colors.textLight};
            border: 1px solid ${darken(0.04, theme.colors.primary)};
            background-color: ${theme.colors.primary};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.1, theme.colors.primary)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.primary)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.primary)};
            }
        `}
         ${props =>
        props.secondary &&
        css`
            color: ${theme.colors.textDark};
            background-color: ${theme.colors.secondary};
            border: 1px solid ${darken(0.04, theme.colors.secondary)};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.3, theme.colors.secondary)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.secondary)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.secondary)};
            }
        `}
         ${props =>
        props.info &&
        css`
            color: ${theme.colors.textDark};
            background-color: ${theme.colors.info};
            border: 1px solid ${darken(0.04, theme.colors.info)};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.3, theme.colors.info)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.info)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.info)};
            }
        `}
            ${props =>
        props.success &&
        css`
            color: ${theme.colors.textDark};
            background-color: ${theme.colors.success};
            border: 1px solid ${darken(0.04, theme.colors.success)};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.3, theme.colors.success)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.success)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.success)};
            }
        `}
    ${props =>
        props.warning &&
        css`
            color: ${theme.colors.text};
            background-color: ${theme.colors.warning};
            border: 1px solid ${darken(0.04, theme.colors.warning)};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.3, theme.colors.warning)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.warning)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.warning)};
            }
        `}
         ${props =>
        props.danger &&
        css`
            color: ${theme.colors.text};
            background-color: ${theme.colors.danger};
            border: 1px solid ${darken(0.04, theme.colors.danger)};
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                0 7px 10px -5px ${darken(0.3, theme.colors.danger)};
            transition: 0.2s ease-in;
            &:hover {
                cursor: pointer;
                background-color: ${darken(0.02, theme.colors.danger)};
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3),
                    0 7px 5px -5px ${darken(0.1, theme.colors.danger)};
            }
        `}
`
//     primary: {
//         color: theme.colors.text,
//         backgroundColor: theme.colors.primary,
//         border: `1px solid ${theme.colors.primary}`,
//         boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(156,39,176,.4)`,
//         "&:hover": {
//             backgroundColor: darken(0.05, theme.colors.primary),
//         },
//     },
//     secondary: {
//         color: theme.colors.white,
//         backgroundColor: theme.colors.secondary,
//         border: `1px solid ${theme.colors.secondary}`,
//         "&:hover": {
//             backgroundColor: darken(0.05, theme.colors.secondary),
//         },
//     },
//     primaryOutline: {
//         color: theme.colors.primary,
//         backgroundColor: theme.colors.white,
//         border: `1px solid ${theme.colors.primary}`,
//         "&:hover": {
//             color: theme.colors.text,
//             backgroundColor: theme.colors.primary,
//         },
//     },
// }

export default StyledButton
