import React, { useState } from 'react'
import TopItem from './TopItem'
import data from '../data'
function NavBar() {
  const [menu, setMenu] = useState(data)
  return (
    <div  className="w-11/12 m-auto">
       <div>
       <TopItem menu={menu} setMenu={setMenu}/>
       </div>
       <div className="w-54 grid grid-cols-3 gap-8 max-sm:grid-cols-none">
        {
          menu.map((menus) => {
            const {title, category, price, img, desc, id} = menus
            return (
               <div key ={id} className='each-grid bg-white rounded-md'>
               <img src={img} alt={title} className='h-72 w-full rounded-t-md '/>
               <div className="content m-5">
               <div className="title-price flex flex-row justify-between ">
                <h1 className='capitalize font-medium text-slate-800 text-xl'>{title}</h1>
                <p className='bg-red-500 px-3 rounded-md py-1 text-white text-md'>${price}</p>
               </div>
                <p className='text-slate-500 my-5'>{desc}</p>
               </div>
               </div>
            )
          })
        }
       </div>
    </div>
  )
}
 
export default NavBar