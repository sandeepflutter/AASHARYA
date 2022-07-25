
import {GiPiggyBank} from 'react-icons/gi';
import {FaThumbsUp} from 'react-icons/fa';
import {FaFileContract} from 'react-icons/fa';
import {BsChatLeftDotsFill} from 'react-icons/bs';
import {RiBillFill} from 'react-icons/ri';
import {GiVacuumCleaner} from 'react-icons/gi'
import {MdEngineering} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'

export default function Skills() {

  return (
    <div id="skill" className="bg-gray-900 h-screen">
      <div className="max-w-3xl mx-auto">
        <div>
        <section class="text-white font-bold bg-gray-900 body-font items-center justify-center">
<div class="px-5 py-11 flex flex-col">
    <p className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center'>Why Choose Us</p>
<div className="w-full px-2 py-10 sm:px-0 justify-center">
<div class="grid grid-cols-4 gap-20">
  <div className='w-40 h-40'>
    <GiPiggyBank className='w-full h-full pb-5'/>
    <p>
      No hidden cost, upfront pricing
    </p>
  </div>
  <div  className='w-40 h-40'>
    <FaThumbsUp className='w-full h-full pb-5'/>
  <p>
    100% work satisfaction    </p>
  </div>
  <div  className='w-40 h-40'>
    <FaFileContract className='w-full h-full pb-5'/>
    <p>
      Work from registered company
    </p></div>
  <div  className='w-40 h-40'>
  <FaBusinessTime className='w-full h-full pb-5'/>
  <p>
    Work around your schedules
    </p>
  </div>
  <div className='w-40 h-40'>
  <BsChatLeftDotsFill className="w-full h-full pb-5"/>
  <p>
      Free professional advices
    </p>
  </div>
  <div className='w-40 h-40'>
  <RiBillFill className="w-full h-full pb-5"/>
  <p>
      No obligation estimations
    </p>
  </div>
  <div className='w-40 h-40'>
    <MdEngineering className="w-full h-full pb-5"/>
    <p>
     Work done by experinced licenced engineers
    </p></div>
  <div className='w-40 h-40'>
    <GiVacuumCleaner className="h-full w-full pb-5"/>
  <p>
      We leave your premises clean & tidy
    </p>
  </div>
</div>
</div>
</div>
</section>
        </div>
      </div>
    </div>
   
  )
}
