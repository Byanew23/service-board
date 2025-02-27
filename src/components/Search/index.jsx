import React from 'react'
import { Dropdown } from '../Dropdown'

export const Search = () => {
    return <div className='flex flex-col mt-5'>
        <p>Намерете майстор и запазете час за консултация онлайн.</p>
        <Dropdown options={[1, 2, 3, 4, 5]} placeholder={'Категория'} />
        <Dropdown options={[1, 2, 3, 4, 5]} placeholder={'Категория'} />
        <Dropdown options={[1, 2, 3, 4, 5]} placeholder={'Категория'} />
        <Dropdown options={[1, 2, 3, 4, 5]} placeholder={'Категория'} />
    </div>
}