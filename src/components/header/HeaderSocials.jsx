import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank_"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank_"><FaGithub /></a>
        <a href="https://dribble.com" target="_blank_"><FiDribbble /></a>
    </div>
  )
}
  // npm install react-icons --save

export default HeaderSocials