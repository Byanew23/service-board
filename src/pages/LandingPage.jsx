import axios from 'axios'
import { Search } from '../components'
import handyman from '../components/assets/handyman.png'

export const LandingPage = () => {


    return <div><div className='h-45'></div>
        <div className='flex justify-between'><Search /><img className='h-100' alt='handyman' src={handyman} /></div></div>
}