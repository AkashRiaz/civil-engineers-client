import React from 'react';
import Heading from '../../../components/Heading/Heading';
import support from '../../../assets/features-icons/online-chat.png'
import team from '../../../assets/features-icons/architect.png'
import affordablePrice from '../../../assets/features-icons/service-3.png'
import construction from '../../../assets/features-icons/service-4.png'
import building from '../../../assets/features-icons/service-5.png'
import engineering from '../../../assets/features-icons/service-6.png'
import hiring from '../../../assets/features-icons/candidate.png'
import design from '../../../assets/features-icons/plan.png'

const OurFeatured = () => {
    return (
        <div className='my-16'>
            <div className='mb-6'>
            <Heading heading="Introducing Our Features" subHeading="We understand the importance of innovation and professionalism and work with the best people to achieve this."/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6'>
                <div className=' md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={team} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Professional Team</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={engineering} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Engineering</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={support} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>24/7 support</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={affordablePrice} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Affordable Price</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={construction} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Construction</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className=' md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={building} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Building</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className=' md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={hiring} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Engineer Hiring</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
                <div className=' md:w-96 w-80 mx-auto flex items-center justify-center flex-col space-y-1'>
                    <img src={design} alt="" className='w-16'/>
                    <h4 className='text-xl font-bold text-white'>Best Design</h4>
                    <p className='w-9/12 text-center text-sm font-light'>It is a long established fact that reader by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
    );
};

export default OurFeatured;