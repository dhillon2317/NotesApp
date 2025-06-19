import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='w-[100vw] place-self-center'>

            <div className='flex flex-row px-5 place-content-center w-[100%] place-self-center bg-[#c5c5c5] h-14  '>
                <div className='flex flex-row w-50 gap-5 place-content-between my-2 h-8 text-[1.5rem]'>

                    <NavLink id='navlink'
                        to={"/"} >
                        <p>{'{Write}'}</p>
                    </NavLink>

                    <NavLink id='navlink'
                        to={"/pastes"} >
                        {'{Notes}'}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;