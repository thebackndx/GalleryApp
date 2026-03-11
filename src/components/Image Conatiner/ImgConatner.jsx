import React from 'react'
import "./ImgConatainer.css"

const ImgConatner = (props) => {
    return (
        <div className="imgContainer">
            <img src={props.url} />
        </div>
    )
}

export default ImgConatner