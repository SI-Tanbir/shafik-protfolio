import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      <a className="btn btn-ghost text-xl">Shafikul Islam</a>


     <div>

     <ul className='flex ml-[25vw] gap-10 text-2xl'>
        <li>Home</li>
        <li>About Me</li>
        <li>Contract Me</li>
    </ul>
     </div>
    </div>

   


    <div className="flex-none gap-2">
     
      <div className="flex gap-10">
      <input type="checkbox" value="synthwave" className="mt-2 toggle theme-controller" />

        <button className='btn btn-outline btn-secondary'>Hire me</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar