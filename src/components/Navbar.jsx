import logo from '../assets/images/logo-transparant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({isLogged, username, cartCount}) => {
    return (
        <div className="bg-white fixed w-full -translate-x-2/4 left-2/4 top-0 z-50">
            <nav className="md:w-5/6 sm:w-full flex align-middle justify-between content-container bg-white my-5 px-7 h-20 z-20 m-auto">
                <a href="/">
                    <img src={logo} className='h-12 logo-nav' draggable="false" alt="logo" />
                </a>
                <div className='flex align-middle gap-4'>
                    {!isLogged ? (
                        <a href="/sign-in">
                            <button className='px-8 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-900'>Sign In</button>
                        </a>
                    ) : (
                        <div className="flex items-center gap-8">
                            <h6 className='text-blue-800 font-bold text-lg whitespace-pre w-36 overflow-hidden md:w-auto'>{username} <FontAwesomeIcon icon={faUser}/></h6>
                            <a href='/cart' className='text-white whitespace-nowrap bg-blue-800 hover:bg-blue-950 p-3 rounded-2xl text-lg font-bold'><FontAwesomeIcon icon={faCartShopping}/> {cartCount}</a>
                        </div>
                    )}
                </div>
            </nav>
        </div>

    )
} 

export default Navbar;