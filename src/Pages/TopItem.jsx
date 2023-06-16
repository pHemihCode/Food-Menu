import React from 'react'
import data from '../data'
function TopItem({menu, setMenu}) {
    const menuItems = [...new Set(data.map((Val) => Val.category))]
    const filterItems =(cat)=>{
        const newItems = data.filter((newItem) => (
            newItem.category === cat
        ))
        setMenu(newItems);
    }
  return (
    <div className='header-btn flex flex-col mb-10 items-center justify-center w-full'>
        <div className="the-header relative">
          <h1 className='font-medium text-black text-4xl mb-5'>Our Menu</h1>
        </div>
        <div className='flex flex-row justify-center text-white w-full items-center m-5'>
            <div className="all-btn the-btns">
            <button onClick={()=> setMenu(data)}>All</button>
            </div>
            {
                menuItems.map((items,id) => (
                    <div key={id} className="the-btns">
                        <button className='capitalize text-sm ' onClick={() => filterItems(items)}>{items}</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopItem