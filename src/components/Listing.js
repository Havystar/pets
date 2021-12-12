import React from 'react';
export function Listing(e) {
    console.log(e.e.preview);
    let { img, title, price } = e.e.preview;
    let { desc, category, size = null, date, ammount } = e.e.details
    date = new Date(date);
    return (
        <div className='Listing'>
            <img src={img}></img>
            <div>
                <h2>{title}</h2>
                <span>
                    <h4>{isNaN(price) ? "Za darmo" : price + " zł"}</h4>
                    {isNaN(ammount) ? '' : <h4>ilość: {ammount} </h4>}
                    <h4>Kategoria: {category}</h4>

                </span>
            </div>
            <p>{desc}</p>
            {size == null ? null : <h5>Rozmiar: {size}</h5>}
            {date == null ? null : <h5>Ważne do: {date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear()}</h5>}




        </div >
    )
}