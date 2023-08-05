import React from "react";
import { useLoaderData } from "react-router-dom";
import SocialLink from "../../components/SocialLink/SocialLink";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";


const EngineerProfile = () => {
  const engineerDetails = useLoaderData();
  const {
    _id,
    name,
    title,
    description,
    institute,
    passing_year,
    experience,
    address,
    extra_skills,
    per_day_charge,
    IEB_certified,
    total_hiring,
    work_place,
  } = engineerDetails;
  return (
    <div className="md:mx-20 mx-4">
      <div className="text-center pt-24">
        <h2>{engineerDetails ? engineerDetails.name : "Not Found"} Profile</h2>
      </div>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1">
            <div className="profile flex flex-col justify-center items-center md:mt-4 mt-4">
              <img
                src="https://avatars.githubusercontent.com/u/99094676?v=4"
                alt=""
                className="rounded-full w-24 h-24"
              />
              <div className="all-link mt-3">
                <div className="social-link">
                  <SocialLink></SocialLink>
                </div>
                <div>
                  <div className="portfolio-link flex items-center text-sm mt-1">
                  <span>
                      <FiExternalLink></FiExternalLink>
                    </span>
                    <button className="ml-1">Personal Website</button>
                    
                  </div>
                  <div className="portfolio-link flex items-center text-sm mt-1">
                    <span>
                      <AiOutlineMail></AiOutlineMail>
                    </span>
                    <h2 className="ml-1">akashriaz05@gmail.com</h2>
                  </div>
                  <div className="portfolio-link flex items-center text-sm mt-1">
                  <span>
                      <BsWhatsapp></BsWhatsapp>
                    </span>
                    <button className="ml-1">01612264090</button>
                    
                  </div>
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
                    <td class="px-4 py-2">
                      <span> UserId:</span>
                      <span> {_id}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Name:</span> <span>{name}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Institute:</span> <span>{institute}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      Title: <span>{title}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Description:</span> <span>{description}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Passing Year:</span> <span>{passing_year}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Experience:</span> <span>{experience}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Per day Charge:</span>{" "}
                      <span>${per_day_charge}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>IEB Certified:</span> <span>{IEB_certified}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Total Hiring:</span> <span>{total_hiring}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Work Place:</span> <span>{work_place}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Address:</span> <span>{address}</span>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <span>Others Skills:</span> <span>{extra_skills}</span>
                    </td>
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
