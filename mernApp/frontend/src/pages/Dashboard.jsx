import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import GoalsForm from '../components/GoalsForm'

const Dashboard = () => {

  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect( () => {
         
        if(!user) {
          navigate('/login')
        }
  }, [user, navigate])
  return (
    <>
      <section className='heading'>
         <h1>Welcome {user && user.name}</h1>
         <p>Goals Dashboard</p>

      </section> 
      <GoalsForm />
    </>
  )
}

export default Dashboard
