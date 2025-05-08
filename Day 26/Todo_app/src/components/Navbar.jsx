import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='flex  justify-between gap-3 bg-blue-800 text-white py-2'>
                <div className="logo">
                    <span className='font-bold text-xl mx-8'>iTodo</span>
                </div>
                <ul className='flex gap-8 mx-9'>
                    <li className='cursor-pointer hover:font-bold'>Home</li>
                    <li className='cursor-pointer hover:font-bold'>Your Taks</li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar