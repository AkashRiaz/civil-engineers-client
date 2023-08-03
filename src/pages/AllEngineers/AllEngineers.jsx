import React, { useEffect, useState } from 'react';

const AllEngineers = () => {
    const [allEngineers, setAllEngineers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/engineers')
      .then(res => res.json())
      .then(data => setAllEngineers(data));
  }, []);
    return (
        <div>
            {
                allEngineers.map(engineer =>{
                    return(
                        <div>
                            <h2>{engineer.name}</h2>
                            <h3>{engineer.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllEngineers;