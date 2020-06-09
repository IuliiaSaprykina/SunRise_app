import ReactDOM from "react-dom";
import React, { useState } from "react"



export default function LocationItem ({name, image, sunrise, lat, lng}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <ReactCardFlip isFlipped={this.state.isFlipped} fliDirection="vertical">
            <div>
                <li className="location-item">
                    <h3>{name}</h3>
                    <img className="location-image" src={image} alt=""/>
                </li>
             </div>

        </ReactCardFlip>
    )
}