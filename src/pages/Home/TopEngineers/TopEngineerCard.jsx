import React from 'react';
import './TopEngineerCard.css'
import { Link } from 'react-router-dom';

const TopEngineerCard = ({engineer}) => {
    const {_id,name, title, description} = engineer;
    // const id =109;
    return (
        <div className='md:mx-5'>
            <div className='single-card'>
               <div className='img-box'>
                <img src="https://img.freepik.com/premium-photo/portrait-young-man-sitting-his-desk-office_484651-5103.jpg" alt="" />
               </div>
               <div className='content space-y-1'>
                  <h2 className='text-[16px] font-bold'>{name}</h2>
                  <h3 className='text-sm font-semibold'>{title}</h3>
                  <p className='text-xs font-light '>{description.slice(0, 300)}....</p>
                  <div>
                  <Link className='hiring-btn mt-2' to={`/engineers/${_id}`}>Profile</Link>
                  </div>
               </div>
               <div className='review'>
                      <h2>Best Engineer</h2>
               </div>
               
            </div>
        </div>
    );
};

export default TopEngineerCard;