
import '../src/assets/styles/App.css'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import mainpic from './img/boredape.png';

function App() {


  return (
    <>
    <header>

    <div>

    <h1>Pick Your Puck</h1>
    <p>or Search for Kittens, Because It's More Fun</p>
    </div>

    <div>
    <LoginButton />
    <LogoutButton />
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
