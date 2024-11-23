import logo from '../assets/images/logo-transparant.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav className="w-full flex align-middle justify-between content-container bg-white my-5 px-7 h-20 z-20">
            <a href="#">
                <img src={logo} className='h-12 logo-nav' draggable="false" alt="logo" />
            </a>
            <div className='flex align-middle gap-4'>
                <button className='px-8 py-2 rounded-md border-blue-700 border-2 text-blue-700 hover:bg-blue-100'>Sign In</button>
                <button className='px-8 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-900'>Sign Up</button>
            </div>
        </nav>

    )
} 

export default Navbar;