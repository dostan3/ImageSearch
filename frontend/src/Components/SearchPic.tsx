import axios from "axios";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

interface ApiResponseItem{
  displayLink:string;
  searchTime: string;
  link: string;
  htmlCorrectedQuery:string;
  spelling:string;
  fileFormat:string;
  title:string;

}

interface spellingCorrection{
  htmlCorrectedQuery:string;
}

interface ApiResponse{
  items: ApiResponseItem[];
  spelling:spellingCorrection;
  searchInformation: {
  searchTime: string;
  }

}

// interface auth0{
//   sub:string

// }

const  SearchPic = () => {
  const [userInput, setUserInput] = useState ('');
  const [searchResult, setSearchResult] = useState<ApiResponse | null>(null);
  // const [userId, setUserId] = useState <auth0 | null>(null)



  const searchEngineId  = import.meta.env.VITE_GOOGLE_SEARCH_ID_KEY;
  const googleApiKey = import.meta.env.VITE_GOOGLE_APIKEY;
  
  const { user} = useAuth0();

  console.log(user)
 
  const   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsLoading(true);
    
    const SearchUrl = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${searchEngineId}&searchType=image&num=10&q=${userInput}`

    
    try {
      const response = await axios.get<ApiResponse>(SearchUrl);
      setSearchResult(response.data);
      console.log(response.data) 
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  

  const SavePuck = async (item: ApiResponseItem) => {
    const saveUrl = 'http://localhost:3000/api/favorites';
    // const username = userId;
    try{ 
      if  (user?.sub){

        const response = await axios.post(saveUrl, {
          username: user.sub,
          link: item.link,
          fileFormat: item.fileFormat,
          title:item.title,
        })
        console.log('bilden är nu sparad', response.data);
      }
        
    }catch (error) {
      console.error("error saving puck", error);

    }
  
  }      
   
  

return(
    <>

    <form onSubmit={handleSubmit}>
      <input 
      type="text"
       value={userInput} 
       onChange={(e) => setUserInput(e.target.value)}
       placeholder="Search for pucks"/>
      
      <button>Puck-it</button>
    </form>

    {searchResult && (
      
      <>
      <div className="search-info">
        {searchResult?.spelling?.htmlCorrectedQuery && (
          <div className="correction">
        Did you mean: <span dangerouslySetInnerHTML={{ __html: searchResult.spelling.htmlCorrectedQuery }}></span>?
        </div>
          )}
      <p>{searchResult.searchInformation.searchTime} sec</p>

      </div>
      
      <div className="search-results">
      {searchResult.items.map((item, index) =>(
        
    
          <div key={index} className="search-img-container">
            <img 
            onClick={()=> SavePuck(item)}
            src={item.link} 
            alt='Search results' />
          </div>
            
        
      ))}
    </div>
    </>
      )}
    </>
);

};

export default SearchPic;