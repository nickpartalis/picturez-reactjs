import React from "react"
import Card from "./Card"
import Masonry from 'react-masonry-css'

import "./Cardgrid.css"

const CardgridWithRef = React.forwardRef(
    function Cardgrid(props, ref) {
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
                    {props.data.map((item, index) => {
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
                        if (props.data.length === index + 1) {
                            return (
                                <div key={item.id} ref={ref}>
                                    <Card {...cardProps} />
                                </div>
                            )
                        } // else
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
)

export default CardgridWithRef
