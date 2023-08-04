import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SocialLink from '../../components/SocialLink/SocialLink';

const EngineerProfile = () => {
    const engineerDetails =useLoaderData()
    const {_id, name, title, description,institute,passing_year,experience,extra_skills,per_day_charge,IEB_certified,total_hiring,work_place} = engineerDetails
    return (
        <div className='md:mx-20 mx-4'>
            <div className='text-center pt-24'>
            <h2>{engineerDetails? engineerDetails.name:'Not Found'} Profile</h2>
            </div>
            <div>
               <div className='grid md:grid-cols-3 grid-cols-1'>
                  <div className='col-span-1'>
                    <div className="profile flex flex-col justify-center items-center md:mt-4 mt-4">
                        <img src="https://avatars.githubusercontent.com/u/99094676?v=4" alt="" className='rounded-full w-24 h-24'/>
                        <div className='all-link mt-3'>
                       <div className='social-link'>
                        <SocialLink></SocialLink>
                       </div>
                       <div className='portfolio-link'>
                             <h2>My Website</h2>
                       </div>
                    </div>
                    </div>
                    
                  </div>
                  <div class="container mx-auto py-6 col-span-2">
    <div class="w-full">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left">Engineers Information</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="border-b">
            <td class="px-4 py-2">Name: {name}</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-2">Title:{title}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
               </div>
            </div>
        </div>
    );
};

export default EngineerProfile;