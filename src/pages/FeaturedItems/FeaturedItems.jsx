import React from 'react'
import './FeaturedItems.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedItems = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹ 2,225</span>
                <span className="featuredMoneyRate">-11.2 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className='featuredItem'>
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹ 1,050</span>
                <span className="featuredMoneyRate">-5.3 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className='featuredItem'>
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹ 3,173</span>
                <span className="featuredMoneyRate">+3.7 <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedItems