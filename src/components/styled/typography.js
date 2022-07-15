import styled, { createGlobalStyle, css } from "styled-components"

//we should always hold the font files locally. there are many free fonts online including google fonts.
import fontBold from "../../assets/fonts/Ubuntu-Bold.ttf"
import fontBoldItalic from "../../assets/fonts/Ubuntu-Bold.ttf"
import fontRegular from "../../assets/fonts/Ubuntu-Regular.ttf"
import fontItalic from "../../assets/fonts/Ubuntu-Italic.ttf"
import fontLight from "../../assets/fonts/Ubuntu-Light.ttf"
import fontLightItalic from "../../assets/fonts/Ubuntu-LightItalic.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontBold});
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontBoldItalic});
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontItalic});
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontLight});
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu'!important;
    src: url(${fontLightItalic})!important;
    font-style: italic!important;
    font-weight: 200!important;
    font-display: swap;
  }
`

const Super = styled.h1`
  font-size: 4rem!important;
  font-weight: 700!important;
  padding-top: 2.5rem;
  margin: auto!important;
  ${props =>
      props.center &&
      css`
          text-align: center;
      `}
    @media (max-width: 600px) {
      font-size: 3rem!important;
      padding-top: 1rem;
    }
  }

`

const Headline = styled.h1`
  font-size: 3.5rem!important;
  font-weight: 600!important;
  margin: auto!important;
  color: ${({ theme }) => theme.primary};
  ${props =>
      props.center &&
      css`
          text-align: center;
      `}
  }

`

const Title = styled.h2`
  font-size: 2.3rem!important;
  font-weight: 600!important;
  margin-top: 0;
  margin-bottom: .65rem;
  ${props =>
      props.center &&
      css`
          text-align: center;
      `}
  }
  ${props =>
      props.small &&
      css`
          text-align: center;
          font-size: 1.4rem !important;
          margin: 0;
          transition: transform 0.2s; /* Animation */
      `}
   
  }
  ${props =>
      props.productTitle &&
      css`
          padding-top: 0;
          @media (max-width: 980px) {
              padding-top: 2rem !important;
          }
      `}
  }
 
`

const Subtitle = styled.h3`
  font-size: 1.6rem!important;
  font-weight: 400;
  margin-top: 0;
  ${props =>
      props.center &&
      css`
          text-align: center;
      `}
  }
  ${props =>
      props.info &&
      css`
          margin: 0 !important;
          font-weight: 600;
      `}
  }
`

const Paragraph = styled.p`
  font-size: 1.3rem!important;
  font-weight: 400!important;
  ${props =>
      props.center &&
      css`
          text-align: center !important;
      `}
  ${props =>
      props.italic &&
      css`
          font-style: italic !important;
      `}
  }
  ${props =>
      props.small &&
      css`
          font-size: 1rem !important;
          margin: 0;
      `}
  }
`

export { Typography, Super, Headline, Title, Subtitle, Paragraph }
