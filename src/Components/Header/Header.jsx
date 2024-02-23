import React from 'react'
import Logo from '../../assests/lawlogo.png'

const Header = () => {
  return (
    <div className="flex w-screen px-15 justify-center items-center gap-x-56">
      <img src={Logo} alt="" />
    
    <div className="menu">
      <ul className="flex justify-center items-center gap-5 text-gray-700 text-lg leading-normal">
        <li>Home</li>
        <li>Message</li>
        <li>Lawyers Directory</li>
        <li>Legal Information</li>
      </ul>
      </div>

      <div className="username">
        <div className="flex w-64 items-center gap-4 flex-shrink-0">
          <div className=" w-20 h-20 flex-shrink-0 bg-gray-400 rounded-full"></div>
          <div>
            <h1 className='text-black font-roboto font-bold text-2xl'>Mozzam</h1>
            <p>Adv High Court</p>
            <p><a href="#">Visit Profile</a></p>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Header
