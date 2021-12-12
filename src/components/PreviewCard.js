import React from 'react'

export function PreviewCard({ e, setListing }) {
    console.log(e)
    let { img, title, price } = e.preview;
    console.log(img, title, price)
    return (
        <div class="previewcard" onClick={() => setListing(e)}>
            <img src={img} alt="pet food"></img>
            <div>
                <p>{title}</p>
                <p>{price}{isNaN(price) ? '' : ' zł'}</p>
            </div>
        </div >
    )
}