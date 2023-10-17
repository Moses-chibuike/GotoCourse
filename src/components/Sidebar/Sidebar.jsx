import GenericButton from './GenericButton'
import Logo from './Logo'
import { IoMdArrowDropright } from 'react-icons/io'
import { PiExamBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <nav className='gap-4 z-30 fixed flex flex-col top-0 bottom-0 h-[100vh] py-10 px-5 left-0 border-2 bg-[#0c2191] w-72 border-[#0c2191]'>
      <Logo />

      <section className='mt-10 w-full'>
        <button className='border w-full rounded-lg bg-[#004db6] text-sm p-1 border-[#004db6] text-white'>
          Get help from G-mind AI
        </button>
      </section>

      <section className='mt-10'>
        <h2 className='text-xl text-white'>Course Content</h2>

        <div className='flex flex-col gap-6 mt-3'>
          <Link to='/excel-basics'>
            <GenericButton
              SideIcon={IoMdArrowDropright}
              optionable={true}
              text={'EXCEL BASICS'}
            />
          </Link>

          <Link to='/main-exam'>
            <GenericButton
              SideIcon={PiExamBold}
              optionable={true}
              text={'EXCEL CBT'}
            />
          </Link>
        </div>
      </section>

      <section className='mt-auto'>
        <div className='flex flex-col gap-6 mt-3'>
          <Link to='/select-exam'>
            <GenericButton
              SideIcon={AiOutlinePlus}
              optionable={true}
              text={'New Content'}
              className='font-bold bg-white text-[#0c2191!important]'
            />
          </Link>

          <GenericButton
            SideIcon={PiExamBold}
            text={'CBT'}
            className='font-bold bg-white text-[#0c2191!important]'
          />
          <GenericButton
            text={'Go back to dashoard'}
            className='font-bold bg-orange-700'
          />
        </div>
      </section>
    </nav>
  )
}

export default Sidebar