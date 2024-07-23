import React from 'react';
import { RiYoutubeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const SocialIcons =() =>{
  return (
    <div>
      <Link to={''} className='text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>

    </div>
  );
}

export default SocialIcons;
