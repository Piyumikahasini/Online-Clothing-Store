import React from 'react'
import Navbar from './Navbar'
import SocialIcons from './SocialIcons'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
    {/* logo */}

    <Link to={'/'} className='flex items-center gap-x-2'><img src={logo} alt="logoImg" height={31} width={31}/>
      <span className='bold-24 hidden xs:flex'>Merchanza</span>
     </Link>

     {/* Navbar */}
     <div>
      <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"}/>
        </div>

      <SocialIcons/>
      <hr />
      <div>Copyright &copy; Merchanza | All right reserved.</div>
      </div>
      </footer>
  )
}

export default Footer
