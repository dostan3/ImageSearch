import axios from "axios";
import { useState } from "react";

interface ApiResponseItem{
  displayLink:string;
  searchTime: string;
  link: string;


 
}

interface ApiResponse{
  items: ApiResponseItem[];
  searchInformation: {
    formattedTotalResults:string;
    searchTime: string;
  }
}


const  SearchPic = () => {
  const [userInput, setUserInput] = useState ('');
  const [searchResult, setSearchResult] = useState<ApiResponse | null>(null);
  
  const searchEngineId  = import.meta.env.VITE_GOOGLE_SEARCH_ID_KEY;
  const googleApiKey = import.meta.env.VITE_GOOGLE_APIKEY;
  
 
  const   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsLoading(true);
    
    const SearchUrl = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${searchEngineId}&searchType=image&num=5&q=${userInput}`

    
    try {
      const response = await axios.get<ApiResponse>(SearchUrl);
      setSearchResult(response.data);
      console.log(response.data) // Store the entire response
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
      
   
  

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
      <p>{searchResult.searchInformation.searchTime} sec</p>
      
      <div className="search-results">
      {searchResult.items.map((item, index) =>(
        <div key={index} className="">
        
          <div className="img-container">
            <img 
            src={item.link} 
            alt='Search results' />
          </div>
            
        </div>
      ))}
    </div>
    </>
      )}
    </>
);

};

export default SearchPic;