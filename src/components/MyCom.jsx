import React, { useState } from 'react';

const MyCom = () => {
    const [number, setNumber] = useState(0)
    const totalNumber =()=>{
        setNumber(number + 1)
    }
    return (
        <div>
            <button onClick={totalNumber}>Increase</button>
        </div>
    );
};

export default MyCom;