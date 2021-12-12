import { useState } from 'react'
export function useBurgerToggle() {
    const [open, setOpen] = useState(false);

    return (
        { open, setOpen }
    )
}

