import React from 'react'

export function PreviewCard({ img = "", title = "", price = "" }) {
    console.log(img, title, price)
    return (
        <div class="previewcard">
            <figure>
                <img src={img} alt="pet food"></img>
            </figure>
            <div>
                <p>{title}</p>
                <p>{price} zł</p>
            </div>
        </div >
    )
}