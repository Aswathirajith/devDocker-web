import axios from "axios"
import {  useState } from "react"
import { BASE_URL } from "./utilis/constant"
import { useDispatch } from "react-redux"
import {addUser} from './utilis/userSlice'
import { Link, useNavigate } from "react-router"

const Login=()=>{
    const [emailInput,setEmailInput]=useState('')
    const [passwordInput,setPasswordInput]=useState('')
    const [error,setError]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
   

    
        const handleLogin=async()=>{
            try {
            const res=await axios.post(BASE_URL+'/login',{emailId:emailInput,password:passwordInput})
            console.log(res.data)
            dispatch(addUser(res.data))
            return navigate('/feed')
        } catch (err) {
          document.getElementById('my_modal_4').showModal()
          setError(err?.response?.data)
        }
       
           }

    return (
        <div className="flex justify-center">
  <div className="card card-border bg-zinc-700  border-y-green-50 w-96 mt-55 shadow-2xl" >
  <div className="card-body">
    <h2 className="card-title text-white justify-center">LOGIN</h2>
    <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input onChange={(e)=>setEmailInput(e.target.value)} value={emailInput} type="email" placeholder="mail@site.com" required />
</label>
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
  value={passwordInput}
  onChange={(e)=>setPasswordInput(e.target.value)}
    type="password"
    required
    placeholder="Password"
  />
</label>
<p className="validator-hint hidden">
   Enter valid password and Email
</p>
    <div className="card-actions justify-center pt-2">
      <button onClick={()=>handleLogin()} className="btn btn-primary">Login</button>
    </div>
    <p className="text-white">New to DevTinder? Create a new account <span className="text-primary"><Link to={'/signup'}>HERE</Link></span></p>
    
  </div>
</div>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-5/12 max-w-5xl -mt-40">
    <h3 className="font-bold text-lg">ERROR</h3>
    <p className="py-4">{error}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
    )
}

export default Login
