import React from 'react'
import './Home.css'
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import Chart from '../Chart/Chart';
import { userData } from '../../data';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedItems />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </div>
  )
}

export default Home