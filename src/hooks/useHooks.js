import { useState } from 'react'
export function useBurgerToggle() {
    const [open, setOpen] = useState(false);

    return (
        { open, setOpen }
    )
}
export function useListing() {
    const [listing, setListing] = useState(null);
    return (
        { listing, setListing }
    )
}

