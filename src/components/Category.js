import React from 'react';
export function Category({ title, img }) {
    return (
        <div className='category'>
            <img src={img} alt={"zdjęcie kategori " + title}></img>
            <h4>{title}</h4>
        </div>
    )
}