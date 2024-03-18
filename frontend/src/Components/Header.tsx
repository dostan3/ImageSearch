import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from 'react-router-dom';


const header = () =>{

    const { isAuthenticated } = useAuth0()

    const navigate = useNavigate();

  const Navigate = () =>{
    navigate('/');
  }


    return(

        <>

<header>
  
  <div onClick={Navigate} className="logo-slogan">

  <h1>Pick Your Puck</h1>
  <p>or Search for <strong>Kittens</strong>, Because It's More <strong>Fun</strong></p>
  </div>

  <div className='user'>

  {isAuthenticated ?
  <>
    <Profile /> 
  <LogoutButton />
  
  </> 
   : <LoginButton />}

  </div>

  </header>
        </>

    )
}

export default header 