
import '../src/assets/styles/App.css'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import SearchPic from './Components/SearchPic'
import Profile from './Components/Profile';
import mainpic from './img/boredape.png';
import { useAuth0 } from '@auth0/auth0-react';
import SignInSign from './Components/SignInSign';

function App() {

  const { isAuthenticated } = useAuth0()


  return (
    <>
    <header>

    <div>

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

    <div className='img-container'>
      <img src={mainpic} alt=""  className='mainpic'/>
    </div>

      {isAuthenticated ?  <SearchPic /> : <SignInSign /> }
   
  
    
    </>
  )
}

export default App

