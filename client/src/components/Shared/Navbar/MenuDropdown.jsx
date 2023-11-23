import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import HostModal from '../../Modal/HostModal'
import { becomeHost } from '../../../api/auth'
import toast from 'react-hot-toast'
import useRole from '../../../hooks/useRole'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { user, logOut } = useAuth()
  const [role] = useRole();

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const modalHandler = async () => {
    // request to be host
    console.log('requset');
    try {
      const res = await becomeHost(user?.email);
      console.log(res);
      if (res.modifiedCount > 0) {
        toast.success("Success, Please wait for admin confirmation")
      } else {
        toast.success('Please, wait for admin approval 🤜');
      }
    } catch (e) {
      console.log(e.message);
      toast.error(e.message)
    } finally {
      setIsModalOpen(false)
    }

  }

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>

          {(!user || !role || role == 'guest') && 
          <button
            onClick={() => setIsModalOpen(true)} className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Host your home
          </button>
          }

        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            {
              user ? <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                  Dashboard
                </Link>
                <button
                  onClick={logOut}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                  Logout
                </button>
              </> :
                <>
                  <Link
                    to='/login'
                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                    Login
                  </Link>

                  <Link
                    to='/signup'
                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                    Sign Up
                  </Link>
                </>
            }


          </div>
        </div>
      )}

      <HostModal modalHandler={modalHandler} isOpen={isModalOpen} closeModal={closeModal} ></HostModal>

    </div>
  )
}

export default MenuDropdown
