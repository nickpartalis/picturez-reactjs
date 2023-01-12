import React from "react"

import "./Card.css"

function Card(props) {
    return (
        <div className="card-container">
            <div>
                <a href={props.url_full}>
                    <img className="card-image" src={props.url_small} alt={props.alt_descr} />
                </a>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <img className="user-pic" src={props.user.profile_img} alt="profile pic" />
                    </div>
                    <div className="media-right">
                        <p className="user-name">{props.user.name}</p>
                        <p className="user-insta">@{props.user.instagram}</p>
                    </div>
                </div>
                <div className="content">
                    <p className="content-descr"><em>{props.description}</em></p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)
