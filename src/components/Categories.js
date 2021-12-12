import React from 'react';
import { Category } from './Category';
export function Categories({ categories }) {
    return (
        <div className='categories'>
            <div className='header'>
                <h3>Kategorie </h3>
                <h5><a>Zobacz Wszystkie</a></h5>
            </div>
            <div className='list'>
                {categories.map(e => {

                    console.log(e)
                    return (
                        <Category title={e.title} img={e.img}></Category>
                    )
                })}
            </div>
        </div>
    )
}