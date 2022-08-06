
import {GiPiggyBank} from 'react-icons/gi';
import {FaThumbsUp} from 'react-icons/fa';
import {FaFileContract} from 'react-icons/fa';
import {BsChatLeftDotsFill} from 'react-icons/bs';
import {RiBillFill} from 'react-icons/ri';
import {GiVacuumCleaner} from 'react-icons/gi'
import {MdEngineering} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'



export const Skills = () => {
  return (
  
    <div id="skill" className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <p className='sm:text-3xl pb-10 text-2xl font-medium title-font text-black text-center font-lora'>Why Choose Us</p>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-8 border-b sm:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <GiPiggyBank className='w-full h-full  text-blue-500'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">No hidden cost, upfront pricing</h6>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaThumbsUp className='w-full h-full  text-blue-500'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">100% work satisfaction</h6>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r sm:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaFileContract className='w-full h-full  text-blue-500'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">Work from registered company</h6>
          </div>

        </div>
        <div className="p-8 border-b sm:border-r-0 lg:border-r-0 border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaBusinessTime className='w-full h-full  text-blue-500'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson"> Work done by experinced licenced engineers</h6>
          </div>
          
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r sm:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <MdEngineering className="w-full h-full  text-blue-500"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">Work around your schedules</h6>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 sm:border-r-0 lg:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <BsChatLeftDotsFill className="w-full h-full  text-blue-500"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">Free professional advices</h6>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r border-blue-500">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <RiBillFill className="w-full h-full  text-blue-500"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson"> No obligation estimations</h6>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <GiVacuumCleaner className="h-full w-full text-blue-500"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">We leave your premises clean & tidy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

