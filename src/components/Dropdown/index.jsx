import React, { useState } from 'react'

export const Dropdown = ({ options, placeholder }) => {
    const [curr, setCurr] = useState(undefined)
    const [open, setOpen] = useState(false)

    return <div className='w-60 relative m-3'>
        <div onClick={() => setOpen(!open)} className='border border-gray-500 h-10 flex items-center justify-between '>
            <span className={`ml-5 ${!curr && "text-gray-600"}`}>{curr ?? placeholder}</span>
            <span onClick={(e) => { if (curr) { e.stopPropagation(); setCurr(undefined) } }} className='w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer'>
                {curr ? <span className='text-2xl'>×</span> : <span>▼</span>}
            </span>
        </div>
        <div className={`absolute border border-grey-500 bg-white w-60 ${open ? 'block' : 'hidden'}`}>
            {options.map((opt) => { return <div className={`hover:bg-gray-400 p-2`} onClick={() => { setCurr(opt); setOpen(false) }}>{opt}</div> })}
        </div>
    </div>
}