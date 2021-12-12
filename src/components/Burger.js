import React from 'react';
export function Burger({ open, setOpen }) {
    return (
        <div className={open ? 'burgerToggle burgerTrue' : 'burgerToggle'} onClick={() => {
            setOpen(!open)
            console.log("clicked", open)
        }}>
            <div />
            <div />
            <div />
        </div>
    )
}