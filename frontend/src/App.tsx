
import { useState } from 'react';
import '../src/assets/styles/App.css'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile';
import mainpic from './img/boredape.png';
import { useAuth0 } from '@auth0/auth0-react';

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

    <form action="">
      <input type="text" />
      <button>Puck-it</button>
    </form>
    

 
    
    </>
  )
}

export default App
