import React from "react"
import { Subtitle1 } from "../titles"
import Content from "../content"
import Cheap from "../cheap"
import "./index.scss"

const Card = ({ img, title, content, tools }) => {
    return <div className="card_container">

        <div style={{display: "flex", justifyContent: "center"}}>
            {img()}
        </div>

        <Subtitle1>{title}</Subtitle1>
        <Content>
            {content}
        </Content>
        {tools.map(title => <Cheap title={title}/>)}
    </div>
}


export default Card