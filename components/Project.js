import React from 'react';
import ProjectItem from './ProjectItem';
import Boatdubai from '../public/assets/Projects/Boatdubai.jpg';
import Property from '../public/assets/Projects/Property.jpg';
import Sport from '../public/assets/Projects/Sport.jpg';
import Personal from '../public/assets/Projects/Personal.jpg'
function Project() {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240] mx-auto px-4 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4 mt-0 mb-2 text-4xl font-medium leading-tight'>What I have Built</h2>
            <div className='grid gap-8 md:grid-cols-2'>
              
              <ProjectItem
              title='Property Finder' 
              background={Personal}
              projectUrl='/property'
              />
              <ProjectItem
              title='Boat Services' 
              background={Boatdubai}
              projectUrl='/property'
              />
              <ProjectItem
              title='Property Finder' 
              background={Property}
              projectUrl='/property'
              />
              <ProjectItem
              title='Method 3 Find Fitness' 
              background={Sport}
              projectUrl='/property'
              />

            </div>
        </div>
    </div>
  )
}

export default Project