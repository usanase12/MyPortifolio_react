import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='absolute bottom-0 w-full '>
    <div className='bg-white flex justify-center items-center h-20 flex-col mb-8'>
      {/* Icons section */}
      <div className='flex space-x-14 mb-8'>
      <a href="https://twitter.com/Usanase1_" target="_blank" rel="noopener noreferrer">
        <button className='rounded-full border-2 border-green-500 py-3 px-3'>
        <FaTwitter/>
        </button>
        </a>
        <a href="https://www.instagram.com/usanase_sandrine_/?next=%2F" target="_blank" rel="noopener noreferrer">
        <button className='rounded-full border-2 border-green-500 py-3 px-3'>
            <FaInstagram/>
        </button>
        </a>
        <a href="https://www.linkedin.com/in/usanase-sandra-602489296/" target="_blank" rel="noopener noreferrer">
       <button className='rounded-full border-2 border-green-500 py-3 px-3'>
        <FaLinkedin/>
        </button>
        </a>
        <a href="https://github.com/usanase12" target="_blank" rel="noopener noreferrer">
        <button className='rounded-full border-2 border-green-500 py-3 px-3'>
            <FaGithub/>
        </button>
        </a>
      </div>

      {/* Copyright text */}
      <div className='text-black'>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  </div>
  )
}

export default Footer