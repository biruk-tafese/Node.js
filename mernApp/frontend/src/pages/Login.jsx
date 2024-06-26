import {userState, useEffect, useState} from "react";
import { FaSignInAlt } from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {login, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner";
 

function Login() {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const { email, password} = formData;


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSucess, message} = useSelector(
    (state)=> state.auth)

   
   
    useEffect( ()=> {
      if(isError){
         toast.error(message)
      }
      if(isSucess || user) {
         navigate('/')
      }

      dispatch(reset())
   }
   ,[ user, isError, isSucess, message, navigate, dispatch])
 

     
   const onchange = (e) => {
            setFormData((prevState)=>({
                   
                ...prevState,
                [e.target.name]: e.target.value,
            }))
     }

     const onSubmit = (e) => {
       e.preventDefault();
       const userData = {
         email,
         password
       }

       dispatch(login(userData));
     }


     if(isLoading){
      return <Spinner />
     }
  return (
     <>
        <section className="heading">
         <h1>
            <FaSignInAlt /> Login
         </h1>
          <p>Login and start setting goals</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
             
              <div className="form-group">
              <input 
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={onchange}
                 />
              </div> 
              <div className="form-group">
              <input 
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter  password"
                    onChange={onchange}
                 />
              </div> 

              <div className="form-group">
                 <button type="submit" className="btn btn-block">
                     submit
                 </button>
              </div>
            </form>
        </section>
        
        
     </>
  )
}

export default Login
