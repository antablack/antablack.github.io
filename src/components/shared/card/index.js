import React from "react"
import { Subtitle1 } from "../titles"
import Content from "../content"
import Cheap from "../cheap"
import "./index.scss"

const Card = ({ title, content, tools }) => {
    return <div className="card_container">

        <div style={{textAlign: "center"}}>
            <img src="https://sniffandwag.com/wp-content/uploads/2019/12/baby-cats-cute-and-funny-cat-vid.jpg" width="200"/>
        </div>

        <Subtitle1>{title}</Subtitle1>
        <Content>
            {content}
        </Content>
        {tools.map(title => <Cheap title={title}/>)}
    </div>
}


export default Card