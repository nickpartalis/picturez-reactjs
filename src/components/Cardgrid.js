import React from "react"
import Card from "./Card"
import Masonry from 'react-masonry-css'

import "./Cardgrid.css"

export default function Cardgrid(props) {
    const breakpointColumnsObj = {
        default: 4,
        1200: 3,
        900: 2,
        600: 1
    }

    return (
        <main>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {props.data.map(item => {
                    const cardProps = {
                        url_small: item.urls.small,
                        url_full: item.urls.full,
                        user: {
                            name: item.user.name,
                            instagram: item.user.instagram_username,
                            profile_img: item.user.profile_image.medium
                        },
                        description: item.description ? item.description : "",
                        alt_descr: item.alt_description ? item.alt_description : "",
                        time: new Date(item.updated_at).toDateString()
                    }
                    return (
                        <div key={item.id}>
                            <Card {...cardProps} />
                        </div>
                    )
                })}
            </Masonry>
        </main>
    )
}
