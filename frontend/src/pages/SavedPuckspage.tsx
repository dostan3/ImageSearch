import { useAuth0 } from "@auth0/auth0-react"
import Header from "../Components/Header"
import ShowSavedPucks from "../Components/ShowSavedPucks"
import SignInSign from "../Components/SignInSign";

const SavedPucksPage = () => {

  const {isAuthenticated} = useAuth0();

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <>
          <h1>Here are your saved pucks</h1>
          <ShowSavedPucks />
        </>
      ) : (
        <SignInSign />
      )}
    </>
  );

      }
  

export default SavedPucksPage