import React from 'react';

const Heading = ({heading, subHeading}) => {
    return (
        <div className='text-center my-5'>
            <h1 className='text-3xl md:text-4xl font-bold'>{heading}</h1>
            <p className='text-sm font-light w-1/2 mx-auto mt-3'>{subHeading}</p>
        </div>
    );
};

export default Heading;