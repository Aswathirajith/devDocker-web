import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from './utilis/constant';
import {removeUser} from './utilis/userSlice'

const Navbar = () => {
  const user=useSelector(state=>state.user);
  const disapath=useDispatch();
  const navigate=useNavigate();

const handleChange=async()=>{
  try {
    await axios.post(BASE_URL+"/logout");
    disapath(removeUser());
    navigate('/login');


  } catch (error) {
    console.log(error);
  }
}


  return (
    <div>
      <div className="navbar bg-zinc-700 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">👩🏻‍💻DEVDOCKER</a>
  </div>
 {user && <div className="flex gap-2">
    <p className='mt-2'> Welcome {user.firstName}</p>
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleChange}>Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
    </div>
  )
}

export default Navbar
