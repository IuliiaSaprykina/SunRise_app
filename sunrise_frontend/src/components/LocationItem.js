import React from "react"

export default function LocationItem ({name, image, sunrise, lat, lng}) {
    return(
        <div>
            <li className="location-item">
                <h3>{name}</h3>
                <img className="location-image" src={image} alt=""/>
            </li>
        </div>
    )
}