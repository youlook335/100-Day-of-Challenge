import React from 'react'
import Button from './Button'

function Navbar({count}) {
    return (
        <div>Navbar
            <Button count={count} />
        </div>
    )
}

export default Navbar