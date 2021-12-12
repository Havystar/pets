import React from 'react'

export function PreviewCard({ img = "", title = "", price = "" }) {
    console.log(img, title, price)
    return (
        <div class="previewcard">
            <img src={img} alt="pet food"></img>
            <div>
                <p>{title}</p>
                <p>{price}{isNaN(price) ? '' : ' zł'}</p>
            </div>
        </div >
    )
}