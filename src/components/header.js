import * as React from "react"
import { Headline } from "./styled/typography"

const Header = ({ siteTitle }) => (
    <header>
        <div>
            <Headline>{siteTitle}</Headline>
        </div>
    </header>
)

export default Header
