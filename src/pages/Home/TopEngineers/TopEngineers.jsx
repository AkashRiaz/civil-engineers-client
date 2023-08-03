import React, { useEffect, useState } from 'react';
import TopEngineerCard from './TopEngineerCard';

const TopEngineers = () => {
  const [allEngineers, setAllEngineers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/engineers')
      .then(res => res.json())
      .then(data => setAllEngineers(data));
  }, []);

  // Filter the top 6 engineers based on total hiring number
  const topSixEngineers = allEngineers
    .sort((a, b) => b.total_hiring - a.total_hiring)
    .slice(0, 6);

  return (
    <div>
      <h2>Top Engineers</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-16">
        {topSixEngineers.map(engineer => {
          return (
            <div key={engineer._id}>
               <TopEngineerCard engineer={engineer}></TopEngineerCard>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TopEngineers;
