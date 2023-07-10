import{RxHamburgerMenu} from 'react-icons/rx'
import{IoCloseSharp} from 'react-icons/io5'
import { useRef, useState } from 'react'

export default function Menu() {

    const menuContainer = useRef(null)
    const [openClose, setOpenClose] = useState(false)

    function openMenu(){
        menuContainer.current.style.display = 'flex'
        setOpenClose(!openClose)

    }

    function closeMenu(){
        menuContainer.current.style.display = 'none' 
        setOpenClose(!openClose)
    }

    return (
    <>
    {openClose ? <IoCloseSharp className='menu-icon' onClick={closeMenu}/> : <RxHamburgerMenu id='menu-ham' className='menu-icon' onClick={openMenu}/>}
    <ul className="menu" ref={menuContainer}>
        <li className='menu-opt'>Home</li>
        <li className='menu-opt'>About</li>
        <li className='menu-opt'>Lenses</li>
        <li className='menu-opt'>Frames</li>
    </ul>
    </>
  )
}
