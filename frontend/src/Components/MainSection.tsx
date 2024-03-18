import { useAuth0 } from "@auth0/auth0-react"
import SearchPic from "./SearchPic"
import SignInSign from "./SignInSign"
import mainpic from '../img/boredape.png';

const MainSection = () => {

    const { isAuthenticated } = useAuth0()
    
    return (
        <>

<div className='img-container'>
        <img src={mainpic} alt=""  className='mainpic'/>
      </div>
  
        {isAuthenticated ?  <SearchPic /> : <SignInSign /> }
        </>
    )
}

export default MainSection