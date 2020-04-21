import React from "react"
import { Subtitle1 } from "../titles"
import Content from "../content"
import "./index.scss"

const Card = ({ img, title, content }) => {
    return <div className="minimalist_card_container">
        <div className="img">{img()}</div>
        <div>
            <Subtitle1>{title}</Subtitle1>
            <Content>
                {content}
            </Content>
        </div>
    </div>
}


export default Card